const levels = [
  {
    title: "Дело №1: Пропавший молот",
    intro: "В архиве пропала первая олимпийская медаль, завоеванная уроженцем Беларуси. На месте преступления остались следы.",
    evidenceCount: 3,
    evidenceIcons: ["👤", "🔨", "🏅"],
    questions: [
      { text: "Кто из белорусов первым завоевал олимпийскую медаль (серебро) в 1956 году?", options: ["Михаил Кривоносов", "Виталий Щербо", "Александр Кикинёв"], correct: 0 },
      { text: "Каким снарядом он метал, чтобы подняться на пьедестал?", options: ["Ядро", "Молот", "Копьё"], correct: 1 },
      { text: "В каком виде спорта он выступал?", options: ["Легкая атлетика", "Гимнастика", "Борьба"], correct: 0 }
    ]
  },
  {
    title: "Дело №2: Загадка гимнастического короля",
    intro: "Кто-то стер имя самого титулованного гимнаста из истории. Нужно восстановить справедливость.",
    evidenceCount: 4,
    evidenceIcons: ["👤", "🥇", "🏙️", "📅"],
    questions: [
      { text: "Сколько золотых медалей на одной Олимпиаде завоевал этот белорус?", options: ["4", "5", "6"], correct: 2 },
      { text: "В каком году это произошло?", options: ["1992", "1996", "1988"], correct: 0 },
      { text: "В каком городе проходили те Игры?", options: ["Атланта", "Барселона", "Сеул"], correct: 1 },
      { text: "Как его зовут?", options: ["Виталий Щербо", "Иван Иванков", "Александр Кикинёв"], correct: 0 }
    ]
  },
  {
    title: "Дело №3: Тайна ледовой машины",
    intro: "Пропал кубок самой успешной зимней Олимпиады. Нужно узнать, кто принес 3 золота за одну ночь.",
    evidenceCount: 4,
    evidenceIcons: ["🎿", "📅", "🥇", "👤"],
    questions: [
      { text: "В каком виде спорта выступала эта спортсменка?", options: ["Биатлон", "Лыжные гонки", "Фигурное катание"], correct: 0 },
      { text: "В каком году она стала Героем Беларуси?", options: ["2010", "2014", "2018"], correct: 1 },
      { text: "Сколько золотых медалей она взяла в Сочи?", options: ["2", "3", "4"], correct: 1 },
      { text: "Как её зовут?", options: ["Дарья Домрачева", "Надежда Скардино", "Ирина Кривко"], correct: 0 }
    ]
  },
  {
    title: "Дело №4: Сенсация на беговой дорожке",
    intro: "Кто-то украл «молнию» с дорожки. Нужно вычислить чемпионку по подсказкам.",
    evidenceCount: 3,
    evidenceIcons: ["🏃‍♀️", "⚡", "👤"],
    questions: [
      { text: "Какую дистанцию она пробежала быстрее всех в Афинах?", options: ["100 метров", "200 метров", "400 метров"], correct: 0 },
      { text: "Какое прозвище ей дали журналисты?", options: ["Белорусская молния", "Золотая рыбка", "Королева скорости"], correct: 0 },
      { text: "Как её зовут?", options: ["Юлия Нестеренко", "Ольга Богословская", "Татьяна Ледовская"], correct: 0 }
    ]
  },
  {
    title: "Дело №5: Фристайл: Полет в неизвестность",
    intro: "Исчез шлем первого зимнего чемпиона. Нужно найти героя.",
    evidenceCount: 3,
    evidenceIcons: ["⛷️", "📅", "👤"],
    questions: [
      { text: "В каком виде спорта белорусы прыгают через трамплины?", options: ["Фристайл", "Прыжки с трамплина", "Сноуборд"], correct: 0 },
      { text: "Кто взял первое золото для Беларуси на зимних Играх в 2010 году?", options: ["Алексей Гришин", "Дмитрий Дащинский", "Антон Кушнир"], correct: 0 },
      { text: "В каком городе это было?", options: ["Ванкувер", "Турин", "Сочи"], correct: 0 }
    ]
  },
  {
    title: "Дело №6: Золото Сеула и хруст мяча",
    intro: "Украдены реликвии командных видов спорта. Нужно вернуть и гандбольный мяч, и баскетбольный щит.",
    evidenceCount: 5,
    evidenceIcons: ["🤾", "🏀", "👤", "🏅", "🏙️"],
    questions: [
      { text: "Какая команда выиграла золото Олимпиады-1988 в Сеуле?", options: ["Гандболисты СКА Минск", "Баскетболисты СССР", "Волейболисты СССР"], correct: 0 },
      { text: "Кто тренировал ту легендарную команду?", options: ["Спартак Миронович", "Анатолий Кожевников", "Владимир Кондрашин"], correct: 0 },
      { text: "В каком виде спорта выступала Нелли Ким?", options: ["Гимнастика", "Плавание", "Легкая атлетика"], correct: 0 },
      { text: "Кто из баскетболистов стал олимпийским чемпионом в составе сборной СССР?", options: ["Иван Едешко", "Сергей Белов", "Александр Волков"], correct: 0 },
      { text: "В каком городе проходил финал баскетбольного турнира Олимпиады-1972?", options: ["Мюнхен", "Монреаль", "Москва"], correct: 0 }
    ]
  },
  {
    title: "Дело №7: Дело о Золотой Бутсе",
    intro: "Главный артефакт — Золотая Бутса. Она заперта в главном сейфе НОК. Пройди супер-тест!",
    evidenceCount: 10,
    evidenceIcons: ["👟", "⚽", "🥇", "🏆", "🔥", "🌟", "🎯", "💎", "👑", "🏁"],
    questions: [
      { text: "Кто забил победный гол в финале Кубка обладателей кубков 1982 года?", options: ["Сергей Алейников", "Юрий Пудышев", "Игорь Гуринович"], correct: 0 },
      { text: "Какой клуб представлял Минск в том финале?", options: ["Динамо Минск", "Торпедо Минск", "СКА Минск"], correct: 0 },
      { text: "В каком городе проходил финал 1982 года?", options: ["Барселона", "Мадрид", "Лиссабон"], correct: 0 },
      { text: "Сколько золотых медалей у Дарьи Домрачевой в Сочи?", options: ["2", "3", "1"], correct: 1 },
      { text: "В каком году Виталий Щербо выиграл 6 золотых медалей?", options: ["1988", "1992", "1996"], correct: 1 },
      { text: "Кто из белорусов стал первым олимпийским чемпионом в метании молота?", options: ["Михаил Кривоносов", "Юрий Седых", "Сергей Литвинов"], correct: 0 },
      { text: "В каком году Юлия Нестеренко выиграла золото в Афинах?", options: ["2000", "2004", "2008"], correct: 1 },
      { text: "Какой вид спорта прославил Алексей Гришин?", options: ["Фристайл", "Биатлон", "Хоккей"], correct: 0 },
      { text: "Сколько олимпийских чемпионов воспитала жлобинская СДЮШОР?", options: ["1", "2", "3"], correct: 2 },
      { text: "Какая команда выиграла золото Олимпиады-1988 в Сеуле?", options: ["Гандболисты СКА", "Баскетболисты СССР", "Волейболисты СССР"], correct: 0 }
    ]
  }
];

let currentLevel = 0;
let currentQuestionIndex = 0;
let collectedEvidence = 0;
let answeredCorrectly = false;

const levelTitleEl = document.getElementById('levelTitle');
const progressEl = document.getElementById('progress');
const caseTextEl = document.getElementById('caseText');
const evidenceBoardEl = document.getElementById('evidenceBoard');
const questionTextEl = document.getElementById('questionText');
const optionsContainer = document.getElementById('optionsContainer');
const resultMessage = document.getElementById('resultMessage');
const nextLevelBtn = document.getElementById('nextLevelBtn');

function initLevel() {
  const level = levels[currentLevel];
  currentQuestionIndex = 0;
  collectedEvidence = 0;
  answeredCorrectly = false;
  
  levelTitleEl.textContent = level.title;
  caseTextEl.textContent = level.intro;
  progressEl.textContent = `Улики: 0 / ${level.evidenceCount}`;
  resultMessage.textContent = "";
  nextLevelBtn.style.display = 'none';
  
  // Отрисовка пустых улик
  evidenceBoardEl.innerHTML = '';
  for (let i = 0; i < level.evidenceCount; i++) {
    const div = document.createElement('div');
    div.className = 'evidence-item';
    div.id = `evidence-${i}`;
    div.textContent = '?';
    evidenceBoardEl.appendChild(div);
  }
  
  loadQuestion();
}

function loadQuestion() {
  const level = levels[currentLevel];
  const question = level.questions[currentQuestionIndex];
  
  questionTextEl.textContent = question.text;
  optionsContainer.innerHTML = '';
  
  question.options.forEach((option, index) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.textContent = option;
    btn.onclick = () => checkAnswer(index, btn);
    optionsContainer.appendChild(btn);
  });
}

function checkAnswer(selectedIndex, btn) {
  if (answeredCorrectly) return;
  
  const level = levels[currentLevel];
  const question = level.questions[currentQuestionIndex];
  
  // Блокируем все кнопки
  document.querySelectorAll('.option-btn').forEach(b => b.disabled = true);
  
  if (selectedIndex === question.correct) {
    btn.classList.add('correct');
    resultMessage.textContent = "✅ Верно! Улика найдена!";
    resultMessage.style.color = "#22c55e";
    
    // Активируем улику
    const evidenceEl = document.getElementById(`evidence-${collectedEvidence}`);
    if (evidenceEl) {
      evidenceEl.classList.add('active');
      evidenceEl.textContent = level.evidenceIcons[collectedEvidence];
    }
    
    collectedEvidence++;
    progressEl.textContent = `Улики: ${collectedEvidence} / ${level.evidenceCount}`;
    
    setTimeout(() => {
      if (collectedEvidence === level.evidenceCount) {
        finishLevel();
      } else {
        currentQuestionIndex++;
        if (currentQuestionIndex < level.questions.length) {
          loadQuestion();
        }
      }
    }, 1000);
    
  } else {
    btn.classList.add('incorrect');
    resultMessage.textContent = "❌ Ошибка! Попробуйте еще раз.";
    resultMessage.style.color = "#ef4444";
    
    setTimeout(() => {
      btn.classList.remove('incorrect');
      document.querySelectorAll('.option-btn').forEach(b => b.disabled = false);
    }, 1000);
  }
}

function finishLevel() {
  resultMessage.textContent = "🕵️‍♂️ Дело раскрыто! Вы собрали все улики!";
  resultMessage.style.color = "#fbbf24";
  
  if (currentLevel < levels.length - 1) {
    nextLevelBtn.style.display = 'block';
    nextLevelBtn.onclick = () => {
      currentLevel++;
      initLevel();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  } else {
    nextLevelBtn.style.display = 'block';
    nextLevelBtn.textContent = "Вы раскрыли все дела! 🏆";
    nextLevelBtn.disabled = true;
  }
}

// Запуск
initLevel();
