// La page de présentation de Notaru, sur fradali.github.io/notaru/ :
// index.html (fr), en.html, ar.html. La politique de confidentialité reste
// dans son propre dépôt (fradali/Notaru-politique), à l'adresse déclarée à Play.
//
// Statique, sans script, avec les mots de la fiche Play Store
// (notaru/docs/PLAY.md) : rien ici ne promet ce que l'app ne fait pas.
// Lancer :  node outils/build-notaru.mjs   (images : notaru/img/, styles : notaru/landing.css)
import { writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const SITE = 'https://fradali.github.io/notaru/';
const POLICY = 'https://fradali.github.io/Notaru-politique/';
const PLAY = 'https://play.google.com/store/apps/details?id=app.notaru';
const CONTACT = 'cntctari@gmail.com';
const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', 'notaru');

const SHOTS = ['1-liste', '2-enregistrement', '3-notes', '4-reglages'];

const PAGES = {
  fr: {
    file: 'index.html',
    dir: 'ltr',
    label: 'Français',
    hl: 'fr',
    title: 'Notaru — tu écoutes, Notaru prend les notes',
    description:
      'Notaru enregistre, transcrit au fil de l’eau et tire des notes structurées de tes cours, réunions et entretiens : résumé, plan, définitions, points à retenir, en .docx.',
    name: 'Notaru',
    tagline: 'Tu poses ton téléphone, tu écoutes. Notaru prend les notes.',
    lead: 'Notaru enregistre ce qui se dit autour de toi, le transcrit au fil de l’eau, et en tire des notes structurées : un résumé, un plan, les définitions des termes employés et les points à retenir. Le tout s’exporte en fichier Word.',
    uses: 'Un cours magistral, une réunion d’équipe, un entretien, une conférence, une consultation, une soutenance : tout ce qui se parle et mérite d’être relu.',
    play: ['Disponible sur', 'Google Play'],
    ios: ['Bientôt sur', 'iPhone'],
    shotsTitle: 'Un aperçu',
    shots: ['Tes enregistrements', 'L’enregistrement continue, écran verrouillé', 'Des notes structurées, modifiables', 'Ta clé et tes réglages'],
    featuresTitle: 'Ce que tu récupères',
    gets: [
      'Une transcription qui s’affiche pendant l’enregistrement, par tranches',
      'Un résumé de l’ensemble, pas seulement du début',
      'Un plan qui suit le déroulé réel de ce qui a été dit',
      'Les définitions des termes techniques employés',
      'Les points importants, rassemblés',
      'Un fichier .docx propre, cherchable, partageable',
    ],
    cards: [
      ['L’enregistrement ne s’arrête pas', 'C’est la raison d’être de l’application. Tu peux verrouiller l’écran, ranger le téléphone dans ta poche, ouvrir une autre application : l’enregistrement continue. Une notification reste affichée pendant toute la durée — c’est elle qui empêche Android de couper le micro.'],
      ['Tes données restent chez toi', 'Notaru n’a ni compte, ni serveur, ni traceur. Tes enregistrements, tes notes et ta clé restent sur ton téléphone. Seul l’audio part vers le service de transcription que tu configures, puis le texte pour en rédiger les notes. Pas de publicité, pas de mesure d’audience.'],
      ['Il te faut une clé', 'Notaru ne vend pas d’abonnement et ne prend pas de commission : la transcription passe par ton propre compte, avec ta propre clé. Groq en fournit une gratuitement, en trente secondes, sans carte bancaire. L’app t’explique la marche à suivre, étape par étape.'],
      ['Trois langues', 'Interface en français, anglais et arabe, avec un affichage de droite à gauche complet pour l’arabe.'],
    ],
    age: 'Application réservée aux personnes de 18 ans et plus, les services de transcription exigeant cet âge pour ouvrir un compte.',
    privacy: ['Politique de confidentialité', POLICY + 'confidentialite.html'],
    apps: 'Mes autres applications',
    contact: 'Contact',
  },
  en: {
    file: 'en.html',
    dir: 'ltr',
    label: 'English',
    hl: 'en',
    title: 'Notaru — you listen, Notaru takes the notes',
    description:
      'Notaru records, transcribes as it goes, and turns your lectures, meetings and interviews into structured notes: summary, outline, definitions, key points, as a .docx.',
    name: 'Notaru',
    tagline: 'Put your phone down and listen. Notaru takes the notes.',
    lead: 'Notaru records what is said around you, transcribes it as it goes, and turns it into structured notes: a summary, an outline, definitions of the terms used, and the key points. All of it exports to a Word file.',
    uses: 'A lecture, a team meeting, an interview, a conference, a consultation, a thesis defence: anything that is spoken and worth reading again.',
    play: ['Get it on', 'Google Play'],
    ios: ['Coming soon to', 'iPhone'],
    shotsTitle: 'A look inside',
    shots: ['Your recordings', 'The recording keeps going, screen locked', 'Structured notes you can edit', 'Your key and settings'],
    featuresTitle: 'What you get',
    gets: [
      'A transcript that appears while you record, chunk by chunk',
      'A summary of the whole thing, not just the beginning',
      'An outline that follows what was actually said',
      'Definitions of the technical terms used',
      'The important points, gathered in one place',
      'A clean .docx file, searchable and shareable',
    ],
    cards: [
      ['The recording does not stop', 'This is why the app exists. You can lock the screen, put the phone in your pocket, open another app: the recording keeps going. A notification stays visible the whole time — that is what stops Android from cutting off the microphone.'],
      ['Your data stays with you', 'Notaru has no account, no server and no tracker. Your recordings, your notes and your key stay on your phone. Only the audio goes to the transcription service you configure, then the text so the notes can be written. No advertising, no analytics.'],
      ['You need a key', 'Notaru sells no subscription and takes no commission: transcription runs through your own account, with your own key. Groq provides one free, in thirty seconds, with no credit card. The app walks you through it, step by step.'],
      ['Three languages', 'Interface in French, English and Arabic, with full right-to-left support for Arabic.'],
    ],
    age: 'For people aged 18 and over: the transcription services require that age to open an account.',
    privacy: ['Privacy policy', POLICY + 'privacy.html'],
    apps: 'My other apps',
    contact: 'Contact',
  },
  ar: {
    file: 'ar.html',
    dir: 'rtl',
    label: 'العربية',
    hl: 'ar',
    title: 'نوتارو — استمع، ونوتارو يدوّن الملاحظات',
    description:
      'يسجّل نوتارو ويفرّغ أولًا بأول، ويستخرج من دروسك واجتماعاتك ومقابلاتك ملاحظات منظّمة: ملخّص، وخطة، وتعريفات، ونقاط مهمّة، في ملف docx.',
    name: 'نوتارو',
    tagline: 'ضع هاتفك واستمع. نوتارو يدوّن الملاحظات.',
    lead: 'يسجّل نوتارو ما يُقال من حولك، ويفرّغه أولًا بأول، ثم يستخرج منه ملاحظات منظّمة: ملخّص، وخطة، وتعريفات المصطلحات المستعملة، والنقاط المهمّة. ويمكن تصدير ذلك كلّه إلى ملف Word.',
    uses: 'محاضرة، اجتماع فريق، مقابلة، مؤتمر، استشارة، مناقشة: كل ما يُقال ويستحقّ أن يُراجَع.',
    play: ['متوفر على', 'Google Play'],
    ios: ['قريبًا على', 'iPhone'],
    shotsTitle: 'لمحة من التطبيق',
    shots: ['تسجيلاتك', 'التسجيل يستمرّ والشاشة مقفلة', 'ملاحظات منظّمة قابلة للتعديل', 'مفتاحك وإعداداتك'],
    featuresTitle: 'ما الذي تحصل عليه',
    gets: [
      'نصّ يظهر أثناء التسجيل، على دفعات',
      'ملخّص للمحتوى كلّه، لا لبدايته فقط',
      'خطة تتبع التسلسل الفعلي لما قيل',
      'تعريفات المصطلحات التقنية المستعملة',
      'النقاط المهمّة، مجموعة في مكان واحد',
      'ملف docx. نظيف، قابل للبحث والمشاركة',
    ],
    cards: [
      ['التسجيل لا يتوقّف', 'هذا هو سبب وجود التطبيق. يمكنك قفل الشاشة، ووضع الهاتف في جيبك، وفتح تطبيق آخر: التسجيل يستمرّ. يبقى إشعار ظاهرًا طوال المدّة — وهو ما يمنع أندرويد من قطع الميكروفون.'],
      ['بياناتك تبقى عندك', 'لا حساب في نوتارو، ولا خادم، ولا متتبّعات. تسجيلاتك وملاحظاتك ومفتاحك تبقى على هاتفك. يُرسَل الصوت فقط إلى خدمة التفريغ التي تختارها، ثم النصّ لكتابة الملاحظات. لا إعلانات، ولا قياس للاستخدام.'],
      ['تحتاج إلى مفتاح', 'نوتارو لا يبيع اشتراكًا ولا يأخذ عمولة: التفريغ يمرّ عبر حسابك أنت، وبمفتاحك أنت. يوفّر Groq مفتاحًا مجانيًا في ثلاثين ثانية، بدون بطاقة بنكية، والتطبيق يشرح الخطوات واحدة واحدة.'],
      ['ثلاث لغات', 'الواجهة بالفرنسية والإنجليزية والعربية، مع دعم كامل للكتابة من اليمين إلى اليسار.'],
    ],
    age: 'التطبيق مخصّص لمن بلغوا 18 عامًا فأكثر، لأنّ خدمات التفريغ تشترط هذا السنّ لفتح حساب.',
    // Pas encore de version arabe de la politique : l'anglaise, et on le dit.
    privacy: ['سياسة الخصوصية (بالإنجليزية)', POLICY + 'privacy.html'],
    apps: 'تطبيقاتي الأخرى',
    contact: 'تواصل معنا',
  },
};

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const playIcon = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 4.5v15l12-7.5z" fill="currentColor"/></svg>`;
const phoneIcon = `<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="7" y="2.5" width="10" height="19" rx="2.5" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M10.5 18.5h3" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`;

function page(lang) {
  const p = PAGES[lang];
  const alt = Object.entries(PAGES)
    .map(([l, q]) => `<link rel="alternate" hreflang="${l}" href="${SITE}${q.file === 'index.html' ? '' : q.file}">`)
    .join('\n  ');
  const nav = Object.entries(PAGES)
    .map(([l, q]) => `<a href="${q.file === 'index.html' ? './' : q.file}" lang="${l}"${l === lang ? ' aria-current="page"' : ` hreflang="${l}"`}>${q.label}</a>`)
    .join('');
  const shots = SHOTS.map(
    (s, i) => `
        <li><figure><img src="img/${s}.jpg" width="540" height="960" loading="${i < 2 ? 'eager' : 'lazy'}" alt="${esc(p.shots[i])}"><figcaption>${esc(p.shots[i])}</figcaption></figure></li>`,
  ).join('');
  const gets = p.gets.map((g) => `<li>${esc(g)}</li>`).join('');
  const cards = p.cards.map(([t, x]) => `
        <li class="card"><h3>${esc(t)}</h3><p>${esc(x)}</p></li>`).join('');
  const own = p.file === 'index.html' ? '' : p.file;

  return `<!doctype html>
<html lang="${lang}" dir="${p.dir}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(p.title)}</title>
  <meta name="description" content="${esc(p.description)}">
  <meta name="color-scheme" content="light dark">
  <meta name="theme-color" content="#D2452F">
  <link rel="canonical" href="${SITE}${own}">
  ${alt}
  <link rel="alternate" hreflang="x-default" href="${SITE}">
  <meta property="og:type" content="website">
  <meta property="og:title" content="${esc(p.title)}">
  <meta property="og:description" content="${esc(p.description)}">
  <meta property="og:url" content="${SITE}${own}">
  <meta property="og:image" content="${SITE}img/og.jpg">
  <meta name="twitter:card" content="summary_large_image">
  <link rel="icon" href="logo.svg" type="image/svg+xml">
  <link rel="apple-touch-icon" href="img/icon-192.png">
  <link rel="stylesheet" href="landing.css">
</head>
<body>
  <header class="top">
    <a class="brand" href="${own || './'}"><img src="img/icon-192.png" width="36" height="36" alt=""><span>${esc(p.name)}</span></a>
    <nav class="langs" aria-label="Language">${nav}</nav>
  </header>

  <main>
    <section class="hero">
      <div class="hero__text">
        <h1>${esc(p.name)}</h1>
        <p class="hero__tagline">${esc(p.tagline)}</p>
        <p class="hero__lead">${esc(p.lead)}</p>
        <div class="stores">
          <a class="store" href="${PLAY}&amp;hl=${p.hl}" rel="noopener">${playIcon}<span><small>${esc(p.play[0])}</small><strong>${esc(p.play[1])}</strong></span></a>
          <span class="store store--soon" aria-disabled="true">${phoneIcon}<span><small>${esc(p.ios[0])}</small><strong>${esc(p.ios[1])}</strong></span></span>
        </div>
        <p class="hero__uses">${esc(p.uses)}</p>
      </div>
      <div class="hero__art">
        <img src="img/2-enregistrement.jpg" width="540" height="960" alt="">
      </div>
    </section>

    <section class="features" aria-labelledby="gets-title">
      <h2 id="gets-title">${esc(p.featuresTitle)}</h2>
      <ul class="gets">${gets}</ul>
      <ul class="cards">${cards}
      </ul>
    </section>

    <section class="shots" aria-labelledby="shots-title">
      <h2 id="shots-title">${esc(p.shotsTitle)}</h2>
      <ul>${shots}
      </ul>
    </section>

    <section class="age"><p>${esc(p.age)}</p></section>
  </main>

  <footer class="foot">
    <nav aria-label="${esc(p.privacy[0])}">
      <a href="${p.privacy[1]}">${esc(p.privacy[0])}</a>
      <a href="mailto:${CONTACT}">${esc(p.contact)}</a>
      <a href="../${p.file === 'index.html' ? '' : p.file}">${esc(p.apps)}</a>
    </nav>
    <p class="muted">© 2026 Notaru</p>
  </footer>
</body>
</html>
`;
}

for (const lang of Object.keys(PAGES)) writeFileSync(join(ROOT, PAGES[lang].file), page(lang));
console.log('pages écrites : notaru/index.html, notaru/en.html, notaru/ar.html');
