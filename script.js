const lightLevel = document.getElementById("lightLevel");
const lightValue = document.getElementById("lightValue");
const lightBulb = document.getElementById("lightBulb");
const buzzer = document.getElementById("buzzer");
const status = document.getElementById("status");
const buzzerSound = document.getElementById("buzzerSound");

let increasing = false;

function updateOutput(value) {
  lightValue.textContent = value;

  if (value < 40) {
    lightBulb.classList.add("on");
    buzzer.classList.add("on");
    status.textContent = "Light is low. Output ON.";
    buzzerSound.play();
  } else {
    lightBulb.classList.remove("on");
    buzzer.classList.remove("off");
    status.textContent = "Light is sufficient. Output OFF.";
    buzzerSound.pause();
    buzzerSound.currentTime = 0;
  }
}

// Auto-change light level every 100ms
setInterval(() => {
  let value = parseInt(lightLevel.value);

  if (increasing) {
    value += 1;
    if (value >= 100) increasing = false;
  } else {
    value -= 1;
    if (value <= 0) increasing = true;
  }

  lightLevel.value = value;
  updateOutput(value);
}, 100);

