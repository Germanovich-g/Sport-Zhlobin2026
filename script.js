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
// УЧАЩИМСЯ: ВСЕ ТЕМЫ + СХЕМЫ + QR + ЧЕЛЛЕНДЖИ
// ============================================================
const studentContainer = document.getElementById('studentContainer');

// 1. ГЕНЕРАЦИЯ QR-КОДОВ (через API, ведет на поиск YouTube)
function getQRCodeHTML(topicTitle) {
  const searchQuery = encodeURIComponent(`${topicTitle} техника выполнения`);
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=https://www.youtube.com/results?search_query=${searchQuery}`;
  return `
    <div class="student-qr-wrap" style="display: flex; flex-direction: column; align-items: center; gap: 6px; margin-top: 15px;">
      <img src="${qrUrl}" alt="QR-код на видео" class="student-qr" style="width: 120px; height: 120px; border-radius: 8px;">
      <span style="font-size: 0.8rem; color: var(--text-muted); text-align: center;">Наведи камеру на QR, чтобы найти видео по теме «${topicTitle}»</span>
    </div>
  `;
}

// 2. ВЕКТОРНЫЕ СХЕМЫ (Отрисованы вручную, без внешних файлов)
const SVG_SCHEMES = {
  'ath-high': `<svg viewBox="0 0 300 150" style="width:100%; max-width:400px; display:block; margin:0 auto; background:#fff; border-radius:12px; padding:10px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);"><rect x="20" y="120" width="260" height="10" fill="#d9e2f2" rx="5"/><circle cx="100" cy="50" r="15" fill="#14213d"/><line x1="100" y1="65" x2="90" y2="100" stroke="#14213d" stroke-width="6" stroke-linecap="round"/><line x1="90" y1="100" x2="70" y2="120" stroke="#14213d" stroke-width="6" stroke-linecap="round"/><line x1="90" y1="100" x2="110" y2="120" stroke="#14213d" stroke-width="6" stroke-linecap="round"/><line x1="100" y1="75" x2="70" y2="90" stroke="#14213d" stroke-width="6" stroke-linecap="round"/><line x1="100" y1="75" x2="130" y2="90" stroke="#14213d" stroke-width="6" stroke-linecap="round"/><text x="160" y="40" fill="#ff6b35" font-weight="bold" font-family="sans-serif">Корпус вперед</text><path d="M 130 50 L 160 50" stroke="#ff6b35" stroke-width="2" marker-end="url(#arrow)"/><defs><marker id="arrow" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#ff6b35"/></marker></defs></svg>`,
  'ath-low': `<svg viewBox="0 0 300 150" style="width:100%; max-width:400px; display:block; margin:0 auto; background:#fff; border-radius:12px; padding:10px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);"><rect x="20" y="120" width="260" height="10" fill="#d9e2f2" rx="5"/><circle cx="80" cy="90" r="15" fill="#14213d"/><line x1="95" y1="90" x2="140" y2="110" stroke="#14213d" stroke-width="6" stroke-linecap="round"/><line x1="140" y1="110" x2="170" y2="120" stroke="#14213d" stroke-width="6" stroke-linecap="round"/><line x1="140" y1="110" x2="130" y2="120" stroke="#14213d" stroke-width="6" stroke-linecap="round"/><line x1="95" y1="90" x2="70" y2="120" stroke="#14213d" stroke-width="6" stroke-linecap="round"/><line x1="95" y1="90" x2="110" y2="120" stroke="#14213d" stroke-width="6" stroke-linecap="round"/><rect x="60" y="115" width="20" height="5" fill="#16b8a6"/><text x="200" y="40" fill="#ff6b35" font-weight="bold" font-family="sans-serif">Колодки</text><path d="M 100 50 L 80 60" stroke="#ff6b35" stroke-width="2" marker-end="url(#arrow)"/><defs><marker id="arrow2" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#ff6b35"/></marker></defs></svg>`,
  'ath-jump': `<svg viewBox="0 0 300 150" style="width:100%; max-width:400px; display:block; margin:0 auto; background:#fff; border-radius:12px; padding:10px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);"><rect x="20" y="120" width="260" height="10" fill="#d9e2f2" rx="5"/><circle cx="70" cy="70" r="15" fill="#14213d"/><line x1="70" y1="85" x2="70" y2="110" stroke="#14213d" stroke-width="6" stroke-linecap="round"/><line x1="70" y1="95" x2="50" y2="110" stroke="#14213d" stroke-width="6" stroke-linecap="round"/><line x1="70" y1="95" x2="90" y2="110" stroke="#14213d" stroke-width="6" stroke-linecap="round"/><line x1="70" y1="110" x2="50" y2="120" stroke="#14213d" stroke-width="6" stroke-linecap="round"/><line x1="70" y1="110" x2="90" y2="120" stroke="#14213d" stroke-width="6" stroke-linecap="round"/><text x="130" y="40" fill="#ff6b35" font-weight="bold" font-family="sans-serif">Мах руками</text><path d="M 90 70 Q 150 30 200 70" stroke="#16b8a6" stroke-width="3" fill="none" stroke-dasharray="5,5"/><circle cx="200" cy="70" r="10" fill="#16b8a6" opacity="0.5"/></svg>`,
  'ath-multi': `<svg viewBox="0 0 300 150" style="width:100%; max-width:400px; display:block; margin:0 auto; background:#fff; border-radius:12px; padding:10px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);"><rect x="20" y="120" width="260" height="10" fill="#d9e2f2" rx="5"/><path d="M 50 100 Q 75 70 100 100 Q 125 70 150 100 Q 175 70 200 100 Q 225 70 250 100" stroke="#14213d" stroke-width="4" fill="none" stroke-linecap="round"/><text x="100" y="40" fill="#ff6b35" font-weight="bold" font-family="sans-serif">Прыжки с ноги на ногу</text></svg>`,
  'gym-group': `<svg viewBox="0 0 300 150" style="width:100%; max-width:400px; display:block; margin:0 auto; background:#fff; border-radius:12px; padding:10px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);"><rect x="20" y="120" width="260" height="10" fill="#d9e2f2" rx="5"/><circle cx="100" cy="80" r="20" fill="#14213d"/><path d="M 100 100 Q 80 120 100 140" stroke="#14213d" stroke-width="6" fill="none" stroke-linecap="round"/><path d="M 100 100 Q 120 120 100 140" stroke="#14213d" stroke-width="6" fill="none" stroke-linecap="round"/><text x="150" y="60" fill="#ff6b35" font-weight="bold" font-family="sans-serif">Группировка</text><path d="M 130 90 Q 160 80 170 110" stroke="#16b8a6" stroke-width="2" fill="none"/></svg>`,
  'gym-stand': `<svg viewBox="0 0 300 150" style="width:100%; max-width:400px; display:block; margin:0 auto; background:#fff; border-radius:12px; padding:10px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);"><rect x="20" y="120" width="260" height="10" fill="#d9e2f2" rx="5"/><circle cx="150" cy="50" r="15" fill="#14213d"/><line x1="150" y1="65" x2="150" y2="90" stroke="#14213d" stroke-width="6" stroke-linecap="round"/><line x1="150" y1="90" x2="120" y2="120" stroke="#14213d" stroke-width="6" stroke-linecap="round"/><line x1="150" y1="90" x2="180" y2="120" stroke="#14213d" stroke-width="6" stroke-linecap="round"/><line x1="150" y1="90" x2="150" y2="120" stroke="#14213d" stroke-width="6" stroke-linecap="round"/><text x="200" y="40" fill="#ff6b35" font-weight="bold" font-family="sans-serif">Лопатки</text></svg>`,
  'ski-step': `<svg viewBox="0 0 300 150" style="width:100%; max-width:400px; display:block; margin:0 auto; background:#fff; border-radius:12px; padding:10px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);"><rect x="20" y="120" width="260" height="10" fill="#e0f2fe" rx="5"/><circle cx="80" cy="70" r="15" fill="#14213d"/><line x1="80" y1="85" x2="80" y2="110" stroke="#14213d" stroke-width="6" stroke-linecap="round"/><line x1="80" y1="100" x2="60" y2="120" stroke="#14213d" stroke-width="6" stroke-linecap="round"/><line x1="80" y1="100" x2="100" y2="120" stroke="#14213d" stroke-width="6" stroke-linecap="round"/><rect x="50" y="115" width="20" height="5" fill="#ff6b35"/><rect x="90" y="115" width="20" height="5" fill="#ff6b35"/><text x="150" y="50" fill="#ff6b35" font-weight="bold" font-family="sans-serif">Вся подошва</text></svg>`,
  'foot-kick': `<svg viewBox="0 0 300 150" style="width:100%; max-width:400px; display:block; margin:0 auto; background:#fff; border-radius:12px; padding:10px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);"><circle cx="150" cy="75" r="20" fill="#14213d"/><path d="M 130 75 Q 100 100 80 120" stroke="#14213d" stroke-width="6" fill="none" stroke-linecap="round"/><path d="M 170 75 Q 200 100 220 120" stroke="#14213d" stroke-width="6" fill="none" stroke-linecap="round"/><rect x="60" y="115" width="30" height="10" fill="#16b8a6" rx="2"/><text x="200" y="40" fill="#ff6b35" font-weight="bold" font-family="sans-serif">Опорная нога</text><text x="50" y="40" fill="#16b8a6" font-weight="bold" font-family="sans-serif">Бьющая</text></svg>`,
  'basket-shot': `<svg viewBox="0 0 300 150" style="width:100%; max-width:400px; display:block; margin:0 auto; background:#fff; border-radius:12px; padding:10px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);"><rect x="200" y="20" width="10" height="100" fill="#d9e2f2"/><circle cx="205" cy="50" r="15" fill="none" stroke="#ff6b35" stroke-width="4"/><circle cx="100" cy="80" r="20" fill="#14213d"/><path d="M 120 80 Q 160 50 190 50" stroke="#16b8a6" stroke-width="3" fill="none" stroke-dasharray="5,5"/><text x="50" y="40" fill="#ff6b35" font-weight="bold" font-family="sans-serif">Траектория</text></svg>`,
  'volley-top': `<svg viewBox="0 0 300 150" style="width:100%; max-width:400px; display:block; margin:0 auto; background:#fff; border-radius:12px; padding:10px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);"><circle cx="150" cy="50" r="20" fill="#16b8a6"/><path d="M 130 50 L 170 50" stroke="#14213d" stroke-width="4" stroke-linecap="round"/><path d="M 140 40 L 160 40" stroke="#14213d" stroke-width="4" stroke-linecap="round"/><path d="M 140 60 L 160 60" stroke="#14213d" stroke-width="4" stroke-linecap="round"/><text x="180" y="55" fill="#ff6b35" font-weight="bold" font-family="sans-serif">Ковшик</text></svg>`
};

// 3. ПОЛНЫЙ СПИСОК ВСЕХ ТЕМ (Восстановлено)
const STUDENT_DATA = [
  {
    id: 'st-ath', title: 'Лёгкая атлетика', icon: '🏃',
    subtopics: [
      { id: 'ath-high', title: 'Высокий старт', content: { 'Теория': `<p><strong>Высокий старт</strong> — это исходное положение для начала бега, при котором спортсмен стоит, слегка наклонившись вперёд. Он используется в беге на средние и длинные дистанции (от 800 м и выше), а также в эстафетах. В отличие от низкого старта, здесь нет колодок, что позволяет быстрее начать движение без излишнего напряжения.</p>`, 'Как выполнять': `<ol><li><strong>Исходное положение:</strong> Сильную (толчковую) ногу ставим вперед, носком вплотную к стартовой линии.</li><li><strong>Вторая нога:</strong> Отставляем назад на расстояние 1,5–2 стоп.</li><li><strong>Корпус:</strong> Наклонен вперед, взгляд направлен на дорожку в 2–3 метрах перед собой.</li><li><strong>Руки:</strong> Согнуты в локтях, разноименно ногам.</li></ol>`, 'Ошибки': `<ul><li>Выпрямление корпуса до начала бега.</li><li>Взгляд под ноги.</li></ul>` }, challenge: 'Попробуй сделать высокий старт 5 раз, каждый раз ускоряясь на 10 метров.', scheme: SVG_SCHEMES['ath-high'] },
      { id: 'ath-low', title: 'Низкий старт', content: { 'Теория': `<p><strong>Низкий старт</strong> — техника начала бега в спринте (60 м, 100 м, 200 м), при которой спортсмен опирается на руки и колено. Использование стартовых колодок позволяет создать максимальное усилие для быстрого разгона.</p>`, 'Как выполнять': `<ol><li><strong>Опора:</strong> На руки и колено сзади стоящей ноги.</li><li><strong>Руки:</strong> Ставятся на ширине плеч, пальцы образуют "коридор" для головы.</li><li><strong>Команда "Внимание!":</strong> Таз поднимается немного выше плеч, вес переносится на руки.</li><li><strong>Толчок:</strong> Мощный одновременный толчок обеими ногами и руками.</li></ol>`, 'Ошибки': `<ul><li>Слишком высокое или низкое положение таза.</li><li>Прямые руки.</li></ul>` }, challenge: 'Попробуй низкий старт с колодками и пробеги 20 метров на максимальной скорости.', scheme: SVG_SCHEMES['ath-low'] },
      { id: 'ath-jump', title: 'Прыжки в длину с места', content: { 'Теория': `<p><strong>Прыжок в длину с места</strong> — упражнение, при котором спортсмен отталкивается двумя ногами от земли и приземляется как можно дальше. Развивает силу ног и координацию.</p>`, 'Как выполнять': `<ol><li><strong>Исходное положение:</strong> Ноги на ширине плеч, носки у линии.</li><li><strong>Замах:</strong> Глубокий присед, руки отводим назад.</li><li><strong>Толчок:</strong> Мощный мах руками вперед-вверх и одновременный толчок ногами.</li><li><strong>Полёт:</strong> В воздухе ноги подтягиваются к груди.</li><li><strong>Приземление:</strong> На две ноги, мягко сгибая колени.</li></ol>`, 'Ошибки': `<ul><li>Заступ за линию.</li><li>Приземление на прямые ноги.</li></ul>` }, challenge: 'Сделай 3 подхода по 10 прыжков в длину — запиши лучший результат.', scheme: SVG_SCHEMES['ath-jump'] },
      { id: 'ath-multi', title: 'Многоскоки', content: { 'Теория': `<p><strong>Многоскоки</strong> — серия прыжков с ноги на ногу, имитирующая бег. Развивает силу отталкивания и выносливость.</p>`, 'Как выполнять': `<ol><li>Прыжки с ноги на ногу с активным махом свободной ноги вперед-вверх.</li><li>Корпус прямой, руки работают как при беге.</li></ol>`, 'Ошибки': `<ul><li>Приземление на прямые ноги.</li><li>Слабый мах.</li></ul>` }, challenge: 'Пройди дистанцию 30 метров многоскоками.', scheme: SVG_SCHEMES['ath-multi'] },
      { id: 'ath-throw', title: 'Метание малого мяча', content: { 'Теория': `<p>Развитие координации и силы рук.</p>`, 'Как выполнять': `<ol><li>Держим мяч фалангами пальцев.</li><li>Замах: рука с мячом отводится назад, корпус разворачивается.</li><li>Скрестный шаг.</li><li>Резкий рывок корпусом и рукой вперед.</li><li>Выпуск мяча в высшей точке над плечом.</li></ol>`, 'Ошибки': `<p>Бросок без поворота корпуса.</p>` }, challenge: 'Сделай 10 бросков мяча в стену с правильной техникой.', scheme: '' },
      { id: 'ath-push', title: 'Толкание набивного мяча', content: { 'Теория': `<p>Имитация толкания ядра.</p>`, 'Как выполнять': `<ol><li>Мяч у груди, локти прижаты.</li><li>Ноги согнуты.</li><li>Мощный толчок двумя руками от груди вперед-вверх.</li></ol>`, 'Ошибки': `<p>Толчок одной рукой.</p>` }, challenge: 'Толкни набивной мяч 5 раз на максимальное расстояние.', scheme: '' }
    ]
  },
  {
    id: 'st-gym', title: 'Гимнастика', icon: '🤸',
    subtopics: [
      { id: 'gym-group', title: 'Группировка и перекаты', content: { 'Теория': `<p><strong>Группировка</strong> — основа безопасности при падениях и база для кувырков.</p>`, 'Как выполнять': `<ol><li><strong>Группировка сидя:</strong> Подтянуть колени к груди, обхватить их руками, голову наклонить вперед.</li><li><strong>Перекат назад:</strong> Из упора присев перекатиться назад на спину, сохраняя группировку.</li><li><strong>Кувырок вперед:</strong> Из упора присев, оттолкнувшись руками, перенести вес на плечи, перевернуться через голову и встать.</li></ol>`, 'Ошибки': `<ul><li>Опора на голову при кувырке.</li><li>Разомкнутая группировка.</li></ul>` }, challenge: 'Выполни 3 кувырка вперед подряд с правильной группировкой.', scheme: SVG_SCHEMES['gym-group'] },
      { id: 'gym-stand', title: 'Стойка на лопатках ("Березка")', content: { 'Теория': `<p><strong>Стойка на лопатках</strong> — положение, при котором тело опирается на лопатки, ноги вытянуты вверх. Упражнение развивает гибкость позвоночника и силу мышц кора.</p>`, 'Как выполнять': `<ol><li><strong>Исходное положение:</strong> Лечь на спину.</li><li><strong>Подъем:</strong> Опираясь на локти и затылок, поднять ноги и туловище вертикально вверх.</li><li><strong>Опора:</strong> Поддерживать спину руками под лопатками.</li><li><strong>Фиксация:</strong> Ноги вместе, носки натянуты. Удерживать 10–15 секунд.</li></ol>`, 'Ошибки': `<ul><li>Запрокидывание головы.</li><li>Опора на шею.</li></ul>` }, challenge: 'Удерживай "березку" 15 секунд.', scheme: SVG_SCHEMES['gym-stand'] },
      { id: 'gym-climb', title: 'Лазание по канату', content: { 'Теория': `<p>Развитие силы рук и ног.</p>`, 'Как выполнять': `<ol><li>Захват каната ногами.</li><li>Руки скользят вверх по канату.</li><li>Ноги выпрямляются, подтягивая тело вверх.</li></ol>`, 'Ошибки': `<p>Отсутствие страховки.</p>` }, challenge: 'Попробуй залезть по канату на 2 метра (со страховкой учителя).', scheme: '' }
    ]
  },
  {
    id: 'st-ski', title: 'Лыжная подготовка', icon: '🎿',
    subtopics: [
      { id: 'ski-step', title: 'Ступающий шаг', content: { 'Теория': `<p><strong>Ступающий шаг</strong> — базовая техника передвижения на лыжах для подъема в гору или по рыхлому снегу.</p>`, 'Как выполнять': `<ol><li>Лыжа ставится на снег всей подошвой.</li><li>Вес тела переносится на эту лыжу.</li><li>Вторая лыжа подтягивается к первой.</li><li>Палки используются для опоры.</li></ol>`, 'Ошибки': `<ul><li>Волок лыж по снегу.</li><li>Слишком высокий подъем ног.</li></ul>` }, challenge: 'Пройди ступающим шагом 50 метров без остановки.', scheme: SVG_SCHEMES['ski-step'] },
      { id: 'ski-slide', title: 'Скользящий шаг', content: { 'Теория': `<p>Основная техника передвижения.</p>`, 'Как выполнять': `<ol><li>Отталкивание одной лыжей.</li><li>Скольжение на другой.</li><li>Вес тела полностью переносится на скользящую лыжу.</li><li>Руки работают попеременно.</li></ol>`, 'Ошибки': `<p>Отсутствие переноса веса.</p>` }, challenge: 'Пройди скользящим шагом 100 метров.', scheme: '' },
      { id: 'ski-up', title: 'Преодоление подъемов', content: { 'Теория': `<p>Ступающим шагом: "Лесенкой", "елочкой".</p>`, 'Как выполнять': `<p>Подъем в гору требует активной работы палками и ногами.</p>`, 'Ошибки': `<p>Потеря равновесия.</p>` }, challenge: 'Поднимись в горку "елочкой" 3 раза.', scheme: '' }
    ]
  },
  {
    id: 'st-football', title: 'Футбол', icon: '⚽',
    subtopics: [
      { id: 'foot-kick', title: 'Удары по мячу', content: { 'Теория': `<p><strong>Удары по мячу</strong> — основа футбола. Правильная постановка опорной ноги обеспечивает силу и точность.</p>`, 'Как выполнять': `<ol><li><strong>Опорная нога:</strong> Ставится сбоку от мяча на расстоянии 15–20 см.</li><li><strong>Удар серединой подъема:</strong> Замах — отводим бьющую ногу назад. Удар — бьем точно в центр мяча подъемом стопы.</li><li><strong>Проводка:</strong> После удара нога продолжает движение по траектории мяча.</li></ol>`, 'Ошибки': `<ul><li>Неправильная постановка опорной ноги.</li><li>Удар носком.</li></ul>` }, challenge: 'Сделай 10 ударов по мячу в стену внутренней стороной стопы.', scheme: SVG_SCHEMES['foot-kick'] },
      { id: 'foot-stop', title: 'Остановка мяча', content: { 'Теория': `<p>Остановка катящегося и летящего мяча.</p>`, 'Как выполнять': `<ol><li><strong>Подошвой:</strong> Накройте катящийся мяч подошвой сверху.</li><li><strong>Внутренней стороной:</strong> Накройте мяч внутренней стороной стопы.</li></ol>`, 'Ошибки': `<p>Мяч отскакивает далеко.</p>` }, challenge: 'Останови мяч подошвой 10 раз подряд.', scheme: '' },
      { id: 'foot-dribble', title: 'Ведение мяча', content: { 'Теория': `<p>Ведение одной ногой и попеременное.</p>`, 'Как выполнять': `<ol><li><strong>Одной ногой:</strong> Ведите мяч одной ногой, контролируя высоту отскока.</li><li><strong>Попеременное ведение:</strong> Ведите мяч попеременно правой и левой ногой.</li></ol>`, 'Ошибки': `<p>Слишком сильный толчок.</p>` }, challenge: 'Проведи мяч "змейкой" между 5 конусами.', scheme: '' }
    ]
  },
  {
    id: 'st-volley', title: 'Волейбол', icon: '🏐',
    subtopics: [
      { id: 'volley-top', title: 'Передача мяча двумя руками сверху', content: { 'Теория': `<p><strong>Передача сверху</strong> — основной приём в волейболе. Техника требует правильного положения кистей («ковшик»).</p>`, 'Как выполнять': `<ol><li><strong>Стойка:</strong> Ноги согнуты в коленях, одна чуть впереди.</li><li><strong>Кисти:</strong> Образуют "ковшик" (большие и указательные пальцы образуют треугольник).</li><li><strong>Работа ног:</strong> Выпрямляем ноги и корпус, толкая мяч вверх.</li><li><strong>Контакт:</strong> Касаемся мяча только фалангами пальцев.</li></ol>`, 'Ошибки': `<ul><li>Прием на ладони.</li><li>Слабый толчок ногами.</li></ul>` }, challenge: 'Сделай 10 передач над собой.', scheme: SVG_SCHEMES['volley-top'] },
      { id: 'volley-bottom', title: 'Передача мяча двумя руками снизу', content: { 'Теория': `<p>Прием мяча на предплечья.</p>`, 'Как выполнять': `<ol><li>Руки прямые, кисти вместе, образуют "площадку".</li><li>Прием мяча на предплечья.</li><li>Работа ног: выпрямляем ноги, толкая мяч вверх.</li></ol>`, 'Ошибки': `<p>Согнутые руки.</p>` }, challenge: 'Прими мяч снизу 10 раз подряд.', scheme: '' },
      { id: 'volley-serve', title: 'Подача нижняя прямая', content: { 'Теория': `<p>Исходное положение, подброс, хлесткий удар.</p>`, 'Как выполнять': `<ol><li>Левая нога впереди, мяч в левой руке.</li><li>Подбрасываем мяч невысоко (на 20–30 см).</li><li>Бьющая рука идет снизу вверх, удар основанием ладони.</li></ol>`, 'Ошибки': `<p>Мяч не перелетает сетку.</p>` }, challenge: 'Сделай 5 подач через сетку с 3 метров.', scheme: '' }
    ]
  },
  {
    id: 'st-basket', title: 'Баскетбол', icon: '🏀',
    subtopics: [
      { id: 'basket-shot', title: 'Броски мяча', content: { 'Теория': `<p><strong>Броски в баскетболе</strong> — завершающая стадия атаки. Требуют точности и координации.</p>`, 'Как выполнять': `<ol><li><strong>Двумя руками от груди:</strong> Мяч у груди, локти прижаты. Резкий толчок кистями вперед.</li><li><strong>Одной от плеча:</strong> Мяч у плеча, локоть согнут. Резкий толчок кистью вперед.</li><li><strong>В движении:</strong> Бросок выполняется после ведения или ловли.</li></ol>`, 'Ошибки': `<ul><li>Бросок без работы ног.</li><li>Неправильное положение кисти.</li></ul>` }, challenge: 'Забрось мяч в кольцо 3 раза с близкого расстояния.', scheme: SVG_SCHEMES['basket-shot'] },
      { id: 'basket-dribble', title: 'Ведение мяча', content: { 'Теория': `<p>Мяч должен отскакивать не выше пояса.</p>`, 'Как выполнять': `<ol><li>Мяч отскакивает не выше пояса.</li><li>Смотреть нужно не на мяч, а вперед.</li><li>Ведение выполняется одной рукой.</li></ol>`, 'Ошибки': `<p>Взгляд на мяч.</p>` }, challenge: 'Проведи мяч вокруг себя 5 раз, не глядя на него.', scheme: '' }
    ]
  },
  {
    id: 'st-mobile', title: 'Подвижные игры', icon: '🎲',
    subtopics: [
      { id: 'game-run', title: 'Игры с бегом', content: { 'Теория': `<p>«Два Мороза», «Гуси-лебеди», «Пустое место».</p>`, 'Как выполнять': `<p>Акцент: Скоростные качества, ловкость.</p>`, 'Ошибки': `<p>Высокая интенсивность бега без отдыха.</p>` }, challenge: 'Поиграй в "Два Мороза" с друзьями.', scheme: '' },
      { id: 'game-jump', title: 'Игры с прыжками', content: { 'Теория': `<p>«Удочка», «Зайцы в огороде».</p>`, 'Как выполнять': `<p>Акцент: Прыгучесть, координация.</p>`, 'Ошибки': `<p>Много прыжков подряд.</p>` }, challenge: 'Попрыгай через скакалку 30 секунд без остановки.', scheme: '' }
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
        ${sub.content[tabs[0]] || '<p>Информация скоро появится.</p>'}
      </div>

      <!-- БЛОК ЧЕЛЛЕНДЖА, QR И СХЕМЫ -->
      <div style="padding: 30px; background: var(--bg-alt); border-top: 1px solid var(--border);">
        
        <!-- Челлендж -->
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

        <!-- Видео и Схема -->
        <div style="display: flex; gap: 20px; flex-wrap: wrap;">
          
          <!-- QR-код -->
          <div style="background: var(--card); padding: 20px; border-radius: 16px; border: 1px solid var(--border); flex: 1; min-width: 250px; text-align: center;">
            <h4 style="color: var(--text); margin-bottom: 15px; font-size: 1rem;">🎬 Видео-разбор</h4>
            ${getQRCodeHTML(sub.title)}
            <p style="font-size: 0.85rem; color: var(--text-muted); margin-top: 10px;">Нет камеры? <a href="https://www.youtube.com/results?search_query=${encodeURIComponent(sub.title + ' техника выполнения')}" target="_blank" style="color: var(--primary); font-weight: bold; text-decoration: underline;">Открыть в YouTube</a></p>
          </div>

          <!-- Схема -->
          <div style="background: var(--card); padding: 20px; border-radius: 16px; border: 1px solid var(--border); flex: 1; min-width: 250px; text-align: center; display: flex; flex-direction: column; align-items: center; justify-content: center;">
            <h4 style="color: var(--text); margin-bottom: 15px; font-size: 1rem;">📐 Схема выполнения</h4>
            ${sub.scheme ? sub.scheme : '<p style="color: var(--text-muted);">Схема скоро появится</p>'}
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
      contentHtml = sub.scheme ? `<div style="text-align:center; padding:20px;">${sub.scheme}</div>` : '<p>Схема для этой темы скоро появится.</p>';
    } else {
      contentHtml = sub.content[tab] || '<p>Материал скоро появится.</p>';
    }
    
    document.getElementById('studentTabContent').innerHTML = contentHtml;
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
