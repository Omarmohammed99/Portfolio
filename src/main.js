import { projects, getProject, profile } from './content/projects.js';
import './styles.css';

const email = 'ommo9745@gmail.com';
const phone = '+201095106878';
const linkedin = 'https://www.linkedin.com/in/omar-m-ibrahim-/';
const cvUrl = '/files/Omar_Mohamed_Ibrahim_CV.pdf';
const app = document.querySelector('#app');
let lastPointerPosition = null;
let cursorCleanup = () => {};
const iconPaths = {
  linkedin: '<path d="M6.5 8.5v9M6.5 5.5v.1M10.5 17.5v-5a3 3 0 0 1 6 0v5M10.5 10v7"/><circle cx="6.5" cy="6" r=".8"/>',
  github: '<path d="M9 19c-4.2 1.2-4.2-2.1-5.8-2.5M15 21v-3.4a3 3 0 0 0-.8-2.3c2.7-.3 5.5-1.3 5.5-6a4.7 4.7 0 0 0-1.2-3.2 4.3 4.3 0 0 0-.1-3.2s-1-.3-3.4 1.2a11.7 11.7 0 0 0-6.2 0C6.4 2.6 5.4 2.9 5.4 2.9a4.3 4.3 0 0 0-.1 3.2A4.7 4.7 0 0 0 4.1 9.3c0 4.7 2.8 5.7 5.5 6a3 3 0 0 0-.8 2.3V21"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
  phone: '<path d="M7 3H5a2 2 0 0 0-2 2 16 16 0 0 0 16 16 2 2 0 0 0 2-2v-2l-4-2-2 2a13 13 0 0 1-6-6l2-2-2-4Z"/>',
  arrow: '<path d="M5 12h14M13 5l7 7-7 7"/>',
  external: '<path d="M14 4h6v6M20 4l-9 9"/><path d="M18 13v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6"/>',
  download: '<path d="M12 3v12m0 0 4-4m-4 4-4-4M5 17v3h14v-3"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
  moon: '<path d="M20.5 14A8.5 8.5 0 0 1 10 3.5 8.7 8.7 0 1 0 20.5 14Z"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  close: '<path d="m6 6 12 12M18 6 6 18"/>'
};

function icon(name, size = 18) {
  return `<svg aria-hidden="true" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${iconPaths[name] || ''}</svg>`;
}

function routeInfo() {
  const path = location.pathname.replace(/\/$/, '') || '/';
  const slug = path.startsWith('/projects/') ? path.slice('/projects/'.length) : null;
  return { path, slug, project: slug ? getProject(slug) : null, portfolio: path === '/portfolio' };
}

function header() {
  return `<header class="site-header">
    <a class="wordmark" href="/" data-route aria-label="Omar Mohamed, home">OM<span>.</span></a>
    <nav class="desktop-nav" aria-label="Main navigation">
      <a href="/portfolio#work" data-nav-section="work">Selected work</a>
      <a href="/portfolio#experience" data-nav-section="experience">Experience</a>
      <a href="/portfolio#contact" data-nav-section="contact">Contact</a>
    </nav>
    <div class="header-actions">
      <a class="cv-link" href="${cvUrl}" download="Omar_Mohamed_Ibrahim_CV.pdf">CV ${icon('download', 15)}</a>
      <button class="theme-toggle" type="button" aria-label="Switch to light theme" title="Switch theme">${icon('sun')}</button>
      <button class="menu-toggle" type="button" aria-label="Open menu" aria-expanded="false">${icon('menu')}</button>
    </div>
    <nav class="mobile-nav" aria-label="Mobile navigation" hidden>
      <a href="/portfolio#work" data-nav-section="work">Selected work</a>
      <a href="/portfolio#experience" data-nav-section="experience">Experience</a>
      <a href="/portfolio#contact" data-nav-section="contact">Contact</a>
      <a href="${cvUrl}" download="Omar_Mohamed_Ibrahim_CV.pdf">Download CV</a>
    </nav>
  </header>`;
}

function socialLinks(compact = false) {
  const links = [
    ['LinkedIn', linkedin, 'linkedin'],
    ['GitHub', profile, 'github'],
    ['Email', `mailto:${email}`, 'mail'],
    ['Phone', `tel:${phone}`, 'phone']
  ];
  return `<div class="social-links ${compact ? 'social-links--compact' : ''}" aria-label="Contact shortcuts">${links.map(([label, href, name]) => `<a class="social-link" href="${href}" ${href.startsWith('http') ? 'target="_blank" rel="noreferrer"' : ''} aria-label="${label}" title="${label}">${icon(name)}</a>`).join('')}</div>`;
}

function hero() {
  return `<section class="hero" id="home" aria-labelledby="hero-title">
    <div class="hero-copy">
      <p class="eyebrow hero-kicker"><span class="status-mark"></span> AI ENGINEER <span class="eyebrow-sep">/</span> CAIRO, EGYPT</p>
      <h1 id="hero-title">Hi, I'm<br/><span class="hero-name">Omar<span class="period">.</span></span></h1>
      <p class="hero-tagline">Turning ideas into<br/><em>intelligent solutions.</em></p>
      <p class="hero-role">AI Engineer <span>|</span> Data Scientist</p>
      <div class="hero-actions">
        <a class="button button--primary" href="/portfolio#about" data-explore>Explore My Portfolio <span>${icon('arrow', 17)}</span></a>
        <a class="text-link" href="${cvUrl}" download="Omar_Mohamed_Ibrahim_CV.pdf">Download CV ${icon('download', 15)}</a>
      </div>
      ${socialLinks(true)}
    </div>
    <figure class="portrait-frame" data-cursor="Explore">
      <img src="/media/omar-opera-house.jpg" alt="Omar at Cairo Opera House at night" fetchpriority="high" width="1052" height="1600" />
      <figcaption><span>CAIRO OPERA HOUSE</span><span>30°02′ N / 31°13′ E</span></figcaption>
      <div class="portrait-index">OM<br/><span>26</span></div>
    </figure>
    <div class="hero-footnote"><span>01 — INTRODUCTION</span><span>SCROLL TO EXPLORE <span aria-hidden="true">↓</span></span></div>
  </section>`;
}

function projectVisual(project, large = false) {
  return `<div class="project-visual ${large ? 'project-visual--large' : ''}" data-cursor="View" role="img" aria-label="Typographic project illustration: ${project.visual}">
    <div class="visual-grid"></div>
    <span class="visual-orbit visual-orbit--one"></span><span class="visual-orbit visual-orbit--two"></span>
    <span class="visual-index">${project.number} / SYSTEM STUDY</span>
    <strong>${project.visual.split(' / ').map(part => `<span>${part}</span>`).join('')}</strong>
    <span class="visual-caption">ENGINEERING NOTES <i></i></span>
  </div>`;
}

function projectActions(project) {
  return `<div class="project-actions">
    <a class="text-link" href="/projects/${project.slug}" data-route>View case study ${icon('arrow', 16)}</a>
    ${project.demo ? `<a class="text-link text-link--quiet" href="${project.demo}" target="_blank" rel="noreferrer" aria-label="${project.title} live demo, opens in a new tab">Live demo ${icon('external', 14)}</a>` : ''}
    ${project.source ? `<a class="text-link text-link--quiet" href="${project.source}" target="_blank" rel="noreferrer" aria-label="${project.title} source code on GitHub, opens in a new tab">Source code ${icon('external', 14)}</a>` : `<span class="pending-link">Source link pending</span>`}
  </div>`;
}

function projectRow(project, index) {
  const flagship = index === 0;
  return `<article class="project-row ${flagship ? 'project-row--flagship' : ''} ${index % 2 ? 'project-row--reverse' : ''}" data-reveal>
    <a class="project-media" href="/projects/${project.slug}" data-route aria-label="View ${project.title} case study">${projectVisual(project, flagship)}</a>
    <div class="project-copy">
      <p class="eyebrow"><span>${project.number}</span> ${project.eyebrow}</p>
      <h3><a href="/projects/${project.slug}" data-route>${project.title}</a></h3>
      <p>${project.short}</p>
      <div class="project-tags">${project.tags.map(tag => `<span>${tag}</span>`).join('')}</div>
      ${projectActions(project)}
    </div>
  </article>`;
}

function aboutSection() {
  return `<section class="about section-wrap" id="about" aria-labelledby="about-title">
    <div class="section-heading"><p class="eyebrow">01 / ABOUT ME</p><span class="heading-rule"></span></div>
    <div class="about-grid">
      <h2 id="about-title">Intelligence,<br/><em>engineered.</em></h2>
      <div class="about-copy"><p class="lede">I'm Omar, a Computer Science graduate and AI Engineer drawn to the point where research meets a real workflow.</p><p>I work across generative AI, retrieval systems, agents, and computer vision. I like the unglamorous parts too: connecting models to dependable APIs, making their outputs easier to review, and bringing the whole thing into use.</p><a class="text-link" href="#experience">A little more about my path ${icon('arrow', 16)}</a></div>
    </div>
  </section>`;
}

function workSection() {
  return `<section class="work-section section-wrap" id="work" aria-labelledby="work-title">
    <div class="section-heading"><p class="eyebrow">02 / SELECTED WORK</p><span class="heading-rule"></span><span class="section-note">FOUR PROJECTS · FOUR QUESTIONS</span></div>
    <div class="work-intro"><h2 id="work-title">Built to meet<br/><em>the real world.</em></h2><p>From incident response to road safety, each project starts with a problem worth making clearer.</p></div>
    <div class="project-list">${projects.map(projectRow).join('')}</div>
    <div class="all-projects"><a class="button button--secondary" href="${profile}" target="_blank" rel="noreferrer">Explore All Projects on GitHub ${icon('external', 15)}</a><span>More work lives on GitHub.</span></div>
  </section>`;
}

function experienceSection() {
  return `<section class="experience section-wrap" id="experience" aria-labelledby="experience-title">
    <div class="section-heading"><p class="eyebrow">03 / EXPERIENCE & EDUCATION</p><span class="heading-rule"></span></div>
    <h2 class="section-title" id="experience-title">A foundation in<br/><em>data and systems.</em></h2>
    <div class="timeline">
      <article class="timeline-row" data-reveal><p class="timeline-date">JUL — AUG<br/>2025</p><div><p class="eyebrow">TRAINING</p><h3>Data Analysis Trainee</h3><p class="timeline-place">AITB</p></div><p class="timeline-detail">Worked with Python and Power BI on exploratory analysis, KPI dashboards, and ETL workflows across business datasets.</p></article>
      <article class="timeline-row" data-reveal><p class="timeline-date">2022 — 2026</p><div><p class="eyebrow">EDUCATION</p><h3>B.Sc. in Computer Science</h3><p class="timeline-place">Future University in Egypt</p></div><p class="timeline-detail">Graduated with a Very Good overall grade. CGPA: 3.1 / 4.0. Graduation project: Sentinel AI.</p></article>
    </div>
  </section>`;
}

const skills = [
  ['GenAI & Agents', 'RAG Architecture, LangChain, LangGraph, CrewAI, ChromaDB, Vector Databases, Embeddings, Context Retrieval, Prompt Engineering'],
  ['Machine Learning & Computer Vision', 'Deep Learning, PyTorch, TensorFlow, OpenCV, MobileNet, YOLO, Object Detection, CNN, LSTM, scikit-learn'],
  ['Data & Programming', 'Python, SQL, Power BI, Tableau, Pandas, NumPy, Feature Engineering, Exploratory Data Analysis'],
  ['Backend & Deployment', 'FastAPI, Flask, Docker, REST APIs, Hugging Face Spaces, Git']
];

function skillsSection() {
  return `<section class="skills section-wrap" id="skills" aria-labelledby="skills-title">
    <div class="section-heading"><p class="eyebrow">04 / TECHNICAL SKILLS</p><span class="heading-rule"></span></div>
    <div class="skills-heading"><h2 id="skills-title">Tools for<br/><em>the work.</em></h2><p>Grouped by the problems they help me solve.</p></div>
    <div class="skill-list">${skills.map(([title, list], i) => `<article class="skill-row" data-reveal><span class="skill-number">0${i + 1}</span><h3>${title}</h3><p>${list}</p></article>`).join('')}</div>
  </section>`;
}

function contactSection() {
  return `<section class="contact section-wrap" id="contact" aria-labelledby="contact-title">
    <div class="section-heading"><p class="eyebrow">05 / CONTACT</p><span class="heading-rule"></span></div>
    <div class="contact-grid"><div><p class="eyebrow">HAVE A GOOD PROBLEM?</p><h2 id="contact-title">Let's make<br/><em>something matter.</em></h2><p class="contact-intro">If you’re working on a thoughtful AI product or want to compare notes, I’d be glad to hear from you.</p></div>
    <div class="contact-panel"><a class="contact-email" href="mailto:${email}">${email} ${icon('arrow', 17)}</a><div class="contact-methods"><a href="${linkedin}" target="_blank" rel="noreferrer">LinkedIn ${icon('external', 14)}</a><a href="${profile}" target="_blank" rel="noreferrer">GitHub ${icon('external', 14)}</a><a href="tel:${phone}">+20 1095106878 ${icon('phone', 14)}</a></div>
    <form class="contact-form" id="contact-form"><label for="message">A note to start with</label><textarea id="message" name="message" rows="3" required maxlength="1200" placeholder="What are you thinking about?"></textarea><button class="button button--primary" type="submit">Draft an email ${icon('arrow', 16)}</button><p class="form-note" id="form-note">Your email app will open with a draft. This page does not send or store messages.</p><p class="form-status" id="form-status" aria-live="polite"></p></form></div></div>
  </section>`;
}

function footer() {
  return `<footer class="site-footer"><div class="footer-top"><button class="footer-mark" type="button" aria-expanded="false" aria-controls="build-note">OM<span>.</span></button><p id="build-note" hidden>A small note from the build: good AI work is measured by what people can do with it.</p><div class="footer-links"><a href="${linkedin}" target="_blank" rel="noreferrer">LinkedIn</a><a href="${profile}" target="_blank" rel="noreferrer">GitHub</a><a href="mailto:${email}">Email</a></div></div><div class="footer-bottom"><span>© ${new Date().getFullYear()} Omar Mohamed</span><span>AI ENGINEER · DATA SCIENTIST</span><a href="#home">BACK TO TOP ↑</a></div></footer>`;
}

function portfolioContent() {
  return `<main id="main-content" tabindex="-1" class="portfolio-page">${aboutSection()}${workSection()}${experienceSection()}${skillsSection()}${contactSection()}</main>`;
}

function caseStudy(project) {
  const pIndex = projects.indexOf(project);
  return `<main id="main-content" tabindex="-1" class="case-page section-wrap">
    <a class="back-link" href="/portfolio#work" data-route>← Back to selected work</a>
    <header class="case-header"><p class="eyebrow">PROJECT ${project.number} <span class="eyebrow-sep">/</span> ${project.eyebrow}</p><h1>${project.title}</h1><p class="case-deck">${project.short}</p><div class="case-actions">${project.demo ? `<a class="button button--primary" href="${project.demo}" target="_blank" rel="noreferrer" aria-label="${project.title} live demo, opens in a new tab">Live demo ${icon('external', 15)}</a>` : ''}${project.source ? `<a class="button button--secondary" href="${project.source}" target="_blank" rel="noreferrer" aria-label="${project.title} source code on GitHub, opens in a new tab">Source code ${icon('external', 15)}</a>` : ''}<a class="text-link" href="/portfolio#work" data-route>Selected work ${icon('arrow', 15)}</a></div></header>
    ${projectVisual(project, true)}
    <section class="case-overview"><div><p class="eyebrow">OVERVIEW</p><h2>Why this<br/><em>was worth building.</em></h2></div><div class="case-copy"><p class="lede">${project.overview}</p><p>${project.problem}</p><p>${project.role}</p></div></section>
    <section class="case-architecture"><div class="section-heading"><p class="eyebrow">SYSTEM FLOW</p><span class="heading-rule"></span></div><h2>A path from input<br/><em>to an answer.</em></h2><ol class="flow-list">${project.architecture.map(([label, detail], i) => `<li><span class="flow-index">0${i + 1}</span><div><h3>${label}</h3><p>${detail}</p></div>${i < project.architecture.length - 1 ? '<span class="flow-connector" aria-hidden="true">↓</span>' : ''}</li>`).join('')}</ol></section>
    <section class="case-stack"><div><p class="eyebrow">TECHNOLOGY, WITH A JOB</p><h2>Each part<br/><em>has a purpose.</em></h2></div><div class="stack-list">${project.stack.map(([name, role]) => `<div><h3>${name}</h3><p>${role}</p></div>`).join('')}</div></section>
    <section class="case-notes"><p class="eyebrow">IMPLEMENTATION & LIMITS</p><p>${project.decisions}</p></section>
    <nav class="project-pagination" aria-label="Project navigation"><a href="/projects/${projects[(pIndex + projects.length - 1) % projects.length].slug}" data-route><span>← PREVIOUS</span><strong>${projects[(pIndex + projects.length - 1) % projects.length].title}</strong></a><a href="/projects/${projects[(pIndex + 1) % projects.length].slug}" data-route><span>NEXT →</span><strong>${projects[(pIndex + 1) % projects.length].title}</strong></a></nav>
  </main>`;
}

function setTitle(info) {
  const title = info.project ? `${info.project.title} — Omar Mohamed` : info.portfolio ? 'Portfolio — Omar Mohamed' : 'Omar Mohamed — AI Engineer';
  document.title = title;
  document.querySelector('meta[name="description"]').content = info.project ? info.project.short : 'AI Engineer building useful systems with generative AI, retrieval, agents, and computer vision.';
}

function render({ focus = false } = {}) {
  const info = routeInfo();
  const content = info.slug ? (info.project ? caseStudy(info.project) : `<main id="main-content" class="not-found"><p class="eyebrow">404 / NOT FOUND</p><h1>That page<br/><em>isn’t here.</em></h1><a class="button button--primary" href="/portfolio" data-route>Back to portfolio ${icon('arrow', 16)}</a></main>`) : info.portfolio ? portfolioContent() : `${hero()}${portfolioContent()}`;
  app.innerHTML = `${header()}<div class="page-transition">${content}${footer()}</div><div class="custom-cursor" aria-hidden="true"><span></span></div>`;
  setTitle(info);
  bindInteractions();
  if (focus) requestAnimationFrame(() => document.querySelector('#main-content')?.focus({ preventScroll: true }));
  observeReveals();
  if (location.hash) requestAnimationFrame(() => document.querySelector(location.hash)?.scrollIntoView({ block: 'start' }));
}

function navigate(url, { focus = true } = {}) {
  const view = document.querySelector('.page-transition');
  view?.classList.add('is-leaving');
  window.setTimeout(() => {
    history.pushState({}, '', url);
    render({ focus });
    window.scrollTo({ top: location.hash ? document.querySelector(location.hash)?.offsetTop - 84 || 0 : 0, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
  }, matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 120);
}

function bindInteractions() {
  document.querySelectorAll('[data-route]').forEach(link => link.addEventListener('click', event => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const url = new URL(link.href);
    if (url.origin !== location.origin) return;
    event.preventDefault();
    navigate(url.pathname + url.hash);
  }));

  document.querySelector('[data-explore]')?.addEventListener('click', event => {
    event.preventDefault();
    if (matchMedia('(max-width: 720px)').matches) navigate('/portfolio#about');
    else document.querySelector('#about')?.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
  });

  const toggle = document.querySelector('.theme-toggle');
  const setTheme = theme => {
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem('omar-theme', theme); } catch (_) {}
    document.querySelector('meta[name="theme-color"]').content = theme === 'dark' ? '#151513' : '#f0eadd';
    toggle?.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`);
    if (toggle) toggle.innerHTML = icon(theme === 'dark' ? 'sun' : 'moon');
  };
  setTheme(document.documentElement.dataset.theme || 'dark');
  toggle?.addEventListener('click', () => setTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'));

  const menuButton = document.querySelector('.menu-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  menuButton?.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') !== 'true';
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    menuButton.innerHTML = icon(open ? 'close' : 'menu');
    mobileNav.hidden = !open;
  });
  mobileNav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => { mobileNav.hidden = true; menuButton.setAttribute('aria-expanded', 'false'); }));

  document.querySelectorAll('[data-nav-section]').forEach(link => link.addEventListener('click', event => {
    const target = document.querySelector(`#${link.dataset.navSection}`);
    if (target) { event.preventDefault(); target.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' }); }
    else { event.preventDefault(); navigate(link.getAttribute('href')); }
  }));

  const form = document.querySelector('#contact-form');
  form?.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const message = form.elements.message.value.trim();
    if (!message) return;
    const status = document.querySelector('#form-status');
    status.textContent = 'Opening your email app with a draft addressed to Omar.';
    location.href = `mailto:${email}?subject=${encodeURIComponent('A note from your portfolio')}&body=${encodeURIComponent(message)}`;
  });

  const mark = document.querySelector('.footer-mark');
  mark?.addEventListener('click', () => {
    const note = document.querySelector('#build-note');
    const expanded = mark.getAttribute('aria-expanded') === 'true';
    mark.setAttribute('aria-expanded', String(!expanded));
    note.hidden = expanded;
  });

  setupCustomCursor();
}

function setupCustomCursor() {
  cursorCleanup();
  document.body.classList.remove('custom-cursor-enabled', 'custom-cursor-native');

  const cursor = document.querySelector('.custom-cursor');
  if (!cursor || !matchMedia('(pointer:fine) and (prefers-reduced-motion: no-preference)').matches) return;

  let raf = 0;
  const hoverTargets = [];
  const move = event => {
    const target = event.target instanceof Element ? event.target : null;
    const interactive = Boolean(target?.closest('a, button, [role="button"], [data-cursor]'));
    const editable = Boolean(target?.closest('input, textarea, select, [contenteditable="true"]'));
    const textContent = !interactive && !editable && Boolean(target?.closest('p, h1, h2, h3, h4, h5, h6, label, li, figcaption, blockquote, pre, code'));

    lastPointerPosition = { x: event.clientX, y: event.clientY };
    document.body.classList.toggle('custom-cursor-native', editable || textContent);
    if (editable || textContent) {
      cursor.classList.remove('is-active');
      cursor.querySelector('span').textContent = '';
      return;
    }

    if (!raf) raf = requestAnimationFrame(() => {
      cursor.style.transform = `translate3d(${lastPointerPosition.x}px, ${lastPointerPosition.y}px, 0)`;
      cursor.classList.add('is-ready');
      document.body.classList.add('custom-cursor-enabled');
      raf = 0;
    });
  };

  window.addEventListener('pointermove', move, { passive: true });
  document.querySelectorAll('[data-cursor]').forEach(element => {
    const enter = () => {
      cursor.classList.add('is-active');
      cursor.querySelector('span').textContent = element.dataset.cursor;
    };
    const leave = () => {
      cursor.classList.remove('is-active');
      cursor.querySelector('span').textContent = '';
    };
    element.addEventListener('pointerenter', enter);
    element.addEventListener('pointerleave', leave);
    hoverTargets.push([element, enter, leave]);
  });

  if (lastPointerPosition) {
    const target = document.elementFromPoint(lastPointerPosition.x, lastPointerPosition.y);
    move({ clientX: lastPointerPosition.x, clientY: lastPointerPosition.y, target });
  }

  cursorCleanup = () => {
    window.removeEventListener('pointermove', move);
    hoverTargets.forEach(([element, enter, leave]) => {
      element.removeEventListener('pointerenter', enter);
      element.removeEventListener('pointerleave', leave);
    });
    if (raf) cancelAnimationFrame(raf);
    document.body.classList.remove('custom-cursor-enabled', 'custom-cursor-native');
  };
}

function observeReveals() {
  const targets = document.querySelectorAll('[data-reveal]');
  if (matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
    targets.forEach(target => target.classList.add('is-visible'));
    return;
  }
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
  }), { threshold: .12, rootMargin: '0px 0px -40px 0px' });
  targets.forEach(target => observer.observe(target));
}

window.addEventListener('popstate', () => render({ focus: true }));
render();
