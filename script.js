let startTime = 0;
let elapsed = 0;
let interval = null;
let lapCount = 0;

const timerDisplay = document.getElementById("timer");
const lapsTable = document.getElementById("lapsTable");

function formatTime(ms) {
  const totalSeconds = Math.floor(ms / 1000);
  const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
  const seconds = String(totalSeconds % 60).padStart(2, "0");
  return `${hours}:${minutes}:${seconds}`;
}

function updateDisplay() {
  const current = Date.now() - startTime + elapsed;
  timerDisplay.textContent = formatTime(current);
}

function startTimer() {
  if (interval) return;
  startTime = Date.now();
  interval = setInterval(updateDisplay, 500);
}

function pauseTimer() {
  if (!interval) return;
  elapsed += Date.now() - startTime;
  clearInterval(interval);
  interval = null;
}

function stopTimer() {
  pauseTimer();
  elapsed = 0;
  timerDisplay.textContent = "00:00:00";
}

function resetTimer() {
  pauseTimer();
  elapsed = 0;
  lapCount = 0;
  timerDisplay.textContent = "00:00:00";
  lapsTable.innerHTML = "";
}

function lapTime() {
  if (!interval) return;
  const current = Date.now() - startTime + elapsed;
  lapCount++;
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${lapCount}</td>
    <td>${formatTime(current)}</td>
  `;
  lapsTable.appendChild(row);
}
