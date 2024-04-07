let startTime;
let timer;

document.getElementById('text').addEventListener('input', function() {
  if (!startTime) {
    startTime = new Date().getTime();
    timer = setInterval(updateTimer, 1000);
  }
});

function updateTimer() {
  let currentTime = new Date().getTime();
  let elapsedTime = new Date(currentTime - startTime);
  let hours = elapsedTime.getUTCHours().toString().padStart(2, '0');
  let minutes = elapsedTime.getUTCMinutes().toString().padStart(2, '0');
  let seconds = elapsedTime.getUTCSeconds().toString().padStart(2, '0');
  document.getElementById('timer').textContent = `${hours}:${minutes}:${seconds}`;
}
  
const input = document.getElementById('input');
const wordCount = document.getElementById('wordCount');
const charCount = document.getElementById('charCount');

input.addEventListener('input', function() {
    let text = input.value.trim();
    wordCount.textContent = text.split(/\s+/).filter(Boolean).length;
    charCount.textContent = text.replace(/\s/g,'').length;
});





input.addEventListener('input', function() {
    let text = input.value.trim();
    wordCount.textContent = text.split(/\s+/).filter(Boolean).length;
    charCount.textContent = text.replace(/\s/g,'').length;
});
