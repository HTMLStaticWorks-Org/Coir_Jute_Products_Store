(()=>{const r=document.documentElement,t=localStorage.getItem('coir-theme'),d=localStorage.getItem('coir-dir');if(t)r.dataset.theme=t;if(d)r.dir=d;const tb=document.querySelector('[data-theme-toggle]');if(tb){tb.textContent=r.dataset.theme==='dark'?'☀':'☾';tb.setAttribute('aria-label',r.dataset.theme==='dark'?'Switch to light mode':'Switch to dark mode');tb.setAttribute('title',r.dataset.theme==='dark'?'Light mode':'Dark mode');tb.onclick=()=>{r.dataset.theme=r.dataset.theme==='dark'?'light':'dark';localStorage.setItem('coir-theme',r.dataset.theme);tb.textContent=r.dataset.theme==='dark'?'☀':'☾';tb.setAttribute('aria-label',r.dataset.theme==='dark'?'Switch to light mode':'Switch to dark mode');tb.setAttribute('title',r.dataset.theme==='dark'?'Light mode':'Dark mode')}}const db=document.querySelector('[data-dir-toggle]');if(db){db.textContent=r.dir==='rtl'?'LTR':'RTL';db.onclick=()=>{r.dir=r.dir==='rtl'?'ltr':'rtl';localStorage.setItem('coir-dir',r.dir);db.textContent=r.dir==='rtl'?'LTR':'RTL'}}const m=document.querySelector('.menu-toggle'),n=document.querySelector('.nav-links');if(m&&n){m.setAttribute('aria-expanded','false');const sync=open=>{n.classList.toggle('open',open);m.setAttribute('aria-expanded',String(open));m.textContent=open?'✕':'☰'};m.onclick=()=>sync(!n.classList.contains('open'));n.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>sync(false)));window.addEventListener('resize',()=>{if(window.innerWidth>1100)sync(false)})}const filterCards=b=>{document.querySelectorAll('[data-filter]').forEach(x=>x.classList.remove('active'));b.classList.add('active');const vis=[];document.querySelectorAll('[data-category]').forEach(c=>{const s=b.dataset.filter==='all'||c.dataset.category===b.dataset.filter;c.hidden=!s;c.classList.remove('card-center-lone');if(s)vis.push(c)});if(vis.length%2===1){vis[vis.length-1].classList.add('card-center-lone')}};document.querySelectorAll('[data-filter]').forEach(b=>b.onclick=()=>filterCards(b));const initCards=Array.from(document.querySelectorAll('.grid-3 > .card:not([hidden])'));if(initCards.length%2===1){initCards[initCards.length-1].classList.add('card-center-lone')}document.querySelectorAll('form[data-local-form]').forEach(f=>f.onsubmit=e=>{e.preventDefault();if(!f.reportValidity())return;const s=Object.entries(Object.fromEntries(new FormData(f))).map(([k,v])=>k+': '+v).join('\n');let o=f.querySelector('.enquiry-output');if(!o){o=document.createElement('textarea');o.className='enquiry-output';o.readOnly=true;o.style='width:100%;min-height:120px;margin-top:12px';f.append(o)}o.value=s;let p=f.querySelector('.form-status');p.textContent='Enquiry prepared. Copy the summary below and send it to your chosen business contact.';let c=f.querySelector('.copy-btn');if(!c){c=document.createElement('button');c.type='button';c.className='btn btn-outline copy-btn';c.textContent='Copy enquiry';c.onclick=()=>{o.select();document.execCommand('copy');c.textContent='Copied'};f.append(c)}});document.querySelectorAll('[data-year]').forEach(x=>x.textContent=new Date().getFullYear())
  // Back to top functionality
  const btt = document.getElementById('back-to-top');
  if (btt) {
    const toggleBtt = () => {
      btt.classList.toggle('visible', window.scrollY > 280);
    };
    window.addEventListener('scroll', toggleBtt, { passive: true });
    btt.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    toggleBtt();
  }
  const faqs = document.querySelectorAll('details.faq-item');
  faqs.forEach(item => {
    item.removeAttribute('open');
    item.addEventListener('toggle', () => {
      if (item.open) {
        faqs.forEach(other => {
          if (other !== item && other.open) other.removeAttribute('open');
        });
      }
    });
  });
})();
