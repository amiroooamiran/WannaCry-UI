const { invoke } = window.__TAURI__.tauri;

let greetInputEl;
let greetMsgEl;

async function greet() {
  // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
  greetMsgEl.textContent = await invoke("greet", { name: greetInputEl.value });
}

window.addEventListener("DOMContentLoaded", () => {
  greetInputEl = document.querySelector("#greet-input");
  greetMsgEl = document.querySelector("#greet-msg");
  document.querySelector("#greet-form").addEventListener("submit", (e) => {
    e.preventDefault();
    greet();
  });
});

// Clock of the Sections
function getCurrentDateTime() {
  var currentDate = new Date();

  var date = currentDate.toLocaleDateString();
  var time = currentDate.toLocaleTimeString();

  return date + ' ' + time;
}

document.getElementById('datetime').innerHTML = getCurrentDateTime();
document.getElementById('datetime2').innerHTML = getCurrentDateTime();


// Create Timer 
function startTimerForDisplay1(durationInSeconds) {
  var timerDisplay = document.getElementById('timer');
  var background = document.getElementById('background');

  var timer = durationInSeconds;
  var days, hours, minutes, seconds;

  var countdown = setInterval(function () {
      days = parseInt(timer / (3600 * 24), 10);
      hours = parseInt((timer % (3600 * 24)) / 3600, 10);
      minutes = parseInt((timer % 3600) / 60, 10);
      seconds = parseInt(timer % 60, 10);

      days = days < 10 ? "0" + days : days;
      hours = hours < 10 ? "0" + hours : hours;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      timerDisplay.innerHTML = days + ":" + hours + ":" + minutes + ":" + seconds;

      if (--timer < 0) {
          clearInterval(countdown);
          timerDisplay.innerHTML = "00:00:00:00";
          background.style.opacity = 1;
      }
  }, 1000);
}

function startTimerForDisplay2(durationInSeconds) {
  var timerDisplay2 = document.getElementById('timer2');
  var background2 = document.getElementById('background2');

  var timer = durationInSeconds;
  var days, hours, minutes, seconds;

  var countdown = setInterval(function () {
      days = parseInt(timer / (3600 * 24), 10);
      hours = parseInt((timer % (3600 * 24)) / 3600, 10);
      minutes = parseInt((timer % 3600) / 60, 10);
      seconds = parseInt(timer % 60, 10);

      days = days < 10 ? "0" + days : days;
      hours = hours < 10 ? "0" + hours : hours;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      timerDisplay2.innerHTML = days + ":" + hours + ":" + minutes + ":" + seconds;

      if (--timer < 0) {
          clearInterval(countdown);
          timerDisplay2.innerHTML = "00:00:00:00";
          background2.style.opacity = 1;
      }
  }, 1000);
}

// Start the timer with 2 days (2 days * 24 hours * 60 minutes * 60 seconds) for timerDisplay
startTimerForDisplay1(2 * 24 * 60 * 60);

// Start the timer with 1 day (1 day * 24 hours * 60 minutes * 60 seconds) for timerDisplay2
startTimerForDisplay2(4 * 24 * 60 * 60);
