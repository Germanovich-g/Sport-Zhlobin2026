const rink = document.getElementById('rink');
const goalie = document.getElementById('goalie');
const puck = document.getElementById('puck');
const scoreDisplay = document.getElementById('scoreDisplay');
const attemptsDisplay = document.getElementById('attemptsDisplay');
const levelDisplay = document.getElementById('levelDisplay');
const resetBtn = document.getElementById('resetGame');
const messageEl = document.getElementById('message');

let score = 0;
let attempts = 5;
let level = 1;
let goaliePosition = 50; 
let goalieInterval;
let isPlaying = true;

// Движение вратаря
function startGoalie() {
  clearInterval(goalieInterval);
  const speed = level === 1 ? 1500 : level === 2 ? 1000 : 600;
  goalieInterval = setInterval(() => {
    goaliePosition = 20 + Math.random() * 60;
    goalie.style.left = goaliePosition + '%';
  }, speed);
}

// Клик по воротам
rink.addEventListener('click', (e) => {
  if (!isPlaying) return;

  const rect = rink.getBoundingClientRect();
  const clickX = e.clientX - rect.left;
  const clickPercent = (clickX / rect.width) * 100;

  // Анимация полета шайбы
  puck.style.bottom = '150px';
  puck.style.left = clickPercent + '%';

  setTimeout(() => {
    // Проверка попадания (если клик в пределах 12% от вратаря)
    if (Math.abs(clickPercent - goaliePosition) < 12) {
      messageEl.textContent = "Вратарь поймал! Попробуй еще раз.";
      messageEl.style.color = '#ef4444';
      puck.style.bottom = '200px';
      puck.style.left = '50%';
    } else {
      // ГОЛ!
      score++;
      scoreDisplay.textContent = score;
      messageEl.textContent = "ГООООЛ! Отличный бросок!";
      messageEl.style.color = '#22c55e';
      puck.style.bottom = '30px'; // Шайба в воротах
      
      // Конфетти (простая анимация)
      rink.style.backgroundColor = '#dcfce7';
      setTimeout(() => { rink.style.backgroundColor = ''; }, 500);
      
      setTimeout(() => {
        puck.style.bottom = '200px';
        puck.style.left = '50%';
      }, 1000);
    }

    attempts--;
    attemptsDisplay.textContent = attempts;

    if (score >= 3) {
      levelUp();
    } else if (attempts === 0) {
      gameOver();
    }
  }, 300); 
});

function levelUp() {
  if (level === 3) {
    messageEl.textContent = "Ты прошел игру! Настоящий профи!";
    messageEl.style.color = '#ffd700';
    endGame();
    return;
  }
  level++;
  score = 0;
  attempts = 5;
  scoreDisplay.textContent = score;
  attemptsDisplay.textContent = attempts;
  levelDisplay.textContent = level;
  messageEl.textContent = `Уровень ${level}! Вратарь стал быстрее!`;
  messageEl.style.color = 'var(--primary)';
  startGoalie();
}

function gameOver() {
  messageEl.textContent = "Игра окончена. Попробуй еще раз!";
  messageEl.style.color = '#ef4444';
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
  messageEl.textContent = "Кликни по воротам, чтобы бросить шайбу!";
  messageEl.style.color = 'var(--primary)';
  resetBtn.style.display = 'none';
  puck.style.bottom = '200px';
  puck.style.left = '50%';
  startGoalie();
});

startGoalie();
