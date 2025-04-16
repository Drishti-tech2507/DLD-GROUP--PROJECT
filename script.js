const lightBulb = document.getElementById("lightBulb");
const buzzer = document.getElementById("buzzer");
const status = document.getElementById("status");
const lightValue = document.getElementById("lightValue");
const buzzerSound = document.getElementById("buzzerSound");
const slider = document.getElementById("lightLevel");

function simulateLight() {
  const value = slider.value;
  lightValue.textContent = value;

  if (value < 40) {
    lightBulb.classList.add("on");
    buzzer.classList.add("on");
    status.textContent = "It's dark. Output ON: Light/Buzzer activated.";
    buzzerSound.play();
  } else {
    lightBulb.classList.remove("on");
    buzzer.classList.remove("on");
    status.textContent = "Light is sufficient. Output OFF.";
    buzzerSound.pause();
    buzzerSound.currentTime = 0;
  }
}

slider.addEventListener("input", simulateLight);
simulateLight();
