// Header, footer, theme and language for every page of the Vynko site.
// Loaded in <head> without defer, so the theme is set before the page paints.
const VYNKO = {
  store: 'https://chromewebstore.google.com/detail/vynko-screen-recorder-scr/kknnimejmjhonepakiplgocadldibhmc',
  reviews: 'https://chromewebstore.google.com/detail/vynko-screen-recorder-scr/kknnimejmjhonepakiplgocadldibhmc/reviews',
  donate: 'https://paypal.me/mishravinay112',
  email: 'mishravinay112@gmail.com',
};
// the same words the extension uses, in each language it supports
const WORDS = {
 "en": {
  "support": "Support with love",
  "auto": "Theme: auto",
  "light": "Theme: light",
  "dark": "Theme: dark",
  "private": "100% private",
  "nothing": "Nothing leaves your browser",
  "language": "Language",
  "help": "Help and support",
  "terms": "Privacy and terms",
  "install": "Add to Chrome",
  "rate": "Rate"
 },
 "es": {
  "support": "Apóyalo con cariño",
  "auto": "Tema: automático",
  "light": "Tema: claro",
  "dark": "Tema: oscuro",
  "private": "100% privado",
  "nothing": "Nada sale de tu navegador",
  "language": "Idioma",
  "help": "Ayuda y soporte",
  "terms": "Privacidad y términos",
  "install": "Añadir a Chrome",
  "rate": "Valorar"
 },
 "pt-BR": {
  "support": "Apoie com carinho",
  "auto": "Tema: automático",
  "light": "Tema: claro",
  "dark": "Tema: escuro",
  "private": "100% privado",
  "nothing": "Nada sai do seu navegador",
  "language": "Idioma",
  "help": "Ajuda e suporte",
  "terms": "Privacidade e termos",
  "install": "Adicionar ao Chrome",
  "rate": "Avaliar"
 },
 "hi": {
  "support": "प्यार से सपोर्ट करें",
  "auto": "थीम: ऑटो",
  "light": "थीम: लाइट",
  "dark": "थीम: डार्क",
  "private": "100% निजी",
  "nothing": "कुछ भी आपके ब्राउज़र से बाहर नहीं जाता",
  "language": "भाषा",
  "help": "मदद और सहायता",
  "terms": "गोपनीयता और शर्तें",
  "install": "Chrome में जोड़ें",
  "rate": "रेटिंग दें"
 },
 "fr": {
  "support": "Soutenir avec amour",
  "auto": "Thème : auto",
  "light": "Thème : clair",
  "dark": "Thème : sombre",
  "private": "100 % privé",
  "nothing": "Rien ne quitte votre navigateur",
  "language": "Langue",
  "help": "Aide et support",
  "terms": "Confidentialité et conditions",
  "install": "Ajouter à Chrome",
  "rate": "Noter"
 },
 "de": {
  "support": "Mit Liebe unterstützen",
  "auto": "Design: automatisch",
  "light": "Design: hell",
  "dark": "Design: dunkel",
  "private": "100% privat",
  "nothing": "Nichts verlässt deinen Browser",
  "language": "Sprache",
  "help": "Hilfe und Support",
  "terms": "Datenschutz und Bedingungen",
  "install": "Zu Chrome hinzufügen",
  "rate": "Bewerten"
 },
 "ja": {
  "support": "応援する",
  "auto": "テーマ: 自動",
  "light": "テーマ: ライト",
  "dark": "テーマ: ダーク",
  "private": "100% プライベート",
  "nothing": "データはブラウザーの外に出ません",
  "language": "言語",
  "help": "ヘルプとサポート",
  "terms": "プライバシーと規約",
  "install": "Chrome に追加",
  "rate": "評価する"
 }
};
const LANGS = [['en', 'English', ''], ['es', 'Español', 'es'], ['pt-BR', 'Português', 'pt-br'], ['hi', 'हिन्दी', 'hi'], ['fr', 'Français', 'fr'], ['de', 'Deutsch', 'de'], ['ja', '日本語', 'ja']];
const ROOT = new URL('.', document.currentScript.src);
const store = (k, v) => { try { return v === undefined ? localStorage[k] : (localStorage[k] = v); } catch { return undefined; } };

// ---------- theme: system, light or dark, like the extension's theme button ----------
const THEME_ICON = { system: 'monitor', light: 'sun', dark: 'moon' };
const theme = () => store('theme') || 'system';
function applyTheme() {
  const mode = theme();
  if (mode === 'system') delete document.documentElement.dataset.theme;
  else document.documentElement.dataset.theme = mode;
  const btn = document.getElementById('themeBtn');
  if (!btn) return;
  btn.querySelector('use').setAttribute('href', `${ROOT}icons.svg#${THEME_ICON[mode]}`);
  btn.ariaLabel = btn.title = words()[{ system: 'auto', light: 'light', dark: 'dark' }[mode]];
}
applyTheme();

// ---------- language: every page exists in each language folder under the same name ----------
const words = () => WORDS[document.documentElement.lang] || WORDS.en;
const rel = location.pathname.slice(ROOT.pathname.length); // "de/privacy.html", "privacy.html", ""
const folder = LANGS.find(([, , f]) => f && rel.startsWith(f + '/'))?.[2] ?? '';
const file = rel.slice(folder ? folder.length + 1 : 0); // "privacy.html", "index.html" or ""
const pageIn = f => `${ROOT}${f ? f + '/' : ''}${file === 'index.html' ? '' : file}`;
// English is the default page: send readers to their own language, unless they picked one themselves
if (!folder) {
  const picked = store('vynkoLang');
  const want = (picked || navigator.language || '').toLowerCase();
  const match = LANGS.find(([code]) => code !== 'en' && (want === code.toLowerCase() || want.split('-')[0] === code.toLowerCase().split('-')[0]));
  if (match && picked !== 'en') location.replace(pageIn(match[2]) + location.hash);
}

addEventListener('DOMContentLoaded', () => {
  const w = words(), lang = document.documentElement.lang, icon = name => `<svg class="i" aria-hidden="true"><use href="${ROOT}icons.svg#${name}"/></svg>`;
  const main = document.querySelector('main');
  const header = document.createElement('header');
  header.className = 'site';
  header.innerHTML = `
    <a class="brand" href="${pageIn(folder).replace(/[^/]*$/, '')}"><img src="${ROOT}logo.svg" alt="" width="30" height="30">Vynko</a>
    <div class="actions">
      <a class="rate" href="${VYNKO.reviews}" rel="noopener">${icon('star')}<span>${w.rate}</span></a>
      <a class="donate" href="${VYNKO.donate}" rel="noopener">${icon('heart')}<span>${w.support}</span></a>
      <button class="ghost" id="themeBtn" type="button">${icon('monitor')}</button>
    </div>
    <nav class="langs" aria-label="${w.language}">${LANGS.map(([code, name, f]) =>
      `<a href="${pageIn(f)}" hreflang="${code}" lang="${code}"${code === lang ? ' aria-current="page"' : ''}>${name}</a>`).join('')}</nav>`;
  main.prepend(header);
  for (const a of header.querySelectorAll('.langs a')) a.addEventListener('click', () => store('vynkoLang', a.hreflang));
  document.getElementById('themeBtn').onclick = () => {
    const order = Object.keys(THEME_ICON);
    store('theme', order[(order.indexOf(theme()) + 1) % order.length]);
    if (document.startViewTransition && !matchMedia('(prefers-reduced-motion: reduce)').matches) document.startViewTransition(applyTheme);
    else applyTheme();
  };
  applyTheme();

  const footer = document.createElement('footer');
  footer.className = 'site';
  footer.innerHTML = `
    <div class="private"><span class="shield">${icon('shield-check')}</span><span><b>${w.private}</b><small>${w.nothing}</small></span></div>
    <nav class="links">
      <a href="${VYNKO.store}">${w.install}</a>
      <a href="${VYNKO.reviews}">${w.rate}</a>
      <a href="mailto:${VYNKO.email}">${w.help}</a>
      <a href="${ROOT}${folder ? folder + '/' : ''}privacy.html">${w.terms}</a>
      <a href="${ROOT}llms.txt">llms.txt</a>
    </nav>
    <p>Vinay Mishra · Indore, India</p>`;
  main.append(footer);
});
