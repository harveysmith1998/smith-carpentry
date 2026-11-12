/* Smith Carpentry cloud helper for quote.html and invoice.html.
   Passcode, log sync between devices, online quote/invoice links with view and accept tracking.
   Only runs on the website — the pages still work as local files without it. */
(function () {
  var host = location.hostname;
  var ONLINE = /(^|\.)smithcarpentry\.uk$/.test(host) || /\.vercel\.app$/.test(host) ||
    host === 'localhost' || host === '127.0.0.1';
  var KEY_STORE = 'sc_owner_key';
  var LOG_KEYS = ['sc_quote_log', 'sc_invoice_log'];
  var origSetItem = localStorage.setItem.bind(localStorage);
  var origRemoveItem = localStorage.removeItem.bind(localStorage);

  function getKey() { try { return localStorage.getItem(KEY_STORE) || ''; } catch (e) { return ''; } }
  function setKey(k) { try { if (k) origSetItem(KEY_STORE, k); else origRemoveItem(KEY_STORE); } catch (e) {} }

  function api(path, opts) {
    opts = opts || {};
    var headers = { 'Content-Type': 'application/json' };
    if (opts.owner) headers['x-sc-key'] = getKey();
    return fetch(path, {
      method: opts.body ? 'POST' : 'GET',
      headers: headers,
      body: opts.body ? JSON.stringify(opts.body) : undefined,
      cache: 'no-store'
    }).then(function (r) {
      return r.json().catch(function () { return {}; }).then(function (data) {
        if (r.status === 401 && opts.owner) { setKey(''); askPasscode(); }
        if (!r.ok) { var err = new Error(data.error || ('HTTP ' + r.status)); err.status = r.status; throw err; }
        return data;
      });
    });
  }

  // ---- Passcode prompt ----

  var asking = null;

  function askPasscode() {
    if (asking) return asking;
    asking = fetch('/api/owner', { cache: 'no-store' })
      .then(function (r) { return r.json(); })
      .catch(function () { return { claimed: true }; })
      .then(function (st) { return showPasscodeModal(!!st.claimed); })
      .then(function (ok) {
        asking = null;
        if (ok) {
          LOG_KEYS.forEach(syncKey);
          window.dispatchEvent(new Event('sc-unlocked'));
        }
        return ok;
      });
    return asking;
  }

  function showPasscodeModal(claimed) {
    return new Promise(function (resolve) {
      var wrap = document.createElement('div');
      wrap.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,.75);z-index:3000;display:flex;align-items:center;justify-content:center;padding:16px;font-family:"Helvetica Neue",Arial,sans-serif';
      var inputCss = 'width:100%;box-sizing:border-box;background:#0c0f0f;border:1.5px solid #2a3a3a;color:#f2f2ef;border-radius:8px;padding:11px 12px;font-size:16px;font-family:inherit;margin-top:6px';
      function render(isClaimed, message) {
        wrap.innerHTML =
          '<form style="background:#15191a;border:1.5px solid #22d3d3;border-radius:12px;padding:20px;width:100%;max-width:380px;color:#f2f2ef">' +
            '<div style="color:#22d3d3;font-size:13px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;margin-bottom:10px">' +
              (isClaimed ? 'Enter your passcode' : 'Create a passcode') + '</div>' +
            '<div style="font-size:13px;line-height:1.6;color:#c9cfcf;margin-bottom:12px">' +
              (isClaimed
                ? 'Enter your Smith Carpentry passcode to sync your logs and track online quotes on this device.'
                : 'Choose a passcode to protect your quote and invoice data. You\'ll enter it once on each device you use. At least 6 characters.') +
            '</div>' +
            '<input type="password" name="p1" autocomplete="' + (isClaimed ? 'current-password' : 'new-password') + '" placeholder="Passcode" style="' + inputCss + '">' +
            (isClaimed ? '' : '<input type="password" name="p2" autocomplete="new-password" placeholder="Repeat passcode" style="' + inputCss + '">') +
            '<div data-msg style="color:#e05555;font-size:12px;min-height:18px;margin-top:8px">' + (message || '') + '</div>' +
            '<div style="display:flex;gap:10px;margin-top:6px">' +
              '<button type="button" data-later style="flex:1;background:transparent;border:1.5px solid #8b9292;color:#8b9292;border-radius:8px;padding:11px;font-size:13px;font-family:inherit;cursor:pointer">Not now</button>' +
              '<button type="submit" style="flex:1;background:#22d3d3;color:#0a1010;border:none;border-radius:8px;padding:11px;font-size:13px;font-weight:800;font-family:inherit;letter-spacing:.06em;text-transform:uppercase;cursor:pointer">' +
                (isClaimed ? 'Unlock' : 'Save') + '</button>' +
            '</div>' +
          '</form>';
        var form = wrap.querySelector('form');
        var msg = wrap.querySelector('[data-msg]');
        form.p1.focus();
        wrap.querySelector('[data-later]').onclick = function () {
          try { sessionStorage.setItem('sc_pass_later', '1'); } catch (e) {}
          close(false);
        };
        form.onsubmit = function (ev) {
          ev.preventDefault();
          var p = form.p1.value;
          if (!isClaimed) {
            if (p.length < 6) { msg.textContent = 'Use at least 6 characters.'; return; }
            if (p !== form.p2.value) { msg.textContent = 'The two passcodes don\'t match.'; return; }
            api('/api/owner', { body: { action: 'claim', passcode: p } })
              .then(function () { setKey(p); close(true); })
              .catch(function (err) {
                if (err.status === 409) render(true, 'A passcode is already set — enter it below.');
                else msg.textContent = 'Couldn\'t save — check your connection.';
              });
          } else {
            setKey(p);
            fetch('/api/owner', {
              method: 'POST', cache: 'no-store',
              headers: { 'Content-Type': 'application/json', 'x-sc-key': p },
              body: JSON.stringify({ action: 'check' })
            }).then(function (r) {
              if (r.ok) return close(true);
              setKey('');
              msg.textContent = r.status === 429 ? 'Too many attempts — try again in 15 minutes.' : 'Wrong passcode.';
            }).catch(function () { setKey(''); msg.textContent = 'Couldn\'t check — check your connection.'; });
          }
        };
      }
      function close(ok) { wrap.remove(); resolve(ok); }
      render(claimed, '');
      document.body.appendChild(wrap);
    });
  }

  // ---- Log sync between devices ----

  function readLocal(key) {
    try { return JSON.parse(localStorage.getItem(key) || '[]'); } catch (e) { return []; }
  }

  // Newer entries win; old entries without a timestamp fall back to their saved date
  function stamp(e) { return e.ts || Date.parse(e.saved || '') || 0; }

  function merge(local, cloud) {
    var byRef = {};
    local.concat(cloud).forEach(function (e) {
      if (!e || !e.ref) return;
      var cur = byRef[e.ref];
      if (!cur || stamp(e) > stamp(cur)) byRef[e.ref] = e;
    });
    return Object.keys(byRef).map(function (k) { return byRef[k]; })
      .sort(function (a, b) { return stamp(b) - stamp(a); });
  }

  // Pull the cloud copy, merge with this device, store locally and push the merged list back.
  // If the pull fails we don't push, so a flaky connection can't wipe the cloud copy.
  function syncKey(key) {
    if (!getKey()) return Promise.resolve();
    return api('/api/sync?key=' + key, { owner: true }).then(function (res) {
      var merged = merge(readLocal(key), Array.isArray(res.data) ? res.data : []);
      origSetItem(key, JSON.stringify(merged));
      var logTab = document.getElementById('tab-log');
      if (logTab && logTab.classList.contains('active') && typeof window.renderLog === 'function') window.renderLog();
      return api('/api/sync', { owner: true, body: { key: key, data: merged } });
    }).catch(function () {});
  }

  /** Harvey's pages: sync logs (asking for the passcode the first time). */
  function startOwner() {
    if (!ONLINE) return;
    localStorage.setItem = function (key, value) {
      origSetItem(key, value);
      if (LOG_KEYS.indexOf(key) >= 0) syncKey(key);
    };
    localStorage.removeItem = function (key) {
      origRemoveItem(key);
      if (LOG_KEYS.indexOf(key) >= 0 && getKey()) {
        api('/api/sync', { owner: true, body: { key: key, data: [] } }).catch(function () {});
      }
    };
    if (getKey()) { LOG_KEYS.forEach(syncKey); return; }
    var later = false;
    try { later = sessionStorage.getItem('sc_pass_later') === '1'; } catch (e) {}
    if (!later) askPasscode();
  }

  // ---- Online documents ----

  function newId() {
    var chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789';
    var rnd = new Uint32Array(12);
    crypto.getRandomValues(rnd);
    var id = '';
    for (var i = 0; i < rnd.length; i++) id += chars[rnd[i] % chars.length];
    return id;
  }

  function linkFor(type, id) {
    var base = /(^|\.)smithcarpentry\.uk$/.test(host) ? 'https://www.smithcarpentry.uk' : location.origin;
    return base + (type === 'quote' ? '/q/' : '/i/') + id;
  }

  function publish(type, id, data) {
    if (!ONLINE || !getKey()) return Promise.resolve(false);
    return api('/api/docs', { owner: true, body: { action: 'save', id: id, type: type, data: data } })
      .then(function () { return true; }, function () { return false; });
  }

  function status(ids) {
    if (!ONLINE || !getKey() || !ids.length) return Promise.resolve({});
    return api('/api/docs?ids=' + ids.join(','), { owner: true })
      .then(function (r) { return r.statuses || {}; }, function () { return {}; });
  }

  function fetchDoc(id) { return api('/api/docs?id=' + encodeURIComponent(id)); }

  function accept(id, name) { return api('/api/docs', { body: { action: 'accept', id: id, name: name } }); }

  // Count a view once the page has been on screen for 3 seconds. Ignores link scanners
  // and Harvey opening his own links on a device that has the passcode.
  function recordView(id) {
    if (getKey()) return;
    if (/bot|crawl|spider|preview|scan|headless|python|curl|wget|facebookexternalhit|slurp/i.test(navigator.userAgent)) return;
    var sent = false;
    function send() {
      if (sent || document.visibilityState !== 'visible') return;
      sent = true;
      api('/api/docs', { body: { action: 'view', id: id } }).catch(function () {});
    }
    setTimeout(send, 3000);
    document.addEventListener('visibilitychange', function () {
      if (document.visibilityState === 'visible') setTimeout(send, 3000);
    });
  }

  // ---- Log status labels ----

  function pad(n) { return String(n).padStart(2, '0'); }
  function when(ts) {
    var d = new Date(ts);
    return pad(d.getDate()) + '/' + pad(d.getMonth() + 1) + ' ' + pad(d.getHours()) + ':' + pad(d.getMinutes());
  }
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }

  function statusHtml(s) {
    if (!s) return '';
    if (s.accepted) {
      return '<span style="color:#22c55e;font-weight:700">✅ Accepted ' + when(s.accepted.at) + ' by ' + esc(s.accepted.name) + '</span>';
    }
    if (s.views) {
      return '<span style="color:#22d3d3">👁 Viewed ' + (s.views > 1 ? s.views + '× · last ' : '') + when(s.lastViewed) + '</span>';
    }
    return '<span style="color:#8b9292">Not viewed yet</span>';
  }

  /** Fills every `.log-status[data-doc]` element on the page with its latest status. */
  function fillStatuses() {
    var els = Array.prototype.slice.call(document.querySelectorAll('.log-status[data-doc]'));
    var ids = els.map(function (el) { return el.getAttribute('data-doc'); })
      .filter(function (id, i, all) { return id && all.indexOf(id) === i; });
    if (!ids.length) return;
    status(ids).then(function (st) {
      els.forEach(function (el) { el.innerHTML = statusHtml(st[el.getAttribute('data-doc')]); });
    });
  }

  function copyLink(type, id, btn) {
    var url = linkFor(type, id);
    var done = function () {
      var old = btn.textContent;
      btn.textContent = 'COPIED';
      setTimeout(function () { btn.textContent = old; }, 1500);
    };
    if (navigator.clipboard) navigator.clipboard.writeText(url).then(done, function () { prompt('Copy this link:', url); });
    else prompt('Copy this link:', url);
  }

  window.SC = {
    online: ONLINE,
    hasKey: function () { return ONLINE && !!getKey(); },
    askPasscode: askPasscode,
    startOwner: startOwner,
    newId: newId,
    linkFor: linkFor,
    publish: publish,
    fetchDoc: fetchDoc,
    accept: accept,
    recordView: recordView,
    fillStatuses: fillStatuses,
    copyLink: copyLink
  };
})();
