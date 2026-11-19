// ============================================================
// НАВИГАЦИЯ ПО СТРАНИЦАМ
// ============================================================
document.querySelectorAll('[data-page-link]').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const page = link.dataset.pageLink;
    document.getElementById('page-home').style.display = 'none';
    document.getElementById('page-students').style.display = 'none';
    document.getElementById('page-method').style.display = 'none';
    document.getElementById('page-quiz').style.display = 'none';
    document.getElementById(`page-${page}`).style.display = 'block';
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
  { id:'secret', layer:'objects', title:'Секретный объект', address:'Скрытая локация', text:'Вы нашли скрытую информацию! Жлобинские спортсмены всегда славились силой духа.', lat:52.8928, lng:30.0272, photo:'', hidden: true }
];

const LAYER_EMOJI = { objects: '🏟️', legends: '🏆', youth: '⭐', events: '🎉' };
let map = null;
const markerMap = new Map();
let currentLayer = 'all';
let currentSearch = '';
window.isSecretUnlocked = false;

// ============================================================
// ИНИЦИАЛИЗАЦИЯ КАРТЫ
// ============================================================
const mapEl = document.getElementById('mapContainer');
if (mapEl) {
  map = L.map('mapContainer', {
    center: [52.8928, 30.0272], zoom: 14, minZoom: 12,
    maxBounds: [ [52.8500, 29.9500], [52.9300, 30.1000] ]
  });
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap', maxZoom: 19
  }).addTo(map);

  DATA.forEach(item => {
    const icon = L.divIcon({
      className: '',
      html: `<div class="pin-marker pin-marker--${item.layer}"><span>${LAYER_EMOJI[item.layer]}</span></div>`,
      iconSize: [38, 38], iconAnchor: [19, 38], popupAnchor: [0, -38]
    });
    const linkHTML = (item.link && !item.hidden) ? `<a href="${item.link}" style="display:block; margin-top:10px; background:#f97316; color:#fff; text-align:center; padding:8px; border-radius:5px; text-decoration:none; font-weight:bold;">Читать биографию</a>` : '';
    const photoHTML = item.photo ? `<img src="${item.photo}" style="width:100%; border-radius:8px; margin-bottom:8px;" onerror="this.style.display='none'">` : '';
    const popupHTML = `<div style="min-width:200px;">${photoHTML}<strong>${item.title}</strong><br><small>${item.address}</small><p style="margin-top:5px; font-size:0.9rem;">${item.text}</p>${linkHTML}</div>`;
    const marker = L.marker([item.lat, item.lng], { icon }).bindPopup(popupHTML);
    if (!item.hidden) marker.addTo(map);
    markerMap.set(item.id, { marker, data: item });
  });
}

// ============================================================
// ФИЛЬТРЫ И КАРТОЧКИ
// ============================================================
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
  if (secret && map && !map.hasLayer(secret.marker)) {
    secret.marker.addTo(map);
  }
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
    searchTimer = setTimeout(() => {
      currentSearch = e.target.value;
      applyFilters();
    }, 200);
  });
}

function cardHTML(item) {
  const img = item.photo ? `<img src="${item.photo}" alt="${item.title}" onerror="this.style.display='none'">` : LAYER_EMOJI[item.layer];
  const imgClass = (item.layer === 'legends' || item.layer === 'youth') ? 'card__img card__img--people' : 'card__img';
  const tag = item.link ? 'a' : 'div';
  const href = item.link ? `href="${item.link}"` : '';
  const readMore = item.link ? `<p style="color: var(--primary); font-weight: bold; margin-top: 10px;">Читать биографию →</p>` : '';
  return `<${tag} ${href} class="card" style="text-decoration: none; color: inherit;">
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
// МЕТОДИЧЕСКАЯ КОПИЛКА ДЛЯ УЧИТЕЛЯ
// ============================================================
const METHOD_DATA = {
  gym: {
    icon: '🤸', title: 'Гимнастика',
    topics: [
      {
        id: 'gym-kulok', title: 'Кувырок вперёд', icon: '🔄',
        content: {
          'Темы': `
            <h4>📖 Что такое кувырок вперёд</h4>
            <p>Кувырок вперёд — базовое акробатическое упражнение, при котором тело перекатывается через голову с последовательным касанием мата затылком, шеей, лопатками, поясницей и тазом.</p>
            <h4>🎯 Зачем нужен</h4>
            <ul><li>Развивает вестибулярный аппарат и координацию.</li><li>Укрепляет мышцы шеи и спины.</li><li>Учит группировке и самостраховке при падениях.</li></ul>
            <h4>⚠️ Безопасность</h4>
            <ul><li>Выполняется только на мате.</li><li>Обязательна разминка шеи и запястий.</li><li>Нельзя выполнять без группировки — риск травмы шеи.</li></ul>
          `,
          'Как выполнять': `
            <h4>Фазы выполнения</h4>
            <ol>
              <li><strong>Исходное положение:</strong> упор присев, ладони на мате на ширине плеч, подбородок прижат к груди.</li>
              <li><strong>Толчок:</strong> отталкиваемся ногами, переносим вес на руки.</li>
              <li><strong>Перекат:</strong> касаемся мата затылком, шеей, лопатками — не головой!</li>
              <li><strong>Группировка:</strong> в момент переката колени прижаты к груди, руки обхватывают голени.</li>
              <li><strong>Выход:</strong> приходим в упор присев, встаём в основную стойку.</li>
            </ol>
            <h4>Типичные ошибки</h4>
            <ul><li>Касание мата головой вместо затылка — опасно!</li><li>Разомкнутая группировка.</li><li>Слишком быстрый темп без контроля.</li></ul>
          `,
          'Подводящие упражнения': `
            <h4>Упражнения перед кувырком</h4>
            <ol>
              <li><strong>Группировка сидя:</strong> обхватить колени, прижать голову к груди. Удерживать 3–5 сек.</li>
              <li><strong>Перекаты на спине:</strong> из положения лёжа на спине подтянуть колени и перекатываться вперёд-назад 5–6 раз.</li>
              <li><strong>Перекат с группировкой:</strong> из упора присев перекатиться назад и вернуться, не касаясь головой.</li>
              <li><strong>Кувырок с горки:</strong> на наклонном мате — легче контролировать перекат.</li>
            </ol>
          `,
          'Видео / картинки / схемы': `<p class="student-video-note">Ссылки на видео и схемы скоро появятся.</p>`
        }
      },
      {
        id: 'gym-stoyka', title: 'Стойка на лопатках', icon: '🤸',
        content: {
          'Темы': `
            <h4>📖 Что такое стойка на лопатках</h4>
            <p>Стойка на лопатках («берёзка») — положение, при котором тело опирается на лопатки, ноги вытянуты вверх, руки поддерживают спину.</p>
            <h4>🎯 Зачем нужна</h4>
            <ul><li>Укрепляет мышцы спины и пресса.</li><li>Учит балансу и контролю над телом.</li></ul>
          `,
          'Как выполнять': `
            <h4>Фазы выполнения</h4>
            <ol>
              <li><strong>Исходное положение:</strong> лёжа на спине, руки вдоль тела.</li>
              <li><strong>Подъём:</strong> согнуть ноги, подтянуть колени к груди, затем выпрямить вверх.</li>
              <li><strong>Опора:</strong> таз поднимается, лопатки на мате, руки подставляются под спину.</li>
              <li><strong>Фиксация:</strong> тело вертикально, ноги прямые, носки натянуты.</li>
            </ol>
          `,
          'Подводящие упражнения': `
            <ol>
              <li><strong>Поднимание прямых ног:</strong> лёжа на спине, поднять ноги до 90°.</li>
              <li><strong>«Берёзка» с согнутыми ногами:</strong> поднять таз, колени к груди, удержать 3 сек.</li>
            </ol>
          `,
          'Видео / картинки / схемы': `<p class="student-video-note">Ссылки на видео и схемы скоро появятся.</p>`
        }
      }
    ]
  },
  athletics: {
    icon: '🏃', title: 'Лёгкая атлетика',
    topics: [
      {
        id: 'ath-run30', title: 'Бег 30 метров', icon: '🏃',
        content: {
          'Темы': `
            <h4>📖 Бег на 30 метров</h4>
            <p>Спринтерская дистанция. Проверяет быстроту и технику старта.</p>
          `,
          'Как выполнять': `
            <h4>Фазы бега</h4>
            <ol>
              <li><strong>Старт:</strong> низкий для 5–9 классов, высокий — для младших.</li>
              <li><strong>Стартовый разгон:</strong> наклон вперёд, частые шаги, активная работа рук.</li>
              <li><strong>Финиш:</strong> не сбавлять темп, пересечь линию грудью.</li>
            </ol>
          `,
          'Подводящие упражнения': `
            <ol>
              <li>Бег с высоким подниманием бедра.</li>
              <li>Бег с захлёстом голени.</li>
              <li>Выбегание с высокого старта.</li>
            </ol>
          `,
          'Видео / картинки / схемы': `<p class="student-video-note">Ссылки на видео и схемы скоро появятся.</p>`
        }
      }
    ]
  },
  games: {
    icon: '🏐', title: 'Спортивные игры',
    topics: [
      {
        id: 'game-basket', title: 'Баскетбол: бросок', icon: '🏀',
        content: {
          'Темы': `<h4>📖 Бросок одной рукой от плеча</h4><p>Основной бросок в баскетболе. Выполняется с места или в движении.</p>`,
          'Как выполнять': `
            <ol>
              <li><strong>Стойка:</strong> ноги на ширине плеч, колени согнуты.</li>
              <li><strong>Замах:</strong> мяч поднимается над головой.</li>
              <li><strong>Бросок:</strong> разгибание руки и кисти.</li>
            </ol>
          `,
          'Подводящие упражнения': `<ol><li>Броски мяча вверх одной рукой.</li><li>Броски в стену с отметкой.</li></ol>`,
          'Видео / картинки / схемы': `<p class="student-video-note">Ссылки на видео и схемы скоро появятся.</p>`
        }
      }
    ]
  },
  ski: {
    icon: '🎿', title: 'Лыжи',
    topics: [
      {
        id: 'ski-classic', title: 'Попеременный двухшажный ход', icon: '🎿',
        content: {
          'Темы': `<h4>📖 Основной классический ход</h4><p>Толчок палками и ногами происходит поочерёдно.</p>`,
          'Как выполнять': `
            <ol>
              <li><strong>Скольжение:</strong> на одной лыже.</li>
              <li><strong>Толчок:</strong> левой ногой и правой палкой.</li>
              <li><strong>Смена:</strong> вес переносится на другую ногу.</li>
            </ol>
          `,
          'Подводящие упражнения': `<ol><li>Ступающий шаг без палок.</li><li>Скользящий шаг без палок.</li></ol>`,
          'Видео / картинки / схемы': `<p class="student-video-note">Ссылки на видео и схемы скоро появятся.</p>`
        }
      }
    ]
  }
};

const methodContainer = document.getElementById('methodContainer');
const methodFilters = document.getElementById('methodFilters');

function renderMethodTiles(block) {
  if (!methodContainer) return;
  const blockData = METHOD_DATA[block];
  if (!blockData) return;

  methodContainer.innerHTML = `
    <div class="method-tiles">
      ${blockData.topics.map(topic => `
        <div class="method-tile" data-topic="${topic.id}">
          <div class="method-tile__icon">${topic.icon}</div>
          <div class="method-tile__title">${topic.title}</div>
          <div class="method-tile__count">4 подвкладки</div>
        </div>
      `).join('')}
    </div>
  `;

  methodContainer.querySelectorAll('.method-tile').forEach(tile => {
    tile.addEventListener('click', () => renderMethodDetail(block, tile.dataset.topic));
  });
}

function renderMethodDetail(block, topicId) {
  if (!methodContainer) return;
  const blockData = METHOD_DATA[block];
  if (!blockData) return;
  const topic = blockData.topics.find(t => t.id === topicId);
  if (!topic) return;

  const tabs = ['Темы', 'Как выполнять', 'Подводящие упражнения', 'Видео / картинки / схемы'];
  const tabEmoji = { 'Темы': '📖', 'Как выполнять': '📝', 'Подводящие упражнения': '🔄', 'Видео / картинки / схемы': '🎬' };

  methodContainer.innerHTML = `
    <div class="method-detail">
      <div class="method-detail__header">
        <button class="method-detail__back" id="methodBackBtn">← Назад к темам</button>
        <h3 class="method-detail__title">${topic.icon} ${topic.title}</h3>
      </div>
      <div class="method-tabs" id="methodTabs">
        ${tabs.map((tab, i) => `
          <button class="method-tab ${i === 0 ? 'is-active' : ''}" data-tab="${tab}">
            ${tabEmoji[tab]} ${tab}
          </button>
        `).join('')}
      </div>
      <div class="method-tab__content" id="methodTabContent">
        ${topic.content[tabs[0]] || '<p>Материал скоро появится.</p>'}
      </div>
    </div>
  `;

  document.getElementById('methodBackBtn').addEventListener('click', () => renderMethodTiles(block));

  document.getElementById('methodTabs').addEventListener('click', (e) => {
    const btn = e.target.closest('.method-tab');
    if (!btn) return;
    document.querySelectorAll('#methodTabs .method-tab').forEach(b => b.classList.remove('is-active'));
    btn.classList.add('is-active');
    document.getElementById('methodTabContent').innerHTML = topic.content[btn.dataset.tab] || '<p>Материал скоро появится.</p>';
  });
}

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
// РАЗДЕЛ «УЧАЩИМСЯ»
// ============================================================
const STUDENT_DATA = {
  '1-4': {
    topics: [
      {
        id: 'st-ath', title: 'Лёгкая атлетика', icon: '🏃',
        content: {
          'Теория': `<h4>📖 Что такое лёгкая атлетика</h4><p>Это ходьба, бег, прыжки и метания. Они делают нас быстрыми, ловкими и выносливыми.</p><h4>⚠️ Безопасность</h4><ul><li>Проверяй шнурки перед бегом.</li><li>При метании не стой в секторе.</li></ul>`,
          'Как выполнять': `<h4>Прыжок в длину с места</h4><ol><li><strong>Старт:</strong> ноги на ширине плеч у линии.</li><li><strong>Замах:</strong> отведи руки назад, присядь.</li><li><strong>Толчок:</strong> резко прыгни вперёд.</li><li><strong>Приземление:</strong> на пятки.</li></ol>`,
          'Ошибки': `<ul><li>Заступ за линию.</li><li>Падение назад при приземлении.</li></ul>`,
          'Видео / схемы': `<p class="student-video-note">Ссылки на видео и схемы скоро появятся.</p>`
        }
      },
      {
        id: 'st-gym', title: 'Гимнастика и акробатика', icon: '🤸',
        content: {
          'Теория': `<h4>📖 Что такое гимнастика</h4><p>Упражнения для развития гибкости, силы и ловкости.</p><h4>⚠️ Безопасность</h4><ul><li>Выполняй упражнения только на мате.</li><li>Слушай команды учителя.</li></ul>`,
          'Как выполнять': `<h4>Кувырок вперёд</h4><ol><li><strong>Старт:</strong> упор присев, руки на мате.</li><li><strong>Перекат:</strong> коснись мата затылком (не головой!).</li><li><strong>Группировка:</strong> прижми колени к груди.</li><li><strong>Выход:</strong> встань в упор присев.</li></ol>`,
          'Ошибки': `<ul><li>Опора на голову.</li><li>Слишком быстрый темп.</li></ul>`,
          'Видео / схемы': `<p class="student-video-note">Ссылки на видео и схемы скоро появятся.</p>`
        }
      },
      {
        id: 'st-ski', title: 'Лыжная подготовка', icon: '🎿',
        content: {
          'Теория': `<h4>📖 Зачем нужны лыжи</h4><p>Лыжи укрепляют здоровье зимой.</p><h4>⚠️ Безопасность</h4><ul><li>Не выезжай на лёд без разрешения.</li><li>Держи дистанцию.</li></ul>`,
          'Как выполнять': `<h4>Ступающий шаг</h4><ol><li><strong>Старт:</strong> встань на лыжи.</li><li><strong>Движение:</strong> иди переступанием.</li><li><strong>Палки:</strong> ставь их поочерёдно.</li></ol>`,
          'Ошибки': `<ul><li>Волок лыж по снегу.</li><li>Слишком широкий шаг.</li></ul>`,
          'Видео / схемы': `<p class="student-video-note">Ссылки на видео и схемы скоро появятся.</p>`
        }
      },
      {
        id: 'st-game', title: 'Спортивные игры', icon: '⚽',
        content: {
          'Теория': `<h4>📖 Подвижные игры</h4><p>Игры с мячом учат работать в команде.</p>`,
          'Как выполнять': `<h4>Ведение мяча</h4><ol><li><strong>Стойка:</strong> слегка наклонись вперёд.</li><li><strong>Удар:</strong> толкай мяч пальцами.</li><li><strong>Взгляд:</strong> смотри вперёд.</li></ol>`,
          'Ошибки': `<ul><li>Удар ладонью.</li><li>Постоянный взгляд вниз.</li></ul>`,
          'Видео / схемы': `<p class="student-video-note">Ссылки на видео и схемы скоро появятся.</p>`
        }
      }
    ]
  },
  '5-9': {
    topics: [
      {
        id: 'st-ath-5', title: 'Лёгкая атлетика', icon: '🏃',
        content: {
          'Теория': `<h4>📖 5–9 классы</h4><p>Спринт, кросс, прыжки в высоту и метание гранаты.</p>`,
          'Как выполнять': `<h4>Бег на 30 метров</h4><ol><li><strong>Старт:</strong> низкий или высокий.</li><li><strong>Разгон:</strong> наклон вперёд, работа рук.</li><li><strong>Финиш:</strong> не сбавляй темп.</li></ol>`,
          'Ошибки': `<ul><li>Раннее выпрямление после старта.</li><li>Зажатые плечи.</li></ul>`,
          'Видео / схемы': `<p class="student-video-note">Ссылки на видео и схемы скоро появятся.</p>`
        }
      },
      {
        id: 'st-gym-5', title: 'Гимнастика и акробатика', icon: '🤸',
        content: {
          'Теория': `<h4>📖 5–9 классы</h4><p>Опорные прыжки, упражнения на перекладине и брусьях.</p>`,
          'Как выполнять': `<h4>Стойка на лопатках</h4><ol><li><strong>Старт:</strong> лёжа на спине.</li><li><strong>Подъём:</strong> выпрями ноги вверх.</li><li><strong>Опора:</strong> локти ближе друг к другу.</li></ol>`,
          'Ошибки': `<ul><li>Опора на шею.</li><li>Согнутые ноги.</li></ul>`,
          'Видео / схемы': `<p class="student-video-note">Ссылки на видео и схемы скоро появятся.</p>`
        }
      },
      {
        id: 'st-ski-5', title: 'Лыжная подготовка', icon: '🎿',
        content: {
          'Теория': `<h4>📖 5–9 классы</h4><p>Попеременный двухшажный ход, подъёмы, торможение «плугом».</p>`,
          'Как выполнять': `<h4>Попеременный ход</h4><ol><li><strong>Скольжение:</strong> на одной лыже.</li><li><strong>Толчок:</strong> левой ногой и правой палкой.</li><li><strong>Смена:</strong> переноси вес.</li></ol>`,
          'Ошибки': `<ul><li>Толчок одноимёнными рукой и ногой.</li><li>Скованные движения.</li></ul>`,
          'Видео / схемы': `<p class="student-video-note">Ссылки на видео и схемы скоро появятся.</p>`
        }
      },
      {
        id: 'st-game-5', title: 'Спортивные игры', icon: '🏐',
        content: {
          'Теория': `<h4>📖 5–9 классы</h4><p>Баскетбол, волейбол, футбол.</p>`,
          'Как выполнять': `<h4>Передача сверху (волейбол)</h4><ol><li><strong>Стойка:</strong> ноги на ширине плеч.</li><li><strong>Руки:</strong> согнуты над головой.</li><li><strong>Приём:</strong> на пальцы.</li></ol>`,
          'Ошибки': `<ul><li>Приём на ладони.</li><li>Низкая стойка.</li></ul>`,
          'Видео / схемы': `<p class="student-video-note">Ссылки на видео и схемы скоро появятся.</p>`
        }
      }
    ]
  },
  '10-11': {
    topics: [
      {
        id: 'st-ath-10', title: 'Лёгкая атлетика', icon: '🏃',
        content: {
          'Теория': `<h4>📖 10–11 классы</h4><p>Спринт 100 м, эстафетный бег, прыжки в высоту.</p>`,
          'Как выполнять': `<h4>Эстафетный бег</h4><ol><li><strong>Приём:</strong> не оглядывайся.</li><li><strong>Передача:</strong> отдай палочку точно в руку.</li></ol>`,
          'Ошибки': `<ul><li>Потеря палочки.</li><li>Замедление перед финишем.</li></ul>`,
          'Видео / схемы': `<p class="student-video-note">Ссылки на видео и схемы скоро появятся.</p>`
        }
      },
      {
        id: 'st-gym-10', title: 'Гимнастика', icon: '🏋️',
        content: {
          'Теория': `<h4>📖 10–11 классы</h4><p>Аэробика (девушки), атлетическая гимнастика (юноши).</p>`,
          'Как выполнять': `<h4>С отягощениями</h4><ol><li><strong>Спина:</strong> держи прямой.</li><li><strong>Дыхание:</strong> выдох на усилии.</li></ol>`,
          'Ошибки': `<ul><li>Круглая спина.</li><li>Задержка дыхания.</li></ul>`,
          'Видео / схемы': `<p class="student-video-note">Ссылки на видео и схемы скоро появятся.</p>`
        }
      },
      {
        id: 'st-ski-10', title: 'Лыжная подготовка', icon: '🎿',
        content: {
          'Теория': `<h4>📖 10–11 классы</h4><p>Коньковый ход, дистанция на время.</p>`,
          'Как выполнять': `<h4>Коньковый ход</h4><ol><li><strong>Вес:</strong> на опорную ногу.</li><li><strong>Толчок:</strong> ребром лыжи в сторону.</li></ol>`,
          'Ошибки': `<ul><li>Отсутствие переноса веса.</li><li>Резкие движения.</li></ul>`,
          'Видео / схемы': `<p class="student-video-note">Ссылки на видео и схемы скоро появятся.</p>`
        }
      },
      {
        id: 'st-game-10', title: 'Спортивные игры', icon: '🏐',
        content: {
          'Теория': `<h4>📖 10–11 классы</h4><p>Углублённая тактика, судейство.</p>`,
          'Как выполнять': `<h4>Судейство</h4><ol><li><strong>Жесты:</strong> знай сигналы.</li><li><strong>Правила:</strong> 3 сек (баскет), 8 сек (волейбол).</li></ol>`,
          'Ошибки': `<ul><li>Спор с судьёй.</li><li>Незнание правил.</li></ul>`,
          'Видео / схемы': `<p class="student-video-note">Ссылки на видео и схемы скоро появятся.</p>`
        }
      }
    ]
  }
};

const studentContainer = document.getElementById('studentContainer');
const studentLevelsEl = document.getElementById('studentLevels');

function renderStudentTiles(grade) {
  if (!studentContainer) return;
  const gradeData = STUDENT_DATA[grade];
  if (!gradeData) return;

  studentContainer.innerHTML = `
    <div class="method-tiles">
      ${gradeData.topics.map(topic => `
        <div class="method-tile" data-topic="${topic.id}">
          <div class="method-tile__icon">${topic.icon}</div>
          <div class="method-tile__title">${topic.title}</div>
          <div class="method-tile__count">4 подвкладки</div>
        </div>
      `).join('')}
    </div>
  `;

  studentContainer.querySelectorAll('.method-tile').forEach(tile => {
    tile.addEventListener('click', () => renderStudentDetail(grade, tile.dataset.topic));
  });
}

function renderStudentDetail(grade, topicId) {
  if (!studentContainer) return;
  const gradeData = STUDENT_DATA[grade];
  if (!gradeData) return;
  const topic = gradeData.topics.find(t => t.id === topicId);
  if (!topic) return;

  const tabs = ['Теория', 'Как выполнять', 'Ошибки', 'Видео / схемы'];
  const tabEmoji = { 'Теория': '📖', 'Как выполнять': '📝', 'Ошибки': '⚠️', 'Видео / схемы': '🎬' };

  studentContainer.innerHTML = `
    <div class="method-detail">
      <div class="method-detail__header">
        <button class="method-detail__back" id="studentBackBtn">← Назад к темам</button>
        <h3 class="method-detail__title">${topic.icon} ${topic.title}</h3>
      </div>
      <div class="method-tabs" id="studentTabs">
        ${tabs.map((tab, i) => `
          <button class="method-tab ${i === 0 ? 'is-active' : ''}" data-tab="${tab}">
            ${tabEmoji[tab]} ${tab}
          </button>
        `).join('')}
      </div>
      <div class="method-tab__content" id="studentTabContent">
        ${topic.content[tabs[0]] || '<p>Материал скоро появится.</p>'}
      </div>
    </div>
  `;

  document.getElementById('studentBackBtn').addEventListener('click', () => renderStudentTiles(grade));

  document.getElementById('studentTabs').addEventListener('click', (e) => {
    const btn = e.target.closest('.method-tab');
    if (!btn) return;
    document.querySelectorAll('#studentTabs .method-tab').forEach(b => b.classList.remove('is-active'));
    btn.classList.add('is-active');
    document.getElementById('studentTabContent').innerHTML = topic.content[btn.dataset.tab] || '<p>Материал скоро появится.</p>';
  });
}

if (studentLevelsEl) {
  studentLevelsEl.addEventListener('click', (e) => {
    const button = e.target.closest('[data-level]');
    if (!button) return;
    studentLevelsEl.querySelectorAll('.chip').forEach(c => c.classList.remove('is-active'));
    button.classList.add('is-active');
    renderStudentTiles(button.dataset.level);
  });
  renderStudentTiles('1-4');
}
// ============================================================
// РАЗДЕЛ «ТЕСТЫ» (Плитки разделов -> Список тестов -> Прохождение)
// ============================================================

const QUIZ_DATA = {
  rules: {
    title: 'Правила спорта', icon: '📚',
    topics: [
      {
        id: 'rules-basket', title: 'Баскетбол',
        questions: [
          { q: "Сколько игроков одной команды на площадке в баскетболе?", a: ["5", "6", "7", "11"], correct: 0 },
          { q: "Сколько очков дают за штрафной бросок?", a: ["1", "2", "3", "4"], correct: 0 },
          { q: "Сколько времени дается на атаку в баскетболе?", a: ["10 сек", "24 сек", "30 сек", "45 сек"], correct: 1 },
          { q: "Какая высота кольца от пола?", a: ["2.50 м", "3.05 м", "3.50 м", "4.00 м"], correct: 1 }
        ]
      },
      {
        id: 'rules-volley', title: 'Волейбол',
        questions: [
          { q: "До скольких очков играют в партии (обычно)?", a: ["15", "21", "25", "30"], correct: 2 },
          { q: "Сколько касаний мяча разрешено на одной стороне?", a: ["1", "2", "3", "4"], correct: 2 },
          { q: "Сколько игроков в команде на площадке?", a: ["5", "6", "7", "11"], correct: 1 }
        ]
      },
      {
        id: 'rules-football', title: 'Футбол',
        questions: [
          { q: "Сколько игроков одной команды на поле?", a: ["5", "7", "11", "15"], correct: 2 },
          { q: "С какого расстояния пробивают пенальти?", a: ["9 м", "10 м", "11 м", "12 м"], correct: 2 },
          { q: "Какая продолжительность матча?", a: ["60 мин", "80 мин", "90 мин", "120 мин"], correct: 2 }
        ]
      }
    ]
  },
  safety: {
    title: 'Техника безопасности', icon: '🛡️',
    topics: [
      {
        id: 'safety-gym', title: 'В спортивном зале',
        questions: [
          { q: "Что нужно сделать перед началом занятий?", a: ["Сделать разминку", "Съесть шоколад", "Попить воды", "Сесть на шпагат"], correct: 0 },
          { q: "Можно ли оставлять инвентарь (гантели, скакалки) на полу в проходе?", a: ["Да, если быстро", "Нет, это опасно", "Только гантели", "Только в конце урока"], correct: 1 },
          { q: "Зачем нужен магнезий (порошок) в гимнастике?", a: ["Для красоты", "Чтобы руки не скользили", "Для запаха", "Для веса"], correct: 1 }
        ]
      },
      {
        id: 'safety-outdoor', title: 'На улице и на лыжах',
        questions: [
          { q: "Что делать, если во время игры на улице пошел сильный ливень с грозой?", a: ["Спрятаться под деревом", "Бежать домой", "Прекратить игру и уйти в здание", "Продолжать играть"], correct: 2 },
          { q: "Можно ли кататься на лыжах без головного убора при сильном морозе?", a: ["Да, если быстро", "Нет, можно застудить голову", "Только взрослым", "Да, если есть капюшон"], correct: 1 },
          { q: "Что нужно сделать перед метанием мяча?", a: ["Убедиться, что сектор свободен", "Бросить как можно сильнее", "Закрыть глаза", "Отвернуться"], correct: 0 }
        ]
      }
    ]
  },
  history: {
    title: 'История спорта', icon: '🏆',
    topics: [
      {
        id: 'history-olymp', title: 'Олимпийские игры',
        questions: [
          { q: "В какой стране зародились Олимпийские игры?", a: ["Рим", "Греция", "Египет", "Россия"], correct: 1 },
          { q: "Как часто проводятся современные Олимпийские игры?", a: ["Каждый год", "Раз в 2 года", "Раз в 4 года", "Раз в 10 лет"], correct: 2 },
          { q: "Какой символ есть на Олимпийском флаге?", a: ["Звезда", "Кольца", "Меч", "Лавровый венок"], correct: 1 },
          { q: "В каком году прошли первые современные Олимпийские игры?", a: ["1896", "1900", "1924", "1980"], correct: 0 }
        ]
      },
      {
        id: 'history-belarus', title: 'Спортсмены Беларуси',
        questions: [
          { q: "Кто из белорусов носит титул 'Легенда спорта' в нашем проекте?", a: ["Дарья Домрачева", "Виктория Азаренко", "Андрей Арямнов", "Все перечисленные"], correct: 3 },
          { q: "В каком городе родился олимпийский чемпион по метанию молота Василий Руденков?", a: ["Минск", "Гомель", "Жлобин", "Витебск"], correct: 2 },
          { q: "Какой вид спорта прославил Жлобин благодаря ХК «Металлург»?", a: ["Футбол", "Хоккей", "Баскетбол", "Волейбол"], correct: 1 }
        ]
      }
    ]
  },
  ufp: {
    title: 'Мои нормативы', icon: '📊',
    topics: [
      {
        id: 'ufp-test', title: 'Общие знания УФП',
        questions: [
          { q: "Что такое 'челночный бег'?", a: ["Бег по кругу", "Бег с ускорением", "Бег между двумя точками с разворотом", "Бег спиной вперед"], correct: 2 },
          { q: "В чем измеряется гибкость при наклоне вперед?", a: ["В секундах", "В килограммах", "В сантиметрах", "В градусах"], correct: 2 },
          { q: "Какой норматив проверяет скоростно-силовые качества ног?", a: ["Пресс за 1 мин", "Прыжок в длину с места", "Вис на перекладине", "Бег 1000м"], correct: 1 }
        ]
      }
    ]
  }
};

let currentQuizQuestions = [];
let currentAnswers = [];

const quizContainer = document.getElementById('quizContainer');

function renderQuizTiles() {
  if (!quizContainer) return;
  
  let html = '<div class="method-tiles">';
  for (const key in QUIZ_DATA) {
    const block = QUIZ_DATA[key];
    html += `
      <div class="method-tile" onclick="renderQuizList('${key}')">
        <div class="method-tile__icon">${block.icon}</div>
        <div class="method-tile__title">${block.title}</div>
        <div class="method-tile__count">${block.topics.length} теста</div>
      </div>
    `;
  }
  html += '</div>';
  quizContainer.innerHTML = html;
}

function renderQuizList(blockKey) {
  if (!quizContainer) return;
  const block = QUIZ_DATA[blockKey];
  
  let html = `
    <div class="method-detail">
      <div class="method-detail__header">
        <button class="method-detail__back" onclick="renderQuizTiles()">← Назад к разделам</button>
        <h3 class="method-detail__title">${block.icon} ${block.title}</h3>
      </div>
      <div class="method-tab__content" style="padding: 0;">
  `;
  
  block.topics.forEach(topic => {
    html += `
      <div style="padding: 20px; border-bottom: 1px solid var(--border); display: flex; justify-content: space-between; align-items: center;">
        <div style="font-weight: 800; color: var(--text); font-size: 1.1rem;">${topic.title}</div>
        <button class="btn" style="padding: 10px 20px; font-size: 0.85rem;" onclick="startQuiz('${topic.id}')">Начать тест</button>
      </div>
    `;
  });
  
  html += `</div></div>`;
  quizContainer.innerHTML = html;
}

function startQuiz(topicId) {
  let topicData = null;
  for (const key in QUIZ_DATA) {
    const found = QUIZ_DATA[key].topics.find(t => t.id === topicId);
    if (found) { topicData = found; break; }
  }
  if (!topicData) return;

  currentQuizQuestions = topicData.questions;
  currentAnswers = [];

  let html = `
    <div class="method-detail">
      <div class="method-detail__header">
        <button class="method-detail__back" onclick="renderQuizTiles()">← Назад к разделам</button>
        <h3 class="method-detail__title">📝 ${topicData.title}</h3>
      </div>
      <div class="method-tab__content" id="quiz-content">
  `;

  currentQuizQuestions.forEach((item, index) => {
    const optionsHtml = item.a.map((opt, i) => `
      <label class="quiz-option" onclick="selectAnswer(event, ${index}, ${i})">
        <input type="radio" name="q${index}" style="display:none;"> ${opt}
      </label>
    `).join('');
    
    html += `
      <div class="quiz-question">
        <h4>${index + 1}. ${item.q}</h4>
        ${optionsHtml}
      </div>
    `;
  });

  html += `
      </div>
      <div style="padding: 20px 30px; text-align: right;">
        <button class="btn" onclick="checkQuiz(event)" style="width: 100%;">Проверить ответы</button>
      </div>
    </div>
  `;

  quizContainer.innerHTML = html;
}

function selectAnswer(event, qIndex, aIndex) {
  currentAnswers[qIndex] = aIndex;
  document.querySelectorAll(`[name="q${qIndex}"]`).forEach(opt => opt.parentElement.classList.remove('selected'));
  event.currentTarget.classList.add('selected');
}

function checkQuiz(event) {
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
    scoreText.innerHTML += '<br><span style="color: var(--accent);">🎉 Идеально! Секретная точка на карте разблокирована!</span>';
    if (typeof revealSecretMarker === 'function') revealSecretMarker();
  }

  questionsDiv.appendChild(scoreText);
  event.currentTarget.style.display = 'none'; 
}

// ============================================================
// ТЕМА
// ============================================================
const themeToggle = document.getElementById('themeToggle');
if (localStorage.getItem('theme') === 'dark') {
  document.documentElement.dataset.theme = 'dark';
}
if (themeToggle) {
  themeToggle.textContent = document.documentElement.dataset.theme === 'dark' ? '☀️' : '🌙';
  themeToggle.addEventListener('click', () => {
    const isDark = document.documentElement.dataset.theme === 'dark';
    document.documentElement.dataset.theme = isDark ? 'light' : 'dark';
    localStorage.setItem('theme', isDark ? 'light' : 'dark');
    themeToggle.textContent = isDark ? '🌙' : '☀️';
  });
}

// Инициализация тестов при загрузке
if (document.getElementById('quizContainer')) {
  renderQuizTiles();
}
