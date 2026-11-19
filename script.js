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
  { id:'secret', layer:'objects', title:'Секретный объект', address:'Скрытая локация', text:'Вы нашли скрытую информацию! Жлобинские спортсмены всегда славились силой духа.', lat:52.8928, lng:30.0272, photo:'', hidden: true }
];

const LAYER_EMOJI = { objects: '🏟️', legends: '🏆', youth: '⭐', events: '🎉' };
let map = null;
const markerMap = new Map();
let currentLayer = 'all';
let currentSearch = '';
window.isSecretUnlocked = false;

const mapEl = document.getElementById('mapContainer');
if (mapEl) {
  map = L.map('mapContainer', {
    center: [52.8928, 30.0272], zoom: 14, minZoom: 12,
    maxBounds: [ [52.8500, 29.9500], [52.9300, 30.1000] ]
  });
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '&copy; OpenStreetMap', maxZoom: 19 }).addTo(map);

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
  gym: {
    icon: '🤸', title: 'Гимнастика',
    topics: [
      {
        id: 'gym-kulok', title: 'Кувырок вперёд', icon: '🔄',
        content: {
          'Темы': `<h4>📖 Что такое кувырок вперёд</h4><p>Базовое акробатическое упражнение.</p><h4>⚠️ Безопасность</h4><ul><li>Только на мате.</li><li>Разминка шеи.</li></ul>`,
          'Как выполнять': `<ol><li><strong>Исходное положение:</strong> упор присев.</li><li><strong>Толчок:</strong> переносим вес на руки.</li><li><strong>Перекат:</strong> касаемся затылком.</li><li><strong>Выход:</strong> встаём в упор присев.</li></ol>`,
          'Подводящие упражнения': `<ol><li>Группировка сидя.</li><li>Перекаты на спине.</li></ol>`,
          'Видео / картинки / схемы': `<p class="student-video-note">Ссылки на видео скоро появятся.</p>`
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
          'Темы': `<h4>📖 Бег на 30 метров</h4><p>Спринтерская дистанция.</p>`,
          'Как выполнять': `<ol><li><strong>Старт:</strong> низкий.</li><li><strong>Разгон:</strong> наклон вперёд.</li><li><strong>Финиш:</strong> не сбавлять темп.</li></ol>`,
          'Подводящие упражнения': `<ol><li>Бег с высоким подниманием бедра.</li><li>Выбегание с высокого старта.</li></ol>`,
          'Видео / картинки / схемы': `<p class="student-video-note">Ссылки на видео скоро появятся.</p>`
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
          'Темы': `<h4>📖 Бросок одной рукой</h4><p>Основной бросок в баскетболе.</p>`,
          'Как выполнять': `<ol><li><strong>Стойка:</strong> колени согнуты.</li><li><strong>Бросок:</strong> разгибание руки и кисти.</li></ol>`,
          'Подводящие упражнения': `<ol><li>Броски мяча вверх.</li><li>Броски в стену.</li></ol>`,
          'Видео / картинки / схемы': `<p class="student-video-note">Ссылки на видео скоро появятся.</p>`
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
          'Темы': `<h4>📖 Классический ход</h4><p>Толчок палками и ногами поочерёдно.</p>`,
          'Как выполнять': `<ol><li><strong>Скольжение:</strong> на одной лыже.</li><li><strong>Толчок:</strong> левой ногой и правой палкой.</li></ol>`,
          'Подводящие упражнения': `<ol><li>Ступающий шаг без палок.</li></ol>`,
          'Видео / картинки / схемы': `<p class="student-video-note">Ссылки на видео скоро появятся.</p>`
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

  methodContainer.innerHTML = `<div class="method-tiles">${blockData.topics.map(topic => `
    <div class="method-tile" data-topic="${topic.id}">
      <div class="method-tile__icon">${topic.icon}</div>
      <div class="method-tile__title">${topic.title}</div>
      <div class="method-tile__count">4 подвкладки</div>
    </div>
  `).join('')}</div>`;

  methodContainer.querySelectorAll('.method-tile').forEach(tile => {
    tile.addEventListener('click', () => renderMethodDetail(block, tile.dataset.topic));
  });
}

function renderMethodDetail(block, topicId) {
  if (!methodContainer) return;
  const blockData = METHOD_DATA[block];
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
        ${tabs.map((tab, i) => `<button class="method-tab ${i === 0 ? 'is-active' : ''}" data-tab="${tab}">${tabEmoji[tab]} ${tab}</button>`).join('')}
      </div>
      <div class="method-tab__content" id="methodTabContent">${topic.content[tabs[0]]}</div>
    </div>
  `;

  document.getElementById('methodBackBtn').addEventListener('click', () => renderMethodTiles(block));
  document.getElementById('methodTabs').addEventListener('click', (e) => {
    const btn = e.target.closest('.method-tab');
    if (!btn) return;
    document.querySelectorAll('#methodTabs .method-tab').forEach(b => b.classList.remove('is-active'));
    btn.classList.add('is-active');
    document.getElementById('methodTabContent').innerHTML = topic.content[btn.dataset.tab];
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
// УЧАЩИМСЯ (1-4 классы)
// ============================================================
const STUDENT_DATA = {
  '1-4': {
    topics: [
      {
        id: 'st-ath', title: 'Лёгкая атлетика', icon: '🏃',
        content: {
          'Теория': `<h4>📖 Что такое лёгкая атлетика</h4><p>Ходьба, бег, прыжки и метания.</p><h4>⚠️ Безопасность</h4><ul><li>Проверяй шнурки.</li><li>Не стой в секторе.</li></ul>`,
          'Как выполнять': `<h4>Бег</h4><p>Челночный бег 4х9 м.</p><h4>Прыжки</h4><p>Прыжок в длину с места.</p>`,
          'Игры / Эстафеты': `<ul><li><strong>«Мяч капитану»</strong>.</li><li><strong>Эстафеты:</strong> с мячами.</li></ul>`,
          'Ошибки': `<ul><li>Высокая интенсивность бега.</li><li>Заступ за линию.</li></ul>`,
          'Видео / схемы': `<p class="student-video-note">Скоро появится.</p>`
        }
      },
      {
        id: 'st-gym', title: 'Гимнастика', icon: '🤸',
        content: {
          'Теория': `<h4>📖 Гимнастика</h4><p>Развитие гибкости и силы.</p><h4>⚠️ Безопасность</h4><ul><li>Только на мате.</li></ul>`,
          'Как выполнять': `<h4>Акробатика</h4><p>Кувырок вперед.</p><h4>Висы</h4><p>Вис согнув ноги.</p>`,
          'Игры / Эстафеты': `<ul><li><strong>«Канатоходец»</strong>.</li></ul>`,
          'Ошибки': `<ul><li>Опора на голову.</li></ul>`,
          'Видео / схемы': `<p class="student-video-note">Скоро появится.</p>`
        }
      },
      {
        id: 'st-ski', title: 'Лыжная подготовка', icon: '🎿',
        content: {
          'Теория': `<h4>📖 Лыжи</h4><p>Укрепляют здоровье.</p><h4>⚠️ Безопасность</h4><ul><li>Держи дистанцию.</li></ul>`,
          'Как выполнять': `<h4>Передвижение</h4><p>Ступающий шаг.</p>`,
          'Игры / Эстафеты': `<ul><li><strong>«Шире шаг»</strong>.</li></ul>`,
          'Ошибки': `<ul><li>Волок лыж.</li></ul>`,
          'Видео / схемы': `<p class="student-video-note">Скоро появится.</p>`
        }
      },
      {
        id: 'st-football', title: 'Футбол', icon: '⚽',
        content: {
          'Теория': `<h4>📖 Футбол</h4><p>Правила игры.</p>`,
          'Как выполнять': `<h4>Удары</h4><p>Внутренней частью стопы.</p>`,
          'Игры / Эстафеты': `<ul><li><strong>Учебная игра 2 на 2</strong>.</li></ul>`,
          'Ошибки': `<ul><li>Удар носком.</li></ul>`,
          'Видео / схемы': `<p class="student-video-note">Скоро появится.</p>`
        }
      },
      {
        id: 'st-mobile', title: 'Подвижные игры', icon: '🎲',
        content: {
          'Теория': `<h4>📖 Подвижные игры</h4><p>Учат работать в команде.</p>`,
          'Как выполнять': `<h4>Игры с бегом</h4><p>«Два Мороза», «Гуси-лебеди».</p>`,
          'Игры / Эстафеты': `<ul><li><strong>С метанием:</strong> «Охотники и зайцы».</li></ul>`,
          'Ошибки': `<ul><li>Много прыжков подряд.</li></ul>`,
          'Видео / схемы': `<p class="student-video-note">Скоро появится.</p>`
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
  if (!gradeData) {
    studentContainer.innerHTML = '<p style="text-align:center; padding: 40px; font-size: 1.2rem; color: var(--text-muted);">Материалы для этого класса скоро появятся!</p>';
    return;
  }

  studentContainer.innerHTML = `<div class="method-tiles">${gradeData.topics.map(topic => `
    <div class="method-tile" data-topic="${topic.id}">
      <div class="method-tile__icon">${topic.icon}</div>
      <div class="method-tile__title">${topic.title}</div>
      <div class="method-tile__count">5 подвкладок</div>
    </div>
  `).join('')}</div>`;

  studentContainer.querySelectorAll('.method-tile').forEach(tile => {
    tile.addEventListener('click', () => renderStudentDetail(grade, tile.dataset.topic));
  });
}

function renderStudentDetail(grade, topicId) {
  if (!studentContainer) return;
  const gradeData = STUDENT_DATA[grade];
  const topic = gradeData.topics.find(t => t.id === topicId);
  if (!topic) return;

  const tabs = ['Теория', 'Как выполнять', 'Игры / Эстафеты', 'Ошибки', 'Видео / схемы'];
  const tabEmoji = { 'Теория': '📖', 'Как выполнять': '📝', 'Игры / Эстафеты': '🏆', 'Ошибки': '⚠️', 'Видео / схемы': '🎬' };

  studentContainer.innerHTML = `
    <div class="method-detail">
      <div class="method-detail__header">
        <button class="method-detail__back" id="studentBackBtn">← Назад к темам</button>
        <h3 class="method-detail__title">${topic.icon} ${topic.title}</h3>
      </div>
      <div class="method-tabs" id="studentTabs">
        ${tabs.map((tab, i) => `<button class="method-tab ${i === 0 ? 'is-active' : ''}" data-tab="${tab}">${tabEmoji[tab]} ${tab}</button>`).join('')}
      </div>
      <div class="method-tab__content" id="studentTabContent">${topic.content[tabs[0]]}</div>
    </div>
  `;

  document.getElementById('studentBackBtn').addEventListener('click', () => renderStudentTiles(grade));
  document.getElementById('studentTabs').addEventListener('click', (e) => {
    const btn = e.target.closest('.method-tab');
    if (!btn) return;
    document.querySelectorAll('#studentTabs .method-tab').forEach(b => b.classList.remove('is-active'));
    btn.classList.add('is-active');
    document.getElementById('studentTabContent').innerHTML = topic.content[btn.dataset.tab];
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
// ТЕСТЫ
// ============================================================
const QUIZ_DATA = {
  rules: {
    title: 'Правила спорта', icon: '📚',
    topics: [
      {
        id: 'rules-basket', title: 'Баскетбол',
        questions: [
          { q: "Сколько игроков одной команды на площадке в баскетболе?", a: ["5", "6", "7", "11"], correct: 0 },
          { q: "Сколько времени дается на атаку в баскетболе?", a: ["10 сек", "24 сек", "30 сек", "45 сек"], correct: 1 }
        ]
      },
      {
        id: 'rules-volley', title: 'Волейбол',
        questions: [
          { q: "До скольких очков играют в партии?", a: ["15", "21", "25", "30"], correct: 2 },
          { q: "Сколько касаний мяча разрешено на одной стороне?", a: ["1", "2", "3", "4"], correct: 2 }
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
          { q: "Можно ли оставлять инвентарь на полу в проходе?", a: ["Да, если быстро", "Нет, это опасно", "Только гантели", "Только в конце урока"], correct: 1 }
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
          { q: "Как часто проводятся современные Олимпийские игры?", a: ["Каждый год", "Раз в 2 года", "Раз в 4 года", "Раз в 10 лет"], correct: 2 }
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
    html += `<div class="method-tile" onclick="renderQuizList('${key}')"><div class="method-tile__icon">${block.icon}</div><div class="method-tile__title">${block.title}</div><div class="method-tile__count">${block.topics.length} теста</div></div>`;
  }
  html += '</div>';
  quizContainer.innerHTML = html;
}

function renderQuizList(blockKey) {
  if (!quizContainer) return;
  const block = QUIZ_DATA[blockKey];
  let html = `<div class="method-detail"><div class="method-detail__header"><button class="method-detail__back" onclick="renderQuizTiles()">← Назад к разделам</button><h3 class="method-detail__title">${block.icon} ${block.title}</h3></div><div class="method-tab__content" style="padding: 0;">`;
  block.topics.forEach(topic => {
    html += `<div style="padding: 20px; border-bottom: 1px solid var(--border); display: flex; justify-content: space-between; align-items: center;"><div style="font-weight: 800; color: var(--text); font-size: 1.1rem;">${topic.title}</div><button class="btn" style="padding: 10px 20px; font-size: 0.85rem;" onclick="startQuiz('${topic.id}')">Начать тест</button></div>`;
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
  let html = `<div class="method-detail"><div class="method-detail__header"><button class="method-detail__back" onclick="renderQuizTiles()">← Назад к разделам</button><h3 class="method-detail__title">📝 ${topicData.title}</h3></div><div class="method-tab__content" id="quiz-content">`;
  currentQuizQuestions.forEach((item, index) => {
    const optionsHtml = item.a.map((opt, i) => `<label class="quiz-option" onclick="selectAnswer(event, ${index}, ${i})"><input type="radio" name="q${index}" style="display:none;"> ${opt}</label>`).join('');
    html += `<div class="quiz-question"><h4>${index + 1}. ${item.q}</h4>${optionsHtml}</div>`;
  });
  html += `</div><div style="padding: 20px 30px; text-align: right;"><button class="btn" onclick="checkQuiz(event)" style="width: 100%;">Проверить ответы</button></div></div>`;
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

if (document.getElementById('quizContainer')) {
  renderQuizTiles();
}

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
