// PERSONALIZE: update name, email, phone, and social URLs here. No real contact details were provided.
const PROFILE = {
  name: 'elyamani imad',
  email: 'elyamani@gmail.com',
  phone: '+212 600 000 000',
  socials: [
    { label: 'INSTAGRAM', url: 'https://instagram.com/imad_elyamani' },
    { label: 'WHATSAPP', url: 'https://wa.me/212600000000' },

  ],
};

// ADD YOUR VIDEOS HERE. Put local files in videos/ and thumbnails in images/.
// Use type: 'file' for MP4/WebM, 'youtube' for YouTube, or 'vimeo' for Vimeo.
// Replace each demo title, description, category, date, software, video, and thumbnail.
// Categories: Reels, TikTok, Instagram, YouTube, Cinematic, Short Films, Ads, Social Media, Other.
const PROJECTS = [
  {
    id: 'shormovie-ep1', featured: false, title: 'Shormovie Ep1',
    description: 'A short film.',
    type: 'file', video: 'videos/ShormovieEp1.mp4',
    thumbnail: 'images/short_movies.jpg',
    categories: ['Short Film'], date: '2023', software: '',
  },
  {
    id: 'shortmovie-ep2', featured: false, title: 'Shortmovie Ep2',
    description: 'Short movie episode 2.',
    type: 'file', video: 'videos/ShortmovieEp2.mp4',
    thumbnail: 'images/short_movies.jpg',
    categories: ['Short Film'], date: '2023', software: '',
  },
  {
    id: 'shortmovie-ep3', featured: false, title: 'Shortmovie Ep3',
    description: 'Short movie episode 3.',
    type: 'file', video: 'videos/ShortmovieEp3.mp4',
    thumbnail: 'images/short_movies.jpg',
    categories: ['Short Film'], date: '2023', software: '',
  },
  {
    id: 'shortmovie-ep4', featured: false, title: 'Shortmovie Ep4',
    description: 'Short movie episode 4.',
    type: 'file', video: 'videos/ShortmovieEp4.mp4',
    thumbnail: 'images/short_movies.jpg',
    categories: ['Short Film'], date: '2025', software: '',
  },
  {
    id: 'shortmovie-ep6', featured: false, title: 'Shortmovie Ep6',
    description: 'Short movie episode 6.',
    type: 'file', video: 'videos/ShortmovieEp6.mp4',
    thumbnail: 'images/short_movies.jpg',
    categories: ['Short Film'], date: '2025', software: '',
  },
  {
    id: 'shortmovie-ep7', featured: false, title: 'Shortmovie Ep7',
    description: 'Short movie episode 7.',
    type: 'file', video: 'videos/ShortmovieEp7.mp4',
    thumbnail: 'images/short_movies.jpg',
    categories: ['Short Film'], date: '2025', software: '',
  },
  {
    id: 'shortmovie-ep8', featured: false, title: 'Shortmovie Ep8',
    description: 'Short movie episode 8.',
    type: 'file', video: 'videos/ShortmovieEp8.mp4',
    thumbnail: 'images/short_movies.jpg',
    categories: ['Short Film'], date: '2026', software: '',
  },
    {
    id: 'shortmovie-ep9', featured: false, title: 'Shortmovie Ep9',
    description: 'Short movie episode 9.',
    type: 'file', video: 'videos/ShortmovieEp9.mp4',
    thumbnail: 'images/short_movies.jpg',
    categories: ['Short Film'], date: '2026', software: '',
  },
  {
    id: 'runnig-ep1', featured: true, title: 'running Ep1',
    description: 'A short travel film made for the feeling of getting somewhere new.',
    type: 'file', video: 'videos/RunningserieDay1.mp4',
    thumbnail: 'images/running_series.jpeg',
    categories: ['Running series'], date: '2025', software: 'Premiere Pro',
  },
   {
    id: 'runnig-ep2', featured: true, title: 'running Ep2',
    description: 'A short travel film made for the feeling of getting somewhere new.',
    type: 'file', video: 'videos/RunningserieDay2.mp4',
    thumbnail: 'images/running_series.jpeg',
    categories: ['Running series'], date: '2025', software: 'Premiere Pro',
  },
  {
    id: 'runnig-ep3', featured: true, title: 'running Ep3',
    description: 'A short travel film made for the feeling of getting somewhere new.',
    type: 'file', video: 'videos/RunningserieDay3.mp4',
    thumbnail: 'images/running_series.jpeg',
    categories: ['Running series'], date: '2025', software: 'Premiere Pro',
  },
  {
    id: 'runnig-ep4', featured: true, title: 'running Ep4',
    description: 'A short travel film made for the feeling of getting somewhere new.',
    type: 'file', video: 'videos/RunningserieDay4.mp4',
    thumbnail: 'images/running_series.jpeg',
    categories: ['Running series'], date: '2025', software: 'Premiere Pro',
  },
  {
    id: 'runnig-ep5', featured: true, title: 'running Ep5',
    description: 'A short travel film made for the feeling of getting somewhere new.',
    type: 'file', video: 'videos/RunningserieDay5.mp4',
    thumbnail: 'images/running_series.jpeg',
    categories: ['Running series'], date: '2025', software: 'Premiere Pro',
  },
  {
    id: 'LifeStyle-ep1', featured: true, title: 'LifeStyle Ep1',
    description: 'A study in quiet moments, movement, and the last light of day.',
    type: 'file', video: 'videos/InstaLifeStyle1.mp4',
    thumbnail: 'images/lifestyle.jpeg',
    categories: ['Life style'], date: '2026', software: 'Premiere Pro · DaVinci Resolve',
  },
  {
    id: 'LifeStyle-ep2', featured: true, title: 'LifeStyle Ep2',
    description: 'A short travel film made for the feeling of getting somewhere new.',
    type: 'file', video: 'videos/InstaLifeStyle2.mp4',
    thumbnail: 'images/lifestyle.jpeg',
    categories: ['Life style'], date: '2026', software: 'Premiere Pro · DaVinci Resolve',
  },

  
];

const CATEGORIES = ['All work','Short Film', 'Running series', 'Life style'];
const FEATURED_LIMIT = 3;
let activeCategory = 'All work';
let toastTimer;

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]);
}

function renderCard(project, index, featured = false) {
  const categories = project.categories.map((category) => `<span>${escapeHtml(category)}</span>`).join('');
  const classes = featured ? 'feature-card' : 'work-card';
  return `<article class="${classes}" style="animation-delay:${Math.min(index * 65, 300)}ms">
    <button class="media-button" type="button" data-play="${escapeHtml(project.id)}" aria-label="Play ${escapeHtml(project.title)}">
      <img src="${escapeHtml(project.thumbnail)}" alt="${escapeHtml(project.title)} video thumbnail" loading="lazy">
      <span class="card-play" aria-hidden="true">▶</span>
      <span class="feature-copy"><span class="feature-index">${escapeHtml(project.date)} · ${escapeHtml(categoriesText(project.categories))}</span><h3>${escapeHtml(project.title)}</h3><p>${escapeHtml(project.description)}</p></span>
    </button>
    ${featured ? '' : `<div class="work-meta"><span>${escapeHtml(project.type === 'file' ? 'VIDEO' : project.type.toUpperCase())} · ${escapeHtml(project.date)}</span><span class="work-software">${escapeHtml(project.software || '')}</span></div>`}
  </article>`;
}

function categoriesText(categories) {
  return categories.slice(0, 2).join(' / ');
}

function renderFilters() {
  document.querySelector('#filterBar').innerHTML = CATEGORIES.map((category, index) => {
    const label = index === 0 ? category : category.toUpperCase();
    return `<button class="filter-button${index === 0 ? ' active' : ''}" type="button" data-category="${escapeHtml(category)}" aria-pressed="${index === 0}">${escapeHtml(label)}</button>`;
  }).join('');
}

function renderWork() {
  const grid = document.querySelector('#workGrid');
  const projects = PROJECTS.filter((project) => activeCategory === 'All work' || project.categories.includes(activeCategory));
  grid.innerHTML = projects.length ? projects.map((project, index) => renderCard(project, index)).join('') : '<div class="empty-state">No videos in this category yet.</div>';
}

function playerSource(project) {
  if (project.type === 'youtube') {
    try {
      const url = new URL(project.video);
      let id = url.hostname === 'youtu.be' ? url.pathname.slice(1) : url.searchParams.get('v');
      if (!id && url.hostname.endsWith('youtube.com')) id = url.pathname.match(/\/(?:embed|shorts)\/([^/?]+)/)?.[1];
      return id ? { kind: 'embed', url: `https://www.youtube-nocookie.com/embed/${encodeURIComponent(id)}?autoplay=1&rel=0` } : null;
    } catch { return null; }
  }
  if (project.type === 'vimeo') {
    const match = project.video.match(/vimeo\.com\/(?:video\/)?(\d+)/);
    return match ? { kind: 'embed', url: `https://player.vimeo.com/video/${match[1]}?autoplay=1` } : null;
  }
  if (project.type === 'file') return { kind: 'file', url: project.video };
  return null;
}

function openPlayer(project) {
  const source = playerSource(project);
  const stage = document.querySelector('#playerStage');
  stage.replaceChildren();
  if (!source) { showToast('This video link could not be opened.'); return; }
  document.querySelector('#playerTitle').textContent = `${project.title} · ${project.date}`;
  if (source.kind === 'embed') {
    const frame = document.createElement('iframe');
    frame.src = source.url;
    frame.title = project.title;
    frame.allow = 'autoplay; fullscreen; picture-in-picture; encrypted-media';
    frame.allowFullscreen = true;
    frame.referrerPolicy = 'strict-origin-when-cross-origin';
    stage.append(frame);
  } else {
    const video = document.createElement('video');
    video.controls = true;
    video.autoplay = true;
    video.playsInline = true;
    video.preload = 'metadata';
    video.poster = project.thumbnail;
    const videoSourceElement = document.createElement('source');
    videoSourceElement.src = source.url;
    videoSourceElement.type = /\.webm(?:$|\?)/i.test(source.url) ? 'video/webm' : 'video/mp4';
    video.append(videoSourceElement);
    video.addEventListener('error', () => showToast(`Add ${project.video} to play this local video.`), { once: true });
    stage.append(video);
  }
  document.querySelector('#videoModal').showModal();
}

function renderSocialLinks() {
  const container = document.querySelector('#socialLinks');
  container.innerHTML = PROFILE.socials.map((social) => `<a href="${escapeHtml(social.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(social.label)} ↗</a>`).join('');
  const emailLink = document.querySelector('#emailLink');
  emailLink.href = `mailto:${PROFILE.email}`;
  emailLink.innerHTML = `${escapeHtml(PROFILE.email)} <span>↗</span>`;
  document.title = `${PROFILE.name} — Video Editor & Content Creator`;
  document.querySelector('#year').textContent = new Date().getFullYear();
  document.querySelectorAll('.brand').forEach((brand) => { brand.setAttribute('aria-label', `${PROFILE.name} home`); });
  document.querySelectorAll('.footer-bottom').forEach((footer) => { footer.firstElementChild.innerHTML = `© <span>${new Date().getFullYear()}</span> ${escapeHtml(PROFILE.name)}. All rights reserved.`; });
}

function showToast(message) {
  const toast = document.querySelector('#toast');
  if (!toast) {
    const element = document.createElement('div');
    element.id = 'toast';
    element.className = 'toast';
    element.setAttribute('role', 'status');
    document.body.append(element);
  }
  const currentToast = document.querySelector('#toast');
  currentToast.textContent = message;
  currentToast.classList.add('show');
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => currentToast.classList.remove('show'), 3500);
}

function setupEvents() {
  document.querySelector('#filterBar').addEventListener('click', (event) => {
    const button = event.target.closest('[data-category]');
    if (!button) return;
    activeCategory = button.dataset.category;
    document.querySelectorAll('.filter-button').forEach((filter) => {
      const selected = filter === button;
      filter.classList.toggle('active', selected);
      filter.setAttribute('aria-pressed', String(selected));
    });
    renderWork();
  });
  document.body.addEventListener('click', (event) => {
    const button = event.target.closest('[data-play]');
    if (!button) return;
    const project = PROJECTS.find((item) => item.id === button.dataset.play);
    if (project) openPlayer(project);
  });
  const modal = document.querySelector('#videoModal');
  document.querySelector('#playerClose').addEventListener('click', () => modal.close());
  modal.addEventListener('click', (event) => { if (event.target === modal) modal.close(); });
  modal.addEventListener('close', () => {
    const video = modal.querySelector('video');
    if (video) video.pause();
    document.querySelector('#playerStage').replaceChildren();
  });
  const menuButton = document.querySelector('#menuToggle');
  const navLinks = document.querySelector('#navLinks');
  menuButton.addEventListener('click', () => {
    const expanded = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!expanded));
    menuButton.setAttribute('aria-label', expanded ? 'Open navigation' : 'Close navigation');
    navLinks.classList.toggle('open', !expanded);
  });
  navLinks.addEventListener('click', (event) => {
    if (!event.target.closest('a')) return;
    navLinks.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation');
  });
  document.querySelector('#heroPlay').addEventListener('click', () => {
    const firstFeatured = PROJECTS.find((project) => project.featured);
    if (firstFeatured) openPlayer(firstFeatured);
  });
}

renderFilters();
renderWork();
renderSocialLinks();
setupEvents();
