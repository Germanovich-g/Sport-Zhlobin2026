// ============================================================
// ДАННЫЕ КАРТЫ
// ============================================================
const DATA = [
  { id:'led', layer:'objects', title:'Ледовый дворец', address:'ул. Карла Маркса, 3/1', text:'Домашняя арена ХК «Металлург-Жлобин».', lat:52.8925, lng:30.0290, photo:'' },
  { id:'dvor', layer:'objects', title:'Дворец игровых видов спорта', address:'ул. Карла Маркса, 3/1', text:'Комплекс на 1500 мест.', lat:52.8920, lng:30.0280, photo:'' },
  { id:'pool', layer:'objects', title:'Плавательный бассейн', address:'ул. Карла Маркса, 3/1', text:'Арена с 50-метровыми дорожками.', lat:52.8915, lng:30.0270, photo:'' },
  { id:'stadium', layer:'objects', title:'Городской стадион', address:'ул. Парижской Коммуны, 13', text:'Главная площадка для футбола.', lat:52.8890, lng:30.0220, photo:'' },
  { id:'sdyushor', layer:'objects', title:'Жлобинская районная СДЮШОР', address:'ул. Первомайская, 1А', text:'Кузница будущих чемпионов.', lat:52.8940, lng:30.0250, photo:'' },
  { id:'rudenkov', layer:'legends', title:'Василий Руденков', address:'Олимпийский чемпион 1960', text:'Олимпийский чемпион по метанию молота.', lat:52.8935, lng:30.0310, photo:'rudenkov.jpeg', link: 'rudenkov.html' },
  { id:'lovetsky', layer:'legends', title:'Владимир Ловецкий', address:'Серебро Олимпиады-1972', text:'Серебряный призёр в эстафете 4×100 м.', lat:52.8945, lng:30.0320, photo:'lovec.jpg', link: 'lovetsky.html' },
  { id:'kirov', layer:'legends', title:'Николай Киров', address:'Бронза Олимпиады-1980', text:'Бронзовый призёр в беге на 800 м.', lat:52.8950, lng:30.0290, photo:'kirov2.jpg', link: 'kirov.html' },
  { id:'kikinov', layer:'legends', title:'Александр Кикинёв', address:'Чемпион Европы', text:'Один из самых титулованных борцов.', lat:52.8940, lng:30.0300, photo:'kikinov.jpg', link: 'kikinov.html' },
  { id:'dybinin', layer:'legends', title:'Юрий Дубинин', address:'Участник Олимпиады-2008', text:'Мастер спорта международного класса.', lat:52.8930, lng:30.0310, photo:'dybinin.jpg', link: 'dybinin.html' },
  { id:'petrenko', layer:'legends', title:'Игорь Петренко', address:'Участник двух Олимпиад', text:'Одна из ключевых фигур жлобинской борьбы.', lat:52.8935, lng:30.0320, photo:'petrenko.jpg', link: 'petrenko.html' },
  { id:'narmania', layer:'legends', title:'Шота Нармания', address:'Мастер спорта', text:'Капитан милиции, погибший при исполнении.', lat:52.8945, lng:30.0330, photo:'narmania.jpg', link: 'narmania.html' },
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
  { id:'cis-games', layer:'events', title:'II Игры стран СНГ', address:'2023 / 2026', text:'Соревнования по самбо.', lat:52.8910, lng:30.0350, photo:'' },
  { id:'narmania-event', layer:'events', title:'Турнир памяти Шоты Нармания', address:'Ежегодно', text:'Греко-римская борьба.', lat:52.8980, lng:30.0290, photo:'' },
  { id:'spartakiada', layer:'events', title:'Спартакиада Союзного государства', address:'Студенческие соревнования', text:'Старт соревнований.', lat:52.8860, lng:30.0290, photo:'' },
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
    zoom: 14, minZoom: 12,
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
    const linkHTML = (item.link && !item.hidden)
      ? `<a href="${item.link}" style="display:block; margin-top:10px; background:#f97316; color:#fff; text-align:center; padding:8px; border-radius:5px; text-decoration:none; font-weight:bold;">Читать биографию</a>` : '';
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

// ============================================================
// ТЕОРИЯ ДЛЯ УЧАЩИХСЯ (без изменений)
// ============================================================
const THEORY_DATA = {
  '1-4': [
    { icon: '🤸‍♂️', title: 'Гимнастика и акробатика',
      practice: 'Строевые упражнения (повороты, перестроения). Перекаты, кувырок вперёд, стойка на лопатках. Лазание по гимнастической стенке, упражнения на равновесие. Работа со скакалкой.',
      theory: 'Гимнастика формирует правильную осанку и вестибулярный аппарат. <strong>Главное правило:</strong> никогда не выполняй «мостик» или кувырок без разминки. Страховка учителя обязательна на снарядах.',
      media: { images: [{ title: 'Инфографика: техника группировки', url: '#' }, { title: 'Схема: положение рук в кувырке', url: '#' }], videos: [{ title: 'Кувырок вперёд — 3 частые ошибки', url: '#' }, { title: 'Утренняя гимнастика для школьников', url: '#' }] }
    },
    { icon: '🏃‍♂️', title: 'Лёгкая атлетика',
      practice: 'Ходьба и бег (30 м, 60 м). Прыжки в длину с места и с разбега. Метание малого мяча. Подвижные игры с элементами бега.',
      theory: 'Лёгкая атлетика — «королева спорта». В беге важно не просто махать ногами, а работать руками для баланса. При метании мяча нельзя стоять в секторе — это опасно!',
      media: { images: [{ title: 'Схема: фазы низкого старта', url: '#' }, { title: 'Плакат: техника прыжка в длину', url: '#' }], videos: [{ title: 'Как правильно дышать при беге', url: '#' }] }
    },
    { icon: '🏐', title: 'Спортивные игры',
      practice: 'Подвижные игры с мячом. Стойки, простые передачи, ведение мяча на месте. Игры по упрощённым правилам.',
      theory: 'Игры учат работать в команде. В баскетболе важно видеть не только мяч, но и партнёра. Не толкайся — фол!',
      media: { images: [{ title: 'Схема: разметка площадки', url: '#' }], videos: [{ title: 'Передача мяча в парах', url: '#' }] }
    },
    { icon: '🎿', title: 'Лыжная подготовка',
      practice: 'Ступающий и скользящий шаг без палок. Повороты переступанием. Спуск в основной стойке.',
      theory: 'Лыжи — лучший способ развить выносливость зимой. Классическое правило подбора: лыжа — до запястья вытянутой руки, палки — до подмышек. Одевайся слоями, чтобы не вспотеть.',
      media: { images: [{ title: 'Схема: основная стойка лыжника', url: '#' }], videos: [{ title: 'Ступающий шаг для начинающих', url: '#' }] }
    }
  ],
  '5-9': [
    { icon: '🤸‍♂️', title: 'Гимнастика и акробатика',
      practice: 'Строевые упражнения, кувырки вперёд/назад, стойка на лопатках, «мост», «колесо». Опорные прыжки (козёл, конь). Упражнения на перекладине, брусьях, бревне (для девочек). Работа с гантелями и скакалкой.',
      theory: 'В 5–7 классах учимся делать «колесо» и длинный кувырок, в 8–9 — соединять их в связки. <strong>Главное правило:</strong> страховка и самостраховка обязательны. Никогда не прыгай в «мостик» без разминки.',
      media: { images: [{ title: 'Техника гимнастического моста (вид сбоку)', url: '#' }, { title: 'Схема: акробатическая дорожка', url: '#' }], videos: [{ title: 'Техника кувырка вперёд (школа РБ)', url: '#' }, { title: 'Страховка на гимнастическом бревне', url: '#' }, { title: 'Ошибки в стойке на лопатках', url: '#' }] }
    },
    { icon: '🏃‍♂️', title: 'Лёгкая атлетика',
      practice: 'Бег 30/60/100 м, кросс до 2000 м. Прыжки в длину с разбега, в высоту. Метание гранаты (500 г) и малого мяча. Развитие скоростно-силовых качеств.',
      theory: 'Фазы бега: старт → разгон → финиш. В спринте на 60 м важно вовремя «включить» руки. При метании снаряда — не заходи в сектор, слушай команду учителя.',
      media: { images: [{ title: 'Фазы низкого старта (вид сверху)', url: '#' }, { title: 'Техника прыжка в длину с разбега', url: '#' }], videos: [{ title: 'Техника метания гранаты 500 г', url: '#' }, { title: 'Дыхание при беге на длинную дистанцию', url: '#' }] }
    },
    { icon: '🏐', title: 'Спортивные игры',
      practice: 'Баскетбол, волейбол, футбол, гандбол (не менее 2 игр). Передачи, ведение, броски по кольцу, подачи. Тактические действия в защите и нападении.',
      theory: 'В баскетболе важно видеть партнёра, а не только мяч. В 8 классе переходим от простых передач к заслонам и пик-н-роллам. В волейболе счёт идёт до 25 очков (в решающей партии — до 15).',
      media: { images: [{ title: 'Волейбольная площадка 9×18 м', url: '#' }, { title: 'Жесты судьи в баскетболе', url: '#' }], videos: [{ title: 'Жесты арбитра в волейболе', url: '#' }, { title: 'Бросок в кольцо одной рукой', url: '#' }] }
    },
    { icon: '🎿', title: 'Лыжная подготовка',
      practice: 'Попеременный двухшажный ход, одновременный бесшажный ход. Подъёмы «ёлочкой» и «лесенкой», спуск в основной стойке, торможение «плугом».',
      theory: 'В РБ климат позволяет заниматься лыжами с декабря по февраль. Подбор: лыжа — до запястья вытянутой руки, палки — до подмышек.',
      media: { images: [{ title: 'Попеременный двухшажный ход', url: '#' }, { title: 'Подъём «ёлочкой»', url: '#' }], videos: [{ title: 'Торможение плугом для школьников', url: '#' }] }
    }
  ],
  '10-11': [
    { icon: '🏋️‍♂️', title: 'Гимнастика и атлетическая подготовка',
      practice: 'Акробатические соединения. Опорные прыжки через коня/козла, упражнения на перекладине и брусьях. Атлетическая гимнастика.',
      theory: 'На старших курсах акцент — на силовую выносливость и страховку партнёра. При работе с отягощениями: спина прямая, дыхание — выдох на усилии.',
      media: { images: [{ title: 'Схема: атлетическая гимнастика', url: '#' }], videos: [{ title: 'Акробатическое соединение 10–11 класс', url: '#' }] }
    },
    { icon: '🏃‍♂️', title: 'Лёгкая атлетика',
      practice: 'Спринт 100 м, бег 2000/3000 м. Эстафетный бег. Прыжки в высоту. Метание гранаты. Оценка уровня физподготовленности.',
      theory: 'В 10–11 классе вы учитесь оценивать собственный уровень УФП по нормативам. Важно анализировать результат в динамике (сентябрь → май).',
      media: { images: [{ title: 'Техника прыжка в высоту «фосбери-флоп»', url: '#' }], videos: [{ title: 'Эстафетный бег — передача палочки', url: '#' }] }
    },
    { icon: '🏐', title: 'Спортивные игры',
      practice: 'Углублённое изучение тактики нападения и защиты. Судейство учебных игр. Участие в соревнованиях.',
      theory: 'На этом этапе вы можете сами судить игры: знать жесты, правила замены, правила 3 секунд в баскетболе и 8 секунд в волейболе.',
      media: { images: [{ title: 'Позиции игроков в защите 5-1', url: '#' }], videos: [{ title: 'Судейство волейбола — правила', url: '#' }] }
    },
    { icon: '🎿', title: 'Лыжная подготовка / кросс',
      practice: 'Совершенствование двухшажного и конькового хода. Прохождение дистанции 3–5 км на время. Развитие выносливости.',
      theory: 'На старших курсах вы учитесь регулировать нагрузку по пульсу (зона 120–150 уд/мин для выносливости).',
      media: { images: [{ title: 'Пульсовые зоны', url: '#' }], videos: [{ title: 'Коньковый ход — техника', url: '#' }] }
    }
  ]
};

const UFP_DATA = {
  '5-9': {
    boys: [
      { test: 'Бег 30 м (сек)', '5': '5.4', '6': '5.2', '7': '5.0', '8': '4.8', '9': '4.6' },
      { test: 'Прыжок в длину с места (см)', '5': '160', '6': '170', '7': '180', '8': '190', '9': '200' },
      { test: 'Подтягивание (раз)', '5': '4', '6': '5', '7': '6', '8': '7', '9': '8' },
      { test: 'Бег 1000 м (мин.сек)', '5': '5.20', '6': '5.10', '7': '5.00', '8': '4.50', '9': '4.40' }
    ],
    girls: [
      { test: 'Бег 30 м (сек)', '5': '5.8', '6': '5.6', '7': '5.4', '8': '5.3', '9': '5.2' },
      { test: 'Прыжок в длину с места (см)', '5': '145', '6': '150', '7': '160', '8': '165', '9': '170' },
      { test: 'Поднимание туловища (за 1 мин)', '5': '30', '6': '35', '7': '38', '8': '40', '9': '42' },
      { test: 'Бег 1000 м (мин.сек)', '5': '6.10', '6': '6.00', '7': '5.50', '8': '5.40', '9': '5.30' }
    ]
  }
};

// ============================================================
// ОТРИСОВКА ТЕОРИИ
// ============================================================
const theoryContainer = document.getElementById('theoryContainer');
const gradeFilters = document.getElementById('gradeFilters');

function buildMediaBlock(media) {
  if (!media) return '';
  const images = media.images || [];
  const videos = media.videos || [];
  if (!images.length && !videos.length) return '';
  let html = '<h4>📎 Материалы для изучения:</h4><div class="media-grid">';
  images.forEach(img => {
    html += `<a href="${img.url}" target="_blank" class="media-card media-card--img">
        <div class="media-card__icon">🖼</div>
        <div class="media-card__title">${img.title}</div>
        <div class="media-card__tag">Инфографика</div>
      </a>`;
  });
  videos.forEach(vid => {
    html += `<a href="${vid.url}" target="_blank" class="media-card media-card--video">
        <div class="media-card__icon">▶</div>
        <div class="media-card__title">${vid.title}</div>
        <div class="media-card__tag">Видео</div>
      </a>`;
  });
  html += '</div>';
  return html;
}

function renderTheory(grade) {
  if (!theoryContainer) return;
  let html = '';
  const cards = THEORY_DATA[grade] || [];
  cards.forEach(card => {
    html += `<details class="theory-card">
        <summary>${card.icon} ${card.title}</summary>
        <div class="theory-content">
          <h4>📌 Что делать (практика):</h4>
          <p>${card.practice}</p>
          <h4>💡 Как это работает (теория):</h4>
          <p>${card.theory}</p>
          ${buildMediaBlock(card.media)}
        </div>
      </details>`;
  });
  if (UFP_DATA[grade]) {
    const ufp = UFP_DATA[grade];
    const years = Object.keys(ufp.boys[0]).filter(k => k !== 'test');
    const thYears = years.map(y => `<th>${y} кл</th>`).join('');
    const rowBoys = ufp.boys.map(row =>
      `<tr><td>${row.test}</td>${years.map(y => `<td>${row[y] || '—'}</td>`).join('')}</tr>`
    ).join('');
    const rowGirls = ufp.girls.map(row =>
      `<tr><td>${row.test}</td>${years.map(y => `<td>${row[y] || '—'}</td>`).join('')}</tr>`
    ).join('');
    html += `<details class="theory-card" style="border-left: 5px solid var(--accent);">
        <summary>📊 Нормативы (УФП) — Мальчики</summary>
        <div class="theory-content" style="overflow-x:auto;">
          <table class="ufp-table"><thead><tr><th>Упражнение</th>${thYears}</tr></thead><tbody>${rowBoys}</tbody></table>
        </div>
      </details>
      <details class="theory-card" style="border-left: 5px solid #f9a8d4;">
        <summary>📊 Нормативы (УФП) — Девочки</summary>
        <div class="theory-content" style="overflow-x:auto;">
          <table class="ufp-table"><thead><tr><th>Упражнение</th>${thYears}</tr></thead><tbody>${rowGirls}</tbody></table>
        </div>
      </details>`;
  }
  theoryContainer.innerHTML = html;
}

if (gradeFilters) {
  gradeFilters.addEventListener('click', (e) => {
    if (e.target.classList.contains('chip')) {
      gradeFilters.querySelectorAll('.chip').forEach(c => c.classList.remove('is-active'));
      e.target.classList.add('is-active');
      renderTheory(e.target.dataset.grade);
    }
  });
  renderTheory('1-4');
}

// ============================================================
// МЕТОДИЧЕСКАЯ КОПИЛКА ДЛЯ УЧИТЕЛЯ (Вариант B: плитки тем → карточка)
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
              <li><strong>Кувырок с помощью учителя.</strong></li>
            </ol>
          `,
          'Видео / картинки / схемы': `
            <h4>📎 Материалы</h4>
            <div class="media-grid">
              <a href="#" target="_blank" class="media-card media-card--img"><div class="media-card__icon">🖼</div><div class="media-card__title">Схема: фазы кувырка вперёд (вид сбоку)</div><div class="media-card__tag">Инфографика</div></a>
              <a href="#" target="_blank" class="media-card media-card--img"><div class="media-card__icon">🖼</div><div class="media-card__title">Плакат: группировка</div><div class="media-card__tag">Инфографика</div></a>
              <a href="#" target="_blank" class="media-card media-card--video"><div class="media-card__icon">▶</div><div class="media-card__title">Видео: техника кувырка вперёд (школа РБ)</div><div class="media-card__tag">Видео</div></a>
              <a href="#" target="_blank" class="media-card media-card--video"><div class="media-card__icon">▶</div><div class="media-card__title">Видео: 3 ошибки в кувырке</div><div class="media-card__tag">Видео</div></a>
            </div>
          `
        }
      },
      {
        id: 'gym-stoyka', title: 'Стойка на лопатках', icon: '🤸',
        content: {
          'Темы': `
            <h4>📖 Что такое стойка на лопатках</h4>
            <p>Стойка на лопатках («берёзка») — положение, при котором тело опирается на лопатки, ноги вытянуты вверх, руки поддерживают спину.</p>
            <h4>🎯 Зачем нужна</h4>
            <ul><li>Укрепляет мышцы спины и пресса.</li><li>Учит балансу и контролю над телом.</li><li>База для более сложных стоек.</li></ul>
          `,
          'Как выполнять': `
            <h4>Фазы выполнения</h4>
            <ol>
              <li><strong>Исходное положение:</strong> лёжа на спине, руки вдоль тела.</li>
              <li><strong>Подъём:</strong> согнуть ноги, подтянуть колени к груди, затем выпрямить вверх.</li>
              <li><strong>Опора:</strong> таз поднимается, лопатки на мате, руки подставляются под спину (локти ближе друг к другу).</li>
              <li><strong>Фиксация:</strong> тело вертикально, ноги прямые, носки натянуты. Удерживать 3–5 сек.</li>
              <li><strong>Выход:</strong> согнуть ноги, опустить таз.</li>
            </ol>
            <h4>Типичные ошибки</h4>
            <ul><li>Локти широко разведены.</li><li>Ноги согнуты.</li><li>Опора на шею — опасно!</li></ul>
          `,
          'Подводящие упражнения': `
            <ol>
              <li><strong>Поднимание прямых ног:</strong> лёжа на спине, поднять ноги до 90°. 5–6 раз.</li>
              <li><strong>«Берёзка» с согнутыми ногами:</strong> поднять таз, колени к груди, удержать 3 сек.</li>
              <li><strong>Работа рук:</strong> лёжа на спине, поставить локти под спину — почувствовать опору.</li>
              <li><strong>Удержание с помощью учителя.</strong></li>
            </ol>
          `,
          'Видео / картинки / схемы': `
            <div class="media-grid">
              <a href="#" target="_blank" class="media-card media-card--img"><div class="media-card__icon">🖼</div><div class="media-card__title">Схема: постановка рук и локтей в стойке</div><div class="media-card__tag">Инфографика</div></a>
              <a href="#" target="_blank" class="media-card media-card--video"><div class="media-card__icon">▶</div><div class="media-card__title">Видео: ошибки в стойке на лопатках</div><div class="media-card__tag">Видео</div></a>
            </div>
          `
        }
      },
      {
        id: 'gym-most', title: 'Мост', icon: '🌉',
        content: {
          'Темы': `
            <h4>📖 Что такое «мост»</h4>
            <p>«Мост» — положение, при котором тело прогибается назад с опорой на руки и ноги. Развивает гибкость позвоночника и плечевых суставов.</p>
            <h4>⚠️ Безопасность</h4>
            <ul><li>Только после разминки спины и плеч.</li><li>При боли в спине — не выполнять.</li><li>Страховка учителя на первых попытках.</li></ul>
          `,
          'Как выполнять': `
            <h4>Фазы выполнения</h4>
            <ol>
              <li><strong>Исходное положение:</strong> лёжа на спине, ноги согнуты, стопы на ширине плеч.</li>
              <li><strong>Постановка рук:</strong> ладони у плеч, пальцы направлены к ногам.</li>
              <li><strong>Подъём:</strong> одновременно разгибаем руки и ноги, таз идёт вверх.</li>
              <li><strong>Фиксация:</strong> тело образует дугу, руки и ноги прямые.</li>
              <li><strong>Выход:</strong> согнуть руки и ноги, опуститься на спину.</li>
            </ol>
          `,
          'Подводящие упражнения': `
            <ol>
              <li><strong>Прогибания лёжа на животе</strong> («лодочка»). 5–6 раз.</li>
              <li><strong>Подъём таза:</strong> лёжа на спине, ноги согнуты.</li>
              <li><strong>«Мост» с помощью учителя.</strong></li>
              <li><strong>«Мост» с опорой на скамейку.</strong></li>
            </ol>
          `,
          'Видео / картинки / схемы': `
            <div class="media-grid">
              <a href="#" target="_blank" class="media-card media-card--img"><div class="media-card__icon">🖼</div><div class="media-card__title">Схема: техника «моста» (вид сбоку)</div><div class="media-card__tag">Инфографика</div></a>
              <a href="#" target="_blank" class="media-card media-card--video"><div class="media-card__icon">▶</div><div class="media-card__title">Видео: как сделать «мост» с нуля</div><div class="media-card__tag">Видео</div></a>
            </div>
          `
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
            <h4>📖 Что такое бег на 30 метров</h4>
            <p>Спринтерская дистанция для 1–9 классов. Проверяет быстроту и технику старта. Норматив УФП для всех классов.</p>
            <h4>🎯 Зачем нужен</h4>
            <ul><li>Развивает быстроту и скорость реакции.</li><li>Учит правильному старту и работе рук.</li><li>База для дистанций 60, 100 м.</li></ul>
            <h4>⚠️ Безопасность</h4>
            <ul><li>Разминка голеностопа и коленей.</li><li>Проверить дорожку (нет ли ямок).</li><li>Обувь с фиксацией пятки.</li></ul>
          `,
          'Как выполнять': `
            <h4>Фазы бега</h4>
            <ol>
              <li><strong>Старт:</strong> низкий для 5–9 классов, высокий — для младших.</li>
              <li><strong>Стартовый разгон (10–15 м):</strong> наклон вперёд, частые шаги, активная работа рук.</li>
              <li><strong>Бег по дистанции:</strong> туловище выпрямляется, шаг широкий, дыхание ритмичное.</li>
              <li><strong>Финиш:</strong> не сбавлять темп, пересечь линию грудью.</li>
            </ol>
            <h4>Типичные ошибки</h4>
            <ul><li>Раннее выпрямление после старта.</li><li>Зажатые плечи.</li><li>Взгляд вниз.</li></ul>
          `,
          'Подводящие упражнения': `
            <ol>
              <li><strong>Семенящий бег:</strong> 3×20 м.</li>
              <li><strong>Бег с высоким подниманием бедра:</strong> 3×20 м.</li>
              <li><strong>Бег с захлёстом голени:</strong> 2×20 м.</li>
              <li><strong>Выбегание с высокого старта:</strong> 3–4 раза по 10–15 м.</li>
              <li><strong>Выбегание с низкого старта:</strong> 3–4 раза по 15–20 м.</li>
            </ol>
          `,
          'Видео / картинки / схемы': `
            <div class="media-grid">
              <a href="#" target="_blank" class="media-card media-card--img"><div class="media-card__icon">🖼</div><div class="media-card__title">Схема: фазы низкого старта</div><div class="media-card__tag">Инфографика</div></a>
              <a href="#" target="_blank" class="media-card media-card--video"><div class="media-card__icon">▶</div><div class="media-card__title">Видео: техника бега на 30 м</div><div class="media-card__tag">Видео</div></a>
              <a href="#" target="_blank" class="media-card media-card--video"><div class="media-card__icon">▶</div><div class="media-card__title">Видео: как правильно дышать в спринте</div><div class="media-card__tag">Видео</div></a>
            </div>
          `
        }
      },
      {
        id: 'ath-jump', title: 'Прыжок в длину с места', icon: '🦘',
        content: {
          'Темы': `
            <h4>📖 Что такое прыжок в длину с места</h4>
            <p>Прыжок с отталкиванием двумя ногами, обязательный норматив УФП. Развивает скоростно-силовые качества.</p>
          `,
          'Как выполнять': `
            <ol>
              <li><strong>Исходное положение:</strong> стоя у стартовой линии, ноги на ширине плеч.</li>
              <li><strong>Замах:</strong> руки отвести назад, полуприсед, наклон вперёд.</li>
              <li><strong>Толчок:</strong> резко разогнуть ноги, махнуть руками вперёд-вверх.</li>
              <li><strong>Полёт:</strong> ноги подтянуть к груди, руки вперёд.</li>
              <li><strong>Приземление:</strong> на пятки с перекатом на стопу.</li>
            </ol>
          `,
          'Подводящие упражнения': `
            <ol>
              <li>Прыжки на двух ногах на месте (10 раз).</li>
              <li>Многоскоки по 10 стоп.</li>
              <li>Прыжки через скакалку.</li>
              <li>Прыжок с акцентом на мах руками.</li>
            </ol>
          `,
          'Видео / картинки / схемы': `
            <div class="media-grid">
              <a href="#" target="_blank" class="media-card media-card--img"><div class="media-card__icon">🖼</div><div class="media-card__title">Схема: техника прыжка</div><div class="media-card__tag">Инфографика</div></a>
              <a href="#" target="_blank" class="media-card media-card--video"><div class="media-card__icon">▶</div><div class="media-card__title">Видео: 3 ошибки в прыжке с места</div><div class="media-card__tag">Видео</div></a>
            </div>
          `
        }
      },
      {
        id: 'ath-throw', title: 'Метание мяча', icon: '🎯',
        content: {
          'Темы': `
            <h4>📖 Что такое метание мяча</h4>
            <p>Броски малого мяча (150 г) с места и с разбега. Развивает силу рук, координацию и глазомер.</p>
            <h4>⚠️ Безопасность</h4>
            <ul><li>Метание — только в одну сторону сектора.</li><li>Команда «Стоп!» останавливает всех.</li><li>Никто не выходит в сектор до разрешения.</li></ul>
          `,
          'Как выполнять': `
            <ol>
              <li><strong>Хват мяча:</strong> указательный, средний, безымянный пальцы держат мяч, большой и мизинец поддерживают.</li>
              <li><strong>Замах:</strong> рука отводится назад за голову.</li>
              <li><strong>Перенос веса:</strong> с задней ноги на переднюю, корпус разворачивается.</li>
              <li><strong>Бросок:</strong> рука разгибается, мяч уходит под углом 40–45°.</li>
              <li><strong>Финиш:</strong> тело движется вперёд, но не выходит за линию.</li>
            </ol>
          `,
          'Подводящие упражнения': `
            <ol>
              <li>Броски набивного мяча (1–2 кг).</li>
              <li>Броски мяча в стену одной рукой.</li>
              <li>Имитация замаха без мяча.</li>
              <li>Метание с шага.</li>
            </ol>
          `,
          'Видео / картинки / схемы': `
            <div class="media-grid">
              <a href="#" target="_blank" class="media-card media-card--img"><div class="media-card__icon">🖼</div><div class="media-card__title">Схема: хват мяча и замах</div><div class="media-card__tag">Инфографика</div></a>
              <a href="#" target="_blank" class="media-card media-card--video"><div class="media-card__icon">▶</div><div class="media-card__title">Видео: техника метания мяча</div><div class="media-card__tag">Видео</div></a>
            </div>
          `
        }
      },
      {
        id: 'ath-longrun', title: 'Бег на 1000 м', icon: '💨',
        content: {
          'Темы': `
            <h4>📖 Что такое бег на 1000 м</h4>
            <p>Средняя дистанция, норматив УФП с 5 класса. Развивает выносливость.</p>
          `,
          'Как выполнять': `
            <ol>
              <li><strong>Старт:</strong> высокий, не тратить силы на рывок.</li>
              <li><strong>Раскладка:</strong> 200 м ровно → 400 м базовый → 400 м наращивание.</li>
              <li><strong>Дыхание:</strong> 2–3 шага вдох, 2–3 выдох.</li>
              <li><strong>Финиш:</strong> ускорение за 100–150 м.</li>
            </ol>
          `,
          'Подводящие упражнения': `
            <ol>
              <li>Кросс 500 м в лёгком темпе.</li>
              <li>Бег с переменной скоростью.</li>
              <li>Бег по пересечённой местности.</li>
            </ol>
          `,
          'Видео / картинки / схемы': `
            <div class="media-grid">
              <a href="#" target="_blank" class="media-card media-card--video"><div class="media-card__icon">▶</div><div class="media-card__title">Видео: как распределять силы на 1000 м</div><div class="media-card__tag">Видео</div></a>
            </div>
          `
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
          'Темы': `
            <h4>📖 Бросок одной рукой от плеча</h4>
            <p>Основной бросок в баскетболе. Выполняется с места или в движении. Развивает точность и координацию.</p>
          `,
          'Как выполнять': `
            <ol>
              <li><strong>Стойка:</strong> ноги на ширине плеч, колени согнуты, вес на передней части стопы.</li>
              <li><strong>Хват:</strong> мяч у плеча, локоть под мячом.</li>
              <li><strong>Замах:</strong> мяч поднимается над головой.</li>
              <li><strong>Бросок:</strong> разгибание руки и кисти (мяч уходит с указательного пальца).</li>
              <li><strong>Проводка:</strong> кисть остаётся в положении «прощание».</li>
            </ol>
          `,
          'Подводящие упражнения': `
            <ol>
              <li>Броски мяча вверх одной рукой (10 раз).</li>
              <li>Броски в стену с отметкой.</li>
              <li>Броски с 1 м от кольца.</li>
              <li>Броски с 3 м.</li>
            </ol>
          `,
          'Видео / картинки / схемы': `
            <div class="media-grid">
              <a href="#" target="_blank" class="media-card media-card--img"><div class="media-card__icon">🖼</div><div class="media-card__title">Схема: положение рук при броске</div><div class="media-card__tag">Инфографика</div></a>
              <a href="#" target="_blank" class="media-card media-card--video"><div class="media-card__icon">▶</div><div class="media-card__title">Видео: бросок одной рукой от плеча</div><div class="media-card__tag">Видео</div></a>
            </div>
          `
        }
      },
      {
        id: 'game-volley', title: 'Волейбол: верхняя передача', icon: '🏐',
        content: {
          'Темы': `
            <h4>📖 Что такое верхняя передача</h4>
            <p>Основной приём в волейболе — передача мяча двумя руками сверху.</p>
          `,
          'Как выполнять': `
            <ol>
              <li><strong>Стойка:</strong> ноги на ширине плеч, одна чуть впереди.</li>
              <li><strong>Положение рук:</strong> руки согнуты, кисти образуют «ковш» над головой.</li>
              <li><strong>Приём:</strong> мяч принимается на пальцы, амортизируем.</li>
              <li><strong>Передача:</strong> выпрямляем руки и ноги, мяч уходит вверх-вперёд.</li>
            </ol>
          `,
          'Подводящие упражнения': `
            <ol>
              <li>Передача мяча над собой (10 раз).</li>
              <li>Передача в паре с расстояния 2 м.</li>
              <li>Передача у стены.</li>
            </ol>
          `,
          'Видео / картинки / схемы': `
            <div class="media-grid">
              <a href="#" target="_blank" class="media-card media-card--img"><div class="media-card__icon">🖼</div><div class="media-card__title">Схема: положение кистей при передаче</div><div class="media-card__tag">Инфографика</div></a>
              <a href="#" target="_blank" class="media-card media-card--video"><div class="media-card__icon">▶</div><div class="media-card__title">Видео: верхняя передача мяча</div><div class="media-card__tag">Видео</div></a>
            </div>
          `
        }
      },
      {
        id: 'game-football', title: 'Футбол: ведение мяча', icon: '⚽',
        content: {
          'Темы': `
            <h4>📖 Ведение мяча в футболе</h4>
            <p>Перемещение с мячом при помощи серии касаний. Развивает координацию и контроль мяча.</p>
          `,
          'Как выполнять': `
            <ol>
              <li><strong>Стойка:</strong> ноги на ширине плеч, колени согнуты.</li>
              <li><strong>Касания:</strong> мяч толкается внутренней или внешней стороной стопы.</li>
              <li><strong>Взгляд:</strong> не на мяч, а перед собой.</li>
              <li><strong>Скорость:</strong> постепенно увеличивать.</li>
            </ol>
          `,
          'Подводящие упражнения': `
            <ol>
              <li>Ведение мяча на месте (правой/левой ногой).</li>
              <li>Ведение по прямой 10 м.</li>
              <li>Ведение «змейкой» между фишками.</li>
            </ol>
          `,
          'Видео / картинки / схемы': `
            <div class="media-grid">
              <a href="#" target="_blank" class="media-card media-card--video"><div class="media-card__icon">▶</div><div class="media-card__title">Видео: ведение мяча в футболе</div><div class="media-card__tag">Видео</div></a>
            </div>
          `
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
          'Темы': `
            <h4>📖 Что это такое</h4>
            <p>Основной классический ход на лыжах. Толчок палками и ногами происходит поочерёдно.</p>
            <h4>🎯 Зачем нужен</h4>
            <ul><li>База для всех остальных ходов.</li><li>Развивает выносливость и координацию.</li></ul>
          `,
          'Как выполнять': `
            <h4>Фазы</h4>
            <ol>
              <li><strong>Скольжение на одной лыже:</strong> вес перенесён на правую ногу.</li>
              <li><strong>Толчок левой ногой:</strong> одновременно толчок правой палкой.</li>
              <li><strong>Смена:</strong> вес переносится на левую ногу, толчок правой ногой и левой палкой.</li>
              <li><strong>Цикл повторяется.</strong></li>
            </ol>
          `,
          'Подводящие упражнения': `
            <ol>
              <li><strong>Ступающий шаг:</strong> без палок, без скольжения.</li>
              <li><strong>Скользящий шаг:</strong> без палок, с акцентом на скольжение.</li>
              <li><strong>«Самокат»:</strong> скольжение на одной лыже, отталкивание другой.</li>
              <li><strong>Ход с палками:</strong> полный цикл.</li>
            </ol>
          `,
          'Видео / картинки / схемы': `
            <div class="media-grid">
              <a href="#" target="_blank" class="media-card media-card--img"><div class="media-card__icon">🖼</div><div class="media-card__title">Схема: попеременный двухшажный ход</div><div class="media-card__tag">Инфографика</div></a>
              <a href="#" target="_blank" class="media-card media-card--video"><div class="media-card__icon">▶</div><div class="media-card__title">Видео: техника попеременного хода</div><div class="media-card__tag">Видео</div></a>
            </div>
          `
        }
      },
      {
        id: 'ski-uphill', title: 'Подъём «ёлочкой»', icon: '⛰️',
        content: {
          'Темы': `
            <h4>📖 Что такое подъём «ёлочкой»</h4>
            <p>Способ подъёма в гору на лыжах, при котором лыжи ставятся носками врозь, а пятки вместе.</p>
          `,
          'Как выполнять': `
            <ol>
              <li><strong>Исходное положение:</strong> на склоне, лыжи параллельно.</li>
              <li><strong>Постановка:</strong> развернуть носки в стороны, пятки вместе.</li>
              <li><strong>Подъём:</strong> поочерёдно переставлять лыжи, опираясь на палки.</li>
              <li><strong>Контроль:</strong> следить за равновесием, не спешить.</li>
            </ol>
          `,
          'Подводящие упражнения': `
            <ol>
              <li>Ходьба «ёлочкой» на ровном месте.</li>
              <li>Подъём на небольшой склон.</li>
              <li>Подъём с палками и без.</li>
            </ol>
          `,
          'Видео / картинки / схемы': `
            <div class="media-grid">
              <a href="#" target="_blank" class="media-card media-card--img"><div class="media-card__icon">🖼</div><div class="media-card__title">Схема: постановка лыж при подъёме «ёлочкой»</div><div class="media-card__tag">Инфографика</div></a>
              <a href="#" target="_blank" class="media-card media-card--video"><div class="media-card__icon">▶</div><div class="media-card__title">Видео: подъём «ёлочкой»</div><div class="media-card__tag">Видео</div></a>
            </div>
          `
        }
      },
      {
        id: 'ski-brake', title: 'Торможение «плугом»', icon: '🛑',
        content: {
          'Темы': `
            <h4>📖 Что такое торможение «плугом»</h4>
            <p>Способ торможения на спуске: носки лыж сводятся вместе, пятки разводятся в стороны.</p>
          `,
          'Как выполнять': `
            <ol>
              <li><strong>Спуск:</strong> в основной стойке, скорость умеренная.</li>
              <li><strong>Начало торможения:</strong> свести носки лыж, развести пятки.</li>
              <li><strong>Контроль:</strong> чем шире «плуг» — тем сильнее торможение.</li>
              <li><strong>Выход:</strong> свести лыжи обратно параллельно.</li>
            </ol>
          `,
          'Подводящие упражнения': `
            <ol>
              <li>Постановка «плуга» на ровном месте.</li>
              <li>Спуск с небольшим торможением.</li>
              <li>Спуск с полным торможением до остановки.</li>
            </ol>
          `,
          'Видео / картинки / схемы': `
            <div class="media-grid">
              <a href="#" target="_blank" class="media-card media-card--video"><div class="media-card__icon">▶</div><div class="media-card__title">Видео: торможение «плугом»</div><div class="media-card__tag">Видео</div></a>
            </div>
          `
        }
      }
    ]
  }
};

const methodContainer = document.getElementById('methodContainer');
const methodFilters = document.getElementById('methodFilters');
let currentMethodBlock = 'gym';

// --- Отрисовка плиток тем (Вариант B) ---
function renderMethodTiles(block) {
  if (!methodContainer) return;
  currentMethodBlock = block;
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
    tile.addEventListener('click', () => {
      renderMethodDetail(block, tile.dataset.topic);
    });
  });
}

// --- Отрисовка карточки темы с 4 подвкладками ---
function renderMethodDetail(block, topicId) {
  if (!methodContainer) return;
  const blockData = METHOD_DATA[block];
  if (!blockData) return;
  const topic = blockData.topics.find(t => t.id === topicId);
  if (!topic) return;

  const tabs = ['Темы', 'Как выполнять', 'Подводящие упражнения', 'Видео / картинки / схемы'];
  const tabEmoji = {
    'Темы': '📖',
    'Как выполнять': '📝',
    'Подводящие упражнения': '🔄',
    'Видео / картинки / схемы': '🎬'
  };

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

  // Кнопка «Назад»
  document.getElementById('methodBackBtn').addEventListener('click', () => {
    renderMethodTiles(block);
  });

  // Переключение подвкладок
  document.getElementById('methodTabs').addEventListener('click', (e) => {
    const btn = e.target.closest('.method-tab');
    if (!btn) return;
    const tab = btn.dataset.tab;
    document.querySelectorAll('.method-tab').forEach(b => b.classList.remove('is-active'));
    btn.classList.add('is-active');
    const contentEl = document.getElementById('methodTabContent');
    contentEl.innerHTML = topic.content[tab] || '<p>Материал скоро появится.</p>';
  });
}

// --- Обработчик фильтров блоков ---
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
// КВИЗ (без изменений)
// ============================================================
const FULL_QUIZ_QUESTIONS = [
  { q: 'Кто из уроженцев Жлобина стал олимпийским чемпионом 1960 года по метанию молота?', options: ['Василий Руденков', 'Владимир Ловецкий', 'Николай Киров'], correct: 0 },
  { q: 'В каком году Артём Левшунов был выбран под 2-м номером на драфте НХЛ?', options: ['2022', '2023', '2024'], correct: 2 },
  { q: 'Какой вид спорта прославил Шоту Нарманию?', options: ['Греко-римская борьба', 'Лёгкая атлетика', 'Хоккей'], correct: 0 },
  { q: 'Сколько метров в длину имеют дорожки в плавательном бассейне Жлобина?', options: ['25 метров', '50 метров', '100 метров'], correct: 1 },
  { q: 'Какое крупное событие принимал Жлобин в 2023 году?', options: ['Олимпийские игры', 'II Игры стран СНГ', 'Чемпионат мира по футболу'], correct: 1 },
  { q: 'Что является основной формой физического воспитания в школе?', options: ['Урок физической культуры', 'Утренняя зарядка', 'Спортивная секция'], correct: 0 },
  { q: 'Какой из перечисленных видов спорта относится к циклическим?', options: ['Лёгкая атлетика (бег)', 'Прыжки в длину', 'Метание молота'], correct: 0 },
  { q: 'Как называется способ передвижения на лыжах, где толчок происходит поочерёдно каждой ногой?', options: ['Попеременный ход', 'Одновременный ход', 'Коньковый ход'], correct: 0 },
  { q: 'Какое упражнение относится к подводящим для кувырка вперёд?', options: ['Группировка', 'Стойка на руках', 'Подтягивание'], correct: 0 },
  { q: 'Сколько раз в неделю проходят уроки физической культуры в 5–9 классах по новой программе?', options: ['1 раз', '2 раза', '3 раза'], correct: 2 }
];

let activeQuestions = [];

function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function renderQuiz() {
  const box = document.getElementById('quizBox');
  if (!box) return;
  activeQuestions = shuffleArray(FULL_QUIZ_QUESTIONS).slice(0, 5);
  box.innerHTML = activeQuestions.map((q, i) => `
    <div class="quiz-question">
      <h4>${i + 1}. ${q.q}</h4>
      ${q.options.map((opt, j) => `
        <label class="quiz-option">
          <input type="radio" name="q${i}" value="${j}">
          ${opt}
        </label>
      `).join('')}
    </div>
  `).join('');
}

const quizSubmit = document.getElementById('quizSubmit');
if (quizSubmit) {
  quizSubmit.addEventListener('click', () => {
    let score = 0;
    activeQuestions.forEach((q, i) => {
      const selected = document.querySelector(`input[name="q${i}"]:checked`);
      document.querySelectorAll(`input[name="q${i}"]`).forEach(input => {
        const label = input.parentElement;
        label.classList.remove('correct', 'incorrect');
        if (Number(input.value) === q.correct) label.classList.add('correct');
      });
      if (selected && Number(selected.value) === q.correct) {
        score++;
      } else if (selected) {
        selected.parentElement.classList.add('incorrect');
      }
    });
    const resultBox = document.getElementById('quizResult');
    if (score === activeQuestions.length) {
      resultBox.innerHTML = `<span style="color:#22c55e; font-size:1.2rem;">🎉 Отлично! Вы ответили на все вопросы верно!</span><br><br>Секретная метка активирована на карте. Найдите её!`;
      window.isSecretUnlocked = true;
      applyFilters();
    } else {
      resultBox.innerHTML = `<span style="color:#ef4444; font-size:1.2rem;">Вы ответили верно на ${score} из ${activeQuestions.length}. Попробуйте ещё раз!</span>`;
    }
  });
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

// ============================================================
// ИНИЦИАЛИЗАЦИЯ
// ============================================================
renderQuiz();
applyFilters();
