// ============================================================
// НАВИГАЦИЯ ПО СТРАНИЦАМ
// ============================================================
document.querySelectorAll('[data-page-link]').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const page = link.dataset.pageLink;
        ['home', 'students', 'method', 'quiz', 'quest'].forEach(p => {
      const el = document.getElementById(`page-${p}`);
      if (el) el.style.display = 'none';
    });
    const target = document.getElementById(`page-${page}`);
    if (target) target.style.display = 'block';
    window.scrollTo(0, 0);

    // Закрываем мобильное меню после перехода
    const nav = document.querySelector('.nav');
    const burger = document.getElementById('navToggle');
    if (nav) nav.classList.remove('is-open');
    if (burger) burger.classList.remove('is-active');
      // Обработчик для бургер-меню (добавлен для мобильной версии)
      const navToggleBtn = document.getElementById('navToggle');
      const mainNav = document.getElementById('mainNav');
      if (navToggleBtn && mainNav) {
        navToggleBtn.onclick = function(e) {
          e.preventDefault();
          mainNav.classList.toggle('is-open');
          navToggleBtn.classList.toggle('is-active');
        };
      }
    // Если открыли страницу "Учителю" — запускаем отрисовку
    if (page === 'method') {
      setTimeout(() => {
        if (typeof renderMethodTiles === 'function') {
          renderMethodTiles('gym');
// ============================================================
// ВОЗВРАТ НА ПРЕДЫДУЩУЮ СТРАНИЦУ (ДЛЯ СПОРТСМЕНОВ И ОБЪЕКТОВ)
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  const openPage = sessionStorage.getItem('openPage');
  if (openPage) {
    sessionStorage.removeItem('openPage'); // Очищаем, чтобы сработало один раз
    const targetLink = document.querySelector(`[data-page-link="${openPage}"]`);
    if (targetLink) {
      targetLink.click();
    }
  }
});        }
      }, 50);
    }
  });
});

// ============================================================
// ДАННЫЕ КАРТЫ
// ============================================================
const DATA = [
  { id:'led', layer:'objects', title:'Ледовый дворец', address:'ул. Карла Маркса, 3/1', text:'Домашняя арена ХК «Металлург-Жлобин».', lat:52.8925, lng:30.0290, photo:'led.jpg', link: 'led.html' },
  { id:'dvor', layer:'objects', title:'Дворец игровых видов спорта', address:'ул. Карла Маркса, 3/1', text:'Комплекс на 1500 мест.', lat:52.8920, lng:30.0280, photo:'dvor.jpg', link: 'dvor.html' },
  { id:'pool', layer:'objects', title:'Плавательный бассейн', address:'ул. Карла Маркса, 3/1', text:'Арена с 50-метровыми дорожками.', lat:52.8915, lng:30.0270, photo:'pool.jpg', link: 'pool.html' },
  { id:'stadium', layer:'objects', title:'Городской стадион', address:'ул. Парижской Коммуны, 13', text:'Главная площадка для футбола.', lat:52.8890, lng:30.0220, photo:'stadium.jpeg', link: 'stadium.html' },
  { id:'sdyushor', layer:'objects', title:'Жлобинская районная СДЮШОР', address:'ул. Первомайская, 1А', text:'Кузница будущих чемпионов.', lat:52.8940, lng:30.0250, photo:'sdyushor..jpg', link: 'sdyushor.html' },
  { id:'ski-track', layer:'objects', title:'Лыжероллерная трасса', address:'Берег Днепра', text:'2,5 км асфальтированной трассы. Биатлон, лыжи, роллеры.', lat:52.8850, lng:30.0350, photo:'ski-track.jpg', link: 'ski-track.html' },
  { id:'rowing', layer:'objects', title:'Гребная база', address:'Берег Днепра', text:'Флотилия на Днепре. Академическая гребля и гребля на байдарках.', lat:52.8845, lng:30.0360, photo:'greb.jpg', link: 'rowing.html' },
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
  { id:'novikov', layer:'legends', title:'Сергей Новиков', address:'Биатлон', text:'Серебряный призёр Олимпиады-2010.', lat:52.8900, lng:30.0350, photo:'novikov.jpg', link: 'novikov.html' },
  { id:'cis-games', layer:'events', title:'II Игры стран СНГ', address:'2023', text:'Соревнования по самбо.', lat:52.8910, lng:30.0350, photo:'cis-games.jpg', link: 'cis-games.html' },
  { id:'narmania-event', layer:'events', title:'Турнир памяти Шоты Нармания', address:'Ежегодно', text:'Греко-римская борьба.', lat:52.8980, lng:30.0290, photo:'narmania.jpg', link: 'narmania-event.html' },
  { id:'spartakiada', layer:'events', title:'Спартакиада Союзного государства', address:'2018', text:'Старт соревнований.', lat:52.8860, lng:30.0290, photo:'spartakiada.jpg', link: 'spartakiada.html' },
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
  const readMore = item.link ? `<p style="color: var(--primary); font-weight: bold; margin-top: 10px;">${item.layer === 'objects' || item.layer === 'events' ? 'Узнать подробнее →' : 'Читать биографию →'}</p>` : '';
  
    return `<${tag} ${href} class="card" data-layer="${item.layer}" style="text-decoration: none; color: inherit;">
    <div class="${imgClass}">${img}</div>
    <div class="card-content">
      <h3>${item.title}</h3>
      <p>${item.text}</p>
      <p class="card__meta">📍 ${item.address}</p>
      ${readMore}
    </div>
  </${tag}>`;
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
// SVG-СХЕМЫ ДЛЯ ВСЕХ НАПРАВЛЕНИЙ
// ============================================================
const SVG_SCHEMES = {
  // ----------------------------------------------------------
  // ЛЁГКАЯ АТЛЕТИКА
  // ----------------------------------------------------------
  'ath-uniform': `<svg viewBox="0 0 300 150" style="width:100%; max-width:400px; display:block; margin:0 auto; background:#f8faff; border-radius:16px; padding:10px; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
    <rect x="20" y="120" width="260" height="12" fill="#d9e2f2" rx="6"/>
    <circle cx="100" cy="50" r="14" fill="#ff6b35"/>
    <line x1="100" y1="64" x2="95" y2="95" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="95" y1="95" x2="80" y2="118" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="95" y1="95" x2="110" y2="118" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="100" y1="75" x2="75" y2="88" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="100" y1="75" x2="125" y2="88" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <path d="M 140 60 Q 180 40 220 60" stroke="#16b8a6" stroke-width="3" fill="none" stroke-dasharray="6,4"/>
    <polygon points="220,60 212,52 212,68" fill="#16b8a6"/>
    <text x="150" y="30" fill="#ff6b35" font-weight="800" font-family="Montserrat, sans-serif" font-size="12">Ровный темп</text>
    <text x="150" y="45" fill="#14213d" font-weight="600" font-family="Montserrat, sans-serif" font-size="10">Вдох носом — выдох ртом</text>
  </svg>`,

  'ath-high': `<svg viewBox="0 0 300 150" style="width:100%; max-width:400px; display:block; margin:0 auto; background:#f8faff; border-radius:16px; padding:10px; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
    <rect x="20" y="120" width="260" height="12" fill="#d9e2f2" rx="6"/>
    <line x1="40" y1="126" x2="280" y2="126" stroke="#b0c4de" stroke-width="2" stroke-dasharray="10,10"/>
    <circle cx="100" cy="50" r="14" fill="#ff6b35"/>
    <line x1="100" y1="64" x2="90" y2="95" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="90" y1="95" x2="70" y2="118" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="90" y1="95" x2="110" y2="118" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="100" y1="75" x2="70" y2="90" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="100" y1="75" x2="130" y2="90" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <path d="M 140 60 Q 180 40 220 60" stroke="#16b8a6" stroke-width="3" fill="none" stroke-dasharray="6,4"/>
    <polygon points="220,60 212,52 212,68" fill="#16b8a6"/>
    <text x="150" y="30" fill="#ff6b35" font-weight="800" font-family="Montserrat, sans-serif" font-size="12">Наклон вперёд</text>
  </svg>`,

  'ath-low': `<svg viewBox="0 0 300 150" style="width:100%; max-width:400px; display:block; margin:0 auto; background:#f8faff; border-radius:16px; padding:10px; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
    <rect x="20" y="120" width="260" height="12" fill="#d9e2f2" rx="6"/>
    <rect x="60" y="110" width="25" height="10" fill="#16b8a6" rx="3" transform="rotate(-15, 60, 110)"/>
    <rect x="85" y="115" width="25" height="10" fill="#16b8a6" rx="3" transform="rotate(-15, 85, 115)"/>
    <circle cx="80" cy="85" r="14" fill="#ff6b35"/>
    <line x1="94" y1="85" x2="140" y2="105" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="140" y1="105" x2="170" y2="118" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="140" y1="105" x2="130" y2="118" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="80" y1="100" x2="60" y2="118" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="80" y1="100" x2="100" y2="118" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <path d="M 180 90 Q 220 70 260 90" stroke="#16b8a6" stroke-width="3" fill="none" stroke-dasharray="6,4"/>
    <polygon points="260,90 252,82 252,98" fill="#16b8a6"/>
    <text x="180" y="40" fill="#ff6b35" font-weight="800" font-family="Montserrat, sans-serif" font-size="12">Старт с колодок</text>
    <text x="180" y="60" fill="#14213d" font-weight="600" font-family="Montserrat, sans-serif" font-size="10">Низкий старт</text>
  </svg>`,

  'ath-technique': `<svg viewBox="0 0 300 150" style="width:100%; max-width:400px; display:block; margin:0 auto; background:#f8faff; border-radius:16px; padding:10px; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
    <rect x="20" y="120" width="260" height="12" fill="#d9e2f2" rx="6"/>
    <circle cx="150" cy="45" r="14" fill="#ff6b35"/>
    <line x1="150" y1="59" x2="150" y2="95" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="150" y1="95" x2="130" y2="118" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="150" y1="95" x2="170" y2="118" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="150" y1="70" x2="120" y2="80" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="150" y1="70" x2="180" y2="80" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <path d="M 190 60 L 230 40" stroke="#16b8a6" stroke-width="3" fill="none" marker-end="url(#arrow-t)"/>
    <defs><marker id="arrow-t" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#16b8a6"/></marker></defs>
    <text x="40" y="40" fill="#ff6b35" font-weight="800" font-family="Montserrat, sans-serif" font-size="12">Наклон вперёд</text>
    <text x="40" y="55" fill="#14213d" font-weight="600" font-family="Montserrat, sans-serif" font-size="10">Руки в такт ногам</text>
  </svg>`,

  'ath-finish': `<svg viewBox="0 0 300 150" style="width:100%; max-width:400px; display:block; margin:0 auto; background:#f8faff; border-radius:16px; padding:10px; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
    <rect x="20" y="120" width="260" height="12" fill="#d9e2f2" rx="6"/>
    <line x1="220" y1="20" x2="220" y2="120" stroke="#ff3d71" stroke-width="3" stroke-dasharray="5,5"/>
    <circle cx="180" cy="50" r="14" fill="#ff6b35"/>
    <line x1="190" y1="60" x2="210" y2="90" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="210" y1="90" x2="200" y2="118" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="210" y1="90" x2="220" y2="118" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="190" y1="70" x2="170" y2="85" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="190" y1="70" x2="210" y2="85" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <path d="M 230 80 L 270 80" stroke="#16b8a6" stroke-width="3" fill="none" marker-end="url(#arrow-f)"/>
    <defs><marker id="arrow-f" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#16b8a6"/></marker></defs>
    <text x="40" y="40" fill="#ff6b35" font-weight="800" font-family="Montserrat, sans-serif" font-size="12">Бросок грудью</text>
  </svg>`,

  'ath-sprint': `<svg viewBox="0 0 300 150" style="width:100%; max-width:400px; display:block; margin:0 auto; background:#f8faff; border-radius:16px; padding:10px; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
    <rect x="20" y="120" width="260" height="12" fill="#d9e2f2" rx="6"/>
    <circle cx="90" cy="60" r="14" fill="#ff6b35"/>
    <line x1="90" y1="74" x2="100" y2="100" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="100" y1="100" x2="80" y2="118" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="100" y1="100" x2="120" y2="118" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="90" y1="85" x2="65" y2="75" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="90" y1="85" x2="115" y2="75" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <path d="M 140 80 L 260 80" stroke="#16b8a6" stroke-width="3" fill="none" marker-end="url(#arrow-s)"/>
    <defs><marker id="arrow-s" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#16b8a6"/></marker></defs>
    <text x="40" y="30" fill="#ff6b35" font-weight="800" font-family="Montserrat, sans-serif" font-size="12">Максимальная скорость</text>
  </svg>`,

  'ath-shuttle': `<svg viewBox="0 0 300 150" style="width:100%; max-width:400px; display:block; margin:0 auto; background:#f8faff; border-radius:16px; padding:10px; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
    <rect x="20" y="120" width="260" height="12" fill="#d9e2f2" rx="6"/>
    <line x1="60" y1="40" x2="60" y2="120" stroke="#ff6b35" stroke-width="3"/>
    <line x1="240" y1="40" x2="240" y2="120" stroke="#ff6b35" stroke-width="3"/>
    <circle cx="60" cy="90" r="14" fill="#ff6b35"/>
    <line x1="60" y1="104" x2="80" y2="110" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="80" y1="110" x2="90" y2="118" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="80" y1="110" x2="70" y2="118" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <path d="M 100 90 Q 150 60 200 90" stroke="#16b8a6" stroke-width="3" fill="none" stroke-dasharray="6,4"/>
    <polygon points="200,90 192,82 192,98" fill="#16b8a6"/>
    <text x="100" y="30" fill="#ff6b35" font-weight="800" font-family="Montserrat, sans-serif" font-size="12">Резкий разворот</text>
  </svg>`,

  'ath-relay': `<svg viewBox="0 0 300 150" style="width:100%; max-width:400px; display:block; margin:0 auto; background:#f8faff; border-radius:16px; padding:10px; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
    <rect x="20" y="120" width="260" height="12" fill="#d9e2f2" rx="6"/>
    <circle cx="100" cy="50" r="14" fill="#ff6b35"/>
    <line x1="100" y1="64" x2="100" y2="95" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="100" y1="95" x2="85" y2="118" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="100" y1="95" x2="115" y2="118" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="100" y1="75" x2="75" y2="85" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="100" y1="75" x2="125" y2="85" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <rect x="130" y="70" width="30" height="6" fill="#ff6b35" rx="3"/>
    <circle cx="200" cy="50" r="14" fill="#16b8a6"/>
    <line x1="200" y1="64" x2="200" y2="95" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="200" y1="95" x2="185" y2="118" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="200" y1="95" x2="215" y2="118" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="200" y1="75" x2="175" y2="85" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="200" y1="75" x2="225" y2="85" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <path d="M 160 73 L 175 73" stroke="#ff3d71" stroke-width="3" stroke-dasharray="3,3"/>
    <text x="120" y="30" fill="#ff6b35" font-weight="800" font-family="Montserrat, sans-serif" font-size="12">Передача палочки</text>
  </svg>`,

  'ath-jump': `<svg viewBox="0 0 300 150" style="width:100%; max-width:400px; display:block; margin:0 auto; background:#f8faff; border-radius:16px; padding:10px; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
    <rect x="20" y="120" width="260" height="12" fill="#d9e2f2" rx="6"/>
    <circle cx="70" cy="70" r="14" fill="#ff6b35"/>
    <line x1="70" y1="84" x2="70" y2="110" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="70" y1="95" x2="50" y2="110" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="70" y1="95" x2="90" y2="110" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="70" y1="110" x2="50" y2="120" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="70" y1="110" x2="90" y2="120" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <path d="M 90 70 Q 150 20 220 70" stroke="#16b8a6" stroke-width="3" fill="none" stroke-dasharray="6,4"/>
    <circle cx="220" cy="70" r="14" fill="#ff6b35" opacity="0.4"/>
    <polygon points="220,70 212,62 212,78" fill="#16b8a6"/>
    <text x="100" y="45" fill="#ff6b35" font-weight="800" font-family="Montserrat, sans-serif" font-size="12">Мах руками</text>
    <text x="100" y="65" fill="#14213d" font-weight="600" font-family="Montserrat, sans-serif" font-size="10">Толчок двумя ногами</text>
  </svg>`,

  'ath-jump-run': `<svg viewBox="0 0 300 150" style="width:100%; max-width:400px; display:block; margin:0 auto; background:#f8faff; border-radius:16px; padding:10px; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
    <rect x="20" y="120" width="260" height="12" fill="#d9e2f2" rx="6"/>
    <rect x="60" y="115" width="30" height="8" fill="#16b8a6" rx="3"/>
    <circle cx="80" cy="70" r="14" fill="#ff6b35"/>
    <line x1="80" y1="84" x2="100" y2="100" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="100" y1="100" x2="90" y2="118" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="100" y1="100" x2="110" y2="118" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <path d="M 120 60 Q 180 20 240 60" stroke="#16b8a6" stroke-width="3" fill="none" stroke-dasharray="6,4"/>
    <polygon points="240,60 232,52 232,68" fill="#16b8a6"/>
    <text x="140" y="30" fill="#ff6b35" font-weight="800" font-family="Montserrat, sans-serif" font-size="12">Толчок от бруска</text>
  </svg>`,

  'ath-throw': `<svg viewBox="0 0 300 150" style="width:100%; max-width:400px; display:block; margin:0 auto; background:#f8faff; border-radius:16px; padding:10px; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
    <circle cx="100" cy="50" r="14" fill="#ff6b35"/>
    <line x1="100" y1="64" x2="110" y2="95" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="110" y1="95" x2="90" y2="118" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="110" y1="95" x2="130" y2="118" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="100" y1="75" x2="70" y2="70" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <circle cx="60" cy="68" r="8" fill="#ff3d71"/>
    <path d="M 60 60 Q 100 30 160 50" stroke="#16b8a6" stroke-width="3" fill="none" stroke-dasharray="6,4"/>
    <polygon points="160,50 152,42 152,58" fill="#16b8a6"/>
    <text x="180" y="40" fill="#ff6b35" font-weight="800" font-family="Montserrat, sans-serif" font-size="12">Хлёст кисти</text>
  </svg>`,

  'ath-grenade': `<svg viewBox="0 0 300 150" style="width:100%; max-width:400px; display:block; margin:0 auto; background:#f8faff; border-radius:16px; padding:10px; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
    <circle cx="100" cy="50" r="14" fill="#ff6b35"/>
    <line x1="100" y1="64" x2="110" y2="95" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="110" y1="95" x2="90" y2="118" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="110" y1="95" x2="130" y2="118" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="100" y1="75" x2="70" y2="65" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <ellipse cx="60" cy="63" rx="10" ry="14" fill="#16b8a6"/>
    <path d="M 50 55 Q 100 20 170 40" stroke="#ff6b35" stroke-width="3" fill="none" stroke-dasharray="6,4"/>
    <polygon points="170,40 162,32 162,48" fill="#ff6b35"/>
    <text x="180" y="30" fill="#ff6b35" font-weight="800" font-family="Montserrat, sans-serif" font-size="12">Дальность</text>
  </svg>`,

  'ath-multi': `<svg viewBox="0 0 300 150" style="width:100%; max-width:400px; display:block; margin:0 auto; background:#f8faff; border-radius:16px; padding:10px; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
    <rect x="20" y="120" width="260" height="12" fill="#d9e2f2" rx="6"/>
    <circle cx="60" cy="70" r="14" fill="#ff6b35"/>
    <line x1="60" y1="84" x2="80" y2="100" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="80" y1="100" x2="70" y2="118" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="80" y1="100" x2="95" y2="118" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <path d="M 100 60 Q 150 30 200 60" stroke="#16b8a6" stroke-width="3" fill="none" stroke-dasharray="6,4"/>
    <circle cx="200" cy="60" r="14" fill="#ff6b35" opacity="0.4"/>
    <path d="M 220 60 Q 250 40 270 60" stroke="#16b8a6" stroke-width="3" fill="none" stroke-dasharray="6,4"/>
    <text x="120" y="30" fill="#ff6b35" font-weight="800" font-family="Montserrat, sans-serif" font-size="12">Прыжки с ноги на ногу</text>
  </svg>`,

  'ath-medball': `<svg viewBox="0 0 300 150" style="width:100%; max-width:400px; display:block; margin:0 auto; background:#f8faff; border-radius:16px; padding:10px; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
    <circle cx="150" cy="80" r="20" fill="#16b8a6"/>
    <path d="M 135 80 Q 150 65 165 80" stroke="#fff" stroke-width="2" fill="none"/>
    <path d="M 135 80 Q 150 95 165 80" stroke="#fff" stroke-width="2" fill="none"/>
    <path d="M 150 60 L 150 20" stroke="#ff6b35" stroke-width="3" fill="none" marker-end="url(#arrow-m)"/>
    <defs><marker id="arrow-m" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#ff6b35"/></marker></defs>
    <text x="180" y="60" fill="#ff6b35" font-weight="800" font-family="Montserrat, sans-serif" font-size="12">Из-за головы</text>
  </svg>`,

  // ----------------------------------------------------------
  // ГИМНАСТИКА
  // ----------------------------------------------------------
  'gym-oru': `<svg viewBox="0 0 300 150" style="width:100%; max-width:400px; display:block; margin:0 auto; background:#f8faff; border-radius:16px; padding:10px; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
    <rect x="20" y="120" width="260" height="12" fill="#d9e2f2" rx="6"/>
    <circle cx="100" cy="50" r="14" fill="#ff6b35"/>
    <line x1="100" y1="64" x2="100" y2="95" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="100" y1="95" x2="80" y2="118" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="100" y1="95" x2="120" y2="118" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="100" y1="75" x2="75" y2="60" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="100" y1="75" x2="125" y2="60" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="50" y1="50" x2="150" y2="50" stroke="#16b8a6" stroke-width="4" stroke-linecap="round"/>
    <text x="160" y="40" fill="#ff6b35" font-weight="800" font-family="Montserrat, sans-serif" font-size="12">С палкой</text>
  </svg>`,

  'gym-group': `<svg viewBox="0 0 300 150" style="width:100%; max-width:400px; display:block; margin:0 auto; background:#f8faff; border-radius:16px; padding:10px; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
    <rect x="20" y="120" width="260" height="12" fill="#d9e2f2" rx="6"/>
    <circle cx="100" cy="70" r="18" fill="#ff6b35"/>
    <path d="M 100 88 Q 70 110 100 130" stroke="#14213d" stroke-width="6" fill="none" stroke-linecap="round"/>
    <path d="M 100 88 Q 130 110 100 130" stroke="#14213d" stroke-width="6" fill="none" stroke-linecap="round"/>
    <path d="M 85 75 Q 100 90 115 75" stroke="#14213d" stroke-width="4" fill="none"/>
    <path d="M 140 80 Q 180 60 220 90" stroke="#16b8a6" stroke-width="3" fill="none" stroke-dasharray="6,4"/>
    <polygon points="220,90 212,82 212,98" fill="#16b8a6"/>
    <text x="150" y="40" fill="#ff6b35" font-weight="800" font-family="Montserrat, sans-serif" font-size="12">Спина круглая</text>
    <text x="150" y="60" fill="#14213d" font-weight="600" font-family="Montserrat, sans-serif" font-size="10">Колени к груди</text>
  </svg>`,

  'gym-roll': `<svg viewBox="0 0 300 150" style="width:100%; max-width:400px; display:block; margin:0 auto; background:#f8faff; border-radius:16px; padding:10px; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
    <rect x="20" y="120" width="260" height="12" fill="#d9e2f2" rx="6"/>
    <circle cx="80" cy="90" r="14" fill="#ff6b35"/>
    <line x1="80" y1="104" x2="100" y2="118" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="80" y1="104" x2="60" y2="118" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <path d="M 110 80 Q 150 40 200 80" stroke="#16b8a6" stroke-width="3" fill="none" stroke-dasharray="6,4"/>
    <circle cx="200" cy="80" r="14" fill="#ff6b35" opacity="0.4"/>
    <polygon points="200,80 192,72 192,88" fill="#16b8a6"/>
    <text x="120" y="30" fill="#ff6b35" font-weight="800" font-family="Montserrat, sans-serif" font-size="12">Перекат назад-вперёд</text>
  </svg>`,

  'gym-fwd': `<svg viewBox="0 0 300 150" style="width:100%; max-width:400px; display:block; margin:0 auto; background:#f8faff; border-radius:16px; padding:10px; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
    <rect x="20" y="120" width="260" height="12" fill="#d9e2f2" rx="6"/>
    <circle cx="80" cy="85" r="14" fill="#ff6b35"/>
    <line x1="94" y1="85" x2="130" y2="105" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="130" y1="105" x2="160" y2="118" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="130" y1="105" x2="120" y2="118" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <path d="M 170 90 Q 210 70 250 90" stroke="#16b8a6" stroke-width="3" fill="none" stroke-dasharray="6,4"/>
    <polygon points="250,90 242,82 242,98" fill="#16b8a6"/>
    <text x="40" y="30" fill="#ff6b35" font-weight="800" font-family="Montserrat, sans-serif" font-size="12">Через голову вперёд</text>
  </svg>`,

  'gym-back': `<svg viewBox="0 0 300 150" style="width:100%; max-width:400px; display:block; margin:0 auto; background:#f8faff; border-radius:16px; padding:10px; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
    <rect x="20" y="120" width="260" height="12" fill="#d9e2f2" rx="6"/>
    <circle cx="100" cy="85" r="14" fill="#ff6b35"/>
    <line x1="86" y1="85" x2="60" y2="105" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="60" y1="105" x2="40" y2="118" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="60" y1="105" x2="50" y2="118" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <path d="M 120 90 Q 160 70 200 90" stroke="#16b8a6" stroke-width="3" fill="none" stroke-dasharray="6,4"/>
    <polygon points="200,90 192,82 192,98" fill="#16b8a6"/>
    <text x="140" y="30" fill="#ff6b35" font-weight="800" font-family="Montserrat, sans-serif" font-size="12">Через голову назад</text>
  </svg>`,

  'gym-stand': `<svg viewBox="0 0 300 150" style="width:100%; max-width:400px; display:block; margin:0 auto; background:#f8faff; border-radius:16px; padding:10px; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
    <rect x="20" y="120" width="260" height="12" fill="#d9e2f2" rx="6"/>
    <circle cx="150" cy="40" r="14" fill="#ff6b35"/>
    <line x1="150" y1="54" x2="150" y2="80" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="150" y1="80" x2="120" y2="115" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="150" y1="80" x2="180" y2="115" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="150" y1="80" x2="150" y2="115" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <path d="M 120 60 L 120 30" stroke="#16b8a6" stroke-width="3" fill="none" marker-end="url(#arrow-up)"/>
    <path d="M 180 60 L 180 30" stroke="#16b8a6" stroke-width="3" fill="none" marker-end="url(#arrow-up)"/>
    <defs><marker id="arrow-up" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#16b8a6"/></marker></defs>
    <text x="200" y="40" fill="#ff6b35" font-weight="800" font-family="Montserrat, sans-serif" font-size="12">Опора на лопатки</text>
  </svg>`,

  'gym-bridge': `<svg viewBox="0 0 300 150" style="width:100%; max-width:400px; display:block; margin:0 auto; background:#f8faff; border-radius:16px; padding:10px; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
    <rect x="20" y="120" width="260" height="12" fill="#d9e2f2" rx="6"/>
    <circle cx="80" cy="90" r="14" fill="#ff6b35"/>
    <path d="M 80 90 Q 150 30 220 90" stroke="#14213d" stroke-width="6" fill="none" stroke-linecap="round"/>
    <line x1="80" y1="90" x2="50" y2="118" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="220" y1="90" x2="250" y2="118" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <text x="100" y="30" fill="#ff6b35" font-weight="800" font-family="Montserrat, sans-serif" font-size="12">Прогиб в спине</text>
  </svg>`,

  'gym-swallow': `<svg viewBox="0 0 300 150" style="width:100%; max-width:400px; display:block; margin:0 auto; background:#f8faff; border-radius:16px; padding:10px; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
    <rect x="20" y="120" width="260" height="12" fill="#d9e2f2" rx="6"/>
    <circle cx="100" cy="60" r="14" fill="#ff6b35"/>
    <line x1="100" y1="74" x2="130" y2="95" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="130" y1="95" x2="160" y2="118" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="130" y1="95" x2="120" y2="118" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="100" y1="85" x2="70" y2="85" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="100" y1="85" x2="130" y2="85" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <path d="M 180 100 Q 220 80 250 100" stroke="#16b8a6" stroke-width="3" fill="none" stroke-dasharray="6,4"/>
    <text x="40" y="30" fill="#ff6b35" font-weight="800" font-family="Montserrat, sans-serif" font-size="12">«Ласточка»</text>
    <text x="40" y="45" fill="#14213d" font-weight="600" font-family="Montserrat, sans-serif" font-size="10">Равновесие на одной ноге</text>
  </svg>`,

  'gym-wheel': `<svg viewBox="0 0 300 150" style="width:100%; max-width:400px; display:block; margin:0 auto; background:#f8faff; border-radius:16px; padding:10px; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
    <rect x="20" y="120" width="260" height="12" fill="#d9e2f2" rx="6"/>
    <circle cx="80" cy="90" r="14" fill="#ff6b35"/>
    <line x1="80" y1="104" x2="110" y2="118" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="80" y1="104" x2="60" y2="118" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <circle cx="150" cy="40" r="14" fill="#ff6b35"/>
    <line x1="150" y1="54" x2="150" y2="90" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="150" y1="90" x2="130" y2="118" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="150" y1="90" x2="170" y2="118" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <path d="M 100 70 Q 150 20 200 70" stroke="#16b8a6" stroke-width="3" fill="none" stroke-dasharray="6,4"/>
    <polygon points="200,70 192,62 192,78" fill="#16b8a6"/>
    <text x="200" y="40" fill="#ff6b35" font-weight="800" font-family="Montserrat, sans-serif" font-size="12">Через стойку на руках</text>
  </svg>`,

  'gym-head': `<svg viewBox="0 0 300 150" style="width:100%; max-width:400px; display:block; margin:0 auto; background:#f8faff; border-radius:16px; padding:10px; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
    <rect x="20" y="120" width="260" height="12" fill="#d9e2f2" rx="6"/>
    <circle cx="150" cy="50" r="14" fill="#ff6b35"/>
    <line x1="150" y1="64" x2="150" y2="95" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="150" y1="95" x2="120" y2="118" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="150" y1="95" x2="180" y2="118" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="150" y1="50" x2="130" y2="30" stroke="#14213d" stroke-width="4" stroke-linecap="round"/>
    <line x1="150" y1="50" x2="170" y2="30" stroke="#14213d" stroke-width="4" stroke-linecap="round"/>
    <text x="190" y="40" fill="#ff6b35" font-weight="800" font-family="Montserrat, sans-serif" font-size="12">Опора на голову и руки</text>
  </svg>`,

  'gym-hands': `<svg viewBox="0 0 300 150" style="width:100%; max-width:400px; display:block; margin:0 auto; background:#f8faff; border-radius:16px; padding:10px; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
    <rect x="20" y="120" width="260" height="12" fill="#d9e2f2" rx="6"/>
    <circle cx="150" cy="40" r="14" fill="#ff6b35"/>
    <line x1="150" y1="54" x2="150" y2="90" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="150" y1="90" x2="120" y2="118" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="150" y1="90" x2="180" y2="118" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="150" y1="40" x2="120" y2="118" stroke="#14213d" stroke-width="4" stroke-linecap="round"/>
    <line x1="150" y1="40" x2="180" y2="118" stroke="#14213d" stroke-width="4" stroke-linecap="round"/>
    <text x="190" y="40" fill="#ff6b35" font-weight="800" font-family="Montserrat, sans-serif" font-size="12">Стойка на руках</text>
  </svg>`,

  'gym-rope': `<svg viewBox="0 0 300 150" style="width:100%; max-width:400px; display:block; margin:0 auto; background:#f8faff; border-radius:16px; padding:10px; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
    <line x1="150" y1="10" x2="150" y2="140" stroke="#16b8a6" stroke-width="5"/>
    <circle cx="150" cy="70" r="14" fill="#ff6b35"/>
    <line x1="150" y1="84" x2="150" y2="110" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="150" y1="95" x2="130" y2="115" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="150" y1="95" x2="170" y2="115" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <path d="M 130 20 L 130 50" stroke="#ff6b35" stroke-width="3" fill="none" marker-end="url(#arrow-r)"/>
    <defs><marker id="arrow-r" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#ff6b35"/></marker></defs>
    <text x="170" y="30" fill="#ff6b35" font-weight="800" font-family="Montserrat, sans-serif" font-size="12">Вверх по канату</text>
  </svg>`,

  // ----------------------------------------------------------
  // ЛЫЖНАЯ ПОДГОТОВКА
  // ----------------------------------------------------------
  'ski-classic': `<svg viewBox="0 0 300 150" style="width:100%; max-width:400px; display:block; margin:0 auto; background:#f8faff; border-radius:16px; padding:10px; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
    <rect x="20" y="120" width="260" height="12" fill="#e0f2fe" rx="6"/>
    <circle cx="100" cy="70" r="14" fill="#ff6b35"/>
    <line x1="100" y1="84" x2="100" y2="110" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="100" y1="95" x2="80" y2="120" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="100" y1="95" x2="120" y2="120" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="100" y1="75" x2="70" y2="90" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="100" y1="75" x2="130" y2="90" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <rect x="70" y="115" width="25" height="6" fill="#ff6b35" rx="3"/>
    <rect x="115" y="115" width="25" height="6" fill="#ff6b35" rx="3"/>
    <path d="M 150 90 Q 190 60 230 90" stroke="#16b8a6" stroke-width="3" fill="none" stroke-dasharray="6,4"/>
    <polygon points="230,90 222,82 222,98" fill="#16b8a6"/>
    <text x="160" y="40" fill="#ff6b35" font-weight="800" font-family="Montserrat, sans-serif" font-size="12">Попеременный ход</text>
    <text x="160" y="55" fill="#14213d" font-weight="600" font-family="Montserrat, sans-serif" font-size="10">Правая рука — левая нога</text>
  </svg>`,

  'ski-bez': `<svg viewBox="0 0 300 150" style="width:100%; max-width:400px; display:block; margin:0 auto; background:#f8faff; border-radius:16px; padding:10px; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
    <rect x="20" y="120" width="260" height="12" fill="#e0f2fe" rx="6"/>
    <circle cx="150" cy="60" r="14" fill="#ff6b35"/>
    <line x1="150" y1="74" x2="150" y2="100" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="150" y1="100" x2="130" y2="118" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="150" y1="100" x2="170" y2="118" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="150" y1="75" x2="110" y2="70" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="150" y1="75" x2="190" y2="70" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <rect x="110" y="115" width="25" height="6" fill="#ff6b35" rx="3"/>
    <rect x="165" y="115" width="25" height="6" fill="#ff6b35" rx="3"/>
    <path d="M 150 40 L 150 10" stroke="#16b8a6" stroke-width="3" fill="none" marker-end="url(#arrow-sb)"/>
    <defs><marker id="arrow-sb" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#16b8a6"/></marker></defs>
    <text x="200" y="40" fill="#ff6b35" font-weight="800" font-family="Montserrat, sans-serif" font-size="12">Только палки</text>
  </svg>`,

  'ski-odn': `<svg viewBox="0 0 300 150" style="width:100%; max-width:400px; display:block; margin:0 auto; background:#f8faff; border-radius:16px; padding:10px; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
    <rect x="20" y="120" width="260" height="12" fill="#e0f2fe" rx="6"/>
    <circle cx="120" cy="60" r="14" fill="#ff6b35"/>
    <line x1="120" y1="74" x2="120" y2="100" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="120" y1="100" x2="100" y2="118" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="120" y1="100" x2="140" y2="118" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="120" y1="75" x2="90" y2="80" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="120" y1="75" x2="150" y2="80" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <rect x="90" y="115" width="25" height="6" fill="#ff6b35" rx="3"/>
    <rect x="135" y="115" width="25" height="6" fill="#ff6b35" rx="3"/>
    <path d="M 170 80 L 230 80" stroke="#16b8a6" stroke-width="3" fill="none" marker-end="url(#arrow-o)"/>
    <defs><marker id="arrow-o" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#16b8a6"/></marker></defs>
    <text x="180" y="40" fill="#ff6b35" font-weight="800" font-family="Montserrat, sans-serif" font-size="12">Один шаг + палки</text>
  </svg>`,

  'ski-dva': `<svg viewBox="0 0 300 150" style="width:100%; max-width:400px; display:block; margin:0 auto; background:#f8faff; border-radius:16px; padding:10px; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
    <rect x="20" y="120" width="260" height="12" fill="#e0f2fe" rx="6"/>
    <circle cx="100" cy="55" r="14" fill="#ff6b35"/>
    <line x1="100" y1="69" x2="100" y2="95" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="100" y1="95" x2="80" y2="118" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="100" y1="95" x2="120" y2="118" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="100" y1="75" x2="70" y2="85" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="100" y1="75" x2="130" y2="85" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <rect x="70" y="115" width="25" height="6" fill="#ff6b35" rx="3"/>
    <rect x="115" y="115" width="25" height="6" fill="#ff6b35" rx="3"/>
    <text x="150" y="30" fill="#ff6b35" font-weight="800" font-family="Montserrat, sans-serif" font-size="12">Два шага + палки</text>
    <text x="150" y="45" fill="#14213d" font-weight="600" font-family="Montserrat, sans-serif" font-size="10">Толчок в конце 2-го шага</text>
  </svg>`,

  'ski-up': `<svg viewBox="0 0 300 150" style="width:100%; max-width:400px; display:block; margin:0 auto; background:#f8faff; border-radius:16px; padding:10px; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
    <path d="M 20 120 L 280 120" stroke="#d9e2f2" stroke-width="12" stroke-linecap="round"/>
    <path d="M 20 120 L 280 60" stroke="#d9e2f2" stroke-width="12" stroke-linecap="round"/>
    <circle cx="120" cy="85" r="14" fill="#ff6b35"/>
    <line x1="120" y1="99" x2="120" y2="118" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="120" y1="110" x2="105" y2="115" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="120" y1="110" x2="135" y2="115" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <text x="160" y="40" fill="#ff6b35" font-weight="800" font-family="Montserrat, sans-serif" font-size="12">«Ёлочка»</text>
    <text x="160" y="55" fill="#14213d" font-weight="600" font-family="Montserrat, sans-serif" font-size="10">Носки лыж врозь</text>
  </svg>`,

  'ski-down': `<svg viewBox="0 0 300 150" style="width:100%; max-width:400px; display:block; margin:0 auto; background:#f8faff; border-radius:16px; padding:10px; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
    <path d="M 20 40 L 280 40" stroke="#d9e2f2" stroke-width="6" stroke-dasharray="10,5"/>
    <circle cx="150" cy="70" r="14" fill="#ff6b35"/>
    <line x1="150" y1="84" x2="150" y2="105" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="150" y1="105" x2="130" y2="118" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="150" y1="105" x2="170" y2="118" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="150" y1="85" x2="120" y2="80" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="150" y1="85" x2="180" y2="80" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <rect x="120" y="115" width="25" height="6" fill="#ff6b35" rx="3"/>
    <rect x="165" y="115" width="25" height="6" fill="#ff6b35" rx="3"/>
    <text x="200" y="40" fill="#ff6b35" font-weight="800" font-family="Montserrat, sans-serif" font-size="12">Низкая стойка</text>
  </svg>`,

  'ski-brake': `<svg viewBox="0 0 300 150" style="width:100%; max-width:400px; display:block; margin:0 auto; background:#f8faff; border-radius:16px; padding:10px; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
    <rect x="20" y="120" width="260" height="12" fill="#e0f2fe" rx="6"/>
    <circle cx="150" cy="55" r="14" fill="#ff6b35"/>
    <line x1="150" y1="69" x2="150" y2="95" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="150" y1="95" x2="130" y2="118" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="150" y1="95" x2="170" y2="118" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="150" y1="75" x2="120" y2="85" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="150" y1="75" x2="180" y2="85" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <rect x="120" y="115" width="25" height="6" fill="#ff6b35" rx="3" transform="rotate(-10, 120, 115)"/>
    <rect x="165" y="115" width="25" height="6" fill="#ff6b35" rx="3" transform="rotate(10, 165, 115)"/>
    <text x="200" y="40" fill="#ff6b35" font-weight="800" font-family="Montserrat, sans-serif" font-size="12">«Плуг»</text>
    <text x="200" y="55" fill="#14213d" font-weight="600" font-family="Montserrat, sans-serif" font-size="10">Пятки врозь</text>
  </svg>`,

  'ski-turn': `<svg viewBox="0 0 300 150" style="width:100%; max-width:400px; display:block; margin:0 auto; background:#f8faff; border-radius:16px; padding:10px; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
    <rect x="20" y="120" width="260" height="12" fill="#e0f2fe" rx="6"/>
    <circle cx="120" cy="60" r="14" fill="#ff6b35"/>
    <line x1="120" y1="74" x2="120" y2="100" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="120" y1="100" x2="100" y2="118" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="120" y1="100" x2="140" y2="118" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <rect x="90" y="115" width="25" height="6" fill="#ff6b35" rx="3"/>
    <rect x="135" y="115" width="25" height="6" fill="#ff6b35" rx="3"/>
    <path d="M 160 90 Q 200 60 240 90" stroke="#16b8a6" stroke-width="3" fill="none" stroke-dasharray="6,4"/>
    <polygon points="240,90 232,82 232,98" fill="#16b8a6"/>
    <text x="180" y="40" fill="#ff6b35" font-weight="800" font-family="Montserrat, sans-serif" font-size="12">Поворот</text>
  </svg>`,

  // ----------------------------------------------------------
  // ФУТБОЛ
  // ----------------------------------------------------------
  'foot-pass-in': `<svg viewBox="0 0 300 150" style="width:100%; max-width:400px; display:block; margin:0 auto; background:#f8faff; border-radius:16px; padding:10px; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
    <circle cx="150" cy="75" r="20" fill="#14213d"/>
    <circle cx="145" cy="70" r="5" fill="#fff" opacity="0.4"/>
    <path d="M 130 75 Q 100 100 80 120" stroke="#14213d" stroke-width="6" fill="none" stroke-linecap="round"/>
    <rect x="60" y="115" width="30" height="10" fill="#16b8a6" rx="4"/>
    <path d="M 170 75 Q 200 100 220 120" stroke="#14213d" stroke-width="6" fill="none" stroke-linecap="round"/>
    <rect x="210" y="115" width="30" height="10" fill="#ff6b35" rx="4"/>
    <line x1="170" y1="75" x2="150" y2="75" stroke="#ff3d71" stroke-width="3" stroke-dasharray="3,3"/>
    <text x="40" y="30" fill="#16b8a6" font-weight="800" font-family="Montserrat, sans-serif" font-size="12">Опорная</text>
    <text x="210" y="30" fill="#ff6b35" font-weight="800" font-family="Montserrat, sans-serif" font-size="12">Бьющая</text>
  </svg>`,

  'foot-pass-out': `<svg viewBox="0 0 300 150" style="width:100%; max-width:400px; display:block; margin:0 auto; background:#f8faff; border-radius:16px; padding:10px; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
    <circle cx="150" cy="75" r="20" fill="#14213d"/>
    <path d="M 130 75 Q 100 100 80 120" stroke="#14213d" stroke-width="6" fill="none" stroke-linecap="round"/>
    <rect x="60" y="115" width="30" height="10" fill="#16b8a6" rx="4"/>
    <path d="M 170 75 Q 200 100 220 120" stroke="#14213d" stroke-width="6" fill="none" stroke-linecap="round"/>
    <rect x="210" y="115" width="30" height="10" fill="#ff6b35" rx="4"/>
    <path d="M 180 60 Q 200 40 230 50" stroke="#ff3d71" stroke-width="3" fill="none" stroke-dasharray="4,4"/>
    <text x="220" y="30" fill="#ff6b35" font-weight="800" font-family="Montserrat, sans-serif" font-size="12">Резаный</text>
  </svg>`,

  'foot-pass-lift': `<svg viewBox="0 0 300 150" style="width:100%; max-width:400px; display:block; margin:0 auto; background:#f8faff; border-radius:16px; padding:10px; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
    <circle cx="150" cy="80" r="20" fill="#14213d"/>
    <path d="M 130 80 Q 100 100 80 120" stroke="#14213d" stroke-width="6" fill="none" stroke-linecap="round"/>
    <rect x="60" y="115" width="30" height="10" fill="#16b8a6" rx="4"/>
    <path d="M 170 80 Q 200 100 220 120" stroke="#14213d" stroke-width="6" fill="none" stroke-linecap="round"/>
    <rect x="210" y="115" width="30" height="10" fill="#ff6b35" rx="4"/>
    <path d="M 170 70 Q 200 30 240 50" stroke="#ff3d71" stroke-width="3" fill="none" stroke-dasharray="4,4"/>
    <text x="220" y="30" fill="#ff6b35" font-weight="800" font-family="Montserrat, sans-serif" font-size="12">Дальний</text>
  </svg>`,

  'foot-pass-toe': `<svg viewBox="0 0 300 150" style="width:100%; max-width:400px; display:block; margin:0 auto; background:#f8faff; border-radius:16px; padding:10px; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
    <circle cx="150" cy="75" r="20" fill="#14213d"/>
    <path d="M 130 75 Q 100 100 80 120" stroke="#14213d" stroke-width="6" fill="none" stroke-linecap="round"/>
    <rect x="60" y="115" width="30" height="10" fill="#16b8a6" rx="4"/>
    <path d="M 170 75 Q 200 100 220 120" stroke="#14213d" stroke-width="6" fill="none" stroke-linecap="round"/>
    <rect x="210" y="115" width="30" height="10" fill="#ff6b35" rx="4"/>
    <circle cx="225" cy="120" r="4" fill="#ff3d71"/>
    <text x="200" y="30" fill="#ff6b35" font-weight="800" font-family="Montserrat, sans-serif" font-size="12">Носком</text>
  </svg>`,

  'foot-pass-move': `<svg viewBox="0 0 300 150" style="width:100%; max-width:400px; display:block; margin:0 auto; background:#f8faff; border-radius:16px; padding:10px; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
    <circle cx="100" cy="70" r="14" fill="#ff6b35"/>
    <line x1="100" y1="84" x2="110" y2="110" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="110" y1="110" x2="90" y2="118" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="110" y1="110" x2="130" y2="118" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <circle cx="160" cy="90" r="12" fill="#14213d"/>
    <path d="M 180 90 Q 220 70 250 80" stroke="#16b8a6" stroke-width="3" fill="none" stroke-dasharray="6,4"/>
    <polygon points="250,80 242,72 242,88" fill="#16b8a6"/>
    <text x="180" y="40" fill="#ff6b35" font-weight="800" font-family="Montserrat, sans-serif" font-size="12">В движении</text>
  </svg>`,

  'foot-stop-sole': `<svg viewBox="0 0 300 150" style="width:100%; max-width:400px; display:block; margin:0 auto; background:#f8faff; border-radius:16px; padding:10px; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
    <circle cx="150" cy="80" r="18" fill="#14213d"/>
    <rect x="120" y="60" width="60" height="40" fill="#ff6b35" opacity="0.3" rx="4"/>
    <path d="M 150 40 L 150 55" stroke="#16b8a6" stroke-width="3" fill="none" marker-end="url(#arrow-stop)"/>
    <defs><marker id="arrow-stop" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#16b8a6"/></marker></defs>
    <text x="180" y="40" fill="#ff6b35" font-weight="800" font-family="Montserrat, sans-serif" font-size="12">Подошва</text>
    <text x="180" y="55" fill="#14213d" font-weight="600" font-family="Montserrat, sans-serif" font-size="10">Сверху на мяч</text>
  </svg>`,

  'foot-stop-in': `<svg viewBox="0 0 300 150" style="width:100%; max-width:400px; display:block; margin:0 auto; background:#f8faff; border-radius:16px; padding:10px; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
    <circle cx="150" cy="80" r="18" fill="#14213d"/>
    <path d="M 130 80 Q 100 100 80 120" stroke="#14213d" stroke-width="6" fill="none" stroke-linecap="round"/>
    <rect x="60" y="115" width="30" height="10" fill="#16b8a6" rx="4"/>
    <path d="M 170 80 Q 200 100 220 120" stroke="#14213d" stroke-width="6" fill="none" stroke-linecap="round"/>
    <rect x="210" y="115" width="30" height="10" fill="#ff6b35" rx="4" transform="rotate(-20, 225, 120)"/>
    <text x="200" y="30" fill="#ff6b35" font-weight="800" font-family="Montserrat, sans-serif" font-size="12">Внутренняя сторона</text>
  </svg>`,

  'foot-stop-lift': `<svg viewBox="0 0 300 150" style="width:100%; max-width:400px; display:block; margin:0 auto; background:#f8faff; border-radius:16px; padding:10px; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
    <circle cx="150" cy="70" r="18" fill="#14213d"/>
    <path d="M 130 70 Q 100 90 80 110" stroke="#14213d" stroke-width="6" fill="none" stroke-linecap="round"/>
    <rect x="60" y="105" width="30" height="10" fill="#16b8a6" rx="4"/>
    <path d="M 170 70 Q 200 90 220 110" stroke="#14213d" stroke-width="6" fill="none" stroke-linecap="round"/>
    <rect x="210" y="105" width="30" height="10" fill="#ff6b35" rx="4" transform="rotate(-30, 225, 110)"/>
    <text x="200" y="30" fill="#ff6b35" font-weight="800" font-family="Montserrat, sans-serif" font-size="12">Средняя часть подъёма</text>
  </svg>`,

  'foot-dribble-in': `<svg viewBox="0 0 300 150" style="width:100%; max-width:400px; display:block; margin:0 auto; background:#f8faff; border-radius:16px; padding:10px; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
    <circle cx="100" cy="70" r="14" fill="#ff6b35"/>
    <line x1="100" y1="84" x2="110" y2="110" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="110" y1="110" x2="90" y2="118" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="110" y1="110" x2="130" y2="118" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="100" y1="95" x2="80" y2="100" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <circle cx="80" cy="100" r="10" fill="#14213d"/>
    <path d="M 40 120 Q 80 120 120 120" stroke="#16b8a6" stroke-width="2" fill="none" stroke-dasharray="6,4"/>
    <text x="150" y="40" fill="#ff6b35" font-weight="800" font-family="Montserrat, sans-serif" font-size="12">Внутренней</text>
    <text x="150" y="55" fill="#14213d" font-weight="600" font-family="Montserrat, sans-serif" font-size="10">По дуге</text>
  </svg>`,

  'foot-dribble-out': `<svg viewBox="0 0 300 150" style="width:100%; max-width:400px; display:block; margin:0 auto; background:#f8faff; border-radius:16px; padding:10px; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
    <circle cx="100" cy="70" r="14" fill="#ff6b35"/>
    <line x1="100" y1="84" x2="110" y2="110" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="110" y1="110" x2="90" y2="118" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="110" y1="110" x2="130" y2="118" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="100" y1="95" x2="120" y2="100" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <circle cx="120" cy="100" r="10" fill="#14213d"/>
    <path d="M 40 120 Q 80 120 120 120" stroke="#16b8a6" stroke-width="2" fill="none" stroke-dasharray="6,4"/>
    <text x="150" y="40" fill="#ff6b35" font-weight="800" font-family="Montserrat, sans-serif" font-size="12">Внешней</text>
    <text x="150" y="55" fill="#14213d" font-weight="600" font-family="Montserrat, sans-serif" font-size="10">По прямой</text>
  </svg>`,

  'foot-kick-in': `<svg viewBox="0 0 300 150" style="width:100%; max-width:400px; display:block; margin:0 auto; background:#f8faff; border-radius:16px; padding:10px; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
    <circle cx="150" cy="75" r="20" fill="#14213d"/>
    <circle cx="145" cy="70" r="5" fill="#fff" opacity="0.4"/>
    <path d="M 130 75 Q 100 100 80 120" stroke="#14213d" stroke-width="6" fill="none" stroke-linecap="round"/>
    <rect x="60" y="115" width="30" height="10" fill="#16b8a6" rx="4"/>
    <path d="M 170 75 Q 200 100 220 120" stroke="#14213d" stroke-width="6" fill="none" stroke-linecap="round"/>
    <rect x="210" y="115" width="30" height="10" fill="#ff6b35" rx="4"/>
    <line x1="170" y1="75" x2="150" y2="75" stroke="#ff3d71" stroke-width="3" stroke-dasharray="3,3"/>
    <text x="40" y="30" fill="#16b8a6" font-weight="800" font-family="Montserrat, sans-serif" font-size="12">Опорная</text>
    <text x="210" y="30" fill="#ff6b35" font-weight="800" font-family="Montserrat, sans-serif" font-size="12">Бьющая</text>
  </svg>`,

  'foot-kick-lift': `<svg viewBox="0 0 300 150" style="width:100%; max-width:400px; display:block; margin:0 auto; background:#f8faff; border-radius:16px; padding:10px; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
    <circle cx="150" cy="75" r="20" fill="#14213d"/>
    <path d="M 130 75 Q 100 100 80 120" stroke="#14213d" stroke-width="6" fill="none" stroke-linecap="round"/>
    <rect x="60" y="115" width="30" height="10" fill="#16b8a6" rx="4"/>
    <path d="M 170 75 Q 200 100 220 120" stroke="#14213d" stroke-width="6" fill="none" stroke-linecap="round"/>
    <rect x="210" y="115" width="30" height="10" fill="#ff6b35" rx="4"/>
    <path d="M 160 60 L 170 30" stroke="#ff3d71" stroke-width="3" fill="none" marker-end="url(#arrow-kl)"/>
    <defs><marker id="arrow-kl" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#ff3d71"/></marker></defs>
    <text x="180" y="30" fill="#ff6b35" font-weight="800" font-family="Montserrat, sans-serif" font-size="12">Подъёмом</text>
  </svg>`,

  'foot-kick-toe': `<svg viewBox="0 0 300 150" style="width:100%; max-width:400px; display:block; margin:0 auto; background:#f8faff; border-radius:16px; padding:10px; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
    <circle cx="150" cy="75" r="20" fill="#14213d"/>
    <path d="M 130 75 Q 100 100 80 120" stroke="#14213d" stroke-width="6" fill="none" stroke-linecap="round"/>
    <rect x="60" y="115" width="30" height="10" fill="#16b8a6" rx="4"/>
    <path d="M 170 75 Q 200 100 220 120" stroke="#14213d" stroke-width="6" fill="none" stroke-linecap="round"/>
    <rect x="210" y="115" width="30" height="10" fill="#ff6b35" rx="4"/>
    <circle cx="225" cy="120" r="4" fill="#ff3d71"/>
    <text x="200" y="30" fill="#ff6b35" font-weight="800" font-family="Montserrat, sans-serif" font-size="12">Носком</text>
  </svg>`,

  'foot-kick-out': `<svg viewBox="0 0 300 150" style="width:100%; max-width:400px; display:block; margin:0 auto; background:#f8faff; border-radius:16px; padding:10px; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
    <circle cx="150" cy="75" r="20" fill="#14213d"/>
    <path d="M 130 75 Q 100 100 80 120" stroke="#14213d" stroke-width="6" fill="none" stroke-linecap="round"/>
    <rect x="60" y="115" width="30" height="10" fill="#16b8a6" rx="4"/>
    <path d="M 170 75 Q 200 100 220 120" stroke="#14213d" stroke-width="6" fill="none" stroke-linecap="round"/>
    <rect x="210" y="115" width="30" height="10" fill="#ff6b35" rx="4" transform="rotate(-20, 225, 120)"/>
    <path d="M 170 60 Q 200 40 230 50" stroke="#ff3d71" stroke-width="3" fill="none" stroke-dasharray="4,4"/>
    <text x="220" y="30" fill="#ff6b35" font-weight="800" font-family="Montserrat, sans-serif" font-size="12">Внешней</text>
  </svg>`,

  'foot-head': `<svg viewBox="0 0 300 150" style="width:100%; max-width:400px; display:block; margin:0 auto; background:#f8faff; border-radius:16px; padding:10px; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
    <circle cx="150" cy="50" r="18" fill="#ff6b35"/>
    <circle cx="150" cy="35" r="8" fill="#fff" opacity="0.3"/>
    <circle cx="150" cy="100" r="16" fill="#14213d"/>
    <path d="M 150 70 L 150 90" stroke="#16b8a6" stroke-width="3" fill="none" marker-end="url(#arrow-head)"/>
    <defs><marker id="arrow-head" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#16b8a6"/></marker></defs>
    <text x="180" y="50" fill="#ff6b35" font-weight="800" font-family="Montserrat, sans-serif" font-size="12">Лбом</text>
    <text x="180" y="65" fill="#14213d" font-weight="600" font-family="Montserrat, sans-serif" font-size="10">Чуть выше переносицы</text>
  </svg>`,

  // ----------------------------------------------------------
  // ВОЛЕЙБОЛ
  // ----------------------------------------------------------
  'volley-top': `<svg viewBox="0 0 300 150" style="width:100%; max-width:400px; display:block; margin:0 auto; background:#f8faff; border-radius:16px; padding:10px; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
    <circle cx="150" cy="50" r="22" fill="#16b8a6"/>
    <path d="M 130 50 Q 150 30 170 50" stroke="#fff" stroke-width="3" fill="none"/>
    <path d="M 130 50 Q 150 70 170 50" stroke="#fff" stroke-width="3" fill="none"/>
    <path d="M 120 80 L 130 50 L 150 45 L 170 50 L 180 80" stroke="#14213d" stroke-width="5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="150" cy="45" r="4" fill="#ff6b35"/>
    <path d="M 150 20 L 150 5" stroke="#ff6b35" stroke-width="3" fill="none" marker-end="url(#arrow-top)"/>
    <defs><marker id="arrow-top" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#ff6b35"/></marker></defs>
    <text x="200" y="50" fill="#ff6b35" font-weight="800" font-family="Montserrat, sans-serif" font-size="12">Ковшик</text>
    <text x="200" y="70" fill="#14213d" font-weight="600" font-family="Montserrat, sans-serif" font-size="10">Пальцы — треугольник</text>
  </svg>`,

  'volley-bottom': `<svg viewBox="0 0 300 150" style="width:100%; max-width:400px; display:block; margin:0 auto; background:#f8faff; border-radius:16px; padding:10px; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
    <circle cx="150" cy="40" r="20" fill="#16b8a6"/>
    <line x1="100" y1="90" x2="200" y2="90" stroke="#14213d" stroke-width="8" stroke-linecap="round"/>
    <line x1="100" y1="90" x2="80" y2="70" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="200" y1="90" x2="220" y2="70" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <path d="M 150 70 L 150 55" stroke="#ff6b35" stroke-width="3" fill="none" marker-end="url(#arrow-vb)"/>
    <defs><marker id="arrow-vb" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#ff6b35"/></marker></defs>
    <text x="40" y="30" fill="#ff6b35" font-weight="800" font-family="Montserrat, sans-serif" font-size="12">Платформа предплечий</text>
  </svg>`,

  'volley-serve-low': `<svg viewBox="0 0 300 150" style="width:100%; max-width:400px; display:block; margin:0 auto; background:#f8faff; border-radius:16px; padding:10px; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
    <circle cx="100" cy="70" r="14" fill="#ff6b35"/>
    <line x1="100" y1="84" x2="100" y2="110" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="100" y1="110" x2="80" y2="118" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="100" y1="110" x2="120" y2="118" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="100" y1="75" x2="70" y2="80" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <circle cx="60" cy="82" r="10" fill="#16b8a6"/>
    <path d="M 140 70 Q 200 50 260 60" stroke="#16b8a6" stroke-width="3" fill="none" stroke-dasharray="6,4"/>
    <polygon points="260,60 252,52 252,68" fill="#16b8a6"/>
    <text x="160" y="30" fill="#ff6b35" font-weight="800" font-family="Montserrat, sans-serif" font-size="12">Нижняя подача</text>
  </svg>`,

  'volley-serve-top': `<svg viewBox="0 0 300 150" style="width:100%; max-width:400px; display:block; margin:0 auto; background:#f8faff; border-radius:16px; padding:10px; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
    <circle cx="100" cy="70" r="14" fill="#ff6b35"/>
    <line x1="100" y1="84" x2="100" y2="110" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="100" y1="110" x2="80" y2="118" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="100" y1="110" x2="120" y2="118" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="100" y1="75" x2="70" y2="50" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <circle cx="60" cy="45" r="10" fill="#16b8a6"/>
    <path d="M 140 50 Q 200 30 260 50" stroke="#16b8a6" stroke-width="3" fill="none" stroke-dasharray="6,4"/>
    <polygon points="260,50 252,42 252,58" fill="#16b8a6"/>
    <text x="160" y="25" fill="#ff6b35" font-weight="800" font-family="Montserrat, sans-serif" font-size="12">Верхняя подача</text>
  </svg>`,

  'volley-attack': `<svg viewBox="0 0 300 150" style="width:100%; max-width:400px; display:block; margin:0 auto; background:#f8faff; border-radius:16px; padding:10px; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
    <circle cx="100" cy="50" r="14" fill="#ff6b35"/>
    <line x1="100" y1="64" x2="100" y2="95" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="100" y1="95" x2="80" y2="118" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="100" y1="95" x2="120" y2="118" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="100" y1="75" x2="70" y2="60" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="100" y1="75" x2="130" y2="60" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <circle cx="160" cy="40" r="18" fill="#16b8a6"/>
    <path d="M 140 60 Q 150 30 180 30" stroke="#ff3d71" stroke-width="3" fill="none" stroke-dasharray="4,4"/>
    <text x="200" y="30" fill="#ff6b35" font-weight="800" font-family="Montserrat, sans-serif" font-size="12">Нападающий удар</text>
    <text x="200" y="45" fill="#14213d" font-weight="600" font-family="Montserrat, sans-serif" font-size="10">В высшей точке</text>
  </svg>`,

  'volley-block': `<svg viewBox="0 0 300 150" style="width:100%; max-width:400px; display:block; margin:0 auto; background:#f8faff; border-radius:16px; padding:10px; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
    <line x1="20" y1="60" x2="280" y2="60" stroke="#d9e2f2" stroke-width="4" stroke-dasharray="6,4"/>
    <circle cx="150" cy="100" r="14" fill="#ff6b35"/>
    <line x1="150" y1="114" x2="150" y2="130" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="150" y1="90" x2="130" y2="70" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="150" y1="90" x2="170" y2="70" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <circle cx="130" cy="50" r="14" fill="#16b8a6"/>
    <circle cx="170" cy="50" r="14" fill="#16b8a6"/>
    <text x="200" y="40" fill="#ff6b35" font-weight="800" font-family="Montserrat, sans-serif" font-size="12">Блок над сеткой</text>
  </svg>`,

  'volley-receive': `<svg viewBox="0 0 300 150" style="width:100%; max-width:400px; display:block; margin:0 auto; background:#f8faff; border-radius:16px; padding:10px; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
    <circle cx="150" cy="70" r="14" fill="#ff6b35"/>
    <line x1="150" y1="84" x2="150" y2="110" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="150" y1="110" x2="130" y2="118" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="150" y1="110" x2="170" y2="118" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="120" y1="90" x2="180" y2="90" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <circle cx="150" cy="30" r="16" fill="#16b8a6"/>
    <path d="M 150 46 L 150 80" stroke="#ff3d71" stroke-width="3" fill="none" stroke-dasharray="4,4"/>
    <text x="180" y="30" fill="#ff6b35" font-weight="800" font-family="Montserrat, sans-serif" font-size="12">Приём на платформу</text>
  </svg>`,

  'volley-move': `<svg viewBox="0 0 300 150" style="width:100%; max-width:400px; display:block; margin:0 auto; background:#f8faff; border-radius:16px; padding:10px; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
    <circle cx="100" cy="70" r="14" fill="#ff6b35"/>
    <line x1="100" y1="84" x2="100" y2="110" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="100" y1="110" x2="80" y2="118" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="100" y1="110" x2="120" y2="118" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <path d="M 130 70 L 200 70" stroke="#16b8a6" stroke-width="3" fill="none" stroke-dasharray="6,4"/>
    <polygon points="200,70 192,62 192,78" fill="#16b8a6"/>
    <text x="140" y="30" fill="#ff6b35" font-weight="800" font-family="Montserrat, sans-serif" font-size="12">Перемещение</text>
  </svg>`,

  'volley-pass-jump': `<svg viewBox="0 0 300 150" style="width:100%; max-width:400px; display:block; margin:0 auto; background:#f8faff; border-radius:16px; padding:10px; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
    <circle cx="100" cy="50" r="14" fill="#ff6b35"/>
    <line x1="100" y1="64" x2="100" y2="95" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="100" y1="95" x2="80" y2="110" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="100" y1="95" x2="120" y2="110" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <circle cx="150" cy="40" r="14" fill="#16b8a6"/>
    <path d="M 140 60 Q 150 40 160 40" stroke="#ff6b35" stroke-width="3" fill="none"/>
    <path d="M 120 80 L 120 50" stroke="#16b8a6" stroke-width="2" fill="none" stroke-dasharray="4,4"/>
    <text x="180" y="40" fill="#ff6b35" font-weight="800" font-family="Montserrat, sans-serif" font-size="12">Передача в прыжке</text>
  </svg>`,

  'volley-block-group': `<svg viewBox="0 0 300 150" style="width:100%; max-width:400px; display:block; margin:0 auto; background:#f8faff; border-radius:16px; padding:10px; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
    <line x1="20" y1="60" x2="280" y2="60" stroke="#d9e2f2" stroke-width="4" stroke-dasharray="6,4"/>
    <circle cx="90" cy="50" r="12" fill="#16b8a6"/>
    <circle cx="150" cy="50" r="12" fill="#16b8a6"/>
    <circle cx="210" cy="50" r="12" fill="#16b8a6"/>
    <text x="180" y="30" fill="#ff6b35" font-weight="800" font-family="Montserrat, sans-serif" font-size="12">Групповой блок</text>
  </svg>`,

  'volley-tactics': `<svg viewBox="0 0 300 150" style="width:100%; max-width:400px; display:block; margin:0 auto; background:#f8faff; border-radius:16px; padding:10px; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
    <rect x="20" y="20" width="260" height="110" fill="none" stroke="#d9e2f2" stroke-width="2"/>
    <line x1="20" y1="75" x2="280" y2="75" stroke="#d9e2f2" stroke-width="2" stroke-dasharray="6,4"/>
    <circle cx="80" cy="40" r="10" fill="#ff6b35"/>
    <circle cx="140" cy="40" r="10" fill="#ff6b35"/>
    <circle cx="200" cy="40" r="10" fill="#ff6b35"/>
    <circle cx="80" cy="110" r="10" fill="#16b8a6"/>
    <circle cx="140" cy="110" r="10" fill="#16b8a6"/>
    <circle cx="200" cy="110" r="10" fill="#16b8a6"/>
    <text x="120" y="135" fill="#ff6b35" font-weight="800" font-family="Montserrat, sans-serif" font-size="10">Расстановка</text>
  </svg>`,

  'volley-referee': `<svg viewBox="0 0 300 150" style="width:100%; max-width:400px; display:block; margin:0 auto; background:#f8faff; border-radius:16px; padding:10px; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
    <circle cx="150" cy="50" r="18" fill="#ff6b35"/>
    <path d="M 130 40 L 120 30" stroke="#16b8a6" stroke-width="3"/>
    <path d="M 170 40 L 180 30" stroke="#16b8a6" stroke-width="3"/>
    <rect x="130" y="70" width="40" height="30" fill="#16b8a6" rx="4"/>
    <text x="150" y="90" fill="#fff" font-weight="800" font-family="Montserrat, sans-serif" font-size="14" text-anchor="middle">СУДЬЯ</text>
    <text x="150" y="130" fill="#ff6b35" font-weight="800" font-family="Montserrat, sans-serif" font-size="12" text-anchor="middle">Жесты и правила</text>
  </svg>`,

  // ----------------------------------------------------------
  // БАСКЕТБОЛ
  // ----------------------------------------------------------
  'basket-stance': `<svg viewBox="0 0 300 150" style="width:100%; max-width:400px; display:block; margin:0 auto; background:#f8faff; border-radius:16px; padding:10px; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
    <circle cx="100" cy="50" r="14" fill="#ff6b35"/>
    <line x1="100" y1="64" x2="100" y2="90" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="100" y1="90" x2="80" y2="118" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="100" y1="90" x2="120" y2="118" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="100" y1="75" x2="70" y2="80" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="100" y1="75" x2="130" y2="80" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <circle cx="130" cy="82" r="12" fill="#14213d"/>
    <path d="M 160 100 L 160 40" stroke="#16b8a6" stroke-width="2" fill="none" stroke-dasharray="4,4"/>
    <text x="180" y="40" fill="#ff6b35" font-weight="800" font-family="Montserrat, sans-serif" font-size="12">Стойка</text>
    <text x="180" y="55" fill="#14213d" font-weight="600" font-family="Montserrat, sans-serif" font-size="10">Ноги полусогнуты</text>
  </svg>`,

  'basket-move': `<svg viewBox="0 0 300 150" style="width:100%; max-width:400px; display:block; margin:0 auto; background:#f8faff; border-radius:16px; padding:10px; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
    <circle cx="100" cy="70" r="14" fill="#ff6b35"/>
    <line x1="100" y1="84" x2="110" y2="110" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="110" y1="110" x2="90" y2="118" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="110" y1="110" x2="130" y2="118" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <path d="M 140 80 Q 200 60 250 80" stroke="#16b8a6" stroke-width="3" fill="none" stroke-dasharray="6,4"/>
    <polygon points="250,80 242,72 242,88" fill="#16b8a6"/>
    <text x="160" y="40" fill="#ff6b35" font-weight="800" font-family="Montserrat, sans-serif" font-size="12">Передвижение</text>
    <text x="160" y="55" fill="#14213d" font-weight="600" font-family="Montserrat, sans-serif" font-size="10">На полусогнутых</text>
  </svg>`,

  'basket-catch': `<svg viewBox="0 0 300 150" style="width:100%; max-width:400px; display:block; margin:0 auto; background:#f8faff; border-radius:16px; padding:10px; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
    <circle cx="150" cy="50" r="20" fill="#ff6b35"/>
    <path d="M 120 80 L 130 60 L 150 55 L 170 60 L 180 80" stroke="#14213d" stroke-width="5" fill="none" stroke-linecap="round"/>
    <path d="M 150 70 L 150 40" stroke="#16b8a6" stroke-width="3" fill="none" marker-end="url(#arrow-c)"/>
    <defs><marker id="arrow-c" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#16b8a6"/></marker></defs>
    <text x="190" y="50" fill="#ff6b35" font-weight="800" font-family="Montserrat, sans-serif" font-size="12">Ловля</text>
    <text x="190" y="65" fill="#14213d" font-weight="600" font-family="Montserrat, sans-serif" font-size="10">Воронка из кистей</text>
  </svg>`,

  'basket-pass-chest': `<svg viewBox="0 0 300 150" style="width:100%; max-width:400px; display:block; margin:0 auto; background:#f8faff; border-radius:16px; padding:10px; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
    <circle cx="100" cy="60" r="14" fill="#ff6b35"/>
    <line x1="100" y1="74" x2="100" y2="100" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="100" y1="100" x2="80" y2="118" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="100" y1="100" x2="120" y2="118" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="100" y1="85" x2="70" y2="80" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="100" y1="85" x2="130" y2="80" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <circle cx="70" cy="78" r="10" fill="#16b8a6"/>
    <path d="M 140 80 L 240 80" stroke="#16b8a6" stroke-width="3" fill="none" stroke-dasharray="6,4"/>
    <polygon points="240,80 232,72 232,88" fill="#16b8a6"/>
    <text x="160" y="40" fill="#ff6b35" font-weight="800" font-family="Montserrat, sans-serif" font-size="12">От груди</text>
  </svg>`,

  'basket-pass-shoulder': `<svg viewBox="0 0 300 150" style="width:100%; max-width:400px; display:block; margin:0 auto; background:#f8faff; border-radius:16px; padding:10px; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
    <circle cx="100" cy="60" r="14" fill="#ff6b35"/>
    <line x1="100" y1="74" x2="100" y2="100" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="100" y1="100" x2="80" y2="118" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="100" y1="100" x2="120" y2="118" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="100" y1="80" x2="130" y2="60" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <circle cx="140" cy="55" r="10" fill="#16b8a6"/>
    <path d="M 150 60 L 250 60" stroke="#16b8a6" stroke-width="3" fill="none" stroke-dasharray="6,4"/>
    <polygon points="250,60 242,52 242,68" fill="#16b8a6"/>
    <text x="160" y="30" fill="#ff6b35" font-weight="800" font-family="Montserrat, sans-serif" font-size="12">Одной от плеча</text>
  </svg>`,

  'basket-dribble': `<svg viewBox="0 0 300 150" style="width:100%; max-width:400px; display:block; margin:0 auto; background:#f8faff; border-radius:16px; padding:10px; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
    <circle cx="100" cy="50" r="14" fill="#ff6b35"/>
    <line x1="100" y1="64" x2="100" y2="95" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="100" y1="95" x2="80" y2="118" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="100" y1="95" x2="120" y2="118" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="100" y1="75" x2="130" y2="90" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <circle cx="150" cy="100" r="12" fill="#ff6b35"/>
    <path d="M 130 90 L 145 98" stroke="#16b8a6" stroke-width="2" fill="none" stroke-dasharray="3,3"/>
    <path d="M 150 60 L 150 85" stroke="#16b8a6" stroke-width="2" fill="none" stroke-dasharray="4,4"/>
    <text x="170" y="40" fill="#ff6b35" font-weight="800" font-family="Montserrat, sans-serif" font-size="12">Ведение</text>
    <text x="170" y="55" fill="#14213d" font-weight="600" font-family="Montserrat, sans-serif" font-size="10">Кончиками пальцев</text>
  </svg>`,

  'basket-stop-2': `<svg viewBox="0 0 300 150" style="width:100%; max-width:400px; display:block; margin:0 auto; background:#f8faff; border-radius:16px; padding:10px; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
    <circle cx="150" cy="70" r="14" fill="#ff6b35"/>
    <line x1="150" y1="84" x2="150" y2="110" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="150" y1="110" x2="120" y2="118" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="150" y1="110" x2="180" y2="118" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="150" y1="80" x2="120" y2="90" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="150" y1="80" x2="180" y2="90" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <text x="200" y="40" fill="#ff6b35" font-weight="800" font-family="Montserrat, sans-serif" font-size="12">Остановка 2 шагами</text>
    <text x="200" y="55" fill="#14213d" font-weight="600" font-family="Montserrat, sans-serif" font-size="10">1-й длинный, 2-й короткий</text>
  </svg>`,

  'basket-stop-jump': `<svg viewBox="0 0 300 150" style="width:100%; max-width:400px; display:block; margin:0 auto; background:#f8faff; border-radius:16px; padding:10px; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
    <circle cx="150" cy="50" r="14" fill="#ff6b35"/>
    <line x1="150" y1="64" x2="150" y2="95" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="150" y1="95" x2="120" y2="118" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="150" y1="95" x2="180" y2="118" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <path d="M 120 40 L 120 20" stroke="#16b8a6" stroke-width="2" fill="none" marker-end="url(#arrow-sj)"/>
    <path d="M 180 40 L 180 20" stroke="#16b8a6" stroke-width="2" fill="none" marker-end="url(#arrow-sj)"/>
    <defs><marker id="arrow-sj" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#16b8a6"/></marker></defs>
    <text x="200" y="40" fill="#ff6b35" font-weight="800" font-family="Montserrat, sans-serif" font-size="12">Остановка прыжком</text>
  </svg>`,

  'basket-turn': `<svg viewBox="0 0 300 150" style="width:100%; max-width:400px; display:block; margin:0 auto; background:#f8faff; border-radius:16px; padding:10px; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
    <circle cx="150" cy="70" r="14" fill="#ff6b35"/>
    <line x1="150" y1="84" x2="150" y2="110" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="150" y1="110" x2="120" y2="118" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="150" y1="110" x2="180" y2="118" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="150" y1="80" x2="120" y2="90" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="150" y1="80" x2="180" y2="90" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <path d="M 180 70 Q 220 50 230 90 Q 230 120 190 110" stroke="#16b8a6" stroke-width="2" fill="none" stroke-dasharray="4,4"/>
    <text x="200" y="30" fill="#ff6b35" font-weight="800" font-family="Montserrat, sans-serif" font-size="12">Поворот</text>
    <text x="200" y="45" fill="#14213d" font-weight="600" font-family="Montserrat, sans-serif" font-size="10">Опорная нога на месте</text>
  </svg>`,

  'basket-shot': `<svg viewBox="0 0 300 150" style="width:100%; max-width:400px; display:block; margin:0 auto; background:#f8faff; border-radius:16px; padding:10px; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
    <rect x="200" y="20" width="10" height="100" fill="#d9e2f2"/>
    <circle cx="205" cy="50" r="16" fill="none" stroke="#ff6b35" stroke-width="5"/>
    <circle cx="100" cy="80" r="18" fill="#ff6b35"/>
    <path d="M 85 80 Q 100 65 115 80" stroke="#14213d" stroke-width="2" fill="none"/>
    <path d="M 120 80 Q 160 40 190 50" stroke="#16b8a6" stroke-width="3" fill="none" stroke-dasharray="6,4"/>
    <polygon points="190,50 182,42 182,58" fill="#16b8a6"/>
    <text x="50" y="40" fill="#ff6b35" font-weight="800" font-family="Montserrat, sans-serif" font-size="12">Траектория</text>
  </svg>`,

  'basket-feint': `<svg viewBox="0 0 300 150" style="width:100%; max-width:400px; display:block; margin:0 auto; background:#f8faff; border-radius:16px; padding:10px; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
    <circle cx="100" cy="60" r="14" fill="#ff6b35"/>
    <line x1="100" y1="74" x2="100" y2="100" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="100" y1="100" x2="80" y2="118" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="100" y1="100" x2="120" y2="118" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <path d="M 120 80 Q 160 60 180 90 Q 160 120 140 90" stroke="#16b8a6" stroke-width="2" fill="none" stroke-dasharray="4,4"/>
    <circle cx="200" cy="70" r="12" fill="#14213d"/>
    <path d="M 180 70 L 195 70" stroke="#ff3d71" stroke-width="3" fill="none" stroke-dasharray="3,3"/>
    <text x="200" y="40" fill="#ff6b35" font-weight="800" font-family="Montserrat, sans-serif" font-size="12">Финт</text>
    <text x="200" y="55" fill="#14213d" font-weight="600" font-family="Montserrat, sans-serif" font-size="10">Ложное движение</text>
  </svg>`,

  // ----------------------------------------------------------
  // ГАНДБОЛ
  // ----------------------------------------------------------
  'hand-stance': `<svg viewBox="0 0 300 150" style="width:100%; max-width:400px; display:block; margin:0 auto; background:#f8faff; border-radius:16px; padding:10px; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
    <circle cx="100" cy="50" r="14" fill="#ff6b35"/>
    <line x1="100" y1="64" x2="100" y2="90" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="100" y1="90" x2="80" y2="118" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="100" y1="90" x2="120" y2="118" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="100" y1="75" x2="70" y2="80" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="100" y1="75" x2="130" y2="80" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <circle cx="130" cy="82" r="12" fill="#14213d"/>
    <text x="160" y="40" fill="#ff6b35" font-weight="800" font-family="Montserrat, sans-serif" font-size="12">Стойка</text>
    <text x="160" y="55" fill="#14213d" font-weight="600" font-family="Montserrat, sans-serif" font-size="10">Ноги полусогнуты</text>
  </svg>`,

  'hand-move': `<svg viewBox="0 0 300 150" style="width:100%; max-width:400px; display:block; margin:0 auto; background:#f8faff; border-radius:16px; padding:10px; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
    <circle cx="100" cy="70" r="14" fill="#ff6b35"/>
    <line x1="100" y1="84" x2="110" y2="110" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="110" y1="110" x2="90" y2="118" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="110" y1="110" x2="130" y2="118" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <path d="M 140 80 Q 200 60 250 80" stroke="#16b8a6" stroke-width="3" fill="none" stroke-dasharray="6,4"/>
    <polygon points="250,80 242,72 242,88" fill="#16b8a6"/>
    <text x="160" y="40" fill="#ff6b35" font-weight="800" font-family="Montserrat, sans-serif" font-size="12">Перемещение</text>
    <text x="160" y="55" fill="#14213d" font-weight="600" font-family="Montserrat, sans-serif" font-size="10">Приставными шагами</text>
  </svg>`,

  'hand-catch': `<svg viewBox="0 0 300 150" style="width:100%; max-width:400px; display:block; margin:0 auto; background:#f8faff; border-radius:16px; padding:10px; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
    <circle cx="150" cy="50" r="20" fill="#ff6b35"/>
    <path d="M 120 80 L 130 60 L 150 55 L 170 60 L 180 80" stroke="#14213d" stroke-width="5" fill="none" stroke-linecap="round"/>
    <path d="M 150 70 L 150 40" stroke="#16b8a6" stroke-width="3" fill="none" marker-end="url(#arrow-hc)"/>
    <defs><marker id="arrow-hc" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#16b8a6"/></marker></defs>
    <text x="190" y="50" fill="#ff6b35" font-weight="800" font-family="Montserrat, sans-serif" font-size="12">Ловля</text>
    <text x="190" y="65" fill="#14213d" font-weight="600" font-family="Montserrat, sans-serif" font-size="10">Воронка из кистей</text>
  </svg>`,

  'hand-pass-chest': `<svg viewBox="0 0 300 150" style="width:100%; max-width:400px; display:block; margin:0 auto; background:#f8faff; border-radius:16px; padding:10px; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
    <circle cx="100" cy="60" r="14" fill="#ff6b35"/>
    <line x1="100" y1="74" x2="100" y2="100" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="100" y1="100" x2="80" y2="118" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="100" y1="100" x2="120" y2="118" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="100" y1="85" x2="70" y2="80" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="100" y1="85" x2="130" y2="80" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <circle cx="70" cy="78" r="10" fill="#16b8a6"/>
    <path d="M 140 80 L 240 80" stroke="#16b8a6" stroke-width="3" fill="none" stroke-dasharray="6,4"/>
    <polygon points="240,80 232,72 232,88" fill="#16b8a6"/>
    <text x="160" y="40" fill="#ff6b35" font-weight="800" font-family="Montserrat, sans-serif" font-size="12">От груди</text>
  </svg>`,

  'hand-pass-shoulder': `<svg viewBox="0 0 300 150" style="width:100%; max-width:400px; display:block; margin:0 auto; background:#f8faff; border-radius:16px; padding:10px; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
    <circle cx="100" cy="60" r="14" fill="#ff6b35"/>
    <line x1="100" y1="74" x2="100" y2="100" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="100" y1="100" x2="80" y2="118" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="100" y1="100" x2="120" y2="118" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="100" y1="80" x2="130" y2="60" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <circle cx="140" cy="55" r="10" fill="#16b8a6"/>
    <path d="M 150 60 L 250 60" stroke="#16b8a6" stroke-width="3" fill="none" stroke-dasharray="6,4"/>
    <polygon points="250,60 242,52 242,68" fill="#16b8a6"/>
    <text x="160" y="30" fill="#ff6b35" font-weight="800" font-family="Montserrat, sans-serif" font-size="12">Одной от плеча</text>
  </svg>`,

  'hand-dribble': `<svg viewBox="0 0 300 150" style="width:100%; max-width:400px; display:block; margin:0 auto; background:#f8faff; border-radius:16px; padding:10px; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
    <circle cx="100" cy="50" r="14" fill="#ff6b35"/>
    <line x1="100" y1="64" x2="100" y2="95" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="100" y1="95" x2="80" y2="118" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="100" y1="95" x2="120" y2="118" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="100" y1="75" x2="130" y2="90" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <circle cx="150" cy="100" r="12" fill="#ff6b35"/>
    <path d="M 130 90 L 145 98" stroke="#16b8a6" stroke-width="2" fill="none" stroke-dasharray="3,3"/>
    <path d="M 150 60 L 150 85" stroke="#16b8a6" stroke-width="2" fill="none" stroke-dasharray="4,4"/>
    <text x="170" y="40" fill="#ff6b35" font-weight="800" font-family="Montserrat, sans-serif" font-size="12">Ведение</text>
    <text x="170" y="55" fill="#14213d" font-weight="600" font-family="Montserrat, sans-serif" font-size="10">Кончиками пальцев</text>
  </svg>`,

  'hand-stop-2': `<svg viewBox="0 0 300 150" style="width:100%; max-width:400px; display:block; margin:0 auto; background:#f8faff; border-radius:16px; padding:10px; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
    <circle cx="150" cy="70" r="14" fill="#ff6b35"/>
    <line x1="150" y1="84" x2="150" y2="110" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="150" y1="110" x2="120" y2="118" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="150" y1="110" x2="180" y2="118" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="150" y1="80" x2="120" y2="90" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="150" y1="80" x2="180" y2="90" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <text x="200" y="40" fill="#ff6b35" font-weight="800" font-family="Montserrat, sans-serif" font-size="12">Остановка 2 шагами</text>
  </svg>`,

  'hand-stop-jump': `<svg viewBox="0 0 300 150" style="width:100%; max-width:400px; display:block; margin:0 auto; background:#f8faff; border-radius:16px; padding:10px; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
    <circle cx="150" cy="50" r="14" fill="#ff6b35"/>
    <line x1="150" y1="64" x2="150" y2="95" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="150" y1="95" x2="120" y2="118" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="150" y1="95" x2="180" y2="118" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <path d="M 120 40 L 120 20" stroke="#16b8a6" stroke-width="2" fill="none" marker-end="url(#arrow-hsj)"/>
    <path d="M 180 40 L 180 20" stroke="#16b8a6" stroke-width="2" fill="none" marker-end="url(#arrow-hsj)"/>
    <defs><marker id="arrow-hsj" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#16b8a6"/></marker></defs>
    <text x="200" y="40" fill="#ff6b35" font-weight="800" font-family="Montserrat, sans-serif" font-size="12">Остановка прыжком</text>
  </svg>`,

  'hand-turn': `<svg viewBox="0 0 300 150" style="width:100%; max-width:400px; display:block; margin:0 auto; background:#f8faff; border-radius:16px; padding:10px; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
    <circle cx="150" cy="70" r="14" fill="#ff6b35"/>
    <line x1="150" y1="84" x2="150" y2="110" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="150" y1="110" x2="120" y2="118" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="150" y1="110" x2="180" y2="118" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="150" y1="80" x2="120" y2="90" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="150" y1="80" x2="180" y2="90" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <path d="M 180 70 Q 220 50 230 90 Q 230 120 190 110" stroke="#16b8a6" stroke-width="2" fill="none" stroke-dasharray="4,4"/>
    <text x="200" y="30" fill="#ff6b35" font-weight="800" font-family="Montserrat, sans-serif" font-size="12">Поворот</text>
    <text x="200" y="45" fill="#14213d" font-weight="600" font-family="Montserrat, sans-serif" font-size="10">Опорная нога на месте</text>
  </svg>`,

  'hand-shot': `<svg viewBox="0 0 300 150" style="width:100%; max-width:400px; display:block; margin:0 auto; background:#f8faff; border-radius:16px; padding:10px; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
    <rect x="220" y="30" width="10" height="80" fill="#d9e2f2"/>
    <rect x="220" y="30" width="10" height="80" fill="none" stroke="#ff6b35" stroke-width="3"/>
    <circle cx="100" cy="70" r="14" fill="#ff6b35"/>
    <line x1="100" y1="84" x2="100" y2="110" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="100" y1="110" x2="80" y2="118" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="100" y1="110" x2="120" y2="118" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="100" y1="75" x2="70" y2="60" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <circle cx="60" cy="55" r="10" fill="#ff6b35"/>
    <path d="M 120 70 Q 170 30 220 50" stroke="#16b8a6" stroke-width="3" fill="none" stroke-dasharray="6,4"/>
    <polygon points="220,50 212,42 212,58" fill="#16b8a6"/>
    <text x="40" y="30" fill="#ff6b35" font-weight="800" font-family="Montserrat, sans-serif" font-size="12">Бросок по воротам</text>
  </svg>`,

  'hand-feint': `<svg viewBox="0 0 300 150" style="width:100%; max-width:400px; display:block; margin:0 auto; background:#f8faff; border-radius:16px; padding:10px; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
    <circle cx="100" cy="60" r="14" fill="#ff6b35"/>
    <line x1="100" y1="74" x2="100" y2="100" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="100" y1="100" x2="80" y2="118" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="100" y1="100" x2="120" y2="118" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <path d="M 120 80 Q 160 60 180 90 Q 160 120 140 90" stroke="#16b8a6" stroke-width="2" fill="none" stroke-dasharray="4,4"/>
    <circle cx="200" cy="70" r="12" fill="#14213d"/>
    <path d="M 180 70 L 195 70" stroke="#ff3d71" stroke-width="3" fill="none" stroke-dasharray="3,3"/>
    <text x="200" y="40" fill="#ff6b35" font-weight="800" font-family="Montserrat, sans-serif" font-size="12">Финт</text>
    <text x="200" y="55" fill="#14213d" font-weight="600" font-family="Montserrat, sans-serif" font-size="10">Ложное движение</text>
  </svg>`,

  'hand-def-ind': `<svg viewBox="0 0 300 150" style="width:100%; max-width:400px; display:block; margin:0 auto; background:#f8faff; border-radius:16px; padding:10px; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
    <circle cx="150" cy="70" r="14" fill="#ff6b35"/>
    <line x1="150" y1="84" x2="150" y2="110" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="150" y1="110" x2="120" y2="118" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <line x1="150" y1="110" x2="180" y2="118" stroke="#14213d" stroke-width="6" stroke-linecap="round"/>
    <circle cx="100" cy="70" r="14" fill="#16b8a6"/>
    <line x1="100" y1="84" x2="100" y2="110" stroke="#16b8a6" stroke-width="4" stroke-linecap="round"/>
    <line x1="100" y1="110" x2="80" y2="118" stroke="#16b8a6" stroke-width="4" stroke-linecap="round"/>
    <line x1="100" y1="110" x2="120" y2="118" stroke="#16b8a6" stroke-width="4" stroke-linecap="round"/>
    <path d="M 120 60 L 140 60" stroke="#ff3d71" stroke-width="3" fill="none" stroke-dasharray="3,3"/>
    <text x="200" y="40" fill="#ff6b35" font-weight="800" font-family="Montserrat, sans-serif" font-size="12">Защита 1 на 1</text>
  </svg>`,

  'hand-def-group': `<svg viewBox="0 0 300 150" style="width:100%; max-width:400px; display:block; margin:0 auto; background:#f8faff; border-radius:16px; padding:10px; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
    <rect x="20" y="20" width="260" height="110" fill="none" stroke="#d9e2f2" stroke-width="2"/>
    <circle cx="100" cy="60" r="12" fill="#16b8a6"/>
    <circle cx="150" cy="60" r="12" fill="#16b8a6"/>
    <circle cx="200" cy="60" r="12" fill="#16b8a6"/>
    <circle cx="100" cy="100" r="12" fill="#ff6b35"/>
    <circle cx="150" cy="100" r="12" fill="#ff6b35"/>
    <circle cx="200" cy="100" r="12" fill="#ff6b35"/>
    <text x="100" y="140" fill="#ff6b35" font-weight="800" font-family="Montserrat, sans-serif" font-size="10">Групповая защита</text>
  </svg>`,

  'hand-tactics': `<svg viewBox="0 0 300 150" style="width:100%; max-width:400px; display:block; margin:0 auto; background:#f8faff; border-radius:16px; padding:10px; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
    <rect x="20" y="20" width="260" height="110" fill="none" stroke="#d9e2f2" stroke-width="2"/>
    <circle cx="80" cy="40" r="10" fill="#ff6b35"/>
    <circle cx="140" cy="40" r="10" fill="#ff6b35"/>
    <circle cx="200" cy="40" r="10" fill="#ff6b35"/>
    <circle cx="80" cy="110" r="10" fill="#16b8a6"/>
    <circle cx="140" cy="110" r="10" fill="#16b8a6"/>
    <circle cx="200" cy="110" r="10" fill="#16b8a6"/>
    <path d="M 100 60 Q 140 80 180 60" stroke="#16b8a6" stroke-width="2" fill="none" stroke-dasharray="4,4"/>
    <text x="120" y="135" fill="#ff6b35" font-weight="800" font-family="Montserrat, sans-serif" font-size="10">Тактика</text>
  </svg>`
};
// ============================================================
// УЧАЩИМСЯ: ВСЕ НАПРАВЛЕНИЯ
// ============================================================
const STUDENT_DATA = [
  // ----------------------------------------------------------
  // ЛЁГКАЯ АТЛЕТИКА (14 тем)
  // ----------------------------------------------------------
  {
    id: 'st-ath', title: 'Лёгкая атлетика', icon: '🏃‍♂️',
    subtopics: [
      { id: 'ath-uniform', title: 'Равномерный бег (500–3000 м)', description: 'Бег в постоянном темпе без ускорений и замедлений. Применяется для развития общей выносливости.', content: { 'Теория': `<p>Основная задача — научиться поддерживать ровный темп, правильно дышать (вдох носом, выдох ртом), сохранять осанку.</p>`, 'Как выполнять': `<ol><li>Старт с высокого положения.</li><li>Корпус слегка наклонён вперёд, руки согнуты в локтях, работают вдоль туловища.</li><li>Нога ставится на полную стопу или перекатом с пятки на носок.</li><li>Дыхание ритмичное.</li></ol>`, 'Типичные ошибки': `<ul><li>Резкие ускорения и замедления.</li><li>Сбивчивое дыхание.</li><li>Наклон корпуса назад.</li><li>«Шлёпающая» постановка стопы.</li></ul>`, 'Упражнения': `<ul><li>Бег в умеренном темпе на 400–800 м с контролем дыхания.</li><li>Интервальный бег: 200 м быстро, 200 м медленно.</li><li>Бег с изменением темпа по сигналу учителя.</li></ul>` }, challenge: 'Пробеги 400–800 м в умеренном темпе с контролем дыхания.', scheme: SVG_SCHEMES['ath-uniform'] },
      { id: 'ath-high', title: 'Высокий старт', description: 'Применяется на средних и длинных дистанциях (от 400 м и более).', content: { 'Теория': `<p>Позволяет быстро начать бег без использования стартовых колодок.</p>`, 'Как выполнять': `<ol><li>Одна нога у линии старта, другая — на 1–1,5 стопы назад.</li><li>Корпус наклонён вперёд, руки опущены или одна впереди, другая сзади.</li><li>По команде «Марш!» — резкий толчок и стартовый разгон.</li></ol>`, 'Типичные ошибки': `<ul><li>Выпрямление корпуса до начала бега.</li><li>Медленная реакция на команду.</li><li>Неправильная постановка ног.</li></ul>`, 'Упражнения': `<ul><li>Старты из разных положений.</li><li>Бег с высокого старта на 20–30 м.</li><li>Игра «Кто быстрее?» — старт по сигналу.</li></ul>` }, challenge: 'Выполни высокий старт 5 раз с ускорением на 10–20 метров.', scheme: SVG_SCHEMES['ath-high'] },
      { id: 'ath-low', title: 'Низкий старт', description: 'Используется на коротких дистанциях (до 400 м).', content: { 'Теория': `<p>Обеспечивает максимально быстрое начало бега за счёт упора руками о землю и сильного толчка ногами.</p>`, 'Как выполнять': `<ol><li>Упор руками о землю, ноги в стартовых колодках (или без них), корпус параллелен земле.</li><li>По команде «Внимание!» — таз поднимается выше плеч.</li><li>По команде «Марш!» — мощный одновременный толчок обеими ногами.</li></ol>`, 'Типичные ошибки': `<ul><li>Раннее выпрямление корпуса.</li><li>Слабый толчок.</li><li>Неправильная постановка рук.</li></ul>`, 'Упражнения': `<ul><li>Принятие положения низкого старта без колодок.</li><li>Бег с низкого старта на 10–20 м.</li><li>Упражнение «Старт по хлопку».</li></ul>` }, challenge: 'Выполни низкий старт с колодками и пробеги 20 метров.', scheme: SVG_SCHEMES['ath-low'] },
      { id: 'ath-technique', title: 'Техника бега', description: 'Совокупность движений, обеспечивающих эффективное передвижение.', content: { 'Теория': `<p>Включает работу рук, постановку стопы, наклон корпуса, дыхание.</p>`, 'Как выполнять': `<ol><li>Корпус слегка наклонён вперёд, руки согнуты в локтях и двигаются в такт ногам.</li><li>Постановка стопы — на переднюю часть или перекатом.</li><li>Дыхание — ритмичное, глубокое.</li></ol>`, 'Типичные ошибки': `<ul><li>Зажатость плечевого пояса.</li><li>Неправильная работа рук.</li><li>«Шлёпающая» постановка стопы.</li><li>Сбивчивое дыхание.</li></ul>`, 'Упражнения': `<ul><li>Бег с высоким подниманием бедра.</li><li>Бег с захлёстыванием голени.</li><li>Семенящий бег.</li></ul>` }, challenge: 'Пробеги 60 м, контролируя работу рук и постановку стопы.', scheme: SVG_SCHEMES['ath-technique'] },
      { id: 'ath-finish', title: 'Финиширование', description: 'Завершение дистанции с максимальной скоростью.', content: { 'Теория': `<p>Важно не снижать темп до пересечения финишной черты.</p>`, 'Как выполнять': `<ol><li>На последних метрах — ускорение.</li><li>Корпус наклонён вперёд.</li><li>Резкий бросок грудью или плечом на финишную ленту.</li></ol>`, 'Типичные ошибки': `<ul><li>Снижение скорости до финиша.</li><li>Ранний наклон корпуса.</li><li>Потеря координации.</li></ul>`, 'Упражнения': `<ul><li>Бег на 30 м с ускорением на последних 10 м.</li><li>Имитация финиширования на месте.</li><li>Эстафеты с финишным броском.</li></ul>` }, challenge: 'Попробуй финишировать «броском грудью» 3 раза.', scheme: SVG_SCHEMES['ath-finish'] },
      { id: 'ath-sprint', title: 'Бег 30, 60, 100, 200, 400 м', description: 'Спринтерские дистанции, требующие максимальной скорости и техники.', content: { 'Теория': `<p>Включает старт, стартовый разгон, бег по дистанции, финиширование.</p>`, 'Как выполнять': `<ol><li>Старт (низкий или высокий).</li><li>Быстрый разгон.</li><li>Поддержание максимальной скорости.</li><li>Финишный бросок.</li></ol>`, 'Типичные ошибки': `<ul><li>Медленный старт.</li><li>Неправильный разгон.</li><li>Потеря техники на дистанции.</li><li>Раннее замедление.</li></ul>`, 'Упражнения': `<ul><li>Повторный бег на 30–60 м с максимальной скоростью.</li><li>Бег с ускорением на 20–30 м.</li><li>Эстафеты на короткие дистанции.</li></ul>` }, challenge: 'Пробеги 30 м на максимальной скорости, запиши время.', scheme: SVG_SCHEMES['ath-sprint'] },
      { id: 'ath-shuttle', title: 'Челночный бег', description: 'Бег с резкими разворотами на коротких отрезках (обычно 3×10 м).', content: { 'Теория': `<p>Развивает скоростную выносливость, координацию, ловкость.</p>`, 'Как выполнять': `<ol><li>Быстрый бег до отметки.</li><li>Резкий разворот с касанием рукой пола.</li><li>Бег обратно.</li></ol>`, 'Типичные ошибки': `<ul><li>Медленный разворот.</li><li>Потеря равновесия.</li><li>Неправильная постановка ног.</li></ul>`, 'Упражнения': `<ul><li>Челночный бег 3×10 м.</li><li>Челночный бег 4×9 м.</li><li>Игра «Змейка» с резкими поворотами.</li></ul>` }, challenge: 'Пробеги челночный бег 3×10 м, записывая время.', scheme: SVG_SCHEMES['ath-shuttle'] },
      { id: 'ath-relay', title: 'Эстафетный бег', description: 'Командный бег с передачей эстафетной палочки.', content: { 'Теория': `<p>Важно соблюдать зону передачи, не ронять палочку, правильно принимать и передавать.</p>`, 'Как выполнять': `<ol><li>Принимающий начинает разбег заранее.</li><li>Передающий подаёт палочку снизу или сверху в 20-метровой зоне.</li></ol>`, 'Типичные ошибки': `<ul><li>Потеря палочки.</li><li>Передача вне зоны.</li><li>Несогласованность действий.</li></ul>`, 'Упражнения': `<ul><li>Передача эстафетной палочки на месте.</li><li>Эстафеты 4×30 м.</li><li>Встречная эстафета.</li></ul>` }, challenge: 'Передай эстафетную палочку в паре 10 раз без ошибок.', scheme: SVG_SCHEMES['ath-relay'] },
      { id: 'ath-jump', title: 'Прыжок в длину с места', description: 'Прыжок с двух ног на максимальное расстояние.', content: { 'Теория': `<p>Важно мощное отталкивание и правильная координация движений.</p>`, 'Как выполнять': `<ol><li>Глубокий присед, мах руками назад.</li><li>Резкий взмах вперёд и толчок ногами.</li><li>Полёт с выносом ног вперёд.</li><li>Приземление на обе ноги с перекатом.</li></ol>`, 'Типичные ошибки': `<ul><li>Слабый толчок.</li><li>Неправильный мах руками.</li><li>Приземление на одну ногу.</li></ul>`, 'Упражнения': `<ul><li>Прыжки с места на дальность.</li><li>Прыжки через скакалку.</li><li>Прыжки с доставанием предмета рукой.</li></ul>` }, challenge: 'Сделай 3 подхода по 10 прыжков в длину.', scheme: SVG_SCHEMES['ath-jump'] },
      { id: 'ath-jump-run', title: 'Прыжок в длину с разбега', description: 'Прыжок с разбега на максимальное расстояние.', content: { 'Теория': `<p>Требует точного попадания на брусок, мощного отталкивания, координации в полёте и рационального приземления.</p>`, 'Как выполнять': `<ol><li>Разбег (22–24 шага).</li><li>Попадание на брусок.</li><li>Мощный толчок.</li><li>Полёт (способ «согнув ноги», «прогнувшись» или «ножницы»).</li><li>Приземление.</li></ol>`, 'Типичные ошибки': `<ul><li>Недолёт или перелёт за брусок.</li><li>Слабый толчок.</li><li>Неправильное приземление.</li></ul>`, 'Упражнения': `<ul><li>Прыжки с короткого разбега.</li><li>Прыжки с доставанием предмета в полёте.</li><li>Прыжки через барьеры.</li></ul>` }, challenge: 'Выполни прыжок в длину с разбега (8–10 шагов).', scheme: SVG_SCHEMES['ath-jump-run'] },
      { id: 'ath-throw', title: 'Метание малого мяча', description: 'Метание мяча (150 г) на дальность или в цель.', content: { 'Теория': `<p>Важно правильное держание, замах, скрестный шаг, финальное усилие.</p>`, 'Как выполнять': `<ol><li>Держание мяча фалангами пальцев.</li><li>Замах.</li><li>Скрестный шаг.</li><li>Резкий бросок с хлёстом кисти.</li></ol>`, 'Типичные ошибки': `<ul><li>Неправильный хват.</li><li>Слабый замах.</li><li>Отсутствие скрестного шага.</li><li>Бросок только рукой.</li></ul>`, 'Упражнения': `<ul><li>Метание мяча в цель с 6–10 м.</li><li>Метание мяча на дальность.</li><li>Метание с места и с шага.</li></ul>` }, challenge: 'Сделай 10 бросков мяча в стену с правильной техникой.', scheme: SVG_SCHEMES['ath-throw'] },
      { id: 'ath-grenade', title: 'Метание гранаты', description: 'Метание гранаты (500/700 г) на дальность.', content: { 'Теория': `<p>Техника схожа с метанием копья, но требует большей силы и координации.</p>`, 'Как выполнять': `<ol><li>Держание за рукоятку.</li><li>Разбег.</li><li>Скрестный шаг.</li><li>Финальное усилие с хлёстом кисти и полным разгибанием руки.</li></ol>`, 'Типичные ошибки': `<ul><li>Неправильный хват.</li><li>Слабый разбег.</li><li>Отсутствие хлёста кисти.</li><li>Преждевременное отпускание снаряда.</li></ul>`, 'Упражнения': `<ul><li>Метание гранаты с места.</li><li>Метание гранаты с разбега.</li><li>Метание в сектор на дальность.</li></ul>` }, challenge: 'Выполни 5 бросков гранаты с места на дальность.', scheme: SVG_SCHEMES['ath-grenade'] },
      { id: 'ath-multi', title: 'Многоскоки', description: 'Развитие силы отталкивания и выносливости.', content: { 'Теория': `<p>Прыжки с ноги на ногу с активным махом свободной ноги вперёд-вверх.</p>`, 'Как выполнять': `<ol><li>Корпус прямой.</li><li>Руки работают как при беге.</li><li>Активный мах свободной ногой.</li></ol>`, 'Типичные ошибки': `<ul><li>Приземление на прямые ноги.</li><li>Слабый мах.</li></ul>`, 'Упражнения': `<ul><li>Многоскоки на 20 м.</li><li>Многоскоки через препятствия.</li><li>Прыжки на одной ноге.</li></ul>` }, challenge: 'Пройди дистанцию 30 метров многоскоками.', scheme: SVG_SCHEMES['ath-multi'] },
      { id: 'ath-medball', title: 'Метание набивного мяча', description: 'Развитие силы спины и рук, гибкости плечевого пояса.', content: { 'Теория': `<p>Упражнения с набивным мячом развивают силу и координацию.</p>`, 'Как выполнять': `<ol><li><strong>Из-за головы (сидя):</strong> мяч за головой, резкий бросок вперёд-вверх.</li><li><strong>Из-за головы (стоя):</strong> толчок двумя руками от груди или из-за головы с участием ног.</li><li><strong>Назад через голову:</strong> стоя спиной к цели, бросок через голову назад.</li></ol>`, 'Типичные ошибки': `<ul><li>Слабый мах руками.</li><li>Бросок только руками, без работы ног.</li></ul>`, 'Упражнения': `<ul><li>Броски набивного мяча из-за головы.</li><li>Броски от груди.</li><li>Броски назад через голову.</li></ul>` }, challenge: 'Выполни 10 бросков набивного мяча из-за головы.', scheme: SVG_SCHEMES['ath-medball'] }
    ]
  },

  // ----------------------------------------------------------
  // ГИМНАСТИКА (12 тем)
  // ----------------------------------------------------------
  {
    id: 'st-gym', title: 'Гимнастика', icon: '🤸‍♂️',
    subtopics: [
      { id: 'gym-oru', title: 'ОРУ с предметами', description: 'Общеразвивающие упражнения с гимнастическими палками, мячами, обручами, скакалками.', content: { 'Теория': `<p>Развивают все основные группы мышц, улучшают осанку, координацию движений. Предметы помогают контролировать правильность выполнения и добавляют разнообразие.</p>`, 'Как выполнять': `<p>Упражнения выполняются под счёт учителя, с соблюдением правильной осанки. Например: с палкой — повороты туловища, наклоны, приседания; с мячом — передачи, броски, перекаты; со скакалкой — прыжки различными способами.</p>`, 'Типичные ошибки': `<ul><li>Неправильная осанка.</li><li>Резкие движения.</li><li>Потеря предмета.</li><li>Несогласованность движений рук и ног.</li></ul>`, 'Упражнения': `<ul><li>Приседания с гимнастической палкой на плечах.</li><li>Повороты туловища с мячом в руках.</li><li>Прыжки через скакалку на двух ногах.</li><li>Наклоны вперёд с обручем.</li></ul>` }, challenge: 'Выполни комплекс ОРУ с предметом (палка, мяч или скакалка) 3 раза.', scheme: SVG_SCHEMES['gym-oru'] },
      { id: 'gym-group', title: 'Группировка', description: 'Согнутое положение тела, при котором колени подтянуты к груди, локти прижаты к туловищу, спина округлена.', content: { 'Теория': `<p>Базовое подводящее упражнение для перекатов и кувырков. Развивает координацию и умение контролировать тело.</p>`, 'Как выполнять': `<p>Из положения сидя или лёжа на спине быстро подтянуть колени к груди, обхватить их руками, голову наклонить вперёд, спину округлить.</p>`, 'Типичные ошибки': `<ul><li>Откинутая назад голова.</li><li>Неплотная группировка.</li><li>Разведённые или слишком узко поставленные ноги.</li></ul>`, 'Упражнения': `<ul><li>Группировка из положения сидя.</li><li>Группировка из положения лёжа на спине.</li><li>Перекат назад-вперёд в группировке.</li></ul>` }, challenge: 'Выполни 3 кувырка вперед с правильной группировкой.', scheme: SVG_SCHEMES['gym-group'] },
      { id: 'gym-roll', title: 'Перекаты', description: 'Вращательные движения тела с последовательным касанием опоры без переворачивания через голову.', content: { 'Теория': `<p>Подводящие упражнения к кувыркам, развивают координацию и вестибулярный аппарат.</p>`, 'Как выполнять': `<p>Из упора присев или лёжа на спине сгруппироваться и перекатиться назад или вперёд, касаясь опоры последовательно разными частями тела.</p>`, 'Типичные ошибки': `<ul><li>Отсутствие группировки.</li><li>Неправильная постановка рук.</li><li>Медленное выполнение.</li></ul>`, 'Упражнения': `<ul><li>Перекат назад из упора присев в упор присев.</li><li>Перекат вперёд из группировки лёжа на спине.</li><li>Перекаты в стороны из упора стоя на коленях.</li></ul>` }, challenge: 'Выполни перекат назад-вперёд 5 раз подряд.', scheme: SVG_SCHEMES['gym-roll'] },
      { id: 'gym-fwd', title: 'Кувырок вперёд', description: 'Вращательное движение тела с переворачиванием через голову вперёд.', content: { 'Теория': `<p>Развивает смелость, координацию, умение группироваться и страховать себя при падении.</p>`, 'Как выполнять': `<p>Из упора присев поставить руки на пол перед собой, наклонить голову вперёд, оттолкнуться ногами и перекатиться через голову, сгруппироваться и прийти в упор присев.</p>`, 'Типичные ошибки': `<ul><li>Опора руками близко к ногам.</li><li>Отсутствие группировки.</li><li>Медленное переворачивание.</li><li>Неправильная постановка рук.</li></ul>`, 'Упражнения': `<ul><li>Кувырок вперёд из упора присев.</li><li>Два-три кувырка вперёд слитно.</li><li>Кувырок вперёд с возвышения (горки).</li></ul>` }, challenge: 'Выполни 3 кувырка вперёд слитно.', scheme: SVG_SCHEMES['gym-fwd'] },
      { id: 'gym-back', title: 'Кувырок назад', description: 'Вращательное движение тела с переворачиванием через голову назад.', content: { 'Теория': `<p>Развивает координацию, умение контролировать тело в пространстве, смелость.</p>`, 'Как выполнять': `<p>Из упора присев подать плечи вперёд, опереться руками о пол за головой, оттолкнуться руками и перекатиться назад через голову, сгруппироваться и прийти в упор присев.</p>`, 'Типичные ошибки': `<ul><li>Неправильная постановка рук.</li><li>Отсутствие группировки.</li><li>Медленное переворачивание.</li><li>Опора на затылок.</li></ul>`, 'Упражнения': `<ul><li>Кувырок назад из упора присев.</li><li>Кувырок назад с помощью учителя.</li><li>Кувырок назад по наклонной поверхности.</li></ul>` }, challenge: 'Выполни кувырок назад 3 раза.', scheme: SVG_SCHEMES['gym-back'] },
      { id: 'gym-stand', title: 'Стойка на лопатках', description: 'Стойка вверх ногами с опорой на лопатки, затылок и локти, ноги выпрямлены вверх.', content: { 'Теория': `<p>Развивает силу мышц спины и пресса, координацию, умение удерживать равновесие.</p>`, 'Как выполнять': `<p>Из упора присев перекат назад, в момент касания лопатками пола подставить руки под поясницу, выпрямить ноги вверх.</p>`, 'Типичные ошибки': `<ul><li>Сгибание ног.</li><li>Неправильное положение рук.</li><li>Отклонение туловища от вертикали.</li></ul>`, 'Упражнения': `<ul><li>Стойка на лопатках с согнутыми ногами.</li><li>Стойка на лопатках с прямыми ногами.</li><li>Перекат из стойки на лопатках в упор присев.</li></ul>` }, challenge: 'Удерживай «берёзку» 15 секунд.', scheme: SVG_SCHEMES['gym-stand'] },
      { id: 'gym-bridge', title: 'Мост', description: 'Дугообразное прогнутое положение тела спиной к опоре.', content: { 'Теория': `<p>Развивает гибкость позвоночника, силу мышц спины и плечевого пояса.</p>`, 'Как выполнять': `<p>Лечь на спину, согнуть ноги и поставить стопы ближе к ягодицам, руки поставить ладонями у плеч, одновременно выпрямить руки и ноги, прогнуться в спине.</p>`, 'Типичные ошибки': `<ul><li>Согнутые ноги.</li><li>Неправильная постановка рук.</li><li>Недостаточный прогиб.</li><li>Голова наклонена вперёд.</li></ul>`, 'Упражнения': `<ul><li>Мост из положения лёжа на спине.</li><li>Мост из положения стоя с помощью.</li><li>Покачивания вперёд-назад в положении мост.</li></ul>` }, challenge: 'Сделай «мост» 3 раза подряд.', scheme: SVG_SCHEMES['gym-bridge'] },
      { id: 'gym-swallow', title: 'Ласточка', description: 'Равновесие на одной ноге с наклоном туловища вперёд и отведением другой ноги назад, руки в стороны.', content: { 'Теория': `<p>Развивает равновесие, координацию, укрепляет мышцы ног и спины.</p>`, 'Как выполнять': `<p>Стоя на одной ноге, наклонить туловище вперёд, отвести другую ногу назад, руки развести в стороны, удерживать положение.</p>`, 'Типичные ошибки': `<ul><li>Потеря равновесия.</li><li>Согнутая опорная нога.</li><li>Неправильное положение рук.</li></ul>`, 'Упражнения': `<ul><li>Удержание положения «ласточка» на время.</li><li>Переход из основной стойки в «ласточку» и обратно.</li><li>«Ласточка» с закрытыми глазами.</li></ul>` }, challenge: 'Удерживай «ласточку» 10 секунд.', scheme: SVG_SCHEMES['gym-swallow'] },
      { id: 'gym-wheel', title: 'Колесо', description: 'Переворот в сторону с опорой на руки и ноги, тело проходит через вертикальную плоскость.', content: { 'Теория': `<p>Развивает смелость, координацию, умение управлять телом в пространстве.</p>`, 'Как выполнять': `<p>Из стойки сделать шаг в сторону, поставить одноимённую руку на пол, махом другой ноги и толчком опорной выйти в стойку на руках, затем опустить ноги поочерёдно.</p>`, 'Типичные ошибки': `<ul><li>Неправильная постановка рук.</li><li>Недостаточный мах ногой.</li><li>Потеря равновесия.</li></ul>`, 'Упражнения': `<ul><li>Стойка на руках с помощью.</li><li>Махи ногами у стены.</li><li>Колесо с помощью учителя.</li></ul>` }, challenge: 'Выполни «колесо» с помощью учителя 3 раза.', scheme: SVG_SCHEMES['gym-wheel'] },
      { id: 'gym-head', title: 'Стойка на голове', description: 'Стойка вверх ногами с опорой на голову и руки.', content: { 'Теория': `<p>Развивает силу, координацию, умение удерживать равновесие, укрепляет мышцы шеи и плечевого пояса.</p>`, 'Как выполнять': `<p>Поставить руки и голову треугольником, перенести вес тела на руки, поднять ноги вверх, выпрямить их.</p>`, 'Типичные ошибки': `<ul><li>Неправильная постановка головы и рук.</li><li>Перенос веса на голову.</li><li>Падение.</li></ul>`, 'Упражнения': `<ul><li>Стойка на голове с согнутыми ногами.</li><li>Стойка на голове с помощью учителя.</li><li>Упражнения на укрепление мышц шеи и рук.</li></ul>` }, challenge: 'Попробуй стойку на голове с помощью учителя.', scheme: SVG_SCHEMES['gym-head'] },
      { id: 'gym-hands', title: 'Стойка на руках', description: 'Стойка вверх ногами с опорой на руки.', content: { 'Теория': `<p>Развивает силу рук, плечевого пояса, координацию, умение удерживать равновесие.</p>`, 'Как выполнять': `<p>Из упора присев махом одной и толчком другой выйти в стойку на руках, руки выпрямлены, тело вытянуто.</p>`, 'Типичные ошибки': `<ul><li>Согнутые руки.</li><li>Недостаточный мах ногой.</li><li>Падение.</li></ul>`, 'Упражнения': `<ul><li>Стойка на руках у стены.</li><li>Стойка на руках с помощью.</li><li>Махи ногами в стойке на руках.</li></ul>` }, challenge: 'Удерживай стойку на руках у стены 5 секунд.', scheme: SVG_SCHEMES['gym-hands'] },
      { id: 'gym-rope', title: 'Лазание по канату', description: 'Перемещение вверх по канату с помощью рук и ног.', content: { 'Теория': `<p>Развивает силу рук, ног, спины, координацию, выносливость.</p>`, 'Как выполнять': `<p>Захватить канат руками и ногами, подтягиваться руками и отталкиваться ногами, подниматься вверх.</p>`, 'Типичные ошибки': `<ul><li>Слабый захват.</li><li>Недостаточная работа ног.</li><li>Быстрое утомление рук.</li></ul>`, 'Упражнения': `<ul><li>Лазание по канату в три приёма.</li><li>Вис на канате на время.</li><li>Подтягивания на канате.</li></ul>` }, challenge: 'Залезь по канату на 2 метра (со страховкой).', scheme: SVG_SCHEMES['gym-rope'] }
    ]
  },

  // ----------------------------------------------------------
  // ЛЫЖНАЯ ПОДГОТОВКА (9 тем)
  // ----------------------------------------------------------
  {
    id: 'st-ski', title: 'Лыжная подготовка', icon: '🎿',
    subtopics: [
      { id: 'ski-classic', title: 'Попеременный двухшажный ход', description: 'Основной классический лыжный ход, применяется на равнине, пологих подъёмах и спусках.', content: { 'Теория': `<p>В цикле — два скользящих шага и попеременное отталкивание палками. Развивает координацию, выносливость, умение чередовать работу рук и ног. Является базой для освоения других ходов.</p>`, 'Как выполнять': `<p>Скользить на одной лыже, одновременно отталкиваясь противоположной рукой; смена ног и рук — поочерёдно, как при ходьбе.</p>`, 'Типичные ошибки': `<ul><li>Несогласованность движений рук и ног.</li><li>Отсутствие скольжения.</li><li>Неправильная постановка палок.</li></ul>`, 'Упражнения': `<ul><li>Имитация хода на месте без лыж.</li><li>Ходьба на лыжах с акцентом на скольжение.</li><li>Выполнение хода на равнине и пологом подъёме.</li></ul>` }, challenge: 'Пройди 100 метров попеременным двухшажным ходом.', scheme: SVG_SCHEMES['ski-classic'] },
      { id: 'ski-bez', title: 'Одновременный бесшажный ход', description: 'Применяется на равнине и пологих спусках при хорошем скольжении. Отталкивание только руками, ноги скользят вместе.', content: { 'Теория': `<p>Развивает силу рук, плечевого пояса, координацию, умение эффективно использовать палки.</p>`, 'Как выполнять': `<p>Скользить на двух лыжах, одновременно отталкиваясь обеими палками, туловище наклонено вперёд, руки выпрямляются назад.</p>`, 'Типичные ошибки': `<ul><li>Недостаточный наклон туловища.</li><li>Слабое отталкивание.</li><li>Несогласованность движений рук.</li></ul>`, 'Упражнения': `<ul><li>Имитация хода на месте с палками.</li><li>Ход на лыжах только с работой рук.</li><li>Выполнение хода на раскатанной лыжне.</li></ul>` }, challenge: 'Пройди 50 метров одновременным бесшажным ходом.', scheme: SVG_SCHEMES['ski-bez'] },
      { id: 'ski-odn', title: 'Одновременный одношажный ход', description: 'Применяется на равнине и спусках для развития скорости. В цикле — один скользящий шаг и одновременное отталкивание палками.', content: { 'Теория': `<p>Развивает скорость, силу, координацию, умение быстро чередовать движения.</p>`, 'Как выполнять': `<p>Скользящий шаг одной ногой с одновременным отталкиванием палками, затем смена ноги.</p>`, 'Типичные ошибки': `<ul><li>Несогласованность движений.</li><li>Слабый толчок.</li><li>Неправильная постановка палок.</li></ul>`, 'Упражнения': `<ul><li>Имитация хода на месте.</li><li>Выполнение хода на равнине и пологом спуске.</li><li>Ускорения на коротких отрезках.</li></ul>` }, challenge: 'Пройди 100 метров одновременным одношажным ходом.', scheme: SVG_SCHEMES['ski-odn'] },
      { id: 'ski-dva', title: 'Одновременный двухшажный ход', description: 'Применяется на равнине и пологих спусках. В цикле — два скользящих шага и одновременное отталкивание палками.', content: { 'Теория': `<p>Развивает выносливость, координацию, умение чередовать длинные скольжения и мощное отталкивание.</p>`, 'Как выполнять': `<p>Два скользящих шага с одновременным отталкиванием палками в конце второго шага.</p>`, 'Типичные ошибки': `<ul><li>Несогласованность движений.</li><li>Слабый толчок.</li><li>Неправильная постановка палок.</li></ul>`, 'Упражнения': `<ul><li>Имитация хода на месте.</li><li>Выполнение хода на равнине и спуске.</li><li>Комбинации с другими ходами.</li></ul>` }, challenge: 'Пройди 100 метров одновременным двухшажным ходом.', scheme: SVG_SCHEMES['ski-dva'] },
      { id: 'ski-up', title: 'Подъёмы на лыжах', description: 'Способы преодоления подъёмов: «ёлочка», «полуёлочка», «лесенка».', content: { 'Теория': `<p>Развивают силу ног, координацию, умение выбирать оптимальный способ в зависимости от крутизны склона.</p>`, 'Как выполнять': `<ul><li>«Ёлочка» — лыжи ставятся «V»-образно, носки врозь, шаг в сторону.</li><li>«Полуёлочка» — одна лыжа прямо, другая в сторону.</li><li>«Лесенка» — боком, приставными шагами.</li></ul>`, 'Типичные ошибки': `<ul><li>Недостаточный разворот лыж.</li><li>Потеря равновесия.</li><li>Проскальзывание.</li></ul>`, 'Упражнения': `<ul><li>Отработка каждого способа на учебном склоне.</li><li>Преодоление подъёма разными способами.</li></ul>` }, challenge: 'Поднимись в горку «ёлочкой» 3 раза.', scheme: SVG_SCHEMES['ski-up'] },
      { id: 'ski-down', title: 'Спуски на лыжах', description: 'Спуски в высокой, средней и низкой стойках.', content: { 'Теория': `<p>Развивают равновесие, координацию, умение контролировать скорость и положение тела.</p>`, 'Как выполнять': `<ul><li>Высокая стойка — ноги слегка согнуты, туловище прямо.</li><li>Средняя стойка — колени согнуты сильнее, туловище наклонено вперёд.</li><li>Низкая стойка — глубокое приседание, туловище наклонено вперёд.</li></ul>`, 'Типичные ошибки': `<ul><li>Потеря равновесия.</li><li>Неправильная стойка.</li><li>Избыточное напряжение.</li></ul>`, 'Упражнения': `<ul><li>Спуски в разных стойках.</li><li>Изменение стойки во время спуска.</li></ul>` }, challenge: 'Спустись с горки в средней стойке.', scheme: SVG_SCHEMES['ski-down'] },
      { id: 'ski-brake', title: 'Торможение на лыжах', description: 'Основные способы — «плуг», «упор», «падение».', content: { 'Теория': `<p>Развивают умение быстро снижать скорость, контролировать движение, обеспечивают безопасность.</p>`, 'Как выполнять': `<ul><li>«Плуг» — пятки лыж разводятся в стороны, носки вместе, колени согнуты.</li><li>«Упор» — одна лыжа ставится поперёк движения, другая продолжает скольжение.</li></ul>`, 'Типичные ошибки': `<ul><li>Недостаточный разворот лыж.</li><li>Потеря равновесия.</li><li>Неправильное распределение веса.</li></ul>`, 'Упражнения': `<ul><li>Отработка торможения «плугом» на пологом склоне.</li><li>Торможение «упором» на учебном склоне.</li></ul>` }, challenge: 'Спустись с горки и затормози «плугом».', scheme: SVG_SCHEMES['ski-brake'] },
      { id: 'ski-turn', title: 'Повороты на лыжах', description: 'Повороты переступанием, «плугом», «упором», на параллельных лыжах.', content: { 'Теория': `<p>Развивают координацию, равновесие, умение быстро менять направление движения.</p>`, 'Как выполнять': `<ul><li>Переступанием — перенос веса на одну лыжу, другая приставляется.</li><li>«Плугом» — разведение пяток, перенос веса на внешнюю лыжу.</li><li>«Углом» — одна лыжа ставится поперёк движения.</li></ul>`, 'Типичные ошибки': `<ul><li>Потеря равновесия.</li><li>Неправильный перенос веса.</li><li>Недостаточный разворот лыж.</li></ul>`, 'Упражнения': `<ul><li>Повороты переступанием на месте и в движении.</li><li>Повороты «плугом» и «упором» на склоне.</li><li>Комбинации поворотов на учебной трассе.</li></ul>` }, challenge: 'Выполни поворот переступанием 5 раз.', scheme: SVG_SCHEMES['ski-turn'] },
      { id: 'ski-step', title: 'Ступающий шаг', description: 'Для подъёма в гору или рыхлого снега.', content: { 'Теория': `<p>Базовая техника передвижения на лыжах, используется как подводящее упражнение.</p>`, 'Как выполнять': `<p>Лыжа ставится на снег всей подошвой, вес переносится на неё, затем вторая лыжа подтягивается к первой. Палки используются для опоры.</p>`, 'Типичные ошибки': `<ul><li>Волок лыж по снегу.</li><li>Отсутствие переноса веса.</li></ul>`, 'Упражнения': `<ul><li>Ступающий шаг на 50 м.</li><li>Ступающий шаг в гору.</li></ul>` }, challenge: 'Пройди ступающим шагом 50 метров.', scheme: SVG_SCHEMES['ski-step'] }
    ]
  },

  // ----------------------------------------------------------
  // ФУТБОЛ (11 тем)
  // ----------------------------------------------------------
  {
    id: 'st-football', title: 'Футбол', icon: '⚽',
    subtopics: [
      { id: 'foot-pass-in', title: 'Передача мяча внутренней стороной стопы', description: 'Самый точный и контролируемый способ передачи мяча на короткие и средние дистанции.', content: { 'Теория': `<p>Передача внутренней стороной стопы позволяет максимально увеличить площадь контакта с мячом, что обеспечивает точность и мягкость паса. Применяется для передач партнёру на 5–20 метров.</p>`, 'Как выполнять': `<ol><li>Опорная нога ставится сбоку от мяча, носок направлен в сторону передачи.</li><li>Бьющая нога разворачивается носком наружу, внутренняя сторона стопы полностью соприкасается с мячом.</li><li>Корпус слегка наклонён вперёд, взгляд направлен на партнёра.</li><li>В момент касания мяча нога должна быть напряжённой, но не жёсткой.</li></ol>`, 'Типичные ошибки': `<ul><li>Опорная нога слишком далеко или близко к мячу.</li><li>Носок бьющей ноги не развёрнут наружу.</li><li>Слабый или чрезмерно сильный удар.</li><li>Потеря равновесия.</li></ul>`, 'Упражнения': `<ul><li>Передачи в парах на месте и в движении.</li><li>Передачи на точность в ворота или по мишеням.</li><li>Передачи в одно касание.</li><li>Игра в «квадрате» с акцентом на передачи внутренней стороной стопы.</li></ul>` }, challenge: 'Сделай 10 точных передач в паре внутренней стороной стопы.', scheme: SVG_SCHEMES['foot-pass-in'] },
      { id: 'foot-pass-out', title: 'Передача мяча внешней стороной стопы', description: 'Используется для неожиданных, резаных передач, обхода соперника, передачи на среднюю дистанцию.', content: { 'Теория': `<p>Внешняя сторона стопы позволяет придать мячу вращение и изменить траекторию, что затрудняет перехват соперником.</p>`, 'Как выполнять': `<ol><li>Опорная нога ставится сбоку от мяча.</li><li>Бьющая нога разворачивается носком внутрь, внешняя сторона стопы соприкасается с мячом.</li><li>Корпус слегка наклонён в сторону передачи.</li><li>В момент удара нога напряжена, движение хлёсткое.</li></ol>`, 'Типичные ошибки': `<ul><li>Неправильный разворот стопы.</li><li>Слабый контакт с мячом.</li><li>Потеря направления передачи.</li><li>Недостаточная амплитуда движения.</li></ul>`, 'Упражнения': `<ul><li>Передачи внешней стороной стопы в парах.</li><li>Передачи на точность в движении.</li><li>Игра с ограничением касаний (только внешней стороной стопы).</li><li>Эстафеты с передачами внешней стороной стопы.</li></ul>` }, challenge: 'Выполни 10 передач внешней стороной стопы в парах.', scheme: SVG_SCHEMES['foot-pass-out'] },
      { id: 'foot-pass-lift', title: 'Передача мяча подъёмом', description: 'Применяется для длинных и мощных передач, перевода мяча на другой фланг, начала атаки.', content: { 'Теория': `<p>Передача подъёмом позволяет придать мячу большую силу и дальность, но требует высокой точности и координации.</p>`, 'Как выполнять': `<ol><li>Опорная нога ставится чуть позади мяча.</li><li>Бьющая нога отводится назад, затем резко выносится вперёд.</li><li>Контакт с мячом осуществляется верхней частью подъёма.</li><li>Корпус наклонён вперёд, взгляд направлен на цель.</li></ol>`, 'Типичные ошибки': `<ul><li>Опорная нога слишком далеко от мяча.</li><li>Неправильный угол наклона корпуса.</li><li>Слабый или слишком сильный удар.</li><li>Потеря равновесия.</li></ul>`, 'Упражнения': `<ul><li>Передачи подъёмом на дальность.</li><li>Передачи на точность в ворота.</li><li>Передачи после ведения мяча.</li><li>Игра с длинными передачами.</li></ul>` }, challenge: 'Выполни 5 длинных передач подъёмом.', scheme: SVG_SCHEMES['foot-pass-lift'] },
      { id: 'foot-pass-toe', title: 'Передача мяча носком', description: 'Используется для неожиданных, коротких передач, отбора мяча у соперника.', content: { 'Теория': `<p>Передача носком позволяет быстро и неожиданно отдать мяч, но менее точна и требует хорошей координации.</p>`, 'Как выполнять': `<ol><li>Опорная нога ставится сбоку от мяча.</li><li>Бьющая нога резко выносится вперёд, контакт — носком.</li><li>Корпус слегка наклонён вперёд.</li></ol>`, 'Типичные ошибки': `<ul><li>Слабый контакт с мячом.</li><li>Потеря направления передачи.</li><li>Недостаточная амплитуда движения.</li></ul>`, 'Упражнения': `<ul><li>Передачи носком в парах.</li><li>Передачи на точность в движении.</li><li>Игра с ограничением касаний (только носком).</li></ul>` }, challenge: 'Выполни 10 передач носком в парах.', scheme: SVG_SCHEMES['foot-pass-toe'] },
      { id: 'foot-pass-move', title: 'Передача мяча в движении', description: 'Передача мяча во время бега, без остановки, для поддержания темпа атаки.', content: { 'Теория': `<p>Требует высокой координации, умения контролировать мяч и быстро принимать решения.</p>`, 'Как выполнять': `<ol><li>Ведение мяча одной ногой, взгляд на партнёра.</li><li>В момент передачи опорная нога ставится рядом с мячом, бьющая нога выполняет передачу выбранной техникой (внутренней, внешней, подъёмом).</li><li>Корпус слегка наклонён вперёд.</li></ol>`, 'Типичные ошибки': `<ul><li>Потеря контроля над мячом.</li><li>Неточная передача.</li><li>Потеря темпа движения.</li></ul>`, 'Упражнения': `<ul><li>Передачи в движении в парах.</li><li>Передачи после ведения мяча.</li><li>Игра в «квадрате» с движением.</li></ul>` }, challenge: 'Выполни 10 передач в движении в паре.', scheme: SVG_SCHEMES['foot-pass-move'] },
      { id: 'foot-stop-sole', title: 'Остановка мяча подошвой', description: 'Применяется для остановки катящегося мяча, позволяет быстро подготовить мяч к последующим действиям.', content: { 'Теория': `<p>Остановка подошвой — один из самых надёжных способов приёма мяча. Требует правильной постановки ноги и амортизации движения мяча.</p>`, 'Как выполнять': `<ol><li>Опорная нога ставится рядом с мячом, слегка согнута в колене.</li><li>Остановочная нога выносится навстречу мячу, носок слегка приподнят, пятка опущена.</li><li>В момент касания мяча подошвой нога мягко отводится назад, амортизируя скорость мяча.</li><li>Корпус слегка наклонён вперёд, взгляд на мяче.</li></ol>`, 'Типичные ошибки': `<ul><li>Опорная нога слишком далеко или близко к мячу.</li><li>Носок остановочной ноги не приподнят — мяч может проскочить.</li><li>Слабая амортизация — мяч отскакивает далеко.</li><li>Потеря равновесия.</li></ul>`, 'Упражнения': `<ul><li>Остановка катящегося мяча в парах.</li><li>Остановка мяча после отскока от стены.</li><li>Остановка мяча в движении.</li><li>Игра «квадрат» с акцентом на остановку мяча.</li></ul>` }, challenge: 'Останови мяч подошвой 10 раз подряд.', scheme: SVG_SCHEMES['foot-stop-sole'] },
      { id: 'foot-stop-in', title: 'Остановка мяча внутренней стороной стопы', description: 'Используется для приёма катящихся и летящих мячей, обеспечивает высокую точность и контроль.', content: { 'Теория': `<p>Внутренняя сторона стопы — самая большая и мягкая поверхность для приёма мяча, позволяет эффективно гасить скорость.</p>`, 'Как выполнять': `<ol><li>Опорная нога ставится сбоку от мяча, носок в сторону движения мяча.</li><li>Остановочная нога выносится навстречу мячу, стопа разворачивается наружу, носок приподнят.</li><li>В момент касания мяча нога мягко отводится назад, амортизируя удар.</li><li>Корпус слегка наклонён вперёд, взгляд на мяче.</li></ol>`, 'Типичные ошибки': `<ul><li>Опорная нога неправильно поставлена.</li><li>Стопа остановочной ноги не развёрнута наружу.</li><li>Слабый контакт с мячом.</li><li>Потеря равновесия.</li></ul>`, 'Упражнения': `<ul><li>Остановка катящегося мяча в парах.</li><li>Остановка мяча после передачи партнёра.</li><li>Остановка мяча после отскока от стены.</li><li>Остановка мяча в движении.</li></ul>` }, challenge: 'Останови мяч внутренней стороной стопы 10 раз.', scheme: SVG_SCHEMES['foot-stop-in'] },
      { id: 'foot-stop-lift', title: 'Остановка мяча средней частью подъёма', description: 'Применяется для приёма опускающихся мячей, особенно при плотной опеке соперника.', content: { 'Теория': `<p>Требует высокой координации и точности, так как площадь контакта мала, а амортизация движения мяча — за счёт уступающего движения ноги.</p>`, 'Как выполнять': `<ol><li>Опорная нога ставится рядом с мячом.</li><li>Остановочная нога выносится вперёд, носок оттянут вниз, средняя часть подъёма — к мячу.</li><li>В момент касания мяча нога мягко отводится назад, амортизируя удар.</li><li>Корпус слегка наклонён вперёд, взгляд на мяче.</li></ol>`, 'Типичные ошибки': `<ul><li>Низкий вынос ноги.</li><li>Слишком быстрое опускание стопы.</li><li>Слабый контакт с мячом.</li><li>Потеря равновесия.</li></ul>`, 'Упражнения': `<ul><li>Остановка мяча средней частью подъёма в парах.</li><li>Остановка мяча после передачи партнёра.</li><li>Остановка мяча после отскока от стены.</li><li>Остановка мяча в движении.</li></ul>` }, challenge: 'Останови мяч средней частью подъёма 10 раз.', scheme: SVG_SCHEMES['foot-stop-lift'] },
      { id: 'foot-dribble-in', title: 'Ведение мяча внутренней стороной стопы', description: 'Основной способ ведения мяча на короткие и средние дистанции, обеспечивает высокий контроль и манёвренность.', content: { 'Теория': `<p>Ведение внутренней стороной стопы позволяет быстро менять направление движения и сохранять мяч под контролем.</p>`, 'Как выполнять': `<ol><li>Мяч находится у внутренней стороны стопы.</li><li>Лёгкие последовательные толчки по мячу, нога слегка согнута в колене.</li><li>Корпус слегка наклонён вперёд, взгляд на мяч и поле.</li><li>Опорная нога ставится сбоку от мяча, движение — по дуге или прямой.</li></ol>`, 'Типичные ошибки': `<ul><li>Мяч далеко от ноги.</li><li>Слабый контроль мяча.</li><li>Потеря темпа движения.</li><li>Неправильная постановка опорной ноги.</li></ul>`, 'Упражнения': `<ul><li>Ведение мяча по прямой и змейкой.</li><li>Ведение мяча между стойками.</li><li>Ведение мяча с изменением направления и скорости.</li><li>Ведение мяча в парах.</li></ul>` }, challenge: 'Проведи мяч «змейкой» между 5 конусами внутренней стороной стопы.', scheme: SVG_SCHEMES['foot-dribble-in'] },
      { id: 'foot-dribble-out', title: 'Ведение мяча внешней стороной стопы', description: 'Используется для быстрого продвижения вперёд, обводки соперника, неожиданных рывков.', content: { 'Теория': `<p>Ведение внешней стороной стопы позволяет развивать высокую скорость и неожиданно менять направление движения.</p>`, 'Как выполнять': `<ol><li>Мяч находится у внешней стороны стопы.</li><li>Лёгкие последовательные толчки по мячу, нога слегка согнута в колене.</li><li>Корпус слегка наклонён вперёд, взгляд на мяч и поле.</li><li>Опорная нога ставится сбоку от мяча, движение — по прямой или дуге.</li></ol>`, 'Типичные ошибки': `<ul><li>Мяч далеко от ноги.</li><li>Слабый контроль мяча.</li><li>Потеря темпа движения.</li><li>Неправильная постановка опорной ноги.</li></ul>`, 'Упражнения': `<ul><li>Ведение мяча по прямой и змейкой.</li><li>Ведение мяча между стойками.</li><li>Ведение мяча с изменением направления и скорости.</li><li>Ведение мяча в парах.</li></ul>` }, challenge: 'Проведи мяч «змейкой» между 5 конусами внешней стороной стопы.', scheme: SVG_SCHEMES['foot-dribble-out'] },
      { id: 'foot-kick-in', title: 'Удар по мячу внутренней стороной стопы', description: 'Самый точный и контролируемый удар, используется для передач и ударов по воротам с близкого расстояния.', content: { 'Теория': `<p>Внутренняя сторона стопы обеспечивает максимальную площадь контакта с мячом, что гарантирует точность и мягкость удара.</p>`, 'Как выполнять': `<ol><li>Опорная нога ставится сбоку от мяча, носок в сторону цели.</li><li>Бьющая нога разворачивается носком наружу, внутренняя сторона стопы соприкасается с мячом.</li><li>Корпус слегка наклонён вперёд, взгляд на цель.</li><li>В момент удара нога напряжена, движение — плавное и хлёсткое.</li></ol>`, 'Типичные ошибки': `<ul><li>Опорная нога слишком далеко или близко к мячу.</li><li>Носок бьющей ноги не развёрнут наружу.</li><li>Слабый или чрезмерно сильный удар.</li><li>Потеря равновесия.</li></ul>`, 'Упражнения': `<ul><li>Удары по воротам с разных дистанций.</li><li>Удары на точность в парах.</li><li>Удары по катящемуся и неподвижному мячу.</li><li>Удары после ведения.</li></ul>` }, challenge: 'Сделай 10 ударов по воротам внутренней стороной стопы.', scheme: SVG_SCHEMES['foot-kick-in'] },
      { id: 'foot-kick-lift', title: 'Удар по мячу средней частью подъёма', description: 'Основной удар для мощных и дальних ударов по воротам, используется для передач на большие расстояния.', content: { 'Теория': `<p>Средняя часть подъёма позволяет придать мячу максимальную силу и дальность полёта.</p>`, 'Как выполнять': `<ol><li>Опорная нога ставится чуть позади мяча.</li><li>Бьющая нога отводится назад, затем резко выносится вперёд.</li><li>Контакт с мячом — верхней частью подъёма.</li><li>Корпус наклонён вперёд, взгляд на цель.</li></ol>`, 'Типичные ошибки': `<ul><li>Опорная нога слишком далеко от мяча.</li><li>Неправильный угол наклона корпуса.</li><li>Слабый или чрезмерно сильный удар.</li><li>Потеря равновесия.</li></ul>`, 'Упражнения': `<ul><li>Удары по воротам с разных дистанций.</li><li>Удары на точность в парах.</li><li>Удары по катящемуся и неподвижному мячу.</li><li>Удары после ведения.</li></ul>` }, challenge: 'Сделай 5 мощных ударов по воротам подъёмом.', scheme: SVG_SCHEMES['foot-kick-lift'] },
      { id: 'foot-kick-toe', title: 'Удар по мячу носком', description: 'Используется для неожиданных, коротких ударов, отбора мяча у соперника.', content: { 'Теория': `<p>Удар носком позволяет быстро и неожиданно отдать мяч, но менее точен и требует хорошей координации.</p>`, 'Как выполнять': `<ol><li>Опорная нога ставится сбоку от мяча.</li><li>Бьющая нога резко выносится вперёд, контакт — носком.</li><li>Корпус слегка наклонён вперёд, взгляд на цель.</li></ol>`, 'Типичные ошибки': `<ul><li>Слабый контакт с мячом.</li><li>Потеря направления удара.</li><li>Недостаточная амплитуда движения.</li></ul>`, 'Упражнения': `<ul><li>Удары по воротам с разных дистанций.</li><li>Удары на точность в парах.</li><li>Удары по катящемуся и неподвижному мячу.</li><li>Удары после ведения.</li></ul>` }, challenge: 'Сделай 10 ударов носком по воротам.', scheme: SVG_SCHEMES['foot-kick-toe'] },
      { id: 'foot-kick-out', title: 'Удар по мячу внешней стороной стопы', description: 'Используется для резаных, неожиданных ударов, обводки соперника.', content: { 'Теория': `<p>Внешняя сторона стопы позволяет придать мячу вращение и изменить траекторию полёта.</p>`, 'Как выполнять': `<ol><li>Опорная нога ставится сбоку от мяча.</li><li>Бьющая нога разворачивается носком внутрь, внешняя сторона стопы соприкасается с мячом.</li><li>Корпус слегка наклонён в сторону удара, взгляд на цель.</li></ol>`, 'Типичные ошибки': `<ul><li>Неправильный разворот стопы.</li><li>Слабый контакт с мячом.</li><li>Потеря направления удара.</li></ul>`, 'Упражнения': `<ul><li>Удары по воротам с разных дистанций.</li><li>Удары на точность в парах.</li><li>Удары по катящемуся и неподвижному мячу.</li><li>Удары после ведения.</li></ul>` }, challenge: 'Сделай 10 ударов внешней стороной стопы по воротам.', scheme: SVG_SCHEMES['foot-kick-out'] },
      { id: 'foot-head', title: 'Удар по мячу головой', description: 'Используется для ударов по воротам, передач, отбора мяча в воздухе.', content: { 'Теория': `<p>Удар головой требует правильной техники и координации, позволяет направлять мяч в нужную точку.</p>`, 'Как выполнять': `<ol><li>Глаза открыты, взгляд на мяч.</li><li>Встреча мяча лбом (чуть выше переносицы).</li><li>Корпус и ноги напряжены, движение — хлёсткое.</li><li>Приземление — на обе ноги.</li></ol>`, 'Типичные ошибки': `<ul><li>Закрытые глаза.</li><li>Неправильный угол встречи с мячом.</li><li>Слабый или чрезмерно сильный удар.</li><li>Потеря равновесия.</li></ul>`, 'Упражнения': `<ul><li>Удары головой по подвешенному мячу.</li><li>Удары головой после подачи партнёра.</li><li>Удары головой на точность.</li><li>Удары головой в игровых упражнениях.</li></ul>` }, challenge: 'Выполни 10 ударов головой по подвешенному мячу.', scheme: SVG_SCHEMES['foot-head'] }
    ]
  },

  // ----------------------------------------------------------
  // ВОЛЕЙБОЛ (13 тем)
  // ----------------------------------------------------------
  {
    id: 'st-volley', title: 'Волейбол', icon: '🏐',
    subtopics: [
      { id: 'volley-top', title: 'Верхняя передача мяча двумя руками', description: 'Основной способ подготовки мяча для нападающего удара или передачи партнёру.', content: { 'Теория': `<p>Передача выполняется пальцами, кисти образуют «ковш», большие и указательные пальцы формируют треугольник. Важно согласованное движение ног, туловища и рук.</p>`, 'Как выполнять': `<ol><li>Исходное положение: ноги на ширине плеч, слегка согнуты, туловище наклонено вперёд, руки согнуты в локтях, кисти перед лицом.</li><li>Перемещение к мячу: быстрый выход под мяч, последний шаг — стопорящий.</li><li>Встреча с мячом: кисти выше лба, пальцы разведены, контакт — фалангами пальцев.</li><li>Движение: одновременное разгибание ног, туловища и рук, кисти сопровождают мяч до полного выпрямления рук.</li></ol>`, 'Типичные ошибки': `<ul><li>Мяч принимается ладонями, а не пальцами.</li><li>Большие пальцы направлены вперёд.</li><li>Кисти слишком напряжены или расслаблены.</li><li>Нет согласованности движений.</li><li>Передача выполняется прямыми руками.</li></ul>`, 'Упражнения': `<ul><li>Передачи над собой на месте и в движении.</li><li>Передачи в стену на разную высоту и расстояние.</li><li>Передачи в парах с перемещением.</li><li>Передачи в прыжке.</li></ul>` }, challenge: 'Сделай 10 передач над собой.', scheme: SVG_SCHEMES['volley-top'] },
      { id: 'volley-bottom', title: 'Нижняя передача мяча двумя руками', description: 'Используется для приёма подач, нападающих ударов и низко летящих мячей.', content: { 'Теория': `<p>Руки образуют платформу из предплечий, кисти соединены, локти выпрямлены. Движение — за счёт разгибания ног и туловища.</p>`, 'Как выполнять': `<ol><li>Исходное положение: ноги согнуты, одна чуть впереди, руки выпрямлены и соединены, туловище наклонено вперёд.</li><li>Встреча с мячом: мяч принимается на платформу предплечий, кисти не участвуют.</li><li>Движение: ноги и туловище разгибаются, руки сопровождают мяч в нужном направлении.</li></ol>`, 'Типичные ошибки': `<ul><li>Руки согнуты в локтях.</li><li>Платформа не сформирована.</li><li>Нет согласованности движений.</li><li>Мяч принимается кистями или грудью.</li></ul>`, 'Упражнения': `<ul><li>Приём мяча после набрасывания партнёра.</li><li>Приём мяча от стены.</li><li>Приём мяча в парах с перемещением.</li><li>Приём мяча после подачи.</li></ul>` }, challenge: 'Прими мяч снизу 10 раз подряд.', scheme: SVG_SCHEMES['volley-bottom'] },
      { id: 'volley-serve-low', title: 'Нижняя прямая подача', description: 'Простой и надёжный способ введения мяча в игру, используется новичками и для тактических подач.', content: { 'Теория': `<p>Подача выполняется одной рукой, удар — основанием ладони или кулаком, мяч подбрасывается невысоко.</p>`, 'Как выполнять': `<ol><li>Исходное положение: стоя боком к сетке, ноги слегка согнуты, мяч в левой руке (для правши).</li><li>Подброс: мяч подбрасывается на 0,4–0,6 м.</li><li>Удар: правая рука отводится назад, затем резко выносится вперёд, удар по мячу ниже пояса.</li><li>Завершение: шаг в сторону площадки.</li></ol>`, 'Типичные ошибки': `<ul><li>Неправильный подброс мяча.</li><li>Удар согнутой рукой.</li><li>Расслабленная кисть.</li><li>Неточный удар.</li></ul>`, 'Упражнения': `<ul><li>Имитация подачи без мяча.</li><li>Подача в стену с близкого расстояния.</li><li>Подача партнёру.</li><li>Подача через сетку.</li></ul>` }, challenge: 'Сделай 5 подач через сетку с 3 метров.', scheme: SVG_SCHEMES['volley-serve-low'] },
      { id: 'volley-serve-top', title: 'Верхняя прямая подача', description: 'Более сложный и атакующий способ подачи, используется для затруднения приёма соперником.', content: { 'Теория': `<p>Подача выполняется с замахом, удар — напряжённой ладонью или кулаком, мяч подбрасывается выше.</p>`, 'Как выполнять': `<ol><li>Исходное положение: стоя лицом к сетке, левая нога впереди, мяч в левой руке.</li><li>Подброс: мяч подбрасывается на 1–2 м.</li><li>Замах: правая рука отводится назад, кисть выше головы.</li><li>Удар: резкий мах рукой, удар по мячу в высшей точке.</li><li>Завершение: перенос веса на левую ногу.</li></ol>`, 'Типичные ошибки': `<ul><li>Неправильный подброс.</li><li>Слабый замах.</li><li>Расслабленная кисть.</li><li>Неточный удар.</li></ul>`, 'Упражнения': `<ul><li>Имитация подачи.</li><li>Подача в стену.</li><li>Подача партнёру.</li><li>Подача через сетку.</li></ul>` }, challenge: 'Сделай 5 верхних подач через сетку.', scheme: SVG_SCHEMES['volley-serve-top'] },
      { id: 'volley-attack', title: 'Нападающий удар (прямой)', description: 'Основной способ завершения атаки, приносит большинство очков.', content: { 'Теория': `<p>Выполняется с разбега и прыжка, удар — в высшей точке, кисть напряжена, движение — хлёсткое.</p>`, 'Как выполнять': `<ol><li>Разбег: 2–4 шага, последний — стопорящий.</li><li>Прыжок: одновременный толчок обеими ногами.</li><li>Замах: правая рука отводится назад, левая — вверх для баланса.</li><li>Удар: правая рука резко выносится вперёд, удар по мячу в высшей точке.</li><li>Приземление: на обе ноги, готовность к следующему действию.</li></ol>`, 'Типичные ошибки': `<ul><li>Несвоевременный прыжок.</li><li>Слабый замах.</li><li>Удар расслабленной кистью.</li><li>Неточный удар.</li></ul>`, 'Упражнения': `<ul><li>Имитация удара без мяча.</li><li>Удар по мячу, подвешенному на шнуре.</li><li>Удар после передачи партнёра.</li><li>Удар через сетку.</li></ul>` }, challenge: 'Выполни 10 нападающих ударов по подвешенному мячу.', scheme: SVG_SCHEMES['volley-attack'] },
      { id: 'volley-block', title: 'Блокирование', description: 'Основной способ защиты от нападающего удара соперника.', content: { 'Теория': `<p>Блок выполняется одним или несколькими игроками, руки поднимаются над сеткой, кисти — над мячом.</p>`, 'Как выполнять': `<ol><li>Перемещение: быстрый выход к месту удара.</li><li>Прыжок: одновременный толчок обеими ногами.</li><li>Руки: поднимаются вверх, кисти — над сеткой, пальцы разведены.</li><li>Амортизация: при контакте с мячом — мягкое уступающее движение.</li></ol>`, 'Типичные ошибки': `<ul><li>Поздно выполнен прыжок.</li><li>Руки не над сеткой.</li><li>Кисти расслаблены.</li><li>Нет согласованности действий.</li></ul>`, 'Упражнения': `<ul><li>Имитация блока у стены.</li><li>Блокирование мяча, брошенного партнёром.</li><li>Блокирование после передачи.</li><li>Блокирование в игровых упражнениях.</li></ul>` }, challenge: 'Выполни 10 имитаций блока у стены.', scheme: SVG_SCHEMES['volley-block'] },
      { id: 'volley-receive', title: 'Приём мяча с подачи', description: 'Первый элемент в розыгрыше, определяет дальнейший ход атаки.', content: { 'Теория': `<p>Чаще всего используется нижняя передача, важна правильная платформа и своевременный выход под мяч.</p>`, 'Как выполнять': `<ol><li>Исходное положение: ноги согнуты, платформа готова.</li><li>Перемещение: быстрый выход под мяч.</li><li>Приём: мяч принимается на платформу, руки сопровождают мяч.</li></ol>`, 'Типичные ошибки': `<ul><li>Несвоевременный выход.</li><li>Платформа не сформирована.</li><li>Мяч принимается кистями.</li></ul>`, 'Упражнения': `<ul><li>Приём подачи в парах.</li><li>Приём подачи от стены.</li><li>Приём подачи в игровых упражнениях.</li></ul>` }, challenge: 'Прими 10 подач в парах.', scheme: SVG_SCHEMES['volley-receive'] },
      { id: 'volley-receive-attack', title: 'Приём мяча после нападающего удара', description: 'Защитный приём, требует быстрой реакции и правильной техники.', content: { 'Теория': `<p>Используется нижняя передача, важна амортизация и направление мяча.</p>`, 'Как выполнять': `<ol><li>Исходное положение: низкая стойка, платформа готова.</li><li>Перемещение: быстрый выход под мяч.</li><li>Приём: мяч принимается на платформу, руки сопровождают мяч.</li></ol>`, 'Типичные ошибки': `<ul><li>Несвоевременный выход.</li><li>Платформа не сформирована.</li><li>Мяч принимается кистями.</li></ul>`, 'Упражнения': `<ul><li>Приём нападающего удара в парах.</li><li>Приём удара от стены.</li><li>Приём удара в игровых упражнениях.</li></ul>` }, challenge: 'Прими 10 нападающих ударов в парах.', scheme: SVG_SCHEMES['volley-receive'] },
      { id: 'volley-move', title: 'Перемещения и стойки', description: 'Базовые элементы техники, обеспечивают готовность к любому игровому действию.', content: { 'Теория': `<p>Стойки — исходные положения для выполнения технических приёмов. Перемещения — ходьба, бег, приставные шаги, прыжки.</p>`, 'Как выполнять': `<ol><li>Стойка: ноги согнуты, одна впереди, туловище наклонено вперёд, руки готовы к действию.</li><li>Перемещения: быстрые, с остановками, в разных направлениях.</li></ol>`, 'Типичные ошибки': `<ul><li>Ноги выпрямлены.</li><li>Руки опущены.</li><li>Нет устойчивости.</li></ul>`, 'Упражнения': `<ul><li>Перемещения по сигналу.</li><li>Старты из разных положений.</li><li>Челночный бег.</li><li>Перемещения с мячом.</li></ul>` }, challenge: 'Выполни 10 перемещений в стойке по сигналу.', scheme: SVG_SCHEMES['volley-move'] },
      { id: 'volley-pass-jump', title: 'Передача мяча в прыжке', description: 'Используется для передачи мяча в сложных игровых ситуациях, когда нет времени на обычную передачу.', content: { 'Теория': `<p>Выполняется в безопорном положении, важна координация и точность.</p>`, 'Как выполнять': `<ol><li>Прыжок: одновременный толчок обеими ногами.</li><li>Передача: кисти в форме «ковша», мяч встречается над лицом.</li><li>Приземление: на обе ноги, готовность к следующему действию.</li></ol>`, 'Типичные ошибки': `<ul><li>Неточная передача.</li><li>Кисти не сформированы.</li><li>Потеря равновесия.</li></ul>`, 'Упражнения': `<ul><li>Передача в прыжке в парах.</li><li>Передача в прыжке через сетку.</li><li>Передача в прыжке в игровых упражнениях.</li></ul>` }, challenge: 'Выполни 10 передач в прыжке в парах.', scheme: SVG_SCHEMES['volley-pass-jump'] },
      { id: 'volley-block-group', title: 'Одиночное и групповое блокирование', description: 'Одиночное — один игрок, групповое — два или три игрока одновременно.', content: { 'Теория': `<p>Требует согласованности действий, правильного выбора позиции и времени прыжка.</p>`, 'Как выполнять': `<ol><li>Перемещение: быстрый выход к месту удара.</li><li>Прыжок: одновременный толчок.</li><li>Руки: поднимаются вверх, кисти — над сеткой.</li><li>Амортизация: мягкое уступающее движение.</li></ol>`, 'Типичные ошибки': `<ul><li>Несогласованность действий.</li><li>Поздно выполнен прыжок.</li><li>Руки не над сеткой.</li></ul>`, 'Упражнения': `<ul><li>Имитация блока в парах.</li><li>Блокирование мяча, брошенного партнёром.</li><li>Блокирование в игровых упражнениях.</li></ul>` }, challenge: 'Выполни 10 групповых блоков в парах.', scheme: SVG_SCHEMES['volley-block-group'] },
      { id: 'volley-tactics', title: 'Тактические действия в нападении и защите', description: 'Включают индивидуальные, групповые и командные действия, направленные на достижение победы.', content: { 'Теория': `<p>В нападении — передачи, обманные удары, комбинации. В защите — страховка, подстраховка, взаимодействие.</p>`, 'Как выполнять': `<ol><li>Нападение: быстрые передачи, неожиданные удары, смена позиций.</li><li>Защита: перемещение, блокирование, приём мяча.</li></ol>`, 'Типичные ошибки': `<ul><li>Несогласованность действий.</li><li>Потеря позиции.</li><li>Медленная реакция.</li></ul>`, 'Упражнения': `<ul><li>Игра в «квадрате».</li><li>Учебные двусторонние игры.</li><li>Выполнение тактических комбинаций.</li></ul>` }, challenge: 'Сыграй в учебную двустороннюю игру 10 минут.', scheme: SVG_SCHEMES['volley-tactics'] },
      { id: 'volley-referee', title: 'Судейство и организация соревнований', description: 'Основы судейства, правила проведения соревнований, жесты судьи.', content: { 'Теория': `<p>Судья следит за соблюдением правил, фиксирует нарушения, управляет игрой.</p>`, 'Как выполнять': `<ol><li>Изучение правил.</li><li>Практика судейства учебных игр.</li><li>Организация мини-турниров.</li></ol>`, 'Типичные ошибки': `<ul><li>Незнание правил.</li><li>Неправильное судейство.</li></ul>`, 'Упражнения': `<ul><li>Судейство учебных игр.</li><li>Организация турниров.</li></ul>` }, challenge: 'Посуди учебную игру 5 минут.', scheme: SVG_SCHEMES['volley-referee'] }
    ]
  },

  // ----------------------------------------------------------
  // БАСКЕТБОЛ (11 тем)
  // ----------------------------------------------------------
  {
    id: 'st-basket', title: 'Баскетбол', icon: '🏀',
    subtopics: [
      { id: 'basket-stance', title: 'Стойка баскетболиста и держание мяча', description: 'Базовые элементы, обеспечивающие готовность к любому игровому действию.', content: { 'Теория': `<p>Стойка — исходное положение для быстрого старта, перемещений, ловли и передачи мяча. Держание мяча — правильная постановка кистей и пальцев для контроля и безопасности.</p>`, 'Как выполнять': `<p><strong>Стойка:</strong> ноги на ширине плеч, слегка согнуты, вес тела распределён равномерно, пятки слегка приподняты, туловище наклонено вперёд, руки согнуты и разведены в стороны.</p><p><strong>Держание мяча:</strong> кисти с обеих сторон мяча, пальцы широко расставлены, мяч не касается ладоней, большие пальцы направлены друг к другу под углом.</p>`, 'Типичные ошибки': `<ul><li>Ноги выпрямлены или чрезмерно согнуты.</li><li>Вес тела перенесён на одну ногу.</li><li>Пальцы не разведены, мяч удерживается ладонями.</li></ul>`, 'Упражнения': `<ul><li>Принятие стойки по сигналу.</li><li>Перемещения в стойке.</li><li>Имитация держания мяча.</li><li>Передачи мяча в парах с контролем правильной постановки кистей.</li></ul>` }, challenge: 'Прими стойку баскетболиста 10 раз по сигналу.', scheme: SVG_SCHEMES['basket-stance'] },
      { id: 'basket-move', title: 'Передвижения без мяча', description: 'Перемещения по площадке для выхода на выгодную позицию, смены направления, подготовки к приёму или передаче.', content: { 'Теория': `<p>Передвижения выполняются на полусогнутых ногах, с перекатом с пятки на носок, туловище наклонено вперёд, руки готовы к действию.</p>`, 'Как выполнять': `<ol><li>Ходьба и бег: перекат с пятки на носок, корпус наклонён вперёд.</li><li>Остановка двумя шагами: первый шаг длинный, второй короткий, стопы параллельны, колени согнуты.</li><li>Остановка прыжком: прыжок с приземлением на обе ноги, амортизация за счёт сгибания ног.</li><li>Повороты: опорная нога не отрывается от пола, маховая нога переставляется вокруг опорной.</li></ol>`, 'Типичные ошибки': `<ul><li>Бег на прямых ногах.</li><li>Остановка с постановкой стоп на одну линию.</li><li>Потеря равновесия при повороте.</li></ul>`, 'Упражнения': `<ul><li>Бег с ускорениями и остановками по сигналу.</li><li>Остановка двумя шагами и прыжком.</li><li>Повороты на месте и в движении.</li><li>Эстафеты с остановками и поворотами.</li></ul>` }, challenge: 'Выполни 10 остановок двумя шагами и прыжком.', scheme: SVG_SCHEMES['basket-move'] },
      { id: 'basket-catch', title: 'Ловля мяча двумя руками', description: 'Приём, позволяющий уверенно овладеть мячом и подготовиться к дальнейшим действиям.', content: { 'Теория': `<p>Руки вытянуты навстречу мячу, кисти образуют «воронку», пальцы разведены, локти слегка согнуты. В момент касания — амортизация за счёт сгибания рук.</p>`, 'Как выполнять': `<ol><li>Встреча мяча: руки вытянуты, кисти навстречу мячу.</li><li>Амортизация: руки сгибаются в локтях, мяч притягивается к груди.</li><li>Завершение: туловище слегка подаётся вперёд, мяч укрыт локтями.</li></ol>`, 'Типичные ошибки': `<ul><li>Кисти не разведены, мяч принимается ладонями.</li><li>Руки не амортизируют, мяч отскакивает.</li><li>Нет укрытия мяча от соперника.</li></ul>`, 'Упражнения': `<ul><li>Ловля мяча после набрасывания партнёра.</li><li>Ловля мяча после отскока от стены.</li><li>Ловля мяча в движении.</li><li>Ловля высоко- и низколетящих мячей.</li></ul>` }, challenge: 'Поймай мяч 10 раз подряд в паре.', scheme: SVG_SCHEMES['basket-catch'] },
      { id: 'basket-pass-chest', title: 'Передача мяча двумя руками от груди', description: 'Основной способ быстрой и точной передачи мяча партнёру.', content: { 'Теория': `<p>Мяч удерживается на уровне груди, кисти с обеих сторон, локти опущены. Передача — за счёт разгибания рук и ног, завершающее движение кистями.</p>`, 'Как выполнять': `<ol><li>Исходное положение: мяч у груди, локти опущены.</li><li>Движение: шаг вперёд, разгибание рук и ног, захлёст кистями.</li><li>Завершение: руки сопровождают мяч, игрок возвращается в стойку.</li></ol>`, 'Типичные ошибки': `<ul><li>Передача выполняется только руками, без участия ног.</li><li>Кисти не сопровождают мяч.</li><li>Мяч принимается ладонями.</li></ul>`, 'Упражнения': `<ul><li>Передачи в парах на месте и в движении.</li><li>Передачи на точность в цель.</li><li>Передачи после ведения.</li><li>Передачи в игровых упражнениях.</li></ul>` }, challenge: 'Сделай 10 передач в паре от груди.', scheme: SVG_SCHEMES['basket-pass-chest'] },
      { id: 'basket-pass-shoulder', title: 'Передача мяча одной рукой от плеча', description: 'Используется для быстрых и дальних передач, особенно в движении.', content: { 'Теория': `<p>Мяч удерживается одной рукой у плеча, вторая рука поддерживает сбоку. Передача — за счёт резкого разгибания руки и поворота корпуса.</p>`, 'Как выполнять': `<ol><li>Исходное положение: мяч у плеча, локоть согнут.</li><li>Движение: шаг вперёд, разгибание руки, захлёст кистью.</li><li>Завершение: рука сопровождает мяч, игрок возвращается в стойку.</li></ol>`, 'Типичные ошибки': `<ul><li>Передача выполняется только кистью.</li><li>Нет поворота корпуса.</li><li>Мяч летит слишком высоко или низко.</li></ul>`, 'Упражнения': `<ul><li>Передачи одной рукой в парах.</li><li>Передачи на дальность.</li><li>Передачи после ведения.</li><li>Передачи в игровых упражнениях.</li></ul>` }, challenge: 'Сделай 10 передач одной рукой от плеча в паре.', scheme: SVG_SCHEMES['basket-pass-shoulder'] },
      { id: 'basket-dribble', title: 'Ведение мяча (дриблинг)', description: 'Перемещение с мячом по площадке с контролем и защитой мяча.', content: { 'Теория': `<p>Мяч ведётся ударами о пол кончиками пальцев, рука над мячом, корпус слегка наклонён вперёд, взгляд — вперёд.</p>`, 'Как выполнять': `<ol><li>Удар по мячу: кончиками пальцев, не ладонью.</li><li>Положение руки: над мячом, слегка согнута.</li><li>Перемещение: корпус наклонён вперёд, ноги согнуты, взгляд вперёд.</li></ol>`, 'Типичные ошибки': `<ul><li>Ведение ладонью.</li><li>Мяч далеко от ноги.</li><li>Взгляд на мяч.</li></ul>`, 'Упражнения': `<ul><li>Ведение мяча на месте и в движении.</li><li>Ведение змейкой между стойками.</li><li>Ведение с изменением скорости и направления.</li><li>Ведение с сопротивлением защитника.</li></ul>` }, challenge: 'Проведи мяч вокруг себя 5 раз, не глядя на него.', scheme: SVG_SCHEMES['basket-dribble'] },
      { id: 'basket-stop-2', title: 'Остановка двумя шагами', description: 'Применяется для быстрой остановки после ведения или бега.', content: { 'Теория': `<p>Первый шаг длинный, второй короткий и стопорящий, стопы параллельны, колени согнуты, мяч укрыт корпусом.</p>`, 'Как выполнять': `<ol><li>Первый шаг: длинный, с небольшим приседом.</li><li>Второй шаг: короткий, стопорящий.</li><li>Завершение: стопы параллельны, колени согнуты, мяч укрыт.</li></ol>`, 'Типичные ошибки': `<ul><li>Остановка с постановкой стоп на одну линию.</li><li>Потеря равновесия.</li><li>Мяч не укрыт.</li></ul>`, 'Упражнения': `<ul><li>Остановка после ведения по сигналу.</li><li>Остановка с последующим поворотом и передачей.</li><li>Остановка в игровых упражнениях.</li></ul>` }, challenge: 'Выполни 10 остановок двумя шагами после ведения.', scheme: SVG_SCHEMES['basket-stop-2'] },
      { id: 'basket-stop-jump', title: 'Остановка прыжком', description: 'Используется для быстрой остановки и смены направления.', content: { 'Теория': `<p>Прыжок с приземлением на обе ноги, амортизация за счёт сгибания ног, мяч укрыт корпусом.</p>`, 'Как выполнять': `<ol><li>Прыжок: отталкивание одной или двумя ногами.</li><li>Приземление: на обе ноги, колени согнуты.</li><li>Завершение: амортизация, мяч укрыт.</li></ol>`, 'Типичные ошибки': `<ul><li>Приземление на одну ногу.</li><li>Потеря равновесия.</li><li>Мяч не укрыт.</li></ul>`, 'Упражнения': `<ul><li>Остановка прыжком после ведения.</li><li>Остановка прыжком по сигналу.</li><li>Остановка прыжком в игровых упражнениях.</li></ul>` }, challenge: 'Выполни 10 остановок прыжком после ведения.', scheme: SVG_SCHEMES['basket-stop-jump'] },
      { id: 'basket-turn', title: 'Повороты на месте (с мячом и без мяча)', description: 'Используются для укрытия мяча и ухода от защитника.', content: { 'Теория': `<p>Опорная нога не отрывается от пола, маховая нога переставляется вокруг опорной, мяч укрыт корпусом.</p>`, 'Как выполнять': `<ol><li>Опорная нога: не отрывается от пола.</li><li>Маховая нога: переставляется вокруг опорной.</li><li>Мяч: укрыт корпусом.</li></ol>`, 'Типичные ошибки': `<ul><li>Отрыв опорной ноги.</li><li>Потеря равновесия.</li><li>Мяч не укрыт.</li></ul>`, 'Упражнения': `<ul><li>Повороты на месте с мячом.</li><li>Повороты после ловли мяча.</li><li>Повороты с сопротивлением защитника.</li></ul>` }, challenge: 'Выполни 10 поворотов на месте с мячом.', scheme: SVG_SCHEMES['basket-turn'] },
      { id: 'basket-shot', title: 'Бросок в корзину одной рукой от плеча', description: 'Основной способ завершения атаки.', content: { 'Теория': `<p>Мяч удерживается у плеча, локоть под мячом, взгляд — на кольцо. Бросок — за счёт разгибания руки и захлёста кистью.</p>`, 'Как выполнять': `<ol><li>Исходное положение: мяч у плеча, локоть под мячом.</li><li>Движение: шаг вперёд, разгибание руки, захлёст кистью.</li><li>Завершение: рука сопровождает мяч, игрок возвращается в стойку.</li></ol>`, 'Типичные ошибки': `<ul><li>Бросок выполняется только кистью.</li><li>Нет сопровождения мяча.</li><li>Мяч летит слишком высоко или низко.</li></ul>`, 'Упражнения': `<ul><li>Броски с места и в движении.</li><li>Броски на точность.</li><li>Броски после ведения.</li><li>Броски в игровых упражнениях.</li></ul>` }, challenge: 'Забрось мяч в кольцо 3 раза с близкого расстояния.', scheme: SVG_SCHEMES['basket-shot'] },
      { id: 'basket-feint', title: 'Финты (обманные движения)', description: 'Используются для обыгрыша защитника и создания свободного пространства.', content: { 'Теория': `<p>Финт — ложное движение, вводящее защитника в заблуждение. Выполняется корпусом, взглядом, сменой направления ведения.</p>`, 'Как выполнять': `<ol><li>Корпус: наклон в одну сторону, резкое движение в другую.</li><li>Взгляд: в сторону ложного движения.</li><li>Ведение: смена направления или скорости.</li></ol>`, 'Типичные ошибки': `<ul><li>Финт неубедителен.</li><li>Потеря контроля над мячом.</li><li>Нет смены направления.</li></ul>`, 'Упражнения': `<ul><li>Финты с мячом в парах.</li><li>Финты с последующим ведением или передачей.</li><li>Финты в игровых упражнениях.</li></ul>` }, challenge: 'Выполни 10 финтов в парах.', scheme: SVG_SCHEMES['basket-feint'] }
    ]
  },

  // ----------------------------------------------------------
  // ГАНДБОЛ (14 тем)
  // ----------------------------------------------------------
  {
    id: 'st-handball', title: 'Гандбол', icon: '🤾',
    subtopics: [
      { id: 'hand-stance', title: 'Стойка и держание мяча', description: 'Базовые элементы, обеспечивающие готовность к любому игровому действию.', content: { 'Теория': `<p>Стойка — исходное положение для быстрого старта, перемещений, ловли и передачи мяча. Держание мяча — правильная постановка кистей и пальцев для контроля и безопасности.</p>`, 'Как выполнять': `<p><strong>Стойка:</strong> ноги на ширине плеч, слегка согнуты, вес тела распределён равномерно, пятки слегка приподняты, колени полусогнуты, спина прямая, руки согнуты в локтях и разведены в стороны.</p><p><strong>Держание мяча:</strong> кисти с обеих сторон мяча, пальцы широко расставлены, мяч не касается ладоней, большие пальцы направлены друг к другу под углом.</p>`, 'Типичные ошибки': `<ul><li>Ноги выпрямлены или чрезмерно согнуты.</li><li>Вес тела перенесён на одну ногу.</li><li>Пальцы не разведены, мяч удерживается ладонями.</li></ul>`, 'Упражнения': `<ul><li>Принять положение стойки без мяча.</li><li>Ходьба и бег с переходом в стойку по сигналу.</li><li>Имитация держания мяча.</li><li>Перемещения с мячом в руках и по сигналу — стойка.</li></ul>` }, challenge: 'Прими стойку гандболиста 10 раз по сигналу.', scheme: SVG_SCHEMES['hand-stance'] },
      { id: 'hand-move', title: 'Передвижения (бег, приставные шаги, прыжки)', description: 'Перемещения по площадке для выхода на выгодную позицию, освобождения от соперника, получения мяча.', content: { 'Теория': `<p>В гандболе используются приставные шаги, бег по прямой, бег с изменением направления и скорости, бег спиной вперёд, прыжки.</p>`, 'Как выполнять': `<ol><li>Приставные шаги: шаг в сторону, вторая нога приставляется, корпус слегка наклонён вперёд.</li><li>Бег: перекат с пятки на носок, корпус наклонён вперёд.</li><li>Прыжки: отталкивание одной или двумя ногами, мягкое приземление.</li></ol>`, 'Типичные ошибки': `<ul><li>Бег на прямых ногах.</li><li>Отсутствие наклона корпуса.</li><li>Потеря равновесия при смене направления.</li></ul>`, 'Упражнения': `<ul><li>Бег с ускорениями и остановками.</li><li>Приставные шаги вперёд, назад, в стороны.</li><li>Прыжки с продвижением.</li><li>Эстафеты с перемещениями.</li></ul>` }, challenge: 'Выполни 10 перемещений приставными шагами.', scheme: SVG_SCHEMES['hand-move'] },
      { id: 'hand-catch', title: 'Ловля мяча двумя руками', description: 'Приём, позволяющий уверенно овладеть мячом и подготовиться к дальнейшим действиям.', content: { 'Теория': `<p>Руки вытянуты навстречу мячу, кисти образуют «воронку», пальцы разведены, локти слегка согнуты. В момент касания — амортизация за счёт сгибания рук.</p>`, 'Как выполнять': `<ol><li>Встреча мяча: руки вытянуты, кисти навстречу мячу.</li><li>Амортизация: руки сгибаются в локтях, мяч притягивается к груди.</li><li>Завершение: туловище слегка подаётся вперёд, мяч укрыт локтями.</li></ol>`, 'Типичные ошибки': `<ul><li>Кисти не разведены, мяч принимается ладонями.</li><li>Руки не амортизируют, мяч отскакивает.</li><li>Нет укрытия мяча от соперника.</li></ul>`, 'Упражнения': `<ul><li>Ловля мяча после набрасывания партнёра.</li><li>Ловля мяча от стены.</li><li>Ловля мяча в движении.</li><li>Ловля высоколетящих и низколетящих мячей.</li></ul>` }, challenge: 'Поймай мяч 10 раз подряд в паре.', scheme: SVG_SCHEMES['hand-catch'] },
      { id: 'hand-pass-chest', title: 'Передача мяча двумя руками от груди', description: 'Основной способ быстрой и точной передачи мяча партнёру.', content: { 'Теория': `<p>Мяч удерживается на уровне груди, кисти с обеих сторон, локти опущены. Передача — за счёт разгибания рук и ног, завершающее движение кистями.</p>`, 'Как выполнять': `<ol><li>Исходное положение: мяч у груди, локти опущены.</li><li>Движение: шаг вперёд, разгибание рук и ног, захлёст кистями.</li><li>Завершение: руки сопровождают мяч, игрок возвращается в стойку.</li></ol>`, 'Типичные ошибки': `<ul><li>Передача выполняется только руками, без участия ног.</li><li>Кисти не сопровождают мяч.</li><li>Мяч принимается ладонями.</li></ul>`, 'Упражнения': `<ul><li>Передачи в парах на месте и в движении.</li><li>Передачи на точность в цель.</li><li>Передачи после ведения.</li><li>Передачи в игровых упражнениях.</li></ul>` }, challenge: 'Сделай 10 передач в паре от груди.', scheme: SVG_SCHEMES['hand-pass-chest'] },
      { id: 'hand-pass-shoulder', title: 'Передача мяча одной рукой от плеча', description: 'Используется для быстрых и дальних передач, особенно в движении.', content: { 'Теория': `<p>Мяч удерживается одной рукой у плеча, вторая рука поддерживает сбоку. Передача — за счёт резкого разгибания руки и поворота корпуса.</p>`, 'Как выполнять': `<ol><li>Исходное положение: мяч у плеча, локоть согнут.</li><li>Движение: шаг вперёд, разгибание руки, захлёст кистью.</li><li>Завершение: рука сопровождает мяч, игрок возвращается в стойку.</li></ol>`, 'Типичные ошибки': `<ul><li>Передача выполняется только кистью.</li><li>Нет поворота корпуса.</li><li>Мяч летит слишком высоко или низко.</li></ul>`, 'Упражнения': `<ul><li>Передачи одной рукой в парах.</li><li>Передачи на дальность.</li><li>Передачи после ведения.</li><li>Передачи в игровых упражнениях.</li></ul>` }, challenge: 'Сделай 10 передач одной рукой от плеча в паре.', scheme: SVG_SCHEMES['hand-pass-shoulder'] },
      { id: 'hand-dribble', title: 'Ведение мяча', description: 'Перемещение с мячом по площадке с контролем и защитой мяча.', content: { 'Теория': `<p>Мяч ведётся ударами о пол кончиками пальцев, рука над мячом, корпус слегка наклонён вперёд, взгляд — вперёд.</p>`, 'Как выполнять': `<ol><li>Удар по мячу: кончиками пальцев, не ладонью.</li><li>Положение руки: над мячом, слегка согнута.</li><li>Перемещение: корпус наклонён вперёд, ноги согнуты, взгляд вперёд.</li></ol>`, 'Типичные ошибки': `<ul><li>Ведение ладонью.</li><li>Мяч далеко от ноги.</li><li>Взгляд на мяч.</li></ul>`, 'Упражнения': `<ul><li>Ведение мяча на месте и в движении.</li><li>Ведение змейкой между стойками.</li><li>Ведение с изменением скорости и направления.</li><li>Ведение с сопротивлением защитника.</li></ul>` }, challenge: 'Проведи мяч вокруг себя 5 раз, не глядя на него.', scheme: SVG_SCHEMES['hand-dribble'] },
      { id: 'hand-stop-2', title: 'Остановка двумя шагами', description: 'Применяется для быстрой остановки после ведения или бега.', content: { 'Теория': `<p>Первый шаг длинный, второй короткий и стопорящий, стопы параллельны, колени согнуты, мяч укрыт корпусом.</p>`, 'Как выполнять': `<ol><li>Первый шаг: длинный, с небольшим приседом.</li><li>Второй шаг: короткий, стопорящий.</li><li>Завершение: стопы параллельны, колени согнуты, мяч укрыт.</li></ol>`, 'Типичные ошибки': `<ul><li>Остановка с постановкой стоп на одну линию.</li><li>Потеря равновесия.</li><li>Мяч не укрыт.</li></ul>`, 'Упражнения': `<ul><li>Остановка после ведения по сигналу.</li><li>Остановка с последующим поворотом и передачей.</li><li>Остановка в игровых упражнениях.</li></ul>` }, challenge: 'Выполни 10 остановок двумя шагами после ведения.', scheme: SVG_SCHEMES['hand-stop-2'] },
      { id: 'hand-stop-jump', title: 'Остановка прыжком', description: 'Используется для быстрой остановки и смены направления.', content: { 'Теория': `<p>Прыжок с приземлением на обе ноги, амортизация за счёт сгибания ног, мяч укрыт корпусом.</p>`, 'Как выполнять': `<ol><li>Прыжок: отталкивание одной или двумя ногами.</li><li>Приземление: на обе ноги, колени согнуты.</li><li>Завершение: амортизация, мяч укрыт.</li></ol>`, 'Типичные ошибки': `<ul><li>Приземление на одну ногу.</li><li>Потеря равновесия.</li><li>Мяч не укрыт.</li></ul>`, 'Упражнения': `<ul><li>Остановка прыжком после ведения.</li><li>Остановка прыжком по сигналу.</li><li>Остановка прыжком в игровых упражнениях.</li></ul>` }, challenge: 'Выполни 10 остановок прыжком после ведения.', scheme: SVG_SCHEMES['hand-stop-jump'] },
      { id: 'hand-turn', title: 'Повороты на месте (с мячом и без мяча)', description: 'Используются для укрытия мяча и ухода от защитника.', content: { 'Теория': `<p>Опорная нога не отрывается от пола, маховая нога переставляется вокруг опорной, мяч укрыт корпусом.</p>`, 'Как выполнять': `<ol><li>Опорная нога: не отрывается от пола.</li><li>Маховая нога: переставляется вокруг опорной.</li><li>Мяч: укрыт корпусом.</li></ol>`, 'Типичные ошибки': `<ul><li>Отрыв опорной ноги.</li><li>Потеря равновесия.</li><li>Мяч не укрыт.</li></ul>`, 'Упражнения': `<ul><li>Повороты на месте без мяча.</li><li>Повороты с мячом.</li><li>Повороты в сочетании с ловлей и передачей мяча.</li></ul>` }, challenge: 'Выполни 10 поворотов на месте с мячом.', scheme: SVG_SCHEMES['hand-turn'] },
      { id: 'hand-shot', title: 'Бросок по воротам одной рукой (с места и в прыжке)', description: 'Основной способ завершения атаки, приносит большинство очков.', content: { 'Теория': `<p>Выполняется с разбега и прыжка, удар — в высшей точке, кисть напряжена, движение — хлёсткое.</p>`, 'Как выполнять': `<ol><li>Разбег: 2–4 шага.</li><li>Прыжок: одновременный толчок обеими ногами.</li><li>Замах: правая рука с мячом отводится назад.</li><li>Удар: резкий мах рукой, удар по мячу в высшей точке.</li><li>Приземление: на обе ноги.</li></ol>`, 'Типичные ошибки': `<ul><li>Несвоевременный прыжок.</li><li>Слабый замах.</li><li>Удар расслабленной кистью.</li><li>Неточный удар.</li></ul>`, 'Упражнения': `<ul><li>Броски по воротам с разных дистанций.</li><li>Броски на точность в парах.</li><li>Броски после ведения.</li><li>Броски через сетку.</li></ul>` }, challenge: 'Забрось мяч в ворота 5 раз с разных дистанций.', scheme: SVG_SCHEMES['hand-shot'] },
      { id: 'hand-feint', title: 'Финты (обманные движения)', description: 'Используются для обыгрыша защитника и создания свободного пространства.', content: { 'Теория': `<p>Финт — ложное движение, вводящее защитника в заблуждение. Выполняется корпусом, взглядом, сменой направления ведения.</p>`, 'Как выполнять': `<ol><li>Корпус: наклон в одну сторону, резкое движение в другую.</li><li>Взгляд: в сторону ложного движения.</li><li>Ведение: смена направления или скорости.</li></ol>`, 'Типичные ошибки': `<ul><li>Финт неубедителен.</li><li>Потеря контроля над мячом.</li><li>Нет смены направления.</li></ul>`, 'Упражнения': `<ul><li>Финты с мячом в парах.</li><li>Финты с последующим ведением или передачей.</li><li>Финты в игровых упражнениях.</li></ul>` }, challenge: 'Выполни 10 финтов в парах.', scheme: SVG_SCHEMES['hand-feint'] },
      { id: 'hand-def-ind', title: 'Индивидуальные действия в защите', description: 'Выбор позиции, блокирование броска, перехват мяча.', content: { 'Теория': `<p>Защитник должен перекрывать путь к воротам, блокировать бросок, перехватывать передачи.</p>`, 'Как выполнять': `<ol><li>Позиция: между соперником и воротами.</li><li>Блокирование: прыжок с поднятыми руками.</li><li>Перехват: резкий выход на мяч.</li></ol>`, 'Типичные ошибки': `<ul><li>Потеря позиции.</li><li>Несвоевременный прыжок.</li><li>Пропуск соперника.</li></ul>`, 'Упражнения': `<ul><li>Блокирование мяча, брошенного партнёром.</li><li>Перехват передачи в парах.</li><li>Игра в защите в игровых упражнениях.</li></ul>` }, challenge: 'Выполни 10 перехватов в парах.', scheme: SVG_SCHEMES['hand-def-ind'] },
      { id: 'hand-def-group', title: 'Групповые действия в защите', description: 'Взаимодействие двух и более защитников для перекрытия зон и подстраховки.', content: { 'Теория': `<p>Защитники должны координировать свои действия, перекрывать возможные направления атаки, страховать друг друга.</p>`, 'Как выполнять': `<ol><li>Согласование позиций.</li><li>Перекрытие зон.</li><li>Подстраховка партнёра.</li></ol>`, 'Типичные ошибки': `<ul><li>Несогласованность действий.</li><li>Оставленные зоны.</li><li>Отсутствие подстраховки.</li></ul>`, 'Упражнения': `<ul><li>Игра в защите 2 на 2, 3 на 3.</li><li>Перекрытие зон в игровых упражнениях.</li><li>Подстраховка партнёра.</li></ul>` }, challenge: 'Сыграй в защите 2 на 2 — 5 минут.', scheme: SVG_SCHEMES['hand-def-group'] },
      { id: 'hand-tactics', title: 'Командные тактические действия в нападении и защите', description: 'Включают индивидуальные, групповые и командные действия, направленные на достижение победы.', content: { 'Теория': `<p>В нападении — передачи, обманные удары, комбинации. В защите — страховка, подстраховка, взаимодействие.</p>`, 'Как выполнять': `<ol><li>Нападение: быстрые передачи, неожиданные удары, смена позиций.</li><li>Защита: перемещение, блокирование, приём мяча.</li></ol>`, 'Типичные ошибки': `<ul><li>Несогласованность действий.</li><li>Потеря позиции.</li><li>Медленная реакция.</li></ul>`, 'Упражнения': `<ul><li>Игра в «квадрате».</li><li>Учебные двусторонние игры.</li><li>Выполнение тактических комбинаций.</li></ul>` }, challenge: 'Сыграй в учебную двустороннюю игру 10 минут.', scheme: SVG_SCHEMES['hand-tactics'] }
    ]
  }
];
// ============================================================
// УЧАЩИМСЯ: РЕНДЕР
// ============================================================

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

// --- QR-код ---
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

const studentContainer = document.getElementById('studentContainer');

// 1. Экран плиток направлений
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

// 2. Экран списка тем (с описанием и прогресс-баром)
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
      <div style="padding: 20px 30px; border-bottom: 1px solid var(--border); display: flex; justify-content: space-between; align-items: center; gap: 15px; flex-wrap: wrap;">
        <div style="flex: 1; min-width: 200px;">
          <div style="font-weight: 800; color: var(--text); font-size: 1.1rem;">${sub.title}</div>
          ${sub.description ? `<div style="color: var(--text-muted); font-size: 0.9rem; margin-top: 4px;">${sub.description}</div>` : ''}
          ${isDone ? '<div style="color: var(--accent); font-size: 0.85rem; font-weight: 700; margin-top: 6px;">✅ Задание выполнено</div>' : ''}
        </div>
        <button class="btn" style="padding: 10px 20px; font-size: 0.85rem;" onclick="renderStudentSubDetail('${topicId}', '${sub.id}')">Открыть</button>
      </div>
    `;
  });

  html += `</div></div>`;
  studentContainer.innerHTML = html;
};

// 3. Экран конкретной темы (5 вкладок + челлендж + QR)
window.renderStudentSubDetail = function(topicId, subId) {
  const topic = STUDENT_DATA.find(t => t.id === topicId);
  const sub = topic.subtopics.find(s => s.id === subId);
  if (!sub) return;

  const tabs = ['Теория', 'Как выполнять', 'Типичные ошибки', 'Упражнения', 'Схема'];
  const tabEmoji = { 'Теория': '📖', 'Как выполнять': '📝', 'Типичные ошибки': '⚠️', 'Упражнения': '💪', 'Схема': '📐' };
  const isDone = isChallengeDone(topicId, subId);

  // Содержимое вкладки «Схема»
  const schemeContent = sub.scheme
    ? `<div style="text-align: center;">${sub.scheme}</div>`
    : `<p style="color: var(--text-muted); text-align: center;">Схема скоро появится</p>`;

  // Содержимое вкладок
  const contentMap = {
    'Теория': sub.content['Теория'] || '<p>Информация скоро появится.</p>',
    'Как выполнять': sub.content['Как выполнять'] || '<p>Информация скоро появится.</p>',
    'Типичные ошибки': sub.content['Типичные ошибки'] || '<p>Информация скоро появится.</p>',
    'Упражнения': sub.content['Упражнения'] || '<p>Информация скоро появится.</p>',
    'Схема': schemeContent
  };

  studentContainer.innerHTML = `
    <div class="method-detail">
      <div class="method-detail__header">
        <button class="method-detail__back" onclick="renderStudentSubtopics('${topicId}')">← Назад к темам</button>
        <h3 class="method-detail__title">${sub.title}</h3>
        ${sub.description ? `<p style="color: var(--text-muted); margin-top: 8px; font-size: 0.95rem;">${sub.description}</p>` : ''}
      </div>
      <div class="method-tabs" id="studentTabs">
        ${tabs.map((tab, i) => `<button class="method-tab ${i === 0 ? 'is-active' : ''}" data-tab="${tab}">${tabEmoji[tab]} ${tab}</button>`).join('')}
      </div>
      <div class="method-tab__content" id="studentTabContent">
        ${contentMap[tabs[0]]}
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

        <div style="background: var(--card); padding: 20px; border-radius: 16px; border: 1px solid var(--border); text-align: center;">
          <h4 style="color: var(--text); margin-bottom: 15px; font-size: 1rem;">🎬 Видео-разбор</h4>
          ${getQRCodeHTML(sub.title)}
          <p style="font-size: 0.85rem; color: var(--text-muted); margin-top: 10px;">Нет камеры? <a href="https://www.youtube.com/results?search_query=${encodeURIComponent(sub.title + ' техника выполнения')}" target="_blank" style="color: var(--primary); font-weight: bold; text-decoration: underline;">Открыть в YouTube</a></p>
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
    document.getElementById('studentTabContent').innerHTML = contentMap[tab] || '<p>Материал скоро появится.</p>';
  });
};

// Инициализация
if (studentContainer) renderStudentTiles();
// ============================================================
// УЧИТЕЛЮ: ВСЕ НАПРАВЛЕНИЯ
// ============================================================
const METHOD_DATA = {

  // ----------------------------------------------------------
  // ЛЁГКАЯ АТЛЕТИКА (14 тем)
  // ----------------------------------------------------------
  athletics: {
    icon: '🏃', title: 'Лёгкая атлетика',
    topics: [
      { id: 'ath-uniform', title: 'Равномерный бег (500–3000 м)', icon: '🏃', content: {
        'Темы': `<p>Бег в постоянном темпе без ускорений и замедлений. Применяется для развития общей выносливости.</p>`,
        'Как выполнять': `<p><strong>Методические акценты:</strong></p><ul><li>Следить за ритмом дыхания (вдох носом, выдох ртом).</li><li>Контролировать осанку — корпус слегка наклонён вперёд.</li><li>Дозировка: 500–3000 м в зависимости от возраста и подготовки.</li><li>Страховка: следить за состоянием учеников, при утомлении — снижать темп.</li></ul>`,
        'Подводящие упражнения': `<ul><li>Бег в умеренном темпе на 400–800 м с контролем дыхания.</li><li>Интервальный бег: 200 м быстро, 200 м медленно.</li><li>Бег с изменением темпа по сигналу учителя.</li></ul>`,
        'Типичные ошибки и исправления': `<ul><li><strong>Резкие ускорения и замедления</strong> — объяснить важность ровного темпа, показать пример.</li><li><strong>Сбивчивое дыхание</strong> — отработать дыхание на месте, затем в движении.</li><li><strong>Наклон корпуса назад</strong> — напомнить о наклоне вперёд, показать зеркально.</li><li><strong>«Шлёпающая» постановка стопы</strong> — упражнение «перекат с пятки на носок».</li></ul>`,
        'Видео, картинки': `<p>QR-код на видео + SVG-схема (как у ученика).</p>`
      }},
      { id: 'ath-high', title: 'Высокий старт', icon: '🏃', content: {
        'Темы': `<p>Применяется на средних и длинных дистанциях (от 400 м и более). Позволяет быстро начать бег без стартовых колодок.</p>`,
        'Как выполнять': `<p><strong>Методические акценты:</strong></p><ul><li>Отрабатывать команды «На старт!», «Внимание!», «Марш!».</li><li>Следить за наклоном корпуса и работой рук.</li><li>Дозировка: 5–8 стартов на уроке.</li><li>Страховка: следить за дистанцией между учениками.</li></ul>`,
        'Подводящие упражнения': `<ul><li>Старты из разных положений.</li><li>Бег с высокого старта на 20–30 м.</li><li>Игра «Кто быстрее?» — старт по сигналу.</li></ul>`,
        'Типичные ошибки и исправления': `<ul><li><strong>Выпрямление корпуса до начала бега</strong> — показать правильное положение, использовать зеркало.</li><li><strong>Медленная реакция</strong> — тренировать реакцию на сигнал (хлопок, свисток).</li><li><strong>Неправильная постановка ног</strong> — отработать положение стоп у линии старта.</li></ul>`,
        'Видео, картинки': `<p>QR-код на видео + SVG-схема.</p>`
      }},
      { id: 'ath-low', title: 'Низкий старт', icon: '🏃', content: {
        'Темы': `<p>Используется на коротких дистанциях (до 400 м). Обеспечивает максимально быстрое начало бега за счёт упора руками и сильного толчка ногами.</p>`,
        'Как выполнять': `<p><strong>Методические акценты:</strong></p><ul><li>Отрабатывать положение рук и ног в колодках.</li><li>Следить за подъёмом таза по команде «Внимание!».</li><li>Дозировка: 5–8 стартов на уроке.</li><li>Страховка: колодки должны быть надёжно закреплены.</li></ul>`,
        'Подводящие упражнения': `<ul><li>Принятие положения низкого старта без колодок.</li><li>Бег с низкого старта на 10–20 м.</li><li>Упражнение «Старт по хлопку».</li></ul>`,
        'Типичные ошибки и исправления': `<ul><li><strong>Раннее выпрямление корпуса</strong> — акцентировать наклон, использовать ориентир.</li><li><strong>Слабый толчок</strong> — отработать силу толчка в подводящих упражнениях.</li><li><strong>Неправильная постановка рук</strong> — показать правильное положение кистей.</li></ul>`,
        'Видео, картинки': `<p>QR-код на видео + SVG-схема.</p>`
      }},
      { id: 'ath-technique', title: 'Техника бега', icon: '🏃', content: {
        'Темы': `<p>Совокупность движений, обеспечивающих эффективное передвижение. Включает работу рук, постановку стопы, наклон корпуса, дыхание.</p>`,
        'Как выполнять': `<p><strong>Методические акценты:</strong></p><ul><li>Следить за работой рук (локти согнуты, движение вперёд-назад).</li><li>Контролировать постановку стопы (перекат с пятки на носок).</li><li>Дозировка: 3–4 упражнения по 30–40 м.</li><li>Страховка: следить за дистанцией.</li></ul>`,
        'Подводящие упражнения': `<ul><li>Бег с высоким подниманием бедра.</li><li>Бег с захлёстыванием голени.</li><li>Семенящий бег.</li></ul>`,
        'Типичные ошибки и исправления': `<ul><li><strong>Зажатость плечевого пояса</strong> — упражнения на расслабление.</li><li><strong>Неправильная работа рук</strong> — показать и отработать движение рук.</li><li><strong>«Шлёпающая» постановка стопы</strong> — упражнение «перекат».</li><li><strong>Сбивчивое дыхание</strong> — дыхательные упражнения.</li></ul>`,
        'Видео, картинки': `<p>QR-код на видео + SVG-схема.</p>`
      }},
      { id: 'ath-finish', title: 'Финиширование', icon: '🏃', content: {
        'Темы': `<p>Завершение дистанции с максимальной скоростью. Важно не снижать темп до пересечения финишной черты.</p>`,
        'Как выполнять': `<p><strong>Методические акценты:</strong></p><ul><li>Отрабатывать бросок грудью или плечом.</li><li>Следить, чтобы ученики не тормозили перед финишем.</li><li>Дозировка: 3–5 финишных бросков.</li><li>Страховка: следить за свободным местом после финиша.</li></ul>`,
        'Подводящие упражнения': `<ul><li>Бег на 30 м с ускорением на последних 10 м.</li><li>Имитация финиширования на месте.</li><li>Эстафеты с финишным броском.</li></ul>`,
        'Типичные ошибки и исправления': `<ul><li><strong>Снижение скорости до финиша</strong> — объяснить важность полной скорости.</li><li><strong>Ранний наклон корпуса</strong> — показать правильный момент броска.</li><li><strong>Потеря координации</strong> — отработать бросок на месте.</li></ul>`,
        'Видео, картинки': `<p>QR-код на видео + SVG-схема.</p>`
      }},
      { id: 'ath-sprint', title: 'Бег 30, 60, 100, 200, 400 м', icon: '🏃', content: {
        'Темы': `<p>Спринтерские дистанции, требующие максимальной скорости и техники. Включают старт, стартовый разгон, бег по дистанции, финиширование.</p>`,
        'Как выполнять': `<p><strong>Методические акценты:</strong></p><ul><li>Отрабатывать каждую фазу отдельно.</li><li>Следить за максимальной скоростью на дистанции.</li><li>Дозировка: 3–5 пробежек на дистанцию.</li><li>Страховка: достаточное место для торможения.</li></ul>`,
        'Подводящие упражнения': `<ul><li>Повторный бег на 30–60 м с максимальной скоростью.</li><li>Бег с ускорением на 20–30 м.</li><li>Эстафеты на короткие дистанции.</li></ul>`,
        'Типичные ошибки и исправления': `<ul><li><strong>Медленный старт</strong> — отработать старт отдельно.</li><li><strong>Неправильный разгон</strong> — подводящие упражнения.</li><li><strong>Потеря техники</strong> — снизить скорость, отработать технику.</li><li><strong>Раннее замедление</strong> — акцент на финише.</li></ul>`,
        'Видео, картинки': `<p>QR-код на видео + SVG-схема.</p>`
      }},
      { id: 'ath-shuttle', title: 'Челночный бег', icon: '🏃', content: {
        'Темы': `<p>Бег с резкими разворотами на коротких отрезках (обычно 3×10 м). Развивает скоростную выносливость, координацию, ловкость.</p>`,
        'Как выполнять': `<p><strong>Методические акценты:</strong></p><ul><li>Отрабатывать резкий разворот с касанием рукой пола.</li><li>Следить за низким положением корпуса при развороте.</li><li>Дозировка: 3–5 пробежек.</li><li>Страховка: нескользящее покрытие.</li></ul>`,
        'Подводящие упражнения': `<ul><li>Челночный бег 3×10 м.</li><li>Челночный бег 4×9 м.</li><li>Игра «Змейка» с резкими поворотами.</li></ul>`,
        'Типичные ошибки и исправления': `<ul><li><strong>Медленный разворот</strong> — отработать технику разворота.</li><li><strong>Потеря равновесия</strong> — упражнения на координацию.</li><li><strong>Неправильная постановка ног</strong> — показать стопорящий шаг.</li></ul>`,
        'Видео, картинки': `<p>QR-код на видео + SVG-схема.</p>`
      }},
      { id: 'ath-relay', title: 'Эстафетный бег', icon: '🏃', content: {
        'Темы': `<p>Командный бег с передачей эстафетной палочки. Важно соблюдать зону передачи, не ронять палочку.</p>`,
        'Как выполнять': `<p><strong>Методические акценты:</strong></p><ul><li>Отрабатывать передачу палочки на месте и в движении.</li><li>Следить за зоной передачи (20 м).</li><li>Дозировка: 5–8 передач.</li><li>Страховка: следить за дистанцией между командами.</li></ul>`,
        'Подводящие упражнения': `<ul><li>Передача эстафетной палочки на месте.</li><li>Эстафеты 4×30 м.</li><li>Встречная эстафета.</li></ul>`,
        'Типичные ошибки и исправления': `<ul><li><strong>Потеря палочки</strong> — отработать хват и передачу.</li><li><strong>Передача вне зоны</strong> — обозначить зону, тренировать.</li><li><strong>Несогласованность</strong> — командные упражнения.</li></ul>`,
        'Видео, картинки': `<p>QR-код на видео + SVG-схема.</p>`
      }},
      { id: 'ath-jump', title: 'Прыжок в длину с места', icon: '🏃', content: {
        'Темы': `<p>Прыжок с двух ног на максимальное расстояние. Важно мощное отталкивание и правильная координация.</p>`,
        'Как выполнять': `<p><strong>Методические акценты:</strong></p><ul><li>Отрабатывать глубокий присед и мах руками.</li><li>Следить за приземлением на обе ноги.</li><li>Дозировка: 2–3 подхода по 8–10 прыжков.</li><li>Страховка: прыжок в яму с песком или на мат.</li></ul>`,
        'Подводящие упражнения': `<ul><li>Прыжки с места на дальность.</li><li>Прыжки через скакалку.</li><li>Прыжки с доставанием предмета рукой.</li></ul>`,
        'Типичные ошибки и исправления': `<ul><li><strong>Слабый толчок</strong> — отработать силу ног.</li><li><strong>Неправильный мах руками</strong> — показать мах.</li><li><strong>Приземление на одну ногу</strong> — акцент на две ноги.</li></ul>`,
        'Видео, картинки': `<p>QR-код на видео + SVG-схема.</p>`
      }},
      { id: 'ath-jump-run', title: 'Прыжок в длину с разбега', icon: '🏃', content: {
        'Темы': `<p>Прыжок с разбега на максимальное расстояние. Требует точного попадания на брусок, мощного отталкивания.</p>`,
        'Как выполнять': `<p><strong>Методические акценты:</strong></p><ul><li>Отрабатывать разбег (22–24 шага).</li><li>Следить за попаданием на брусок.</li><li>Дозировка: 5–8 прыжков.</li><li>Страховка: яма с песком, достаточное место.</li></ul>`,
        'Подводящие упражнения': `<ul><li>Прыжки с короткого разбега.</li><li>Прыжки с доставанием предмета в полёте.</li><li>Прыжки через барьеры.</li></ul>`,
        'Типичные ошибки и исправления': `<ul><li><strong>Недолёт или перелёт за брусок</strong> — отрегулировать разбег.</li><li><strong>Слабый толчок</strong> — подводящие упражнения.</li><li><strong>Неправильное приземление</strong> — отработать приземление.</li></ul>`,
        'Видео, картинки': `<p>QR-код на видео + SVG-схема.</p>`
      }},
      { id: 'ath-throw', title: 'Метание малого мяча', icon: '🏃', content: {
        'Темы': `<p>Метание мяча (150 г) на дальность или в цель. Важно правильное держание, замах, скрестный шаг, финальное усилие.</p>`,
        'Как выполнять': `<p><strong>Методические акценты:</strong></p><ul><li>Отрабатывать держание мяча фалангами пальцев.</li><li>Следить за скрестным шагом.</li><li>Дозировка: 8–10 бросков.</li><li>Страховка: метание в одну сторону, по команде.</li></ul>`,
        'Подводящие упражнения': `<ul><li>Метание мяча в цель с 6–10 м.</li><li>Метание мяча на дальность.</li><li>Метание с места и с шага.</li></ul>`,
        'Типичные ошибки и исправления': `<ul><li><strong>Неправильный хват</strong> — показать хват.</li><li><strong>Слабый замах</strong> — отработать замах.</li><li><strong>Отсутствие скрестного шага</strong> — подводящие упражнения.</li><li><strong>Бросок только рукой</strong> — акцент на работу корпуса.</li></ul>`,
        'Видео, картинки': `<p>QR-код на видео + SVG-схема.</p>`
      }},
      { id: 'ath-grenade', title: 'Метание гранаты', icon: '🏃', content: {
        'Темы': `<p>Метание гранаты (500/700 г) на дальность. Техника схожа с метанием копья, но требует большей силы и координации.</p>`,
        'Как выполнять': `<p><strong>Методические акценты:</strong></p><ul><li>Отрабатывать держание за рукоятку.</li><li>Следить за разбегом и скрестным шагом.</li><li>Дозировка: 5–8 бросков.</li><li>Страховка: строго в одну сторону, по команде.</li></ul>`,
        'Подводящие упражнения': `<ul><li>Метание гранаты с места.</li><li>Метание гранаты с разбега.</li><li>Метание в сектор на дальность.</li></ul>`,
        'Типичные ошибки и исправления': `<ul><li><strong>Неправильный хват</strong> — показать хват.</li><li><strong>Слабый разбег</strong> — отработать разбег.</li><li><strong>Отсутствие хлёста кисти</strong> — подводящие упражнения.</li><li><strong>Преждевременное отпускание</strong> — акцент на финальном усилии.</li></ul>`,
        'Видео, картинки': `<p>QR-код на видео + SVG-схема.</p>`
      }},
      { id: 'ath-multi', title: 'Многоскоки', icon: '🏃', content: {
        'Темы': `<p>Развитие силы отталкивания и выносливости. Прыжки с ноги на ногу с активным махом свободной ноги.</p>`,
        'Как выполнять': `<p><strong>Методические акценты:</strong></p><ul><li>Следить за прямым корпусом и работой рук.</li><li>Отрабатывать активный мах свободной ногой.</li><li>Дозировка: 3–4 подхода по 20 м.</li><li>Страховка: мягкое покрытие.</li></ul>`,
        'Подводящие упражнения': `<ul><li>Многоскоки на 20 м.</li><li>Многоскоки через препятствия.</li><li>Прыжки на одной ноге.</li></ul>`,
        'Типичные ошибки и исправления': `<ul><li><strong>Приземление на прямые ноги</strong> — акцент на сгибание.</li><li><strong>Слабый мах</strong> — отработать мах.</li></ul>`,
        'Видео, картинки': `<p>QR-код на видео + SVG-схема.</p>`
      }},
      { id: 'ath-medball', title: 'Метание набивного мяча', icon: '🏃', content: {
        'Темы': `<p>Развитие силы спины и рук, гибкости плечевого пояса. Упражнения с набивным мячом.</p>`,
        'Как выполнять': `<p><strong>Методические акценты:</strong></p><ul><li>Отрабатывать броски из-за головы (сидя и стоя).</li><li>Следить за работой ног.</li><li>Дозировка: 8–10 бросков.</li><li>Страховка: мяч не должен быть тяжёлым для ученика.</li></ul>`,
        'Подводящие упражнения': `<ul><li>Броски набивного мяча из-за головы.</li><li>Броски от груди.</li><li>Броски назад через голову.</li></ul>`,
        'Типичные ошибки и исправления': `<ul><li><strong>Слабый мах руками</strong> — отработать мах.</li><li><strong>Бросок только руками</strong> — акцент на работу ног.</li></ul>`,
        'Видео, картинки': `<p>QR-код на видео + SVG-схема.</p>`
      }}
    ]
  },

  // ----------------------------------------------------------
  // ГИМНАСТИКА (12 тем)
  // ----------------------------------------------------------
  gym: {
    icon: '🤸', title: 'Гимнастика',
    topics: [
      { id: 'gym-oru', title: 'ОРУ с предметами', icon: '🤸', content: {
        'Темы': `<p>Общеразвивающие упражнения с гимнастическими палками, мячами, обручами, скакалками. Развивают все группы мышц, улучшают осанку.</p>`,
        'Как выполнять': `<p><strong>Методические акценты:</strong></p><ul><li>Показ упражнений с правильной осанкой.</li><li>Дозировка: 6–8 упражнений по 6–8 повторений.</li><li>Страховка: следить за дистанцией между учениками.</li></ul>`,
        'Подводящие упражнения': `<ul><li>Приседания с гимнастической палкой на плечах.</li><li>Повороты туловища с мячом в руках.</li><li>Прыжки через скакалку на двух ногах.</li><li>Наклоны вперёд с обручем.</li></ul>`,
        'Типичные ошибки и исправления': `<ul><li><strong>Неправильная осанка</strong> — показать правильную осанку.</li><li><strong>Резкие движения</strong> — акцент на плавность.</li><li><strong>Потеря предмета</strong> — отработать хват.</li><li><strong>Несогласованность</strong> — медленный темп.</li></ul>`,
        'Видео, картинки': `<p>QR-код на видео + SVG-схема.</p>`
      }},
      { id: 'gym-group', title: 'Группировка', icon: '🤸', content: {
        'Темы': `<p>Согнутое положение тела, при котором колени подтянуты к груди, локти прижаты к туловищу, спина округлена.</p>`,
        'Как выполнять': `<p><strong>Методические акценты:</strong></p><ul><li>Отрабатывать группировку из разных положений.</li><li>Следить за округлой спиной и наклоном головы.</li><li>Дозировка: 3–5 повторений.</li><li>Страховка: маты под учениками.</li></ul>`,
        'Подводящие упражнения': `<ul><li>Группировка из положения сидя.</li><li>Группировка из положения лёжа на спине.</li><li>Перекат назад-вперёд в группировке.</li></ul>`,
        'Типичные ошибки и исправления': `<ul><li><strong>Откинутая назад голова</strong> — показать наклон.</li><li><strong>Неплотная группировка</strong> — отработать хват.</li><li><strong>Разведённые ноги</strong> — акцент на вместе.</li></ul>`,
        'Видео, картинки': `<p>QR-код на видео + SVG-схема.</p>`
      }},
      { id: 'gym-roll', title: 'Перекаты', icon: '🤸', content: {
        'Темы': `<p>Вращательные движения тела с последовательным касанием опоры без переворачивания через голову. Подводящие к кувыркам.</p>`,
        'Как выполнять': `<p><strong>Методические акценты:</strong></p><ul><li>Отрабатывать перекаты из упора присев и лёжа.</li><li>Следить за группировкой.</li><li>Дозировка: 3–5 повторений.</li><li>Страховка: маты, помощь учителя.</li></ul>`,
        'Подводящие упражнения': `<ul><li>Перекат назад из упора присев в упор присев.</li><li>Перекат вперёд из группировки лёжа на спине.</li><li>Перекаты в стороны из упора стоя на коленях.</li></ul>`,
        'Типичные ошибки и исправления': `<ul><li><strong>Отсутствие группировки</strong> — отработать группировку.</li><li><strong>Неправильная постановка рук</strong> — показать.</li><li><strong>Медленное выполнение</strong> — акцент на темп.</li></ul>`,
        'Видео, картинки': `<p>QR-код на видео + SVG-схема.</p>`
      }},
      { id: 'gym-fwd', title: 'Кувырок вперёд', icon: '🤸', content: {
        'Темы': `<p>Вращательное движение тела с переворачиванием через голову вперёд. Развивает смелость, координацию.</p>`,
        'Как выполнять': `<p><strong>Методические акценты:</strong></p><ul><li>Отрабатывать постановку рук и наклон головы.</li><li>Следить за группировкой.</li><li>Дозировка: 3–5 кувырков.</li><li>Страховка: маты, помощь учителя.</li></ul>`,
        'Подводящие упражнения': `<ul><li>Кувырок вперёд из упора присев.</li><li>Два-три кувырка вперёд слитно.</li><li>Кувырок вперёд с возвышения (горки).</li></ul>`,
        'Типичные ошибки и исправления': `<ul><li><strong>Опора руками близко к ногам</strong> — показать постановку.</li><li><strong>Отсутствие группировки</strong> — отработать.</li><li><strong>Медленное переворачивание</strong> — акцент на темп.</li><li><strong>Неправильная постановка рук</strong> — показать.</li></ul>`,
        'Видео, картинки': `<p>QR-код на видео + SVG-схема.</p>`
      }},
      { id: 'gym-back', title: 'Кувырок назад', icon: '🤸', content: {
        'Темы': `<p>Вращательное движение тела с переворачиванием через голову назад. Развивает координацию и смелость.</p>`,
        'Как выполнять': `<p><strong>Методические акценты:</strong></p><ul><li>Отрабатывать постановку рук за головой.</li><li>Следить за толчком руками.</li><li>Дозировка: 3–5 кувырков.</li><li>Страховка: маты, помощь учителя.</li></ul>`,
        'Подводящие упражнения': `<ul><li>Кувырок назад из упора присев.</li><li>Кувырок назад с помощью учителя.</li><li>Кувырок назад по наклонной поверхности.</li></ul>`,
        'Типичные ошибки и исправления': `<ul><li><strong>Неправильная постановка рук</strong> — показать.</li><li><strong>Отсутствие группировки</strong> — отработать.</li><li><strong>Медленное переворачивание</strong> — акцент на темп.</li><li><strong>Опора на затылок</strong> — акцент на руки.</li></ul>`,
        'Видео, картинки': `<p>QR-код на видео + SVG-схема.</p>`
      }},
      { id: 'gym-stand', title: 'Стойка на лопатках', icon: '🤸', content: {
        'Темы': `<p>Стойка вверх ногами с опорой на лопатки, затылок и локти. Развивает силу мышц спины и пресса.</p>`,
        'Как выполнять': `<p><strong>Методические акценты:</strong></p><ul><li>Отрабатывать перекат назад и постановку рук под поясницу.</li><li>Следить за вертикальным положением ног.</li><li>Дозировка: 3–5 подходов по 10–15 с.</li><li>Страховка: маты, помощь учителя.</li></ul>`,
        'Подводящие упражнения': `<ul><li>Стойка на лопатках с согнутыми ногами.</li><li>Стойка на лопатках с прямыми ногами.</li><li>Перекат из стойки на лопатках в упор присев.</li></ul>`,
        'Типичные ошибки и исправления': `<ul><li><strong>Сгибание ног</strong> — акцент на выпрямление.</li><li><strong>Неправильное положение рук</strong> — показать.</li><li><strong>Отклонение туловища</strong> — акцент на вертикаль.</li></ul>`,
        'Видео, картинки': `<p>QR-код на видео + SVG-схема.</p>`
      }},
      { id: 'gym-bridge', title: 'Мост', icon: '🤸', content: {
        'Темы': `<p>Дугообразное прогнутое положение тела спиной к опоре. Развивает гибкость позвоночника.</p>`,
        'Как выполнять': `<p><strong>Методические акценты:</strong></p><ul><li>Отрабатывать постановку рук и ног.</li><li>Следить за прогибом.</li><li>Дозировка: 3–5 повторений.</li><li>Страховка: маты, помощь учителя.</li></ul>`,
        'Подводящие упражнения': `<ul><li>Мост из положения лёжа на спине.</li><li>Мост из положения стоя с помощью.</li><li>Покачивания вперёд-назад в положении мост.</li></ul>`,
        'Типичные ошибки и исправления': `<ul><li><strong>Согнутые ноги</strong> — акцент на выпрямление.</li><li><strong>Неправильная постановка рук</strong> — показать.</li><li><strong>Недостаточный прогиб</strong> — подводящие упражнения.</li><li><strong>Голова наклонена вперёд</strong> — акцент на назад.</li></ul>`,
        'Видео, картинки': `<p>QR-код на видео + SVG-схема.</p>`
      }},
      { id: 'gym-swallow', title: 'Ласточка', icon: '🤸', content: {
        'Темы': `<p>Равновесие на одной ноге с наклоном туловища вперёд и отведением другой ноги назад. Развивает равновесие.</p>`,
        'Как выполнять': `<p><strong>Методические акценты:</strong></p><ul><li>Отрабатывать положение рук и ног.</li><li>Следить за равновесием.</li><li>Дозировка: 3–5 подходов по 10 с.</li><li>Страховка: рядом с опорой.</li></ul>`,
        'Подводящие упражнения': `<ul><li>Удержание положения «ласточка» на время.</li><li>Переход из основной стойки в «ласточку» и обратно.</li><li>«Ласточка» с закрытыми глазами.</li></ul>`,
        'Типичные ошибки и исправления': `<ul><li><strong>Потеря равновесия</strong> — упражнения на баланс.</li><li><strong>Согнутая опорная нога</strong> — акцент на выпрямление.</li><li><strong>Неправильное положение рук</strong> — показать.</li></ul>`,
        'Видео, картинки': `<p>QR-код на видео + SVG-схема.</p>`
      }},
      { id: 'gym-wheel', title: 'Колесо', icon: '🤸', content: {
        'Темы': `<p>Переворот в сторону с опорой на руки и ноги. Развивает смелость и координацию.</p>`,
        'Как выполнять': `<p><strong>Методические акценты:</strong></p><ul><li>Отрабатывать стойку на руках у стены.</li><li>Следить за махом ногой.</li><li>Дозировка: 3–5 повторений.</li><li>Страховка: маты, помощь учителя.</li></ul>`,
        'Подводящие упражнения': `<ul><li>Стойка на руках с помощью.</li><li>Махи ногами у стены.</li><li>Колесо с помощью учителя.</li></ul>`,
        'Типичные ошибки и исправления': `<ul><li><strong>Неправильная постановка рук</strong> — показать.</li><li><strong>Недостаточный мах</strong> — отработать мах.</li><li><strong>Потеря равновесия</strong> — упражнения на баланс.</li></ul>`,
        'Видео, картинки': `<p>QR-код на видео + SVG-схема.</p>`
      }},
      { id: 'gym-head', title: 'Стойка на голове', icon: '🤸', content: {
        'Темы': `<p>Стойка вверх ногами с опорой на голову и руки. Развивает силу и координацию.</p>`,
        'Как выполнять': `<p><strong>Методические акценты:</strong></p><ul><li>Отрабатывать постановку рук и головы треугольником.</li><li>Следить за переносом веса на руки.</li><li>Дозировка: 3–5 подходов по 5–10 с.</li><li>Страховка: маты, помощь учителя.</li></ul>`,
        'Подводящие упражнения': `<ul><li>Стойка на голове с согнутыми ногами.</li><li>Стойка на голове с помощью учителя.</li><li>Упражнения на укрепление мышц шеи и рук.</li></ul>`,
        'Типичные ошибки и исправления': `<ul><li><strong>Неправильная постановка головы и рук</strong> — показать.</li><li><strong>Перенос веса на голову</strong> — акцент на руки.</li><li><strong>Падение</strong> — страховка.</li></ul>`,
        'Видео, картинки': `<p>QR-код на видео + SVG-схема.</p>`
      }},
      { id: 'gym-hands', title: 'Стойка на руках', icon: '🤸', content: {
        'Темы': `<p>Стойка вверх ногами с опорой на руки. Развивает силу рук и плечевого пояса.</p>`,
        'Как выполнять': `<p><strong>Методические акценты:</strong></p><ul><li>Отрабатывать мах и толчок.</li><li>Следить за выпрямленными руками.</li><li>Дозировка: 3–5 подходов по 5–10 с.</li><li>Страховка: маты, помощь учителя.</li></ul>`,
        'Подводящие упражнения': `<ul><li>Стойка на руках у стены.</li><li>Стойка на руках с помощью.</li><li>Махи ногами в стойке на руках.</li></ul>`,
        'Типичные ошибки и исправления': `<ul><li><strong>Согнутые руки</strong> — акцент на выпрямление.</li><li><strong>Недостаточный мах</strong> — отработать мах.</li><li><strong>Падение</strong> — страховка.</li></ul>`,
        'Видео, картинки': `<p>QR-код на видео + SVG-схема.</p>`
      }},
      { id: 'gym-rope', title: 'Лазание по канату', icon: '🤸', content: {
        'Темы': `<p>Перемещение вверх по канату с помощью рук и ног. Развивает силу и выносливость.</p>`,
        'Как выполнять': `<p><strong>Методические акценты:</strong></p><ul><li>Отрабатывать захват каната ногами.</li><li>Следить за работой рук и ног.</li><li>Дозировка: 2–3 подхода.</li><li>Страховка: маты под канатом, помощь учителя.</li></ul>`,
        'Подводящие упражнения': `<ul><li>Лазание по канату в три приёма.</li><li>Вис на канате на время.</li><li>Подтягивания на канате.</li></ul>`,
        'Типичные ошибки и исправления': `<ul><li><strong>Слабый захват</strong> — отработать захват.</li><li><strong>Недостаточная работа ног</strong> — акцент на ноги.</li><li><strong>Быстрое утомление рук</strong> — дозировать нагрузку.</li></ul>`,
        'Видео, картинки': `<p>QR-код на видео + SVG-схема.</p>`
      }}
    ]
  },

  // ----------------------------------------------------------
  // ЛЫЖНАЯ ПОДГОТОВКА (9 тем)
  // ----------------------------------------------------------
  ski: {
    icon: '🎿', title: 'Лыжная подготовка',
    topics: [
      { id: 'ski-classic', title: 'Попеременный двухшажный ход', icon: '🎿', content: {
        'Темы': `<p>Основной классический лыжный ход, применяется на равнине, пологих подъёмах и спусках.</p>`,
        'Как выполнять': `<p><strong>Методические акценты:</strong></p><ul><li>Отрабатывать согласованность рук и ног.</li><li>Следить за скольжением.</li><li>Дозировка: 100–200 м.</li><li>Страховка: ровная лыжня, дистанция между учениками.</li></ul>`,
        'Подводящие упражнения': `<ul><li>Имитация хода на месте без лыж.</li><li>Ходьба на лыжах с акцентом на скольжение.</li><li>Выполнение хода на равнине и пологом подъёме.</li></ul>`,
        'Типичные ошибки и исправления': `<ul><li><strong>Несогласованность рук и ног</strong> — медленный темп, показ.</li><li><strong>Отсутствие скольжения</strong> — акцент на перенос веса.</li><li><strong>Неправильная постановка палок</strong> — показать.</li></ul>`,
        'Видео, картинки': `<p>QR-код на видео + SVG-схема.</p>`
      }},
      { id: 'ski-bez', title: 'Одновременный бесшажный ход', icon: '🎿', content: {
        'Темы': `<p>Применяется на равнине и пологих спусках при хорошем скольжении. Отталкивание только руками.</p>`,
        'Как выполнять': `<p><strong>Методические акценты:</strong></p><ul><li>Отрабатывать одновременный толчок палками.</li><li>Следить за наклоном туловища.</li><li>Дозировка: 50–100 м.</li><li>Страховка: ровная лыжня.</li></ul>`,
        'Подводящие упражнения': `<ul><li>Имитация хода на месте с палками.</li><li>Ход на лыжах только с работой рук.</li><li>Выполнение хода на раскатанной лыжне.</li></ul>`,
        'Типичные ошибки и исправления': `<ul><li><strong>Недостаточный наклон туловища</strong> — показать.</li><li><strong>Слабое отталкивание</strong> — отработать толчок.</li><li><strong>Несогласованность рук</strong> — медленный темп.</li></ul>`,
        'Видео, картинки': `<p>QR-код на видео + SVG-схема.</p>`
      }},
      { id: 'ski-odn', title: 'Одновременный одношажный ход', icon: '🎿', content: {
        'Темы': `<p>Применяется на равнине и спусках для развития скорости. Один скользящий шаг и одновременное отталкивание палками.</p>`,
        'Как выполнять': `<p><strong>Методические акценты:</strong></p><ul><li>Отрабатывать сочетание шага и толчка.</li><li>Следить за согласованностью.</li><li>Дозировка: 100–150 м.</li><li>Страховка: ровная лыжня.</li></ul>`,
        'Подводящие упражнения': `<ul><li>Имитация хода на месте.</li><li>Выполнение хода на равнине и пологом спуске.</li><li>Ускорения на коротких отрезках.</li></ul>`,
        'Типичные ошибки и исправления': `<ul><li><strong>Несогласованность движений</strong> — медленный темп.</li><li><strong>Слабый толчок</strong> — отработать.</li><li><strong>Неправильная постановка палок</strong> — показать.</li></ul>`,
        'Видео, картинки': `<p>QR-код на видео + SVG-схема.</p>`
      }},
      { id: 'ski-dva', title: 'Одновременный двухшажный ход', icon: '🎿', content: {
        'Темы': `<p>Применяется на равнине и пологих спусках. Два скользящих шага и одновременное отталкивание палками.</p>`,
        'Как выполнять': `<p><strong>Методические акценты:</strong></p><ul><li>Отрабатывать два шага и толчок.</li><li>Следить за мощным отталкиванием.</li><li>Дозировка: 100–200 м.</li><li>Страховка: ровная лыжня.</li></ul>`,
        'Подводящие упражнения': `<ul><li>Имитация хода на месте.</li><li>Выполнение хода на равнине и спуске.</li><li>Комбинации с другими ходами.</li></ul>`,
        'Типичные ошибки и исправления': `<ul><li><strong>Несогласованность движений</strong> — медленный темп.</li><li><strong>Слабый толчок</strong> — отработать.</li><li><strong>Неправильная постановка палок</strong> — показать.</li></ul>`,
        'Видео, картинки': `<p>QR-код на видео + SVG-схема.</p>`
      }},
      { id: 'ski-up', title: 'Подъёмы на лыжах', icon: '🎿', content: {
        'Темы': `<p>Способы преодоления подъёмов: «ёлочка», «полуёлочка», «лесенка».</p>`,
        'Как выполнять': `<p><strong>Методические акценты:</strong></p><ul><li>Отрабатывать каждый способ отдельно.</li><li>Следить за постановкой лыж.</li><li>Дозировка: 3–5 подъёмов.</li><li>Страховка: пологий склон.</li></ul>`,
        'Подводящие упражнения': `<ul><li>Отработка каждого способа на учебном склоне.</li><li>Преодоление подъёма разными способами.</li></ul>`,
        'Типичные ошибки и исправления': `<ul><li><strong>Недостаточный разворот лыж</strong> — показать.</li><li><strong>Потеря равновесия</strong> — упражнения на баланс.</li><li><strong>Проскальзывание</strong> — акцент на постановку лыж.</li></ul>`,
        'Видео, картинки': `<p>QR-код на видео + SVG-схема.</p>`
      }},
      { id: 'ski-down', title: 'Спуски на лыжах', icon: '🎿', content: {
        'Темы': `<p>Спуски в высокой, средней и низкой стойках. Развивают равновесие и координацию.</p>`,
        'Как выполнять': `<p><strong>Методические акценты:</strong></p><ul><li>Отрабатывать каждую стойку.</li><li>Следить за равновесием.</li><li>Дозировка: 3–5 спусков.</li><li>Страховка: пологий склон, отсутствие препятствий.</li></ul>`,
        'Подводящие упражнения': `<ul><li>Спуски в разных стойках.</li><li>Изменение стойки во время спуска.</li></ul>`,
        'Типичные ошибки и исправления': `<ul><li><strong>Потеря равновесия</strong> — упражнения на баланс.</li><li><strong>Неправильная стойка</strong> — показать.</li><li><strong>Избыточное напряжение</strong> — акцент на расслабление.</li></ul>`,
        'Видео, картинки': `<p>QR-код на видео + SVG-схема.</p>`
      }},
      { id: 'ski-brake', title: 'Торможение на лыжах', icon: '🎿', content: {
        'Темы': `<p>Основные способы — «плуг», «упор», «падение». Развивают умение быстро снижать скорость.</p>`,
        'Как выполнять': `<p><strong>Методические акценты:</strong></p><ul><li>Отрабатывать «плуг» и «упор».</li><li>Следить за распределением веса.</li><li>Дозировка: 3–5 торможений.</li><li>Страховка: пологий склон.</li></ul>`,
        'Подводящие упражнения': `<ul><li>Отработка торможения «плугом» на пологом склоне.</li><li>Торможение «упором» на учебном склоне.</li></ul>`,
        'Типичные ошибки и исправления': `<ul><li><strong>Недостаточный разворот лыж</strong> — показать.</li><li><strong>Потеря равновесия</strong> — упражнения на баланс.</li><li><strong>Неправильное распределение веса</strong> — показать.</li></ul>`,
        'Видео, картинки': `<p>QR-код на видео + SVG-схема.</p>`
      }},
      { id: 'ski-turn', title: 'Повороты на лыжах', icon: '🎿', content: {
        'Темы': `<p>Повороты переступанием, «плугом», «упором», на параллельных лыжах. Развивают координацию.</p>`,
        'Как выполнять': `<p><strong>Методические акценты:</strong></p><ul><li>Отрабатывать каждый вид поворота.</li><li>Следить за переносом веса.</li><li>Дозировка: 3–5 поворотов.</li><li>Страховка: пологий склон.</li></ul>`,
        'Подводящие упражнения': `<ul><li>Повороты переступанием на месте и в движении.</li><li>Повороты «плугом» и «упором» на склоне.</li><li>Комбинации поворотов на учебной трассе.</li></ul>`,
        'Типичные ошибки и исправления': `<ul><li><strong>Потеря равновесия</strong> — упражнения на баланс.</li><li><strong>Неправильный перенос веса</strong> — показать.</li><li><strong>Недостаточный разворот лыж</strong> — отработать.</li></ul>`,
        'Видео, картинки': `<p>QR-код на видео + SVG-схема.</p>`
      }},
      { id: 'ski-step', title: 'Ступающий шаг', icon: '🎿', content: {
        'Темы': `<p>Для подъёма в гору или рыхлого снега. Базовая техника передвижения на лыжах.</p>`,
        'Как выполнять': `<p><strong>Методические акценты:</strong></p><ul><li>Отрабатывать постановку лыжи всей подошвой.</li><li>Следить за переносом веса.</li><li>Дозировка: 50–100 м.</li><li>Страховка: ровная лыжня.</li></ul>`,
        'Подводящие упражнения': `<ul><li>Ступающий шаг на 50 м.</li><li>Ступающий шаг в гору.</li></ul>`,
        'Типичные ошибки и исправления': `<ul><li><strong>Волок лыж по снегу</strong> — акцент на подъём ноги.</li><li><strong>Отсутствие переноса веса</strong> — показать.</li></ul>`,
        'Видео, картинки': `<p>QR-код на видео + SVG-схема.</p>`
      }}
    ]
  },
    // ----------------------------------------------------------
  // ФУТБОЛ (11 тем)
  // ----------------------------------------------------------
  football: {
    icon: '⚽', title: 'Футбол',
    topics: [
      { id: 'foot-pass-in', title: 'Передача мяча внутренней стороной стопы', icon: '⚽', content: {
        'Темы': `<p>Самый точный и контролируемый способ передачи мяча на короткие и средние дистанции.</p>`,
        'Как выполнять': `<p><strong>Методические акценты:</strong></p><ul><li>Отрабатывать постановку опорной ноги.</li><li>Следить за разворотом бьющей ноги.</li><li>Дозировка: 10–15 передач в парах.</li><li>Страховка: следить за дистанцией между парами.</li></ul>`,
        'Подводящие упражнения': `<ul><li>Передачи в парах на месте и в движении.</li><li>Передачи на точность в ворота или по мишеням.</li><li>Передачи в одно касание.</li><li>Игра в «квадрате» с акцентом на передачи внутренней стороной стопы.</li></ul>`,
        'Типичные ошибки и исправления': `<ul><li><strong>Опорная нога слишком далеко/близко</strong> — показать положение.</li><li><strong>Носок не развёрнут</strong> — акцент на разворот.</li><li><strong>Слабый/сильный удар</strong> — отработать силу.</li><li><strong>Потеря равновесия</strong> — упражнения на баланс.</li></ul>`,
        'Видео, картинки': `<p>QR-код на видео + SVG-схема.</p>`
      }},
      { id: 'foot-pass-out', title: 'Передача мяча внешней стороной стопы', icon: '⚽', content: {
        'Темы': `<p>Используется для неожиданных, резаных передач, обхода соперника, передачи на среднюю дистанцию.</p>`,
        'Как выполнять': `<p><strong>Методические акценты:</strong></p><ul><li>Отрабатывать разворот стопы носком внутрь.</li><li>Следить за хлёстким движением.</li><li>Дозировка: 10–15 передач.</li><li>Страховка: дистанция между парами.</li></ul>`,
        'Подводящие упражнения': `<ul><li>Передачи внешней стороной стопы в парах.</li><li>Передачи на точность в движении.</li><li>Игра с ограничением касаний.</li><li>Эстафеты с передачами.</li></ul>`,
        'Типичные ошибки и исправления': `<ul><li><strong>Неправильный разворот стопы</strong> — показать.</li><li><strong>Слабый контакт</strong> — отработать.</li><li><strong>Потеря направления</strong> — акцент на цель.</li><li><strong>Недостаточная амплитуда</strong> — увеличить замах.</li></ul>`,
        'Видео, картинки': `<p>QR-код на видео + SVG-схема.</p>`
      }},
      { id: 'foot-pass-lift', title: 'Передача мяча подъёмом', icon: '⚽', content: {
        'Темы': `<p>Применяется для длинных и мощных передач, перевода мяча на другой фланг.</p>`,
        'Как выполнять': `<p><strong>Методические акценты:</strong></p><ul><li>Отрабатывать замах и контакт верхней частью подъёма.</li><li>Следить за наклоном корпуса.</li><li>Дозировка: 8–10 передач.</li><li>Страховка: достаточное место.</li></ul>`,
        'Подводящие упражнения': `<ul><li>Передачи подъёмом на дальность.</li><li>Передачи на точность в ворота.</li><li>Передачи после ведения мяча.</li><li>Игра с длинными передачами.</li></ul>`,
        'Типичные ошибки и исправления': `<ul><li><strong>Опорная нога далеко</strong> — показать.</li><li><strong>Неправильный наклон</strong> — акцент.</li><li><strong>Слабый/сильный удар</strong> — отработать.</li><li><strong>Потеря равновесия</strong> — баланс.</li></ul>`,
        'Видео, картинки': `<p>QR-код на видео + SVG-схема.</p>`
      }},
      { id: 'foot-pass-toe', title: 'Передача мяча носком', icon: '⚽', content: {
        'Темы': `<p>Используется для неожиданных, коротких передач, отбора мяча у соперника.</p>`,
        'Как выполнять': `<p><strong>Методические акценты:</strong></p><ul><li>Отрабатывать резкий вынос ноги.</li><li>Следить за контактом носком.</li><li>Дозировка: 10–15 передач.</li><li>Страховка: дистанция между парами.</li></ul>`,
        'Подводящие упражнения': `<ul><li>Передачи носком в парах.</li><li>Передачи на точность в движении.</li><li>Игра с ограничением касаний.</li></ul>`,
        'Типичные ошибки и исправления': `<ul><li><strong>Слабый контакт</strong> — отработать.</li><li><strong>Потеря направления</strong> — акцент на цель.</li><li><strong>Недостаточная амплитуда</strong> — увеличить.</li></ul>`,
        'Видео, картинки': `<p>QR-код на видео + SVG-схема.</p>`
      }},
      { id: 'foot-pass-move', title: 'Передача мяча в движении', icon: '⚽', content: {
        'Темы': `<p>Передача мяча во время бега, без остановки, для поддержания темпа атаки.</p>`,
        'Как выполнять': `<p><strong>Методические акценты:</strong></p><ul><li>Отрабатывать ведение и передачу в движении.</li><li>Следить за взглядом на партнёра.</li><li>Дозировка: 10–15 передач.</li><li>Страховка: дистанция.</li></ul>`,
        'Подводящие упражнения': `<ul><li>Передачи в движении в парах.</li><li>Передачи после ведения мяча.</li><li>Игра в «квадрате» с движением.</li></ul>`,
        'Типичные ошибки и исправления': `<ul><li><strong>Потеря контроля</strong> — отработать ведение.</li><li><strong>Неточная передача</strong> — акцент на точность.</li><li><strong>Потеря темпа</strong> — работать над координацией.</li></ul>`,
        'Видео, картинки': `<p>QR-код на видео + SVG-схема.</p>`
      }},
      { id: 'foot-stop-sole', title: 'Остановка мяча подошвой', icon: '⚽', content: {
        'Темы': `<p>Применяется для остановки катящегося мяча, позволяет быстро подготовить мяч к действиям.</p>`,
        'Как выполнять': `<p><strong>Методические акценты:</strong></p><ul><li>Отрабатывать постановку ноги и амортизацию.</li><li>Следить за наклоном корпуса.</li><li>Дозировка: 10–15 остановок.</li><li>Страховка: дистанция.</li></ul>`,
        'Подводящие упражнения': `<ul><li>Остановка катящегося мяча в парах.</li><li>Остановка мяча после отскока от стены.</li><li>Остановка мяча в движении.</li><li>Игра «квадрат» с акцентом на остановку.</li></ul>`,
        'Типичные ошибки и исправления': `<ul><li><strong>Опорная нога не там</strong> — показать.</li><li><strong>Носок не приподнят</strong> — акцент.</li><li><strong>Слабая амортизация</strong> — отработать.</li><li><strong>Потеря равновесия</strong> — баланс.</li></ul>`,
        'Видео, картинки': `<p>QR-код на видео + SVG-схема.</p>`
      }},
      { id: 'foot-stop-in', title: 'Остановка мяча внутренней стороной стопы', icon: '⚽', content: {
        'Темы': `<p>Используется для приёма катящихся и летящих мячей, обеспечивает высокую точность.</p>`,
        'Как выполнять': `<p><strong>Методические акценты:</strong></p><ul><li>Отрабатывать разворот стопы наружу.</li><li>Следить за амортизацией.</li><li>Дозировка: 10–15 остановок.</li><li>Страховка: дистанция.</li></ul>`,
        'Подводящие упражнения': `<ul><li>Остановка катящегося мяча в парах.</li><li>Остановка мяча после передачи партнёра.</li><li>Остановка после отскока от стены.</li><li>Остановка в движении.</li></ul>`,
        'Типичные ошибки и исправления': `<ul><li><strong>Опорная нога неправильно</strong> — показать.</li><li><strong>Стопа не развёрнута</strong> — акцент.</li><li><strong>Слабый контакт</strong> — отработать.</li><li><strong>Потеря равновесия</strong> — баланс.</li></ul>`,
        'Видео, картинки': `<p>QR-код на видео + SVG-схема.</p>`
      }},
      { id: 'foot-stop-lift', title: 'Остановка мяча средней частью подъёма', icon: '⚽', content: {
        'Темы': `<p>Применяется для приёма опускающихся мячей, особенно при плотной опеке соперника.</p>`,
        'Как выполнять': `<p><strong>Методические акценты:</strong></p><ul><li>Отрабатывать вынос ноги и амортизацию.</li><li>Следить за носком.</li><li>Дозировка: 10–15 остановок.</li><li>Страховка: дистанция.</li></ul>`,
        'Подводящие упражнения': `<ul><li>Остановка мяча средней частью подъёма в парах.</li><li>Остановка после передачи партнёра.</li><li>Остановка после отскока от стены.</li><li>Остановка в движении.</li></ul>`,
        'Типичные ошибки и исправления': `<ul><li><strong>Низкий вынос ноги</strong> — показать.</li><li><strong>Быстрое опускание стопы</strong> — акцент.</li><li><strong>Слабый контакт</strong> — отработать.</li><li><strong>Потеря равновесия</strong> — баланс.</li></ul>`,
        'Видео, картинки': `<p>QR-код на видео + SVG-схема.</p>`
      }},
      { id: 'foot-dribble-in', title: 'Ведение мяча внутренней стороной стопы', icon: '⚽', content: {
        'Темы': `<p>Основной способ ведения мяча на короткие и средние дистанции, обеспечивает высокий контроль.</p>`,
        'Как выполнять': `<p><strong>Методические акценты:</strong></p><ul><li>Отрабатывать лёгкие толчки.</li><li>Следить за взглядом (на мяч и поле).</li><li>Дозировка: 3–4 подхода по 20 м.</li><li>Страховка: дистанция.</li></ul>`,
        'Подводящие упражнения': `<ul><li>Ведение по прямой и змейкой.</li><li>Ведение между стойками.</li><li>Ведение с изменением направления и скорости.</li><li>Ведение в парах.</li></ul>`,
        'Типичные ошибки и исправления': `<ul><li><strong>Мяч далеко от ноги</strong> — акцент на контроль.</li><li><strong>Слабый контроль</strong> — отработать.</li><li><strong>Потеря темпа</strong> — координация.</li><li><strong>Неправильная опорная нога</strong> — показать.</li></ul>`,
        'Видео, картинки': `<p>QR-код на видео + SVG-схема.</p>`
      }},
      { id: 'foot-dribble-out', title: 'Ведение мяча внешней стороной стопы', icon: '⚽', content: {
        'Темы': `<p>Используется для быстрого продвижения вперёд, обводки соперника, неожиданных рывков.</p>`,
        'Как выполнять': `<p><strong>Методические акценты:</strong></p><ul><li>Отрабатывать толчки внешней стороной.</li><li>Следить за скоростью.</li><li>Дозировка: 3–4 подхода по 20 м.</li><li>Страховка: дистанция.</li></ul>`,
        'Подводящие упражнения': `<ul><li>Ведение по прямой и змейкой.</li><li>Ведение между стойками.</li><li>Ведение с изменением направления и скорости.</li><li>Ведение в парах.</li></ul>`,
        'Типичные ошибки и исправления': `<ul><li><strong>Мяч далеко от ноги</strong> — акцент на контроль.</li><li><strong>Слабый контроль</strong> — отработать.</li><li><strong>Потеря темпа</strong> — координация.</li><li><strong>Неправильная опорная нога</strong> — показать.</li></ul>`,
        'Видео, картинки': `<p>QR-код на видео + SVG-схема.</p>`
      }},
      { id: 'foot-kick-in', title: 'Удар по мячу внутренней стороной стопы', icon: '⚽', content: {
        'Темы': `<p>Самый точный и контролируемый удар, используется для передач и ударов по воротам с близкого расстояния.</p>`,
        'Как выполнять': `<p><strong>Методические акценты:</strong></p><ul><li>Отрабатывать постановку опорной ноги и разворот бьющей.</li><li>Следить за плавностью и хлёсткостью.</li><li>Дозировка: 10–15 ударов.</li><li>Страховка: ворота, дистанция.</li></ul>`,
        'Подводящие упражнения': `<ul><li>Удары по воротам с разных дистанций.</li><li>Удары на точность в парах.</li><li>Удары по катящемуся и неподвижному мячу.</li><li>Удары после ведения.</li></ul>`,
        'Типичные ошибки и исправления': `<ul><li><strong>Опорная нога не там</strong> — показать.</li><li><strong>Носок не развёрнут</strong> — акцент.</li><li><strong>Слабый/сильный удар</strong> — отработать.</li><li><strong>Потеря равновесия</strong> — баланс.</li></ul>`,
        'Видео, картинки': `<p>QR-код на видео + SVG-схема.</p>`
      }},
      { id: 'foot-kick-lift', title: 'Удар по мячу средней частью подъёма', icon: '⚽', content: {
        'Темы': `<p>Основной удар для мощных и дальних ударов по воротам, используется для передач на большие расстояния.</p>`,
        'Как выполнять': `<p><strong>Методические акценты:</strong></p><ul><li>Отрабатывать замах и контакт верхней частью подъёма.</li><li>Следить за наклоном корпуса.</li><li>Дозировка: 10–15 ударов.</li><li>Страховка: ворота, дистанция.</li></ul>`,
        'Подводящие упражнения': `<ul><li>Удары по воротам с разных дистанций.</li><li>Удары на точность в парах.</li><li>Удары по катящемуся и неподвижному мячу.</li><li>Удары после ведения.</li></ul>`,
        'Типичные ошибки и исправления': `<ul><li><strong>Опорная нога далеко</strong> — показать.</li><li><strong>Неправильный наклон</strong> — акцент.</li><li><strong>Слабый/сильный удар</strong> — отработать.</li><li><strong>Потеря равновесия</strong> — баланс.</li></ul>`,
        'Видео, картинки': `<p>QR-код на видео + SVG-схема.</p>`
      }},
      { id: 'foot-kick-toe', title: 'Удар по мячу носком', icon: '⚽', content: {
        'Темы': `<p>Используется для неожиданных, коротких ударов, отбора мяча у соперника.</p>`,
        'Как выполнять': `<p><strong>Методические акценты:</strong></p><ul><li>Отрабатывать резкий вынос ноги.</li><li>Следить за контактом носком.</li><li>Дозировка: 10–15 ударов.</li><li>Страховка: ворота, дистанция.</li></ul>`,
        'Подводящие упражнения': `<ul><li>Удары по воротам с разных дистанций.</li><li>Удары на точность в парах.</li><li>Удары по катящемуся и неподвижному мячу.</li><li>Удары после ведения.</li></ul>`,
        'Типичные ошибки и исправления': `<ul><li><strong>Слабый контакт</strong> — отработать.</li><li><strong>Потеря направления</strong> — акцент на цель.</li><li><strong>Недостаточная амплитуда</strong> — увеличить.</li></ul>`,
        'Видео, картинки': `<p>QR-код на видео + SVG-схема.</p>`
      }},
      { id: 'foot-kick-out', title: 'Удар по мячу внешней стороной стопы', icon: '⚽', content: {
        'Темы': `<p>Используется для резаных, неожиданных ударов, обводки соперника.</p>`,
        'Как выполнять': `<p><strong>Методические акценты:</strong></p><ul><li>Отрабатывать разворот стопы носком внутрь.</li><li>Следить за хлёстким движением.</li><li>Дозировка: 10–15 ударов.</li><li>Страховка: ворота, дистанция.</li></ul>`,
        'Подводящие упражнения': `<ul><li>Удары по воротам с разных дистанций.</li><li>Удары на точность в парах.</li><li>Удары по катящемуся и неподвижному мячу.</li><li>Удары после ведения.</li></ul>`,
        'Типичные ошибки и исправления': `<ul><li><strong>Неправильный разворот стопы</strong> — показать.</li><li><strong>Слабый контакт</strong> — отработать.</li><li><strong>Потеря направления</strong> — акцент на цель.</li></ul>`,
        'Видео, картинки': `<p>QR-код на видео + SVG-схема.</p>`
      }},
      { id: 'foot-head', title: 'Удар по мячу головой', icon: '⚽', content: {
        'Темы': `<p>Используется для ударов по воротам, передач, отбора мяча в воздухе.</p>`,
        'Как выполнять': `<p><strong>Методические акценты:</strong></p><ul><li>Отрабатывать удар лбом.</li><li>Следить за открытыми глазами.</li><li>Дозировка: 8–10 ударов.</li><li>Страховка: мягкий мяч, дистанция.</li></ul>`,
        'Подводящие упражнения': `<ul><li>Удары головой по подвешенному мячу.</li><li>Удары головой после подачи партнёра.</li><li>Удары головой на точность.</li><li>Удары головой в игровых упражнениях.</li></ul>`,
        'Типичные ошибки и исправления': `<ul><li><strong>Закрытые глаза</strong> — акцент на открытые.</li><li><strong>Неправильный угол</strong> — показать.</li><li><strong>Слабый/сильный удар</strong> — отработать.</li><li><strong>Потеря равновесия</strong> — баланс.</li></ul>`,
        'Видео, картинки': `<p>QR-код на видео + SVG-схема.</p>`
      }}
    ]
  },

  // ----------------------------------------------------------
  // ВОЛЕЙБОЛ (13 тем)
  // ----------------------------------------------------------
  games: {
    icon: '🏐', title: 'Спортивные игры',
    topics: [
      { id: 'volley-top', title: 'Верхняя передача мяча двумя руками', icon: '🏐', content: {
        'Темы': `<p>Основной способ подготовки мяча для нападающего удара или передачи партнёру.</p>`,
        'Как выполнять': `<p><strong>Методические акценты:</strong></p><ul><li>Отрабатывать положение кистей «ковшом».</li><li>Следить за согласованностью ног, туловища, рук.</li><li>Дозировка: 10–15 передач.</li><li>Страховка: дистанция.</li></ul>`,
        'Подводящие упражнения': `<ul><li>Передачи над собой на месте и в движении.</li><li>Передачи в стену на разную высоту и расстояние.</li><li>Передачи в парах с перемещением.</li><li>Передачи в прыжке.</li></ul>`,
        'Типичные ошибки и исправления': `<ul><li><strong>Приём ладонями</strong> — акцент на пальцы.</li><li><strong>Большие пальцы вперёд</strong> — показать.</li><li><strong>Напряжённые/расслабленные кисти</strong> — отработать.</li><li><strong>Нет согласованности</strong> — медленный темп.</li><li><strong>Прямые руки</strong> — акцент на сгибание.</li></ul>`,
        'Видео, картинки': `<p>QR-код на видео + SVG-схема.</p>`
      }},
      { id: 'volley-bottom', title: 'Нижняя передача мяча двумя руками', icon: '🏐', content: {
        'Темы': `<p>Используется для приёма подач, нападающих ударов и низко летящих мячей.</p>`,
        'Как выполнять': `<p><strong>Методические акценты:</strong></p><ul><li>Отрабатывать платформу из предплечий.</li><li>Следить за разгибанием ног.</li><li>Дозировка: 10–15 передач.</li><li>Страховка: дистанция.</li></ul>`,
        'Подводящие упражнения': `<ul><li>Приём мяча после набрасывания партнёра.</li><li>Приём мяча от стены.</li><li>Приём мяча в парах с перемещением.</li><li>Приём мяча после подачи.</li></ul>`,
        'Типичные ошибки и исправления': `<ul><li><strong>Согнутые руки</strong> — акцент на выпрямление.</li><li><strong>Платформа не сформирована</strong> — показать.</li><li><strong>Нет согласованности</strong> — медленный темп.</li><li><strong>Приём кистями/грудью</strong> — акцент на предплечья.</li></ul>`,
        'Видео, картинки': `<p>QR-код на видео + SVG-схема.</p>`
      }},
      { id: 'volley-serve-low', title: 'Нижняя прямая подача', icon: '🏐', content: {
        'Темы': `<p>Простой и надёжный способ введения мяча в игру, используется новичками.</p>`,
        'Как выполнять': `<p><strong>Методические акценты:</strong></p><ul><li>Отрабатывать подброс и удар.</li><li>Следить за шагом вперёд.</li><li>Дозировка: 5–8 подач.</li><li>Страховка: дистанция.</li></ul>`,
        'Подводящие упражнения': `<ul><li>Имитация подачи без мяча.</li><li>Подача в стену с близкого расстояния.</li><li>Подача партнёру.</li><li>Подача через сетку.</li></ul>`,
        'Типичные ошибки и исправления': `<ul><li><strong>Неправильный подброс</strong> — показать.</li><li><strong>Удар согнутой рукой</strong> — акцент.</li><li><strong>Расслабленная кисть</strong> — отработать.</li><li><strong>Неточный удар</strong> — акцент на цель.</li></ul>`,
        'Видео, картинки': `<p>QR-код на видео + SVG-схема.</p>`
      }},
      { id: 'volley-serve-top', title: 'Верхняя прямая подача', icon: '🏐', content: {
        'Темы': `<p>Более сложный и атакующий способ подачи, используется для затруднения приёма соперником.</p>`,
        'Как выполнять': `<p><strong>Методические акценты:</strong></p><ul><li>Отрабатывать подброс и замах.</li><li>Следить за ударом в высшей точке.</li><li>Дозировка: 5–8 подач.</li><li>Страховка: дистанция.</li></ul>`,
        'Подводящие упражнения': `<ul><li>Имитация подачи.</li><li>Подача в стену.</li><li>Подача партнёру.</li><li>Подача через сетку.</li></ul>`,
        'Типичные ошибки и исправления': `<ul><li><strong>Неправильный подброс</strong> — показать.</li><li><strong>Слабый замах</strong> — акцент.</li><li><strong>Расслабленная кисть</strong> — отработать.</li><li><strong>Неточный удар</strong> — акцент на цель.</li></ul>`,
        'Видео, картинки': `<p>QR-код на видео + SVG-схема.</p>`
      }},
      { id: 'volley-attack', title: 'Нападающий удар (прямой)', icon: '🏐', content: {
        'Темы': `<p>Основной способ завершения атаки, приносит большинство очков.</p>`,
        'Как выполнять': `<p><strong>Методические акценты:</strong></p><ul><li>Отрабатывать разбег и прыжок.</li><li>Следить за ударом в высшей точке.</li><li>Дозировка: 8–10 ударов.</li><li>Страховка: дистанция.</li></ul>`,
        'Подводящие упражнения': `<ul><li>Имитация удара без мяча.</li><li>Удар по мячу, подвешенному на шнуре.</li><li>Удар после передачи партнёра.</li><li>Удар через сетку.</li></ul>`,
        'Типичные ошибки и исправления': `<ul><li><strong>Несвоевременный прыжок</strong> — показать.</li><li><strong>Слабый замах</strong> — акцент.</li><li><strong>Расслабленная кисть</strong> — отработать.</li><li><strong>Неточный удар</strong> — акцент на цель.</li></ul>`,
        'Видео, картинки': `<p>QR-код на видео + SVG-схема.</p>`
      }},
      { id: 'volley-block', title: 'Блокирование', icon: '🏐', content: {
        'Темы': `<p>Основной способ защиты от нападающего удара соперника.</p>`,
        'Как выполнять': `<p><strong>Методические акценты:</strong></p><ul><li>Отрабатывать выход и прыжок.</li><li>Следить за положением рук над сеткой.</li><li>Дозировка: 8–10 блоков.</li><li>Страховка: сетка, дистанция.</li></ul>`,
        'Подводящие упражнения': `<ul><li>Имитация блока у стены.</li><li>Блокирование мяча, брошенного партнёром.</li><li>Блокирование после передачи.</li><li>Блокирование в игровых упражнениях.</li></ul>`,
        'Типичные ошибки и исправления': `<ul><li><strong>Поздний прыжок</strong> — показать.</li><li><strong>Руки не над сеткой</strong> — акцент.</li><li><strong>Расслабленные кисти</strong> — отработать.</li><li><strong>Нет согласованности</strong> — медленный темп.</li></ul>`,
        'Видео, картинки': `<p>QR-код на видео + SVG-схема.</p>`
      }},
      { id: 'volley-receive', title: 'Приём мяча с подачи', icon: '🏐', content: {
        'Темы': `<p>Первый элемент в розыгрыше, определяет дальнейший ход атаки.</p>`,
        'Как выполнять': `<p><strong>Методические акценты:</strong></p><ul><li>Отрабатывать выход под мяч.</li><li>Следить за платформой.</li><li>Дозировка: 10–15 приёмов.</li><li>Страховка: дистанция.</li></ul>`,
        'Подводящие упражнения': `<ul><li>Приём подачи в парах.</li><li>Приём подачи от стены.</li><li>Приём подачи в игровых упражнениях.</li></ul>`,
        'Типичные ошибки и исправления': `<ul><li><strong>Несвоевременный выход</strong> — показать.</li><li><strong>Платформа не сформирована</strong> — акцент.</li><li><strong>Приём кистями</strong> — акцент на предплечья.</li></ul>`,
        'Видео, картинки': `<p>QR-код на видео + SVG-схема.</p>`
      }},
      { id: 'volley-receive-attack', title: 'Приём мяча после нападающего удара', icon: '🏐', content: {
        'Темы': `<p>Защитный приём, требует быстрой реакции и правильной техники.</p>`,
        'Как выполнять': `<p><strong>Методические акценты:</strong></p><ul><li>Отрабатывать низкую стойку.</li><li>Следить за амортизацией.</li><li>Дозировка: 10–15 приёмов.</li><li>Страховка: дистанция.</li></ul>`,
        'Подводящие упражнения': `<ul><li>Приём нападающего удара в парах.</li><li>Приём удара от стены.</li><li>Приём удара в игровых упражнениях.</li></ul>`,
        'Типичные ошибки и исправления': `<ul><li><strong>Несвоевременный выход</strong> — показать.</li><li><strong>Платформа не сформирована</strong> — акцент.</li><li><strong>Приём кистями</strong> — акцент на предплечья.</li></ul>`,
        'Видео, картинки': `<p>QR-код на видео + SVG-схема.</p>`
      }},
      { id: 'volley-move', title: 'Перемещения и стойки', icon: '🏐', content: {
        'Темы': `<p>Базовые элементы техники, обеспечивают готовность к любому игровому действию.</p>`,
        'Как выполнять': `<p><strong>Методические акценты:</strong></p><ul><li>Отрабатывать стойку и перемещения.</li><li>Следить за устойчивостью.</li><li>Дозировка: 3–4 упражнения по 20 м.</li><li>Страховка: дистанция.</li></ul>`,
        'Подводящие упражнения': `<ul><li>Перемещения по сигналу.</li><li>Старты из разных положений.</li><li>Челночный бег.</li><li>Перемещения с мячом.</li></ul>`,
        'Типичные ошибки и исправления': `<ul><li><strong>Выпрямленные ноги</strong> — акцент на сгибание.</li><li><strong>Опущенные руки</strong> — показать.</li><li><strong>Нет устойчивости</strong> — баланс.</li></ul>`,
        'Видео, картинки': `<p>QR-код на видео + SVG-схема.</p>`
      }},
      { id: 'volley-pass-jump', title: 'Передача мяча в прыжке', icon: '🏐', content: {
        'Темы': `<p>Используется для передачи мяча в сложных игровых ситуациях, когда нет времени на обычную передачу.</p>`,
        'Как выполнять': `<p><strong>Методические акценты:</strong></p><ul><li>Отрабатывать прыжок и передачу.</li><li>Следить за координацией.</li><li>Дозировка: 8–10 передач.</li><li>Страховка: дистанция.</li></ul>`,
        'Подводящие упражнения': `<ul><li>Передача в прыжке в парах.</li><li>Передача в прыжке через сетку.</li><li>Передача в прыжке в игровых упражнениях.</li></ul>`,
        'Типичные ошибки и исправления': `<ul><li><strong>Неточная передача</strong> — акцент на точность.</li><li><strong>Кисти не сформированы</strong> — показать.</li><li><strong>Потеря равновесия</strong> — баланс.</li></ul>`,
        'Видео, картинки': `<p>QR-код на видео + SVG-схема.</p>`
      }},
      { id: 'volley-block-group', title: 'Одиночное и групповое блокирование', icon: '🏐', content: {
        'Темы': `<p>Одиночное — один игрок, групповое — два или три игрока одновременно.</p>`,
        'Как выполнять': `<p><strong>Методические акценты:</strong></p><ul><li>Отрабатывать согласованность действий.</li><li>Следить за временем прыжка.</li><li>Дозировка: 8–10 блоков.</li><li>Страховка: сетка, дистанция.</li></ul>`,
        'Подводящие упражнения': `<ul><li>Имитация блока в парах.</li><li>Блокирование мяча, брошенного партнёром.</li><li>Блокирование в игровых упражнениях.</li></ul>`,
        'Типичные ошибки и исправления': `<ul><li><strong>Несогласованность</strong> — медленный темп.</li><li><strong>Поздний прыжок</strong> — показать.</li><li><strong>Руки не над сеткой</strong> — акцент.</li></ul>`,
        'Видео, картинки': `<p>QR-код на видео + SVG-схема.</p>`
      }},
      { id: 'volley-tactics', title: 'Тактические действия в нападении и защите', icon: '🏐', content: {
        'Темы': `<p>Включают индивидуальные, групповые и командные действия, направленные на достижение победы.</p>`,
        'Как выполнять': `<p><strong>Методические акценты:</strong></p><ul><li>Отрабатывать комбинации.</li><li>Следить за взаимодействием.</li><li>Дозировка: 10–15 минут игры.</li><li>Страховка: дистанция.</li></ul>`,
        'Подводящие упражнения': `<ul><li>Игра в «квадрате».</li><li>Учебные двусторонние игры.</li><li>Выполнение тактических комбинаций.</li></ul>`,
        'Типичные ошибки и исправления': `<ul><li><strong>Несогласованность</strong> — медленный темп.</li><li><strong>Потеря позиции</strong> — показать.</li><li><strong>Медленная реакция</strong> — упражнения на реакцию.</li></ul>`,
        'Видео, картинки': `<p>QR-код на видео + SVG-схема.</p>`
      }},
      { id: 'volley-referee', title: 'Судейство и организация соревнований', icon: '🏐', content: {
        'Темы': `<p>Основы судейства, правила проведения соревнований, жесты судьи.</p>`,
        'Как выполнять': `<p><strong>Методические акценты:</strong></p><ul><li>Изучение правил.</li><li>Практика судейства учебных игр.</li><li>Организация мини-турниров.</li></ul>`,
        'Подводящие упражнения': `<ul><li>Судейство учебных игр.</li><li>Организация турниров.</li></ul>`,
        'Типичные ошибки и исправления': `<ul><li><strong>Незнание правил</strong> — изучить правила.</li><li><strong>Неправильное судейство</strong> — практика.</li></ul>`,
        'Видео, картинки': `<p>QR-код на видео + SVG-схема.</p>`
      }}
    ]
  },

  // ----------------------------------------------------------
  // БАСКЕТБОЛ (11 тем)
  // ----------------------------------------------------------
  basket: {
    icon: '🏀', title: 'Баскетбол',
    topics: [
      { id: 'basket-stance', title: 'Стойка баскетболиста и держание мяча', icon: '🏀', content: {
        'Темы': `<p>Базовые элементы, обеспечивающие готовность к любому игровому действию.</p>`,
        'Как выполнять': `<p><strong>Методические акценты:</strong></p><ul><li>Отрабатывать стойку и держание.</li><li>Следить за положением пальцев.</li><li>Дозировка: 3–4 упражнения.</li><li>Страховка: дистанция.</li></ul>`,
        'Подводящие упражнения': `<ul><li>Принятие стойки по сигналу.</li><li>Перемещения в стойке.</li><li>Имитация держания мяча.</li><li>Передачи мяча в парах.</li></ul>`,
        'Типичные ошибки и исправления': `<ul><li><strong>Выпрямленные/согнутые ноги</strong> — показать.</li><li><strong>Вес на одной ноге</strong> — акцент.</li><li><strong>Пальцы не разведены</strong> — показать.</li></ul>`,
        'Видео, картинки': `<p>QR-код на видео + SVG-схема.</p>`
      }},
      { id: 'basket-move', title: 'Передвижения без мяча', icon: '🏀', content: {
        'Темы': `<p>Перемещения по площадке для выхода на выгодную позицию, смены направления.</p>`,
        'Как выполнять': `<p><strong>Методические акценты:</strong></p><ul><li>Отрабатывать остановки и повороты.</li><li>Следить за перекатом с пятки на носок.</li><li>Дозировка: 3–4 упражнения.</li><li>Страховка: дистанция.</li></ul>`,
        'Подводящие упражнения': `<ul><li>Бег с ускорениями и остановками по сигналу.</li><li>Остановка двумя шагами и прыжком.</li><li>Повороты на месте и в движении.</li><li>Эстафеты с остановками и поворотами.</li></ul>`,
        'Типичные ошибки и исправления': `<ul><li><strong>Бег на прямых ногах</strong> — акцент.</li><li><strong>Стопы на одной линии</strong> — показать.</li><li><strong>Потеря равновесия</strong> — баланс.</li></ul>`,
        'Видео, картинки': `<p>QR-код на видео + SVG-схема.</p>`
      }},
      { id: 'basket-catch', title: 'Ловля мяча двумя руками', icon: '🏀', content: {
        'Темы': `<p>Приём, позволяющий уверенно овладеть мячом и подготовиться к дальнейшим действиям.</p>`,
        'Как выполнять': `<p><strong>Методические акценты:</strong></p><ul><li>Отрабатывать «воронку» из кистей.</li><li>Следить за амортизацией.</li><li>Дозировка: 10–15 ловлей.</li><li>Страховка: дистанция.</li></ul>`,
        'Подводящие упражнения': `<ul><li>Ловля мяча после набрасывания партнёра.</li><li>Ловля мяча после отскока от стены.</li><li>Ловля мяча в движении.</li><li>Ловля высоко- и низколетящих мячей.</li></ul>`,
        'Типичные ошибки и исправления': `<ul><li><strong>Кисти не разведены</strong> — показать.</li><li><strong>Нет амортизации</strong> — акцент.</li><li><strong>Нет укрытия</strong> — показать.</li></ul>`,
        'Видео, картинки': `<p>QR-код на видео + SVG-схема.</p>`
      }},
      { id: 'basket-pass-chest', title: 'Передача мяча двумя руками от груди', icon: '🏀', content: {
        'Темы': `<p>Основной способ быстрой и точной передачи мяча партнёру.</p>`,
        'Как выполнять': `<p><strong>Методические акценты:</strong></p><ul><li>Отрабатывать разгибание рук и ног.</li><li>Следить за захлёстом кистями.</li><li>Дозировка: 10–15 передач.</li><li>Страховка: дистанция.</li></ul>`,
        'Подводящие упражнения': `<ul><li>Передачи в парах на месте и в движении.</li><li>Передачи на точность в цель.</li><li>Передачи после ведения.</li><li>Передачи в игровых упражнениях.</li></ul>`,
        'Типичные ошибки и исправления': `<ul><li><strong>Только руки</strong> — акцент на ноги.</li><li><strong>Кисти не сопровождают</strong> — показать.</li><li><strong>Приём ладонями</strong> — акцент на пальцы.</li></ul>`,
        'Видео, картинки': `<p>QR-код на видео + SVG-схема.</p>`
      }},
      { id: 'basket-pass-shoulder', title: 'Передача мяча одной рукой от плеча', icon: '🏀', content: {
        'Темы': `<p>Используется для быстрых и дальних передач, особенно в движении.</p>`,
        'Как выполнять': `<p><strong>Методические акценты:</strong></p><ul><li>Отрабатывать разгибание руки и поворот корпуса.</li><li>Следить за захлёстом кистью.</li><li>Дозировка: 10–15 передач.</li><li>Страховка: дистанция.</li></ul>`,
        'Подводящие упражнения': `<ul><li>Передачи одной рукой в парах.</li><li>Передачи на дальность.</li><li>Передачи после ведения.</li><li>Передачи в игровых упражнениях.</li></ul>`,
        'Типичные ошибки и исправления': `<ul><li><strong>Только кистью</strong> — акцент на руку и корпус.</li><li><strong>Нет поворота корпуса</strong> — показать.</li><li><strong>Мяч летит высоко/низко</strong> — акцент на траекторию.</li></ul>`,
        'Видео, картинки': `<p>QR-код на видео + SVG-схема.</p>`
      }},
      { id: 'basket-dribble', title: 'Ведение мяча (дриблинг)', icon: '🏀', content: {
        'Темы': `<p>Перемещение с мячом по площадке с контролем и защитой мяча.</p>`,
        'Как выполнять': `<p><strong>Методические акценты:</strong></p><ul><li>Отрабатывать удар кончиками пальцев.</li><li>Следить за взглядом вперёд.</li><li>Дозировка: 3–4 подхода по 20 м.</li><li>Страховка: дистанция.</li></ul>`,
        'Подводящие упражнения': `<ul><li>Ведение мяча на месте и в движении.</li><li>Ведение змейкой между стойками.</li><li>Ведение с изменением скорости и направления.</li><li>Ведение с сопротивлением защитника.</li></ul>`,
        'Типичные ошибки и исправления': `<ul><li><strong>Ведение ладонью</strong> — акцент на пальцы.</li><li><strong>Мяч далеко</strong> — показать.</li><li><strong>Взгляд на мяч</strong> — акцент на взгляд вперёд.</li></ul>`,
        'Видео, картинки': `<p>QR-код на видео + SVG-схема.</p>`
      }},
      { id: 'basket-stop-2', title: 'Остановка двумя шагами', icon: '🏀', content: {
        'Темы': `<p>Применяется для быстрой остановки после ведения или бега.</p>`,
        'Как выполнять': `<p><strong>Методические акценты:</strong></p><ul><li>Отрабатывать первый длинный, второй короткий шаг.</li><li>Следить за укрытием мяча.</li><li>Дозировка: 10–15 остановок.</li><li>Страховка: дистанция.</li></ul>`,
        'Подводящие упражнения': `<ul><li>Остановка после ведения по сигналу.</li><li>Остановка с последующим поворотом и передачей.</li><li>Остановка в игровых упражнениях.</li></ul>`,
        'Типичные ошибки и исправления': `<ul><li><strong>Стопы на одной линии</strong> — показать.</li><li><strong>Потеря равновесия</strong> — баланс.</li><li><strong>Мяч не укрыт</strong> — акцент.</li></ul>`,
        'Видео, картинки': `<p>QR-код на видео + SVG-схема.</p>`
      }},
      { id: 'basket-stop-jump', title: 'Остановка прыжком', icon: '🏀', content: {
        'Темы': `<p>Используется для быстрой остановки и смены направления.</p>`,
        'Как выполнять': `<p><strong>Методические акценты:</strong></p><ul><li>Отрабатывать прыжок и приземление на обе ноги.</li><li>Следить за амортизацией.</li><li>Дозировка: 10–15 остановок.</li><li>Страховка: дистанция.</li></ul>`,
        'Подводящие упражнения': `<ul><li>Остановка прыжком после ведения.</li><li>Остановка прыжком по сигналу.</li><li>Остановка прыжком в игровых упражнениях.</li></ul>`,
        'Типичные ошибки и исправления': `<ul><li><strong>Приземление на одну ногу</strong> — показать.</li><li><strong>Потеря равновесия</strong> — баланс.</li><li><strong>Мяч не укрыт</strong> — акцент.</li></ul>`,
        'Видео, картинки': `<p>QR-код на видео + SVG-схема.</p>`
      }},
      { id: 'basket-turn', title: 'Повороты на месте (с мячом и без мяча)', icon: '🏀', content: {
        'Темы': `<p>Используются для укрытия мяча и ухода от защитника.</p>`,
        'Как выполнять': `<p><strong>Методические акценты:</strong></p><ul><li>Отрабатывать повороты на опорной ноге.</li><li>Следить за укрытием мяча.</li><li>Дозировка: 10–15 поворотов.</li><li>Страховка: дистанция.</li></ul>`,
        'Подводящие упражнения': `<ul><li>Повороты на месте с мячом.</li><li>Повороты после ловли мяча.</li><li>Повороты с сопротивлением защитника.</li></ul>`,
        'Типичные ошибки и исправления': `<ul><li><strong>Отрыв опорной ноги</strong> — показать.</li><li><strong>Потеря равновесия</strong> — баланс.</li><li><strong>Мяч не укрыт</strong> — акцент.</li></ul>`,
        'Видео, картинки': `<p>QR-код на видео + SVG-схема.</p>`
      }},
      { id: 'basket-shot', title: 'Бросок в корзину одной рукой от плеча', icon: '🏀', content: {
        'Темы': `<p>Основной способ завершения атаки.</p>`,
        'Как выполнять': `<p><strong>Методические акценты:</strong></p><ul><li>Отрабатывать положение локтя под мячом.</li><li>Следить за захлёстом кистью.</li><li>Дозировка: 10–15 бросков.</li><li>Страховка: дистанция.</li></ul>`,
        'Подводящие упражнения': `<ul><li>Броски с места и в движении.</li><li>Броски на точность.</li><li>Броски после ведения.</li><li>Броски в игровых упражнениях.</li></ul>`,
        'Типичные ошибки и исправления': `<ul><li><strong>Только кистью</strong> — акцент на руку и ноги.</li><li><strong>Нет сопровождения</strong> — показать.</li><li><strong>Мяч высоко/низко</strong> — акцент на траекторию.</li></ul>`,
        'Видео, картинки': `<p>QR-код на видео + SVG-схема.</p>`
      }},
      { id: 'basket-feint', title: 'Финты (обманные движения)', icon: '🏀', content: {
        'Темы': `<p>Используются для обыгрыша защитника и создания свободного пространства.</p>`,
        'Как выполнять': `<p><strong>Методические акценты:</strong></p><ul><li>Отрабатывать корпусом, взглядом, ведением.</li><li>Следить за убедительностью.</li><li>Дозировка: 10–15 финтов.</li><li>Страховка: дистанция.</li></ul>`,
        'Подводящие упражнения': `<ul><li>Финты с мячом в парах.</li><li>Финты с последующим ведением или передачей.</li><li>Финты в игровых упражнениях.</li></ul>`,
        'Типичные ошибки и исправления': `<ul><li><strong>Неубедительный финт</strong> — показать.</li><li><strong>Потеря контроля</strong> — акцент.</li><li><strong>Нет смены направления</strong> — показать.</li></ul>`,
        'Видео, картинки': `<p>QR-код на видео + SVG-схема.</p>`
      }}
    ]
  },

  // ----------------------------------------------------------
  // ГАНДБОЛ (14 тем)
  // ----------------------------------------------------------
  handball: {
    icon: '🤾', title: 'Гандбол',
    topics: [
      { id: 'hand-stance', title: 'Стойка и держание мяча', icon: '🤾', content: {
        'Темы': `<p>Базовые элементы, обеспечивающие готовность к любому игровому действию.</p>`,
        'Как выполнять': `<p><strong>Методические акценты:</strong></p><ul><li>Отрабатывать стойку и держание.</li><li>Следить за положением пальцев.</li><li>Дозировка: 3–4 упражнения.</li><li>Страховка: дистанция.</li></ul>`,
        'Подводящие упражнения': `<ul><li>Принять положение стойки без мяча.</li><li>Ходьба и бег с переходом в стойку по сигналу.</li><li>Имитация держания мяча.</li><li>Перемещения с мячом в руках и по сигналу — стойка.</li></ul>`,
        'Типичные ошибки и исправления': `<ul><li><strong>Выпрямленные/согнутые ноги</strong> — показать.</li><li><strong>Вес на одной ноге</strong> — акцент.</li><li><strong>Пальцы не разведены</strong> — показать.</li></ul>`,
        'Видео, картинки': `<p>QR-код на видео + SVG-схема.</p>`
      }},
      { id: 'hand-move', title: 'Передвижения (бег, приставные шаги, прыжки)', icon: '🤾', content: {
        'Темы': `<p>Перемещения по площадке для выхода на выгодную позицию, освобождения от соперника.</p>`,
        'Как выполнять': `<p><strong>Методические акценты:</strong></p><ul><li>Отрабатывать приставные шаги и бег.</li><li>Следить за наклоном корпуса.</li><li>Дозировка: 3–4 упражнения по 20 м.</li><li>Страховка: дистанция.</li></ul>`,
        'Подводящие упражнения': `<ul><li>Бег с ускорениями и остановками.</li><li>Приставные шаги вперёд, назад, в стороны.</li><li>Прыжки с продвижением.</li><li>Эстафеты с перемещениями.</li></ul>`,
        'Типичные ошибки и исправления': `<ul><li><strong>Бег на прямых ногах</strong> — акцент.</li><li><strong>Нет наклона корпуса</strong> — показать.</li><li><strong>Потеря равновесия</strong> — баланс.</li></ul>`,
        'Видео, картинки': `<p>QR-код на видео + SVG-схема.</p>`
      }},
      { id: 'hand-catch', title: 'Ловля мяча двумя руками', icon: '🤾', content: {
        'Темы': `<p>Приём, позволяющий уверенно овладеть мячом и подготовиться к дальнейшим действиям.</p>`,
        'Как выполнять': `<p><strong>Методические акценты:</strong></p><ul><li>Отрабатывать «воронку» из кистей.</li><li>Следить за амортизацией.</li><li>Дозировка: 10–15 ловлей.</li><li>Страховка: дистанция.</li></ul>`,
        'Подводящие упражнения': `<ul><li>Ловля мяча после набрасывания партнёра.</li><li>Ловля мяча от стены.</li><li>Ловля мяча в движении.</li><li>Ловля высоколетящих и низколетящих мячей.</li></ul>`,
        'Типичные ошибки и исправления': `<ul><li><strong>Кисти не разведены</strong> — показать.</li><li><strong>Нет амортизации</strong> — акцент.</li><li><strong>Нет укрытия</strong> — показать.</li></ul>`,
        'Видео, картинки': `<p>QR-код на видео + SVG-схема.</p>`
      }},
      { id: 'hand-pass-chest', title: 'Передача мяча двумя руками от груди', icon: '🤾', content: {
        'Темы': `<p>Основной способ быстрой и точной передачи мяча партнёру.</p>`,
        'Как выполнять': `<p><strong>Методические акценты:</strong></p><ul><li>Отрабатывать разгибание рук и ног.</li><li>Следить за захлёстом кистями.</li><li>Дозировка: 10–15 передач.</li><li>Страховка: дистанция.</li></ul>`,
        'Подводящие упражнения': `<ul><li>Передачи в парах на месте и в движении.</li><li>Передачи на точность в цель.</li><li>Передачи после ведения.</li><li>Передачи в игровых упражнениях.</li></ul>`,
        'Типичные ошибки и исправления': `<ul><li><strong>Только руки</strong> — акцент на ноги.</li><li><strong>Кисти не сопровождают</strong> — показать.</li><li><strong>Приём ладонями</strong> — акцент на пальцы.</li></ul>`,
        'Видео, картинки': `<p>QR-код на видео + SVG-схема.</p>`
      }},
      { id: 'hand-pass-shoulder', title: 'Передача мяча одной рукой от плеча', icon: '🤾', content: {
        'Темы': `<p>Используется для быстрых и дальних передач, особенно в движении.</p>`,
        'Как выполнять': `<p><strong>Методические акценты:</strong></p><ul><li>Отрабатывать разгибание руки и поворот корпуса.</li><li>Следить за захлёстом кистью.</li><li>Дозировка: 10–15 передач.</li><li>Страховка: дистанция.</li></ul>`,
        'Подводящие упражнения': `<ul><li>Передачи одной рукой в парах.</li><li>Передачи на дальность.</li><li>Передачи после ведения.</li><li>Передачи в игровых упражнениях.</li></ul>`,
        'Типичные ошибки и исправления': `<ul><li><strong>Только кистью</strong> — акцент на руку и корпус.</li><li><strong>Нет поворота корпуса</strong> — показать.</li><li><strong>Мяч летит высоко/низко</strong> — акцент на траекторию.</li></ul>`,
        'Видео, картинки': `<p>QR-код на видео + SVG-схема.</p>`
      }},
      { id: 'hand-dribble', title: 'Ведение мяча', icon: '🤾', content: {
        'Темы': `<p>Перемещение с мячом по площадке с контролем и защитой мяча.</p>`,
        'Как выполнять': `<p><strong>Методические акценты:</strong></p><ul><li>Отрабатывать удар кончиками пальцев.</li><li>Следить за взглядом вперёд.</li><li>Дозировка: 3–4 подхода по 20 м.</li><li>Страховка: дистанция.</li></ul>`,
        'Подводящие упражнения': `<ul><li>Ведение мяча на месте и в движении.</li><li>Ведение змейкой между стойками.</li><li>Ведение с изменением скорости и направления.</li><li>Ведение с сопротивлением защитника.</li></ul>`,
        'Типичные ошибки и исправления': `<ul><li><strong>Ведение ладонью</strong> — акцент на пальцы.</li><li><strong>Мяч далеко</strong> — показать.</li><li><strong>Взгляд на мяч</strong> — акцент на взгляд вперёд.</li></ul>`,
        'Видео, картинки': `<p>QR-код на видео + SVG-схема.</p>`
      }},
      { id: 'hand-stop-2', title: 'Остановка двумя шагами', icon: '🤾', content: {
        'Темы': `<p>Применяется для быстрой остановки после ведения или бега.</p>`,
        'Как выполнять': `<p><strong>Методические акценты:</strong></p><ul><li>Отрабатывать первый длинный, второй короткий шаг.</li><li>Следить за укрытием мяча.</li><li>Дозировка: 10–15 остановок.</li><li>Страховка: дистанция.</li></ul>`,
        'Подводящие упражнения': `<ul><li>Остановка после ведения по сигналу.</li><li>Остановка с последующим поворотом и передачей.</li><li>Остановка в игровых упражнениях.</li></ul>`,
        'Типичные ошибки и исправления': `<ul><li><strong>Стопы на одной линии</strong> — показать.</li><li><strong>Потеря равновесия</strong> — баланс.</li><li><strong>Мяч не укрыт</strong> — акцент.</li></ul>`,
        'Видео, картинки': `<p>QR-код на видео + SVG-схема.</p>`
      }},
      { id: 'hand-stop-jump', title: 'Остановка прыжком', icon: '🤾', content: {
        'Темы': `<p>Используется для быстрой остановки и смены направления.</p>`,
        'Как выполнять': `<p><strong>Методические акценты:</strong></p><ul><li>Отрабатывать прыжок и приземление на обе ноги.</li><li>Следить за амортизацией.</li><li>Дозировка: 10–15 остановок.</li><li>Страховка: дистанция.</li></ul>`,
        'Подводящие упражнения': `<ul><li>Остановка прыжком после ведения.</li><li>Остановка прыжком по сигналу.</li><li>Остановка прыжком в игровых упражнениях.</li></ul>`,
        'Типичные ошибки и исправления': `<ul><li><strong>Приземление на одну ногу</strong> — показать.</li><li><strong>Потеря равновесия</strong> — баланс.</li><li><strong>Мяч не укрыт</strong> — акцент.</li></ul>`,
        'Видео, картинки': `<p>QR-код на видео + SVG-схема.</p>`
      }},
      { id: 'hand-turn', title: 'Повороты на месте (с мячом и без мяча)', icon: '🤾', content: {
        'Темы': `<p>Используются для укрытия мяча и ухода от защитника.</p>`,
        'Как выполнять': `<p><strong>Методические акценты:</strong></p><ul><li>Отрабатывать повороты на опорной ноге.</li><li>Следить за укрытием мяча.</li><li>Дозировка: 10–15 поворотов.</li><li>Страховка: дистанция.</li></ul>`,
        'Подводящие упражнения': `<ul><li>Повороты на месте без мяча.</li><li>Повороты с мячом.</li><li>Повороты в сочетании с ловлей и передачей мяча.</li></ul>`,
        'Типичные ошибки и исправления': `<ul><li><strong>Отрыв опорной ноги</strong> — показать.</li><li><strong>Потеря равновесия</strong> — баланс.</li><li><strong>Мяч не укрыт</strong> — акцент.</li></ul>`,
        'Видео, картинки': `<p>QR-код на видео + SVG-схема.</p>`
      }},
      { id: 'hand-shot', title: 'Бросок по воротам одной рукой (с места и в прыжке)', icon: '🤾', content: {
        'Темы': `<p>Основной способ завершения атаки, приносит большинство очков.</p>`,
        'Как выполнять': `<p><strong>Методические акценты:</strong></p><ul><li>Отрабатывать разбег и прыжок.</li><li>Следить за ударом в высшей точке.</li><li>Дозировка: 10–15 бросков.</li><li>Страховка: ворота, дистанция.</li></ul>`,
        'Подводящие упражнения': `<ul><li>Броски по воротам с разных дистанций.</li><li>Броски на точность в парах.</li><li>Броски после ведения.</li><li>Броски через сетку.</li></ul>`,
        'Типичные ошибки и исправления': `<ul><li><strong>Несвоевременный прыжок</strong> — показать.</li><li><strong>Слабый замах</strong> — акцент.</li><li><strong>Расслабленная кисть</strong> — отработать.</li><li><strong>Неточный удар</strong> — акцент на цель.</li></ul>`,
        'Видео, картинки': `<p>QR-код на видео + SVG-схема.</p>`
      }},
      { id: 'hand-feint', title: 'Финты (обманные движения)', icon: '🤾', content: {
        'Темы': `<p>Используются для обыгрыша защитника и создания свободного пространства.</p>`,
        'Как выполнять': `<p><strong>Методические акценты:</strong></p><ul><li>Отрабатывать корпусом, взглядом, ведением.</li><li>Следить за убедительностью.</li><li>Дозировка: 10–15 финтов.</li><li>Страховка: дистанция.</li></ul>`,
        'Подводящие упражнения': `<ul><li>Финты с мячом в парах.</li><li>Финты с последующим ведением или передачей.</li><li>Финты в игровых упражнениях.</li></ul>`,
        'Типичные ошибки и исправления': `<ul><li><strong>Неубедительный финт</strong> — показать.</li><li><strong>Потеря контроля</strong> — акцент.</li><li><strong>Нет смены направления</strong> — показать.</li></ul>`,
        'Видео, картинки': `<p>QR-код на видео + SVG-схема.</p>`
      }},
      { id: 'hand-def-ind', title: 'Индивидуальные действия в защите', icon: '🤾', content: {
        'Темы': `<p>Выбор позиции, блокирование броска, перехват мяча.</p>`,
        'Как выполнять': `<p><strong>Методические акценты:</strong></p><ul><li>Отрабатывать позицию между соперником и воротами.</li><li>Следить за блокированием и перехватом.</li><li>Дозировка: 10–15 действий.</li><li>Страховка: дистанция.</li></ul>`,
        'Подводящие упражнения': `<ul><li>Блокирование мяча, брошенного партнёром.</li><li>Перехват передачи в парах.</li><li>Игра в защите в игровых упражнениях.</li></ul>`,
        'Типичные ошибки и исправления': `<ul><li><strong>Потеря позиции</strong> — показать.</li><li><strong>Несвоевременный прыжок</strong> — акцент.</li><li><strong>Пропуск соперника</strong> — показать.</li></ul>`,
        'Видео, картинки': `<p>QR-код на видео + SVG-схема.</p>`
      }},
      { id: 'hand-def-group', title: 'Групповые действия в защите', icon: '🤾', content: {
        'Темы': `<p>Взаимодействие двух и более защитников для перекрытия зон и подстраховки.</p>`,
        'Как выполнять': `<p><strong>Методические акценты:</strong></p><ul><li>Отрабатывать согласование позиций.</li><li>Следить за подстраховкой.</li><li>Дозировка: 10–15 минут игры.</li><li>Страховка: дистанция.</li></ul>`,
        'Подводящие упражнения': `<ul><li>Игра в защите 2 на 2, 3 на 3.</li><li>Перекрытие зон в игровых упражнениях.</li><li>Подстраховка партнёра.</li></ul>`,
        'Типичные ошибки и исправления': `<ul><li><strong>Несогласованность</strong> — медленный темп.</li><li><strong>Оставленные зоны</strong> — показать.</li><li><strong>Нет подстраховки</strong> — акцент.</li></ul>`,
        'Видео, картинки': `<p>QR-код на видео + SVG-схема.</p>`
      }},
      { id: 'hand-tactics', title: 'Командные тактические действия в нападении и защите', icon: '🤾', content: {
        'Темы': `<p>Включают индивидуальные, групповые и командные действия, направленные на достижение победы.</p>`,
        'Как выполнять': `<p><strong>Методические акценты:</strong></p><ul><li>Отрабатывать комбинации.</li><li>Следить за взаимодействием.</li><li>Дозировка: 10–15 минут игры.</li><li>Страховка: дистанция.</li></ul>`,
        'Подводящие упражнения': `<ul><li>Игра в «квадрате».</li><li>Учебные двусторонние игры.</li><li>Выполнение тактических комбинаций.</li></ul>`,
        'Типичные ошибки и исправления': `<ul><li><strong>Несогласованность</strong> — медленный темп.</li><li><strong>Потеря позиции</strong> — показать.</li><li><strong>Медленная реакция</strong> — упражнения на реакцию.</li></ul>`,
        'Видео, картинки': `<p>QR-код на видео + SVG-схема.</p>`
      }}
    ]
    }
};
// ============================================================
// УЧИТЕЛЮ: РЕНДЕР
// ============================================================
const methodContainer = document.getElementById('methodContainer');
const methodFilters = document.getElementById('methodFilters');

window.renderMethodTiles = function(block) {
  console.log("Пытаюсь отрисовать блок:", block);
  if (!methodContainer) {
    console.log("Ошибка: methodContainer не найден!");
    return;
  }
  const blockData = METHOD_DATA[block];
  if (!blockData) {
    console.log("Ошибка: нет данных для блока", block);
    return;
  }
  const topicTabs = ['Темы', 'Как выполнять', 'Подводящие упражнения', 'Типичные ошибки и исправления', 'Видео, картинки'];
  methodContainer.innerHTML = `<div class="method-tiles">${blockData.topics.map(topic => `
    <div class="method-tile" data-topic="${topic.id}" onclick="renderMethodDetail('${block}', '${topic.id}')">
      <div class="method-tile__icon">${topic.icon}</div>
      <div class="method-tile__title">${topic.title}</div>
      <div class="method-tile__count">${topicTabs.length} подвкладок</div>
    </div>
  `).join('')}</div>`;
};

window.renderMethodDetail = function(block, topicId) {
  const blockData = METHOD_DATA[block];
  if (!blockData) return;
  const topic = blockData.topics.find(t => t.id === topicId);
  if (!topic) return;
  const tabs = ['Темы', 'Как выполнять', 'Подводящие упражнения', 'Типичные ошибки и исправления', 'Видео, картинки'];
  const tabEmoji = { 'Темы': '📖', 'Как выполнять': '📝', 'Подводящие упражнения': '💪', 'Типичные ошибки и исправления': '⚠️', 'Видео, картинки': '🎬' };
  const contentMap = {};
  tabs.forEach(t => { contentMap[t] = topic.content[t] || '<p>Информация скоро появится.</p>'; });

  methodContainer.innerHTML = `
    <div class="method-detail">
      <div class="method-detail__header">
        <button class="method-detail__back" onclick="renderMethodTiles('${block}')">← Назад</button>
        <h3 class="method-detail__title">${topic.icon} ${topic.title}</h3>
      </div>
      <div class="method-tabs" id="methodTabs">
        ${tabs.map((t, i) => `<button class="method-tab ${i === 0 ? 'is-active' : ''}" data-tab="${t}">${tabEmoji[t]} ${t}</button>`).join('')}
      </div>
      <div class="method-tab__content" id="methodTabContent">${contentMap[tabs[0]]}</div>
    </div>
  `;
  document.getElementById('methodTabs').addEventListener('click', e => {
    const btn = e.target.closest('.method-tab');
    if (!btn) return;
    document.querySelectorAll('#methodTabs .method-tab').forEach(b => b.classList.remove('is-active'));
    btn.classList.add('is-active');
    document.getElementById('methodTabContent').innerHTML = contentMap[btn.dataset.tab] || '<p>Материал скоро появится.</p>';
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
  // По умолчанию открываем гимнастику
  renderMethodTiles('gym');
  }
// ============================================================
// ТЕСТЫ (РАСШИРЕННАЯ ВЕРСИЯ)
// ============================================================
const QUIZ_DATA = {
  athletics: { 
    title: 'Лёгкая атлетика', icon: '🏃', 
    topics: [
      { id: 'q-ath-start', title: 'Старты и бег', questions: [
        { q: "Какой старт используется на короткие дистанции?", a: ["Высокий", "Низкий", "Оба"], correct: 1 },
        { q: "Сколько фаз в спринтерском беге?", a: ["2", "3", "4"], correct: 2 },
        { q: "Что делают по команде «Внимание!» при низком старте?", a: ["Поднимают таз", "Бегут", "Ложатся"], correct: 0 },
        { q: "Какая дистанция не является спринтерской?", a: ["100 м", "400 м", "1500 м"], correct: 2 },
        { q: "Как называется бег с максимальной скоростью на короткие дистанции?", a: ["Марафон", "Спринт", "Кросс"], correct: 1 },
        { q: "Куда ставится толчковая нога при низком старте?", a: ["В переднюю колодку", "В заднюю колодку", "На линию старта"], correct: 0 },
        { q: "Сколько метров в одном круге на стандартном стадионе?", a: ["200", "400", "1000"], correct: 1 },
        { q: "Как называется финишное ускорение?", a: ["Рывок", "Бросок", "Старт"], correct: 0 },
        { q: "Что важно делать руками во время бега?", a: ["Махать в стороны", "Сгибать в локтях и двигать вдоль тела", "Держать в карманах"], correct: 1 },
        { q: "Какая обувь используется для бега?", a: ["Бутсы", "Кроссовки (шиповки)", "Ботинки"], correct: 1 }
      ]},
      { id: 'q-ath-jump', title: 'Прыжки и метания', questions: [
        { q: "Сколько попыток даётся в прыжках в длину?", a: ["3", "5", "6"], correct: 0 },
        { q: "Какой вес малого мяча для метания?", a: ["100 г", "150 г", "200 г"], correct: 1 },
        { q: "Что важно сделать перед прыжком в длину с места?", a: ["Мах руками", "Закрыть глаза", "Сесть на шпагат"], correct: 0 },
        { q: "Как приземляются после прыжка в длину?", a: ["На одну ногу", "На обе ноги", "На спину"], correct: 1 },
        { q: "В какую сторону выполняется разбег?", a: ["К бруску", "От бруска", "В сторону"], correct: 0 },
        { q: "Как называется снаряд для метания?", a: ["Ядро", "Граната", "Копьё"], correct: 1 },
        { q: "Куда нельзя заступать при прыжке?", a: ["За линию", "На брусок", "В яму"], correct: 0 },
        { q: "Что развивает метание?", a: ["Гибкость", "Силу и координацию", "Выносливость"], correct: 1 },
        { q: "Сколько весит граната для девушек?", a: ["500 г", "700 г", "150 г"], correct: 0 },
        { q: "Как называется яма для приземления?", a: ["Песочница", "Сектор", "Круг"], correct: 0 }
      ]}
    ]
  },
  gym: { 
    title: 'Гимнастика', icon: '🤸', 
    topics: [
      { id: 'q-gym-roll', title: 'Кувырки и стойки', questions: [
        { q: "Что является основой безопасности при падениях?", a: ["Группировка", "Растяжка", "Прыжок"], correct: 0 },
        { q: "Как называется стойка на лопатках?", a: ["Берёзка", "Свечка", "Мост"], correct: 0 },
        { q: "С чего начинается кувырок вперёд?", a: ["С упора присев", "С прыжка", "С разбега"], correct: 0 },
        { q: "Как выполняется стойка на руках?", a: ["Ноги врозь", "Ноги вместе, руки прямые", "На одной руке"], correct: 1 },
        { q: "Сколько фаз в кувырке назад?", a: ["1", "2", "3"], correct: 2 },
        { q: "Что нужно делать головой при кувырке?", a: ["Поднять вверх", "Прижать к груди", "Повернуть в сторону"], correct: 1 },
        { q: "Как называется упражнение с прогибом назад?", a: ["Мост", "Ласточка", "Шпагат"], correct: 0 },
        { q: "Что развивает гимнастика?", a: ["Только силу", "Только гибкость", "Гибкость и координацию"], correct: 2 },
        { q: "На чём выполняются гимнастические упражнения?", a: ["На матах", "На полу", "На столе"], correct: 0 },
        { q: "Сколько секунд нужно держать стойку на лопатках?", a: ["1–2", "10–15", "60"], correct: 1 }
      ]},
      { id: 'q-gym-acrobatics', title: 'Акробатика', questions: [
        { q: "Что такое акробатика?", a: ["Вид гимнастики", "Вид бега", "Вид плавания"], correct: 0 },
        { q: "Как называется переворот через голову?", a: ["Кувырок", "Мост", "Шпагат"], correct: 0 },
        { q: "Что нужно для безопасности на матах?", a: ["Страховка", "Быстрота", "Сила"], correct: 0 },
        { q: "Как называется стойка на руках?", a: ["Стойка", "Мост", "Кувырок"], correct: 0 },
        { q: "Куда смотрит спортсмен в стойке на руках?", a: ["В пол", "Вверх", "В сторону"], correct: 0 },
        { q: "Какое упражнение развивает гибкость?", a: ["Мост", "Бег", "Прыжок"], correct: 0 },
        { q: "Сколько времени длится акробатическое выступление?", a: ["1 мин", "5 мин", "10 мин"], correct: 0 },
        { q: "Что нельзя делать при кувырке?", a: ["Опираться на голову", "Группироваться", "Отталкиваться"], correct: 0 },
        { q: "Что нужно делать после упражнения?", a: ["Восстановить дыхание", "Бежать дальше", "Кричать"], correct: 0 },
        { q: "Что развивает акробатика?", a: ["Ловкость", "Скорость", "Выносливость"], correct: 0 }
      ]}
    ]
  },
  ski: { 
    title: 'Лыжная подготовка', icon: '🎿', 
    topics: [
      { id: 'q-ski-move', title: 'Ходы и спуски', questions: [
        { q: "Какой ход самый распространённый?", a: ["Попеременный двухшажный", "Коньковый", "Бесшажный"], correct: 0 },
        { q: "Как тормозить на лыжах?", a: ["Плугом", "Прыжком", "Кувырком"], correct: 0 },
        { q: "Как называется ход, где отталкиваются только палками?", a: ["Одновременный бесшажный", "Попеременный", "Коньковый"], correct: 0 },
        { q: "Как правильно дышать на лыжне?", a: ["Ртом", "Носом", "Не дышать"], correct: 1 },
        { q: "Что делать при подъёме в гору?", a: ["Ёлочкой", "Спускаться", "Прыгать"], correct: 0 },
        { q: "Как называется стойка на спуске?", a: ["Высокая", "Низкая", "Средняя"], correct: 0 },
        { q: "Куда ставить палки при попеременном ходе?", a: ["Вперёд", "В стороны", "Назад"], correct: 0 },
        { q: "Что важно при спуске с горы?", a: ["Равновесие", "Скорость", "Прыжок"], correct: 0 },
        { q: "Сколько лыж используется в ходьбе?", a: ["Одна", "Две", "Три"], correct: 1 },
        { q: "Какой инвентарь нужен для лыж?", a: ["Лыжи и палки", "Коньки", "Санки"], correct: 0 }
      ]}
    ]
  },
  football: { 
    title: 'Футбол', icon: '⚽', 
    topics: [
      { id: 'q-foot-kick', title: 'Удары и остановки', questions: [
        { q: "Какой частью стопы бьют на точность?", a: ["Внутренней", "Носком", "Пяткой"], correct: 0 },
        { q: "Сколько игроков в футбольной команде?", a: ["10", "11", "12"], correct: 1 },
        { q: "Как называется удар по мячу головой?", a: ["Пас", "Удар головой", "Пенальти"], correct: 1 },
        { q: "Где находится вратарь?", a: ["В центре", "В воротах", "На фланге"], correct: 1 },
        { q: "Что нельзя делать в футболе?", a: ["Бить по мячу", "Играть руками", "Бежать"], correct: 1 },
        { q: "Сколько длится футбольный матч?", a: ["90 мин", "60 мин", "120 мин"], correct: 0 },
        { q: "Как называется ведение мяча?", a: ["Дриблинг", "Пас", "Финт"], correct: 0 },
        { q: "Что такое финт?", a: ["Обманное движение", "Удар", "Передача"], correct: 0 },
        { q: "Куда бьют при остановке мяча?", a: ["Подошвой", "Пальцами", "Локтем"], correct: 0 },
        { q: "Как называется передача мяча партнёру?", a: ["Пас", "Гол", "Аут"], correct: 0 }
      ]}
    ]
  },
  volley: { 
    title: 'Волейбол', icon: '🏐', 
    topics: [
      { id: 'q-volley-pass', title: 'Передачи и подачи', questions: [
        { q: "До скольких очков играют в партии?", a: ["15", "21", "25"], correct: 2 },
        { q: "Как называется передача сверху?", a: ["Ковшик", "Плуг", "Блок"], correct: 0 },
        { q: "Сколько игроков в команде на площадке?", a: ["5", "6", "7"], correct: 1 },
        { q: "Что такое блок?", a: ["Защита", "Атака", "Подача"], correct: 0 },
        { q: "Как называется подача снизу?", a: ["Нижняя", "Верхняя", "Боковая"], correct: 0 },
        { q: "Куда бьют при нападающем ударе?", a: ["В аут", "В площадку соперника", "В сетку"], correct: 1 },
        { q: "Сколько касаний разрешено?", a: ["2", "3", "4"], correct: 1 },
        { q: "Как называется приём мяча?", a: ["Передача", "Приём", "Подача"], correct: 1 },
        { q: "Можно ли переходить среднюю линию?", a: ["Да", "Нет", "Только в прыжке"], correct: 1 },
        { q: "Что делает судья?", a: ["Судит", "Играет", "Тренирует"], correct: 0 }
      ]}
    ]
  },
  basket: { 
    title: 'Баскетбол', icon: '🏀', 
    topics: [
      { id: 'q-basket-base', title: 'Основы игры', questions: [
        { q: "Сколько игроков в баскетболе?", a: ["5", "6", "7"], correct: 0 },
        { q: "Сколько времени на атаку?", a: ["10 сек", "24 сек", "30 сек"], correct: 1 },
        { q: "Как называется ведение мяча?", a: ["Дриблинг", "Пас", "Бросок"], correct: 0 },
        { q: "Сколько очков за бросок в корзину?", a: ["1", "2", "3"], correct: 1 },
        { q: "Как называется остановка прыжком?", a: ["Стоп", "Прыжок", "Бег"], correct: 0 },
        { q: "Куда бросают мяч?", a: ["В корзину", "В ворота", "В сетку"], correct: 0 },
        { q: "Что такое финт?", a: ["Обманное движение", "Удар", "Передача"], correct: 0 },
        { q: "Как называется передача от груди?", a: ["Пас", "Бросок", "Ведение"], correct: 0 },
        { q: "Сколько очков за штрафной бросок?", a: ["1", "2", "3"], correct: 0 },
        { q: "Можно ли бить по мячу ногой?", a: ["Да", "Нет", "Иногда"], correct: 1 }
      ]}
    ]
  },
  handball: { 
    title: 'Гандбол', icon: '🤾', 
    topics: [
      { id: 'q-hand-shot', title: 'Броски и ведение', questions: [
        { q: "Сколько игроков в гандболе?", a: ["5", "6", "7"], correct: 2 },
        { q: "Чем выполняют ведение в гандболе?", a: ["Ногой", "Рукой", "Головой"], correct: 1 },
        { q: "Сколько времени на атаку в гандболе?", a: ["30 сек", "24 сек", "60 сек"], correct: 0 },
        { q: "Как называется бросок в прыжке?", a: ["Прыжковый", "Обычный", "Силовой"], correct: 0 },
        { q: "Куда бросают мяч?", a: ["В ворота", "В корзину", "В сетку"], correct: 0 },
        { q: "Что такое финт?", a: ["Обманное движение", "Удар", "Передача"], correct: 0 },
        { q: "Сколько шагов можно сделать с мячом?", a: ["2", "3", "5"], correct: 1 },
        { q: "Как называется защита?", a: ["Блок", "Пас", "Бросок"], correct: 0 },
        { q: "Можно ли играть ногами?", a: ["Да", "Нет", "Иногда"], correct: 1 },
        { q: "Что делает вратарь?", a: ["Ловит мяч", "Бросает мяч", "Судит"], correct: 0 }
      ]}
    ]
  }
};
// ============================================================
// КВЕСТ "СПОРТИВНЫЙ МАРШРУТ"
// ============================================================
const questContainer = document.getElementById('questContainer');

const QUEST_DATA = [
  { id: 1, image: "🏒", question: "Какая арена является домашней для ХК «Металлург-Жлобин»?", answers: ["Дворец игровых видов спорта", "Ледовый дворец", "Городской стадион"], correct: 1 },
  { id: 2, image: "🏟️", question: "Сколько мест вмещает Дворец игровых видов спорта?", answers: ["1500", "5000", "800"], correct: 0 },
  { id: 3, image: "⚽", question: "На каком стадионе проходят главные футбольные матчи города?", answers: ["Спартак", "Городской стадион", "Динамо"], correct: 1 },
  { id: 4, image: "🏃", question: "Где готовят будущих чемпионов в Жлобине?", answers: ["СДЮШОР", "Школа №1", "ДЮСШ"], correct: 0 },
  { id: 5, image: "🏊", question: "Какой объект имеет 50-метровые дорожки для плавания?", answers: ["Аквапарк", "Плавательный бассейн", "Озеро"], correct: 1 },
  { id: 6, image: "🎉", question: "В каком году Жлобин принимал II Игры стран СНГ?", answers: ["2021", "2023", "2025"], correct: 1 },
  { id: 7, image: "🏋️", question: "Какой вид спорта прославил Василия Руденкова?", answers: ["Метание молота", "Плавание", "Бокс"], correct: 0 },
  { id: 8, image: "🤼", question: "Какой турнир ежегодно проходит памяти Шоты Нармания?", answers: ["Футбол", "Греко-римская борьба", "Хоккей"], correct: 1 }
];

let currentQuestStep = 0;
let questScore = 0;

window.renderQuest = function() {
  if (!questContainer) return;
  
  // Если квест закончен
  if (currentQuestStep >= QUEST_DATA.length) {
    let title = "🏆 Победа!";
    let text = `Отличный результат! Ты набрал ${questScore} из ${QUEST_DATA.length} баллов!`;
    
    if (questScore === 0) {
      title = "😢 Попробуй еще раз!";
      text = "Ты не ответил ни на один вопрос. Изучи карту и возвращайся!";
    } else if (questScore < 4) {
      title = "🤔 Неплохо!";
      text = `Ты набрал ${questScore} из ${QUEST_DATA.length} баллов. Попробуй улучшить результат!`;
    } else if (questScore >= 7) {
      title = "🌟 Настоящий эксперт!";
      text = `Превосходно! ${questScore} из ${QUEST_DATA.length} баллов. Ты знаешь спорт Жлобина на отлично!`;
    }

    questContainer.innerHTML = `
      <div style="text-align: center; padding: 20px;">
        <h3 style="font-size: 2rem; color: var(--primary); margin-bottom: 20px;">${title}</h3>
        <p style="font-size: 1.2rem; margin-bottom: 30px;">${text}</p>
        <button class="btn" onclick="restartQuest()">Пройти заново</button>
      </div>
    `;
    return;
  }

  // Отрисовка вопроса
  const q = QUEST_DATA[currentQuestStep];
  questContainer.innerHTML = `
    <div style="text-align: center; margin-bottom: 20px; font-weight: 800; color: var(--text-muted);">
      Вопрос ${currentQuestStep + 1} из ${QUEST_DATA.length}
    </div>
    <div class="quiz-question">
      <div style="font-size: 5rem; text-align: center; margin-bottom: 15px; line-height: 1;">${q.image}</div>
      <h4 style="text-align: center; font-size: 1.2rem; margin-bottom: 20px;">${q.question}</h4>
      <div id="questOptions" style="margin-top: 10px;"></div>
    </div>
  `;

  const optionsWrap = document.getElementById('questOptions');
  q.answers.forEach((ans, index) => {
    const opt = document.createElement('div');
    opt.className = 'quiz-option';
    opt.textContent = ans;
    opt.onclick = () => {
      if (opt.dataset.locked) return;
      const allOpts = optionsWrap.querySelectorAll('.quiz-option');
      allOpts.forEach(o => o.dataset.locked = '1');

      if (index === q.correct) {
        opt.classList.add('correct');
        questScore++;
      } else {
        opt.classList.add('incorrect');
        allOpts[q.correct].classList.add('correct');
      }
      
      setTimeout(() => {
        currentQuestStep++;
        renderQuest();
      }, 1000);
    };
    optionsWrap.appendChild(opt);
  });
};

window.restartQuest = function() {
  currentQuestStep = 0;
  questScore = 0;
  renderQuest();
};

// Запуск при переходе на страницу
document.querySelectorAll('[data-page-link="quest"]').forEach(link => {
  link.addEventListener('click', () => {
    setTimeout(() => {
      if (currentQuestStep >= QUEST_DATA.length) restartQuest(); 
      else renderQuest();
    }, 50);
  });
});
// ============================================================
// МОБИЛЬНОЕ МЕНЮ (БУРГЕР)
// ============================================================
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');

if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    mainNav.classList.toggle('is-open');
    navToggle.classList.toggle('is-active');
  });
}
// ============================================================
// ТЕСТЫ: РЕНДЕР И ЗАПУСК
// ============================================================
const quizContainer = document.getElementById('quizContainer');

window.renderQuizTiles = function() {
  if (!quizContainer) return;
  quizContainer.innerHTML = `<div class="method-tiles">${Object.entries(QUIZ_DATA).map(([key, block]) => `
    <div class="method-tile" onclick="renderQuizTopics('${key}')">
      <div class="method-tile__icon">${block.icon}</div>
      <div class="method-tile__title">${block.title}</div>
      <div class="method-tile__count">${block.topics.length} тем</div>
    </div>
  `).join('')}</div>`;
};

window.renderQuizTopics = function(blockKey) {
  const block = QUIZ_DATA[blockKey];
  if (!block || !quizContainer) return;
  quizContainer.innerHTML = `
    <div class="method-detail">
      <div class="method-detail__header">
        <button class="method-detail__back" onclick="renderQuizTiles()">← Назад к разделам</button>
        <h3 class="method-detail__title">${block.icon} ${block.title}</h3>
      </div>
      <div class="method-tab__content" style="padding: 0;">
        ${block.topics.map(t => `
          <div style="padding: 20px 30px; border-bottom: 1px solid var(--border); display: flex; justify-content: space-between; align-items: center; gap: 15px; flex-wrap: wrap;">
            <div style="flex: 1; min-width: 200px; font-weight: 800; color: var(--text); font-size: 1.1rem;">${t.title}</div>
            <button class="btn" style="padding: 10px 20px; font-size: 0.85rem;" onclick="renderQuizQuestions('${blockKey}', '${t.id}')">Начать тест</button>
          </div>
        `).join('')}
      </div>
    </div>
  `;
};

window.renderQuizQuestions = function(blockKey, topicId) {
  const block = QUIZ_DATA[blockKey];
  const topic = block && block.topics.find(t => t.id === topicId);
  if (!topic || !quizContainer) return;

  let score = 0;
  let answered = 0;

  quizContainer.innerHTML = `
    <div class="method-detail">
      <div class="method-detail__header">
        <button class="method-detail__back" onclick="renderQuizTopics('${blockKey}')">← Назад к темам</button>
        <h3 class="method-detail__title">${block.icon} ${topic.title}</h3>
      </div>
      <div class="quiz-container" style="margin: 30px;">
        <div id="quizQuestions"></div>
        <div id="quizResult" style="margin-top: 25px; font-weight: 800; font-size: 1.2rem; text-align: center; color: var(--primary);"></div>
      </div>
    </div>
  `;

  const qWrap = document.getElementById('quizQuestions');
  const resultEl = document.getElementById('quizResult');

  topic.questions.forEach((q, qi) => {
    const qEl = document.createElement('div');
    qEl.className = 'quiz-question';
    qEl.innerHTML = `<h4>${qi + 1}. ${q.q}</h4>`;
    q.a.forEach((ans, ai) => {
      const opt = document.createElement('div');
      opt.className = 'quiz-option';
      opt.textContent = ans;
      opt.addEventListener('click', () => {
        if (opt.dataset.locked) return;
        qEl.querySelectorAll('.quiz-option').forEach(o => o.dataset.locked = '1');
        if (ai === q.correct) {
          opt.classList.add('correct');
          score++;
        } else {
          opt.classList.add('incorrect');
          qEl.querySelectorAll('.quiz-option')[q.correct].classList.add('correct');
        }
        answered++;
        if (answered === topic.questions.length) {
          resultEl.textContent = `Результат: ${score} из ${topic.questions.length} правильных.`;
        }
      });
      qEl.appendChild(opt);
    });
    qWrap.appendChild(qEl);
  });
};

// Подключаем запуск тестов при переходе на страницу
document.querySelectorAll('[data-page-link="quiz"]').forEach(link => {
  link.addEventListener('click', () => {
    setTimeout(() => {
      if (typeof renderQuizTiles === 'function') renderQuizTiles();
    }, 50);
  });
});
// ============================================================
// АНИМАЦИЯ ПРИ ПРОКРУТКЕ
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  // Находим все секции, которые нужно анимировать
  const sections = document.querySelectorAll('.section, .hero');
  
  // Сразу добавляем класс .reveal, чтобы они стали невидимыми до прокрутки
  sections.forEach(sec => {
    sec.classList.add('reveal');
  });

  // Настраиваем "наблюдатель" за прокруткой
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Если секция попала в поле зрения — показываем её
        entry.target.classList.add('active');
        // Отключаем наблюдение, чтобы анимация сработала только один раз
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1 // Секция должна показаться хотя бы на 10%, чтобы сработала анимация
  });

  sections.forEach(sec => observer.observe(sec));
});
