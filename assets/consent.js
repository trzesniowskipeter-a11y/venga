/* Venga — cookie consent, Google Consent Mode v2.
   The defaults are set inline in <head> before GTM loads; this file only draws
   the banner, stores the decision and pushes consent updates.               */
(function () {
  "use strict";

  var STORE = "venga_consent_v1";
  var MONTHS = 12;                       // how long a decision stays valid

  /* ---------- language ---------- */
  function lang() {
    try {
      var l = localStorage.getItem("venga_lang");
      if (l === "es" || l === "pl") return l;
    } catch (e) {}
    var d = (document.documentElement.lang || "en").slice(0, 2);
    return d === "es" || d === "pl" ? d : "en";
  }

  var T = {
    en: {
      title: "We use cookies",
      body: "We use cookies that make the site work, and — only with your agreement — cookies that show us how it is used and help us reach cyclists planning a trip to Mallorca.",
      accept: "Accept all",
      reject: "Reject all",
      settings: "Choose what to allow",
      save: "Save my choice",
      back: "Back",
      prefsTitle: "Cookie settings",
      necessaryT: "Necessary",
      necessaryD: "Needed for the site to work: your language, your booking in progress, security. These cannot be switched off.",
      analyticsT: "Analytics",
      analyticsD: "Shows us which bikes and routes people look at, and where a booking gets abandoned. Data is aggregated — we never see who you are.",
      marketingT: "Marketing",
      marketingD: "Lets us show our bikes to cyclists planning a trip, and measure whether those ads bring anyone here.",
      always: "Always on",
      link: "Cookie settings",
      policy: "Privacy policy",
    },
    es: {
      title: "Usamos cookies",
      body: "Usamos cookies necesarias para que la web funcione y, solo con tu permiso, cookies que nos muestran cómo se usa y nos ayudan a llegar a ciclistas que planean un viaje a Mallorca.",
      accept: "Aceptar todas",
      reject: "Rechazar todas",
      settings: "Elegir qué permitir",
      save: "Guardar mi elección",
      back: "Volver",
      prefsTitle: "Configuración de cookies",
      necessaryT: "Necesarias",
      necessaryD: "Imprescindibles para que la web funcione: tu idioma, tu reserva en curso, la seguridad. No se pueden desactivar.",
      analyticsT: "Analítica",
      analyticsD: "Nos muestra qué bicis y rutas se miran y en qué paso se abandona una reserva. Los datos son agregados: nunca sabemos quién eres.",
      marketingT: "Marketing",
      marketingD: "Nos permite mostrar nuestras bicis a ciclistas que planean un viaje y medir si esos anuncios traen a alguien.",
      always: "Siempre activas",
      link: "Configuración de cookies",
      policy: "Política de privacidad",
    },
    pl: {
      title: "Używamy plików cookie",
      body: "Używamy plików niezbędnych do działania strony oraz — wyłącznie za Twoją zgodą — takich, które pokazują nam, jak strona jest używana, i pomagają docierać do kolarzy planujących wyjazd na Majorkę.",
      accept: "Akceptuję wszystkie",
      reject: "Odrzuć wszystkie",
      settings: "Wybierz, na co się zgadzasz",
      save: "Zapisz mój wybór",
      back: "Wróć",
      prefsTitle: "Ustawienia plików cookie",
      necessaryT: "Niezbędne",
      necessaryD: "Potrzebne, by strona działała: język, rozpoczęta rezerwacja, bezpieczeństwo. Nie można ich wyłączyć.",
      analyticsT: "Analityczne",
      analyticsD: "Pokazują nam, które rowery i trasy są oglądane oraz na którym kroku porzucana jest rezerwacja. Dane są zbiorcze — nie wiemy, kim jesteś.",
      marketingT: "Marketingowe",
      marketingD: "Pozwalają pokazywać nasze rowery kolarzom planującym wyjazd i sprawdzać, czy te reklamy kogoś tu przyprowadzają.",
      always: "Zawsze włączone",
      link: "Ustawienia plików cookie",
      policy: "Polityka prywatności",
    },
  };


  /* the policy must be reachable from the banner itself, before any decision */
  function policyHref() {
    return location.pathname.replace(/\/[^/]*$/, "/").split("/").length > 2
      ? "/privacy/" : "/privacy/";
  }

  /* ---------- storage ---------- */
  function read() {
    try {
      var raw = localStorage.getItem(STORE);
      if (!raw) return null;
      var v = JSON.parse(raw);
      if (!v || !v.at) return null;
      var age = (Date.now() - v.at) / 86400000;
      if (age > MONTHS * 30) return null;         // expired, ask again
      return v;
    } catch (e) { return null; }
  }
  function write(analytics, marketing) {
    var v = { analytics: !!analytics, marketing: !!marketing, at: Date.now(), v: 1 };
    try { localStorage.setItem(STORE, JSON.stringify(v)); } catch (e) {}
    return v;
  }

  /* ---------- tell Google ---------- */
  function apply(v, source) {
    var granted = function (b) { return b ? "granted" : "denied"; };
    if (typeof window.gtag === "function") {
      window.gtag("consent", "update", {
        analytics_storage: granted(v.analytics),
        ad_storage: granted(v.marketing),
        ad_user_data: granted(v.marketing),
        ad_personalization: granted(v.marketing),
      });
    }
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "consent_update",
      consent_analytics: v.analytics ? "granted" : "denied",
      consent_marketing: v.marketing ? "granted" : "denied",
      consent_source: source || "banner",
    });
  }

  /* ---------- styles ---------- */
  function css() {
    if (document.getElementById("vcStyle")) return;
    var s = document.createElement("style");
    s.id = "vcStyle";
    s.textContent = [
      "#vcBar{position:fixed;left:0;right:0;bottom:0;z-index:9999;background:#0E0D0B;color:#F4F0E7;",
      "border-top:1px solid rgba(190,157,82,.34);padding:20px 22px;font-family:'Instrument Sans','Instrument Ext',system-ui,sans-serif;",
      "transform:translateY(110%);transition:transform .45s cubic-bezier(.2,.7,.2,1);box-shadow:0 -18px 40px rgba(0,0,0,.4)}",
      "#vcBar.in{transform:none}",
      "#vcBar .in-w{max-width:1180px;margin:0 auto;display:flex;gap:26px;align-items:center;flex-wrap:wrap}",
      "#vcBar h2{font-family:'Archivo Var','Archivo Ext',Impact,sans-serif;font-stretch:125%;font-weight:800;",
      "text-transform:uppercase;font-size:1rem;letter-spacing:.04em;margin:0 0 6px}",
      "#vcBar p{margin:0;font-size:.86rem;line-height:1.55;color:rgba(244,240,231,.76);max-width:720px}",
      "#vcBar .tx{flex:1 1 420px}",
      "#vcBar .btns{display:flex;gap:10px;flex-wrap:wrap;align-items:center}",
      ".vc-b{font-family:inherit;font-size:.66rem;font-weight:600;letter-spacing:.16em;text-transform:uppercase;",
      "padding:13px 20px;cursor:pointer;border:1px solid rgba(190,157,82,.45);background:none;color:#F4F0E7;transition:.22s}",
      ".vc-b:hover{border-color:#BE9D52;color:#BE9D52}",
      ".vc-b.pri{background:#BE9D52;border-color:#BE9D52;color:#0E0D0B}",
      ".vc-b.pri:hover{background:#D8BC7A;color:#0E0D0B}",
      ".vc-b.ghost{border-color:transparent;color:rgba(244,240,231,.6);padding-left:6px;padding-right:6px}",
      ".vc-b.ghost:hover{color:#BE9D52}",
      "#vcBar .vc-pol{color:#BE9D52;text-decoration:underline;text-underline-offset:3px}",
      "body.vc-open{padding-bottom:170px}",
      "@media(max-width:700px){body.vc-open{padding-bottom:260px}}",
      "#vcPrefs{position:fixed;inset:0;z-index:10000;background:rgba(6,5,4,.82);backdrop-filter:blur(5px);",
      "display:none;align-items:center;justify-content:center;padding:24px;overflow-y:auto}",
      "#vcPrefs.on{display:flex}",
      "#vcPrefs .box{background:#131210;border:1px solid rgba(190,157,82,.26);max-width:560px;width:100%;padding:28px}",
      "#vcPrefs h2{font-family:'Archivo Var','Archivo Ext',Impact,sans-serif;font-stretch:125%;font-weight:800;",
      "text-transform:uppercase;font-size:1.15rem;margin:0 0 18px;color:#F4F0E7}",
      ".vc-row{display:flex;gap:14px;padding:15px 0;border-top:1px solid rgba(190,157,82,.16)}",
      ".vc-row b{display:block;font-size:.9rem;color:#F4F0E7;margin-bottom:4px}",
      ".vc-row p{margin:0;font-size:.79rem;line-height:1.5;color:rgba(244,240,231,.66)}",
      ".vc-row .sw{flex:none;padding-top:2px}",
      ".vc-sw{width:44px;height:24px;border-radius:12px;border:1px solid rgba(190,157,82,.4);background:rgba(255,255,255,.05);",
      "position:relative;cursor:pointer;transition:.22s;padding:0}",
      ".vc-sw::after{content:'';position:absolute;top:2px;left:2px;width:18px;height:18px;border-radius:50%;",
      "background:rgba(244,240,231,.62);transition:.22s}",
      ".vc-sw[aria-checked='true']{background:#BE9D52;border-color:#BE9D52}",
      ".vc-sw[aria-checked='true']::after{left:22px;background:#0E0D0B}",
      ".vc-sw[disabled]{opacity:.5;cursor:not-allowed}",
      "#vcPrefs .acts{display:flex;gap:10px;justify-content:flex-end;margin-top:22px;flex-wrap:wrap}",
      "#vcLink{background:none;border:0;color:inherit;font:inherit;cursor:pointer;text-decoration:underline;",
      "text-underline-offset:3px;opacity:.75}",
      "#vcLink:hover{opacity:1;color:#BE9D52}",
      "@media(max-width:700px){#vcBar{padding:18px 16px}#vcBar .btns{width:100%}.vc-b{flex:1 1 auto;text-align:center}}",
    ].join("");
    document.head.appendChild(s);
  }

  /* ---------- banner ---------- */
  function banner() {
    var t = T[lang()] || T.en;
    css();
    var el = document.createElement("div");
    el.id = "vcBar";
    el.setAttribute("role", "dialog");
    el.setAttribute("aria-label", t.title);
    el.setAttribute("aria-live", "polite");
    el.innerHTML =
      '<div class="in-w"><div class="tx"><h2>' + t.title + "</h2><p>" + t.body +
      ' <a class="vc-pol" href="' + policyHref() + '">' + t.policy + '</a>.</p></div>' +
      '<div class="btns">' +
      '<button class="vc-b ghost" data-vc="prefs">' + t.settings + "</button>" +
      '<button class="vc-b" data-vc="reject">' + t.reject + "</button>" +
      '<button class="vc-b pri" data-vc="accept">' + t.accept + "</button>" +
      "</div></div>";
    document.body.appendChild(el);
    document.body.classList.add("vc-open");
    requestAnimationFrame(function () { el.classList.add("in"); });

    el.addEventListener("click", function (e) {
      var b = e.target.closest("[data-vc]");
      if (!b) return;
      if (b.dataset.vc === "accept") decide(true, true);
      if (b.dataset.vc === "reject") decide(false, false);
      if (b.dataset.vc === "prefs") prefs();
    });
  }

  function close() {
    var el = document.getElementById("vcBar");
    if (!el) return;
    el.classList.remove("in");
    document.body.classList.remove("vc-open");
    setTimeout(function () { el.remove(); }, 450);
  }

  function decide(analytics, marketing) {
    apply(write(analytics, marketing), "banner");
    close();
    var p = document.getElementById("vcPrefs");
    if (p) p.classList.remove("on");
  }

  /* ---------- preferences ---------- */
  function prefs() {
    var t = T[lang()] || T.en;
    var cur = read() || { analytics: false, marketing: false };
    css();
    var old = document.getElementById("vcPrefs");
    if (old) old.remove();
    var w = document.createElement("div");
    w.id = "vcPrefs";
    w.innerHTML =
      '<div class="box" role="dialog" aria-modal="true" aria-label="' + t.prefsTitle + '">' +
      "<h2>" + t.prefsTitle + "</h2>" +
      '<div class="vc-row"><div class="sw"><button class="vc-sw" aria-checked="true" disabled aria-label="' + t.necessaryT + '"></button></div>' +
      "<div><b>" + t.necessaryT + " — " + t.always + "</b><p>" + t.necessaryD + "</p></div></div>" +
      '<div class="vc-row"><div class="sw"><button class="vc-sw" data-k="analytics" aria-checked="' + (cur.analytics ? "true" : "false") + '" aria-label="' + t.analyticsT + '"></button></div>' +
      "<div><b>" + t.analyticsT + "</b><p>" + t.analyticsD + "</p></div></div>" +
      '<div class="vc-row"><div class="sw"><button class="vc-sw" data-k="marketing" aria-checked="' + (cur.marketing ? "true" : "false") + '" aria-label="' + t.marketingT + '"></button></div>' +
      "<div><b>" + t.marketingT + "</b><p>" + t.marketingD + "</p></div></div>" +
      '<div class="acts"><button class="vc-b ghost" data-vc="back">' + t.back + "</button>" +
      '<button class="vc-b" data-vc="rejectAll">' + t.reject + "</button>" +
      '<button class="vc-b pri" data-vc="save">' + t.save + "</button></div></div>";
    document.body.appendChild(w);
    w.classList.add("on");

    w.addEventListener("click", function (e) {
      var sw = e.target.closest(".vc-sw[data-k]");
      if (sw) {
        sw.setAttribute("aria-checked", sw.getAttribute("aria-checked") === "true" ? "false" : "true");
        return;
      }
      var b = e.target.closest("[data-vc]");
      if (!b) {
        if (e.target === w) w.classList.remove("on");
        return;
      }
      if (b.dataset.vc === "back") { w.classList.remove("on"); return; }
      if (b.dataset.vc === "rejectAll") { decide(false, false); w.remove(); return; }
      if (b.dataset.vc === "save") {
        var a = w.querySelector('[data-k="analytics"]').getAttribute("aria-checked") === "true";
        var m = w.querySelector('[data-k="marketing"]').getAttribute("aria-checked") === "true";
        apply(write(a, m), "preferences");
        close(); w.remove();
      }
    });
    document.addEventListener("keydown", function esc(ev) {
      if (ev.key === "Escape") { w.classList.remove("on"); document.removeEventListener("keydown", esc); }
    });
  }

  /* a way back: the law requires withdrawing consent to be as easy as giving it */
  function footerLink() {
    var t = T[lang()] || T.en;
    var foot = document.querySelector("footer .wrap, footer .fbot, footer");
    if (!foot || document.getElementById("vcLink")) return;
    var b = document.createElement("button");
    b.id = "vcLink"; b.type = "button"; b.textContent = t.link;
    b.style.marginLeft = "14px";
    b.onclick = prefs;
    var host = foot.querySelector("small, p, div") || foot;
    host.appendChild(b);
  }

  window.vengaConsent = { open: prefs, state: read };

  /* the visitor may switch language while the banner is on screen */
  document.addEventListener("click", function (e) {
    var b = e.target.closest(".lang button[data-lang]");
    if (!b) return;
    var bar = document.getElementById("vcBar");
    if (!bar) return;
    setTimeout(function () { bar.remove(); banner(); }, 60);
  });

  function start() {
    var v = read();
    if (v) apply(v, "stored");     // returning visitor: apply before anything fires
    else banner();
    footerLink();
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start);
  else start();
})();
