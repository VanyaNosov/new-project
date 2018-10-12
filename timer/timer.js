class Timer {
  constructor(step) {
    this.time = 0;
    this.step = step;
}
  timer() {
    this.time = this.time + this.step;
    return this.time;
  }

  stop() {
    this.time = 0;
    return this.time
  }
}

const time = new Timer(1);

const interval = setInterval(() => {
  const currentTime = time.timer();
  console.log(currentTime)
  if (currentTime === 10) clearInterval(interval);
}, 1000);
