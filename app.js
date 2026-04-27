/* ═══════════════════════════════════════════════════════════════
   app.js — Edoardo Crema Landing Page
   1. Traduzioni IT / EN
   2. Toggle lingua + persistenza localStorage
   3. Loader articoli da articles.json
   4. Scroll animations (IntersectionObserver)
═══════════════════════════════════════════════════════════════ */


/* ── 1. DIZIONARIO TRADUZIONI ──────────────────────────────── */
const i18n = {

  it: {
    /* NAV */
    "nav.process":   "Il Processo",
    "nav.work":      "Lavori",
    "nav.articles":  "Articoli",
    "nav.stack":     "Stack",
    "nav.cta":       "Contatti",

    /* HERO */
    "hero.label":    "Data Consultant",
    "hero.line1":    "Dal dato",
    "hero.line2":    "alla decisione.",
    "hero.sub":      "Engineering · Analysis · Science",
    "hero.desc":     "Mi occupo del dato a 360°. Dalla struttura di raccolta al modello predittivo, accompagno aziende e organizzazioni lungo l'intero ciclo di vita del dato — perché ogni fase conta, e nessuna va saltata.",
    "hero.cta1":     "Scopri il processo",
    "hero.cta2":     "Parliamo →",

    /* CYCLE */
    "cycle.collect": "Raccolta",
    "cycle.clean":   "Pulizia",
    "cycle.observe": "Osservazione",
    "cycle.predict": "Previsione",

    /* PROCESS */
    "process.title": "Il ciclo del dato",
    "p1.title":      "Raccolta",
    "p1.desc":       "Hai bisogno di strutturare come raccogli i tuoi dati? Ti aiuto a scegliere il database giusto, progettare lo schema e costruire le fondamenta su cui tutto il resto poggia.",
    "p2.title":      "Pulizia",
    "p2.desc":       "Il dato grezzo è rumore. Costruisco pipeline Python che raffinano, normalizzano e consolidano i tuoi dati da sorgenti eterogenee in un unico layer affidabile.",
    "p3.title":      "Osservazione",
    "p3.desc":       "Vuoi capire dove sei adesso? Analisi descrittive e dashboard KPI che trasformano i numeri in una fotografia chiara dello status quo — fruibile dalla direzione, non solo dai tecnici.",
    "p4.title":      "Previsione",
    "p4.desc":       "Il dato come bussola verso l'incertezza del futuro. Modelli matematici e statistici che non eliminano il rischio — lo quantificano, così le tue decisioni diventano orientate, non casuali.",

    /* WORK */
    "work.title":    "Lavori selezionati",
    "w1.title":      "Sistema P&L per commessa — da zero a produzione",
    "w1.impact":     "Primo sistema di controllo di gestione per progetto. Oggi strumento decisionale principale della direzione operativa.",
    "w1.act":        "Previsione",
    "w2.title":      "Modello Monte Carlo — Forecasting FY2027",
    "w2.impact":     "Distribuzione attesa del fatturato per cluster. Input diretto della pianificazione strategica della dirigenza.",
    "w2.act":        "Previsione",
    "w3.title":      "Modello ODE dei flussi operativi",
    "w3.impact":     "Dimostrata la fattibilità di ridurre gli FTE del 14% mantenendo i volumi. Ha abilitato un piano di riqualificazione.",
    "w3.act":        "Previsione",
    "w4.title":      "Pipeline ETL multi-gestionale su PostgreSQL",
    "w4.impact":     "Unificazione dati da tre gestionali eterogenei. Primo dataset aziendale unificato mai esistito.",
    "w4.act":        "Pulizia",
    "w5.title":      "Modello retention candidates",
    "w5.impact":     "Regressione logistica per stimare la permanenza dei nuovi assunti. Guida le strategie di recruiting verso profili ad alta retention.",
    "w5.act":        "Previsione",

    /* ARTICLES */
    "articles.title":       "Articoli & pensieri",
    "articles.loading":     "Caricamento articoli…",
    "articles.empty.title": "Articoli in arrivo.",
    "articles.empty.hint":  "Aggiungi contenuti in articles.json per popolare questa sezione.",

    /* STACK */
    "stack.title":   "Stack tecnico",

    /* CONTACT */
    "contact.title": "Iniziamo",
    "contact.desc":  "Hai un problema con i tuoi dati — non sai come raccoglierli, pulirli, interpretarli o usarli per fare previsioni? Parliamone. Il primo passo è sempre una conversazione.",
    "contact.quote": "\"Il dato non mente.<br>Ma va saputo ascoltare.\"",

    /* FOOTER */
    "footer.role":   "Data Consultant · Treviso, Italia",
  },

  en: {
    /* NAV */
    "nav.process":   "The Process",
    "nav.work":      "Work",
    "nav.articles":  "Articles",
    "nav.stack":     "Stack",
    "nav.cta":       "Contact",

    /* HERO */
    "hero.label":    "Data Consultant",
    "hero.line1":    "From data",
    "hero.line2":    "to decision.",
    "hero.sub":      "Engineering · Analysis · Science",
    "hero.desc":     "I work with data end-to-end. From collection architecture to predictive modelling, I guide companies through the full data lifecycle — because every stage matters, and none can be skipped.",
    "hero.cta1":     "See the process",
    "hero.cta2":     "Let's talk →",

    /* CYCLE */
    "cycle.collect": "Collection",
    "cycle.clean":   "Cleaning",
    "cycle.observe": "Observation",
    "cycle.predict": "Prediction",

    /* PROCESS */
    "process.title": "The data lifecycle",
    "p1.title":      "Collection",
    "p1.desc":       "Need to structure how you collect your data? I help you choose the right database, design the schema and build the foundation everything else rests on.",
    "p2.title":      "Cleaning",
    "p2.desc":       "Raw data is noise. I build Python pipelines that refine, normalise and consolidate your data from heterogeneous sources into a single reliable layer.",
    "p3.title":      "Observation",
    "p3.desc":       "Want to understand where you stand right now? Descriptive analyses and KPI dashboards that turn numbers into a clear picture of the status quo — readable by management, not just engineers.",
    "p4.title":      "Prediction",
    "p4.desc":       "Data as a compass into an uncertain future. Mathematical and statistical models that don't eliminate risk — they quantify it, so your decisions become informed, not random.",

    /* WORK */
    "work.title":    "Selected work",
    "w1.title":      "P&L system per project — built from scratch",
    "w1.impact":     "First project-level management control system ever built. Now the primary decision-making tool for the operations director.",
    "w1.act":        "Prediction",
    "w2.title":      "Monte Carlo model — FY2027 forecasting",
    "w2.impact":     "Expected revenue distribution by sales cluster. Now a direct input to the company's strategic planning.",
    "w2.act":        "Prediction",
    "w3.title":      "ODE model of operational flows",
    "w3.impact":     "Demonstrated feasibility of reducing FTEs by 14% while maintaining volume. Enabled a full staff retraining plan.",
    "w3.act":        "Prediction",
    "w4.title":      "Multi-ERP ETL pipeline on PostgreSQL",
    "w4.impact":     "Unified revenue data from three heterogeneous systems. The first consolidated company dataset ever to exist.",
    "w4.act":        "Cleaning",
    "w5.title":      "Candidate retention model",
    "w5.impact":     "Logistic regression to estimate new hire retention probability. Now guides recruiting strategy toward high-retention profiles.",
    "w5.act":        "Prediction",

    /* ARTICLES */
    "articles.title":       "Articles & thoughts",
    "articles.loading":     "Loading articles…",
    "articles.empty.title": "Articles coming soon.",
    "articles.empty.hint":  "Add entries to articles.json to populate this section.",

    /* STACK */
    "stack.title":   "Tech stack",

    /* CONTACT */
    "contact.title": "Let's start",
    "contact.desc":  "Do you have a data problem — not sure how to collect, clean, interpret or forecast with your data? Let's talk. The first step is always a conversation.",
    "contact.quote": "\"Data doesn't lie.<br>But you have to know how to listen.\"",

    /* FOOTER */
    "footer.role":   "Data Consultant · Treviso, Italy",
  }

};


/* ── 2. MOTORE I18N ────────────────────────────────────────── */
let currentLang = localStorage.getItem('lang') || 'it';

function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);

  /* Aggiorna tutti gli elementi con data-i18n */
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const value = i18n[lang][key];
    if (value !== undefined) {
      /* Usa innerHTML per i tag <br> nelle quote */
      el.innerHTML = value;
    }
  });

  /* Aggiorna il bottone toggle — mostra la lingua alternativa */
  const btn = document.getElementById('lang-toggle');
  if (btn) btn.textContent = lang === 'it' ? 'EN' : 'IT';

  /* Aggiorna l'attributo lang dell'HTML per accessibilità */
  document.documentElement.lang = lang;

  /* Ricarica le card articoli nella lingua corretta */
  renderArticles(lang);
}


/* ── 3. TOGGLE LINGUA ──────────────────────────────────────── */
document.getElementById('lang-toggle').addEventListener('click', () => {
  applyLanguage(currentLang === 'it' ? 'en' : 'it');
});


/* ── 4. LOADER ARTICOLI ────────────────────────────────────── */
let articlesData = [];   /* cache — fetch una volta sola */

async function fetchArticles() {
  if (articlesData.length > 0) return articlesData;
  try {
    const res = await fetch('articles.json');
    if (!res.ok) throw new Error('fetch failed');
    articlesData = await res.json();
    return articlesData;
  } catch {
    return [];
  }
}

async function renderArticles(lang) {
  const container = document.getElementById('articles-container');
  if (!container) return;

  const t = i18n[lang];
  container.innerHTML = `<div class="articles-placeholder">${t['articles.loading']}</div>`;

  const articles = await fetchArticles();

  if (!articles || articles.length === 0) {
    container.innerHTML = `
      <div class="articles-placeholder">
        <p style="font-family:'Playfair Display',serif;font-size:20px;font-style:italic;margin-bottom:8px">
          ${t['articles.empty.title']}
        </p>
        <p style="font-size:12px;letter-spacing:.05em;opacity:.6">
          ${t['articles.empty.hint']}
        </p>
      </div>`;
    return;
  }

  /* Ogni articolo può avere campi localizzati: title_it/title_en
     oppure un singolo title se è solo in una lingua */
  container.innerHTML = articles.map(a => {
    const title   = a[`title_${lang}`]   || a.title   || '';
    const excerpt = a[`excerpt_${lang}`] || a.excerpt || '';
    const cat     = a[`category_${lang}`]|| a.category|| '';
    const date    = a.date    || '';
    const readTime= a.readTime|| '';
    const url     = a.url     || '#';

    return `
      <div class="article-card" onclick="window.open('${url}', '_blank')">
        <div class="article-cat">${cat}</div>
        <div class="article-title">${title}</div>
        <div class="article-excerpt">${excerpt}</div>
        <div class="article-meta">
          <span>${date}</span>
          <span>${readTime}</span>
        </div>
      </div>`;
  }).join('');
}


/* ── 5. SCROLL ANIMATIONS ──────────────────────────────────── */
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);   /* anima una volta sola */
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));


/* ── 6. INIT ───────────────────────────────────────────────── */
applyLanguage(currentLang);
