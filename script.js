// Theme toggle with persistence and ARIA
(function(){
  const toggle = document.getElementById('theme-toggle');
  if(!toggle) return;

  function getSystemPref(){
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function getInitialTheme(){
    const stored = localStorage.getItem('theme');
    return stored || getSystemPref();
  }

  function applyTheme(theme){
    document.documentElement.setAttribute('data-theme', theme);
    toggle.textContent = theme === 'dark' ? '🌙' : '☀️';
    toggle.setAttribute('aria-label', theme === 'dark' ? 'Wissel naar licht thema' : 'Wissel naar donker thema');
    toggle.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
  }

  // Initialize
  applyTheme(getInitialTheme());

  // Toggle handler
  toggle.addEventListener('click', ()=>{
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', next);
    applyTheme(next);
  });

  // Keep in sync if system preference changes and no manual choice stored
  if(!localStorage.getItem('theme') && window.matchMedia){
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    mq.addEventListener?.('change', (e)=>{ applyTheme(e.matches ? 'dark' : 'light'); });
  }
})();

// Mobile menu toggle
(function(){
  const btn = document.querySelector('.nav-toggle');
  const menu = document.getElementById('menu');
  btn?.addEventListener('click', ()=>{
    const open = menu.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(open));
  });
})();

// Projects data (sample). Replace with your real school projects
const projects = [
  {
    id:'p1',
    title:'Streamix',
    category:['web'],
    description:'A streaming application built with modern web technologies.',
    image:'img/Screenshot 2025-09-23 142114.png',
    demo:'#', code:'https://github.com/JimVogelzangs2/Streamix'
  },
  {
    id:'p2',
    title:'Arduino-Alvik',
    category:['Arduino'],
    description:'An Arduino-based project for controlling the Alvik robot.',
    image:'img/download (22).jpg',
    demo:'#', code:'https://github.com/DaanSchepens/Arduino-Alvik'
  },
  {
    id:'p3',
    title:'Laravel Project',
    category:['web'],
    description:'A web application built using the Laravel PHP framework.',
    image:'img/Screenshot 2025-10-22 092850.png',
    demo:'#', code:'https://github.com/JimVogelzangs2/Laravel_Project'
  },
  {
    id:'p4',
    title:'QuizeMaster',
    category:['app'],
    description:'A quiz application with interactive features and scoring system.',
    image:'img/Screenshot 2025-10-22 092212.png',
    demo:'#', code:'https://github.com/DaanSchepens/QuizeMaster'
  },
  {
    id:'p5',
    title:'CryptoMania',
    category:['web'],
    description:'A website displaying all cryptocurrency coins with their current values.',
    image:'img\Screenshot 2025-10-22 141232.png',
    demo:'#', code:'https://github.com/DaanSchepens/CryptoMania'
  }
];

// Render projects
(function(){
  const grid = document.getElementById('projects-grid');
  function cardTemplate(p){
    return `
      <article class="card project-card" data-id="${p.id}">
        <img src="${p.image}" alt="${p.title}">
        <h3>${p.title}</h3>
        <p>${p.description}</p>
        <div class="project-tags">${p.category.map(c=>`<span class="chip">${c}</span>`).join('')}</div>
        <div>
          <button class="button" data-open-modal="${p.id}">Details</button>
        </div>
      </article>
    `;
  }
  grid.innerHTML = projects.map(cardTemplate).join('');
})();

// Filters
(function(){
  const buttons = Array.from(document.querySelectorAll('.filter'));
  const grid = document.getElementById('projects-grid');
  function applyFilter(kind){
    const cards = Array.from(grid.children);
    cards.forEach(card=>{
      const project = projects.find(p=>p.id===card.dataset.id);
      const show = kind==='all' || project.category.includes(kind);
      card.style.display = show ? '' : 'none';
    });
  }
  buttons.forEach(btn=>{
    btn.addEventListener('click', ()=>{
      buttons.forEach(b=>b.classList.remove('is-active'));
      btn.classList.add('is-active');
      applyFilter(btn.dataset.filter);
    });
  });
})();

// Modal
(function(){
  const modal = document.getElementById('project-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalDesc = document.getElementById('modal-description');
  const modalImg = document.getElementById('modal-image');
  const modalDemo = document.getElementById('modal-demo');
  const modalCode = document.getElementById('modal-code');
  const grid = document.getElementById('projects-grid');

  function openModal(p){
    modalTitle.textContent = p.title;
    modalDesc.textContent = p.description;
    modalImg.src = p.image;
    modalImg.alt = p.title;
    modalCode.href = p.code || '#';
    modal.setAttribute('aria-hidden','false');
    document.body.style.overflow = 'hidden';
  }
  function closeModal(){
    modal.setAttribute('aria-hidden','true');
    document.body.style.overflow = '';
  }
  grid.addEventListener('click', (e)=>{
    const btn = e.target.closest('[data-open-modal]');
    if(!btn) return;
    const id = btn.getAttribute('data-open-modal');
    const p = projects.find(x=>x.id===id);
    if(p) openModal(p);
  });
  modal.addEventListener('click', (e)=>{
    if(e.target.matches('[data-close-modal], .modal-backdrop')) closeModal();
  });
  window.addEventListener('keydown', (e)=>{ if(e.key==='Escape') closeModal(); });
})();

// Contact form removed - using direct contact links instead

// Year in footer
document.getElementById('year').textContent = String(new Date().getFullYear());


