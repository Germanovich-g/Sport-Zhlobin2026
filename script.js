/* ============================================================
   ДАННЫЕ (Ссылки на фото и биографии прописаны)
   ============================================================ */

const DATA = [
  // ---------- ОБЪЕКТЫ ----------
  { id:'led', layer:'objects', title:'Ледовый дворец', address:'ул. Карла Маркса, 3/1', text:'Домашняя арена ХК «Металлург-Жлобин».', lat:52.8930, lng:30.0250, photo:'led.jpg' },
  { id:'dvor', layer:'objects', title:'Дворец игровых видов спорта', address:'ул. Карла Маркса, 3/1', text:'Комплекс на 1500 мест.', lat:52.8925, lng:30.0265, photo:'dvor.jpg' },
  { id:'pool', layer:'objects', title:'Плавательный бассейн', address:'ул. Карла Маркса, 3/1', text:'Арена с 50-метровыми дорожками.', lat:52.8942, lng:30.0238, photo:'pool.jpg' },
  { id:'row', layer:'objects', title:'Гребная база', address:'ул. Карла Маркса, 3/1', text:'База для тренировок по гребле.', lat:52.8955, lng:30.0270, photo:'row.jpg' },
  { id:'ski', layer:'objects', title:'Лыжероллерная трасса', address:'в районе ЦОР', text:'Трасса длиной 2500 метров.', lat:52.8900, lng:30.0330, photo:'ski.jpg' },
  { id:'stadium', layer:'objects', title:'Городской стадион', address:'ул. Парижской Коммуны, 13', text:'Главная площадка для футбола.', lat:52.8895, lng:30.0195, photo:'stadium.jpg' },
  { id:'sdyushor', layer:'objects', title:'Жлобинская районная СДЮШОР', address:'ул. Первомайская, 1А', text:'Кузница будущих чемпионов.', lat:52.8915, lng:30.0240, photo:'sdyushor.jpg' },

  // ---------- ЛЕГЕНДЫ ----------
  { id:'rudenkov', layer:'legends', title:'Василий Руденков', address:'Олимпийский чемпион 1960', text:'Олимпийский чемпион по метанию молота.', lat:52.8910, lng:30.0220, photo:'rudenkov.jpeg', link: 'rudenkov.html' },
  { id:'lovetsky', layer:'legends', title:'Владимир Ловецкий', address:'Серебро Олимпиады-1972', text:'Серебряный призёр в эстафете 4×100 м.', lat:52.8935, lng:30.0280, photo:'lovetsky.jpeg', link: 'lovetsky.html' },
  { id:'kirov', layer:'legends', title:'Николай Киров', address:'Бронза Олимпиады-1980', text:'Бронзовый призёр в беге на 800 м.', lat:52.8950, lng:30.0245, photo:'kirov.jpeg', link: 'kirov.html' },

  // ---------- МОЛОДЕЖЬ ----------
  { id:'levshunov', layer:'youth', title:'Артём Левшунов', address:'Драфт НХЛ — 2-й номер', text:'Играет за «Чикаго».', lat:52.8920, lng:30.0290, photo:'levshunov.jpeg', link: 'levshunov.html' },
  { id:'pinchuk', layer:'youth', title:'Виталий Пинчук', address:'Сборная Беларуси · НХЛ', text:'Нападающий «Нэшвилл».', lat:52.8918, lng:30.0250, photo:'pinchuk.jpeg', link: 'pinchuk.html' },
  { id:'borikov', layer:'youth', title:'Егор Бориков', address:'Контракт с «Ютой» (НХЛ)', text:'Молодой талант.', lat:52.8945, lng:30.0295, photo:'borikov.jpeg', link: 'borikov.html' },
  { id:'metallurg', layer:'youth', title:'ХК «Металлург-Жлобин»', address:'4-кратный чемпион', text:'Чемпион Беларуси.', lat:52.8933, lng:30.0248, photo:'metallurg.jpg' },
  { id:'iskra', layer:'youth', title:'ВК «Искра»', address:'Чемпион 2023/2024', text:'Чемпион РБ по волейболу.', lat:52.8927, lng:30.0262, photo:'iskra.jpg' },
  
  { id:'hodorenko', layer:'youth', title:'Арина Ходоренко', address:'Биатлон', text:'Золото на Кубке БФБ.', lat:52.8902, lng:30.0310, photo:'hodorenko.jpeg', link: 'hodorenko.html' },
  { id:'malyshev', layer:'youth', title:'Даниил Малышев', address:'Биатлон', text:'Золото в масс-старте.', lat:52.8905, lng:30.0315, photo:'malyshev.jpeg', link: 'malyshev.html' },
  { id:'kondratieva', layer:'youth', title:'Ксения Кондратьева', address:'Биатлон', text:'Победительница эстафеты.', lat:52.8908, lng:30.0320, photo:'kondratieva.jpeg', link: 'kondratieva.html' },
  { id:'melnik', layer:'youth', title:'Виктория Мельник', address:'Биатлон', text:'Участница первенств.', lat:52.8912, lng:30.0312, photo:'melnik.jpeg', link: 'melnik.html' },

  { id:'yurkovets', layer:'youth', title:'Иван Юрковец', address:'Лёгкая атлетика', text:'Золото на 60 м.', lat:52.8921, lng:30.0275, photo:'yurkovets.jpeg', link: 'yurkovets.html' },
  { id:'danchenko', layer:'youth', title:'Валерия Данченко', address:'Лёгкая атлетика', text:'Успешно выступила на первенстве.', lat:52.8923, lng:30.0278, photo:'danchenko.jpeg', link: 'danchenko.html' },
  { id:'kikinev', layer:'youth', title:'Никита Кикинев', address:'Лёгкая атлетика', text:'Чемпион республики.', lat:52.8926, lng:30.0282, photo:'kikinev.jpeg', link: 'kikinev.html' },
  { id:'popov', layer:'youth', title:'Иван Попов', address:'Лёгкая атлетика', text:'Чемпион республики.', lat:52.8928, lng:30.0285, photo:'popov.jpeg', link: 'popov.html' },
  { id:'kuprienko', layer:'youth', title:'Ульян Куприенко', address:'Лёгкая атлетика', text:'Бронзовый призёр.', lat:52.8931, lng:30.0288, photo:'kuprienko.jpeg', link: 'kuprienko.html' },
  { id:'nikitina', layer:'youth', title:'Валерия Никитина', address:'Лёгкая атлетика', text:'Бронзовый призёр.', lat:52.8934, lng:30.0291, photo:'nikitina.jpeg', link: 'nikitina.html' },

  { id:'volleyball', layer:'youth', title:'Волейболисты ЦОР', address:'Волейбол', text:'Многократные победители.', lat:52.8937, lng:30.0294, photo:'volleyball.jpg' },
  { id:'football', layer:'youth', title:'Футбольные команды ДЮСШ', address:'Футбол', text:'Победители турниров.', lat:52.8940, lng:30.0297, photo:'football.jpg' },
  { id:'bondarenko', layer:'youth', title:'Маргарита Бондаренко', address:'Гребля', text:'Серебряный призёр.', lat:52.8943, lng:30.0300, photo:'bondarenko.jpeg', link: 'bondarenko.html' },
  { id:'pogranovskaya', layer:'youth', title:'Альбина Пограновская', address:'Гребля', text:'Серебряный призёр.', lat:52.8946, lng:30.0303, photo:'pogranovskaya.jpeg', link: 'pogranovskaya.html' },
  { id:'tishkova', layer:'youth', title:'Надежда Тишкова', address:'Волейбол', text:'Лидер «Искры».', lat:52.8949, lng:30.0306, photo:'tishkova.jpeg', link: 'tishkova.html' },

  { id:'isakovich_a', layer:'youth', title:'Артём Исакович', address:'Борьба', text:'Победитель турнира.', lat:52.8952, lng:30.0309, photo:'isakovich_a.jpeg', link: 'isakovich_a.html' },
  { id:'shevtsov', layer:'youth', title:'Тимофей Шевцов', address:'Борьба', text:'Победитель турнира.', lat:52.8955, lng:30.0312, photo:'shevtsov.jpeg', link: 'shevtsov.html' },
  { id:'baklanov', layer:'youth', title:'Максим Бакланов', address:'Борьба', text:'Победитель турнира.', lat:52.8958, lng:30.0315, photo:'baklanov.jpeg', link: 'baklanov.html' },
  { id:'isakovich_i', layer:'youth', title:'Илья Исакович', address:'Борьба', text:'Серебряный призёр.', lat:52.8961, lng:30.0318, photo:'isakovich_i.jpeg', link: 'isakovich_i.html' },
  { id:'kirgizov', layer:'youth', title:'Алексей Киргизов', address:'Единоборства', text:'Клуб «Виктория».', lat:52.8964, lng:30.0321, photo:'kirgizov.jpeg', link: 'kirgizov.html' },
  { id:'gavrilova', layer:'youth', title:'Виктория Гаврилова', address:'Единоборства', text:'Клуб «Виктория».', lat:52.8967, lng:30.0324, photo:'gavrilova.jpeg', link: 'gavrilova.html' },
  { id:'mentov', layer:'youth', title:'Никита Ментов', address:'Единоборства', text:'Клуб «Виктория».', lat:52.8970, lng:30.0327, photo:'mentov.jpeg', link: 'mentov.html' },
  { id:'shchegolev', layer:'youth', title:'Михаил Щеголев', address:'Единоборства', text:'Спортшкола «Юниор».', lat:52.8973, lng:30.0330, photo:'shchegolev.jpeg', link: 'shchegolev.html' },
  { id:'hrapov', layer:'youth', title:'Игорь Храпов', address:'Единоборства', text:'Спортшкола «Юниор».', lat:52.8976, lng:30.0333, photo:'hrapov.jpeg', link: 'hrapov.html' },
  { id:'shevchenko', layer:'youth', title:'Владислав Шевченко', address:'Единоборства', text:'Спортшкола «Юниор».', lat:52.8979, lng:30.0336, photo:'shevchenko.jpeg', link: 'shevchenko.html' },

  // ---------- СОБЫТИЯ ----------
  { id:'cis-games', layer:'events', title:'II Игры стран СНГ', address:'2023 / 2026', text:'Соревнования по самбо.', lat:52.8898, lng:30.0305, photo:'cis-games.jpg' },
  { id:'narmania', layer:'events', title:'Турнир памяти Шоты Нармания', address:'Ежегодно', text:'Греко-римская борьба.', lat:52.8960, lng:30.0260, photo:'narmania.jpg' },
  { id:'spartakiada', layer:'events', title:'Спартакиада Союзного государства', address:'Студенческие соревнования', text:'Старт соревнований.', lat:52.8905, lng:30.0320, photo:'spartakiada.jpg' }
];

const LAYER_EMOJI = { objects: '🏟️', legends: '🏆', youth: '⭐', events: '🎉' };

/* ============================================================
   ЛОГИКА КАРТЫ И ИНТЕРФЕЙСА
   ============================================================ */
const map = L.map('mapContainer', { center: [52.8928, 30.0272], zoom: 14 });
L.tileLayer('https://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
  attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ',
  maxZoom: 16
}).addTo(map);
  attribution: '&copy; OpenStreetMap &copy; CARTO',
  subdomains: 'abcd',
  maxZoom: 20
}).addTo(map);

const markerMap = new Map();

DATA.forEach(item => {
  // Создаем иконку
  const icon = L.divIcon({
    className: '',
    html: `<div class="pin-marker pin-marker--${item.layer}"><span>${LAYER_EMOJI[item.layer]}</span></div>`,
    iconSize: [30, 30], iconAnchor: [15, 30], popupAnchor: [0, -30]
  });

  // Создаем попап
  const photoHTML = item.photo ? `<img src="${item.photo}" style="width:100%; border-radius:8px; margin-bottom:8px;" onerror="this.style.display='none'">` : '';
  const linkHTML = item.link ? `<a href="${item.link}" style="display:block; margin-top:10px; background:#f97316; color:#fff; text-align:center; padding:8px; border-radius:5px; text-decoration:none; font-weight:bold;">Читать биографию</a>` : '';
  const popupHTML = `<div style="min-width:200px;">${photoHTML}<strong>${item.title}</strong><br><small>${item.address}</small><p style="margin-top:5px; font-size:0.9rem;">${item.text}</p>${linkHTML}</div>`;

  const marker = L.marker([item.lat, item.lng], { icon }).addTo(map).bindPopup(popupHTML);
  markerMap.set(item.id, { marker, data: item });
});

// Фильтры и поиск
let currentLayer = 'all';
let currentSearch = '';

function applyFilters() {
  let visible = 0;
  const q = currentSearch.trim().toLowerCase();

  markerMap.forEach(({ marker, data }) => {
    const layerOk = currentLayer === 'all' || data.layer === currentLayer;
    const searchOk = !q || data.title.toLowerCase().includes(q) || data.text.toLowerCase().includes(q);
    
    if (layerOk && searchOk) {
      if (!map.hasLayer(marker)) marker.addTo(map);
      visible++;
    } else {
      if (map.hasLayer(marker)) map.removeLayer(marker);
    }
  });
  document.getElementById('resultHint').innerHTML = `Показано точек: <strong>${visible}</strong> из ${DATA.length}`;
  renderAllCards();
}

document.querySelectorAll('.chip').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.chip').forEach(b => b.classList.remove('is-active'));
    btn.classList.add('is-active');
    currentLayer = btn.dataset.layer;
    applyFilters();
  });
});

document.getElementById('searchInput').addEventListener('input', (e) => {
  currentSearch = e.target.value;
  applyFilters();
});

// Генерация карточек
function cardHTML(item) {
  const img = item.photo ? `<img src="${item.photo}" alt="${item.title}" onerror="this.style.display='none'">` : LAYER_EMOJI[item.layer];
  const imgClass = (item.layer === 'legends' || item.layer === 'youth') ? 'card__img card__img--people' : 'card__img';
  const tag = item.link ? 'a' : 'div';
  const href = item.link ? `href="${item.link}"` : '';
  const readMore = item.link ? `<p style="color: var(--primary); font-weight: bold; margin-top: 10px;">Читать биографию →</p>` : '';

  return `
    <${tag} ${href} class="card" style="text-decoration: none; color: inherit;">
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
  const items = DATA.filter(i => i.layer === layer && (currentLayer === 'all' || i.layer === currentLayer) && (!q || i.title.toLowerCase().includes(q)));

  items.forEach(item => {
    const card = document.createElement('div');
    card.innerHTML = cardHTML(item);
    const realCard = card.firstElementChild;
    
    if (!item.link) {
      realCard.addEventListener('click', () => {
        map.setView([item.lat, item.lng], 17);
        markerMap.get(item.id).marker.openPopup();
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

// Запускаем фильтры сразу после загрузки
applyFilters();

// Модалка (на всякий случай)
const modal = document.getElementById('modal');
document.querySelectorAll('[data-close]').forEach(el => el.addEventListener('click', () => modal.classList.remove('open')));
function openModal(item) {
  document.getElementById('modalPhoto').innerHTML = item.photo ? `<img src="${item.photo}">` : LAYER_EMOJI[item.layer];
  document.getElementById('modalBadge').textContent = item.layer;
  document.getElementById('modalTitle').textContent = item.title;
  document.getElementById('modalText').textContent = item.text;
  document.getElementById('modalMeta').textContent = item.address;
  modal.classList.add('open');
}

// Тема
const themeToggle = document.getElementById('themeToggle');
if (localStorage.getItem('theme') === 'dark') document.documentElement.dataset.theme = 'dark';
themeToggle.addEventListener('click', () => {
  const isDark = document.documentElement.dataset.theme === 'dark';
  document.documentElement.dataset.theme = isDark ? 'light' : 'dark';
  localStorage.setItem('theme', isDark ? 'light' : 'dark');
  themeToggle.textContent = isDark ? '🌙' : '☀️';
});

// Старт
renderAllCards();
