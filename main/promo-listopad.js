/* Okienko „Oferta listopadowa” (Fundacja MyWay). Pokazuje się przy każdym wejściu do 30.11.2026 23:59, potem samo znika.
   Teksty bez słów zakazanych w Google Ads. Usunięcie promocji: zdejmij <script src="/main/promo-listopad.js"> ze stron. */
(function () {
  var KONIEC = new Date('2026-11-30T23:59:59+01:00');
  var SKORKA = (document.currentScript && document.currentScript.getAttribute('data-skorka')) || 'las';
  if (Date.now() >= KONIEC.getTime()) return;

  var fonty = document.createElement('link');
  fonty.rel = 'stylesheet';
  fonty.href = 'https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,600;1,9..144,500&family=Inter:wght@400;500;600;700;800&family=Space+Grotesk:wght@600;700&display=swap';
  document.head.appendChild(fonty);

  var css = '' +
    '.mwp-tlo{position:fixed;inset:0;background:rgba(8,14,24,.62);-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px);display:flex;align-items:center;justify-content:center;padding:16px;z-index:2147483000;font-family:Inter,system-ui,sans-serif}' +
    '.mwp-tlo *{box-sizing:border-box;margin:0;padding:0}' +
    '.mwp-karta{position:relative;width:100%;max-width:460px;max-height:calc(100vh - 32px);overflow:auto;border-radius:28px;background:#faf7f0;box-shadow:0 30px 80px rgba(0,0,0,.45);animation:mwpWej .45s cubic-bezier(.2,.9,.3,1.2)}' +
    '@keyframes mwpWej{from{opacity:0;transform:translateY(18px) scale(.96)}to{opacity:1;transform:none}}' +
    '.mwp-x{position:absolute;top:12px;right:12px;z-index:5;width:34px;height:34px;border-radius:50%;border:0;background:rgba(255,255,255,.92);font-size:20px;line-height:34px;color:#333;cursor:pointer}' +
    '.mwp-foto{position:relative;height:230px;background:url(/main/images/aerial.jpg) 40% 60%/cover}' +
    '.mwp-foto:after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(24,50,41,.05) 30%,rgba(250,247,240,0) 60%,#faf7f0 100%)}' +
    '.mwp-znak{position:absolute;top:16px;left:16px;z-index:2;display:inline-flex;gap:8px;align-items:center;background:#0b0f14;color:#fff;font-weight:800;font-size:12px;letter-spacing:.14em;text-transform:uppercase;padding:8px 14px;border-radius:999px;box-shadow:0 6px 20px rgba(0,0,0,.35)}' +
    '.mwp-znak i{width:8px;height:8px;border-radius:50%;background:#d39a4a;animation:mwpPuls 1.8s infinite}' +
    '@keyframes mwpPuls{0%{box-shadow:0 0 0 0 rgba(211,154,74,.7)}70%{box-shadow:0 0 0 10px transparent}100%{box-shadow:0 0 0 0 transparent}}' +
    '.mwp-fund{position:absolute;left:0;right:0;bottom:16px;z-index:2;text-align:center}' +
    '.mwp-fund span{display:inline-block;background:rgba(255,255,255,.95);padding:9px 18px;border-radius:14px;color:#2f5a4c;font-family:Fraunces,Georgia,serif;font-size:16px;font-style:italic;box-shadow:0 8px 24px rgba(0,0,0,.18)}' +
    '.mwp-tresc{padding:22px 26px 24px;text-align:center}' +
    '.mwp-h{font-family:Fraunces,Georgia,serif;font-weight:600;color:#1f2d28;font-size:33px;line-height:1.12;letter-spacing:-.01em}' +
    '.mwp-h em{font-style:italic;color:#b97a2e}' +
    '.mwp-pod{margin:10px auto 0;max-width:340px;font-size:15px;line-height:1.5;color:#55606e}' +
    '.mwp-zegar{display:flex;justify-content:center;gap:8px;margin:18px 0 6px}' +
    '.mwp-zegar div{width:58px;padding:9px 0 7px;border-radius:14px;background:linear-gradient(180deg,#24463b,#183229);color:#fff}' +
    '.mwp-zegar b{display:block;font-size:22px;font-variant-numeric:tabular-nums;line-height:1}' +
    '.mwp-zegar small{font-size:10px;letter-spacing:.12em;text-transform:uppercase;opacity:.75}' +
    '.mwp-do{font-size:12px;color:#7a8492;font-weight:500}' +
    '.mwp-tt{margin:18px 0 0;font-size:13px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#2f5a4c}' +
    '.mwp-tel{display:flex;align-items:center;justify-content:center;gap:10px;width:100%;padding:15px;border-radius:16px;text-decoration:none;font-weight:700;font-size:18px;margin-top:10px;transition:transform .15s}' +
    '.mwp-tel:hover{transform:translateY(-1px)}' +
    '.mwp-tel svg{width:20px;height:20px}' +
    '.mwp-t1{background:#c98a3c;color:#fff;box-shadow:0 10px 26px rgba(201,138,60,.4)}' +
    '.mwp-t2{background:#fff;color:#2f5a4c;border:2px solid #d9cdb5}' +
    '.mwp-nie{margin-top:14px;background:none;border:0;color:#8a93a0;font-size:13px;text-decoration:underline;cursor:pointer}' +
    (SKORKA === 'zielona' ?
      '.mwp-karta{background:#fff}' +
      '.mwp-foto:after{background:linear-gradient(180deg,rgba(6,40,28,.05) 30%,rgba(255,255,255,0) 60%,#fff 100%)}' +
      '.mwp-znak i{background:hsl(155,65%,55%);animation-name:mwpPulsZ}' +
      '@keyframes mwpPulsZ{0%{box-shadow:0 0 0 0 hsla(155,65%,55%,.7)}70%{box-shadow:0 0 0 10px transparent}100%{box-shadow:0 0 0 0 transparent}}' +
      '.mwp-fund span{font-family:Inter,system-ui,sans-serif;font-style:normal;font-size:14px;font-weight:600;color:hsl(158,60%,20%)}' +
      '.mwp-h{font-family:"Space Grotesk",Inter,sans-serif;font-weight:700;color:hsl(220,20%,8%);font-size:32px;letter-spacing:-.02em}' +
      '.mwp-h em{font-style:normal;color:hsl(150,70%,36%)}' +
      '.mwp-zegar div{background:linear-gradient(180deg,hsl(158,60%,20%),hsl(160,70%,10%))}' +
      '.mwp-tt{color:hsl(150,70%,29%)}' +
      '.mwp-t1{background:hsl(150,70%,38%);box-shadow:0 10px 26px hsla(150,70%,38%,.4)}' +
      '.mwp-t2{color:hsl(150,70%,29%);border-color:hsl(155,65%,85%)}' : '') +
    '@media (max-width:420px){.mwp-foto{height:190px}.mwp-h{font-size:28px}.mwp-tresc{padding:18px 18px 20px}.mwp-zegar div{width:54px}}';

  var tel = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/></svg>';

  function pokaz() {
    var st = document.createElement('style');
    st.textContent = css;
    document.head.appendChild(st);
    var tlo = document.createElement('div');
    tlo.className = 'mwp-tlo';
    tlo.innerHTML =
      '<div class="mwp-karta" role="dialog" aria-modal="true" aria-label="Oferta listopadowa MyWay">' +
      '<button class="mwp-x" aria-label="Zamknij">×</button>' +
      '<div class="mwp-foto"><div class="mwp-znak"><i></i>Oferta listopadowa</div>' +
      '<div class="mwp-fund"><span>Dzięki wsparciu Fundacji MyWay</span></div></div>' +
      '<div class="mwp-tresc">' +
      '<h2 class="mwp-h">4-tygodniowy pobyt<br><em>teraz taniej</em></h2>' +
      '<p class="mwp-pod">Kameralny ośrodek w Kąpinie, w otoczeniu lasu. Zadzwoń, wszystko wyjaśnimy. Rozmowa jest bez zobowiązań.</p>' +
      '<div class="mwp-zegar"></div><div class="mwp-do">Oferta ważna do 30 listopada</div>' +
      '<div class="mwp-tt">Szczegóły pod telefonem</div>' +
      '<a class="mwp-tel mwp-t1" href="tel:+48731395295">' + tel + '731 395 295</a>' +
      '<a class="mwp-tel mwp-t2" href="tel:+48536598821">' + tel + '536 598 821</a>' +
      '<button class="mwp-nie">Nie teraz</button></div></div>';
    document.body.appendChild(tlo);

    var zegar = tlo.querySelector('.mwp-zegar');
    function p(n) { return (n < 10 ? '0' : '') + n; }
    function tik() {
      var d = KONIEC.getTime() - Date.now();
      if (d <= 0) { zamknij(); return; }
      zegar.innerHTML = [[Math.floor(d / 864e5), 'dni'], [Math.floor(d % 864e5 / 36e5), 'godz'], [Math.floor(d % 36e5 / 6e4), 'min'], [Math.floor(d % 6e4 / 1e3), 'sek']]
        .map(function (x) { return '<div><b>' + p(x[0]) + '</b><small>' + x[1] + '</small></div>'; }).join('');
    }
    var id = setInterval(tik, 1000);
    tik();
    function zamknij() { clearInterval(id); if (tlo.parentNode) tlo.parentNode.removeChild(tlo); document.removeEventListener('keydown', esc); }
    function esc(e) { if (e.key === 'Escape') zamknij(); }
    document.addEventListener('keydown', esc);
    tlo.addEventListener('click', function (e) { if (e.target === tlo) zamknij(); });
    tlo.querySelector('.mwp-x').addEventListener('click', zamknij);
    tlo.querySelector('.mwp-nie').addEventListener('click', zamknij);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', pokaz); else pokaz();
})();
