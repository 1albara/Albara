let timer;
let timeLeft = 30 * 60; // 30 minutes in seconds

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
}

function updateTimer() {
  const timerElement = document.getElementById('timer');
  timerElement.textContent = formatTime(timeLeft);

  if (timeLeft === 0) {
    clearInterval(timer);
    alert('Timer is up!');
  }
}

document.getElementById('resetButton').addEventListener('click', () => {
  clearInterval(timer);
  timeLeft = 30 * 60;
  updateTimer();
});

updateTimer();
timer = setInterval(() => {
  if (timeLeft > 0) {
    timeLeft--;
    updateTimer();
  }
}, 1000);
