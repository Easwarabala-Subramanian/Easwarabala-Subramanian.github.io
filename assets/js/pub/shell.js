// Site header/footer for the E-paper, Magazine and Admin pages (they live one folder down).
const nav = (on) => [['index.html','Home'],['about.html','About'],['books.html','Books'],['research.html','Research'],['gallery.html','Gallery'],['epaper/index.html','E-paper'],['magazine/index.html','Magazine'],['amazon.html','Buy on Amazon'],['contact.html','Contact']]
  .map(([h,t]) => `<li><a href="../${h}"${h.startsWith(on) ? ' class="active"' : ''}>${t}</a></li>`).join('');
export function shell(on) {
  document.getElementById('hdr').outerHTML = `<header class="site-header"><div class="nav-wrap"><a class="brand" href="../index.html">Easwarabala Subramanian<span class="brand-sub">Author &amp; Researcher</span></a><button class="nav-toggle" aria-label="Toggle navigation" aria-expanded="false">&#9776;</button><nav class="main-nav"><ul>${nav(on)}</ul></nav></div></header>`;
  document.getElementById('ftr').outerHTML = `<footer class="site-footer"><div class="container footer-inner"><div><a class="brand" href="../index.html">Easwarabala Subramanian</a></div><p class="footer-note">&copy; ${new Date().getFullYear()} Easwarabala Subramanian. All rights reserved.</p></div></footer>`;
  const t = document.querySelector('.nav-toggle'), n = document.querySelector('.main-nav');
  t.onclick = () => t.setAttribute('aria-expanded', n.classList.toggle('open'));
}
export const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
export const fmtDate = d => { const x = new Date(d + 'T00:00:00'); return isNaN(x) ? d : x.toLocaleDateString(undefined, { day: 'numeric', month: 'long', year: 'numeric' }); };
export async function loadIssues(type) {
  try { const r = await fetch('../issues/issues.json', { cache: 'no-store' }); const j = await r.json(); return j.issues.filter(i => i.type === type).sort((a, b) => b.date.localeCompare(a.date)); }
  catch (e) { return []; }
}
