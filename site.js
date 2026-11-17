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
  "rate": "Rate",
  "language": "Language",
  "help": "Help and support",
  "terms": "Privacy and terms",
  "install": "Add to Chrome"
 },
 "ar": {
  "support": "ادعمنا بحب",
  "auto": "المظهر: تلقائي",
  "light": "المظهر: فاتح",
  "dark": "المظهر: داكن",
  "private": "خاص 100%",
  "nothing": "لا شيء يغادر متصفحك",
  "rate": "تقييم",
  "language": "اللغة",
  "help": "المساعدة والدعم",
  "terms": "الخصوصية والشروط",
  "install": "إضافة إلى Chrome"
 },
 "bn": {
  "support": "ভালোবেসে সাপোর্ট করুন",
  "auto": "থিম: অটো",
  "light": "থিম: লাইট",
  "dark": "থিম: ডার্ক",
  "private": "100% প্রাইভেট",
  "nothing": "কিছুই আপনার ব্রাউজারের বাইরে যায় না",
  "rate": "রেটিং দিন",
  "language": "ভাষা",
  "help": "সাহায্য ও সহায়তা",
  "terms": "গোপনীয়তা ও শর্তাবলি",
  "install": "Chrome-এ যোগ করুন"
 },
 "cs": {
  "support": "Podpoř s láskou",
  "auto": "Motiv: automatický",
  "light": "Motiv: světlý",
  "dark": "Motiv: tmavý",
  "private": "100% soukromé",
  "nothing": "Nic neopustí tvůj prohlížeč",
  "rate": "Ohodnotit",
  "language": "Jazyk",
  "help": "Nápověda a podpora",
  "terms": "Soukromí a podmínky",
  "install": "Přidat do Chrome"
 },
 "da": {
  "support": "Støt med kærlighed",
  "auto": "Tema: auto",
  "light": "Tema: lyst",
  "dark": "Tema: mørkt",
  "private": "100% privat",
  "nothing": "Intet forlader din browser",
  "rate": "Bedøm",
  "language": "Sprog",
  "help": "Hjælp og support",
  "terms": "Privatliv og vilkår",
  "install": "Føj til Chrome"
 },
 "de": {
  "support": "Mit Liebe unterstützen",
  "auto": "Design: automatisch",
  "light": "Design: hell",
  "dark": "Design: dunkel",
  "private": "100% privat",
  "nothing": "Nichts verlässt deinen Browser",
  "rate": "Bewerten",
  "language": "Sprache",
  "help": "Hilfe und Support",
  "terms": "Datenschutz und Bedingungen",
  "install": "Zu Chrome hinzufügen"
 },
 "el": {
  "support": "Στήριξε με αγάπη",
  "auto": "Θέμα: αυτόματο",
  "light": "Θέμα: ανοιχτό",
  "dark": "Θέμα: σκούρο",
  "private": "100% ιδιωτικό",
  "nothing": "Τίποτα δεν φεύγει από τον browser σου",
  "rate": "Βαθμολόγηση",
  "language": "Γλώσσα",
  "help": "Βοήθεια και υποστήριξη",
  "terms": "Απόρρητο και όροι",
  "install": "Προσθήκη στο Chrome"
 },
 "es": {
  "support": "Apóyalo con cariño",
  "auto": "Tema: automático",
  "light": "Tema: claro",
  "dark": "Tema: oscuro",
  "private": "100% privado",
  "nothing": "Nada sale de tu navegador",
  "rate": "Valorar",
  "language": "Idioma",
  "help": "Ayuda y soporte",
  "terms": "Privacidad y términos",
  "install": "Añadir a Chrome"
 },
 "fr": {
  "support": "Soutenir avec amour",
  "auto": "Thème : auto",
  "light": "Thème : clair",
  "dark": "Thème : sombre",
  "private": "100 % privé",
  "nothing": "Rien ne quitte votre navigateur",
  "rate": "Noter",
  "language": "Langue",
  "help": "Aide et support",
  "terms": "Confidentialité et conditions",
  "install": "Ajouter à Chrome"
 },
 "gu": {
  "support": "પ્રેમથી સપોર્ટ કરો",
  "auto": "થીમ: ઑટો",
  "light": "થીમ: લાઇટ",
  "dark": "થીમ: ડાર્ક",
  "private": "100% ખાનગી",
  "nothing": "તમારા બ્રાઉઝરમાંથી કંઈ બહાર જતું નથી",
  "rate": "રેટિંગ આપો",
  "language": "ભાષા",
  "help": "મદદ અને સપોર્ટ",
  "terms": "પ્રાઇવસી અને શરતો",
  "install": "Chromeમાં ઉમેરો"
 },
 "hi": {
  "support": "प्यार से सपोर्ट करें",
  "auto": "थीम: ऑटो",
  "light": "थीम: लाइट",
  "dark": "थीम: डार्क",
  "private": "100% निजी",
  "nothing": "कुछ भी आपके ब्राउज़र से बाहर नहीं जाता",
  "rate": "रेटिंग दें",
  "language": "भाषा",
  "help": "मदद और सहायता",
  "terms": "गोपनीयता और शर्तें",
  "install": "Chrome में जोड़ें"
 },
 "it": {
  "support": "Sostienilo con amore",
  "auto": "Tema: automatico",
  "light": "Tema: chiaro",
  "dark": "Tema: scuro",
  "private": "Privato al 100%",
  "nothing": "Niente esce dal tuo browser",
  "rate": "Valuta",
  "language": "Lingua",
  "help": "Guida e assistenza",
  "terms": "Privacy e termini",
  "install": "Aggiungi a Chrome"
 },
 "ja": {
  "support": "応援する",
  "auto": "テーマ: 自動",
  "light": "テーマ: ライト",
  "dark": "テーマ: ダーク",
  "private": "100% プライベート",
  "nothing": "データはブラウザーの外に出ません",
  "rate": "評価する",
  "language": "言語",
  "help": "ヘルプとサポート",
  "terms": "プライバシーと規約",
  "install": "Chrome に追加"
 },
 "kn": {
  "support": "ಪ್ರೀತಿಯಿಂದ ಬೆಂಬಲಿಸಿ",
  "auto": "ಥೀಮ್: ಆಟೋ",
  "light": "ಥೀಮ್: ಲೈಟ್",
  "dark": "ಥೀಮ್: ಡಾರ್ಕ್",
  "private": "100% ಖಾಸಗಿ",
  "nothing": "ಏನೂ ನಿಮ್ಮ ಬ್ರೌಸರ್‌ನಿಂದ ಹೊರಗೆ ಹೋಗುವುದಿಲ್ಲ",
  "rate": "ರೇಟ್ ಮಾಡಿ",
  "language": "ಭಾಷೆ",
  "help": "ಸಹಾಯ ಮತ್ತು ಬೆಂಬಲ",
  "terms": "ಗೌಪ್ಯತೆ ಮತ್ತು ನಿಯಮಗಳು",
  "install": "Chrome ಗೆ ಸೇರಿಸಿ"
 },
 "ko": {
  "support": "응원하기",
  "auto": "테마: 자동",
  "light": "테마: 밝게",
  "dark": "테마: 어둡게",
  "private": "100% 비공개",
  "nothing": "브라우저 밖으로 나가는 건 없어요",
  "rate": "평가하기",
  "language": "언어",
  "help": "도움말 및 지원",
  "terms": "개인정보 및 약관",
  "install": "Chrome에 추가"
 },
 "hu": {
  "support": "Támogasd szeretettel",
  "auto": "Téma: automatikus",
  "light": "Téma: világos",
  "dark": "Téma: sötét",
  "private": "100% privát",
  "nothing": "Semmi sem hagyja el a böngésződet",
  "rate": "Értékelés",
  "language": "Nyelv",
  "help": "Súgó és támogatás",
  "terms": "Adatvédelem és feltételek",
  "install": "Hozzáadás a Chrome-hoz"
 },
 "ml": {
  "support": "സ്നേഹത്തോടെ പിന്തുണയ്ക്കൂ",
  "auto": "തീം: സ്വയമേവ",
  "light": "തീം: ലൈറ്റ്",
  "dark": "തീം: ഡാർക്ക്",
  "private": "100% സ്വകാര്യം",
  "nothing": "ഒന്നും നിങ്ങളുടെ ബ്രൗസറിന് പുറത്ത് പോകില്ല",
  "rate": "റേറ്റ് ചെയ്യുക",
  "language": "ഭാഷ",
  "help": "സഹായവും പിന്തുണയും",
  "terms": "സ്വകാര്യതയും നിബന്ധനകളും",
  "install": "Chrome-ലേക്ക് ചേർക്കുക"
 },
 "mr": {
  "support": "प्रेमाने सपोर्ट करा",
  "auto": "थीम: ऑटो",
  "light": "थीम: लाइट",
  "dark": "थीम: डार्क",
  "private": "100% खासगी",
  "nothing": "तुमच्या ब्राउझरबाहेर काहीही जात नाही",
  "rate": "रेटिंग द्या",
  "language": "भाषा",
  "help": "मदत आणि सपोर्ट",
  "terms": "गोपनीयता आणि अटी",
  "install": "Chrome मध्ये जोडा"
 },
 "nl": {
  "support": "Steun met liefde",
  "auto": "Thema: automatisch",
  "light": "Thema: licht",
  "dark": "Thema: donker",
  "private": "100% privé",
  "nothing": "Niets verlaat je browser",
  "rate": "Beoordelen",
  "language": "Taal",
  "help": "Hulp en ondersteuning",
  "terms": "Privacy en voorwaarden",
  "install": "Toevoegen aan Chrome"
 },
 "no": {
  "support": "Støtt med kjærlighet",
  "auto": "Tema: auto",
  "light": "Tema: lyst",
  "dark": "Tema: mørkt",
  "private": "100 % privat",
  "nothing": "Ingenting forlater nettleseren",
  "rate": "Vurder",
  "language": "Språk",
  "help": "Hjelp og støtte",
  "terms": "Personvern og vilkår",
  "install": "Legg til i Chrome"
 },
 "pl": {
  "support": "Wesprzyj z sercem",
  "auto": "Motyw: automatyczny",
  "light": "Motyw: jasny",
  "dark": "Motyw: ciemny",
  "private": "W 100% prywatne",
  "nothing": "Nic nie opuszcza Twojej przeglądarki",
  "rate": "Oceń",
  "language": "Język",
  "help": "Pomoc i wsparcie",
  "terms": "Prywatność i warunki",
  "install": "Dodaj do Chrome"
 },
 "pt-BR": {
  "support": "Apoie com carinho",
  "auto": "Tema: automático",
  "light": "Tema: claro",
  "dark": "Tema: escuro",
  "private": "100% privado",
  "nothing": "Nada sai do seu navegador",
  "rate": "Avaliar",
  "language": "Idioma",
  "help": "Ajuda e suporte",
  "terms": "Privacidade e termos",
  "install": "Adicionar ao Chrome"
 },
 "ro": {
  "support": "Susține cu drag",
  "auto": "Temă: automată",
  "light": "Temă: luminoasă",
  "dark": "Temă: întunecată",
  "private": "100% privat",
  "nothing": "Nimic nu iese din browserul tău",
  "rate": "Evaluează",
  "language": "Limbă",
  "help": "Ajutor și asistență",
  "terms": "Confidențialitate și termeni",
  "install": "Adaugă în Chrome"
 },
 "ru": {
  "support": "Поддержать с любовью",
  "auto": "Тема: авто",
  "light": "Тема: светлая",
  "dark": "Тема: тёмная",
  "private": "100% приватно",
  "nothing": "Ничего не покидает браузер",
  "rate": "Оценить",
  "language": "Язык",
  "help": "Помощь и поддержка",
  "terms": "Конфиденциальность и условия",
  "install": "Установить в Chrome"
 },
 "fi": {
  "support": "Tue rakkaudella",
  "auto": "Teema: automaattinen",
  "light": "Teema: vaalea",
  "dark": "Teema: tumma",
  "private": "100 % yksityinen",
  "nothing": "Mikään ei lähde selaimestasi",
  "rate": "Arvioi",
  "language": "Kieli",
  "help": "Ohje ja tuki",
  "terms": "Tietosuoja ja ehdot",
  "install": "Lisää Chromeen"
 },
 "sv": {
  "support": "Stöd med kärlek",
  "auto": "Tema: auto",
  "light": "Tema: ljust",
  "dark": "Tema: mörkt",
  "private": "100 % privat",
  "nothing": "Inget lämnar webbläsaren",
  "rate": "Betygsätt",
  "language": "Språk",
  "help": "Hjälp och support",
  "terms": "Integritet och villkor",
  "install": "Lägg till i Chrome"
 },
 "ta": {
  "support": "அன்புடன் ஆதரியுங்கள்",
  "auto": "தீம்: தானியங்கு",
  "light": "தீம்: லைட்",
  "dark": "தீம்: டார்க்",
  "private": "100% தனிப்பட்டது",
  "nothing": "எதுவும் உங்கள் உலாவியை விட்டு வெளியேறாது",
  "rate": "மதிப்பிடு",
  "language": "மொழி",
  "help": "உதவி மற்றும் ஆதரவு",
  "terms": "தனியுரிமை மற்றும் விதிமுறைகள்",
  "install": "Chrome-இல் சேர்"
 },
 "te": {
  "support": "ప్రేమతో సపోర్ట్ చేయండి",
  "auto": "థీమ్: ఆటో",
  "light": "థీమ్: లైట్",
  "dark": "థీమ్: డార్క్",
  "private": "100% ప్రైవేట్",
  "nothing": "ఏదీ మీ బ్రౌజర్ దాటి వెళ్లదు",
  "rate": "రేట్ చేయండి",
  "language": "భాష",
  "help": "సహాయం మరియు సపోర్ట్",
  "terms": "గోప్యత మరియు నిబంధనలు",
  "install": "Chrome కు జోడించండి"
 },
 "tr": {
  "support": "Sevgiyle destekleyin",
  "auto": "Tema: otomatik",
  "light": "Tema: açık",
  "dark": "Tema: koyu",
  "private": "%100 gizli",
  "nothing": "Hiçbir şey tarayıcınızdan çıkmaz",
  "rate": "Değerlendir",
  "language": "Dil",
  "help": "Yardım ve destek",
  "terms": "Gizlilik ve koşullar",
  "install": "Chrome'a ekle"
 },
 "uk": {
  "support": "Підтримати з любов'ю",
  "auto": "Тема: авто",
  "light": "Тема: світла",
  "dark": "Тема: темна",
  "private": "100% приватно",
  "nothing": "Ніщо не залишає ваш браузер",
  "rate": "Оцінити",
  "language": "Мова",
  "help": "Довідка та підтримка",
  "terms": "Конфіденційність і умови",
  "install": "Додати в Chrome"
 }
};
const LANGS = [['en', 'English', ''], ['ar', 'العربية', 'ar'], ['bn', 'বাংলা', 'bn'], ['cs', 'Čeština', 'cs'], ['da', 'Dansk', 'da'], ['de', 'Deutsch', 'de'], ['el', 'Ελληνικά', 'el'], ['es', 'Español', 'es'], ['fr', 'Français', 'fr'], ['gu', 'ગુજરાતી', 'gu'], ['hi', 'हिन्दी', 'hi'], ['it', 'Italiano', 'it'], ['ja', '日本語', 'ja'], ['kn', 'ಕನ್ನಡ', 'kn'], ['ko', '한국어', 'ko'], ['hu', 'Magyar', 'hu'], ['ml', 'മലയാളം', 'ml'], ['mr', 'मराठी', 'mr'], ['nl', 'Nederlands', 'nl'], ['no', 'Norsk', 'no'], ['pl', 'Polski', 'pl'], ['pt-BR', 'Português', 'pt-br'], ['ro', 'Română', 'ro'], ['ru', 'Русский', 'ru'], ['fi', 'Suomi', 'fi'], ['sv', 'Svenska', 'sv'], ['ta', 'தமிழ்', 'ta'], ['te', 'తెలుగు', 'te'], ['tr', 'Türkçe', 'tr'], ['uk', 'Українська', 'uk']];
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
// ?lang=xx (the extension adds it for its chosen language) counts as the reader's pick
const asked = new URLSearchParams(location.search).get('lang');
if (asked) store('vynkoLang', asked);
if (!folder) {
  const picked = store('vynkoLang');
  const want = (picked || navigator.language || '').toLowerCase().replace(/^(nb|nn)\b/, 'no'); // browsers say nb or nn for Norwegian
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
      <label class="langpick" title="${w.language}">${icon('languages')}<select id="langPick" aria-label="${w.language}">${LANGS.map(([code, name, f]) =>
        `<option value="${code}" data-folder="${f}" lang="${code}"${code === lang ? ' selected' : ''}>${name}</option>`).join('')}</select></label>
      <button class="ghost" id="themeBtn" type="button">${icon('monitor')}</button>
    </div>`;
  main.prepend(header);
  // the language menu: shows the current language, picking one opens this page in it (and remembers the pick)
  document.getElementById('langPick').onchange = e => {
    const opt = e.target.selectedOptions[0];
    store('vynkoLang', opt.value);
    location.href = pageIn(opt.dataset.folder) + location.hash;
  };
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
