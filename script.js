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
// УЧАЩИМСЯ (1-4 классы) - ПОЛНАЯ ПРОГРАММА РБ
// ============================================================
const STUDENT_DATA = {
  '1-4': {
    topics: [
      // ================= ЛЁГКАЯ АТЛЕТИКА =================
      {
        id: 'st-ath', title: 'Лёгкая атлетика', icon: '🏃',
        subtopics: [
          { id: 'ath-high', title: 'Высокий старт', content: { 'Теория': `<p>Используется для бега на средние и длинные дистанции. Позволяет быстро набрать скорость без излишнего напряжения в первые секунды.</p>`, 'Как выполнять': `<ol><li>Сильную (толчковую) ногу ставим вперед, носком вплотную к стартовой линии.</li><li>Вторую ногу отставляем назад на расстояние 1,5–2 стоп.</li><li>Корпус наклонен вперед, взгляд направлен на дорожку в 2–3 метрах перед собой.</li><li>Руки согнуты в локтях, разноименно ногам (если впереди правая нога — впереди левая рука).</li><li>Команда учителя: "На старт!", "Внимание!", "Марш!".</li></ol>`, 'Ошибки': `<ul><li>Выпрямление корпуса до начала бега.</li><li>Взгляд под ноги (замедляет реакцию).</li></ul>`, 'Видео / схемы': `<p class="student-video-note">Ссылки на видео скоро появятся.</p>` } },
          { id: 'ath-low', title: 'Низкий старт', content: { 'Теория': `<p>Применяется в спринте (60 м, 100 м) для максимально быстрого старта за счет использования стартовых колодок.</p>`, 'Как выполнять': `<ol><li>Опора на руки и колено сзади стоящей ноги.</li><li>Руки ставятся на ширине плеч, пальцы образуют "коридор" для головы.</li><li>По команде "Внимание!" таз поднимается немного выше плеч, вес переносится на руки.</li><li>Мощный одновременный толчок обеими ногами и руками.</li><li>Упражнение: Бег с высокого старта с ускорением на 10–15 метров.</li></ol>`, 'Ошибки': `<p>Слишком высокое или низкое положение таза.</p>`, 'Видео / схемы': `<p class="student-video-note">Ссылки на видео скоро появятся.</p>` } },
          { id: 'ath-run', title: 'Бег по дистанции', content: { 'Теория': `<p>Поддержание скорости и экономичность движений.</p>`, 'Как выполнять': `<ol><li>Корпус наклонен вперед на 5–7 градусов.</li><li>Работа рук: локти согнуты под углом 90 градусов, движение вперед-назад (не поперек тела).</li><li>Дыхание ровное, глубокое.</li><li>Переходы: От стартового разбега к бегу по инерции; бег с изменением скорости (рывки).</li></ol>`, 'Ошибки': `<p>Зажатые плечи.</p>`, 'Видео / схемы': `<p class="student-video-note">Ссылки на видео скоро появятся.</p>` } },
          { id: 'ath-finish', title: 'Финиширование', content: { 'Теория': `<p>Пересечение финишной линии с сохранением максимальной скорости.</p>`, 'Как выполнять': `<ol><li>"Бросок грудью": наклон корпуса вперед в последний момент.</li><li>"Плечом": касание ленты плечом, если бег идет в группе.</li><li>Важно: Не тормозить перед финишем, а пробегать линию на полной скорости.</li></ol>`, 'Ошибки': `<p>Прыжок на линию.</p>`, 'Видео / схемы': `<p class="student-video-note">Ссылки на видео скоро появятся.</p>` } },
          { id: 'ath-shuttle', title: 'Челночный бег', content: { 'Теория': `<p>Тест на скоростную выносливость и ловкость. Главная сложность — резкая смена направления.</p>`, 'Как выполнять': `<ol><li>Старт высокий.</li><li>Добегая до линии, не тормозите резко! Делайте стопорящий шаг и резкий разворот.</li><li>При касании линии корпус должен быть максимально низко, чтобы не потерять скорость на обратном пути.</li><li>Совет: Касайтесь линии рукой или ногой максимально близко к земле.</li></ol>`, 'Ошибки': `<p>Потеря равновесия.</p>`, 'Видео / схемы': `<p class="student-video-note">Ссылки на видео скоро появятся.</p>` } },
          { id: 'ath-30-60', title: 'Бег на 30 и 60 метров', content: { 'Теория': `<p>Тестирование скоростных качеств.</p>`, 'Как выполнять': `<ol><li>Максимально быстрый старт (лучше низкий).</li><li>Работа рук "как поршни", частый и широкий шаг.</li></ol>`, 'Ошибки': `<p>Взгляд вниз.</p>`, 'Видео / схемы': `<p class="student-video-note">Ссылки на видео скоро появятся.</p>` } },
          { id: 'ath-jump', title: 'Прыжки в длину с места', content: { 'Теория': `<p>Развитие силы ног и координации.</p>`, 'Как выполнять': `<ol><li>Ноги на ширине плеч, носки у линии.</li><li>Глубокий присед, руки назад.</li><li>Мощный мах руками вперед-вверх и одновременный толчок ногами.</li><li>Приземление на две ноги, мягко сгибая колени.</li><li>Способы: "Ножницы" (в полете ноги меняются местами) или "согнув ноги" (группировка в полете).</li></ol>`, 'Ошибки': `<p>Заступ за линию.</p>`, 'Видео / схемы': `<p class="student-video-note">Ссылки на видео скоро появятся.</p>` } },
          { id: 'ath-multi', title: 'Многоскоки', content: { 'Теория': `<p>Развитие силы отталкивания и выносливости.</p>`, 'Как выполнять': `<ol><li>Прыжки с ноги на ногу с активным махом свободной ноги вперед-вверх.</li><li>Корпус прямой, руки работают как при беге.</li></ol>`, 'Ошибки': `<p>Приземление на прямые ноги.</p>`, 'Видео / схемы': `<p class="student-video-note">Ссылки на видео скоро появятся.</p>` } },
          { id: 'ath-jump-run', title: 'Прыжки в длину с разбега', content: { 'Теория': `<p>Совмещение разбега и мощного толчка.</p>`, 'Как выполнять': `<ol><li>Определение толчковой ноги.</li><li>Разбег (8–10 шагов) с постепенным ускорением.</li><li>Последние 2–3 шага — подготовка к толчку.</li><li>Толчок выполняется сильнейшей ногой с акцентом на мах руками.</li></ol>`, 'Ошибки': `<p>Неправильный выбор толчковой ноги.</p>`, 'Видео / схемы': `<p class="student-video-note">Ссылки на видео скоро появятся.</p>` } },
          { id: 'ath-throw', title: 'Метание малого мяча (150 г)', content: { 'Теория': `<p>Развитие координации и силы рук.</p>`, 'Как выполнять': `<ol><li>Держим мяч фалангами пальцев.</li><li>Замах: рука с мячом отводится назад, корпус разворачивается.</li><li>Скрестный шаг (левая нога впереди, правая сзади).</li><li>Резкий рывок корпусом и рукой вперед.</li><li>Выпуск мяча происходит в высшей точке над плечом, кисть "щелкает" в последний момент.</li></ol>`, 'Ошибки': `<p>Бросок без поворота корпуса.</p>`, 'Видео / схемы': `<p class="student-video-note">Ссылки на видео скоро появятся.</p>` } },
          { id: 'ath-medball', title: 'Метание набивного мяча', content: { 'Теория': `<p>Развитие силы спины и рук, гибкости плечевого пояса.</p>`, 'Как выполнять': `<ol><li><strong>Из-за головы (сидя):</strong> Сидя на полу, ноги врозь. Мяч за головой. Резкий бросок вперед-вверх, работая мышцами спины и рук.</li><li><strong>Из-за головы (стоя):</strong> Ноги на ширине плеч, мяч за головой. Толчок двумя руками от груди или из-за головы с активным участием ног.</li><li><strong>Назад через голову:</strong> Стоя спиной к цели, бросок через голову назад.</li></ol>`, 'Ошибки': `<p>Слабый мах руками.</p>`, 'Видео / схемы': `<p class="student-video-note">Ссылки на видео скоро появятся.</p>` } },
          { id: 'ath-push', title: 'Толкание набивного мяча', content: { 'Теория': `<p>Имитация толкания ядра.</p>`, 'Как выполнять': `<ol><li>Мяч у груди, локти прижаты.</li><li>Ноги согнуты.</li><li>Мощный толчок двумя руками от груди вперед-вверх.</li><li>Вес тела переносится с задней ноги на переднюю.</li></ol>`, 'Ошибки': `<p>Толчок одной рукой.</p>`, 'Видео / схемы': `<p class="student-video-note">Ссылки на видео скоро появятся.</p>` } }
        ]
      },
      // ================= ГИМНАСТИКА =================
      {
        id: 'st-gym', title: 'Гимнастика', icon: '🤸',
        subtopics: [
          { id: 'gym-group', title: 'Группировка и перекаты', content: { 'Теория': `<p>Основа безопасности при падениях и база для кувырков.</p>`, 'Как выполнять': `<ol><li>Группировка: Сидя, подтянуть колени к груди, обхватить их руками, голову наклонить вперед. Спина круглая.</li><li>Перекат назад: Из упора присев перекатиться назад на спину, сохраняя группировку, вернуться в исходное положение.</li><li>Кувырок вперед: Из упора присев, оттолкнувшись руками, перенести вес на плечи, перевернуться через голову и встать.</li></ol>`, 'Ошибки': `<p>Опора на голову при кувырке.</p>`, 'Видео / схемы': `<p class="student-video-note">Ссылки на видео скоро появятся.</p>` } },
          { id: 'gym-stand', title: 'Стойка на лопатках ("Березка")', content: { 'Теория': `<p>Развитие гибкости позвоночника и силы мышц кора.</p>`, 'Как выполнять': `<ol><li>Лечь на спину.</li><li>Опираясь на локти и затылок, поднять ноги и туловище вертикально вверх.</li><li>Поддерживать спину руками под лопатками.</li><li>Ноги вместе, носки натянуты.</li></ol>`, 'Ошибки': `<p>Запрокидывание головы.</p>`, 'Видео / схемы': `<p class="student-video-note">Ссылки на видео скоро появятся.</p>` } },
          { id: 'gym-bridge', title: 'Мост из положения лежа', content: { 'Теория': `<p>Развитие гибкости спины и плечевого пояса.</p>`, 'Как выполнять': `<ol><li>Лежа на спине, согнуть ноги (стопы близко к ягодицам) и руки (ладони у плеч, пальцы к ногам).</li><li>Опираясь на руки и ноги, прогнуться в спине, поднимая таз как можно выше.</li><li>Голова опущена назад.</li></ol>`, 'Ошибки': `<p>Слишком резкий подъем.</p>`, 'Видео / схемы': `<p class="student-video-note">Ссылки на видео скоро появятся.</p>` } },
          { id: 'gym-climb', title: 'Лазание и перелезание', content: { 'Теория': `<p>Развитие силы рук и ног, координации.</p>`, 'Как выполнять': `<ol><li>Лазание по канату в три приема: Захват каната ногами (ступни зажимают канат, одна над другой). Руки скользят вверх по канату. Ноги выпрямляются, подтягивая тело вверх.</li><li>Перелезание через "коня": Разбег, толчок одной ногой о мостик. Опора руками о снаряд. Перенос ног через снаряд. Мягкое приземление на согнутые ноги.</li></ol>`, 'Ошибки': `<p>Отсутствие страховки.</p>`, 'Видео / схемы': `<p class="student-video-note">Ссылки на видео скоро появятся.</p>` } },
          { id: 'gym-balance', title: 'Ходьба по бревну', content: { 'Теория': `<p>Развитие равновесия и координации.</p>`, 'Как выполнять': `<ol><li>Руки в стороны для баланса.</li><li>Взгляд направлен вперед (не под ноги).</li><li>Шаги мягкие, с носка на пятку.</li><li>Спина прямая.</li><li>Упражнения: Ходьба с предметом на голове, повороты на одной ноге, приседания на бревне.</li></ol>`, 'Ошибки': `<p>Взгляд вниз.</p>`, 'Видео / схемы': `<p class="student-video-note">Ссылки на видео скоро появятся.</p>` } }
        ]
      },
      // ================= ЛЫЖИ =================
      {
        id: 'st-ski', title: 'Лыжная подготовка', icon: '🎿',
        subtopics: [
          { id: 'ski-step', title: 'Ступающий шаг', content: { 'Теория': `<p>Для подъема в гору или рыхлого снега.</p>`, 'Как выполнять': `<ol><li>Лыжа ставится на снег всей подошвой.</li><li>Вес переносится на нее.</li><li>Затем вторая лыжа подтягивается к первой.</li><li>Палки используются для опоры.</li></ol>`, 'Ошибки': `<p>Волок лыж по снегу.</p>`, 'Видео / схемы': `<p class="student-video-note">Ссылки на видео скоро появятся.</p>` } },
          { id: 'ski-slide', title: 'Скользящий шаг', content: { 'Теория': `<p>Основная техника передвижения.</p>`, 'Как выполнять': `<ol><li>Отталкивание одной лыжей.</li><li>Скольжение на другой.</li><li>Вес тела полностью переносится на скользящую лыжу.</li><li>Руки работают попеременно.</li></ol>`, 'Ошибки': `<p>Отсутствие переноса веса.</p>`, 'Видео / схемы': `<p class="student-video-note">Ссылки на видео скоро появятся.</p>` } },
          { id: 'ski-move', title: 'Попеременный двухшажный ход', content: { 'Теория': `<p>Классический ход для лыжни.</p>`, 'Как выполнять': `<ol><li>Синхронизация рук и ног (правая рука — левая нога).</li><li>Толчок палкой происходит в момент, когда противоположная нога отталкивается от снега.</li></ol>`, 'Ошибки': `<p>Толчок одноименными рукой и ногой.</p>`, 'Видео / схемы': `<p class="student-video-note">Ссылки на видео скоро появятся.</p>` } },
          { id: 'ski-bez', title: 'Одновременный бесшажный ход', content: { 'Теория': `<p>Для спусков и равнины.</p>`, 'Как выполнять': `<ol><li>Только мощный толчок палками одновременно.</li><li>Ноги скользят по инерции.</li></ol>`, 'Ошибки': `<p>Слабый толчок палками.</p>`, 'Видео / схемы': `<p class="student-video-note">Ссылки на видео скоро появятся.</p>` } },
          { id: 'ski-up', title: 'Преодоление подъемов', content: { 'Теория': `<p>Ступающим шагом: "Лесенкой" (боком), "елочкой" (разведя носки лыж). Полуелочкой и полулесенкой: Для склонов средней крутизны.</p>`, 'Как выполнять': `<p>Подъем в гору требует активной работы палками и ногами.</p>`, 'Ошибки': `<p>Потеря равновесия на склоне.</p>`, 'Видео / схемы': `<p class="student-video-note">Ссылки на видео скоро появятся.</p>` } },
          { id: 'ski-down', title: 'Спуски и торможение', content: { 'Теория': `<p>Основная стойка: Ноги согнуты, корпус наклонен вперед, руки держат палки кольцами назад.</p>`, 'Как выполнять': `<ol><li><strong>Торможение "плугом":</strong> Сведение носков лыж и разведение пяток, давление на внутренние ребра лыж.</li><li><strong>Торможение "упором" (полуплугом):</strong> Давление на одну лыжу (внешнюю в повороте).</li></ol>`, 'Ошибки': `<p>Падение на спуске.</p>`, 'Видео / схемы': `<p class="student-video-note">Ссылки на видео скоро появятся.</p>` } }
        ]
      },
      // ================= ФУТБОЛ =================
      {
        id: 'st-football', title: 'Футбол', icon: '⚽',
        subtopics: [
          { id: 'foot-kick', title: 'Удары по мячу', content: { 'Теория': `<p>Постановка опорной ноги: Правило 15–20 см от мяча, носок смотрит в цель.</p>`, 'Как выполнять': `<ol><li><strong>Опорная нога:</strong> ставится сбоку от мяча на расстоянии 15–20 см. Носок опорной ноги должен смотреть точно в ту сторону, куда вы хотите послать мяч.</li><li><strong>Удар серединой подъема:</strong> Замах: отводите бьющую ногу назад, разгибая ее в колене. Удар: бейте точно в центр мяча подъемом стопы. Проводка: после удара нога продолжает движение по траектории мяча.</li><li><strong>Удар внутренней частью:</strong> Опорная нога ставится рядом с мячом. Бьющая нога разворачивается носком наружу. Удар наносится внутренней стороной стопы точно в центр мяча.</li><li><strong>Удар носком:</strong> Опорная нога ставится сбоку от мяча. Бьющая нога резко выбрасывается вперед. Удар наносится носком точно в центр мяча.</li><li><strong>Удар по катящемуся мячу:</strong> Опорная нога ставится сбоку от мяча. Бьющая нога движется навстречу мячу. Удар наносится точно в центр мяча.</li><li><strong>Жонглирование:</strong> Подбрасывайте мяч ногой, бедром или коленом, стараясь не дать ему упасть на землю. Держите корпус прямо, взгляд направлен на мяч.</li></ol>`, 'Ошибки': `<p>Удар носком мимо цели.</p>`, 'Видео / схемы': `<p class="student-video-note">Ссылки на видео скоро появятся.</p>` } },
          { id: 'foot-stop', title: 'Остановка мяча', content: { 'Теория': `<p>Для катящегося мяча (накрыть сверху), внутренней стороной (универсальный прием), летящего мяча.</p>`, 'Как выполнять': `<ol><li><strong>Подошвой:</strong> Слегка согните опорную ногу для устойчивости. Накройте катящийся мяч подошвой сверху. Расслабьте голеностоп, чтобы нога сработала как амортизатор.</li><li><strong>Внутренней стороной:</strong> Опорная нога ставится сбоку от мяча. Бьющая нога разворачивается носком наружу. Накройте мяч внутренней стороной стопы, гася его скорость.</li><li><strong>Остановка летящего мяча:</strong> Подстраивайтесь под траекторию мяча. Нога должна быть расслаблена и работать как амортизатор.</li></ol>`, 'Ошибки': `<p>Мяч отскакивает далеко.</p>`, 'Видео / схемы': `<p class="student-video-note">Ссылки на видео скоро появятся.</p>` } },
          { id: 'foot-dribble', title: 'Ведение мяча', content: { 'Теория': `<p>Ведение одной ногой: По прямой, "змейкой", "восьмеркой".</p>`, 'Как выполнять': `<ol><li><strong>Одной ногой:</strong> Ведите мяч одной ногой, контролируя его высоту отскока. Держите корпус прямо, взгляд направлен вперед.</li><li><strong>Попеременное ведение:</strong> Ведите мяч попеременно правой и левой ногой, контролируя его высоту отскока.</li><li><strong>Внешней и внутренней частью:</strong> Ведите мяч внешней или внутренней частью подъема, контролируя его высоту отскока.</li><li><strong>Ведение двух мячей:</strong> Ведите два мяча одновременно, контролируя их высоту отскока.</li></ol>`, 'Ошибки': `<p>Слишком сильный толчок.</p>`, 'Видео / схемы': `<p class="student-video-note">Ссылки на видео скоро появятся.</p>` } },
          { id: 'foot-pass', title: 'Передача и игра вратаря', content: { 'Теория': `<p>Передача правой и левой ногой. Вратарь: Стойка, ловля высоких и низких мячей.</p>`, 'Как выполнять': `<ol><li><strong>Передача:</strong> Опорная нога ставится сбоку от мяча. Бьющая нога разворачивается носком наружу. Удар наносится внутренней стороной стопы точно в центр мяча.</li><li><strong>Вратарь:</strong> Стойка вратаря: ноги чуть согнуты, вес на носках, руки перед собой. Ловля: техника "Корзина" (для высоких мячей) и "Замок" (для низких).</li><li><strong>Введение мяча:</strong> Вратарь вводит мяч в игру броском одной рукой или ударом ногой по неподвижному мячу и после набрасывания.</li></ol>`, 'Ошибки': `<p>Неточная передача.</p>`, 'Видео / схемы': `<p class="student-video-note">Ссылки на видео скоро появятся.</p>` } }
        ]
      },
      // ================= ВОЛЕЙБОЛ =================
      {
        id: 'st-volley', title: 'Волейбол', icon: '🏐',
        subtopics: [
          { id: 'volley-top', title: 'Передача мяча двумя руками сверху', content: { 'Теория': `<p>Положение кистей ("ковшик"), работа ног, удар о стену/пол.</p>`, 'Как выполнять': `<ol><li>Стойка: ноги согнуты в коленях, одна чуть впереди.</li><li>Кисти рук образуют "ковшик" (большие и указательные пальцы образуют треугольник).</li><li>Работа ног: выпрямляете ноги и корпус, толкая мяч вверх.</li><li>Контакт с мячом: касайтесь мяча только фалангами пальцев, никогда не бейте ладонями.</li><li>Упражнение: В паре. Один набрасывает мяч, второй ловит его над собой на поднятые руки (без удара), контролируя положение пальцев.</li></ol>`, 'Ошибки': `<p>Прием на ладони.</p>`, 'Видео / схемы': `<p class="student-video-note">Ссылки на видео скоро появятся.</p>` } },
          { id: 'volley-bottom', title: 'Передача мяча двумя руками снизу', content: { 'Теория': `<p>Прямые руки, прием на предплечья, удар о стену.</p>`, 'Как выполнять': `<ol><li>Стойка: ноги согнуты в коленях, одна чуть впереди.</li><li>Руки прямые, кисти вместе, образуют "площадку".</li><li>Прием мяча на предплечья (между локтем и кистью).</li><li>Работа ног: выпрямляете ноги и корпус, толкая мяч вверх.</li><li>Упражнение: В паре. Один набрасывает мяч, второй принимает его снизу на прямые руки, контролируя положение кистей.</li></ol>`, 'Ошибки': `<p>Согнутые руки.</p>`, 'Видео / схемы': `<p class="student-video-note">Ссылки на видео скоро появятся.</p>` } },
          { id: 'volley-serve', title: 'Подача нижняя прямая', content: { 'Теория': `<p>Исходное положение, подброс, хлесткий удар.</p>`, 'Как выполнять': `<ol><li>Исходное положение: левая нога впереди, мяч в левой руке, правая (бьющая) отведена назад.</li><li>Замах и удар: подбрасываем мяч невысоко (на 20–30 см). Бьющая рука идет снизу вверх, удар наносится основанием ладони точно по центру мяча.</li><li>Упражнение: Начинайте тренироваться у стены, затем в паре через сетку с 3 метров, постепенно отходя дальше.</li></ol>`, 'Ошибки': `<p>Мяч не перелетает сетку.</p>`, 'Видео / схемы': `<p class="student-video-note">Ссылки на видео скоро появятся.</p>` } }
        ]
      },
      // ================= БАСКЕТБОЛ =================
      {
        id: 'st-basket', title: 'Баскетбол', icon: '🏀',
        subtopics: [
          { id: 'basket-stance', title: 'Стойки и перемещения', content: { 'Теория': `<p>Высокая — для отдыха, средняя — для передвижения, низкая — для защиты.</p>`, 'Как выполнять': `<ol><li><strong>Высокая:</strong> ноги прямые, корпус прямой.</li><li><strong>Средняя:</strong> ноги согнуты в коленях, корпус наклонен вперед.</li><li><strong>Низкая:</strong> ноги сильно согнуты в коленях, корпус сильно наклонен вперед.</li><li><strong>Остановка шагом:</strong> делаете шаг вперед, перенося вес на переднюю ногу, задняя нога подтягивается.</li><li><strong>Остановка прыжком:</strong> делаете прыжок, приземляясь на обе ноги одновременно.</li></ol>`, 'Ошибки': `<p>Прямые ноги в стойке.</p>`, 'Видео / схемы': `<p class="student-video-note">Ссылки на видео скоро появятся.</p>` } },
          { id: 'basket-pass', title: 'Передачи', content: { 'Теория': `<p>Основной способ, работа кистей ("кистевой бросок").</p>`, 'Как выполнять': `<ol><li><strong>Двумя руками от груди:</strong> Мяч у груди, локти прижаты. Резкий толчок кистями вперед. Вес тела переносится с задней ноги на переднюю.</li><li><strong>Двумя руками сверху:</strong> Мяч над головой, локти согнуты. Резкий толчок кистями вперед.</li><li><strong>Одной рукой от плеча:</strong> Мяч у плеча, локоть согнут. Резкий толчок кистью вперед.</li></ol>`, 'Ошибки': `<p>Слабый толчок кистями.</p>`, 'Видео / схемы': `<p class="student-video-note">Ссылки на видео скоро появятся.</p>` } },
          { id: 'basket-catch', title: 'Ловля мяча', content: { 'Теория': `<p>Руки вытянуты навстречу мячу, пальцы разведены.</p>`, 'Как выполнять': `<ol><li>Руки вытянуты навстречу мячу, пальцы разведены.</li><li>Мяч ловится на уровне груди.</li><li>Руки сгибаются в локтях, гася скорость мяча.</li></ol>`, 'Ошибки': `<p>Мяч отскакивает от рук.</p>`, 'Видео / схемы': `<p class="student-video-note">Ссылки на видео скоро появятся.</p>` } },
          { id: 'basket-dribble', title: 'Ведение мяча', content: { 'Теория': `<p>Мяч должен отскакивать не выше пояса. Смотреть нужно не на мяч, а вперед (голова поднята!).</p>`, 'Как выполнять': `<ol><li>Мяч отскакивает не выше пояса.</li><li>Смотреть нужно не на мяч, а вперед (голова поднята!).</li><li>Ведение выполняется одной рукой, контролируя высоту отскока.</li><li>Обводка препятствий выполняется одной рукой, контролируя высоту отскока.</li><li>Ведение по кругу выполняется одной рукой, контролируя высоту отскока.</li></ol>`, 'Ошибки': `<p>Взгляд на мяч.</p>`, 'Видео / схемы': `<p class="student-video-note">Ссылки на видео скоро появятся.</p>` } },
          { id: 'basket-shot', title: 'Броски мяча', content: { 'Теория': `<p>Мяч у груди, локти прижаты.</p>`, 'Как выполнять': `<ol><li><strong>Двумя руками от груди:</strong> Мяч у груди, локти прижаты. Резкий толчок кистями вперед. Вес тела переносится с задней ноги на переднюю.</li><li><strong>Одной от плеча:</strong> Мяч у плеча, локоть согнут. Резкий толчок кистью вперед.</li><li><strong>Под углом к щиту в движении:</strong> Использование щита для увеличения точности броска. Бросок выполняется под углом к щиту в движении с близкого расстояния.</li></ol>`, 'Ошибки': `<p>Бросок без работы ног.</p>`, 'Видео / схемы': `<p class="student-video-note">Ссылки на видео скоро появятся.</p>` } },
          { id: 'basket-combo', title: 'Сочетание приемов "передача-ловля-ведение-бросок"', content: { 'Теория': `<p>Комплексное выполнение всех элементов в движении.</p>`, 'Как выполнять': `<ol><li>Передача: делаете передачу партнеру.</li><li>Ловля: ловите мяч от партнера.</li><li>Ведение: ведете мяч к кольцу.</li><li>Бросок: делаете бросок по кольцу.</li></ol>`, 'Ошибки': `<p>Потеря мяча при переходе от ведения к броску.</p>`, 'Видео / схемы': `<p class="student-video-note">Ссылки на видео скоро появятся.</p>` } }
        ]
      },
      // ================= ПОДВИЖНЫЕ ИГРЫ =================
      {
        id: 'st-mobile', title: 'Подвижные игры', icon: '🎲',
        subtopics: [
          { id: 'game-stroy', title: 'Игры со строевыми командами', content: { 'Теория': `<p>«Кто быстрее в строй», «Построй круг», «Путешествие на корабле», «Река и ров», «У ребят порядок строгий», «Елочки-березки», «Рыбки-крабики».</p>`, 'Как выполнять': `<p>Акцент: Четкое выполнение команд, скорость, дисциплина.</p>`, 'Ошибки': `<p>Толкотня при построении.</p>`, 'Видео / схемы': `<p class="student-video-note">Ссылки на видео скоро появятся.</p>` } },
          { id: 'game-attention', title: 'Игры на внимание', content: { 'Теория': `<p>«Фигуры», «Лес, болото, озеро», «Нос, нос, нос, лоб», «Класс, смирно!», «День и ночь», «Товарищ капитан», «Делай, как я», «Запрещенное движение», «Затейники», «Сделай фигуру», «Зеркало».</p>`, 'Как выполнять': `<p>Акцент: Концентрация, периферическое зрение, скорость реакции на сигнал.</p>`, 'Ошибки': `<p>Выполнение запрещенного движения.</p>`, 'Видео / схемы': `<p class="student-video-note">Ссылки на видео скоро появятся.</p>` } },
          { id: 'game-run', title: 'Игры с бегом', content: { 'Теория': `<p>«Ключи», «Кто быстрее», «Отдай ленту», «Быстро возьми и положи», «Перемени предмет», «Догони свою пару», «Два Мороза», «Совушка», «Докати обруч», «Не замочи ноги», «Успей догнать», «Скворечник», «Найди пару», «Поезд», «Бездомный заяц», «Маяк», «Конники-спортсмены», «Гуси-лебеди», «Пустое место», «Краски», «Свободное место».</p>`, 'Как выполнять': `<p>Акцент: Скоростные качества, ловкость, умение уворачиваться.</p>`, 'Ошибки': `<p>Высокая интенсивность бега без отдыха.</p>`, 'Видео / схемы': `<p class="student-video-note">Ссылки на видео скоро появятся.</p>` } },
          { id: 'game-jump', title: 'Игры с прыжками', content: { 'Теория': `<p>«Пингвины с мячом», «Спрыгни и повернись», «Не наступи», «Волк во рву», «Зайцы в огороде», «Лягушка и цапля», «Воробьи и кошки», «Удочка», «Поймай комара», «С кочки на кочку», «Не попадись», «Салки».</p>`, 'Как выполнять': `<p>Акцент: Прыгучесть, координация, точность приземления.</p>`, 'Ошибки': `<p>Много прыжков подряд.</p>`, 'Видео / схемы': `<p class="student-video-note">Ссылки на видео скоро появятся.</p>` } }
        ]
      }
    ]
  }
};

// Логика отрисовки
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
