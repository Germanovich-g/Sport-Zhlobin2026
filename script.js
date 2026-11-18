// ============================================================
// ДАННЫЕ КАРТЫ
// ============================================================
const DATA = [
  // ---------- ОБЪЕКТЫ ----------
  { id:'led', layer:'objects', title:'Ледовый дворец', address:'ул. Карла Маркса, 3/1', text:'Домашняя арена ХК «Металлург-Жлобин».', lat:52.8925, lng:30.0290, photo:'' },
  { id:'dvor', layer:'objects', title:'Дворец игровых видов спорта', address:'ул. Карла Маркса, 3/1', text:'Комплекс на 1500 мест.', lat:52.8920, lng:30.0280, photo:'' },
  { id:'pool', layer:'objects', title:'Плавательный бассейн', address:'ул. Карла Маркса, 3/1', text:'Арена с 50-метровыми дорожками.', lat:52.8915, lng:30.0270, photo:'' },
  { id:'stadium', layer:'objects', title:'Городской стадион', address:'ул. Парижской Коммуны, 13', text:'Главная площадка для футбола.', lat:52.8890, lng:30.0220, photo:'' },
  { id:'sdyushor', layer:'objects', title:'Жлобинская районная СДЮШОР', address:'ул. Первомайская, 1А', text:'Кузница будущих чемпионов.', lat:52.8940, lng:30.0250, photo:'' },

  // ---------- ЛЕГЕНДЫ ----------
  { id:'rudenkov', layer:'legends', title:'Василий Руденков', address:'Олимпийский чемпион 1960', text:'Олимпийский чемпион по метанию молота.', lat:52.8935, lng:30.0310, photo:'rudenkov.jpeg', link: 'rudenkov.html' },
  { id:'lovetsky', layer:'legends', title:'Владимир Ловецкий', address:'Серебро Олимпиады-1972', text:'Серебряный призёр в эстафете 4×100 м.', lat:52.8945, lng:30.0320, photo:'lovec.jpg', link: 'lovetsky.html' },
  { id:'kirov', layer:'legends', title:'Николай Киров', address:'Бронза Олимпиады-1980', text:'Бронзовый призёр в беге на 800 м.', lat:52.8950, lng:30.0290, photo:'kirov2.jpg', link: 'kirov.html' },
  { id:'kikinov', layer:'legends', title:'Александр Кикинёв', address:'Чемпион Европы', text:'Один из самых титулованных борцов.', lat:52.8940, lng:30.0300, photo:'kikinov.jpg', link: 'kikinov.html' },
  { id:'dybinin', layer:'legends', title:'Юрий Дубинин', address:'Участник Олимпиады-2008', text:'Мастер спорта международного класса.', lat:52.8930, lng:30.0310, photo:'dybinin.jpg', link: 'dybinin.html' },
  { id:'petrenko', layer:'legends', title:'Игорь Петренко', address:'Участник двух Олимпиад', text:'Одна из ключевых фигур жлобинской борьбы.', lat:52.8935, lng:30.0320, photo:'petrenko.jpg', link: 'petrenko.html' },
  { id:'narmania', layer:'legends', title:'Шота Нармания', address:'Мастер спорта', text:'Капитан милиции, погибший при исполнении.', lat:52.8945, lng:30.0330, photo:'narmania.jpg', link: 'narmania.html' },

  // ---------- МОЛОДЕЖЬ ----------
  { id:'levshunov', layer:'youth', title:'Артём Левшунов', address:'Драфт НХЛ — 2-й номер', text:'Играет за «Чикаго».', lat:52.8900, lng:30.0270, photo:'levshun.jpg', link: 'levshunov.html' },
  { id:'pinchuk', layer:'youth', title:'Виталий Пинчук', address:'Сборная Беларуси · НХЛ', text:'Нападающий «Нэшвилл».', lat:52.8910, lng:30.0300, photo:'pinchyk.jpg', link: 'pinchuk.html' },
  { id:'borikov', layer:'youth', title:'Егор Бориков', address:'Контракт с «Ютой» (НХЛ)', text:'Молодой талант.', lat:52.8895, lng:30.0250, photo:'borikov.jpeg', link: 'borikov.html' },
  { id:'dygar', layer:'youth', title:'Кирилл Дугарь', address:'Бокс', text:'Мастер спорта РБ.', lat:52.8915, lng:30.0280, photo:'dugar.jpg', link: 'dugar.html' },
  { id:'bondarenko', layer:'youth', title:'Маргарита Бондаренко', address:'Гребля, плавание', text:'Юная воспитанница ЦОР.', lat:52.8870, lng:30.0250, photo:'', link: 'bondarenko.html' },
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

  // ---------- СОБЫТИЯ ----------
  { id:'cis-games', layer:'events', title:'II Игры стран СНГ', address:'2023 / 2026', text:'Соревнования по самбо.', lat:52.8910, lng:30.0350, photo:'' },
  { id:'narmania-event', layer:'events', title:'Турнир памяти Шоты Нармания', address:'Ежегодно', text:'Греко-римская борьба.', lat:52.8980, lng:30.0290, photo:'' },
  { id:'spartakiada', layer:'events', title:'Спартакиада Союзного государства', address:'Студенческие соревнования', text:'Старт соревнований.', lat:52.8860, lng:30.0290, photo:'' },

  // ---------- СКРЫТЫЙ ОБЪЕКТ ----------
  { id:'secret', layer:'objects', title:'Секретный объект', address:'Скрытая локация', text:'Вы нашли скрытую информацию! Жлобинские спортсмены всегда славились силой духа. Продолжайте изучать историю!', lat:52.8928, lng:30.0272, photo:'', hidden: true }
];

const LAYER_EMOJI = { objects: '🏟️', legends: '🏆', youth: '⭐', events: '🎉' };

// ============================================================
// КАРТА
// ============================================================
const mapEl = document.getElementById('mapContainer');
let map = null;
const markerMap = new Map();
let currentLayer = 'all';
let currentSearch = '';
window.isSecretUnlocked = false;

if (mapEl) {
  map = L.map('mapContainer', {
    center: [52.8928, 30.0272],
    zoom: 14,
    minZoom: 12,
    maxBounds: [ [52.8500, 29.9500], [52.9300, 30.1000] ]
  });

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap', maxZoom: 19
  }).addTo(map);

  DATA.forEach(item => {
    const icon = L.divIcon({
      className: '',
      html: `<div class="pin-marker pin-marker--${item.layer}"><span>${LAYER_EMOJI[item.layer]}</span></div>`,
      iconSize: [38, 38],
      iconAnchor: [19, 38],
      popupAnchor: [0, -38]
    });

    const linkHTML = (item.link && !item.hidden)
      ? `<a href="${item.link}" style="display:block; margin-top:10px; background:#f97316; color:#fff; text-align:center; padding:8px; border-radius:5px; text-decoration:none; font-weight:bold;">Читать биографию</a>`
      : '';

    const photoHTML = item.photo ? `<img src="${item.photo}" style="width:100%; border-radius:8px; margin-bottom:8px;" onerror="this.style.display='none'">` : '';

    const popupHTML = `<div style="min-width:200px;">${photoHTML}<strong>${item.title}</strong><br><small>${item.address}</small><p style="margin-top:5px; font-size:0.9rem;">${item.text}</p>${linkHTML}</div>`;

    const marker = L.marker([item.lat, item.lng], { icon }).bindPopup(popupHTML);

    if (!item.hidden) marker.addTo(map);

    markerMap.set(item.id, { marker, data: item });
  });
}

// ============================================================
// ФИЛЬТРЫ
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

// ============================================================
// КАРТОЧКИ
// ============================================================
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
  const items = DATA.filter(i =>
    i.layer === layer &&
    !i.hidden &&
    (!q || i.title.toLowerCase().includes(q))
  );

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

// ============================================================
// ТЕОРИЯ ДЛЯ УЧАЩИХСЯ (с медиа-блоком)
// ============================================================
const THEORY_DATA = {
  '1-4': [
    {
      icon: '🤸‍♂️',
      title: 'Гимнастика и акробатика',
      practice: 'Строевые упражнения (повороты, перестроения). Перекаты, кувырок вперёд, стойка на лопатках. Лазание по гимнастической стенке, упражнения на равновесие. Работа со скакалкой.',
      theory: 'Гимнастика формирует правильную осанку и вестибулярный аппарат. <strong>Главное правило:</strong> никогда не выполняй «мостик» или кувырок без разминки. Страховка учителя обязательна на снарядах.',
      media: {
        images: [
          { title: 'Инфографика: техника группировки', url: '#' },
          { title: 'Схема: положение рук в кувырке', url: '#' }
        ],
        videos: [
          { title: 'Кувырок вперёд — 3 частые ошибки', url: '#' },
          { title: 'Утренняя гимнастика для школьников', url: '#' }
        ]
      }
    },
    {
      icon: '🏃‍♂️',
      title: 'Лёгкая атлетика',
      practice: 'Ходьба и бег (30 м, 60 м). Прыжки в длину с места и с разбега. Метание малого мяча. Подвижные игры с элементами бега.',
      theory: 'Лёгкая атлетика — «королева спорта». В беге важно не просто махать ногами, а работать руками для баланса. При метании мяча нельзя стоять в секторе — это опасно!',
      media: {
        images: [
          { title: 'Схема: фазы низкого старта', url: '#' },
          { title: 'Плакат: техника прыжка в длину', url: '#' }
        ],
        videos: [
          { title: 'Как правильно дышать при беге', url: '#' }
        ]
      }
    },
    {
      icon: '🏐',
      title: 'Спортивные игры',
      practice: 'Подвижные игры с мячом. Стойки, простые передачи, ведение мяча на месте. Игры по упрощённым правилам.',
      theory: 'Игры учат работать в команде. В баскетболе важно видеть не только мяч, но и партнёра. Не толкайся — фол!',
      media: {
        images: [
          { title: 'Схема: разметка площадки', url: '#' }
        ],
        videos: [
          { title: 'Передача мяча в парах', url: '#' }
        ]
      }
    },
    {
      icon: '🎿',
      title: 'Лыжная подготовка',
      practice: 'Ступающий и скользящий шаг без палок. Повороты переступанием. Спуск в основной стойке.',
      theory: 'Лыжи — лучший способ развить выносливость зимой. Классическое правило подбора: лыжа — до запястья вытянутой руки, палки — до подмышек. Одевайся слоями, чтобы не вспотеть.',
      media: {
        images: [
          { title: 'Схема: основная стойка лыжника', url: '#' }
        ],
        videos: [
          { title: 'Ступающий шаг для начинающих', url: '#' }
        ]
      }
    }
  ],

  '5-9': [
    {
      icon: '🤸‍♂️',
      title: 'Гимнастика и акробатика',
      practice: 'Строевые упражнения, кувырки вперёд/назад, стойка на лопатках, «мост», «колесо». Опорные прыжки (козёл, конь). Упражнения на перекладине, брусьях, бревне (для девочек). Работа с гантелями и скакалкой.',
      theory: 'В 5–7 классах учимся делать «колесо» и длинный кувырок, в 8–9 — соединять их в связки. <strong>Главное правило:</strong> страховка и самостраховка обязательны. Никогда не прыгай в «мостик» без разминки.',
      media: {
        images: [
          { title: 'Техника гимнастического моста (вид сбоку)', url: '#' },
          { title: 'Схема: акробатическая дорожка — последовательность кувырка', url: '#' }
        ],
        videos: [
          { title: 'Техника кувырка вперёд (школа РБ)', url: '#' },
          { title: 'Страховка на гимнастическом бревне', url: '#' },
          { title: 'Ошибки в стойке на лопатках', url: '#' }
        ]
      }
    },
    {
      icon: '🏃‍♂️',
      title: 'Лёгкая атлетика',
      practice: 'Бег 30/60/100 м, кросс до 2000 м. Прыжки в длину с разбега, в высоту. Метание гранаты (500 г) и малого мяча. Развитие скоростно-силовых качеств.',
      theory: 'Фазы бега: старт → разгон → финиш. В спринте на 60 м важно вовремя «включить» руки. При метании снаряда — не заходи в сектор, слушай команду учителя.',
      media: {
        images: [
          { title: 'Фазы низкого старта (вид сверху)', url: '#' },
          { title: 'Техника прыжка в длину с разбега', url: '#' }
        ],
        videos: [
          { title: 'Техника метания гранаты 500 г', url: '#' },
          { title: 'Дыхание при беге на длинную дистанцию', url: '#' },
          { title: 'Разбор прыжка в высоту «фосбери-флоп»', url: '#' }
        ]
      }
    },
    {
      icon: '🏐',
      title: 'Спортивные игры',
      practice: 'Баскетбол, волейбол, футбол, гандбол (не менее 2 игр). Передачи, ведение, броски по кольцу, подачи. Тактические действия в защите и нападении.',
      theory: 'В баскетболе важно видеть партнёра, а не только мяч. В 8 классе переходим от простых передач к заслонам и пик-н-роллам. В волейболе счёт идёт до 25 очков (в решающей партии — до 15).',
      media: {
        images: [
          { title: 'В
