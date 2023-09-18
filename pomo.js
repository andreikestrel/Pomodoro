// pomo.js

// Variáveis globais
let minutos = 25;
let segundos = 0;
let intervalId;
let isPaused = false;

const minutosSpan = document.getElementById("minutos");
const segundosSpan = document.getElementById("secundos");
const focoButton = document.getElementById("foco");
const curtoButton = document.getElementById("curto");
const longoButton = document.getElementById("longo");
const pauseButton = document.getElementById("pause");
const stopButton = document.getElementById("stop");

function iniciarTimer() {
  intervalId = setInterval(atualizarTempo, 1000);
  focoButton.style.display = "none";
  curtoButton.style.display = "none";
  longoButton.style.display = "none";
  pauseButton.style.display = "block";
  pauseButton.textContent = "Pause";
  stopButton.style.display = "block";
}

function pausarTimer() {
  clearInterval(intervalId);
  isPaused = true;
  pauseButton.textContent = "Play";
  stopButton.style.display = "block";
  focoButton.style.display = "none";
  curtoButton.style.display = "none";
  longoButton.style.display = "none";
}

function retomarTimer() {
  isPaused = false;
  pauseButton.textContent = "Pause";
  iniciarTimer();
}

function atualizarTempo() {
  if (!isPaused) {
    if (segundos === 0) {
      if (minutos === 0) {
        clearInterval(intervalId);
        alert("Acabou o tempo :)");
        resetarTimer();
        return;
      } else {
        minutos--;
        segundos = 59;
      }
    } else {
      segundos--;
    }
    minutosSpan.textContent = minutos < 10 ? "0" + minutos : minutos;
    segundosSpan.textContent = segundos < 10 ? "0" + segundos : segundos;
  }
}

function resetarTimer() {
  minutos = 25;
  segundos = 0;
  minutosSpan.textContent = "25";
  segundosSpan.textContent = "00";
  clearInterval(intervalId);
  focoButton.style.display = "block";
  curtoButton.style.display = "block";
  longoButton.style.display = "block";
  pauseButton.style.display = "none";
  pauseButton.textContent = "Pause";
  stopButton.style.display = "none";
}

focoButton.addEventListener("click", function () {
  minutos = 25;
  minutosSpan.textContent = "25";
  iniciarTimer();
});

curtoButton.addEventListener("click", function () {
  minutos = 5;
  minutosSpan.textContent = "05";
  iniciarTimer();
});

longoButton.addEventListener("click", function () {
  minutos = 15;
  minutosSpan.textContent = "15";
  iniciarTimer();
});

pauseButton.addEventListener("click", function () {
  if (isPaused) {
    retomarTimer();
  } else {
    pausarTimer();
  }
});

stopButton.addEventListener("click", function () {
  resetarTimer();
});
