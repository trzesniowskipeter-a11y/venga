/* Venga size guide — interactive height-based frame size chart.
   Data (manufacturer ranges + which sizes we stock) is read live from the database,
   so a change there shows on every page at once.
   Usage: VengaSizeGuide.mount(element, { slug, lang, theme: 'light'|'dark', height, onPick })
          VengaSizeGuide.recommend(slug, height) -> Promise<{fit:[sizes], stocked:[sizes]}> */
(function () {
  var SB = 'https://gyjurizatltplidhdyei.supabase.co', KEY = 'sb_publishable_tnL3RCcKwMTQVWPAlKV58g_iNPgbqy0';
  var T = {
    en: { h: 'Your height', size: 'Your size', between: 'Between {a} and {b} — {a} for a racier, lower position, {b} for more comfort on long days.',
          three: 'Between {list} — the middle size, {m}, is the safe choice; we fine-tune it in the shop.',
          out: 'Your height is outside this frame range — write to us and we will check what fits.',
          none: 'Move the slider to your height.', na: 'not in our fleet', note: 'Between two sizes? Smaller = lower and more aggressive, larger = more stretched and stable. We set saddle height and reach before you ride.',
          only: '{s} is not in our fleet — the closest size we have is {c}.', title: 'Find your frame size' },
    es: { h: 'Tu altura', size: 'Tu talla', between: 'Entre {a} y {b}: {a} para una posición más baja y deportiva, {b} para más comodidad en días largos.',
          three: 'Entre {list}: la talla intermedia, {m}, es la opción segura; la afinamos en la tienda.',
          out: 'Tu altura está fuera de este rango de tallas: escríbenos y veremos qué te va bien.',
          none: 'Mueve el control hasta tu altura.', na: 'no disponible en nuestra flota', note: '¿Entre dos tallas? La pequeña es más baja y agresiva; la grande, más estirada y estable. Ajustamos altura de sillín y alcance antes de que salgas.',
          only: 'La {s} no está en nuestra flota: la talla más cercana que tenemos es la {c}.', title: 'Encuentra tu talla' },
    pl: { h: 'Twój wzrost', size: 'Twój rozmiar', between: 'Między {a} a {b} — {a} dla niższej, bardziej sportowej pozycji, {b} dla wygody na długich trasach.',
          three: 'Pasują {list} — środkowy rozmiar, {m}, to bezpieczny wybór; dopasujemy go w sklepie.',
          out: 'Twój wzrost jest poza zakresem tej ramy — napisz do nas, sprawdzimy, co będzie pasować.',
          none: 'Przesuń suwak na swój wzrost.', na: 'brak w naszej flocie', note: 'Między dwoma rozmiarami? Mniejszy = niżej i sportowo, większy = bardziej wyciągnięta, stabilna pozycja. Wysokość siodła i zasięg ustawiamy przed jazdą.',
          only: 'Rozmiaru {s} nie mamy we flocie — najbliższy dostępny to {c}.', title: 'Dobierz rozmiar ramy' }
  };
  var cache = {};
  function load(slug) {
    if (!cache[slug]) cache[slug] = fetch(SB + '/rest/v1/bikes?slug=eq.' + encodeURIComponent(slug) +
      '&select=bike_size_chart(size,height_min,height_max,sort),bike_sizes(size,qty)', { headers: { apikey: KEY, Authorization: 'Bearer ' + KEY } })
      .then(function (r) { return r.json(); })
      .then(function (rows) {
        var b = rows && rows[0]; if (!b) return { chart: [], stock: {} };
        var stock = {}; (b.bike_sizes || []).forEach(function (s) { stock[s.size] = s.qty; });
        var chart = (b.bike_size_chart || []).slice().sort(function (x, y) { return x.sort - y.sort || x.height_min - y.height_min; });
        return { chart: chart, stock: stock };
      }).catch(function () { delete cache[slug]; return { chart: [], stock: {} }; });
    return cache[slug];
  }
  function fits(chart, h) { return chart.filter(function (c) { return h >= c.height_min && h <= c.height_max; }); }
  function recommend(slug, h) {
    return load(slug).then(function (d) {
      var fit = fits(d.chart, h).map(function (c) { return c.size; });
      return { fit: fit, stocked: fit.filter(function (s) { return d.stock[s] > 0; }), hasChart: d.chart.length > 0 };
    });
  }
  function css() {
    if (document.getElementById('vsg-css')) return;
    var s = document.createElement('style'); s.id = 'vsg-css';
    s.textContent =
      '.vsg{--vsg-ink:#0E0D0B;--vsg-gold:#BE9D52;--vsg-mute:#8E8677;--vsg-line:rgba(14,13,11,.1);--vsg-bar:rgba(14,13,11,.14);--vsg-rec-bg:#0E0D0B;--vsg-rec-fg:#F4F0E7;color:var(--vsg-ink);font-family:inherit}' +
      '.vsg.dark{--vsg-ink:#F4F0E7;--vsg-mute:#8E8677;--vsg-line:rgba(244,240,231,.1);--vsg-bar:rgba(244,240,231,.16);--vsg-rec-bg:rgba(190,157,82,.12);--vsg-rec-fg:#F4F0E7}' +
      '.vsg-row{display:flex;align-items:center;gap:12px;margin-bottom:6px}.vsg-row label{font-size:.82rem;color:var(--vsg-mute);white-space:nowrap}' +
      '.vsg-row input[type=range]{flex:1;accent-color:#BE9D52;min-width:0;width:auto;height:22px;padding:0;margin:0;border:0!important;background:none!important;box-shadow:none!important;-webkit-appearance:auto;appearance:auto}.vsg-hv{font-weight:700;font-size:1.05rem;min-width:66px;text-align:right}' +
      '.vsg-rec{background:var(--vsg-rec-bg);color:var(--vsg-rec-fg);padding:12px 14px;margin:10px 0 14px;font-size:.92rem;line-height:1.5;border-left:2px solid #BE9D52}' +
      '.vsg-rec b{color:#BE9D52}.vsg-ch{position:relative}.vsg-l{display:flex;align-items:center;height:30px}' +
      '.vsg-s{width:46px;font-size:.82rem;font-weight:700;color:var(--vsg-mute);flex:none}.vsg-l.on .vsg-s{color:var(--vsg-ink)}' +
      '.vsg-t{position:relative;flex:1;height:30px;border-bottom:1px solid var(--vsg-line)}' +
      '.vsg-b{position:absolute;top:9px;height:12px;background:var(--vsg-bar);transition:background .2s}.vsg-l.on .vsg-b{background:#BE9D52}' +
      '.vsg-l.na .vsg-b{background:repeating-linear-gradient(45deg,var(--vsg-bar) 0 4px,transparent 4px 8px)}' +
      '.vsg-r{position:absolute;top:8px;font-size:.72rem;color:var(--vsg-mute);white-space:nowrap}.vsg-l.on .vsg-r{color:var(--vsg-ink)}' +
      '.vsg-m{position:absolute;top:0;bottom:0;width:2px;background:var(--vsg-ink);pointer-events:none}' +
      '.vsg-ax{display:flex;justify-content:space-between;font-size:.68rem;color:var(--vsg-mute);margin:6px 0 0 46px}' +
      '.vsg-n{font-size:.78rem;color:var(--vsg-mute);margin-top:10px;line-height:1.5}';
    document.head.appendChild(s);
  }
  function fmt(t, o) { return t.replace(/\{(\w+)\}/g, function (_, k) { return o[k]; }); }
  function mount(el, opt) {
    opt = opt || {}; css();
    var lang = (opt.lang || document.documentElement.lang || 'en').slice(0, 2); var t = T[lang] || T.en;
    el.classList.add('vsg'); if (opt.theme === 'dark') el.classList.add('dark');
    var state = { h: opt.height || 175, d: null }, api = {};
    el.innerHTML = '<div class="vsg-row"><label>' + t.h + '</label><input type="range" min="145" max="205" step="1" aria-label="' + t.h + '"><span class="vsg-hv"></span></div>' +
      '<div class="vsg-rec" aria-live="polite"></div><div class="vsg-ch"></div><div class="vsg-ax"></div><div class="vsg-n">' + t.note + '</div>';
    var inp = el.querySelector('input'), hv = el.querySelector('.vsg-hv'), rec = el.querySelector('.vsg-rec'), ch = el.querySelector('.vsg-ch'), ax = el.querySelector('.vsg-ax');
    function draw() {
      var d = state.d; if (!d) return;
      if (!d.chart.length) { el.style.display = 'none'; return; }
      el.style.display = '';
      var lo = Math.min.apply(null, d.chart.map(function (c) { return c.height_min; })) - 4,
          hi = Math.max.apply(null, d.chart.map(function (c) { return c.height_max; })) + 4;
      inp.min = lo; inp.max = hi;
      var h = Math.max(lo, Math.min(hi, state.h)); inp.value = h; hv.textContent = h + ' cm';
      var pct = function (v) { return (v - lo) / (hi - lo) * 100; };
      var f = fits(d.chart, h), names = f.map(function (c) { return c.size; });
      ch.innerHTML = d.chart.map(function (c) {
        var na = !(d.stock[c.size] > 0), on = names.indexOf(c.size) >= 0;
        return '<div class="vsg-l' + (on ? ' on' : '') + (na ? ' na' : '') + '"><div class="vsg-s">' + c.size + '</div><div class="vsg-t">' +
          '<div class="vsg-b" style="left:' + pct(c.height_min) + '%;width:' + (pct(c.height_max) - pct(c.height_min)) + '%"></div>' +
          '<div class="vsg-r" style="' + (pct(c.height_max) > 78 ? 'right:calc(' + (100 - pct(c.height_min)) + '% + 6px)' : 'left:calc(' + pct(c.height_max) + '% + 6px)') + '">' +
          c.height_min + '–' + c.height_max + (na ? ' · ' + t.na : '') + '</div></div></div>';
      }).join('') + '<div class="vsg-m" style="left:calc(46px + (100% - 46px) * ' + (pct(h) / 100) + ')"></div>';
      var step = (hi - lo) / 4; ax.innerHTML = [0, 1, 2, 3, 4].map(function (i) { return '<span>' + Math.round(lo + step * i) + (i === 0 || i === 4 ? ' cm' : '') + '</span>'; }).join('');
      var stocked = names.filter(function (s) { return d.stock[s] > 0; }), B = function (s) { return '<b>' + s + '</b>'; };
      if (!names.length) rec.innerHTML = t.out;
      else if (!stocked.length) {
        var avail = d.chart.filter(function (c) { return d.stock[c.size] > 0; });
        var near = avail.sort(function (a, b) { return Math.abs((a.height_min + a.height_max) / 2 - h) - Math.abs((b.height_min + b.height_max) / 2 - h); })[0];
        rec.innerHTML = near ? fmt(t.only, { s: B(names.join('/')), c: B(near.size) }) : t.out;
      } else if (stocked.length === 1) rec.innerHTML = t.size + ': ' + B(stocked[0]);
      else if (stocked.length === 2) rec.innerHTML = fmt(t.between, { a: B(stocked[0]), b: B(stocked[1]) });
      else rec.innerHTML = fmt(t.three, { list: stocked.map(B).join(', '), m: B(stocked[1]) });
      if (opt.onPick) opt.onPick(stocked, h);
    }
    inp.addEventListener('input', function () { state.h = +inp.value; draw(); });
    api.setHeight = function (h) { if (h >= 120 && h <= 230) { state.h = h; draw(); } };
    api.ready = load(opt.slug).then(function (d) { state.d = d; draw(); return d.chart.length > 0; });
    return api;
  }
  window.VengaSizeGuide = { mount: mount, recommend: recommend, load: load };
})();
