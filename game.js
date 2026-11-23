const rink = document.getElementById('rink');
const goalie = document.getElementById('goalie');
const puck = document.getElementById('puck');
const scoreDisplay = document.getElementById('scoreDisplay');
const attemptsDisplay = document.getElementById('attemptsDisplay');
const levelDisplay = document.getElementById('levelDisplay');
const resetBtn = document.getElementById('resetGame');

let score = 0;
let attempts = 5;
let level = 1;
let goaliePosition = 50; // Проценты (центр)
let goalieInterval;
let isPlaying = true;

// Движение вратаря
function startGoalie() {
  clearInterval(goalieInterval);
  const speed = level === 1 ? 1200 : level === 2 ? 800 : 400; // Уровень сложности
  goalieInterval = setInterval(() => {
    // Двигаем вратаря случайно влево-вправо (от 20% до 80%)
    goaliePosition = 20 + Math.random() * 60;
    goalie.style.left = goaliePosition + '%';
  }, speed);
}

// Клик по воротам (бросок)
rink.addEventListener('click', (e) => {
  if (!isPlaying) return;

  // Получаем координаты клика относительно льда
  const rect = rink.getBoundingClientRect();
  const clickX = e.clientX - rect.left;
  const clickPercent = (clickX / rect.width) * 100;

  // Анимация полета шайбы
  puck.style.bottom = '150px';
  puck.style.left = clickPercent + '%';

  // Проверка: попал ли в вратаря?
  setTimeout(() => {
    // Если клик был в зоне вратаря (+/- 10%)
    if (Math.abs(clickPercent - goaliePosition) < 12) {
      // Вратарь поймал
      alert('Вратарь поймал!');
      puck.style.bottom = '200px';
      puck.style.left = '50%';
    } else {
      // ГОЛ!
      score++;
      scoreDisplay.textContent = score;
      puck.style.bottom = '40px'; // Шайба в воротах
      alert('ГООООЛ!');
      
      // Сброс шайбы на исходную через секунду
      setTimeout(() => {
        puck.style.bottom = '200px';
        puck.style.left = '50%';
      }, 1000);
    }

    attempts--;
    attemptsDisplay.textContent = attempts;

    // Проверка на конец уровня
    if (score >= 3) {
      levelUp();
    } else if (attempts === 0) {
      gameOver();
    }
  }, 300); // Задержка на полет
});

function levelUp() {
  if (level === 3) {
    alert('Ты прошел игру! Настоящий профи!');
    endGame();
    return;
  }
  level++;
  score = 0;
  attempts = 5;
  scoreDisplay.textContent = score;
  attemptsDisplay.textContent = attempts;
  levelDisplay.textContent = level;
  alert(`Уровень ${level}! Вратарь стал быстрее!`);
  startGoalie();
}

function gameOver() {
  alert('Попытки закончились. Игра окончена!');
  endGame();
}

function endGame() {
  isPlaying = false;
  clearInterval(goalieInterval);
  resetBtn.style.display = 'inline-block';
}

resetBtn.addEventListener('click', () => {
  score = 0;
  attempts = 5;
  level = 1;
  isPlaying = true;
  scoreDisplay.textContent = score;
  attemptsDisplay.textContent = attempts;
  levelDisplay.textContent = level;
  resetBtn.style.display = 'none';
  startGoalie();
});

// Запуск игры
startGoalie();