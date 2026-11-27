const levels = [
  {
    title: "Дело №1: Пропавший молот",
    intro: "В архиве пропала первая олимпийская медаль, завоеванная уроженцем Беларуси. На месте преступления остались следы.",
    evidenceCount: 3,
    evidenceIcons: ["👤", "🔨", "🏅"],
    questions: [
      { text: "Кто из белорусов первым завоевал олимпийскую медаль (серебро) в 1956 году?", options: ["Михаил Кривоносов", "Виталий Щербо", "Александр Кикинёв"], correct: 0, explanation: "Виталий Щербо и Александр Кикинёв — великие спортсмены, но они прославились позже. А Михаил Кривоносов взял серебро в Мельбурне." },
      { text: "Каким снарядом он метал, чтобы подняться на пьедестал?", options: ["Ядро", "Молот", "Копьё"], correct: 1, explanation: "Кривоносов был метателем молота. Ядро и копьё — это другие легкоатлетические снаряды, которые метают совершенно по-другому." },
      { text: "В каком виде спорта он выступал?", options: ["Легкая атлетика", "Гимнастика", "Борьба"], correct: 0, explanation: "Метание молота относится к легкой атлетике. Гимнастика и борьба — это совсем другие виды спорта, требующие иных навыков." }
    ]
  },
  {
    title: "Дело №2: Загадка гимнастического короля",
    intro: "Кто-то стер имя самого титулованного гимнаста из истории. Нужно восстановить справедливость.",
    evidenceCount: 4,
    evidenceIcons: ["👤", "🥇", "🏙️", "📅"],
    questions: [
      { text: "Сколько золотых медалей на одной Олимпиаде завоевал этот белорус?", options: ["4", "5", "6"], correct: 2, explanation: "Виталий Щербо установил мировой рекорд, выиграв 6 золотых медалей на одной Олимпиаде в 1992 году." },
      { text: "В каком году это произошло?", options: ["1992", "1996", "1988"], correct: 0, explanation: "Это была Олимпиада в Барселоне 1992 года, где Щербо выступал за Объединенную команду." },
      { text: "В каком городе проходили те Игры?", options: ["Атланта", "Барселона", "Сеул"], correct: 1, explanation: "Игры 1992 года проходили в столице Каталонии — Барселоне. Атланта была в 1996, Сеул — в 1988." },
      { text: "Как его зовут?", options: ["Виталий Щербо", "Иван Иванков", "Александр Кикинёв"], correct: 0, explanation: "Иван Иванков и Александр Кикинёв — тоже известные гимнасты, но именно Виталий Щербо стал шестикратным чемпионом." }
    ]
  },
  {
    title: "Дело №3: Тайна ледовой машины",
    intro: "Пропал кубок самой успешной зимней Олимпиады. Нужно узнать, кто принес 3 золота за одну ночь.",
    evidenceCount: 4,
    evidenceIcons: ["🎿", "📅", "🥇", "👤"],
    questions: [
      { text: "В каком виде спорта выступала эта спортсменка?", options: ["Биатлон", "Лыжные гонки", "Фигурное катание"], correct: 0, explanation: "Дарья Домрачева — легенда белорусского биатлона, а не лыжных гонок или фигурного катания." },
      { text: "В каком году она стала Героем Беларуси?", options: ["2010", "2014", "2018"], correct: 1, explanation: "Звание Героя Беларуси ей присвоили после триумфа в Сочи в 2014 году." },
      { text: "Сколько золотых медалей она взяла в Сочи?", options: ["2", "3", "4"], correct: 1, explanation: "В Сочи-2014 Домрачева выиграла три золотые медали, став первой в истории женщиной с таким результатом на одной зимней Олимпиаде." },
      { text: "Как её зовут?", options: ["Дарья Домрачева", "Надежда Скардино", "Ирина Кривко"], correct: 0, explanation: "Надежда Скардино и Ирина Кривко — тоже биатлонистки, но именно Дарья Домрачева принесла Беларуси три золота в Сочи." }
    ]
  },
  {
    title: "Дело №4: Сенсация на беговой дорожке",
    intro: "Кто-то украл «молнию» с дорожки. Нужно вычислить чемпионку по подсказкам.",
    evidenceCount: 3,
    evidenceIcons: ["🏃‍♀️", "⚡", "👤"],
    questions: [
      { text: "Какую дистанцию она пробежала быстрее всех в Афинах?", options: ["100 метров", "200 метров", "400 метров"], correct: 0, explanation: "Юлия Нестеренко выиграла золото в беге на 100 метров в 2004 году." },
      { text: "Какое прозвище ей дали журналисты?", options: ["Белорусская молния", "Золотая рыбка", "Королева скорости"], correct: 0, explanation: "За феноменальную скорость и неожиданную победу её прозвали «Белорусской молнией»." },
      { text: "Как её зовут?", options: ["Юлия Нестеренко", "Ольга Богословская", "Татьяна Ледовская"], correct: 0, explanation: "Ольга Богословская и Татьяна Ледовская — известные белорусские легкоатлетки, но золото Афин взяла Юлия Нестеренко." }
    ]
  },
  {
    title: "Дело №5: Фристайл: Полет в неизвестность",
    intro: "Исчез шлем первого зимнего чемпиона. Нужно найти героя.",
    evidenceCount: 3,
    evidenceIcons: ["⛷️", "📅", "👤"],
    questions: [
      { text: "В каком виде спорта белорусы прыгают через трамплины?", options: ["Фристайл", "Прыжки с трамплина", "Сноуборд"], correct: 0, explanation: "Белорусские спортсмены прославились именно во фристайле (лыжная акробатика), а не в классических прыжках с трамплина." },
      { text: "Кто взял первое золото для Беларуси на зимних Играх в 2010 году?", options: ["Алексей Гришин", "Дмитрий Дащинский", "Антон Кушнир"], correct: 0, explanation: "Алексей Гришин завоевал первое в истории суверенной Беларуси золото зимних Олимпиад в Ванкувере." },
      { text: "В каком городе это было?", options: ["Ванкувер", "Турин", "Сочи"], correct: 0, explanation: "Это произошло в канадском Ванкувере в 2010 году. Турин был в 2006, Сочи — в 2014." }
    ]
  },
  {
    title: "Дело №6: Золото Сеула и хруст мяча",
    intro: "Украдены реликвии командных видов спорта. Нужно вернуть и гандбольный мяч, и баскетбольный щит.",
    evidenceCount: 5,
    evidenceIcons: ["🤾", "🏀", "👤", "🏅", "🏙️"],
    questions: [
      { text: "Какая команда выиграла золото Олимпиады-1988 в Сеуле?", options: ["Гандболисты СКА Минск", "Баскетболисты СССР", "Волейболисты СССР"], correct: 0, explanation: "Легендарная команда СКА (Минск) под руководством Спартака Мироновича выиграла золото в Сеуле." },
      { text: "Кто тренировал ту легендарную команду?", options: ["Спартак Миронович", "Анатолий Кожевников", "Владимир Кондрашин"], correct: 0, explanation: "Именно Спартак Миронович создал ту великую команду, которая до сих пор является примером для гандболистов." },
      { text: "В каком виде спорта выступала Нелли Ким?", options: ["Гимнастика", "Плавание", "Легкая атлетика"], correct: 0, explanation: "Нелли Ким — советская гимнастка, пятикратная олимпийская чемпионка, которая родилась в Беларуси." },
      { text: "Кто из баскетболистов стал олимпийским чемпионом в составе сборной СССР?", options: ["Иван Едешко", "Сергей Белов", "Александр Волков"], correct: 0, explanation: "Иван Едешко известен своим легендарным пасом через всю площадку в финале Мюнхена-1972." },
      { text: "В каком городе проходил финал баскетбольного турнира Олимпиады-1972?", options: ["Мюнхен", "Монреаль", "Москва"], correct: 0, explanation: "Тот самый драматичный финал с участием СССР и США прошел в Мюнхене в 1972 году." }
    ]
  },
  {
    title: "Дело №7: Дело о Золотой Бутсе",
    intro: "Главный артефакт — Золотая Бутса. Она заперта в главном сейфе НОК. Пройди супер-тест!",
    evidenceCount: 10,
    evidenceIcons: ["👟", "⚽", "🥇", "🏆", "🔥", "🌟", "🎯", "💎", "👑", "🏁"],
    questions: [
      { text: "Кто забил победный гол в финале Кубка обладателей кубков 1982 года?", options: ["Сергей Алейников", "Юрий Пудышев", "Игорь Гуринович"], correct: 0, explanation: "Сергей Алейников забил тот самый исторический гол, который принес минскому «Динамо» европейский трофей." },
      { text: "Какой клуб представлял Минск в том финале?", options: ["Динамо Минск", "Торпедо Минск", "СКА Минск"], correct: 0, explanation: "Это было минское «Динамо», которое в 1982 году стало первым советским клубом, выигравшим европейский турнир." },
      { text: "В каком городе проходил финал 1982 года?", options: ["Барселона", "Мадрид", "Лиссабон"], correct: 0, explanation: "Финал проходил в Барселоне на стадионе «Камп Ноу»." },
      { text: "Сколько золотых медалей у Дарьи Домрачевой в Сочи?", options: ["2", "3", "1"], correct: 1, explanation: "Три золота в Сочи сделали её первой в истории женщиной-биатлонисткой с таким достижением." },
      { text: "В каком году Виталий Щербо выиграл 6 золотых медалей?", options: ["1988", "1992", "1996"], correct: 1, explanation: "Это произошло в 1992 году в Барселоне, где он установил абсолютный рекорд." },
      { text: "Кто из белорусов стал первым олимпийским чемпионом в метании молота?", options: ["Михаил Кривоносов", "Юрий Седых", "Сергей Литвинов"], correct: 0, explanation: "Михаил Кривоносов взял серебро в 1956-м, а золото в метании молота первым из белорусов завоевал именно он." },
      { text: "В каком году Юлия Нестеренко выиграла золото в Афинах?", options: ["2000", "2004", "2008"], correct: 1, explanation: "Это была Олимпиада 2004 года в Афинах, где она сенсационно победила на 100-метровке." },
      { text: "Какой вид спорта прославил Алексей Гришин?", options: ["Фристайл", "Биатлон", "Хоккей"], correct: 0, explanation: "Алексей Гришин — фристайлист, первый в истории Беларуси зимний олимпийский чемпион." },
      { text: "Сколько олимпийских чемпионов воспитала жлобинская СДЮШОР?", options: ["1", "2", "3"], correct: 2, explanation: "СДЮШОР Жлобина воспитала трех олимпийцев: Игоря Петренко, Александра Кикинёва и Юрия Дубинина." },
      { text: "Какая команда выиграла золото Олимпиады-1988 в Сеуле?", options: ["Гандболисты СКА", "Баскетболисты СССР", "Волейболисты СССР"], correct: 0, explanation: "Это были гандболисты минского СКА, которые принесли Беларуси олимпийское золото." }
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
  resultMessage.innerHTML = "";
  resultMessage.classList.remove('show');
  resultMessage.style.background = "transparent";
  resultMessage.style.border = "none";
  nextLevelBtn.style.display = 'none';
  
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
  
  document.querySelectorAll('.option-btn').forEach(b => b.disabled = true);
  
  if (selectedIndex === question.correct) {
    btn.classList.add('correct');
    
    // Показываем зеленую подсказку "Верно"
    resultMessage.innerHTML = "✅ Верно! Улика найдена!";
    resultMessage.classList.add('show');
    resultMessage.style.background = "#dcfce7";
    resultMessage.style.color = "#166534";
    resultMessage.style.borderLeft = "5px solid #22c55e";
    
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
    }, 1500);
    
  } else {
    btn.classList.add('incorrect');
    
    // Показываем красную подсказку с объяснением
    resultMessage.innerHTML = `❌ Ошибка!<br><span style="font-size: 0.95rem; font-weight: normal; margin-top: 5px; display: block;">${question.explanation}</span>`;
    resultMessage.classList.add('show');
    resultMessage.style.background = "#fee2e2";
    resultMessage.style.color = "#991b1b";
    resultMessage.style.borderLeft = "5px solid #ef4444";
    
    setTimeout(() => {
      btn.classList.remove('incorrect');
      document.querySelectorAll('.option-btn').forEach(b => b.disabled = false);
    }, 800);
  }
}

function finishLevel() {
  resultMessage.innerHTML = "🕵️‍♂️ Дело раскрыто! Вы собрали все улики!";
  resultMessage.classList.add('show');
  resultMessage.style.background = "#fef3c7";
  resultMessage.style.color = "#92400e";
  resultMessage.style.borderLeft = "5px solid #f59e0b";
  
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

initLevel();
