// ============================================================
// НАВИГАЦИЯ
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
// КАРТА
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
// МЕТОДИЧКА (УЧИТЕЛЮ)
// ============================================================
const METHOD_DATA = {
  gym: { icon: '🤸', title: 'Гимнастика', topics: [ { id: 'gym-kulok', title: 'Кувырок вперёд', icon: '🔄', content: { 'Темы': `<p>Базовое акробатическое упражнение.</p>`, 'Как выполнять': `<ol><li>Упор присев.</li><li>Толчок.</li><li>Перекат.</li></ol>`, 'Подводящие упражнения': `<ul><li>Группировка.</li></ul>`, 'Видео / картинки / схемы': `<p class="student-video-note">Скоро.</p>` } } ] },
  athletics: { icon: '🏃', title: 'Лёгкая атлетика', topics: [ { id: 'ath-run30', title: 'Бег 30 метров', icon: '🏃', content: { 'Темы': `<p>Спринт.</p>`, 'Как выполнять': `<ol><li>Старт.</li><li>Финиш.</li></ol>`, 'Подводящие упражнения': `<ul><li>Бег с высоким подниманием бедра.</li></ul>`, 'Видео / картинки / схемы': `<p class="student-video-note">Скоро.</p>` } } ] },
  games: { icon: '🏐', title: 'Спорт. игры', topics: [ { id: 'game-basket', title: 'Баскетбол', icon: '🏀', content: { 'Темы': `<p>Бросок.</p>`, 'Как выполнять': `<ol><li>Стойка.</li><li>Бросок.</li></ol>`, 'Подводящие упражнения': `<ul><li>Броски в стену.</li></ul>`, 'Видео / картинки / схемы': `<p class="student-video-note">Скоро.</p>` } } ] },
  ski: { icon: '🎿', title: 'Лыжи', topics: [ { id: 'ski-classic', title: 'Классический ход', icon: '🎿', content: { 'Темы': `<p>Двухшажный ход.</p>`, 'Как выполнять': `<ol><li>Скольжение.</li><li>Толчок.</li></ol>`, 'Подводящие упражнения': `<ul><li>Ступающий шаг.</li></ul>`, 'Видео / картинки / схемы': `<p class="student-video-note">Скоро.</p>` } } ] }
};

const methodContainer = document.getElementById('methodContainer');
const methodFilters = document.getElementById('methodFilters');

function renderMethodTiles(block) {
  if (!methodContainer) return;
  const blockData = METHOD_DATA[block];
  methodContainer.innerHTML = `<div class="method-tiles">${blockData.topics.map(topic => `
    <div class="method-tile" data-topic="${topic.id}"><div class="method-tile__icon">${topic.icon}</div><div class="method-tile__title">${topic.title}</div><div class="method-tile__count">4 подвкладки</div></div>
  `).join('')}</div>`;
  methodContainer.querySelectorAll('.method-tile').forEach(tile => tile.addEventListener('click', () => renderMethodDetail(block, tile.dataset.topic)));
}

function renderMethodDetail(block, topicId) {
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
// УЧАЩИМСЯ (1-4 классы) - ПОЛНЫЙ КОНТЕНТ
// ============================================================
const STUDENT_DATA = {
  '1-4': {
    topics: [
      {
        id: 'st-ath', title: 'Лёгкая атлетика', icon: '🏃',
        subtopics: [
          { id: 'ath-start', title: 'Высокий и низкий старт', content: { 'Теория': `<p>Старт — это начало бега. Высокий старт используется для средних дистанций, низкий — для спринта.</p>`, 'Как выполнять': `<ol><li><strong>Высокий старт:</strong> толчковая нога у линии, корпус наклонен вперед.</li><li><strong>Низкий старт:</strong> руки на линии, колено сзади стоящей ноги на земле.</li><li><strong>Команда «Марш!»:</strong> активное отталкивание.</li></ol>`, 'Ошибки': `<ul><li>Раннее выпрямление корпуса.</li><li>Задержка старта.</li></ul>`, 'Видео / схемы': `<p>Скоро.</p>` } },
          { id: 'ath-run30', title: 'Бег на 30 метров', content: { 'Теория': `<p>Спринтерская дистанция для проверки скоростных качеств.</p>`, 'Как выполнять': `<p>Старт, разгон (10-15 м), бег по дистанции, финиширование.</p>`, 'Ошибки': `<ul><li>Взгляд вниз.</li><li>Зажатые плечи.</li></ul>`, 'Видео / схемы': `<p>Скоро.</p>` } },
          { id: 'ath-shuttle', title: 'Челночный бег 4х9 м', content: { 'Теория': `<p>Бег с резкой сменой направления.</p>`, 'Как выполнять': `<p>Пробежать 9 метров, коснуться линии, развернуться и бежать обратно (4 отрезка).</p>`, 'Ошибки': `<ul><li>Потеря равновесия.</li><li>Нет касания линии.</li></ul>`, 'Видео / схемы': `<p>Скоро.</p>` } },
          { id: 'ath-finish', title: 'Финиширование', content: { 'Теория': `<p>Пересечение линии финиша.</p>`, 'Как выполнять': `<p>Способы: «пробегание», «бросок грудью», «бросок плечом».</p>`, 'Ошибки': `<ul><li>Прыжок на линию.</li><li>Преждевременный наклон.</li></ul>`, 'Видео / схемы': `<p>Скоро.</p>` } },
          { id: 'ath-jump', title: 'Прыжки', content: { 'Теория': `<p>Прыжки в длину с места и с разбега, в высоту, многоскоки.</p>`, 'Как выполнять': `<p>Прыжок в длину с места: замах, толчок, приземление на пятки.</p>`, 'Ошибки': `<ul><li>Заступ за линию.</li><li>Падение назад.</li></ul>`, 'Видео / схемы': `<p>Скоро.</p>` } },
          { id: 'ath-throw', title: 'Метание', content: { 'Теория': `<p>Метание теннисного мяча в цель и на дальность, метание набивного мяча.</p>`, 'Как выполнять': `<p>Хват, замах, бросок под углом 40-45 градусов.</p>`, 'Ошибки': `<ul><li>Бросок без поворота корпуса.</li></ul>`, 'Видео / схемы': `<p>Скоро.</p>` } }
        ]
      },
      {
        id: 'st-gym', title: 'Гимнастика', icon: '🤸',
        subtopics: [
          { id: 'gym-stroy', title: 'Строевые упражнения', content: { 'Теория': `<p>Команды, построения, перестроения.</p>`, 'Как выполнять': `<p>Повороты переступанием, расчет на первый-второй.</p>`, 'Ошибки': `<ul><li>Нечеткое выполнение команд.</li></ul>`, 'Видео / схемы': `<p>Скоро.</p>` } },
          { id: 'gym-acro', title: 'Акробатика', content: { 'Теория': `<p>Группировка, кувырки, стойки.</p>`, 'Как выполнять': `<p>Кувырок: упор присев, толчок, перекат через затылок.</p>`, 'Ошибки': `<ul><li>Опора на голову.</li></ul>`, 'Видео / схемы': `<p>Скоро.</p>` } },
          { id: 'gym-visy', title: 'Висы и лазанье', content: { 'Теория': `<p>Вис на перекладине, лазанье по стенке.</p>`, 'Как выполнять': `<p>Повиснуть, крепко обхватив перекладину.</p>`, 'Ошибки': `<ul><li>Резкие рывки.</li></ul>`, 'Видео / схемы': `<p>Скоро.</p>` } },
          { id: 'gym-ravn', title: 'Равновесие', content: { 'Теория': `<p>Ходьба по скамейке, повороты.</p>`, 'Как выполнять': `<p>Идти по скамейке, смотреть вперед.</p>`, 'Ошибки': `<ul><li>Взгляд вниз.</li></ul>`, 'Видео / схемы': `<p>Скоро.</p>` } }
        ]
      },
      {
        id: 'st-ski', title: 'Лыжи', icon: '🎿',
        subtopics: [
          { id: 'ski-step', title: 'Ступающий и скользящий шаг', content: { 'Теория': `<p>Базовые способы передвижения.</p>`, 'Как выполнять': `<p>Ступающий: поднимать носки. Скользящий: отталкиваться.</p>`, 'Ошибки': `<ul><li>Волок лыж.</li></ul>`, 'Видео / схемы': `<p>Скоро.</p>` } },
          { id: 'ski-move', title: 'Ходы и повороты', content: { 'Теория': `<p>Попеременный, одновременный ходы. Спуски и подъемы.</p>`, 'Как выполнять': `<p>Повороты переступанием.</p>`, 'Ошибки': `<ul><li>Толчок одноименными рукой и ногой.</li></ul>`, 'Видео / схемы': `<p>Скоро.</p>` } }
        ]
      },
      {
        id: 'st-football', title: 'Футбол', icon: '⚽',
        subtopics: [
          { id: 'foot-kick', title: 'Удары по мячу', content: { 'Теория': `<p>Постановка опорной ноги. Удары серединой подъема, внутренней частью стопы, носком. Жонглирование.</p>`, 'Как выполнять': `<p>Опорная нога рядом с мячом. Замах. Удар нужной частью стопы.</p>`, 'Ошибки': `<ul><li>Удар носком мимо цели.</li></ul>`, 'Видео / схемы': `<p>Скоро.</p>` } },
          { id: 'foot-stop', title: 'Остановка мяча', content: { 'Теория': `<p>Остановка подошвой, внутренней частью стопы, летящего мяча.</p>`, 'Как выполнять': `<p>Накрыть мяч подошвой.</p>`, 'Ошибки': `<ul><li>Мяч отскакивает далеко.</li></ul>`, 'Видео / схемы': `<p>Скоро.</p>` } },
          { id: 'foot-dribble', title: 'Ведение мяча', content: { 'Теория': `<p>Ведение по прямой, «змейкой», «восьмеркой». Ведение двух мячей.</p>`, 'Как выполнять': `<p>Легкие толчки внутренней частью стопы.</p>`, 'Ошибки': `<ul><li>Слишком сильный толчок.</li></ul>`, 'Видео / схемы': `<p>Скоро.</p>` } },
          { id: 'foot-pass', title: 'Передача и игра вратаря', content: { 'Теория': `<p>Передача правой и левой ногами. Ловля мяча руками.</p>`, 'Как выполнять': `<p>Передача партнеру внутренней частью стопы.</p>`, 'Ошибки': `<ul><li>Неточная передача.</li></ul>`, 'Видео / схемы': `<p>Скоро.</p>` } }
        ]
      },
      {
        id: 'st-volley', title: 'Волейбол', icon: '🏐',
        subtopics: [
          { id: 'volley-top', title: 'Передача сверху', content: { 'Теория': `<p>Передача двумя руками сверху на месте.</p>`, 'Как выполнять': `<p>Руки над головой «ковшом». Прием на пальцы.</p>`, 'Ошибки': `<ul><li>Прием на ладони.</li></ul>`, 'Видео / схемы': `<p>Скоро.</p>` } },
          { id: 'volley-bottom', title: 'Передача снизу', content: { 'Теория': `<p>Передача двумя руками снизу на месте.</p>`, 'Как выполнять': `<p>Согнуть ноги, выпрямить руки. Прием на предплечья.</p>`, 'Ошибки': `<ul><li>Согнутые руки.</li></ul>`, 'Видео / схемы': `<p>Скоро.</p>` } },
          { id: 'volley-serve', title: 'Нижняя прямая подача', content: { 'Теория': `<p>Подача в стену, в паре, через сетку.</p>`, 'Как выполнять': `<p>Удар по мячу снизу прямой рукой.</p>`, 'Ошибки': `<ul><li>Мяч не перелетает сетку.</li></ul>`, 'Видео / схемы': `<p>Скоро.</p>` } }
        ]
      },
      {
        id: 'st-basket', title: 'Баскетбол', icon: '🏀',
        subtopics: [
          { id: 'basket-stance', title: 'Стойки и остановки', content: { 'Теория': `<p>Высокая, средняя, низкая стойка. Остановка шагом и прыжком.</p>`, 'Как выполнять': `<p>Ноги согнуты, вес на передней части стопы.</p>`, 'Ошибки': `<ul><li>Прямые ноги.</li></ul>`, 'Видео / схемы': `<p>Скоро.</p>` } },
          { id: 'basket-pass', title: 'Передачи и ловля', content: { 'Теория': `<p>Передача от груди, сверху, одной от плеча.</p>`, 'Как выполнять': `<p>Резко выпрямить руки вперед.</p>`, 'Ошибки': `<ul><li>Передача без замаха.</li></ul>`, 'Видео / схемы': `<p>Скоро.</p>` } },
          { id: 'basket-dribble', title: 'Ведение мяча', content: { 'Теория': `<p>Ведение с изменением высоты и направления.</p>`, 'Как выполнять': `<p>Толчки пальцами вниз.</p>`, 'Ошибки': `<ul><li>Удар ладонью.</li></ul>`, 'Видео / схемы': `<p>Скоро.</p>` } },
          { id: 'basket-shot', title: 'Броски по кольцу', content: { 'Теория': `<p>Бросок двумя руками от груди, одной от плеча.</p>`, 'Как выполнять': `<p>Прицел в дужку, выпрямление рук.</p>`, 'Ошибки': `<ul><li>Бросок без ног.</li></ul>`, 'Видео / схемы': `<p>Скоро.</p>` } }
        ]
      },
      {
        id: 'st-mobile', title: 'Подвижные игры', icon: '🎲',
        subtopics: [
          { id: 'game-stroy', title: 'Игры со строевыми командами', content: { 'Теория': `<p>«Кто быстрее станет в строй», «Построй круг», «Построй колонну», «Путешествие на корабле», «Река и ров», «У ребят порядок строгий», «Елочки-березки», «Рыбки-крабики».</p><p><strong>«Река и ров»</strong> — игра на внимание и быстроту реакции. Дети строятся в колонну. Справа от них — «ров», слева — «река». По сигналу «Ров — справа!» нужно повернуться направо и прыгнуть. Кто прыгнул не туда — «упал в реку».</p>`, 'Как выполнять': `<p><strong>«Река и ров»:</strong> Учитель чередует команды вразбивку. Кто ошибся — получает штрафное очко. Выигрывает тот, кто меньше ошибался.</p><p><strong>«У ребят порядок строгий»:</strong> Дети ходят и поют. По команде «Становись!» все быстро бегут на свои места в шеренге.</p>`, 'Ошибки': `<ul><li>Толкотня при построении.</li><li>Неверное выполнение команды.</li></ul>`, 'Видео / схемы': `<p>Скоро.</p>` } },
          { id: 'game-attention', title: 'Игры на внимательность', content: { 'Теория': `<p>«Фигуры», «Лес, болото, озеро», «Нос, нос, нос, лоб», «Класс, смирно!», «День и ночь», «Товарищ капитан», «Делай, как я», «Запрещенное движение», «Затейники», «Сделай фигуру», «Зеркало».</p><p><strong>«Лес, болото, озеро»</strong> — игра на знание мест обитания животных. В трёх углах зала обозначены «лес», «болото» и «озеро». Ведущий называет животное (например, «волк»), и все бегут в соответствующий круг.</p>`, 'Как выполнять': `<p><strong>«Нос, нос, нос, лоб»:</strong> Ведущий говорит «нос» и показывает на нос. Но на слове «лоб» может дотронуться до другого места. Задача — делать то, что говорят, а не то, что показывает ведущий.</p><p><strong>«День и ночь»:</strong> Две команды стоят спиной друг к другу. Учитель говорит «День!» — команда «День» догоняет «Ночь».</p>`, 'Ошибки': `<ul><li>Выполнение движения, которое ведущий показывает, а не называет.</li><li>Невнимательность при смене команд.</li></ul>`, 'Видео / схемы': `<p>Скоро.</p>` } },
          { id: 'game-run', title: 'Игры с бегом', content: { 'Теория': `<p>«Ключи», «Кто быстрее», «Отдай ленту», «Быстро возьми и положи», «Перемени предмет», «Догони свою пару», «Два Мороза», «Совушка», «Кто быстрее докатит обруч», «Не замочи ноги», «Успей догнать», «Скворечник», «Найди пару», «Поезд», «Бездомный заяц», «Маяк», «Конники-спортсмены», «Гуси-лебеди», «Пустое место», «Краски», «Свободное место».</p><p><strong>«Два Мороза»</strong> — классическая догонялка. Два водящих («Морозы») стоят на середине площадки. Игроки перебегают с одной стороны на другую, а Морозы пытаются их «заморозить» (осалить).</p>`, 'Как выполнять': `<p><strong>«Два Мороза»:</strong> Морозы хором говорят: «Мы два брата молодые, два Мороза удалые». Игроки отвечают: «Не боимся мы угроз, и не страшен нам мороз!» — и перебегают. Осаленные останавливаются и «замерзают».</p><p><strong>«Пустое место»:</strong> Игроки бегут по кругу в разные стороны. Кто первым займёт освободившееся место — тот победил.</p>`, 'Ошибки': `<ul><li>Толкание соперников.</li><li>Высокая интенсивность бега без отдыха (для 1-4 классов нужно чередовать с ходьбой).</li></ul>`, 'Видео / схемы': `<p>Скоро.</p>` } },
          { id: 'game-jump', title: 'Игры с прыжками', content: { 'Теория': `<p>«Пингвины с мячом», «Спрыгни и повернись», «Не наступи», «Волк во рву», «Зайцы в огороде», «Лягушка и цапля», «Воробьи и кошки», «Удочка», «Поймай комара», «С кочки на кочку», «Не попадись», «Салки».</p><p><strong>«Волк во рву»</strong> — игра с прыжками через линии. «Ров» — это коридор шириной около 1 метра. «Волк» находится во рву. Игроки («зайцы») перепрыгивают ров, а волк их ловит.</p>`, 'Как выполнять': `<p><strong>«Волк во рву»:</strong> Зайцы перепрыгивают ров с разбега. Кого волк осалил — тот выбывает. Нельзя задерживаться во рву.</p><p><strong>«Удочка»:</strong> Верёвку крутят по кругу. Кто задел верёвку — выбывает. Постепенно верёвку можно поднимать выше.</p>`, 'Ошибки': `<ul><li>Много прыжков подряд без отдыха (нагрузка ограничена).</li><li>Заступ за линию рва при прыжке.</li></ul>`, 'Видео / схемы': `<p>Скоро.</p>` } }
        ]
      }
    ]
  },
  '5-9': {
    topics: [
      { id: 'st-ath-59', title: 'Лёгкая атлетика', icon: '🏃', subtopics: [ { id: 'ath-59', title: 'Бег и прыжки', content: { 'Теория': `<p>Спринт, эстафеты, прыжки в длину.</p>`, 'Как выполнять': `<p>Низкий старт, финиш.</p>`, 'Ошибки': `<p>Раннее выпрямление.</p>`, 'Видео / схемы': `<p class="student-video-note">Скоро.</p>` } } ] },
      { id: 'st-gym-59', title: 'Гимнастика', icon: '🤸', subtopics: [ { id: 'gym-59', title: 'Акробатика', content: { 'Теория': `<p>Кувырки, стойки, опорные прыжки.</p>`, 'Как выполнять': `<p>Кувырок назад.</p>`, 'Ошибки': `<p>Без страховки.</p>`, 'Видео / схемы': `<p class="student-video-note">Скоро.</p>` } } ] },
      { id: 'st-game-59', title: 'Спортивные игры', icon: '🏐', subtopics: [ { id: 'game-59', title: 'Баскетбол и Волейбол', content: { 'Теория': `<p>Тактика 5-1, броски в движении.</p>`, 'Как выполнять': `<p>Передача сверху/снизу.</p>`, 'Ошибки': `<p>Пробежка.</p>`, 'Видео / схемы': `<p class="student-video-note">Скоро.</p>` } } ] }
    ]
  },
  '10-11': {
    topics: [
      { id: 'st-ath-1011', title: 'Лёгкая атлетика', icon: '🏃', subtopics: [ { id: 'ath-1011', title: 'Спринт и эстафеты', content: { 'Теория': `<p>Бег 100 м, эстафетный бег.</p>`, 'Как выполнять': `<p>Передача палочки.</p>`, 'Ошибки': `<p>Оглядывание.</p>`, 'Видео / схемы': `<p class="student-video-note">Скоро.</p>` } } ] },
      { id: 'st-gym-1011', title: 'Гимнастика', icon: '🏋️', subtopics: [ { id: 'gym-1011', title: 'Аэробика/Атлетика', content: { 'Теория': `<p>Силовые упражнения и аэробика.</p>`, 'Как выполнять': `<p>Работа с весами.</p>`, 'Ошибки': `<p>Круглая спина.</p>`, 'Видео / схемы': `<p class="student-video-note">Скоро.</p>` } } ] }
    ]
  }
};

// ЛОГИКА ОТРИСОВКИ УЧАЩИХСЯ
const studentContainer = document.getElementById('studentContainer');
const studentLevelsEl = document.getElementById('studentLevels');

function renderStudentTiles(grade) {
  if (!studentContainer) return;
  const gradeData = STUDENT_DATA[grade];
  if (!gradeData) {
    studentContainer.innerHTML = '<p style="text-align: center; padding: 40px; color: var(--text-muted);">Материалы для этого класса скоро появятся!</p>';
    return;
  }
  studentContainer.innerHTML = `<div class="method-tiles">${gradeData.topics.map(topic => `
    <div class="method-tile" onclick="renderStudentSubtopics('${grade}', '${topic.id}')">
      <div class="method-tile__icon">${topic.icon}</div>
      <div class="method-tile__title">${topic.title}</div>
      <div class="method-tile__count">${topic.subtopics.length} тем</div>
    </div>
  `).join('')}</div>`;
}

window.renderStudentSubtopics = function(grade, topicId) {
  const gradeData = STUDENT_DATA[grade];
  const topic = gradeData.topics.find(t => t.id === topicId);
  if (!topic) return;
  let html = `
    <div class="method-detail">
      <div class="method-detail__header">
        <button class="method-detail__back" onclick="renderStudentTiles('${grade}')">← Назад к разделам</button>
        <h3 class="method-detail__title">${topic.icon} ${topic.title}</h3>
      </div>
      <div class="method-tab__content" style="padding: 0;">
  `;
  topic.subtopics.forEach(sub => {
    html += `
      <div style="padding: 20px; border-bottom: 1px solid var(--border); display: flex; justify-content: space-between; align-items: center;">
        <div style="font-weight: 800; color: var(--text); font-size: 1.1rem;">${sub.title}</div>
        <button class="btn" style="padding: 10px 20px; font-size: 0.85rem;" onclick="renderStudentSubDetail('${grade}', '${topicId}', '${sub.id}')">Открыть</button>
      </div>
    `;
  });
  html += `</div></div>`;
  studentContainer.innerHTML = html;
};

window.renderStudentSubDetail = function(grade, topicId, subId) {
  const gradeData = STUDENT_DATA[grade];
  const topic = gradeData.topics.find(t => t.id === topicId);
  const sub = topic.subtopics.find(s => s.id === subId);
  if (!sub) return;
  const tabs = ['Теория', 'Как выполнять', 'Ошибки', 'Видео / схемы'];
  const tabEmoji = { 'Теория': '📖', 'Как выполнять': '📝', 'Ошибки': '⚠️', 'Видео / схемы': '🎬' };
  studentContainer.innerHTML = `
    <div class="method-detail">
      <div class="method-detail__header">
        <button class="method-detail__back" onclick="renderStudentSubtopics('${grade}', '${topicId}')">← Назад к темам</button>
        <h3 class="method-detail__title">${sub.title}</h3>
      </div>
      <div class="method-tabs" id="studentTabs">
        ${tabs.map((tab, i) => `<button class="method-tab ${i === 0 ? 'is-active' : ''}" data-tab="${tab}">${tabEmoji[tab]} ${tab}</button>`).join('')}
      </div>
      <div class="method-tab__content" id="studentTabContent">${sub.content[tabs[0]]}</div>
    </div>
  `;
  document.getElementById('studentTabs').addEventListener('click', (e) => {
    const btn = e.target.closest('.method-tab');
    if (!btn) return;
    document.querySelectorAll('#studentTabs .method-tab').forEach(b => b.classList.remove('is-active'));
    btn.classList.add('is-active');
    document.getElementById('studentTabContent').innerHTML = sub.content[btn.dataset.tab] || '<p>Материал скоро появится.</p>';
  });
};

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
