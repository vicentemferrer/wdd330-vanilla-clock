import TimeInput from "./models/TimeInput.js";
import TimerInterface from "./models/TimerInterface.js";

function app() {
  const countdownDisplay = document.getElementById('countdown');
  const startButton = document.getElementById('startButton');
  const pauseButton = document.getElementById('pauseButton');

  const input = new TimeInput();

  do {
    input.record('Enter a time amount (example: 10 minutes, 5 seconds)');
  } while (!input.compare(/^\d{1,2} minutes?$|^\d{1,4} seconds?$/) || input.compareTime(60 * 60));

  const timer = new TimerInterface(countdownDisplay, input.getTime());

  timer.display();

  startButton.addEventListener('click', () => {
    timer.start();
  });

  pauseButton.addEventListener('click', () => {
    timer.stop();
  });
}

app()