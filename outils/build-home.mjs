// L'accueil de fradali.github.io : les applications, en fr (index.html), en, ar.
// Chaque carte mène à la page de l'app : Notaru ici (notaru/), Jalsati sur son
// propre site (niyara.web.app), dans la même langue.
// Lancer :  node outils/build-home.mjs
import { copyFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const SITE = 'https://fradali.github.io/';
const CONTACT = 'cntctari@gmail.com';

const APPS = [
  {
    id: 'jalsati',
    icon: 'img/jalsati.png',
    href: { fr: 'https://niyara.web.app/', en: 'https://niyara.web.app/en', ar: 'https://niyara.web.app/ar' },
    name: { fr: 'Jalsati', en: 'Jalsati', ar: 'جلستي' },
    line: {
      fr: 'Coran, prière, adhkar : dites combien de temps vous avez, Jalsati compose votre jalsa.',
      en: 'Quran, prayer, adhkar: say how much time you have, Jalsati builds your jalsa.',
      ar: 'القرآن والصلاة والأذكار: أخبر التطبيق بوقتك، فيُعدّ لك جلستك.',
    },
    status: { fr: 'Bientôt sur Google Play', en: 'Coming soon to Google Play', ar: 'قريبًا على Google Play' },
  },
  {
    id: 'notaru',
    icon: 'notaru/img/icon-192.png',
    href: { fr: 'notaru/', en: 'notaru/en.html', ar: 'notaru/ar.html' },
    name: { fr: 'Notaru', en: 'Notaru', ar: 'نوتارو' },
    line: {
      fr: 'Tu poses ton téléphone, tu écoutes. Notaru prend les notes.',
      en: 'Put your phone down and listen. Notaru takes the notes.',
      ar: 'ضع هاتفك واستمع. نوتارو يدوّن الملاحظات.',
    },
    status: { fr: 'Disponible sur Google Play', en: 'On Google Play', ar: 'متوفر على Google Play' },
  },
];

const PAGES = {
  fr: { file: 'index.html', dir: 'ltr', label: 'Français', title: 'Applications', lead: 'Des applications calmes, utiles, respectueuses de ce qui vous appartient : sans publicité, sans traceur.', ios: 'iPhone : bientôt', see: 'Découvrir', contact: 'Contact' },
  en: { file: 'en.html', dir: 'ltr', label: 'English', title: 'Apps', lead: 'Calm, useful apps that respect what is yours: no ads, no trackers.', ios: 'iPhone: coming soon', see: 'Discover', contact: 'Contact' },
  ar: { file: 'ar.html', dir: 'rtl', label: 'العربية', title: 'التطبيقات', lead: 'تطبيقات هادئة ونافعة، تحترم ما هو لك: بلا إعلانات ولا متتبعات.', ios: 'قريبًا على iPhone', see: 'اكتشف', contact: 'تواصل معنا' },
};

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

function page(lang) {
  const p = PAGES[lang];
  const own = p.file === 'index.html' ? '' : p.file;
  const nav = Object.entries(PAGES)
    .map(([l, q]) => `<a href="${q.file === 'index.html' ? './' : q.file}" lang="${l}"${l === lang ? ' aria-current="page"' : ` hreflang="${l}"`}>${q.label}</a>`)
    .join('');
  const alt = Object.entries(PAGES)
    .map(([l, q]) => `<link rel="alternate" hreflang="${l}" href="${SITE}${q.file === 'index.html' ? '' : q.file}">`)
    .join('\n  ');
  const cards = APPS.map(
    (a) => `
      <li>
        <a class="app app--${a.id}" href="${a.href[lang]}">
          <img src="${a.icon}" width="72" height="72" alt="">
          <span class="app__text">
            <strong>${esc(a.name[lang])}</strong>
            <span>${esc(a.line[lang])}</span>
            <small><bdi>${esc(a.status[lang])}</bdi> · <bdi>${esc(p.ios)}</bdi></small>
          </span>
          <span class="app__go">${esc(p.see)}</span>
        </a>
      </li>`,
  ).join('');

  return `<!doctype html>
<html lang="${lang}" dir="${p.dir}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(p.title)} — Jalsati, Notaru</title>
  <meta name="description" content="${esc(p.lead)}">
  <meta name="color-scheme" content="light dark">
  <link rel="canonical" href="${SITE}${own}">
  ${alt}
  <link rel="alternate" hreflang="x-default" href="${SITE}">
  <link rel="stylesheet" href="home.css">
</head>
<body>
  <header class="top">
    <nav class="langs" aria-label="Language">${nav}</nav>
  </header>
  <main>
    <h1>${esc(p.title)}</h1>
    <p class="lead">${esc(p.lead)}</p>
    <ul class="apps">${cards}
    </ul>
  </main>
  <footer class="foot"><a href="mailto:${CONTACT}">${esc(p.contact)}</a></footer>
</body>
</html>
`;
}

copyFileSync('C:/Users/alifr/Desktop/niyara/site/img/icon-192.png', join(ROOT, 'img', 'jalsati.png'));
for (const lang of Object.keys(PAGES)) writeFileSync(join(ROOT, PAGES[lang].file), page(lang));
console.log('accueil écrit : index.html, en.html, ar.html');
