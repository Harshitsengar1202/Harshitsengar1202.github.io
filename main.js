// ── CURSOR ──
const cur = document.getElementById('cur');
const curRing = document.getElementById('cur-ring');
let mx=0,my=0,rx=0,ry=0;
document.addEventListener('mousemove', e => {
  mx=e.clientX; my=e.clientY;
  cur.style.left=(mx-5)+'px'; cur.style.top=(my-5)+'px';
});
(function animRing(){
  rx+=(mx-rx-19)*.13; ry+=(my-ry-19)*.13;
  curRing.style.left=rx+'px'; curRing.style.top=ry+'px';
  requestAnimationFrame(animRing);
})();

// ── SCROLL REVEAL ──
const revealEls = document.querySelectorAll('.reveal');
const ro = new IntersectionObserver(entries => {
  entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('on'); });
}, { threshold:.08, rootMargin:'0px 0px -50px 0px' });
revealEls.forEach(el => ro.observe(el));

// ── ACTIVE NAV ──
const path = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(a => {
  const href = a.getAttribute('href');
  if(href === path || (path === '' && href === 'index.html')) a.classList.add('active');
});
