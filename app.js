/* ── SCROLL ANIMATIONS ─────────────────────────────────────── */
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('visible');
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));


/* ── ARTICLES LOADER ───────────────────────────────────────── */
async function loadArticles() {
  const container = document.getElementById('articles-container');

  try {
    const res = await fetch('articles.json');
    if (!res.ok) throw new Error('fetch failed');

    const articles = await res.json();
    if (!articles || articles.length === 0) throw new Error('empty');

    container.innerHTML = articles.map(a => `
      <div class="article-card" onclick="window.open('${a.url || '#'}', '_blank')">
        <div class="article-cat">${a.category || 'Articolo'}</div>
        <div class="article-title">${a.title}</div>
        <div class="article-excerpt">${a.excerpt || ''}</div>
        <div class="article-meta">
          <span>${a.date || ''}</span>
          <span>${a.readTime || ''}</span>
        </div>
      </div>
    `).join('');

  } catch {
    container.innerHTML = `
      <div class="articles-placeholder">
        <p style="font-family:'EB Garamond',serif;font-size:18px;margin-bottom:8px">
          Articoli in arrivo.
        </p>
        <p style="font-size:12px;letter-spacing:.05em">
          Aggiungi contenuti in <code>articles.json</code> per popolare questa sezione.
        </p>
      </div>
    `;
  }
}

loadArticles();

