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
// УЧАЩИМСЯ (1-4 классы) - ПОДРОБНЫЙ КОНТЕНТ
// ============================================================
const STUDENT_DATA = {
  '1-4': {
    topics: [
      // ================= ЛЁГКАЯ АТЛЕТИКА =================
      {
        id: 'st-ath', title: 'Лёгкая атлетика', icon: '🏃',
        subtopics: [
          {
            id: 'ath-start-high', title: 'Высокий старт',
            content: {
              'Теория': `<div class="visual-card"><h4>📖 Высокий старт</h4><p>Высокий старт применяется в беге на короткие и средние дистанции. Данное положение обеспечивает оптимальные условия для быстрого начала движения и перехода в стартовый разгон.</p><ul><li><strong>Применение:</strong> Бег на 30 м, 60 м, эстафетный бег.</li><li><strong>Задача:</strong> Максимально быстро начать движение по сигналу.</li></ul></div>`,
              'Как выполнять': `<ol><li><strong>Исходное положение:</strong> По команде «На старт!» учащийся подходит к стартовой линии. Толчковая нога находится у линии, маховая — на один шаг сзади. Вес тела распределен равномерно.</li><li><strong>Подготовка:</strong> Корпус наклонен вперед, плечи выведены за линию старта. Руки согнуты в локтях, разноименная толчковой ноге рука вынесена вперед.</li><li><strong>Начало движения:</strong> По команде «Марш!» учащийся активно отталкивается толчковой ногой и начинает бег, сохраняя наклон туловища.</li></ol>`,
              'Ошибки': `<ul><li>Недостаточный наклон туловища вперед, что приводит к медленному старту.</li><li>Перенос веса тела на пятки (необходимо на переднюю часть стопы).</li><li>Задержка начала движения после команды.</li></ul>`,
              'Видео / схемы': `<p class="student-video-note">Ссылки на видео и схемы скоро появятся.</p>`
            }
          },
          {
            id: 'ath-start-low', title: 'Низкий старт',
            content: {
              'Теория': `<div class="visual-card"><h4>📖 Низкий старт</h4><p>Низкий старт является наиболее эффективным способом начала бега на короткие дистанции. Положение низкого старта позволяет развить максимальную скорость в кратчайшее время.</p><ul><li><strong>Применение:</strong> Спринтерские дистанции (30 м, 60 м, 100 м).</li></ul></div>`,
              'Как выполнять': `<ol><li><strong>Исходное положение:</strong> По команде «На старт!» учащийся опускается на колено сзади стоящей ноги. Руки располагаются на ширине плеч за стартовой линией, опираясь на пальцы.</li><li><strong>Команда «Внимание!»:</strong> Таз поднимается до уровня плеч. Плечи выносятся вперед, вес тела переносится на руки и переднюю ногу.</li><li><strong>Команда «Марш!»:</strong> Учащийся отталкивается обеими ногами (задней — активнее) и выносит тело вперед, переходя в стартовый разгон.</li></ol>`,
              'Ошибки': `<ul><li>Слишком высокое или низкое положение таза на команде «Внимание!».</li><li>Перенос веса тела на руки (руки должны лишь слегка касаться дорожки).</li><li>Раннее выпрямление туловища после старта.</li></ul>`,
              'Видео / схемы': `<p class="student-video-note">Ссылки на видео и схемы скоро появятся.</p>`
            }
          },
          {
            id: 'ath-run30', title: 'Бег на 30 метров',
            content: {
              'Теория': `<div class="visual-card"><h4>📖 Бег на 30 метров</h4><p>Бег на 30 метров — это спринтерская дистанция, включенная в нормативы физической подготовленности учащихся. Данное упражнение направлено на развитие скоростных качеств и способности к быстрому старту.</p><p><strong>Физиологическая основа:</strong> Кратковременная работа максимальной интенсивности, выполняемая за счет анаэробных механизмов энергообеспечения. Основная нагрузка ложится на мышцы нижних конечностей и центральную нервную систему.</p></div>`,
              'Как выполнять': `<ol><li><strong>Старт.</strong> По команде «На старт!» учащийся принимает положение высокого или низкого старта (в зависимости от класса).</li><li><strong>Стартовый разгон (10–15 м).</strong> Выполняется с максимальной частотой шагов при сохранении наклона туловища. Руки выполняют активные маховые движения.</li><li><strong>Бег по дистанции.</strong> Туловище постепенно выпрямляется. Длина шага увеличивается. Дыхание произвольное, но ритмичное.</li><li><strong>Финиширование.</strong> Преодоление линии финиша без снижения скорости.</li></ol>`,
              'Ошибки': `<ul><li>Преждевременное выпрямление туловища на этапе стартового разгона, что приводит к потере скорости.</li><li>Зажатость плечевого пояса, ограничивающая амплитуду движения рук.</li><li>Взгляд, направленный вниз, что нарушает координацию.</li></ul>`,
              'Видео / схемы': `<p class="student-video-note">Ссылки на видео и схемы скоро появятся.</p>`
            }
          },
          {
            id: 'ath-shuttle', title: 'Челночный бег 4х9 м',
            content: {
              'Теория': `<div class="visual-card"><h4>📖 Челночный бег 4х9 м</h4><p>Челночный бег — это разновидность бега с резкой сменой направления. Данное упражнение развивает ловкость, координацию и способность к быстрому торможению и развороту.</p></div>`,
              'Как выполнять': `<ol><li><strong>Старт:</strong> Учащийся встает у стартовой линии в положении высокого старта.</li><li><strong>Движение:</strong> По сигналу пробегает 9 метров, касается рукой линии, разворачивается и бежит обратно. Выполняется 4 отрезка.</li><li><strong>Торможение и разворот:</strong> Перед линией необходимо слегка присесть для снижения центра тяжести, выполнить разворот и начать движение в обратном направлении.</li></ol>`,
              'Ошибки': `<ul><li>Потеря равновесия при развороте.</li><li>Отсутствие касания линии.</li><li>Слишком высокое положение центра тяжести при торможении.</li></ul>`,
              'Видео / схемы': `<p class="student-video-note">Ссылки на видео и схемы скоро появятся.</p>`
            }
          },
          {
            id: 'ath-finish', title: 'Финиширование',
            content: {
              'Теория': `<div class="visual-card"><h4>📖 Финиширование</h4><p>Финиширование — это заключительная фаза бега, целью которой является пересечение линии финиша с максимально возможной скоростью. В практике физической культуры и спорта применяются различные способы финиширования.</p><ul><li><strong>«Пробегание»:</strong> пересечение линии финиша без изменения техники бега.</li><li><strong>«Бросок грудью»:</strong> резкий наклон туловища вперед с отведением рук назад.</li><li><strong>«Бросок плечом»:</strong> поворот туловища с выведением плеча вперед.</li></ul></div>`,
              'Как выполнять': `<ol><li><strong>Способ «пробеганием»:</strong> Учащийся сохраняет технику бега и пересекает линию финиша на максимальной скорости. Применяется как базовый способ.</li><li><strong>Способ «бросок грудью»:</strong> На последнем шаге выполняется резкий наклон туловища вперед с одновременным отведением рук назад. Важно выполнять бросок без прыжка и падения.</li><li><strong>Способ «бросок плечом»:</strong> На последнем шаге выполняется поворот туловища в сторону с выведением плеча вперед для пересечения линии.</li></ol>`,
              'Ошибки': `<ul><li>Прыжок на финишную линию вместо броска.</li><li>Преждевременный наклон туловища за 2–3 шага до финиша, что приводит к потере скорости.</li><li>Отклонение туловища назад или запрокидывание головы перед финишем.</li></ul>`,
              'Видео / схемы': `<p class="student-video-note">Ссылки на видео и схемы скоро появятся.</p>`
            }
          }
        ]
      },
      
      // ================= ГИМНАСТИКА =================
      {
        id: 'st-gym', title: 'Гимнастика и акробатика', icon: '🤸',
        subtopics: [
          {
            id: 'gym-stroy', title: 'Строевые упражнения',
            content: {
              'Теория': `<div class="visual-card"><h4>📖 Строевые упражнения</h4><p>Строевые упражнения — это совместные действия учащихся в строю. Они дисциплинируют, развивают внимание и являются основой для проведения любых физкультурных занятий.</p></div>`,
              'Как выполнять': `<ol><li><strong>Строевые команды:</strong> «Равняйсь!», «Смирно!», «Вольно!».</li><li><strong>Построения:</strong> В одну шеренгу, в колонну по одному.</li><li><strong>Перестроения:</strong> Из одной шеренги в две (расчет на «первый-второй»).</li><li><strong>Повороты:</strong> Переступанием налево, направо, кругом.</li></ol>`,
              'Ошибки': `<ul><li>Нечеткое выполнение команд, суетливость.</li><li>Неправильная осанка при выполнении команд «Смирно!».</li></ul>`,
              'Видео / схемы': `<p class="student-video-note">Ссылки на видео и схемы скоро появятся.</p>`
            }
          },
          {
            id: 'gym-acro', title: 'Акробатика',
            content: {
              'Теория': `<div class="visual-card"><h4>📖 Акробатика</h4><p>Акробатика — это раздел гимнастики, включающий упражнения на гибкость, ловкость и силу. Основой акробатики является умение правильно группироваться.</p></div>`,
              'Как выполнять': `<h4>Кувырок вперёд</h4><ol><li>Примите упор присев, поставьте руки на мат.</li><li>Оттолкнитесь ногами и перенесите вес тела на руки.</li><li>Прижмите подбородок к груди, коснитесь мата затылком и лопатками.</li><li>Сгруппируйтесь (прижмите колени к груди) и перекатитесь на ягодицы.</li><li>Придите в упор присев, затем встаньте.</li></ol><h4>Стойка на лопатках</h4><ol><li>Из положения лежа на спине согните ноги и подтяните колени к груди.</li><li>Поднимите таз, опираясь на лопатки и затылок.</li><li>Подставьте локти под спину, выпрямите ноги вверх.</li><li>Удерживайте положение 3–5 секунд.</li></ol>`,
              'Ошибки': `<ul><li>Опора на голову при кувырке (грозит травмой шеи).</li><li>Отсутствие группировки, разомкнутые ноги.</li><li>Широко разведенные локти в стойке на лопатках.</li></ul>`,
              'Видео / схемы': `<p class="student-video-note">Ссылки на видео и схемы скоро появятся.</p>`
            }
          },
          {
            id: 'gym-visy', title: 'Висы и лазанье',
            content: {
              'Теория': `<div class="visual-card"><h4>📖 Висы и лазанье</h4><p>Упражнения в висе и лазанье направлены на развитие силы мышц рук, плечевого пояса и координации. Выполняются на гимнастической стенке и перекладине.</p></div>`,
              'Как выполнять': `<ol><li><strong>Вис на перекладине:</strong> Повисните на перекладине, крепко обхватив ее руками. Тело должно быть прямым.</li><li><strong>Вис согнув ноги:</strong> Из виса подтяните ноги к груди.</li><li><strong>Лазанье по стенке:</strong> Передвигайтесь по гимнастической стенке вверх и вниз, переставляя руки и ноги.</li></ol>`,
              'Ошибки': `<ul><li>Резкие рывки и раскачивания на снаряде.</li><li>Неправильный хват (соскальзывание).</li><li>Выполнение без страховки учителя.</li></ul>`,
              'Видео / схемы': `<p class="student-video-note">Ссылки на видео и схемы скоро появятся.</p>`
            }
          },
          {
            id: 'gym-ravn', title: 'Упражнения в равновесии',
            content: {
              'Теория': `<div class="visual-card"><h4>📖 Упражнения в равновесии</h4><p>Упражнения в равновесии развивают координацию движений и вестибулярный аппарат. Выполняются на гимнастической скамейке.</p></div>`,
              'Как выполнять': `<ol><li><strong>Ходьба по скамейке:</strong> Идите по скамейке обычным шагом, затем на носках.</li><li><strong>Повороты:</strong> Выполняйте повороты на 180 градусов на середине скамейки.</li><li><strong>Стойка на одной ноге:</strong> Остановитесь на скамейке и встаньте на одну ногу, удерживая равновесие.</li></ol>`,
              'Ошибки': `<ul><li>Взгляд вниз (смотреть нужно вперед).</li><li>Спешка при выполнении поворотов.</li></ul>`,
              'Видео / схемы': `<p class="student-video-note">Ссылки на видео и схемы скоро появятся.</p>`
            }
          }
        ]
      },

      // ================= ЛЫЖИ =================
      {
        id: 'st-ski', title: 'Лыжная подготовка', icon: '🎿',
        subtopics: [
          {
            id: 'ski-step', title: 'Ступающий и скользящий шаг',
            content: {
              'Теория': `<div class="visual-card"><h4>📖 Ступающий и скользящий шаг</h4><p>Базовые способы передвижения на лыжах. Ступающий шаг используется для обучения и подъема в гору. Скользящий шаг — основной способ передвижения по равнине.</p></div>`,
              'Как выполнять': `<ol><li><strong>Ступающий шаг:</strong> Имитируйте обычную ходьбу, поднимая носки лыж и переставляя их.</li><li><strong>Скользящий шаг:</strong> Оттолкнитесь палкой и лыжей, перенесите вес на другую лыжу и скользите.</li></ol>`,
              'Ошибки': `<ul><li>Волок лыж по снегу (при ступающем шаге).</li><li>Отсутствие переноса веса тела при скольжении.</li></ul>`,
              'Видео / схемы': `<p class="student-video-note">Ссылки на видео и схемы скоро появятся.</p>`
            }
          },
          {
            id: 'ski-move', title: 'Попеременный ход и повороты',
            content: {
              'Теория': `<div class="visual-card"><h4>📖 Попеременный двухшажный ход</h4><p>Один из основных классических ходов. Толчок палками и лыжами выполняется поочередно.</p></div>`,
              'Как выполнять': `<ol><li><strong>Ход:</strong> Скользите на одной лыже и одновременно отталкивайтесь противоположной палкой. Затем меняйте ноги.</li><li><strong>Повороты:</strong> Поворот переступанием вокруг пяток или носков лыж.</li><li><strong>Спуск:</strong> Примите основную стойку (ноги слегка согнуты, палки отведены назад).</li></ol>`,
              'Ошибки': `<ul><li>Одновременный толчок одноименными рукой и ногой (должны быть разноименные).</li><li>Скованные движения.</li><li>Потеря равновесия при спуске.</li></ul>`,
              'Видео / схемы': `<p class="student-video-note">Ссылки на видео и схемы скоро появятся.</p>`
            }
          }
        ]
      },

      // ================= ФУТБОЛ =================
      {
        id: 'st-football', title: 'Футбол', icon: '⚽',
        subtopics: [
          {
            id: 'foot-kick', title: 'Удары по мячу',
            content: {
              'Теория': `<div class="visual-card"><h4>📖 Удары по мячу</h4><p>Основной технический прием в футболе. Применяются удары внутренней частью стопы (для точности) и серединой подъема (для силы).</p></div>`,
              'Как выполнять': `<ol><li><strong>Постановка опорной ноги:</strong> Поставьте опорную ногу рядом с мячом, носок направлен в сторону удара.</li><li><strong>Замах:</strong> Отведите бьющую ногу назад.</li><li><strong>Удар:</strong> Выполните удар нужной частью стопы. Проводите ногу за мячом.</li></ol>`,
              'Ошибки': `<ul><li>Удар носком (мяч летит неточно).</li><li>Слишком далекая постановка опорной ноги.</li></ul>`,
              'Видео / схемы': `<p class="student-video-note">Ссылки на видео и схемы скоро появятся.</p>`
            }
          },
          {
            id: 'foot-dribble', title: 'Ведение и остановка',
            content: {
              'Теория': `<div class="visual-card"><h4>📖 Ведение и остановка мяча</h4><p>Ведение позволяет перемещаться с мячом по полю. Остановка необходима для смены направления или передачи.</p></div>`,
              'Как выполнять': `<ol><li><strong>Ведение:</strong> Выполняйте легкие толчки мяча внутренней частью стопы на расстояние 1–2 шагов.</li><li><strong>Остановка подошвой:</strong> Накройте катящийся мяч подошвой стопы.</li><li><strong>Остановка внутренней частью:</strong> Выставите внутреннюю сторону стопы навстречу мячу.</li></ol>`,
              'Ошибки': `<ul><li>Слишком сильный толчок (мяч укатывается).</li><li>Ведение на прямых ногах.</li><li>Взгляд только на мяч.</li></ul>`,
              'Видео / схемы': `<p class="student-video-note">Ссылки на видео и схемы скоро появятся.</p>`
            }
          }
        ]
      },

      // ================= ВОЛЕЙБОЛ =================
      {
        id: 'st-volley', title: 'Волейбол', icon: '🏐',
        subtopics: [
          {
            id: 'volley-pass', title: 'Передача мяча сверху',
            content: {
              'Теория': `<div class="visual-card"><h4>📖 Передача мяча сверху</h4><p>Основной прием игры в волейбол. Используется для передачи мяча партнеру или перевода его через сетку (в пионерболе).</p></div>`,
              'Как выполнять': `<ol><li><strong>Стойка:</strong> Ноги на ширине плеч, колени слегка согнуты.</li><li><strong>Положение рук:</strong> Поднимите руки над головой, кисти образуют «ковш».</li><li><strong>Прием:</strong> Принимайте мяч на кончики пальцев, амортизируя движение.</li><li><strong>Передача:</strong> Выпрямите руки и ноги, направляя мяч вверх-вперед.</li></ol>`,
              'Ошибки': `<ul><li>Прием мяча на ладони.</li><li>Слишком низкая стойка.</li><li>Неработающие пальцы (жесткий прием).</li></ul>`,
              'Видео / схемы': `<p class="student-video-note">Ссылки на видео и схемы скоро появятся.</p>`
            }
          }
        ]
      },

      // ================= БАСКЕТБОЛ =================
      {
        id: 'st-basket', title: 'Баскетбол', icon: '🏀',
        subtopics: [
          {
            id: 'basket-dribble', title: 'Ведение и передача',
            content: {
              'Теория': `<div class="visual-card"><h4>📖 Ведение и передача мяча</h4><p>Ведение — это способ перемещения игрока с мячом. Передача — основной способ взаимодействия партнеров.</p></div>`,
              'Как выполнять': `<ol><li><strong>Ведение:</strong> Толкайте мяч вниз пальцами, а не ладонью. Смотрите вперед.</li><li><strong>Передача от груди:</strong> Держите мяч у груди, резко выпрямите руки вперед.</li><li><strong>Передача одной рукой:</strong> Выполняется от плеча, с шагом одноименной ноги.</li></ol>`,
              'Ошибки': `<ul><li>Удар ладонью по мячу.</li><li>Постоянный взгляд на мяч, а не на площадку.</li><li>Передача без замаха.</li></ul>`,
              'Видео / схемы': `<p class="student-video-note">Ссылки на видео и схемы скоро появятся.</p>`
            }
          },
          {
            id: 'basket-shot', title: 'Бросок по кольцу',
            content: {
              'Теория': `<div class="visual-card"><h4>📖 Бросок по кольцу</h4><p>Бросок — завершающий прием атаки в баскетболе. Бросок двумя руками от груди применяется с близкого расстояния.</p></div>`,
              'Как выполнять': `<ol><li><strong>Прицеливание:</strong> Смотрите на дужку кольца.</li><li><strong>Подготовка:</strong> Согните колени, мяч у груди.</li><li><strong>Бросок:</strong> Выпрямите ноги и руки, выпустите мяч с указательного пальца.</li></ol>`,
              'Ошибки': `<ul><li>Бросок без работы ног.</li><li>Слишком сильный бросок (мяч бьется о щит).</li><li>Бросок с зажатой кистью.</li></ul>`,
              'Видео / схемы': `<p class="student-video-note">Ссылки на видео и схемы скоро появятся.</p>`
            }
          }
        ]
      },

      // ================= ПОДВИЖНЫЕ ИГРЫ =================
      {
        id: 'st-mobile', title: 'Подвижные игры', icon: '🎲',
        subtopics: [
          {
            id: 'game-run', title: 'Игры с бегом',
            content: {
              'Теория': `<div class="visual-card"><h4>📖 Игры с бегом</h4><p>Развивают скорость, выносливость и реакцию. Включают перебежки, догонялки и эстафеты.</p></div>`,
              'Как выполнять': `<h4>«Два Мороза»</h4><p>Один водящий — «Мороз». Игроки перебегают через площадку, а Мороз пытается их «заморозить» касанием.</p><h4>«Гуси-лебеди»</h4><p>Игроки («гуси») перебегают от «хозяйки» к «волку», пытаясь не попасться.</p><h4>«Пустое место»</h4><p>Игроки бегут по кругу в разные стороны, чтобы быстрее занять свободное место.</p>`,
              'Ошибки': `<ul><li>Высокая интенсивность бега без чередования с ходьбой.</li><li>Толкание соперников.</li><li>Нарушение правил игры.</li></ul>`,
              'Видео / схемы': `<p class="student-video-note">Ссылки на видео и схемы скоро появятся.</p>`
            }
          },
          {
            id: 'game-jump', title: 'Игры с прыжками и метанием',
            content: {
              'Теория': `<div class="visual-card"><h4>📖 Игры с прыжками и метанием</h4><p>Развивают координацию, глазомер и меткость. Требуют внимательности и соблюдения техники безопасности.</p></div>`,
              'Как выполнять': `<h4>«Волк во рву»</h4><p>Игроки прыгают через «ров» (линии), а «волк» пытается их осалить.</p><h4>«Охотники и зайцы»</h4><p>«Охотники» бросают мяч в убегающих «зайцев».</p><h4>«Мяч водящему»</h4><p>Игроки передают мяч по кругу, а водящий пытается его перехватить.</p>`,
              'Ошибки': `<ul><li>Много прыжков подряд без отдыха.</li><li>Метание мяча в область головы и живота.</li><li>Бросок без команды учителя.</li></ul>`,
              'Видео / схемы': `<p class="student-video-note">Ссылки на видео и схемы скоро появятся.</p>`
            }
          }
        ]
      }
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
// УЧАЩИМСЯ (5-9 и 10-11 классы) - ДОПОЛНЕНИЕ
// ============================================================
STUDENT_DATA['5-9'] = {
  topics: [
    {
      id: 'st-ath-59', title: 'Лёгкая атлетика', icon: '🏃',
      subtopics: [
        {
          id: 'ath-run-59', title: 'Бег на короткие дистанции',
          content: {
            'Теория': `<div class="visual-card"><h4>📖 Бег на короткие дистанции (5–9 классы)</h4><p>Включает бег на 30, 60 и 100 метров. Развивает максимальную скорость и взрывную силу.</p></div>`,
            'Как выполнять': `<ol><li><strong>Старт:</strong> Низкий старт. По команде «Марш!» мощное отталкивание.</li><li><strong>Разгон:</strong> Наклон туловища сохраняется до 15–20 метров.</li><li><strong>Финиш:</strong> Пересечение линии финиша на максимальной скорости, без замедления.</li></ol>`,
            'Ошибки': `<ul><li>Слишком раннее выпрямление корпуса.</li><li>Зажатые плечи.</li><li>Остановка за линией финиша.</li></ul>`,
            'Видео / схемы': `<p class="student-video-note">Ссылки на видео и схемы скоро появятся.</p>`
          }
        },
        {
          id: 'ath-long-59', title: 'Бег на длинные дистанции',
          content: {
            'Теория': `<div class="visual-card"><h4>📖 Бег на длинные дистанции (5–9 классы)</h4><p>Бег на 1000, 1500 и 2000 метров. Основной критерий — выносливость и умение распределять силы.</p></div>`,
            'Как выполнять': `<ol><li><strong>Старт:</strong> Высокий старт. Не начинай слишком быстро.</li><li><strong>Бег:</strong> Дыхание ритмичное (2–3 шага вдох, 2–3 выдох).</li><li><strong>Финиш:</strong> Ускорение за 100–200 метров до конца дистанции.</li></ol>`,
            'Ошибки': `<ul><li>Слишком быстрый старт (не хватит сил).</li><li>Задержка дыхания.</li><li>Остановка сразу после финиша (нужно перейти на ходьбу).</li></ul>`,
            'Видео / схемы': `<p class="student-video-note">Ссылки на видео и схемы скоро появятся.</p>`
          }
        },
        {
          id: 'ath-jump-59', title: 'Прыжки в длину с разбега',
          content: {
            'Теория': `<div class="visual-card"><h4>📖 Прыжок в длину с разбега</h4><p>Выполняется способом «согнув ноги». Требует разбега, мощного толчка и точного приземления.</p></div>`,
            'Как выполнять': `<ol><li><strong>Разбег:</strong> Постепенное ускорение до максимальной скорости.</li><li><strong>Толчок:</strong> Отталкивание одной ногой перед линией.</li><li><strong>Полёт:</strong> Подтяни колени к груди, руки вперёд.</li><li><strong>Приземление:</strong> На пятки с перекатом на стопу.</li></ol>`,
            'Ошибки': `<ul><li>Заступ за линию отталкивания.</li><li>Падение назад при приземлении.</li></ul>`,
            'Видео / схемы': `<p class="student-video-note">Ссылки на видео и схемы скоро появятся.</p>`
          }
        }
      ]
    },
    {
      id: 'st-gym-59', title: 'Гимнастика', icon: '🤸',
      subtopics: [
        {
          id: 'gym-acro-59', title: 'Акробатика и опорные прыжки',
          content: {
            'Теория': `<div class="visual-card"><h4>📖 Акробатика (5–9 классы)</h4><p>Изучаются кувырки вперёд и назад, стойки, «мост» и опорные прыжки через козла.</p></div>`,
            'Как выполнять': `<ol><li><strong>Кувырок назад:</strong> Из упора присев перекат на спину, подставить руки и выйти в упор присев.</li><li><strong>Мост:</strong> Из положения лёжа прогнуться, опираясь на стопы и ладони.</li><li><strong>Опорный прыжок:</strong> Разбег, толчок ногами о мостик, толчок руками о снаряд, приземление.</li></ol>`,
            'Ошибки': `<ul><li>Выполнение без страховки.</li><li>Опора на голову.</li><li>Слабый толчок руками о снаряд.</li></ul>`,
            'Видео / схемы': `<p class="student-video-note">Ссылки на видео и схемы скоро появятся.</p>`
          }
        }
      ]
    },
    {
      id: 'st-game-59', title: 'Спортивные игры', icon: '🏐',
      subtopics: [
        {
          id: 'basket-59', title: 'Баскетбол',
          content: {
            'Теория': `<div class="visual-card"><h4>📖 Баскетбол (5–9 классы)</h4><p>Изучаются тактические действия (заслоны, пик-н-роллы), броски в движении и правила игры.</p></div>`,
            'Как выполнять': `<ol><li><strong>Ведение:</strong> С изменением высоты и направления.</li><li><strong>Бросок в движении:</strong> Два шага, затем бросок одной рукой от плеча.</li><li><strong>Тактика:</strong> Взаимодействие в парах и тройках.</li></ol>`,
            'Ошибки': `<ul><li>Пробежка (более двух шагов без ведения).</li><li>Неправильная работа ног при броске.</li></ul>`,
            'Видео / схемы': `<p class="student-video-note">Ссылки на видео и схемы скоро появятся.</p>`
          }
        },
        {
          id: 'volley-59', title: 'Волейбол',
          content: {
            'Теория': `<div class="visual-card"><h4>📖 Волейбол (5–9 классы)</h4><p>Изучаются верхняя и нижняя передачи, подачи и простые тактические схемы (например, 5-1).</p></div>`,
            'Как выполнять': `<ol><li><strong>Передача сверху:</strong> Над головой, на пальцы.</li><li><strong>Передача снизу:</strong> Приём на предплечья.</li><li><strong>Подача:</strong> Нижняя прямая или верхняя.</li></ol>`,
            'Ошибки': `<ul><li>Приём на ладони.</li><li>Согнутые руки при передаче снизу.</li></ul>`,
            'Видео / схемы': `<p class="student-video-note">Ссылки на видео и схемы скоро появятся.</p>`
          }
        }
      ]
    }
  ]
};

STUDENT_DATA['10-11'] = {
  topics: [
    {
      id: 'st-ath-1011', title: 'Лёгкая атлетика', icon: '🏃',
      subtopics: [
        {
          id: 'ath-run-1011', title: 'Спринт и эстафетный бег',
          content: {
            'Теория': `<div class="visual-card"><h4>📖 Спринт 100 м и эстафеты (10–11 классы)</h4><p>Совершенствование техники бега на 100 м и передача эстафетной палочки.</p></div>`,
            'Как выполнять': `<ol><li><strong>Спринт:</strong> Низкий старт, максимальный разгон.</li><li><strong>Эстафета:</strong> Передача палочки в «коридоре» без оглядки.</li></ol>`,
            'Ошибки': `<ul><li>Потеря эстафетной палочки.</li><li>Оглядывание при передаче.</li></ul>`,
            'Видео / схемы': `<p class="student-video-note">Ссылки на видео и схемы скоро появятся.</p>`
          }
        }
      ]
    },
    {
      id: 'st-gym-1011', title: 'Гимнастика и атлетическая подготовка', icon: '🏋️',
      subtopics: [
        {
          id: 'gym-athl-1011', title: 'Аэробика и силовые упражнения',
          content: {
            'Теория': `<div class="visual-card"><h4>📖 Атлетическая гимнастика / аэробика</h4><p>Для девушек — аэробика, для юношей — упражнения с отягощениями и на снарядах.</p></div>`,
            'Как выполнять': `<ol><li><strong>Силовые:</strong> Работа с гантелями, штангой, на перекладине.</li><li><strong>Аэробика:</strong> Комплексы под музыку.</li><li><strong>Страховка:</strong> Обязательна при работе с весами.</li></ol>`,
            'Ошибки': `<ul><li>Круглая спина при подъёме веса.</li><li>Задержка дыхания.</li><li>Работа без страховки.</li></ul>`,
            'Видео / схемы': `<p class="student-video-note">Ссылки на видео и схемы скоро появятся.</p>`
          }
        }
      ]
    }
  ]
};

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
