// PERSONALIZE: update name, email, phone, and social URLs here. No real contact details were provided.
const PROFILE = {
  name: 'Your Name',
  email: 'hello@example.com',
  phone: '+212 600 000 000',
  socials: [
    { label: 'INSTAGRAM', url: 'https://instagram.com/yourname' },
    { label: 'TIKTOK', url: 'https://tiktok.com/@yourname' },
    { label: 'WHATSAPP', url: 'https://wa.me/212600000000' },
    { label: 'LINKEDIN', url: 'https://linkedin.com/in/yourname' },
  ],
};

// ADD YOUR VIDEOS HERE. Put local files in videos/ and thumbnails in images/.
// Use type: 'file' for MP4/WebM, 'youtube' for YouTube, or 'vimeo' for Vimeo.
// Replace each demo title, description, category, date, software, video, and thumbnail.
// Categories: Reels, TikTok, Instagram, YouTube, Cinematic, Short Films, Ads, Social Media, Other.
const PROJECTS = [
  {
    id: 'after-the-light', featured: true, title: 'After the Light',
    description: 'A study in quiet moments, movement, and the last light of day.',
    type: 'file', video: 'videos/after-the-light.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=1400&q=85',
    categories: ['Cinematic', 'Instagram'], date: '2026', software: 'Premiere Pro · DaVinci Resolve',
  },
  {
    id: 'the-open-road', featured: true, title: 'The Open Road',
    description: 'A short travel film made for the feeling of getting somewhere new.',
    type: 'file', video: 'videos/the-open-road.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85',
    categories: ['Short Films', 'YouTube'], date: '2025', software: 'Premiere Pro',
  },
  {
    id: 'small-hours', featured: true, title: 'The Small Hours',
    description: 'Night streets, natural sound, and a little room to breathe.',
    type: 'file', video: 'videos/the-small-hours.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1200&q=85',
    categories: ['Cinematic', 'Short Films'], date: '2025', software: 'DaVinci Resolve',
  },
  {
    id: 'studio-notes', featured: false, title: 'Studio Notes — Episode 01',
    description: 'A warm, quick-cut introduction to the people behind the work.',
    type: 'file', video: 'videos/studio-notes.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=82',
    categories: ['Reels', 'Instagram', 'Social Media'], date: '2025', software: 'Premiere Pro · After Effects',
  },
  {
    id: 'the-good-thing', featured: false, title: 'The Good Thing',
    description: 'A concise product story with a bright, tactile finish.',
    type: 'youtube', video: 'https://www.youtube.com/watch?v=ScMzIvxBSi4',
    thumbnail: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1000&q=82',
    categories: ['Ads', 'Social Media', 'Instagram'], date: '2025', software: 'DaVinci Resolve',
  },
  {
    id: 'one-minute-away', featured: false, title: 'One Minute Away',
    description: 'A quick portrait cut built for the vertical frame.',
    type: 'file', video: 'videos/one-minute-away.webm',
    thumbnail: 'https://images.unsplash.com/photo-1533929736458-ca588d08c8be?auto=format&fit=crop&w=1000&q=82',
    categories: ['TikTok', 'Reels', 'Social Media'], date: '2024', software: 'CapCut · Premiere Pro',
  },
  {
    id: 'made-by-hand', featured: false, title: 'Made by Hand',
    description: 'A slower look at the gestures and materials behind the craft.',
    type: 'vimeo', video: 'https://vimeo.com/76979871',
    thumbnail: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1000&q=82',
    categories: ['Cinematic', 'Ads'], date: '2024', software: 'DaVinci Resolve · Audition',
  },
  {
    id: 'somewhere-between', featured: false, title: 'Somewhere Between',
    description: 'A small visual experiment in pace, texture, and music.',
    type: 'file', video: 'videos/somewhere-between.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1000&q=82',
    categories: ['Other', 'Cinematic'], date: '2024', software: 'Premiere Pro',
  },
];

const CATEGORIES = ['All work', 'Reels', 'TikTok', 'Instagram', 'YouTube', 'Cinematic', 'Short Films', 'Ads', 'Social Media', 'Other'];
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
