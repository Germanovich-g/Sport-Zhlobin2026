// ============================================================
// НАВИГАЦИЯ ПО СТРАНИЦАМ
// ============================================================
document.querySelectorAll('[data-page-link]').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const page = link.dataset.pageLink;
    ['home', 'students', 'method', 'quiz'].forEach(p => {
      const el = document.getElementById(`page-${p}`);
      if (el) el.style.display = 'none';
    });
    const target = document.getElementById(`page-${page}`);
    if (target) target.style.display = 'block';
    window.scrollTo(0, 0);
  });
});

// ============================================================
// ДАННЫЕ КАРТЫ (БЕЗ ИЗМЕНЕНИЙ)
// ============================================================
const DATA = [
  { id:'led', layer:'objects', title:'Ледовый дворец', address:'ул. Карла Маркса, 3/1', text:'Домашняя арена ХК «Металлург-Жлобин».', lat:52.8925, lng:30.0290, photo:'' },
  { id:'dvor', layer:'objects', title:'Дворец игровых видов спорта', address:'ул. Карла Маркса, 3/1', text:'Комплекс на 1500 мест.', lat:52.8920, lng:30.0280, photo:'' },
  { id:'pool', layer:'objects', title:'Плавательный бассейн', address:'ул. Карла Маркса, 3/1', text:'Арена с 50-метровыми дорожками.', lat:52.8915, lng:30.0270, photo:'' },
  { id:'stadium', layer:'objects', title:'Городской стадион', address:'ул. Парижской Коммуны, 13', text:'Главная площадка для футбола.', lat:52.8890, lng:30.0220, photo:'' },
  { id:'sdyushor', layer:'objects', title:'Жлобинская районная СДЮШОР', address:'ул. Первомайская, 1А', text:'Кузница будущих чемпионов.', lat:52.8940, lng:30.0250, photo:'' },
  { id:'rudenkov', layer:'legends', title:'Василий Руденков', address:'Олимпийский чемпион 1960', text:'Олимпийский чемпион по метанию молота.', lat:52.8935, lng:30.0310, photo:'rydenkov.jpeg', link: 'rudenkov.html' },
  { id:'lovetsky', layer:'legends', title:'Владимир Ловецкий', address:'Серебро Олимпиады-1972', text:'Серебряный призёр в эстафете 4×100 м.', lat:52.8945, lng:30.0320, photo:'lovec.jpg', link: 'lovetsky.html' },
  { id:'kirov', layer:'legends', title:'Николай Киров', address:'Бронза Олимпиады-1980', text:'Бронзовый призёр в беге на 800 м.', lat:52.8950, lng:30.0290, photo:'kirov2.jpg', link: 'kirov.html' },
  { id:'kikinov', layer:'legends', title:'Александр Кикинёв', address:'Чемпион Европы', text:'Один из самых титулованных борцов.', lat:52.8940, lng:30.0300, photo:'kikinov.jpg', link: 'kikinov.html' },
  { id:'dybinin', layer:'legends', title:'Юрий Дубинин', address:'Участник Олимпиады-2008', text:'Мастер спорта международного класса.', lat:52.8930, lng:30.0310, photo:'dybinin.jpg', link: 'dybinin.html' },
  { id:'petrenko', layer:'legends', title:'Игорь Петренко', address:'Участник двух Олимпиад', text:'Одна из ключевых фигур жлобинской борьбы.', lat:52.8935, lng:30.0320, photo:'petrenko.jpg', link: 'petrenko.html' },
  { id:'narmania', layer:'legends', title:'Шота Нармания', address:'Мастер спорта', text:'Капитан милиции, погибший при исполнении.', lat:52.8945, lng:30.0330, photo:'narmania.jpg', link: 'narmania.html' },
  { id:'levshunov', layer:'youth', title:'Артём Левшунов', address:'Драфт НХЛ — 2-й номер', text:'Играет за «Чикаго».', lat:52.8900, lng:30.0270, photo:'levshunov.jpg', link: 'levshunov.html' },
  { id:'pinchuk', layer:'youth', title:'Виталий Пинчук', address:'Сборная Беларуси · НХЛ', text:'Нападающий «Нэшвилл».', lat:52.8910, lng:30.0300, photo:'pinchyk.jpg', link: 'pinchuk.html' },
  { id:'borikov', layer:'youth', title:'Егор Бориков', address:'Контракт с «Ютой» (НХЛ)', text:'Молодой талант.', lat:52.8895, lng:30.0250, photo:'borikov.jpeg', link: 'borikov.html' },
  { id:'dygar', layer:'youth', title:'Кирилл Дугарь', address:'Бокс', text:'Мастер спорта РБ.', lat:52.8915, lng:30.0280, photo:'dygar.jpg', link: 'dygar.html' },
  { id:'bondarenko', layer:'youth', title:'Маргарита Бондаренко', address:'Гребля, плавание', text:'Юная воспитанница ЦОР.', lat:52.8870, lng:30.0250, photo:'bondarenko.jpg', link: 'bondarenko.html' },
  { id:'kondratieva', layer:'youth', title:'Ксения Кондратьева', address:'Биатлон', text:'Юная биатлонистка.', lat:52.8885, lng:30.0330, photo:'kondratieva.jpg', link: 'kondratieva.html' },
  { id:'hodorenko', layer:'youth', title:'Арина Ходоренко', address:'Биатлон', text:'Победительница масс-старта.', lat:52.8880, lng:30.0310, photo:'arina.jpg', link: 'hodorenko.html' },
  { id:'yurkovets', layer:'youth', title:'Иван Юрковец', address:'Лёгкая атлетика', text:'Юный спринтер.', lat:52.8960, lng:30.0260, photo:'', link: 'yurkovets.html' },
  { id:'kuprienko', layer:'youth', title:'Ульян Куприенко', address:'Самбо', text:'Юный самбист.', lat:52.8970, lng:30.0280, photo:'kuprienko.jpg', link: 'kuprienko.html' },
  { id:'tishkova', layer:'youth', title:'Надежда Тишкова', address:'Волейбол', text:'Капитан «Искры».', lat:52.8935, lng:30.0325, photo:'tishkova.jpg', link: 'tishkova.html' },
  { id:'pogranovskaya', layer:'youth', title:'Альбина Пограновская', address:'Гребля', text:'Серебряный призёр соревнований.', lat:52.8875, lng:30.0255, photo:'pogranovskaya.jpg', link: 'pogranovskaya.html' },
  { id:'malyshev', layer:'youth', title:'Даниил Малышев', address:'Биатлон', text:'Победитель масс-старта.', lat:52.8885, lng:30.0320, photo:'malyshev.jpg', link: 'malyshev.html' },
  { id:'vashchenko', layer:'youth', title:'Владислав Ващенко', address:'Единоборства', text:'Призёр международных турниров.', lat:52.8945, lng:30.0225, photo:'vashchenko.jpg', link: 'vashchenko.html' },
  { id:'malashchenko', layer:'youth', title:'Малащенко Ангелина', address:'Спорт', text:'Юный талант.', lat:52.8915, lng:30.0315, photo:'malashchenko.jpg', link: 'malashchenko.html' },
  { id:'novikov', layer:'youth', title:'Сергей Новиков', address:'Биатлон', text:'Серебряный призёр Олимпиады-2010.', lat:52.8900, lng:30.0350, photo:'novikov.jpg', link: 'novikov.html' },
  { id:'cis-games', layer:'events', title:'II Игры стран СНГ', address:'2023 / 2026', text:'Соревнования по самбо.', lat:52.8910, lng:30.0350, photo:'' },
  { id:'narmania-event', layer:'events', title:'Турнир памяти Шоты Нармания', address:'Ежегодно', text:'Греко-римская борьба.', lat:52.8980, lng:30.0290, photo:'' },
  { id:'spartakiada', layer:'events', title:'Спартакиада Союзного государства', address:'Студенческие соревнования', text:'Старт соревнований.', lat:52.8860, lng:30.0290, photo:'' },
  { id:'secret', layer:'objects', title:'Секретный объект', address:'Скрытая локация', text:'Вы нашли скрытую информацию!', lat:52.8928, lng:30.0272, photo:'', hidden: true }
];

const LAYER_EMOJI = { objects: '🏟️', legends: '🏆', youth: '⭐', events: '🎉' };
let map = null;
const markerMap = new Map();
let currentLayer = 'all';
let currentSearch = '';
window.isSecretUnlocked = false;

const mapEl = document.getElementById('mapContainer');
if (mapEl) {
  map = L.map('mapContainer', { center: [52.8928, 30.0272], zoom: 14, minZoom: 12, maxBounds: [ [52.8500, 29.9500], [52.9300, 30.1000] ] });
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '&copy; OpenStreetMap', maxZoom: 19 }).addTo(map);

  DATA.forEach(item => {
    const icon = L.divIcon({ className: '', html: `<div class="pin-marker pin-marker--${item.layer}"><span>${LAYER_EMOJI[item.layer]}</span></div>`, iconSize: [38, 38], iconAnchor: [19, 38], popupAnchor: [0, -38] });
    const linkHTML = (item.link && !item.hidden) ? `<a href="${item.link}" style="display:block; margin-top:10px; background:#f97316; color:#fff; text-align:center; padding:8px; border-radius:5px; text-decoration:none; font-weight:bold;">Читать биографию</a>` : '';
    const photoHTML = item.photo ? `<img src="${item.photo}" style="width:100%; border-radius:8px; margin-bottom:8px;" onerror="this.style.display='none'">` : '';
    const popupHTML = `<div style="min-width:200px;">${photoHTML}<strong>${item.title}</strong><br><small>${item.address}</small><p style="margin-top:5px; font-size:0.9rem;">${item.text}</p>${linkHTML}</div>`;
    const marker = L.marker([item.lat, item.lng], { icon }).bindPopup(popupHTML);
    if (!item.hidden) marker.addTo(map);
    markerMap.set(item.id, { marker, data: item });
  });
}

function applyFilters() {
  if (!map) return;
  let visible = 0;
  const q = currentSearch.trim().toLowerCase();
  markerMap.forEach(({ marker, data }) => {
    if (data.hidden && !window.isSecretUnlocked) return;
    const layerOk = currentLayer === 'all' || data.layer === currentLayer;
    const searchOk = !q || data.title.toLowerCase().includes(q) || data.text.toLowerCase().includes(q);
    if (layerOk && searchOk) {
      if (!map.hasLayer(marker)) marker.addTo(map);
      visible++;
    } else {
      if (map.hasLayer(marker)) map.removeLayer(marker);
    }
  });
  const hintEl = document.getElementById('resultHint');
  if (hintEl) {
    const total = DATA.filter(d => !d.hidden || window.isSecretUnlocked).length;
    hintEl.innerHTML = `Показано точек: <strong>${visible}</strong> из ${total}`;
  }
  renderAllCards();
}

function revealSecretMarker() {
  if (window.isSecretUnlocked) return;
  window.isSecretUnlocked = true;
  const secret = markerMap.get('secret');
  if (secret && map && !map.hasLayer(secret.marker)) secret.marker.addTo(map);
  applyFilters();
}

document.querySelectorAll('.chip[data-layer]').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.chip[data-layer]').forEach(b => b.classList.remove('is-active'));
    btn.classList.add('is-active');
    currentLayer = btn.dataset.layer;
    applyFilters();
  });
});

const searchInput = document.getElementById('searchInput');
if (searchInput) {
  let searchTimer = null;
  searchInput.addEventListener('input', (e) => {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => { currentSearch = e.target.value; applyFilters(); }, 200);
  });
}

function cardHTML(item) {
  const img = item.photo ? `<img src="${item.photo}" alt="${item.title}" onerror="this.style.display='none'">` : LAYER_EMOJI[item.layer];
  const imgClass = (item.layer === 'legends' || item.layer === 'youth') ? 'card__img card__img--people' : 'card__img';
  const tag = item.link ? 'a' : 'div';
  const href = item.link ? `href="${item.link}"` : '';
  const readMore = item.link ? `<p style="color: var(--primary); font-weight: bold; margin-top: 10px;">Читать биографию →</p>` : '';
  return `<${tag} ${href} class="card" style="text-decoration: none; color: inherit;"><div class="${imgClass}">${img}</div><div class="card-content"><h3>${item.title}</h3><p>${item.text}</p><p class="card__meta">📍 ${item.address}</p>${readMore}</div></${tag}>`;
}

function renderCards(layer, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = '';
  const q = currentSearch.trim().toLowerCase();
  const items = DATA.filter(i => i.layer === layer && !i.hidden && (!q || i.title.toLowerCase().includes(q)));
  items.forEach(item => {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = cardHTML(item);
    const realCard = wrapper.firstElementChild;
    if (!item.link && map) {
      realCard.addEventListener('click', () => {
        map.setView([item.lat, item.lng], 17);
        const m = markerMap.get(item.id);
        if (m) m.marker.openPopup();
      });
    }
    container.appendChild(realCard);
  });
}

function renderAllCards() {
  renderCards('objects', 'objectsList');
  renderCards('legends', 'legendsList');
  renderCards('youth', 'youthList');
  renderCards('events', 'eventsList');
}

if (map) applyFilters();

// ============================================================
// МЕТОДИЧЕСКАЯ КОПИЛКА (УЧИТЕЛЮ)
// ============================================================
const METHOD_DATA = {
  gym: { icon: '🤸', title: 'Гимнастика', topics: [ { id: 'gym-kulok', title: 'Кувырок вперёд', icon: '🔄', content: { 'Темы': `<p>Базовое акробатическое упражнение.</p>`, 'Как выполнять': `<ol><li>Упор присев.</li><li>Толчок.</li><li>Перекат.</li></ol>`, 'Подводящие упражнения': `<ul><li>Группировка.</li></ul>`, 'Видео / картинки / схемы': `<p class="student-video-note">Скоро.</p>` } } ] },
  athletics: { icon: '🏃', title: 'Лёгкая атлетика', topics: [ { id: 'ath-run30', title: 'Бег 30 метров', icon: '🏃', content: { 'Темы': `<p>Спринт.</p>`, 'Как выполнять': `<ol><li>Старт.</li><li>Финиш.</li></ol>`, 'Подводящие упражнения': `<ul><li>Бег с высоким подниманием бедра.</li></ul>`, 'Видео / картинки / схемы': `<p class="student-video-note">Скоро.</p>` } } ] },
  games: { icon: '🏐', title: 'Спорт. игры', topics: [ { id: 'game-basket', title: 'Баскетбол', icon: '🏀', content: { 'Темы': `<p>Бросок.</p>`, 'Как выполнять': `<ol><li>Стойка.</li><li>Бросок.</li></ol>`, 'Подводящие упражнения': `<ul><li>Броски в стену.</li></ul>`, 'Видео / картинки / схемы': `<p class="student-video-note">Скоро.</p>` } } ] },
  ski: { icon: '🎿', title: 'Лыжи', topics: [ { id: 'ski-classic', title: 'Классический ход', icon: '🎿', content: { 'Темы': `<p>Двухшажный ход.</p>`, 'Как выполнять': `<ol><li>Скольжение.</li><li>Толчок.</li></ol>`, 'Подводящие упражнения': `<ul><li>Ступающий шаг.</li></ul>`, 'Видео / картинки / схемы': `<p class="student-video-note">Скоро.</p>` } } ] }
};

const methodContainer = document.getElementById('methodContainer');
const methodFilters = document.getElementById('methodFilters');

window.renderMethodTiles = function(block) {
  if (!methodContainer) return;
  const blockData = METHOD_DATA[block];
  methodContainer.innerHTML = `<div class="method-tiles">${blockData.topics.map(topic => `
    <div class="method-tile" data-topic="${topic.id}" onclick="renderMethodDetail('${block}', '${topic.id}')"><div class="method-tile__icon">${topic.icon}</div><div class="method-tile__title">${topic.title}</div><div class="method-tile__count">4 подвкладки</div></div>
  `).join('')}</div>`;
};

window.renderMethodDetail = function(block, topicId) {
  const blockData = METHOD_DATA[block];
  const topic = blockData.topics.find(t => t.id === topicId);
  const tabs = ['Темы', 'Как выполнять', 'Подводящие упражнения', 'Видео / картинки / схемы'];
  methodContainer.innerHTML = `<div class="method-detail"><div class="method-detail__header"><button class="method-detail__back" onclick="renderMethodTiles('${block}')">← Назад</button><h3 class="method-detail__title">${topic.icon} ${topic.title}</h3></div><div class="method-tabs" id="methodTabs">${tabs.map((t, i) => `<button class="method-tab ${i === 0 ? 'is-active' : ''}" data-tab="${t}">${t}</button>`).join('')}</div><div class="method-tab__content" id="methodTabContent">${topic.content[tabs[0]]}</div></div>`;
  document.getElementById('methodTabs').addEventListener('click', e => {
    const btn = e.target.closest('.method-tab');
    if (!btn) return;
    document.querySelectorAll('#methodTabs .method-tab').forEach(b => b.classList.remove('is-active'));
    btn.classList.add('is-active');
    document.getElementById('methodTabContent').innerHTML = topic.content[btn.dataset.tab];
  });
};

if (methodFilters) {
  methodFilters.addEventListener('click', (e) => {
    if (e.target.classList.contains('chip')) {
      methodFilters.querySelectorAll('.chip').forEach(c => c.classList.remove('is-active'));
      e.target.classList.add('is-active');
      renderMethodTiles(e.target.dataset.block);
    }
  });
  renderMethodTiles('gym');
}

// ============================================================
// УЧАЩИМСЯ (ОБЩИЕ РАЗДЕЛЫ, БЕЗ ДЕЛЕНИЯ НА КЛАССЫ)
// ============================================================
const studentContainer = document.getElementById('studentContainer');

// SVG-схемы для визуализации (рисуются прямо в коде)
const SVG_SCHEMES = {
  'ath-high': `
    <svg viewBox="0 0 300 150" style="width:100%; max-width:400px; display:block; margin:0 auto; background:#fff; border-radius:12px; padding:10px;">
      <rect x="20" y="120" width="260" height="10" fill="#d9e2f2" rx="5"/>
      <circle cx="100" cy="50" r="15" fill="#14213d"/>
      <line x1="100" y1="65" x2="100" y2="100" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
      <line x1="100" y1="80" x2="70" y2="100" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
      <line x1="100" y1="80" x2="130" y2="100" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
      <line x1="100" y1="100" x2="70" y2="120" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
      <line x1="100" y1="100" x2="130" y2="120" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
      <text x="150" y="40" fill="#ff6b35" font-weight="bold" font-family="sans-serif">Наклон вперёд</text>
      <path d="M 130 60 L 160 60" stroke="#ff6b35" stroke-width="2" marker-end="url(#arrow)"/>
    </svg>
  `,
  'ath-low': `
    <svg viewBox="0 0 300 150" style="width:100%; max-width:400px; display:block; margin:0 auto; background:#fff; border-radius:12px; padding:10px;">
      <rect x="20" y="120" width="260" height="10" fill="#d9e2f2" rx="5"/>
      <circle cx="80" cy="90" r="15" fill="#14213d"/>
      <line x1="95" y1="90" x2="150" y2="110" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
      <line x1="150" y1="110" x2="180" y2="120" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
      <line x1="150" y1="110" x2="140" y2="120" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
      <line x1="95" y1="90" x2="70" y2="120" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
      <line x1="95" y1="90" x2="110" y2="120" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
      <rect x="60" y="115" width="20" height="5" fill="#16b8a6"/>
      <text x="200" y="40" fill="#ff6b35" font-weight="bold" font-family="sans-serif">Колодки</text>
      <path d="M 100 50 L 80 60" stroke="#ff6b35" stroke-width="2"/>
    </svg>
  `,
  'ath-jump': `
    <svg viewBox="0 0 300 150" style="width:100%; max-width:400px; display:block; margin:0 auto; background:#fff; border-radius:12px; padding:10px;">
      <rect x="20" y="120" width="260" height="10" fill="#d9e2f2" rx="5"/>
      <circle cx="70" cy="70" r="15" fill="#14213d"/>
      <line x1="70" y1="85" x2="70" y2="110" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
      <line x1="70" y1="95" x2="50" y2="110" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
      <line x1="70" y1="95" x2="90" y2="110" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
      <line x1="70" y1="110" x2="50" y2="120" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
      <line x1="70" y1="110" x2="90" y2="120" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
      <text x="130" y="40" fill="#ff6b35" font-weight="bold" font-family="sans-serif">Мах руками</text>
      <path d="M 90 70 Q 150 30 200 70" stroke="#16b8a6" stroke-width="3" fill="none" stroke-dasharray="5,5"/>
      <circle cx="200" cy="70" r="10" fill="#16b8a6" opacity="0.5"/>
    </svg>
  `,
  'gym-group': `
    <svg viewBox="0 0 300 150" style="width:100%; max-width:400px; display:block; margin:0 auto; background:#fff; border-radius:12px; padding:10px;">
      <rect x="20" y="120" width="260" height="10" fill="#d9e2f2" rx="5"/>
      <circle cx="100" cy="80" r="20" fill="#14213d"/>
      <path d="M 100 100 Q 80 120 100 140" stroke="#14213d" stroke-width="6" fill="none" stroke-linecap="round"/>
      <path d="M 100 100 Q 120 120 100 140" stroke="#14213d" stroke-width="6" fill="none" stroke-linecap="round"/>
      <text x="150" y="60" fill="#ff6b35" font-weight="bold" font-family="sans-serif">Группировка</text>
      <path d="M 130 90 Q 160 80 170 110" stroke="#16b8a6" stroke-width="2" fill="none"/>
    </svg>
  `,
  'gym-stand': `
    <svg viewBox="0 0 300 150" style="width:100%; max-width:400px; display:block; margin:0 auto; background:#fff; border-radius:12px; padding:10px;">
      <rect x="20" y="120" width="260" height="10" fill="#d9e2f2" rx="5"/>
      <circle cx="150" cy="50" r="15" fill="#14213d"/>
      <line x1="150" y1="65" x2="150" y2="90" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
      <line x1="150" y1="90" x2="120" y2="120" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
      <line x1="150" y1="90" x2="180" y2="120" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
      <line x1="150" y1="90" x2="150" y2="120" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
      <text x="200" y="40" fill="#ff6b35" font-weight="bold" font-family="sans-serif">Лопатки</text>
    </svg>
  `,
  'ski-step': `
    <svg viewBox="0 0 300 150" style="width:100%; max-width:400px; display:block; margin:0 auto; background:#fff; border-radius:12px; padding:10px;">
      <rect x="20" y="120" width="260" height="10" fill="#e0f2fe" rx="5"/>
      <circle cx="80" cy="70" r="15" fill="#14213d"/>
      <line x1="80" y1="85" x2="80" y2="110" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
      <line x1="80" y1="100" x2="60" y2="120" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
      <line x1="80" y1="100" x2="100" y2="120" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
      <rect x="50" y="115" width="20" height="5" fill="#ff6b35"/>
      <rect x="90" y="115" width="20" height="5" fill="#ff6b35"/>
      <text x="150" y="50" fill="#ff6b35" font-weight="bold" font-family="sans-serif">Вся подошва</text>
    </svg>
  `,
  'foot-kick': `
    <svg viewBox="0 0 300 150" style="width:100%; max-width:400px; display:block; margin:0 auto; background:#fff; border-radius:12px; padding:10px;">
      <circle cx="150" cy="75" r="20" fill="#14213d"/>
      <path d="M 130 75 Q 100 100 80 120" stroke="#14213d" stroke-width="6" fill="none" stroke-linecap="round"/>
      <path d="M 170 75 Q 200 100 220 120" stroke="#14213d" stroke-width="6" fill="none" stroke-linecap="round"/>
      <rect x="60" y="115" width="30" height="10" fill="#16b8a6" rx="2"/>
      <text x="200" y="40" fill="#ff6b35" font-weight="bold" font-family="sans-serif">Опорная нога</text>
      <text x="50" y="40" fill="#16b8a6" font-weight="bold" font-family="sans-serif">Бьющая</text>
    </svg>
  `
};

// Все разделы в одном массиве
const STUDENT_DATA = [
  {
    id: 'st-ath', title: 'Лёгкая атлетика', icon: '🏃',
    subtopics: [
      { 
        id: 'ath-high', title: 'Высокий старт', 
        content: { 
          'Теория': `<p><strong>Высокий старт</strong> — это исходное положение для начала бега, при котором спортсмен стоит, слегка наклонившись вперёд. Он используется в беге на средние и длинные дистанции (от 800 м и выше), а также в эстафетах. В отличие от низкого старта, здесь нет колодок, что позволяет быстрее начать движение без излишнего напряжения.</p><p>Исторически высокий старт применялся ещё в Древней Греции, но современная техника сформировалась в XX веке. Главное преимущество — возможность быстро набрать скорость и сохранять её на длинной дистанции.</p>`, 
          'Как выполнять': `<ol><li><strong>Исходное положение:</strong> Сильную (толчковую) ногу ставим вперед, носком вплотную к стартовой линии.</li><li><strong>Вторая нога:</strong> Отставляем назад на расстояние 1,5–2 стоп.</li><li><strong>Корпус:</strong> Наклонен вперед, взгляд направлен на дорожку в 2–3 метрах перед собой (не под ноги!).</li><li><strong>Руки:</strong> Согнуты в локтях, разноименно ногам (если впереди правая нога — впереди левая рука).</li><li><strong>Старт:</strong> По команде "Марш!" мощно отталкиваемся задней ногой и начинаем бег.</li></ol>`, 
          'Ошибки': `<ul><li>Выпрямление корпуса до начала бега (теряется скорость).</li><li>Взгляд под ноги (замедляет реакцию).</li><li>Слишком высокий подъем рук.</li></ul>` 
        }, 
        challenge: 'Попробуй сделать высокий старт 5 раз, каждый раз ускоряясь на 10 метров.',
        scheme: SVG_SCHEMES['ath-high']
      },
      { 
        id: 'ath-low', title: 'Низкий старт', 
        content: { 
          'Теория': `<p><strong>Низкий старт</strong> — это техника начала бега в спринте (60 м, 100 м, 200 м), при которой спортсмен опирается на руки и колено. Использование стартовых колодок позволяет создать максимальное усилие для быстрого разгона.</p><p>Низкий старт был впервые применён в конце XIX века и с тех пор стал стандартом для спринтеров. Он позволяет использовать силу ног и рук для мгновенного ускорения.</p>`, 
          'Как выполнять': `<ol><li><strong>Опора:</strong> На руки и колено сзади стоящей ноги.</li><li><strong>Руки:</strong> Ставятся на ширине плеч, пальцы образуют "коридор" для головы.</li><li><strong>Команда "Внимание!":</strong> Таз поднимается немного выше плеч, вес переносится на руки.</li><li><strong>Толчок:</strong> Мощный одновременный толчок обеими ногами и руками.</li></ol>`, 
          'Ошибки': `<ul><li>Слишком высокое или низкое положение таза.</li><li>Прямые руки (не амортизируют).</li><li>Ранний подъем головы.</li></ul>` 
        }, 
        challenge: 'Попробуй низкий старт с колодками (или без) и пробеги 20 метров на максимальной скорости.',
        scheme: SVG_SCHEMES['ath-low']
      },
      { 
        id: 'ath-jump', title: 'Прыжки в длину с места', 
        content: { 
          'Теория': `<p><strong>Прыжок в длину с места</strong> — это упражнение, при котором спортсмен отталкивается двумя ногами от земли и приземляется как можно дальше. Оно развивает силу ног, координацию и используется как норматив в школьной программе.</p><p>Этот вид прыжка не требует разбега, поэтому он доступен для любого возраста и уровня подготовки. Он также входит в комплекс ГТО.</p>`, 
          'Как выполнять': `<ol><li><strong>Исходное положение:</strong> Ноги на ширине плеч, носки у линии.</li><li><strong>Замах:</strong> Глубокий присед, руки отводим назад.</li><li><strong>Толчок:</strong> Мощный мах руками вперед-вверх и одновременный толчок ногами.</li><li><strong>Полёт:</strong> В воздухе ноги подтягиваются к груди (или "ножницы").</li><li><strong>Приземление:</strong> На две ноги, мягко сгибая колени.</li></ol>`, 
          'Ошибки': `<ul><li>Заступ за линию.</li><li>Приземление на прямые ноги (риск травмы).</li><li>Слабый мах руками.</li></ul>` 
        }, 
        challenge: 'Сделай 3 подхода по 10 прыжков в длину — запиши лучший результат.',
        scheme: SVG_SCHEMES['ath-jump']
      }
    ]
  },
  {
    id: 'st-gym', title: 'Гимнастика', icon: '🤸',
    subtopics: [
      { 
        id: 'gym-group', title: 'Группировка и перекаты', 
        content: { 
          'Теория': `<p><strong>Группировка</strong> — это основа безопасности при падениях и база для кувырков. Она позволяет сгруппировать тело, чтобы избежать травм. <strong>Перекаты</strong> — это вращательные движения тела с последовательным касанием поверхности.</p><p>Эти элементы изучаются с первых классов и являются фундаментом для более сложных акробатических упражнений.</p>`, 
          'Как выполнять': `<ol><li><strong>Группировка сидя:</strong> Подтянуть колени к груди, обхватить их руками, голову наклонить вперед. Спина круглая.</li><li><strong>Перекат назад:</strong> Из упора присев перекатиться назад на спину, сохраняя группировку, вернуться в исходное положение.</li><li><strong>Кувырок вперед:</strong> Из упора присев, оттолкнувшись руками, перенести вес на плечи, перевернуться через голову и встать.</li></ol>`, 
          'Ошибки': `<ul><li>Опора на голову при кувырке (опасно!).</li><li>Разомкнутая группировка.</li><li>Слишком быстрый темп.</li></ul>` 
        }, 
        challenge: 'Выполни 3 кувырка вперед подряд с правильной группировкой.',
        scheme: SVG_SCHEMES['gym-group']
      },
      { 
        id: 'gym-stand', title: 'Стойка на лопатках ("Березка")', 
        content: { 
          'Теория': `<p><strong>Стойка на лопатках</strong> (в народе «берёзка») — это положение, при котором тело опирается на лопатки, ноги вытянуты вверх. Упражнение развивает гибкость позвоночника, силу мышц кора и улучшает кровообращение.</p><p>Оно также помогает укрепить мышцы спины и является подготовительным для более сложных стоек.</p>`, 
          'Как выполнять': `<ol><li><strong>Исходное положение:</strong> Лечь на спину.</li><li><strong>Подъем:</strong> Опираясь на локти и затылок, поднять ноги и туловище вертикально вверх.</li><li><strong>Опора:</strong> Поддерживать спину руками под лопатками.</li><li><strong>Фиксация:</strong> Ноги вместе, носки натянуты. Удерживать 10–15 секунд.</li></ol>`, 
          'Ошибки': `<ul><li>Запрокидывание головы.</li><li>Опора на шею, а не на лопатки.</li><li>Согнутые ноги.</li></ul>` 
        }, 
        challenge: 'Удерживай "березку" 15 секунд.',
        scheme: SVG_SCHEMES['gym-stand']
      }
    ]
  },
  {
    id: 'st-ski', title: 'Лыжная подготовка', icon: '🎿',
    subtopics: [
      { 
        id: 'ski-step', title: 'Ступающий шаг', 
        content: { 
          'Теория': `<p><strong>Ступающий шаг</strong> — это базовая техника передвижения на лыжах, используемая для подъема в гору или передвижения по рыхлому снегу. В отличие от скользящего шага, здесь лыжа ставится на снег всей подошвой.</p><p>Этот шаг позволяет сохранять устойчивость и контроль на сложных участках трассы.</p>`, 
          'Как выполнять': `<ol><li><strong>Постановка лыжи:</strong> Лыжа ставится на снег всей подошвой.</li><li><strong>Перенос веса:</strong> Вес тела переносится на эту лыжу.</li><li><strong>Подтягивание:</strong> Вторая лыжа подтягивается к первой.</li><li><strong>Палки:</strong> Используются для опоры и равновесия.</li></ol>`, 
          'Ошибки': `<ul><li>Волок лыж по снегу (потеря скорости).</li><li>Слишком высокий подъем ног.</li></ul>` 
        }, 
        challenge: 'Пройди ступающим шагом 50 метров без остановки.',
        scheme: SVG_SCHEMES['ski-step']
      }
    ]
  },
  {
    id: 'st-football', title: 'Футбол', icon: '⚽',
    subtopics: [
      { 
        id: 'foot-kick', title: 'Удары по мячу', 
        content: { 
          'Теория': `<p><strong>Удары по мячу</strong> — основа футбола. Правильная постановка опорной ноги и точный контакт с мячом обеспечивают силу и точность удара. Различают удары внутренней стороной стопы, подъемом, носком и другие.</p><p>Техника удара зависит от игровой ситуации: передачи, удары по воротам, навесы.</p>`, 
          'Как выполнять': `<ol><li><strong>Опорная нога:</strong> Ставится сбоку от мяча на расстоянии 15–20 см. Носок смотрит в цель.</li><li><strong>Удар серединой подъема:</strong> Замах — отводим бьющую ногу назад. Удар — бьем точно в центр мяча подъемом стопы.</li><li><strong>Проводка:</strong> После удара нога продолжает движение по траектории мяча.</li><li><strong>Удар внутренней частью:</strong> Бьющая нога разворачивается носком наружу. Удар наносится внутренней стороной стопы.</li></ol>`, 
          'Ошибки': `<ul><li>Неправильная постановка опорной ноги (мяч летит мимо).</li><li>Удар носком вместо подъема.</li><li>Отсутствие проводки.</li></ul>` 
        }, 
        challenge: 'Сделай 10 ударов по мячу в стену внутренней стороной стопы.',
        scheme: SVG_SCHEMES['foot-kick']
      }
    ]
  },
  {
    id: 'st-volley', title: 'Волейбол', icon: '🏐',
    subtopics: [
      { 
        id: 'volley-top', title: 'Передача мяча двумя руками сверху', 
        content: { 
          'Теория': `<p><strong>Передача сверху</strong> — основной приём в волейболе. Она позволяет точно направить мяч партнёру или перевести его через сетку. Техника требует правильного положения кистей («ковшик») и работы ног.</p><p>Этот приём используется в большинстве игровых ситуаций.</p>`, 
          'Как выполнять': `<ol><li><strong>Стойка:</strong> Ноги согнуты в коленях, одна чуть впереди.</li><li><strong>Кисти:</strong> Образуют "ковшик" (большие и указательные пальцы образуют треугольник).</li><li><strong>Работа ног:</strong> Выпрямляем ноги и корпус, толкая мяч вверх.</li><li><strong>Контакт:</strong> Касаемся мяча только фалангами пальцев, не бьем ладонями.</li></ol>`, 
          'Ошибки': `<ul><li>Прием на ладони.</li><li>Слабый толчок ногами.</li><li>Неправильное положение кистей.</li></ul>` 
        }, 
        challenge: 'Сделай 10 передач над собой.',
        scheme: `<svg viewBox="0 0 300 150" style="width:100%; max-width:400px; display:block; margin:0 auto; background:#fff; border-radius:12px; padding:10px;"><circle cx="150" cy="50" r="20" fill="#16b8a6"/><path d="M 130 50 L 170 50" stroke="#14213d" stroke-width="4" stroke-linecap="round"/><path d="M 140 40 L 160 40" stroke="#14213d" stroke-width="4" stroke-linecap="round"/><path d="M 140 60 L 160 60" stroke="#14213d" stroke-width="4" stroke-linecap="round"/><text x="180" y="55" fill="#ff6b35" font-weight="bold" font-family="sans-serif">Ковшик</text></svg>`
      }
    ]
  },
  {
    id: 'st-basket', title: 'Баскетбол', icon: '🏀',
    subtopics: [
      { 
        id: 'basket-shot', title: 'Броски мяча', 
        content: { 
          'Теория': `<p><strong>Броски в баскетболе</strong> — это завершающая стадия атаки. Они требуют точности, координации и правильной техники. Основные виды: бросок двумя руками от груди, одной рукой от плеча, в движении.</p><p>Бросок — ключевой элемент, от которого зависит результат игры.</p>`, 
          'Как выполнять': `<ol><li><strong>Двумя руками от груди:</strong> Мяч у груди, локти прижаты. Резкий толчок кистями вперед. Вес переносится с задней ноги на переднюю.</li><li><strong>Одной от плеча:</strong> Мяч у плеча, локоть согнут. Резкий толчок кистью вперед.</li><li><strong>В движении:</strong> Бросок выполняется после ведения или ловли мяча в движении.</li></ol>`, 
          'Ошибки': `<ul><li>Бросок без работы ног.</li><li>Неправильное положение кисти.</li><li>Слишком сильный замах.</li></ul>` 
        }, 
        challenge: 'Забрось мяч в кольцо 3 раза с близкого расстояния.',
        scheme: `<svg viewBox="0 0 300 150" style="width:100%; max-width:400px; display:block; margin:0 auto; background:#fff; border-radius:12px; padding:10px;"><rect x="200" y="20" width="10" height="100" fill="#d9e2f2"/><circle cx="205" cy="50" r="15" fill="none" stroke="#ff6b35" stroke-width="4"/><circle cx="100" cy="80" r="20" fill="#14213d"/><path d="M 120 80 Q 160 50 190 50" stroke="#16b8a6" stroke-width="3" fill="none" stroke-dasharray="5,5"/><text x="50" y="40" fill="#ff6b35" font-weight="bold" font-family="sans-serif">Траектория</text></svg>`
      }
    ]
  }
];

// --- Проверка выполнения челленджей (хранится в localStorage) ---
function isChallengeDone(topicId, subId) {
  const key = `challenge_${topicId}_${subId}`;
  return localStorage.getItem(key) === 'done';
}

function toggleChallenge(topicId, subId, checkbox) {
  const key = `challenge_${topicId}_${subId}`;
  if (checkbox.checked) {
    localStorage.setItem(key, 'done');
  } else {
    localStorage.removeItem(key);
  }
  renderStudentSubtopics(topicId);
}

// 1. Экран плиток разделов (БЕЗ ВЫБОРА КЛАССА)
window.renderStudentTiles = function() {
  if (!studentContainer) return;

  studentContainer.innerHTML = `<div class="method-tiles">${STUDENT_DATA.map(topic => `
    <div class="method-tile" onclick="renderStudentSubtopics('${topic.id}')">
      <div class="method-tile__icon">${topic.icon}</div>
      <div class="method-tile__title">${topic.title}</div>
      <div class="method-tile__count">${topic.subtopics.length} тем</div>
    </div>
  `).join('')}</div>`;
};

// 2. Экран списка тем (с прогресс-баром)
window.renderStudentSubtopics = function(topicId) {
  const topic = STUDENT_DATA.find(t => t.id === topicId);
  if (!topic) return;

  // Считаем прогресс
  const total = topic.subtopics.length;
  const done = topic.subtopics.filter(sub => isChallengeDone(topicId, sub.id)).length;
  const percent = total > 0 ? Math.round((done / total) * 100) : 0;

  let html = `
    <div class="method-detail">
      <div class="method-detail__header">
        <button class="method-detail__back" onclick="renderStudentTiles()">← Назад к разделам</button>
        <h3 class="method-detail__title">${topic.icon} ${topic.title}</h3>
      </div>

      <!-- ПРОГРЕСС-БАР -->
      <div style="padding: 15px 30px; background: var(--card); border-bottom: 1px solid var(--border);">
        <div style="display: flex; justify-content: space-between; font-weight: 800; color: var(--text); margin-bottom: 8px; font-size: 0.9rem;">
          <span>Выполнено заданий:</span>
          <span>${done} из ${total} (${percent}%)</span>
        </div>
        <div style="height: 10px; background: var(--bg-alt); border-radius: 99px; overflow: hidden;">
          <div style="height: 100%; width: ${percent}%; background: var(--gradient-blue); transition: width 0.3s;"></div>
        </div>
      </div>

      <div class="method-tab__content" style="padding: 0;">
  `;

  topic.subtopics.forEach(sub => {
    const isDone = isChallengeDone(topicId, sub.id);
    html += `
      <div style="padding: 20px 30px; border-bottom: 1px solid var(--border); display: flex; justify-content: space-between; align-items: center;">
        <div>
          <div style="font-weight: 800; color: var(--text); font-size: 1.1rem;">${sub.title}</div>
          ${isDone ? '<div style="color: var(--accent); font-size: 0.85rem; font-weight: 700; margin-top: 4px;">✅ Задание выполнено</div>' : ''}
        </div>
        <button class="btn" style="padding: 10px 20px; font-size: 0.85rem;" onclick="renderStudentSubDetail('${topicId}', '${sub.id}')">Открыть</button>
      </div>
    `;
  });

  html += `</div></div>`;
  studentContainer.innerHTML = html;
};

// 3. Экран конкретной темы (с челленджем и СХЕМОЙ)
window.renderStudentSubDetail = function(topicId, subId) {
  const topic = STUDENT_DATA.find(t => t.id === topicId);
  const sub = topic.subtopics.find(s => s.id === subId);
  if (!sub) return;

  const tabs = ['Теория', 'Как выполнять', 'Ошибки', 'Схема'];
  const tabEmoji = { 'Теория': '📖', 'Как выполнять': '📝', 'Ошибки': '⚠️', 'Схема': '📐' };

  const isDone = isChallengeDone(topicId, subId);

  studentContainer.innerHTML = `
    <div class="method-detail">
      <div class="method-detail__header">
        <button class="method-detail__back" onclick="renderStudentSubtopics('${topicId}')">← Назад к темам</button>
        <h3 class="method-detail__title">${sub.title}</h3>
      </div>
      <div class="method-tabs" id="studentTabs">
        ${tabs.map((tab, i) => `<button class="method-tab ${i === 0 ? 'is-active' : ''}" data-tab="${tab}">${tabEmoji[tab]} ${tab}</button>`).join('')}
      </div>
      <div class="method-tab__content" id="studentTabContent">
        ${tabEmoji[tabs[0]] && sub.content[tabs[0]] ? sub.content[tabs[0]] : '<p>Информация скоро появится.</p>'}
      </div>

      <!-- БЛОК ЧЕЛЛЕНДЖА И СХЕМЫ -->
      <div style="padding: 30px; background: var(--bg-alt); border-top: 1px solid var(--border);">
        
        <div style="background: var(--card); border: 2px solid var(--accent); padding: 20px; border-radius: 16px; margin-bottom: 20px;">
          <h4 style="color: var(--text); margin-bottom: 10px; font-size: 1.1rem; display: flex; align-items: center; gap: 8px;">
            <span>🔥</span> Мини-челлендж
          </h4>
          <p style="color: var(--text-muted); margin-bottom: 15px; font-weight: 600;">
            ${sub.challenge || 'Закрепи технику на практике.'}
          </p>
          <label class="student-check" style="display: inline-flex; align-items: center; gap: 8px; cursor: pointer;">
            <input type="checkbox" onchange="toggleChallenge('${topicId}', '${subId}', this)" ${isDone ? 'checked' : ''} style="width: 20px; height: 20px; accent-color: var(--accent);">
            <span style="font-weight: 700; color: var(--text);">Задание выполнено</span>
          </label>
        </div>

        <div style="display: flex; align-items: center; gap: 20px; background: var(--card); padding: 15px; border-radius: 16px; border: 1px solid var(--border);">
          <div style="width: 80px; height: 80px; border-radius: 8px; background: #f0f4ff; display: flex; align-items: center; justify-content: center; font-size: 2rem;">
            📐
          </div>
          <div>
            <div style="font-weight: 800; color: var(--text); font-size: 0.95rem;">Схема выполнения</div>
            <div style="color: var(--text-muted); font-size: 0.85rem; margin-top: 4px;">Открой вкладку «Схема», чтобы увидеть визуализацию техники</div>
          </div>
        </div>

      </div>

    </div>
  `;

  // Обработчик переключения подвкладок
  document.getElementById('studentTabs').addEventListener('click', (e) => {
    const btn = e.target.closest('.method-tab');
    if (!btn) return;
    document.querySelectorAll('#studentTabs .method-tab').forEach(b => b.classList.remove('is-active'));
    btn.classList.add('is-active');
    
    const tab = btn.dataset.tab;
    let contentHtml = '';
    
    if (tab === 'Схема') {
      contentHtml = sub.scheme || '<p>Схема для этой темы скоро появится.</p>';
    } else {
      contentHtml = sub.content[tab] || '<p>Материал скоро появится.</p>';
    }
    
    document.getElementById('studentTabContent').innerHTML = contentHtml;
  });
};

// --- Инициализация ---
if (studentContainer) {
  renderStudentTiles();
}

// ============================================================
// ТЕСТЫ
// ============================================================
const QUIZ_DATA = {
  rules: { title: 'Правила спорта', icon: '📚', topics: [
    { id: 'rules-basket', title: 'Баскетбол', questions: [ { q: "Сколько игроков в баскетболе?", a: ["5", "6", "7"], correct: 0 }, { q: "Сколько времени на атаку?", a: ["10", "24", "30"], correct: 1 } ] },
    { id: 'rules-volley', title: 'Волейбол', questions: [ { q: "До скольких очков в партии?", a: ["15", "21", "25"], correct: 2 } ] }
  ] },
  safety: { title: 'Безопасность', icon: '🛡️', topics: [
    { id: 'safety-gym', title: 'В зале', questions: [ { q: "Что перед занятием?", a: ["Разминка", "Шоколад"], correct: 0 } ] }
  ] },
  history: { title: 'История', icon: '🏆', topics: [
    { id: 'history-olymp', title: 'Олимпиада', questions: [ { q: "Где зародились?", a: ["Рим", "Греция"], correct: 1 } ] }
  ] }
};

let currentQuizQuestions = [];
let currentAnswers = [];
const quizContainer = document.getElementById('quizContainer');

function renderQuizTiles() {
  if (!quizContainer) return;
  let html = '<div class="method-tiles">';
  for (const key in QUIZ_DATA) {
    const block = QUIZ_DATA[key];
    html += `<div class="method-tile" onclick="renderQuizList('${key}')"><div class="method-tile__icon">${block.icon}</div><div class="method-tile__title">${block.title}</div><div class="method-tile__count">${block.topics.length} теста</div></div>`;
  }
  html += '</div>';
  quizContainer.innerHTML = html;
}

window.renderQuizList = function(blockKey) {
  const block = QUIZ_DATA[blockKey];
  let html = `<div class="method-detail"><div class="method-detail__header"><button class="method-detail__back" onclick="renderQuizTiles()">← Назад к разделам</button><h3 class="method-detail__title">${block.icon} ${block.title}</h3></div><div class="method-tab__content" style="padding: 0;">`;
  block.topics.forEach(topic => {
    html += `<div style="padding: 20px; border-bottom: 1px solid var(--border); display: flex; justify-content: space-between; align-items: center;"><div style="font-weight: 800; color: var(--text); font-size: 1.1rem;">${topic.title}</div><button class="btn" style="padding: 10px 20px; font-size: 0.85rem;" onclick="startQuiz('${topic.id}')">Начать тест</button></div>`;
  });
  html += `</div></div>`;
  quizContainer.innerHTML = html;
};

window.startQuiz = function(topicId) {
  let topicData = null;
  for (const key in QUIZ_DATA) {
    const found = QUIZ_DATA[key].topics.find(t => t.id === topicId);
    if (found) { topicData = found; break; }
  }
  if (!topicData) return;
  currentQuizQuestions = topicData.questions;
  currentAnswers = [];
  let html = `<div class="method-detail"><div class="method-detail__header"><button class="method-detail__back" onclick="renderQuizTiles()">← Назад к разделам</button><h3 class="method-detail__title">📝 ${topicData.title}</h3></div><div class="method-tab__content" id="quiz-content">`;
  currentQuizQuestions.forEach((item, index) => {
    const optionsHtml = item.a.map((opt, i) => `<label class="quiz-option" onclick="selectAnswer(event, ${index}, ${i})"><input type="radio" name="q${index}" style="display:none;"> ${opt}</label>`).join('');
    html += `<div class="quiz-question"><h4>${index + 1}. ${item.q}</h4>${optionsHtml}</div>`;
  });
  html += `</div><div style="padding: 20px 30px; text-align: right;"><button class="btn" onclick="checkQuiz(event)" style="width: 100%;">Проверить ответы</button></div></div>`;
  quizContainer.innerHTML = html;
};

window.selectAnswer = function(event, qIndex, aIndex) {
  currentAnswers[qIndex] = aIndex;
  document.querySelectorAll(`[name="q${qIndex}"]`).forEach(opt => opt.parentElement.classList.remove('selected'));
  event.currentTarget.classList.add('selected');
};

window.checkQuiz = function(event) {
  if (currentAnswers.length !== currentQuizQuestions.length) {
    alert('Ответь на все вопросы!');
    return;
  }
  let score = 0;
  const questionsDiv = document.getElementById('quiz-content');
  const questionBoxes = questionsDiv.querySelectorAll('.quiz-question');
  currentQuizQuestions.forEach((q, i) => {
    const labels = questionBoxes[i].querySelectorAll('.quiz-option');
    labels.forEach((label, idx) => {
      if (idx === q.correct) label.classList.add('correct');
      if (currentAnswers[i] === idx && idx !== q.correct) label.classList.add('incorrect');
      if (currentAnswers[i] === idx && idx === q.correct) score++;
      label.style.pointerEvents = 'none';
    });
  });
  const scoreText = document.createElement('div');
  scoreText.style.cssText = 'margin-top: 30px; font-size: 1.5rem; font-weight: 800; text-align: center; color: var(--text);';
  scoreText.textContent = `Твой результат: ${score} из ${currentQuizQuestions.length}`;
  if (score === currentQuizQuestions.length) {
    scoreText.innerHTML += '<br><span style="color: var(--accent);">🎉 Идеально! Секретный объект на карте разблокирован!</span>';
    if (typeof revealSecretMarker === 'function') revealSecretMarker();
  }
  questionsDiv.appendChild(scoreText);
  event.currentTarget.style.display = 'none'; 
};

if (document.getElementById('quizContainer')) renderQuizTiles();

// ============================================================
// ТЕМА
// ============================================================
const themeToggle = document.getElementById('themeToggle');
if (localStorage.getItem('theme') === 'dark') document.documentElement.dataset.theme = 'dark';
if (themeToggle) {
  themeToggle.textContent = document.documentElement.dataset.theme === 'dark' ? '☀️' : '🌙';
  themeToggle.addEventListener('click', () => {
    const isDark = document.documentElement.dataset.theme === 'dark';
    document.documentElement.dataset.theme = isDark ? 'light' : 'dark';
    localStorage.setItem('theme', isDark ? 'light' : 'dark');
    themeToggle.textContent = isDark ? '🌙' : '☀️';
  });
}
