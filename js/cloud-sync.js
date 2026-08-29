// ============================================================
// CHUCHIENG CLOUD SYNC
// ============================================================
// File này làm 3 việc:
//   1. "Theo dõi" mọi thay đổi trong localStorage (tiến độ học,
//      lịch ôn SRS, điểm quiz, số xu...) — tất cả đều có tiền tố "chuchieng:"
//   2. Khi người dùng đăng nhập, tự động đẩy dữ liệu lên Firestore
//      và tải dữ liệu mới nhất về khi mở trên thiết bị khác.
//   3. Hiển thị 1 nút tròn nhỏ ở góc màn hình để đăng nhập / xem
//      trạng thái đồng bộ.
//
// Không cần sửa file này. Chỉ cần điền thông tin ở js/firebase-config.js
// ============================================================

(function () {
  const KEY_PREFIX = "chuchieng:";
  const META_KEY = "__chuchieng_sync_meta"; // không đồng bộ, chỉ lưu local
  const DEBOUNCE_MS = 2000;

  // Khai báo sớm vì renderWidget()/ensureWidget() có thể được gọi ngay cả
  // khi Firebase chưa được cấu hình (nhánh unconfigured bên dưới).
  let widgetEl = null;
  let panelOpen = false;

  const hasFirebaseConfig =
    typeof CHUCHIENG_FIREBASE_CONFIG !== "undefined" &&
    CHUCHIENG_FIREBASE_CONFIG.apiKey &&
    CHUCHIENG_FIREBASE_CONFIG.apiKey.indexOf("DÁN_") === -1;

  // ------------------------------------------------------------------
  // 1) Theo dõi thay đổi localStorage (chạy được dù chưa cấu hình Firebase)
  // ------------------------------------------------------------------
  const nativeSetItem = localStorage.setItem.bind(localStorage);
  const nativeRemoveItem = localStorage.removeItem.bind(localStorage);
  let pushTimer = null;
  let onLocalChange = null; // gán sau khi Firebase sẵn sàng

  localStorage.setItem = function (key, value) {
    nativeSetItem(key, value);
    if (key.indexOf(KEY_PREFIX) === 0) scheduleLocalChange();
  };
  localStorage.removeItem = function (key) {
    nativeRemoveItem(key);
    if (key.indexOf(KEY_PREFIX) === 0) scheduleLocalChange();
  };

  function scheduleLocalChange() {
    setMeta({ lastLocalChangeAt: Date.now() });
    if (pushTimer) clearTimeout(pushTimer);
    pushTimer = setTimeout(function () {
      if (onLocalChange) onLocalChange();
    }, DEBOUNCE_MS);
  }

  function getMeta() {
    try {
      return JSON.parse(localStorage.getItem(META_KEY) || "{}");
    } catch (e) {
      return {};
    }
  }
  function setMeta(patch) {
    const m = getMeta();
    Object.assign(m, patch);
    nativeSetItem(META_KEY, JSON.stringify(m));
  }

  function collectLocalData() {
    const data = {};
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (k && k.indexOf(KEY_PREFIX) === 0) {
        data[k] = localStorage.getItem(k);
      }
    }
    return data;
  }

  function applyRemoteData(data) {
    // Xoá hết key cũ (chuchieng:) trước khi ghi đè để tránh rác của thiết bị khác để lại
    const toRemove = [];
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (k && k.indexOf(KEY_PREFIX) === 0) toRemove.push(k);
    }
    toRemove.forEach(nativeRemoveItem);
    Object.keys(data || {}).forEach(function (k) {
      nativeSetItem(k, data[k]);
    });
  }

  // ------------------------------------------------------------------
  // 2) Nếu chưa cấu hình Firebase thì chỉ hiện nút "Thiết lập đồng bộ"
  // ------------------------------------------------------------------
  if (!hasFirebaseConfig) {
    document.addEventListener("DOMContentLoaded", function () {
      renderWidget({ state: "unconfigured" });
    });
    return;
  }

  // ------------------------------------------------------------------
  // 3) Khởi tạo Firebase (dùng bản "compat" để chạy trực tiếp bằng <script>)
  // ------------------------------------------------------------------
  firebase.initializeApp(CHUCHIENG_FIREBASE_CONFIG);
  const auth = firebase.auth();
  const db = firebase.firestore();

  let currentUser = null;
  let syncing = false;

  function docRef(uid) {
    return db.collection("chuchieng_users").doc(uid);
  }

  async function doPush() {
    const data = collectLocalData();
    await docRef(currentUser.uid).set({
      data: data,
      updatedAtClient: Date.now(),
      updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setMeta({ lastPushedAt: Date.now() });
    renderWidget({ state: "signed-in", lastSync: Date.now() });
  }

  async function pushToCloud() {
    if (!currentUser || syncing) return;
    syncing = true;
    renderWidget({ state: "syncing" });
    try {
      await doPush();
    } catch (e) {
      console.error("ChuchiEng sync push error:", e);
      renderWidget({ state: "error", message: "Không đẩy được dữ liệu lên. Kiểm tra mạng." });
    } finally {
      syncing = false;
    }
  }

  async function pullFromCloud() {
    if (!currentUser || syncing) return;
    syncing = true;
    renderWidget({ state: "syncing" });
    try {
      const snap = await docRef(currentUser.uid).get();
      if (snap.exists) {
        const remote = snap.data();
        const remoteTs = remote.updatedAtClient || 0;
        const meta = getMeta();
        const localTs = meta.lastLocalChangeAt || 0;

        if (remoteTs > localTs) {
          // Dữ liệu trên mây mới hơn máy này -> tải về và tải lại trang
          applyRemoteData(remote.data);
          setMeta({ lastLocalChangeAt: remoteTs, lastPushedAt: remoteTs });
          renderWidget({ state: "signed-in", lastSync: Date.now(), justPulled: true });
          setTimeout(function () {
            location.reload();
          }, 600);
          return;
        } else if (localTs > (meta.lastPushedAt || 0)) {
          // Máy này có thay đổi mới hơn -> đẩy lên (dùng doPush trực tiếp,
          // KHÔNG gọi pushToCloud() vì cờ "syncing" đang bận sẽ chặn nó lại)
          await doPush();
          return;
        }
      } else {
        // Chưa có gì trên mây -> đẩy dữ liệu hiện tại lên làm bản đầu tiên
        await doPush();
        return;
      }
      renderWidget({ state: "signed-in", lastSync: Date.now() });
    } catch (e) {
      console.error("ChuchiEng sync pull error:", e);
      renderWidget({ state: "error", message: "Không tải được dữ liệu từ máy chủ." });
    } finally {
      syncing = false;
    }
  }

  onLocalChange = function () {
    if (currentUser) pushToCloud();
  };

  auth.onAuthStateChanged(function (user) {
    currentUser = user;
    if (user) {
      renderWidget({ state: "signed-in", email: user.email });
      pullFromCloud();
    } else {
      renderWidget({ state: "signed-out" });
    }
  });

  // ------------------------------------------------------------------
  // 4) Giao diện: nút tròn góc màn hình + bảng đăng nhập/đăng ký
  // ------------------------------------------------------------------
  function ensureWidget() {
    if (widgetEl) return widgetEl;
    widgetEl = document.createElement("div");
    widgetEl.id = "cc-sync-widget";
    document.body.appendChild(widgetEl);
    return widgetEl;
  }

  function fmtTime(ts) {
    if (!ts) return "";
    const d = new Date(ts);
    return d.toLocaleTimeString("vi-VN", { hour: "2-digit", minute: "2-digit" });
  }

  function renderWidget(status) {
    document.addEventListener("DOMContentLoaded", function () {}); // no-op guard
    const el = ensureWidget();
    let icon = "☁️";
    let label = "Đồng bộ";
    if (status.state === "unconfigured") { icon = "⚙️"; label = "Thiết lập đồng bộ"; }
    if (status.state === "signed-out") { icon = "☁️"; label = "Đăng nhập để đồng bộ"; }
    if (status.state === "signed-in") { icon = "✅"; label = "Đã đồng bộ" + (status.lastSync ? " · " + fmtTime(status.lastSync) : ""); }
    if (status.state === "syncing") { icon = "🔄"; label = "Đang đồng bộ..."; }
    if (status.state === "error") { icon = "⚠️"; label = "Lỗi đồng bộ"; }

    el.innerHTML =
      '<button type="button" id="cc-sync-btn" class="cc-sync-btn">' +
        '<span class="cc-sync-icon">' + icon + "</span>" +
        '<span class="cc-sync-label">' + label + "</span>" +
      "</button>";

    document.getElementById("cc-sync-btn").addEventListener("click", function () {
      togglePanel(status);
    });
  }

  function togglePanel(status) {
    let panel = document.getElementById("cc-sync-panel");
    if (panel) {
      panel.remove();
      panelOpen = false;
      return;
    }
    panelOpen = true;
    panel = document.createElement("div");
    panel.id = "cc-sync-panel";
    panel.className = "cc-sync-panel";

    if (status.state === "unconfigured") {
      panel.innerHTML =
        '<div class="cc-sync-title">Chưa thiết lập đồng bộ</div>' +
        '<div class="cc-sync-text">Hãy điền thông tin dự án Firebase vào file <code>js/firebase-config.js</code> để bật tính năng đồng bộ giữa các thiết bị.</div>';
    } else if (!currentUser) {
      panel.innerHTML =
        '<div class="cc-sync-title">Đồng bộ dữ liệu học tập</div>' +
        '<div class="cc-sync-text">Đăng nhập cùng 1 tài khoản trên điện thoại và máy tính để tự động đồng bộ tiến độ học.</div>' +
        '<input type="email" id="cc-sync-email" class="cc-sync-input" placeholder="Email">' +
        '<input type="password" id="cc-sync-pass" class="cc-sync-input" placeholder="Mật khẩu (từ 6 ký tự)">' +
        '<div class="cc-sync-msg" id="cc-sync-msg"></div>' +
        '<div class="cc-sync-row">' +
          '<button type="button" class="cc-sync-action" id="cc-sync-login">Đăng nhập</button>' +
          '<button type="button" class="cc-sync-action cc-sync-secondary" id="cc-sync-register">Tạo tài khoản mới</button>' +
        "</div>";
    } else {
      panel.innerHTML =
        '<div class="cc-sync-title">Đã đăng nhập</div>' +
        '<div class="cc-sync-text">Tài khoản: <b>' + (currentUser.email || "ẩn danh") + "</b></div>" +
        '<div class="cc-sync-msg" id="cc-sync-msg"></div>' +
        '<div class="cc-sync-row">' +
          '<button type="button" class="cc-sync-action" id="cc-sync-now">🔄 Đồng bộ ngay</button>' +
          '<button type="button" class="cc-sync-action cc-sync-secondary" id="cc-sync-logout">Đăng xuất</button>' +
        "</div>";
    }

    document.getElementById("cc-sync-widget").appendChild(panel);

    const msgEl = function () { return document.getElementById("cc-sync-msg"); };
    const showMsg = function (text, isError) {
      const m = msgEl();
      if (!m) return;
      m.textContent = text;
      m.className = "cc-sync-msg" + (isError ? " cc-sync-msg-error" : " cc-sync-msg-ok");
    };

    const loginBtn = document.getElementById("cc-sync-login");
    const registerBtn = document.getElementById("cc-sync-register");
    const logoutBtn = document.getElementById("cc-sync-logout");
    const syncNowBtn = document.getElementById("cc-sync-now");

    if (loginBtn) {
      loginBtn.addEventListener("click", async function () {
        const email = document.getElementById("cc-sync-email").value.trim();
        const pass = document.getElementById("cc-sync-pass").value;
        if (!email || !pass) { showMsg("Vui lòng nhập đủ email và mật khẩu.", true); return; }
        try {
          showMsg("Đang đăng nhập...");
          await auth.signInWithEmailAndPassword(email, pass);
          showMsg("Đăng nhập thành công!");
          setTimeout(function () {
            const existingPanel = document.getElementById("cc-sync-panel");
            if (existingPanel) existingPanel.remove();
            panelOpen = false;
            togglePanel({ state: "signed-in" });
          }, 400);
        } catch (e) {
          showMsg(translateAuthError(e), true);
        }
      });
    }
    if (registerBtn) {
      registerBtn.addEventListener("click", async function () {
        const email = document.getElementById("cc-sync-email").value.trim();
        const pass = document.getElementById("cc-sync-pass").value;
        if (!email || !pass) { showMsg("Vui lòng nhập đủ email và mật khẩu.", true); return; }
        if (pass.length < 6) { showMsg("Mật khẩu cần ít nhất 6 ký tự.", true); return; }
        try {
          showMsg("Đang tạo tài khoản...");
          await auth.createUserWithEmailAndPassword(email, pass);
          showMsg("Tạo tài khoản thành công! Đã đăng nhập.");
          setTimeout(function () {
            const existingPanel = document.getElementById("cc-sync-panel");
            if (existingPanel) existingPanel.remove();
            panelOpen = false;
            togglePanel({ state: "signed-in" });
          }, 400);
        } catch (e) {
          showMsg(translateAuthError(e), true);
        }
      });
    }
    if (logoutBtn) {
      logoutBtn.addEventListener("click", async function () {
        await auth.signOut();
        panel.remove();
        panelOpen = false;
      });
    }
    if (syncNowBtn) {
      syncNowBtn.addEventListener("click", function () {
        pullFromCloud();
        showMsg("Đang đồng bộ...");
      });
    }
  }

  function translateAuthError(e) {
    const code = e && e.code;
    const map = {
      "auth/email-already-in-use": "Email này đã được đăng ký. Hãy chọn 'Đăng nhập'.",
      "auth/invalid-email": "Email không hợp lệ.",
      "auth/weak-password": "Mật khẩu quá yếu (cần ít nhất 6 ký tự).",
      "auth/user-not-found": "Không tìm thấy tài khoản với email này.",
      "auth/wrong-password": "Sai mật khẩu.",
      "auth/invalid-credential": "Sai email hoặc mật khẩu.",
      "auth/network-request-failed": "Lỗi mạng, vui lòng thử lại.",
    };
    return map[code] || ("Có lỗi xảy ra: " + (e && e.message ? e.message : "không rõ"));
  }
})();
