const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];

const refs = {
  bodyRef: document.querySelector('body'),
  startBtnRef: document.querySelector('button[data-action="start"]'),
  stoptBtnRef: document.querySelector('button[data-action="stop"]'),
}  

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const colorSwitch = {
  intervalId: null,
  isActive: false,
  start() {
    if (this.isActive) {
      return;
    }

    this.isActive = true;
    this.intervalId = setInterval(() => {
      refs.bodyRef.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length-1)];
    }, 1000);
  },

  stop() {
    clearInterval(this.intervalId);
    this.isActive = false;
  },
};

refs.startBtnRef.addEventListener('click', () => {
  colorSwitch.start();
});

refs.stoptBtnRef.addEventListener('click', () => {
  colorSwitch.stop();
});



