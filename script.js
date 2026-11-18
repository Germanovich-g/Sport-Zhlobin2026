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
          { title: 'Волейбольная площадка 9×18 м, зоны 1–6', url: '#' },
          { title: 'Жесты судьи в баскетболе (фол в нападении)', url: '#' }
        ],
        videos: [
          { title: 'Жесты арбитра в волейболе (полный разбор)', url: '#' },
          { title: 'Бросок в кольцо одной рукой от плеча', url: '#' },
          { title: 'Правила мини-футбола для школьников', url: '#' }
        ]
      }
    },
    {
      icon: '🎿',
      title: 'Лыжная подготовка',
      practice: 'Попеременный двухшажный ход, одновременный бесшажный ход. Подъёмы «ёлочкой» и «лесенкой», спуск в основной стойке, торможение «плугом».',
      theory: 'В РБ климат позволяет заниматься лыжами с декабря по февраль. Подбор: лыжа — до запястья вытянутой руки, палки — до подмышек. Смазка — по погоде: при морозе −10 °C мазь холодная, при −1 °C — тёплая.',
      media: {
        images: [
          { title: 'Попеременный двухшажный ход', url: '#' },
          { title: 'Подъём «ёлочкой»', url: '#' }
        ],
        videos: [
          { title: 'Торможение плугом для школьников', url: '#' }
        ]
      }
    }
  ],

  '10-11': [
    {
      icon: '🏋️‍♂️',
      title: 'Гимнастика и атлетическая подготовка',
      practice: 'Акробатические соединения (кувырок — стойка — кувырок). Опорные прыжки через коня/козла, упражнения на перекладине и брусьях. Атлетическая гимнастика (работа с отягощениями).',
      theory: 'На старших курсах акцент — на силовую выносливость и страховку партнёра. При работе с отягощениями: спина прямая, дыхание — выдох на усилии.',
      media: {
        images: [
          { title: 'Схема: атлетическая гимнастика с гантелями', url: '#' }
        ],
        videos: [
          { title: 'Акробатическое соединение 10–11 класс', url: '#' }
        ]
      }
    },
    {
      icon: '🏃‍♂️',
      title: 'Лёгкая атлетика',
      practice: 'Спринт 100 м, бег 2000/3000 м. Эстафетный бег. Прыжки в высоту («перешагивание», «фосбери-флоп»). Метание гранаты. Оценка уровня физподготовленности.',
      theory: 'В 10–11 классе вы учитесь оценивать собственный уровень УФП по нормативам. Важно не только показать результат, но и проанализировать его в динамике (сентябрь → май).',
      media: {
        images: [
          { title: 'Техника прыжка в высоту «фосбери-флоп»', url: '#' }
        ],
        videos: [
          { title: 'Эстафетный бег — передача палочки', url: '#' }
        ]
      }
    },
    {
      icon: '🏐',
      title: 'Спортивные игры',
      practice: 'Углублённое изучение тактики нападения и защиты (волейбол, баскетбол). Судейство учебных игр. Участие в соревнованиях.',
      theory: 'На этом этапе вы можете сами судить игры: знать жесты, правила замены, правила 3 секунд в баскетболе и 8 секунд в волейболе.',
      media: {
        images: [
          { title: 'Позиции игроков в защите 5-1', url: '#' }
        ],
        videos: [
          { title: 'Судейство волейбола — правила', url: '#' }
        ]
      }
    },
    {
      icon: '🎿',
      title: 'Лыжная подготовка / кросс',
      practice: 'Совершенствование двухшажного и конькового хода. Прохождение дистанции 3–5 км на время. Развитие выносливости.',
      theory: 'На старших курсах вы учитесь регулировать нагрузку по пульсу (зона 120–150 уд/мин для выносливости). Одежда — по погоде, обязательно шапка и перчатки.',
      media: {
        images: [
          { title: 'Пульсовые зоны', url: '#' }
        ],
        videos: [
          { title: 'Коньковый ход — техника', url: '#' }
        ]
      }
    }
  ]
};

// ============================================================
// НОРМАТИВЫ УФП (шаблон, точные цифры из Приложения 1)
// ============================================================
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
// ОТРИСОВКА ТЕОРИИ (с медиа-блоком)
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
    html += `
      <a href="${img.url}" target="_blank" class="media-card media-card--img">
        <div class="media-card__icon">🖼</div>
        <div class="media-card__title">${img.title}</div>
        <div class="media-card__tag">Инфографика</div>
      </a>
    `;
  });

  videos.forEach(vid => {
    html += `
      <a href="${vid.url}" target="_blank" class="media-card media-card--video">
        <div class="media-card__icon">▶</div>
        <div class="media-card__title">${vid.title}</div>
        <div class="media-card__tag">Видео</div>
      </a>
    `;
  });

  html += '</div>';
  return html;
}

function renderTheory(grade) {
  if (!theoryContainer) return;

  let html = '';
  const cards = THEORY_DATA[grade] || [];
  cards.forEach(card => {
    html += `
      <details class="theory-card">
        <summary>${card.icon} ${card.title}</summary>
        <div class="theory-content">
          <h4>📌 Что делать (практика):</h4>
          <p>${card.practice}</p>
          <h4>💡 Как это работает (теория):</h4>
          <p>${card.theory}</p>
          ${buildMediaBlock(card.media)}
        </div>
      </details>
    `;
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

    html += `
      <details class="theory-card" style="border-left: 5px solid var(--accent);">
        <summary>📊 Нормативы (УФП) — Мальчики</summary>
        <div class="theory-content" style="overflow-x:auto;">
          <table class="ufp-table">
            <thead><tr><th>Упражнение</th>${thYears}</tr></thead>
            <tbody>${rowBoys}</tbody>
          </table>
        </div>
      </details>
      <details class="theory-card" style="border-left: 5px solid #f9a8d4;">
        <summary>📊 Нормативы (УФП) — Девочки</summary>
        <div class="theory-content" style="overflow-x:auto;">
          <table class="ufp-table">
            <thead><tr><th>Упражнение</th>${thYears}</tr></thead>
            <tbody>${rowGirls}</tbody>
          </table>
        </div>
      </details>
    `;
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
// МЕТОДИЧЕСКАЯ КОПИЛКА ДЛЯ УЧИТЕЛЯ (с медиа-блоком)
// ============================================================
const METHOD_DATA = {
  gym: [
    {
      icon: '📋',
      title: 'Поурочное планирование',
      content: `
        <p><strong>5–9 классы:</strong> на раздел «Гимнастика» отводится ~18–20 часов в год. Структура: строевые (2 ч) → акробатика (8 ч) → снаряды (6 ч) → контрольный урок (2–4 ч).</p>
        <p><strong>10–11 классы:</strong> 12–14 часов. Акцент на связки и атлетическую гимнастику.</p>
        <p>Типовая структура урока: разминка (10–12 мин) → основная часть (25–30 мин) → заключительная (3–5 мин).</p>
      `,
      media: {
        images: [
          { title: 'Схема: расположение снарядов в зале', url: '#' }
        ],
        videos: [
          { title: 'Разминка перед гимнастикой (для учителя)', url: '#' }
        ]
      }
    },
    {
      icon: '🛡️',
      title: 'Техника безопасности',
      content: `
        <ul>
          <li>Проверка матов, снарядов и креплений — <strong>до</strong> урока, а не во время.</li>
          <li>Инструктаж по страховке — перед первым занятием на снарядах (журнал ТБ).</li>
          <li>Мат должен выступать на 0,5 м с каждой стороны снаряда.</li>
          <li>Исключить соскоки с высоты без мата, упражнения без разминки.</li>
        </ul>
      `,
      media: {
        images: [
          { title: 'Плакат: страховка и самостраховка', url: '#' }
        ],
        videos: [
          { title: 'Ошибки страховки на перекладине', url: '#' }
        ]
      }
    },
    {
      icon: '📊',
      title: 'Контроль и оценка',
      content: `
        <p>Согласно программе, оценка складывается из трёх компонентов:</p>
        <ul>
          <li><strong>Техника выполнения</strong> (наблюдение по критериям).</li>
          <li><strong>Динамика УФП</strong> (сравнение с личным результатом в сентябре).</li>
          <li><strong>Теоретические знания</strong> (устный опрос, тест).</li>
        </ul>
      `,
      media: {
        images: [
          { title: 'Чек-лист оценки техники кувырка', url: '#' }
        ],
        videos: []
      }
    }
  ],
  athletics: [
    {
      icon: '📋',
      title: 'Поурочное планирование',
      content: `
        <p><strong>5–9 классы:</strong> 24–26 часов в год. Осенний блок — спринт, метание, прыжки; весенний — кросс, эстафеты.</p>
        <p><strong>10–11 классы:</strong> 20–22 часа. Акцент на выносливость и оценку УФП.</p>
        <p>Спринт на 30/60 м — 4–5 уроков, метание гранаты — 4 урока, прыжки в длину — 5–6 уроков.</p>
      `,
      media: {
        images: [
          { title: 'Годовой план-график: лёгкая атлетика', url: '#' }
        ],
        videos: [
          { title: 'Организация урока на стадионе', url: '#' }
        ]
      }
    },
    {
      icon: '🛡️',
      title: 'Техника безопасности',
      content: `
        <ul>
          <li><strong>Метание:</strong> сектор метания — только в одну сторону, команда «Стоп!» останавливает всех.</li>
          <li><strong>Бег:</strong> разминка голеностопа перед спринтом, проверка дорожки на ямки.</li>
          <li><strong>Прыжки:</strong> проверка песка в яме (взрыхлить, убрать камни), прыжок — в носках, не на пятках.</li>
        </ul>
      `,
      media: {
        images: [
          { title: 'Схема сектора для метания', url: '#' }
        ],
        videos: [
          { title: 'Инструктаж по ТБ на уроках лёгкой атлетики', url: '#' }
        ]
      }
    },
    {
      icon: '📊',
      title: 'Контроль и оценка',
      content: `
        <p>Нормативы УФП: бег 30 м, 60 м, 1000 м, прыжок в длину с места. Сравнивайте не с «средним по классу», а с личным приростом.</p>
        <p>Техника оценивается по чек-листу: положение рук, работа ног, дыхание.</p>
      `,
      media: {
        images: [
          { title: 'Таблица нормативов: 5–9 класс', url: '#' }
        ],
        videos: []
      }
    }
  ],
  games: [
    {
      icon: '📋',
      title: 'Поурочное планирование',
      content: `
        <p><strong>5–9 классы:</strong> не менее 2 игр на выбор (баскетбол + волейбол — оптимальная пара). ~16 часов на каждую игру.</p>
        <p><strong>10–11 классы:</strong> 12–14 часов на углубление тактики и судейство.</p>
        <p>Структура модуля: перемещения → передачи → ведение → броски/подачи → тактика → игра.</p>
      `,
      media: {
        images: [
          { title: 'План-график: баскетбол 5–9 класс', url: '#' }
        ],
        videos: [
          { title: 'Структура урока по спортивным играм', url: '#' }
        ]
      }
    },
    {
      icon: '🛡️',
      title: 'Техника безопасности',
      content: `
        <ul>
          <li>Проверка покрытия (нет ли влаги, мусора).</li>
          <li>Снятие колец/часов/браслетов перед игрой.</li>
          <li>Контроль контакта: в баскетболе — правила фола; в волейболе — касание сетки запрещено.</li>
        </ul>
      `,
      media: {
        images: [
          { title: 'Памятка: что снять перед игрой', url: '#' }
        ],
        videos: [
          { title: 'ТБ на уроках баскетбола', url: '#' }
        ]
      }
    },
    {
      icon: '📊',
      title: 'Контроль и оценка',
      content: `
        <p>Оценка складывается из техники (передача, ведение, бросок) и понимания тактики (выбор позиции).</p>
        <p>Давайте учащимся роль судьи — это отличный инструмент для закрепления правил.</p>
      `,
      media: {
        images: [
          { title: 'Критерии оценки: баскетбол 7 класс', url: '#' }
        ],
        videos: [
          { title: 'Как оценивать игру в волейболе', url: '#' }
        ]
      }
    }
  ],
  ski: [
    {
      icon: '📋',
      title: 'Поурочное планирование',
      content: `
        <p><strong>5–9 классы:</strong> 12–16 часов (при наличии снега). Температурный режим — не ниже −15 °C для младших, −18 °C для старших.</p>
        <p><strong>10–11 классы:</strong> 10–12 часов. Акцент на коньковый ход и дистанцию 3–5 км.</p>
        <p>Порядок обучения: скользящий шаг → попеременный ход → подъёмы → спуски → торможение.</p>
      `,
      media: {
        images: [
          { title: 'План-график: лыжная подготовка 5–9 класс', url: '#' }
        ],
        videos: [
          { title: 'Как организовать лыжный урок', url: '#' }
        ]
      }
    },
    {
      icon: '🛡️',
      title: 'Техника безопасности',
      content: `
        <ul>
          <li>Проверка креплений и обуви каждого ученика перед выходом.</li>
          <li>Дистанция между лыжниками — не менее 3 м.</li>
          <li>При спуске — интервал 10 м, обгон запрещён.</li>
          <li>Отмена занятия при сильном ветре или гололёде.</li>
        </ul>
      `,
      media: {
        images: [
          { title: 'Температурный режим занятий на лыжах', url: '#' }
        ],
        videos: [
          { title: 'Инструктаж по ТБ на лыжах', url: '#' }
        ]
      }
    },
    {
      icon: '📊',
      title: 'Контроль и оценка',
      content: `
        <p>Основной критерий — техника хода и умение тормозить. Время на дистанции — вторично (учитывайте группу здоровья).</p>
        <p>Домашнее задание: комплекс ОФП и имитация лыжных ходов в зале.</p>
      `,
      media: {
        images: [
          { title: 'Критерии оценки: лыжная подготовка', url: '#' }
        ],
        videos: []
      }
    }
  ]
};

const methodContainer = document.getElementById('methodContainer');
const methodFilters = document.getElementById('methodFilters');

function renderMethod(block) {
  if (!methodContainer) return;
  const cards = METHOD_DATA[block] || [];
  methodContainer.innerHTML = cards.map(card => `
    <details class="theory-card" style="border-left: 5px solid var(--accent);">
      <summary>${card.icon} ${card.title}</summary>
      <div class="theory-content">
        ${card.content}
        ${buildMediaBlock(card.media)}
      </div>
    </details>
  `).join('');
}

if (methodFilters) {
  methodFilters.addEventListener('click', (e) => {
    if (e.target.classList.contains('chip')) {
      methodFilters.querySelectorAll('.chip').forEach(c => c.classList.remove('is-active'));
      e.target.classList.add('is-active');
      renderMethod(e.target.dataset.block);
    }
  });
  renderMethod('gym');
}

// ============================================================
// КВИЗ
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
