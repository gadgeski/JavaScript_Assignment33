const progressBar = document.getElementById("progressBar");
const startButton = document.getElementById("startButton");
const resetButton = document.getElementById("resetButton");
const messageDisplay = document.getElementById("message");

let progress = 0;
let intervalId;

function startProgress() {
  startButton.disabled = true;
  resetButton.disabled = false;
  messageDisplay.textContent = "";

  // プログレスバーの幅をリセット
  progress = 0;
  progressBar.style.width = "0%";
  progressBar.textContent = "0%";

  intervalId = setInterval(() => {
    if (progress < 100) {
      progress += 1; // 1%ずつ増加
      progressBar.style.width = `${progress}%`;
      progressBar.textContent = `${progress}%`;
    } else {
      clearInterval(intervalId); // 100%になったら停止
      messageDisplay.textContent = "完了しました！";
      startButton.disabled = false; // 再度開始可能にする
    }
  }, 50); // 50ミリ秒ごとに更新
}

function resetProgress() {
  clearInterval(intervalId);
  progress = 0;
  progressBar.style.width = "0%";
  progressBar.textContent = "0%";
  messageDisplay.textContent = "";
  startButton.disabled = false;
  resetButton.disabled = true;
}

startButton.addEventListener("click", startProgress);
resetButton.addEventListener("click", resetProgress);
