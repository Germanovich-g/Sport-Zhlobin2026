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
// ДАННЫЕ КАРТЫ
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
// УЧАЩИМСЯ: ВСЕ 7 РАЗДЕЛОВ + КРАСОЧНЫЕ СХЕМЫ
// ============================================================
const studentContainer = document.getElementById('studentContainer');

// --- Вспомогательные функции для QR ---
function getQRCodeHTML(topicTitle) {
  const searchQuery = encodeURIComponent(`${topicTitle} техника выполнения`);
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=https://www.youtube.com/results?search_query=${searchQuery}`;
  return `
    <div class="student-qr-wrap" style="display: flex; flex-direction: column; align-items: center; gap: 6px; margin-top: 15px;">
      <img src="${qrUrl}" alt="QR-код на видео" class="student-qr" style="width: 120px; height: 120px; border-radius: 8px; border: 1px solid var(--border);">
      <span style="font-size: 0.8rem; color: var(--text-muted); text-align: center;">Наведи камеру на QR, чтобы найти видео по теме «${topicTitle}»</span>
    </div>
  `;
}

// --- КРАСОЧНЫЕ СХЕМЫ (SVG) ---
const SVG_SCHEMES = {
  'ath-high': `<svg viewBox="0 0 300 150" style="width:100%; max-width:400px; display:block; margin:0 auto; background:#f8faff; border-radius:16px; padding:10px; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
    <!-- Дорожка -->
    <rect x="20" y="120" width="260" height="12" fill="#d9e2f2" rx="6"/>
    <line x1="40" y1="126" x2="280" y2="126" stroke="#b0c4de" stroke-width="2" stroke-dasharray="10,10"/>
    
    <!-- Человек -->
    <circle cx="100" cy="50" r="14" fill="#ff6b35"/> <!-- Голова -->
    <line x1="100" y1="64" x2="90" y2="95" stroke="#14213d" stroke-width="6" stroke-linecap="round"/> <!-- Тело -->
    <line x1="90" y1="95" x2="70" y2="118" stroke="#14213d" stroke-width="6" stroke-linecap="round"/> <!-- Левая нога -->
    <line x1="90" y1="95" x2="110" y2="118" stroke="#14213d" stroke-width="6" stroke-linecap="round"/> <!-- Правая нога -->
    <line x1="100" y1="75" x2="70" y2="90" stroke="#14213d" stroke-width="6" stroke-linecap="round"/> <!-- Левая рука -->
    <line x1="100" y1="75" x2="130" y2="90" stroke="#14213d" stroke-width="6" stroke-linecap="round"/> <!-- Правая рука -->
    
    <!-- Стрелка вперед -->
    <path d="M 140 60 Q 180 40 220 60" stroke="#16b8a6" stroke-width="3" fill="none" stroke-dasharray="6,4"/>
    <polygon points="220,60 212,52 212,68" fill="#16b8a6"/>
    
    <!-- Подпись -->
    <text x="160" y="30" fill="#ff6b35" font-weight="800" font-family="Montserrat, sans-serif" font-size="12">Наклон вперёд</text>
  </svg>`,

  'ath-low': `<svg viewBox="0 0 300 150" style="width:100%; max-width:400px; display:block; margin:0 auto; background:#f8faff; border-radius:16px; padding:10px; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
    <rect x="20" y="120" width="260" height="12" fill="#d9e2f2" rx="6"/>
    
    <!-- Колодки -->
    <rect x="60" y="110" width="25" height="10" fill="#16b8a6" rx="3" transform="rotate(-15, 60, 110)"/>
    <rect x="85" y="115" width="25" height="10" fill="#16b8a6" rx="3" transform="rotate(-15, 85, 115)"/>
    
    <!-- Человек -->
    <circle cx="80" cy="85" r="14" fill="#ff6b35"/>
    <line x1="94" y1="85" x2="140" y2="105" stroke="#14213d" stroke-width="6" stroke-linecap="round"/> <!-- Тело -->
    <line x1="140" y1="105" x2="170" y2="118" stroke="#14213d" stroke-width="6" stroke-linecap="round"/> <!-- Нога -->
    <line x1="140" y1="105" x2="130" y2="118" stroke="#14213d" stroke-width="6" stroke-linecap="round"/> <!-- Нога -->
    <line x1="80" y1="100" x2="60" y2="118" stroke="#14213d" stroke-width="6" stroke-linecap="round"/> <!-- Рука -->
    <line x1="80" y1="100" x2="100" y2="118" stroke="#14213d" stroke-width="6" stroke-linecap="round"/> <!-- Рука -->
    
    <!-- Стрелка -->
    <path d="M 180 90 Q 220 70 260 90" stroke="#16b8a6" stroke-width="3" fill="none" stroke-dasharray="6,4"/>
    <polygon points="260,90 252,82 252,98" fill="#16b8a6"/>
    
    <text x="190" y="40" fill="#ff6b35" font-weight="800" font-family="Montserrat, sans-serif" font-size="12">Старт с колодок</text>
    <text x="190" y="60" fill="#14213d" font-weight="600" font-family="Montserrat, sans-serif" font-size="10">Низкий старт</text>
  </svg>`,

  'ath-jump': `<svg viewBox="0 0 300 150" style="width:100%; max-width:400px; display:block; margin:0 auto; background:#f8faff; border-radius:16px; padding:10px; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
    <rect x="20" y="120" width="260" height="12" fill="#d9e2f2" rx="6"/>
    
    <!-- Человек -->
    <circle cx="70" cy="70" r="14" fill="#ff6b35"/>
    <line x1="70" y1="84" x2="70" y2="110" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="70" y1="95" x2="50" y2="110" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="70" y1="95" x2="90" y2="110" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="70" y1="110" x2="50" y2="120" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="70" y1="110" x2="90" y2="120" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    
    <!-- Траектория -->
    <path d="M 90 70 Q 150 20 220 70" stroke="#16b8a6" stroke-width="3" fill="none" stroke-dasharray="6,4"/>
    <circle cx="220" cy="70" r="14" fill="#ff6b35" opacity="0.4"/>
    <polygon points="220,70 212,62 212,78" fill="#16b8a6"/>
    
    <text x="100" y="45" fill="#ff6b35" font-weight="800" font-family="Montserrat, sans-serif" font-size="12">Мах руками</text>
    <text x="100" y="65" fill="#14213d" font-weight="600" font-family="Montserrat, sans-serif" font-size="10">Толчок двумя ногами</text>
  </svg>`,

  'gym-group': `<svg viewBox="0 0 300 150" style="width:100%; max-width:400px; display:block; margin:0 auto; background:#f8faff; border-radius:16px; padding:10px; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
    <rect x="20" y="120" width="260" height="12" fill="#d9e2f2" rx="6"/>
    
    <!-- Человек в группировке -->
    <circle cx="100" cy="70" r="18" fill="#ff6b35"/>
    <path d="M 100 88 Q 70 110 100 130" stroke="#14213d" stroke-width="6" fill="none" stroke-linecap="round"/>
    <path d="M 100 88 Q 130 110 100 130" stroke="#14213d" stroke-width="6" fill="none" stroke-linecap="round"/>
    <path d="M 85 75 Q 100 90 115 75" stroke="#14213d" stroke-width="4" fill="none"/>
    
    <!-- Стрелка -->
    <path d="M 140 80 Q 180 60 220 90" stroke="#16b8a6" stroke-width="3" fill="none" stroke-dasharray="6,4"/>
    <polygon points="220,90 212,82 212,98" fill="#16b8a6"/>
    
    <text x="150" y="40" fill="#ff6b35" font-weight="800" font-family="Montserrat, sans-serif" font-size="12">Спина круглая</text>
    <text x="150" y="60" fill="#14213d" font-weight="600" font-family="Montserrat, sans-serif" font-size="10">Колени к груди</text>
  </svg>`,

  'gym-stand': `<svg viewBox="0 0 300 150" style="width:100%; max-width:400px; display:block; margin:0 auto; background:#f8faff; border-radius:16px; padding:10px; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
    <rect x="20" y="120" width="260" height="12" fill="#d9e2f2" rx="6"/>
    
    <!-- Человек -->
    <circle cx="150" cy="40" r="14" fill="#ff6b35"/> <!-- Голова -->
    <line x1="150" y1="54" x2="150" y2="80" stroke="#14213d" stroke-width="6" stroke-linecap="round"/> <!-- Тело -->
    <line x1="150" y1="80" x2="120" y2="115" stroke="#14213d" stroke-width="6" stroke-linecap="round"/> <!-- Нога -->
    <line x1="150" y1="80" x2="180" y2="115" stroke="#14213d" stroke-width="6" stroke-linecap="round"/> <!-- Нога -->
    <line x1="150" y1="80" x2="150" y2="115" stroke="#14213d" stroke-width="6" stroke-linecap="round"/> <!-- Нога -->
    
    <!-- Стрелки вверх -->
    <path d="M 120 60 L 120 30" stroke="#16b8a6" stroke-width="3" fill="none" marker-end="url(#arrow-up)"/>
    <path d="M 180 60 L 180 30" stroke="#16b8a6" stroke-width="3" fill="none" marker-end="url(#arrow-up)"/>
    <defs>
      <marker id="arrow-up" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="#16b8a6"/>
      </marker>
    </defs>
    
    <text x="200" y="40" fill="#ff6b35" font-weight="800" font-family="Montserrat, sans-serif" font-size="12">Опора на лопатки</text>
    <text x="200" y="60" fill="#14213d" font-weight="600" font-family="Montserrat, sans-serif" font-size="10">Ноги вертикально</text>
  </svg>`,

  'ski-step': `<svg viewBox="0 0 300 150" style="width:100%; max-width:400px; display:block; margin:0 auto; background:#f8faff; border-radius:16px; padding:10px; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
    <rect x="20" y="120" width="260" height="12" fill="#e0f2fe" rx="6"/>
    
    <!-- Человек -->
    <circle cx="80" cy="70" r="14" fill="#ff6b35"/>
    <line x1="80" y1="84" x2="80" y2="110" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="80" y1="95" x2="60" y2="120" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="80" y1="95" x2="100" y2="120" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    
    <!-- Лыжи -->
    <rect x="50" y="115" width="25" height="6" fill="#ff6b35" rx="3"/>
    <rect x="95" y="115" width="25" height="6" fill="#ff6b35" rx="3"/>
    
    <!-- Стрелка -->
    <path d="M 130 80 Q 180 50 220 80" stroke="#16b8a6" stroke-width="3" fill="none" stroke-dasharray="6,4"/>
    <polygon points="220,80 212,72 212,88" fill="#16b8a6"/>
    
    <text x="140" y="40" fill="#ff6b35" font-weight="800" font-family="Montserrat, sans-serif" font-size="12">Вся подошва на снегу</text>
    <text x="140" y="60" fill="#14213d" font-weight="600" font-family="Montserrat, sans-serif" font-size="10">Ступающий шаг</text>
  </svg>`,

  'foot-kick': `<svg viewBox="0 0 300 150" style="width:100%; max-width:400px; display:block; margin:0 auto; background:#f8faff; border-radius:16px; padding:10px; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
    <!-- Мяч -->
    <circle cx="150" cy="75" r="20" fill="#14213d"/>
    <circle cx="145" cy="70" r="5" fill="#fff" opacity="0.4"/>
    
    <!-- Опорная нога -->
    <path d="M 130 75 Q 100 100 80 120" stroke="#14213d" stroke-width="6" fill="none" stroke-linecap="round"/>
    <rect x="60" y="115" width="30" height="10" fill="#16b8a6" rx="4"/>
    <text x="50" y="40" fill="#16b8a6" font-weight="800" font-family="Montserrat, sans-serif" font-size="10">Опорная</text>
    
    <!-- Бьющая нога -->
    <path d="M 170 75 Q 200 100 220 120" stroke="#14213d" stroke-width="6" fill="none" stroke-linecap="round"/>
    <rect x="210" y="115" width="30" height="10" fill="#ff6b35" rx="4"/>
    <text x="210" y="40" fill="#ff6b35" font-weight="800" font-family="Montserrat, sans-serif" font-size="10">Бьющая</text>
    
    <!-- Линия удара -->
    <line x1="170" y1="75" x2="150" y2="75" stroke="#ff3d71" stroke-width="3" stroke-dasharray="3,3"/>
  </svg>`,

  'volley-top': `<svg viewBox="0 0 300 150" style="width:100%; max-width:400px; display:block; margin:0 auto; background:#f8faff; border-radius:16px; padding:10px; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
    <!-- Мяч -->
    <circle cx="150" cy="50" r="22" fill="#16b8a6"/>
    <path d="M 130 50 Q 150 30 170 50" stroke="#fff" stroke-width="3" fill="none"/>
    <path d="M 130 50 Q 150 70 170 50" stroke="#fff" stroke-width="3" fill="none"/>
    
    <!-- Руки (Ковшик) -->
    <path d="M 120 80 L 130 50 L 150 45 L 170 50 L 180 80" stroke="#14213d" stroke-width="5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="150" cy="45" r="4" fill="#ff6b35"/> <!-- Треугольник -->
    
    <!-- Стрелка вверх -->
    <path d="M 150 20 L 150 5" stroke="#ff6b35" stroke-width="3" fill="none" marker-end="url(#arrow-top)"/>
    <defs>
      <marker id="arrow-top" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="#ff6b35"/>
      </marker>
    </defs>
    
    <text x="200" y="50" fill="#ff6b35" font-weight="800" font-family="Montserrat, sans-serif" font-size="12">Ковшик</text>
    <text x="200" y="70" fill="#14213d" font-weight="600" font-family="Montserrat, sans-serif" font-size="10">Пальцы образуют треугольник</text>
  </svg>`,

  'basket-shot': `<svg viewBox="0 0 300 150" style="width:100%; max-width:400px; display:block; margin:0 auto; background:#f8faff; border-radius:16px; padding:10px; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
    <!-- Кольцо -->
    <rect x="200" y="20" width="10" height="100" fill="#d9e2f2"/>
    <circle cx="205" cy="50" r="16" fill="none" stroke="#ff6b35" stroke-width="5"/>
    
    <!-- Мяч -->
    <circle cx="100" cy="80" r="18" fill="#ff6b35"/>
    <path d="M 85 80 Q 100 65 115 80" stroke="#14213d" stroke-width="2" fill="none"/>
    
    <!-- Траектория -->
    <path d="M 120 80 Q 160 40 190 50" stroke="#16b8a6" stroke-width="3" fill="none" stroke-dasharray="6,4"/>
    <polygon points="190,50 182,42 182,58" fill="#16b8a6"/>
    
    <text x="50" y="40" fill="#ff6b35" font-weight="800" font-family="Montserrat, sans-serif" font-size="12">Траектория</text>
  </svg>`
};

// --- ВСЕ РАЗДЕЛЫ И ТЕМЫ ---
const STUDENT_DATA = [
  {
    id: 'st-ath', title: 'Лёгкая атлетика', icon: '🏃‍♂️',
    subtopics: [
      { id: 'ath-high', title: 'Высокий старт', content: { 'Теория': `<p>Используется для бега на средние и длинные дистанции. Позволяет быстро набрать скорость без излишнего напряжения в первые секунды.</p>`, 'Техника выполнения': `<ol><li>Сильную (толчковую) ногу ставим вперед, носком вплотную к стартовой линии.</li><li>Вторую ногу отставляем назад на расстояние 1,5–2 стоп.</li><li>Корпус наклонен вперед, взгляд направлен на дорожку в 2–3 метрах перед собой.</li><li>Руки согнуты в локтях, разноименно ногам (если впереди правая нога — впереди левая рука).</li><li>Команда учителя: "На старт!", "Внимание!", "Марш!".</li></ol>`, 'Типичные ошибки': `<ul><li>Выпрямление корпуса до начала бега.</li><li>Взгляд под ноги (замедляет реакцию).</li></ul>` }, challenge: 'Сделай высокий старт 5 раз с ускорением на 10 метров.', scheme: SVG_SCHEMES['ath-high'] },
      { id: 'ath-low', title: 'Низкий старт', content: { 'Теория': `<p>Применяется в спринте (60 м, 100 м) для максимально быстрого старта за счет использования стартовых колодок.</p>`, 'Техника выполнения': `<ol><li>Опора на руки и колено сзади стоящей ноги.</li><li>Руки ставятся на ширине плеч, пальцы образуют "коридор" для головы.</li><li>По команде "Внимание!" таз поднимается немного выше плеч, вес переносится на руки.</li><li>Мощный одновременный толчок обеими ногами и руками.</li></ol>`, 'Типичные ошибки': `<ul><li>Слишком высокое или низкое положение таза.</li><li>Прямые руки.</li></ul>` }, challenge: 'Выполни низкий старт с колодками и пробеги 20 метров.', scheme: SVG_SCHEMES['ath-low'] },
      { id: 'ath-run', title: 'Бег по дистанции', content: { 'Теория': `<p>Поддержание скорости и экономичность движений.</p>`, 'Техника выполнения': `<ol><li>Корпус наклонен вперед на 5–7 градусов.</li><li>Работа рук: локти согнуты под углом 90 градусов, движение вперед-назад (не поперек тела).</li><li>Дыхание ровное, глубокое.</li></ol>`, 'Типичные ошибки': `<p>Зажатые плечи.</p>` }, challenge: 'Пробеги 100 метров, сохраняя ровное дыхание.', scheme: '' },
      { id: 'ath-finish', title: 'Финиширование', content: { 'Теория': `<p>Пересечение финишной линии с сохранением максимальной скорости.</p>`, 'Техника выполнения': `<ol><li>"Бросок грудью": наклон корпуса вперед в последний момент.</li><li>"Плечом": касание ленты плечом, если бег идет в группе.</li><li>Важно: Не тормозить перед финишем, а пробегать линию на полной скорости.</li></ol>`, 'Типичные ошибки': `<p>Прыжок на линию.</p>` }, challenge: 'Попробуй финишировать "броском грудью" 3 раза.', scheme: '' },
      { id: 'ath-shuttle', title: 'Челночный бег', content: { 'Теория': `<p>Тест на скоростную выносливость и ловкость. Главная сложность — резкая смена направления.</p>`, 'Техника выполнения': `<ol><li>Старт высокий.</li><li>Добегая до линии, не тормозите резко! Делайте стопорящий шаг и резкий разворот.</li><li>При касании линии корпус должен быть максимально низко, чтобы не потерять скорость на обратном пути.</li><li>Совет: Касайтесь линии рукой или ногой максимально близко к земле.</li></ol>`, 'Типичные ошибки': `<p>Потеря равновесия.</p>` }, challenge: 'Пробеги челночный бег 3х10 м, записывая время.', scheme: '' },
      { id: 'ath-30-60', title: 'Бег на 30 и 60 метров', content: { 'Теория': `<p>Тестирование скоростных качеств.</p>`, 'Техника выполнения': `<ol><li>Максимально быстрый старт (лучше низкий).</li><li>Работа рук "как поршни", частый и широкий шаг.</li></ol>`, 'Типичные ошибки': `<p>Взгляд вниз.</p>` }, challenge: 'Пробеги 30 метров на максимальной скорости.', scheme: '' },
      { id: 'ath-jump', title: 'Прыжки в длину с места', content: { 'Теория': `<p>Развитие силы ног и координации.</p>`, 'Техника выполнения': `<ol><li>Ноги на ширине плеч, носки у линии.</li><li>Глубокий присед, руки назад.</li><li>Мощный мах руками вперед-вверх и одновременный толчок ногами.</li><li>Приземление на две ноги, мягко сгибая колени.</li><li>Способы: "Ножницы" (в полете ноги меняются местами) или "согнув ноги" (группировка в полете).</li></ol>`, 'Типичные ошибки': `<p>Заступ за линию.</p>` }, challenge: 'Сделай 3 подхода по 10 прыжков в длину.', scheme: SVG_SCHEMES['ath-jump'] },
      { id: 'ath-multi', title: 'Многоскоки', content: { 'Теория': `<p>Развитие силы отталкивания и выносливости.</p>`, 'Техника выполнения': `<ol><li>Прыжки с ноги на ногу с активным махом свободной ноги вперед-вверх.</li><li>Корпус прямой, руки работают как при беге.</li></ol>`, 'Типичные ошибки': `<p>Приземление на прямые ноги.</p>` }, challenge: 'Пройди дистанцию 30 метров многоскоками.', scheme: '' },
      { id: 'ath-jump-run', title: 'Прыжки в длину с разбега', content: { 'Теория': `<p>Совмещение разбега и мощного толчка.</p>`, 'Техника выполнения': `<ol><li>Определение толчковой ноги.</li><li>Разбег (8–10 шагов) с постепенным ускорением.</li><li>Последние 2–3 шага — подготовка к толчку.</li><li>Толчок выполняется сильнейшей ногой с акцентом на мах руками.</li></ol>`, 'Типичные ошибки': `<p>Неправильный выбор толчковой ноги.</p>` }, challenge: 'Выполни прыжок в длину с разбега (8–10 шагов).', scheme: '' },
      { id: 'ath-throw', title: 'Метание малого мяча (150 г)', content: { 'Теория': `<p>Развитие координации и силы рук.</p>`, 'Техника выполнения': `<ol><li>Держим мяч фалангами пальцев.</li><li>Замах: рука с мячом отводится назад, корпус разворачивается.</li><li>Скрестный шаг (левая нога впереди, правая сзади).</li><li>Резкий рывок корпусом и рукой вперед.</li><li>Выпуск мяча происходит в высшей точке над плечом, кисть "щелкает" в последний момент.</li></ol>`, 'Типичные ошибки': `<p>Бросок без поворота корпуса.</p>` }, challenge: 'Сделай 10 бросков мяча в стену с правильной техникой.', scheme: '' },
      { id: 'ath-medball', title: 'Метание набивного мяча', content: { 'Теория': `<p>Развитие силы спины и рук, гибкости плечевого пояса.</p>`, 'Техника выполнения': `<ol><li><strong>Из-за головы (сидя):</strong> Сидя на полу, ноги врозь. Мяч за головой. Резкий бросок вперед-вверх, работая мышцами спины и рук.</li><li><strong>Из-за головы (стоя):</strong> Ноги на ширине плеч, мяч за головой. Толчок двумя руками от груди или из-за головы с активным участием ног.</li><li><strong>Назад через голову:</strong> Стоя спиной к цели, бросок через голову назад.</li></ol>`, 'Типичные ошибки': `<p>Слабый мах руками.</p>` }, challenge: 'Выполни 10 бросков набивного мяча из-за головы.', scheme: '' },
      { id: 'ath-push', title: 'Толкание набивного мяча', content: { 'Теория': `<p>Имитация толкания ядра.</p>`, 'Техника выполнения': `<ol><li>Мяч у груди, локти прижаты.</li><li>Ноги согнуты.</li><li>Мощный толчок двумя руками от груди вперед-вверх.</li><li>Вес тела переносится с задней ноги на переднюю.</li></ol>`, 'Типичные ошибки': `<p>Толчок одной рукой.</p>` }, challenge: 'Толкни набивной мяч 5 раз на максимальное расстояние.', scheme: '' }
    ]
  },
  {
    id: 'st-gym', title: 'Гимнастика', icon: '🤸‍♂️',
    subtopics: [
      { id: 'gym-group', title: 'Группировка и перекаты', content: { 'Теория': `<p>Основа безопасности при падениях и база для кувырков.</p>`, 'Техника выполнения': `<ol><li><strong>Группировка:</strong> Сидя, подтянуть колени к груди, обхватить их руками, голову наклонить вперед. Спина круглая.</li><li><strong>Перекат назад:</strong> Из упора присев перекатиться назад на спину, сохраняя группировку, вернуться в исходное положение.</li><li><strong>Кувырок вперед:</strong> Из упора присев, оттолкнувшись руками, перенести вес на плечи, перевернуться через голову и встать.</li></ol>`, 'Типичные ошибки': `<ul><li>Опора на голову при кувырке.</li><li>Разомкнутая группировка.</li></ul>` }, challenge: 'Выполни 3 кувырка вперед с правильной группировкой.', scheme: SVG_SCHEMES['gym-group'] },
      { id: 'gym-stand', title: 'Стойка на лопатках ("Березка")', content: { 'Теория': `<p>Развитие гибкости позвоночника и силы мышц кора.</p>`, 'Техника выполнения': `<ol><li>Лечь на спину.</li><li>Опираясь на локти и затылок, поднять ноги и туловище вертикально вверх.</li><li>Поддерживать спину руками под лопатками.</li><li>Ноги вместе, носки натянуты.</li></ol>`, 'Типичные ошибки': `<p>Запрокидывание головы.</p>` }, challenge: 'Удерживай "березку" 15 секунд.', scheme: SVG_SCHEMES['gym-stand'] },
      { id: 'gym-bridge', title: 'Мост из положения лежа', content: { 'Теория': `<p>Развитие гибкости спины и плечевого пояса.</p>`, 'Техника выполнения': `<ol><li>Лежа на спине, согнуть ноги (стопы близко к ягодицам) и руки (ладони у плеч, пальцы к ногам).</li><li>Опираясь на руки и ноги, прогнуться в спине, поднимая таз как можно выше.</li><li>Голова опущена назад.</li></ol>`, 'Типичные ошибки': `<p>Слишком резкий подъем.</p>` }, challenge: 'Сделай "мост" 3 раза подряд.', scheme: '' },
      { id: 'gym-back', title: 'Кувырок назад', content: { 'Теория': `<p>Развитие координации и смелости.</p>`, 'Техника выполнения': `<ol><li>Из упора присев перекат назад.</li><li>Поставить ладони на мат возле плеч.</li><li>Оттолкнуться и перевернуться через голову, встав на ноги.</li></ol>`, 'Типичные ошибки': `<p>Недостаточный толчок руками.</p>` }, challenge: 'Выполни кувырок назад 3 раза.', scheme: '' },
      { id: 'gym-climb', title: 'Лазание по канату в три приема', content: { 'Теория': `<p>Развитие силы рук и ног, координации.</p>`, 'Техника выполнения': `<ol><li>Захват каната ногами (ступни зажимают канат, одна над другой).</li><li>Руки скользят вверх по канату.</li><li>Ноги выпрямляются, подтягивая тело вверх.</li></ol>`, 'Типичные ошибки': `<p>Отсутствие страховки.</p>` }, challenge: 'Залезь по канату на 2 метра (со страховкой).', scheme: '' },
      { id: 'gym-wall', title: 'Лазание по гимнастической стенке', content: { 'Теория': `<p>Развитие координации и силы.</p>`, 'Техника выполнения': `<ol><li>Руки и ноги ставятся на рейки перекрестно (левая рука — правая нога).</li><li>Движение ритмичное, без рывков.</li><li>Смотреть на руки, а не вниз.</li></ol>`, 'Типичные ошибки': `<p>Спуск спиной вперед.</p>` }, challenge: 'Поднимись и спустись по стенке 3 раза.', scheme: '' },
      { id: 'gym-horse', title: 'Перелезание через "коня" и "козла"', content: { 'Теория': `<p>Развитие смелости и координации.</p>`, 'Техника выполнения': `<ol><li>Разбег, толчок одной ногой о мостик.</li><li>Опора руками о снаряд.</li><li>Перенос ног через снаряд.</li><li>Мягкое приземление на согнутые ноги.</li></ol>`, 'Типичные ошибки': `<p>Отсутствие страховки.</p>` }, challenge: 'Перелезь через "коня" с помощью учителя.', scheme: '' },
      { id: 'gym-log', title: 'Ходьба по бревну', content: { 'Теория': `<p>Развитие равновесия и координации.</p>`, 'Техника выполнения': `<ol><li>Руки в стороны для баланса.</li><li>Взгляд направлен вперед (не под ноги).</li><li>Шаги мягкие, с носка на пятку.</li><li>Спина прямая.</li><li>Упражнения: Ходьба с предметом на голове, повороты на одной ноге, приседания на бревне.</li></ol>`, 'Типичные ошибки': `<p>Взгляд вниз.</p>` }, challenge: 'Пройди по бревну с предметом на голове.', scheme: '' }
    ]
  },
  {
    id: 'st-ski', title: 'Лыжная подготовка', icon: '🎿',
    subtopics: [
      { id: 'ski-step', title: 'Ступающий шаг', content: { 'Теория': `<p>Для подъема в гору или рыхлого снега.</p>`, 'Техника выполнения': `<ol><li>Лыжа ставится на снег всей подошвой.</li><li>Вес переносится на нее.</li><li>Затем вторая лыжа подтягивается к первой.</li><li>Палки используются для опоры.</li></ol>`, 'Типичные ошибки': `<p>Волок лыж по снегу.</p>` }, challenge: 'Пройди ступающим шагом 50 метров.', scheme: SVG_SCHEMES['ski-step'] },
      { id: 'ski-slide', title: 'Скользящий шаг', content: { 'Теория': `<p>Основная техника передвижения.</p>`, 'Техника выполнения': `<ol><li>Отталкивание одной лыжей.</li><li>Скольжение на другой.</li><li>Вес тела полностью переносится на скользящую лыжу.</li><li>Руки работают попеременно.</li></ol>`, 'Типичные ошибки': `<p>Отсутствие переноса веса.</p>` }, challenge: 'Пройди скользящим шагом 100 метров.', scheme: '' },
      { id: 'ski-classic', title: 'Попеременный двухшажный ход', content: { 'Теория': `<p>Классический ход для лыжни.</p>`, 'Техника выполнения': `<ol><li>Синхронизация рук и ног (правая рука — левая нога).</li><li>Толчок палкой происходит в момент, когда противоположная нога отталкивается от снега.</li></ol>`, 'Типичные ошибки': `<p>Толчок одноименными рукой и ногой.</p>` }, challenge: 'Пройди 100 метров попеременным двухшажным ходом.', scheme: '' },
      { id: 'ski-bez', title: 'Одновременный бесшажный ход', content: { 'Теория': `<p>Для спусков и равнины.</p>`, 'Техника выполнения': `<ol><li>Только мощный толчок палками одновременно.</li><li>Ноги скользят по инерции.</li></ol>`, 'Типичные ошибки': `<p>Слабый толчок палками.</p>` }, challenge: 'Пройди 50 метров одновременным бесшажным ходом.', scheme: '' },
      { id: 'ski-up', title: 'Преодоление подъемов', content: { 'Теория': `<p>Ступающим шагом: "Лесенкой" (боком), "елочкой" (разведя носки лыж). Полуелочкой и полулесенкой: Для склонов средней крутизны.</p>`, 'Техника выполнения': `<p>Подъем в гору требует активной работы палками и ногами.</p>`, 'Типичные ошибки': `<p>Потеря равновесия на склоне.</p>` }, challenge: 'Поднимись в горку "елочкой" 3 раза.', scheme: '' },
      { id: 'ski-down', title: 'Спуски и торможение', content: { 'Теория': `<p>Основная стойка: Ноги согнуты, корпус наклонен вперед, руки держат палки кольцами назад.</p>`, 'Техника выполнения': `<ol><li><strong>Торможение "плугом":</strong> Сведение носков лыж и разведение пяток, давление на внутренние ребра лыж.</li><li><strong>Торможение "упором" (полуплугом):</strong> Давление на одну лыжу (внешнюю в повороте).</li></ol>`, 'Типичные ошибки': `<p>Падение на спуске.</p>` }, challenge: 'Спустись с горки и затормози "плугом".', scheme: '' }
    ]
  },
  {
    id: 'st-mobile', title: 'Подвижные игры', icon: '🎲',
    subtopics: [
      { id: 'game-stroy', title: 'Строевые игры', content: { 'Теория': `<p>«Кто быстрее в строй», «Построй круг», «Путешествие на корабле», «Река и ров», «У ребят порядок строгий», «Елочки-березки», «Рыбки-крабики».</p>`, 'Техника выполнения': `<p>Акцент: Четкое выполнение команд, скорость, дисциплина.</p>`, 'Типичные ошибки': `<p>Толкотня при построении.</p>` }, challenge: 'Сыграй в игру "Кто быстрее в строй".', scheme: '' },
      { id: 'game-attention', title: 'Игры на внимание', content: { 'Теория': `<p>«Фигуры», «Лес, болото, озеро», «Нос, нос, нос, лоб», «Класс, смирно!», «День и ночь», «Товарищ капитан», «Делай, как я», «Запрещенное движение», «Затейники», «Сделай фигуру», «Зеркало».</p>`, 'Техника выполнения': `<p>Акцент: Концентрация, периферическое зрение, скорость реакции на сигнал.</p>`, 'Типичные ошибки': `<p>Выполнение запрещенного движения.</p>` }, challenge: 'Сыграй в игру "Запрещенное движение".', scheme: '' },
      { id: 'game-run', title: 'Игры с бегом', content: { 'Теория': `<p>«Ключи», «Кто быстрее», «Отдай ленту», «Быстро возьми и положи», «Перемени предмет», «Догони свою пару», «Два Мороза», «Совушка», «Докати обруч», «Не замочи ноги», «Успей догнать», «Скворечник», «Найди пару», «Поезд», «Бездомный заяц», «Маяк», «Конники-спортсмены», «Гуси-лебеди», «Пустое место», «Краски», «Свободное место».</p>`, 'Техника выполнения': `<p>Акцент: Скоростные качества, ловкость, умение уворачиваться.</p>`, 'Типичные ошибки': `<p>Высокая интенсивность бега без отдыха.</p>` }, challenge: 'Поиграй в "Два Мороза" с друзьями.', scheme: '' },
      { id: 'game-jump', title: 'Игры с прыжками', content: { 'Теория': `<p>«Пингвины с мячом», «Спрыгни и повернись», «Не наступи», «Волк во рву», «Зайцы в огороде», «Лягушка и цапля», «Воробьи и кошки», «Удочка», «Поймай комара», «С кочки на кочку», «Не попадись», «Салки».</p>`, 'Техника выполнения': `<p>Акцент: Прыгучесть, координация, точность приземления.</p>`, 'Типичные ошибки': `<p>Много прыжков подряд.</p>` }, challenge: 'Попрыгай через скакалку 30 секунд.', scheme: '' }
    ]
  },
  {
    id: 'st-football', title: 'Футбол', icon: '⚽',
    subtopics: [
      { id: 'foot-kick', title: 'Удары по мячу', content: { 'Теория': `<p><strong>Постановка опорной ноги:</strong> Правило 15–20 см от мяча, носок смотрит в цель.</p><p><strong>Удар серединой подъема:</strong> На силу и дальность.</p><p><strong>Удар внутренней частью стопы:</strong> На точность (пас).</p>`, 'Техника выполнения': `<ol><li><strong>Опорная нога:</strong> ставится сбоку от мяча на расстоянии 15–20 см. Носок смотрит в цель.</li><li><strong>Удар серединой подъема:</strong> Замах — отводите бьющую ногу назад. Удар — бейте точно в центр мяча подъемом стопы. Проводка — после удара нога продолжает движение по траектории мяча.</li><li><strong>Удар внутренней частью:</strong> Опорная нога ставится рядом с мячом. Бьющая нога разворачивается носком наружу. Удар наносится внутренней стороной стопы точно в центр мяча.</li></ol>`, 'Типичные ошибки': `<p>Неправильная постановка опорной ноги.</p>` }, challenge: 'Сделай 10 ударов по мячу в стену внутренней стороной стопы.', scheme: SVG_SCHEMES['foot-kick'] },
      { id: 'foot-stop', title: 'Остановка мяча', content: { 'Теория': `<p>Для катящегося мяча (накрыть сверху), внутренней стороной (универсальный прием), летящего мяча.</p>`, 'Техника выполнения': `<ol><li><strong>Подошвой:</strong> Слегка согните опорную ногу для устойчивости. Накройте катящийся мяч подошвой сверху. Расслабьте голеностоп, чтобы нога сработала как амортизатор.</li><li><strong>Внутренней стороной:</strong> Опорная нога ставится сбоку от мяча. Бьющая нога разворачивается носком наружу. Накройте мяч внутренней стороной стопы, гася его скорость.</li><li><strong>Остановка летящего мяча:</strong> Подстраивайтесь под траекторию мяча. Нога должна быть расслаблена и работать как амортизатор.</li></ol>`, 'Типичные ошибки': `<p>Мяч отскакивает далеко.</p>` }, challenge: 'Останови мяч подошвой 10 раз подряд.', scheme: '' },
      { id: 'foot-dribble', title: 'Ведение мяча', content: { 'Теория': `<p>Ведение одной ногой: По прямой, "змейкой", "восьмеркой".</p>`, 'Техника выполнения': `<ol><li><strong>Одной ногой:</strong> Ведите мяч одной ногой, контролируя его высоту отскока. Держите корпус прямо, взгляд направлен вперед.</li><li><strong>Попеременное ведение:</strong> Ведите мяч попеременно правой и левой ногой, контролируя его высоту отскока.</li><li><strong>Внешней и внутренней частью:</strong> Ведите мяч внешней или внутренней частью подъема, контролируя его высоту отскока.</li><li><strong>Ведение двух мячей:</strong> Ведите два мяча одновременно, контролируя их высоту отскока.</li></ol>`, 'Типичные ошибки': `<p>Слишком сильный толчок.</p>` }, challenge: 'Проведи мяч "змейкой" между 5 конусами.', scheme: '' },
      { id: 'foot-pass', title: 'Передача и игра вратаря', content: { 'Теория': `<p>Передача правой и левой ногой. Вратарь: Стойка, ловля высоких и низких мячей.</p>`, 'Техника выполнения': `<ol><li><strong>Передача:</strong> Опорная нога ставится сбоку от мяча. Бьющая нога разворачивается носком наружу. Удар наносится внутренней стороной стопы точно в центр мяча.</li><li><strong>Вратарь:</strong> Стойка вратаря: ноги чуть согнуты, вес на носках, руки перед собой. Ловля: техника "Корзина" (для высоких мячей) и "Замок" (для низких).</li><li><strong>Введение мяча:</strong> Вратарь вводит мяч в игру броском одной рукой или ударом ногой по неподвижному мячу и после набрасывания.</li></ol>`, 'Типичные ошибки': `<p>Неточная передача.</p>` }, challenge: 'Сделай 10 точных передач в паре.', scheme: '' }
    ]
  },
  {
    id: 'st-volley', title: 'Волейбол', icon: '🏐',
    subtopics: [
      { id: 'volley-top', title: 'Передача мяча двумя руками сверху', content: { 'Теория': `<p>Положение кистей ("ковшик"), работа ног, удар о стену/пол.</p>`, 'Техника выполнения': `<ol><li><strong>Стойка:</strong> ноги согнуты в коленях, одна чуть впереди.</li><li><strong>Кисти рук</strong> образуют "ковшик" (большие и указательные пальцы образуют треугольник).</li><li><strong>Работа ног:</strong> выпрямляете ноги и корпус, толкая мяч вверх.</li><li><strong>Контакт с мячом:</strong> касайтесь мяча только фалангами пальцев, никогда не бейте ладонями.</li></ol>`, 'Типичные ошибки': `<p>Прием на ладони.</p>` }, challenge: 'Сделай 10 передач над собой.', scheme: SVG_SCHEMES['volley-top'] },
      { id: 'volley-bottom', title: 'Передача мяча двумя руками снизу', content: { 'Теория': `<p>Прямые руки, прием на предплечья, удар о стену.</p>`, 'Техника выполнения': `<ol><li><strong>Стойка:</strong> ноги согнуты в коленях, одна чуть впереди.</li><li><strong>Руки прямые, кисти вместе,</strong> образуют "площадку".</li><li><strong>Прием мяча</strong> на предплечья (между локтем и кистью).</li><li><strong>Работа ног:</strong> выпрямляете ноги и корпус, толкая мяч вверх.</li></ol>`, 'Типичные ошибки': `<p>Согнутые руки.</p>` }, challenge: 'Прими мяч снизу 10 раз подряд.', scheme: '' },
      { id: 'volley-serve', title: 'Подача нижняя прямая', content: { 'Теория': `<p>Исходное положение, подброс, хлесткий удар.</p>`, 'Техника выполнения': `<ol><li><strong>Исходное положение:</strong> левая нога впереди, мяч в левой руке, правая (бьющая) отведена назад.</li><li><strong>Замах и удар:</strong> подбрасываем мяч невысоко (на 20–30 см). Бьющая рука идет снизу вверх, удар наносится основанием ладони точно по центру мяча.</li><li><strong>Упражнение:</strong> Начинайте тренироваться у стены, затем в паре через сетку с 3 метров, постепенно отходя дальше.</li></ol>`, 'Типичные ошибки': `<p>Мяч не перелетает сетку.</p>` }, challenge: 'Сделай 5 подач через сетку с 3 метров.', scheme: '' }
    ]
  },
  {
    id: 'st-basket', title: 'Баскетбол', icon: '🏀',
    subtopics: [
      { id: 'basket-stance', title: 'Стойки и перемещения', content: { 'Теория': `<p>Высокая — для отдыха, средняя — для передвижения, низкая — для защиты.</p>`, 'Техника выполнения': `<ol><li><strong>Высокая:</strong> ноги прямые, корпус прямой.</li><li><strong>Средняя:</strong> ноги согнуты в коленях, корпус наклонен вперед.</li><li><strong>Низкая:</strong> ноги сильно согнуты в коленях, корпус сильно наклонен вперед.</li><li><strong>Остановка шагом:</strong> делаете шаг вперед, перенося вес на переднюю ногу, задняя нога подтягивается.</li><li><strong>Остановка прыжком:</strong> делаете прыжок, приземляясь на обе ноги одновременно.</li></ol>`, 'Типичные ошибки': `<p>Прямые ноги в стойке.</p>` }, challenge: 'Потренируй 3 вида стоек и остановку прыжком.', scheme: '' },
      { id: 'basket-pass', title: 'Передачи', content: { 'Теория': `<p>Основной способ, работа кистей ("кистевой бросок").</p>`, 'Техника выполнения': `<ol><li><strong>Двумя руками от груди:</strong> Мяч у груди, локти прижаты. Резкий толчок кистями вперед. Вес тела переносится с задней ноги на переднюю.</li><li><strong>Двумя руками сверху:</strong> Мяч над головой, локти согнуты. Резкий толчок кистями вперед.</li><li><strong>Одной рукой от плеча:</strong> Мяч у плеча, локоть согнут. Резкий толчок кистью вперед.</li></ol>`, 'Типичные ошибки': `<p>Слабый толчок кистями.</p>` }, challenge: 'Сделай 10 передач в паре от груди.', scheme: '' },
      { id: 'basket-catch', title: 'Ловля мяча', content: { 'Теория': `<p>Руки вытянуты навстречу мячу, пальцы разведены.</p>`, 'Техника выполнения': `<ol><li>Руки вытянуты навстречу мячу, пальцы разведены.</li><li>Мяч ловится на уровне груди.</li><li>Руки сгибаются в локтях, гася скорость мяча.</li></ol>`, 'Типичные ошибки': `<p>Мяч отскакивает от рук.</p>` }, challenge: 'Поймай мяч 10 раз подряд в паре.', scheme: '' },
      { id: 'basket-dribble', title: 'Ведение мяча', content: { 'Теория': `<p>Мяч должен отскакивать не выше пояса. Смотреть нужно не на мяч, а вперед (голова поднята!).</p>`, 'Техника выполнения': `<ol><li>Мяч отскакивает не выше пояса.</li><li>Смотреть нужно не на мяч, а вперед (голова поднята!).</li><li>Ведение выполняется одной рукой, контролируя высоту отскока.</li><li>Обводка препятствий выполняется одной рукой, контролируя высоту отскока.</li><li>Ведение по кругу выполняется одной рукой, контролируя высоту отскока.</li></ol>`, 'Типичные ошибки': `<p>Взгляд на мяч.</p>` }, challenge: 'Проведи мяч вокруг себя 5 раз, не глядя на него.', scheme: '' },
      { id: 'basket-shot', title: 'Броски мяча', content: { 'Теория': `<p>Мяч у груди, локти прижаты.</p>`, 'Техника выполнения': `<ol><li><strong>Двумя руками от груди:</strong> Мяч у груди, локти прижаты. Резкий толчок кистями вперед. Вес тела переносится с задней ноги на переднюю.</li><li><strong>Одной от плеча:</strong> Мяч у плеча, локоть согнут. Резкий толчок кистью вперед.</li><li><strong>Под углом к щиту в движении:</strong> Использование щита для увеличения точности броска. Бросок выполняется под углом к щиту в движении с близкого расстояния.</li></ol>`, 'Типичные ошибки': `<p>Бросок без работы ног.</p>` }, challenge: 'Забрось мяч в кольцо 3 раза с близкого расстояния.', scheme: SVG_SCHEMES['basket-shot'] },
      { id: 'basket-combo', title: 'Сочетание приемов "передача-ловля-ведение-бросок"', content: { 'Теория': `<p>Комплексное выполнение всех элементов в движении.</p>`, 'Техника выполнения': `<ol><li>Передача: делаете передачу партнеру.</li><li>Ловля: ловите мяч от партнера.</li><li>Ведение: ведете мяч к кольцу.</li><li>Бросок: делаете бросок по кольцу.</li></ol>`, 'Типичные ошибки': `<p>Потеря мяча при переходе от ведения к броску.</p>` }, challenge: 'Выполни комбинацию "передача-ловля-ведение-бросок" 5 раз.', scheme: '' }
    ]
  }
];

// --- Проверка выполнения челленджей ---
function isChallengeDone(topicId, subId) {
  const key = `challenge_${topicId}_${subId}`;
  return localStorage.getItem(key) === 'done';
}

function toggleChallenge(topicId, subId, checkbox) {
  const key = `challenge_${topicId}_${subId}`;
  if (checkbox.checked) localStorage.setItem(key, 'done');
  else localStorage.removeItem(key);
  renderStudentSubtopics(topicId);
}

// 1. Экран плиток разделов
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

  const total = topic.subtopics.length;
  const done = topic.subtopics.filter(sub => isChallengeDone(topicId, sub.id)).length;
  const percent = total > 0 ? Math.round((done / total) * 100) : 0;

  let html = `
    <div class="method-detail">
      <div class="method-detail__header">
        <button class="method-detail__back" onclick="renderStudentTiles()">← Назад к разделам</button>
        <h3 class="method-detail__title">${topic.icon} ${topic.title}</h3>
      </div>
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

// 3. Экран конкретной темы (с челленджем, СХЕМОЙ и QR-КОДОМ)
window.renderStudentSubDetail = function(topicId, subId) {
  const topic = STUDENT_DATA.find(t => t.id === topicId);
  const sub = topic.subtopics.find(s => s.id === subId);
  if (!sub) return;

  const tabs = ['Теория', 'Техника выполнения', 'Типичные ошибки'];
  const tabEmoji = { 'Теория': '📖', 'Техника выполнения': '📝', 'Типичные ошибки': '⚠️' };
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
        ${sub.content[tabs[0]] || '<p>Информация скоро появится.</p>'}
      </div>

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

        <div style="display: flex; gap: 20px; flex-wrap: wrap;">
          <div style="background: var(--card); padding: 20px; border-radius: 16px; border: 1px solid var(--border); flex: 1; min-width: 250px; text-align: center;">
            <h4 style="color: var(--text); margin-bottom: 15px; font-size: 1rem;">🎬 Видео-разбор</h4>
            ${getQRCodeHTML(sub.title)}
            <p style="font-size: 0.85rem; color: var(--text-muted); margin-top: 10px;">Нет камеры? <a href="https://www.youtube.com/results?search_query=${encodeURIComponent(sub.title + ' техника выполнения')}" target="_blank" style="color: var(--primary); font-weight: bold; text-decoration: underline;">Открыть в YouTube</a></p>
          </div>
          <div style="background: var(--card); padding: 20px; border-radius: 16px; border: 1px solid var(--border); flex: 1; min-width: 250px; text-align: center; display: flex; flex-direction: column; align-items: center; justify-content: center;">
            <h4 style="color: var(--text); margin-bottom: 15px; font-size: 1rem;">📐 Схема выполнения</h4>
            ${sub.scheme ? sub.scheme : '<p style="color: var(--text-muted);">Схема скоро появится</p>'}
          </div>
        </div>
      </div>
    </div>
  `;

  document.getElementById('studentTabs').addEventListener('click', (e) => {
    const btn = e.target.closest('.method-tab');
    if (!btn) return;
    document.querySelectorAll('#studentTabs .method-tab').forEach(b => b.classList.remove('is-active'));
    btn.classList.add('is-active');
    const tab = btn.dataset.tab;
    document.getElementById('studentTabContent').innerHTML = sub.content[tab] || '<p>Материал скоро появится.</p>';
  });
};

if (studentContainer) renderStudentTiles();

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
