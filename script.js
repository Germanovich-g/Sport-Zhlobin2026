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
      // ================= ЛЁГКАЯ АТЛЕТИКА =================
      {
        id: 'st-ath', title: 'Лёгкая атлетика', icon: '🏃',
        subtopics: [
          { id: 'ath-start-high', title: 'Высокий старт', content: { 'Теория': `<div class="visual-card"><h4>📖 Высокий старт</h4><p>Применяется в беге на короткие и средние дистанции. Обеспечивает быстрое начало движения.</p></div>`, 'Как выполнять': `<ol><li><strong>Исходное положение:</strong> Толчковая нога у линии, маховая — на шаг сзади.</li><li><strong>Подготовка:</strong> Корпус наклонен вперед, плечи выведены за линию.</li><li><strong>Начало:</strong> Активное отталкивание толчковой ногой.</li></ol>`, 'Ошибки': `<ul><li>Недостаточный наклон туловища.</li><li>Перенос веса на пятки.</li></ul>`, 'Видео / схемы': `<p class="student-video-note">Ссылки на видео скоро появятся.</p>` } },
          { id: 'ath-start-low', title: 'Низкий старт', content: { 'Теория': `<div class="visual-card"><h4>📖 Низкий старт</h4><p>Наиболее эффективный способ начала бега на короткие дистанции.</p></div>`, 'Как выполнять': `<ol><li><strong>«На старт!»:</strong> Опуститься на колено сзади стоящей ноги, руки за линией.</li><li><strong>«Внимание!»:</strong> Таз на уровне плеч, вес на руках и передней ноге.</li><li><strong>«Марш!»:</strong> Отталкивание обеими ногами, вынос тела вперед.</li></ol>`, 'Ошибки': `<ul><li>Слишком высокое/низкое положение таза.</li><li>Раннее выпрямление туловища.</li></ul>`, 'Видео / схемы': `<p class="student-video-note">Ссылки на видео скоро появятся.</p>` } },
          { id: 'ath-run30', title: 'Бег на 30 метров', content: { 'Теория': `<div class="visual-card"><h4>📖 Бег на 30 метров</h4><p>Спринтерская дистанция для проверки скоростных качеств.</p></div>`, 'Как выполнять': `<ol><li><strong>Старт.</strong> Высокий или низкий старт.</li><li><strong>Разгон (10–15 м).</strong> Максимальная частота шагов, активная работа рук.</li><li><strong>Финиш.</strong> Пересечение линии без снижения скорости.</li></ol>`, 'Ошибки': `<ul><li>Раннее выпрямление туловища.</li><li>Взгляд вниз.</li></ul>`, 'Видео / схемы': `<p class="student-video-note">Ссылки на видео скоро появятся.</p>` } },
          { id: 'ath-shuttle', title: 'Челночный бег 4х9 м', content: { 'Теория': `<div class="visual-card"><h4>📖 Челночный бег</h4><p>Бег с резкой сменой направления. Развивает ловкость.</p></div>`, 'Как выполнять': `<ol><li>Пробежать 9 метров, коснуться линии, развернуться и бежать обратно (4 отрезка).</li><li>Перед линией слегка присесть для торможения.</li></ol>`, 'Ошибки': `<ul><li>Потеря равновесия при развороте.</li><li>Отсутствие касания линии.</li></ul>`, 'Видео / схемы': `<p class="student-video-note">Ссылки на видео скоро появятся.</p>` } },
          { id: 'ath-finish', title: 'Финиширование', content: { 'Теория': `<div class="visual-card"><h4>📖 Финиширование</h4><p>Пересечение линии финиша на максимальной скорости. Способы: «пробегание», «бросок грудью», «бросок плечом».</p></div>`, 'Как выполнять': `<ol><li><strong>Пробегание:</strong> без изменения техники.</li><li><strong>Бросок грудью:</strong> резкий наклон вперед с отведением рук.</li><li><strong>Бросок плечом:</strong> поворот туловища с выведением плеча.</li></ol>`, 'Ошибки': `<ul><li>Прыжок на линию вместо броска.</li><li>Преждевременный наклон.</li></ul>`, 'Видео / схемы': `<p class="student-video-note">Ссылки на видео скоро появятся.</p>` } },
          { id: 'ath-jump-long', title: 'Прыжок в длину с места', content: { 'Теория': `<div class="visual-card"><h4>📖 Прыжок в длину с места</h4><p>Обязательный норматив. Развивает скоростно-силовые качества.</p></div>`, 'Как выполнять': `<ol><li><strong>Исходное положение:</strong> Стоя у линии, ноги на ширине плеч.</li><li><strong>Замах:</strong> Руки назад, полуприсед, наклон вперед.</li><li><strong>Толчок:</strong> Резко разогнуть ноги, махнуть руками.</li><li><strong>Приземление:</strong> На пятки с перекатом на стопу.</li></ol>`, 'Ошибки': `<ul><li>Заступ за линию.</li><li>Падение назад при приземлении.</li></ul>`, 'Видео / схемы': `<p class="student-video-note">Ссылки на видео скоро появятся.</p>` } },
          { id: 'ath-throw', title: 'Метание мяча', content: { 'Теория': `<div class="visual-card"><h4>📖 Метание мяча</h4><p>Броски малого мяча с места и с разбега в цель и на дальность.</p></div>`, 'Как выполнять': `<ol><li><strong>Хват:</strong> Три пальца держат мяч, большой и мизинец поддерживают.</li><li><strong>Замах:</strong> Рука отводится назад за голову.</li><li><strong>Бросок:</strong> Рука разгибается, мяч уходит под углом 40–45°.</li></ol>`, 'Ошибки': `<ul><li>Бросок без поворота корпуса.</li><li>Выход за линию.</li></ul>`, 'Видео / схемы': `<p class="student-video-note">Ссылки на видео скоро появятся.</p>` } }
        ]
      },
      // ================= ГИМНАСТИКА =================
      {
        id: 'st-gym', title: 'Гимнастика и акробатика', icon: '🤸',
        subtopics: [
          { id: 'gym-stroy', title: 'Строевые упражнения', content: { 'Теория': `<div class="visual-card"><h4>📖 Строевые упражнения</h4><p>Совместные действия в строю. Дисциплинируют и развивают внимание.</p></div>`, 'Как выполнять': `<ol><li><strong>Команды:</strong> «Равняйсь!», «Смирно!», «Вольно!».</li><li><strong>Построения:</strong> В шеренгу, в колонну.</li><li><strong>Перестроения:</strong> В две шеренги (расчет на «первый-второй»).</li></ol>`, 'Ошибки': `<ul><li>Нечеткое выполнение команд.</li><li>Неправильная осанка.</li></ul>`, 'Видео / схемы': `<p class="student-video-note">Ссылки на видео скоро появятся.</p>` } },
          { id: 'gym-acro', title: 'Акробатика', content: { 'Теория': `<div class="visual-card"><h4>📖 Акробатика</h4><p>Упражнения на гибкость и силу. Основа — умение группироваться.</p></div>`, 'Как выполнять': `<h4>Кувырок вперёд</h4><ol><li>Упор присев, руки на мате.</li><li>Толчок ногами, перенос веса на руки.</li><li>Прижать подбородок, коснуться затылком и лопатками.</li><li>Сгруппироваться и перекатиться на ягодицы.</li><li>Встать в упор присев.</li></ol><h4>Стойка на лопатках</h4><ol><li>Лежа на спине, подтянуть колени.</li><li>Поднять таз, опираясь на лопатки.</li><li>Подставить локти под спину, выпрямить ноги.</li></ol>`, 'Ошибки': `<ul><li>Опора на голову — опасно!</li><li>Отсутствие группировки.</li><li>Широко разведенные локти.</li></ul>`, 'Видео / схемы': `<p class="student-video-note">Ссылки на видео скоро появятся.</p>` } },
          { id: 'gym-visy', title: 'Висы и лазанье', content: { 'Теория': `<div class="visual-card"><h4>📖 Висы и лазанье</h4><p>Развивают силу рук и координацию. Выполняются на стенке и перекладине.</p></div>`, 'Как выполнять': `<ol><li><strong>Вис:</strong> Повиснуть на перекладине, тело прямое.</li><li><strong>Лазанье:</strong> Передвижение по стенке с переставлением рук и ног.</li></ol>`, 'Ошибки': `<ul><li>Резкие рывки.</li><li>Неправильный хват.</li></ul>`, 'Видео / схемы': `<p class="student-video-note">Ссылки на видео скоро появятся.</p>` } },
          { id: 'gym-ravn', title: 'Упражнения в равновесии', content: { 'Теория': `<div class="visual-card"><h4>📖 Равновесие</h4><p>Развивает координацию и вестибулярный аппарат (на скамейке).</p></div>`, 'Как выполнять': `<ol><li>Ходьба по скамейке, затем на носках.</li><li>Повороты на 180 градусов.</li><li>Стойка на одной ноге.</li></ol>`, 'Ошибки': `<ul><li>Взгляд вниз.</li><li>Спешка при поворотах.</li></ul>`, 'Видео / схемы': `<p class="student-video-note">Ссылки на видео скоро появятся.</p>` } }
        ]
      },
      // ================= ЛЫЖИ =================
      {
        id: 'st-ski', title: 'Лыжная подготовка', icon: '🎿',
        subtopics: [
          { id: 'ski-step', title: 'Ступающий и скользящий шаг', content: { 'Теория': `<div class="visual-card"><h4>📖 Ступающий и скользящий шаг</h4><p>Базовые способы передвижения на лыжах.</p></div>`, 'Как выполнять': `<ol><li><strong>Ступающий:</strong> Имитация ходьбы с подниманием носков лыж.</li><li><strong>Скользящий:</strong> Отталкивание и скольжение на одной лыже.</li></ol>`, 'Ошибки': `<ul><li>Волок лыж по снегу.</li><li>Отсутствие переноса веса.</li></ul>`, 'Видео / схемы': `<p class="student-video-note">Ссылки на видео скоро появятся.</p>` } },
          { id: 'ski-move', title: 'Попеременный ход и повороты', content: { 'Теория': `<div class="visual-card"><h4>📖 Попеременный ход</h4><p>Основной классический ход с поочередным толчком.</p></div>`, 'Как выполнять': `<ol><li><strong>Ход:</strong> Скольжение на одной лыже, толчок противоположной палкой.</li><li><strong>Повороты:</strong> Переступанием вокруг пяток/носков.</li><li><strong>Спуск:</strong> Основная стойка (ноги согнуты, палки сзади).</li></ol>`, 'Ошибки': `<ul><li>Толчок одноименными рукой и ногой.</li><li>Потеря равновесия на спуске.</li></ul>`, 'Видео / схемы': `<p class="student-video-note">Ссылки на видео скоро появятся.</p>` } }
        ]
      },
      // ================= ФУТБОЛ =================
      {
        id: 'st-football', title: 'Футбол', icon: '⚽',
        subtopics: [
          { id: 'foot-kick', title: 'Удары по мячу', content: { 'Теория': `<div class="visual-card"><h4>📖 Удары по мячу</h4><p>Внутренней частью стопы (точность) и серединой подъема (сила).</p></div>`, 'Как выполнять': `<ol><li>Постановка опорной ноги рядом с мячом.</li><li>Замах бьющей ногой.</li><li>Удар нужной частью стопы, проводка ноги за мячом.</li></ol>`, 'Ошибки': `<ul><li>Удар носком (неточный).</li><li>Далекая постановка опорной ноги.</li></ul>`, 'Видео / схемы': `<p class="student-video-note">Ссылки на видео скоро появятся.</p>` } },
          { id: 'foot-dribble', title: 'Ведение и остановка', content: { 'Теория': `<div class="visual-card"><h4>📖 Ведение и остановка</h4><p>Перемещение с мячом и его остановка для смены направления.</p></div>`, 'Как выполнять': `<ol><li><strong>Ведение:</strong> Легкие толчки мяча внутренней частью стопы.</li><li><strong>Остановка подошвой:</strong> Накрыть катящийся мяч подошвой.</li><li><strong>Остановка внутренней частью:</strong> Выставить стопу навстречу мячу.</li></ol>`, 'Ошибки': `<ul><li>Слишком сильный толчок.</li><li>Ведение на прямых ногах.</li><li>Взгляд только на мяч.</li></ul>`, 'Видео / схемы': `<p class="student-video-note">Ссылки на видео скоро появятся.</p>` } }
        ]
      },
      // ================= ВОЛЕЙБОЛ =================
      {
        id: 'st-volley', title: 'Волейбол', icon: '🏐',
        subtopics: [
          { id: 'volley-pass', title: 'Передача мяча сверху', content: { 'Теория': `<div class="visual-card"><h4>📖 Передача сверху</h4><p>Основной прием для передачи мяча партнеру или через сетку.</p></div>`, 'Как выполнять': `<ol><li>Ноги на ширине плеч, колени согнуты.</li><li>Руки над головой, кисти «ковшом».</li><li>Прием на кончики пальцев с амортизацией.</li><li>Выпрямление рук и ног для передачи.</li></ol>`, 'Ошибки': `<ul><li>Прием на ладони.</li><li>Низкая стойка.</li><li>Жесткий прием.</li></ul>`, 'Видео / схемы': `<p class="student-video-note">Ссылки на видео скоро появятся.</p>` } }
        ]
      },
      // ================= БАСКЕТБОЛ =================
      {
        id: 'st-basket', title: 'Баскетбол', icon: '🏀',
        subtopics: [
          { id: 'basket-dribble', title: 'Ведение и передача', content: { 'Теория': `<div class="visual-card"><h4>📖 Ведение и передача</h4><p>Ведение — перемещение с мячом. Передача — взаимодействие партнеров.</p></div>`, 'Как выполнять': `<ol><li><strong>Ведение:</strong> Толчки мяча пальцами вниз, взгляд вперед.</li><li><strong>Передача от груди:</strong> Резкое выпрямление рук от груди.</li><li><strong>Передача одной рукой:</strong> От плеча с шагом.</li></ol>`, 'Ошибки': `<ul><li>Удар ладонью.</li><li>Взгляд на мяч.</li><li>Передача без замаха.</li></ul>`, 'Видео / схемы': `<p class="student-video-note">Ссылки на видео скоро появятся.</p>` } },
          { id: 'basket-shot', title: 'Бросок по кольцу', content: { 'Теория': `<div class="visual-card"><h4>📖 Бросок по кольцу</h4><p>Завершающий прием атаки. Бросок двумя руками от груди с близкого расстояния.</p></div>`, 'Как выполнять': `<ol><li>Прицеливание в дужку кольца.</li><li>Сгибание коленей, мяч у груди.</li><li>Выпрямление ног и рук, выпуск мяча с указательного пальца.</li></ol>`, 'Ошибки': `<ul><li>Бросок без ног.</li><li>Слишком сильный бросок.</li><li>Зажатая кисть.</li></ul>`, 'Видео / схемы': `<p class="student-video-note">Ссылки на видео скоро появятся.</p>` } }
        ]
      },
      // ================= ПОДВИЖНЫЕ ИГРЫ =================
      {
        id: 'st-mobile', title: 'Подвижные игры', icon: '🎲',
        subtopics: [
          { id: 'game-run', title: 'Игры с бегом', content: { 'Теория': `<div class="visual-card"><h4>📖 Игры с бегом</h4><p>Развивают скорость и реакцию (догонялки, эстафеты).</p></div>`, 'Как выполнять': `<h4>«Два Мороза»</h4><p>Мороз пытается заморозить перебегающих игроков.</p><h4>«Гуси-лебеди»</h4><p>Гуси убегают от волка.</p><h4>«Пустое место»</h4><p>Кто быстрее обежит круг и займет свободное место.</p>`, 'Ошибки': `<ul><li>Высокая интенсивность без чередования.</li><li>Толкание.</li></ul>`, 'Видео / схемы': `<p class="student-video-note">Ссылки на видео скоро появятся.</p>` } },
          { id: 'game-jump', title: 'Игры с прыжками и метанием', content: { 'Теория': `<div class="visual-card"><h4>📖 Игры с прыжками</h4><p>Развивают координацию и меткость.</p></div>`, 'Как выполнять': `<h4>«Волк во рву»</h4><p>Прыжки через ров с осаливанием.</p><h4>«Охотники и зайцы»</h4><p>Метание мяча в убегающих.</p><h4>«Мяч водящему»</h4><p>Передача мяча по кругу.</p>`, 'Ошибки': `<ul><li>Много прыжков подряд.</li><li>Метание в голову.</li><li>Бросок без команды.</li></ul>`, 'Видео / схемы': `<p class="student-video-note">Ссылки на видео скоро появятся.</p>` } }
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

// ============================================================
// ЛОГИКА ОТРИСОВКИ РАЗДЕЛА «УЧАЩИМСЯ»
// ============================================================
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
  rules: {
    title: 'Правила спорта', icon: '📚',
    topics: [
      {
        id: 'rules-basket', title: 'Баскетбол',
        questions: [
          { q: "Сколько игроков одной команды на площадке в баскетболе?", a: ["5", "6", "7", "11"], correct: 0 },
          { q: "Сколько времени дается на атаку в баскетболе?", a: ["10 сек", "24 сек", "30 сек", "45 сек"], correct: 1 },
          { q: "Сколько очков дают за штрафной бросок?", a: ["1", "2", "3", "4"], correct: 0 }
        ]
      },
      {
        id: 'rules-volley', title: 'Волейбол',
        questions: [
          { q: "До скольких очков играют в партии (обычно)?", a: ["15", "21", "25", "30"], correct: 2 },
          { q: "Сколько касаний мяча разрешено на одной стороне?", a: ["1", "2", "3", "4"], correct: 2 },
          { q: "Сколько игроков в команде на площадке?", a: ["5", "6", "7", "11"], correct: 1 }
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
          { q: "Можно ли оставлять инвентарь на полу в проходе?", a: ["Да, если быстро", "Нет, это опасно", "Только гантели", "Только в конце урока"], correct: 1 },
          { q: "Зачем нужен магнезий в гимнастике?", a: ["Для красоты", "Чтобы руки не скользили", "Для запаха", "Для веса"], correct: 1 }
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
          { q: "Какой символ есть на Олимпийском флаге?", a: ["Звезда", "Кольца", "Меч", "Лавровый венок"], correct: 1 }
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
    scoreText.innerHTML += '<br><span style="color: var(--accent);">🎉 Идеально! Секретная точка на карте разблокирована!</span>';
    if (typeof revealSecretMarker === 'function') revealSecretMarker();
  }
  questionsDiv.appendChild(scoreText);
  event.currentTarget.style.display = 'none'; 
};

if (document.getElementById('quizContainer')) renderQuizTiles();

// ============================================================
// ПЕРЕКЛЮЧАТЕЛЬ ТЕМЫ (СВЕТЛАЯ / ТЕМНАЯ)
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
