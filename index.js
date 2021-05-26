class CountdownTimer {
  constructor ({selector, targetDate}) {
    this.targetDate = targetDate;
    this.refs = this.getRefs(selector);
    this.start();
  }

 
    getRefs(id) {
      const timerRef = document.querySelector(`${id}`);
      const refs = {
      daysRef: timerRef.querySelector(`${id} [data-value="days"]`),
      hoursRef: timerRef.querySelector(`${id} [data-value="hours"]`),
      minsRef: timerRef.querySelector(`${id} [data-value="mins"]`),
      secsRef: timerRef.querySelector(`${id} [data-value="secs"]`),
      }
      return refs;
    }
    
  start() {
      const addNull = function (value) {
        return String(value).padStart(2, '0');
      } 
      const startTimer = setInterval(() => {
        const currentTime = Date.now();
        if (this.targetDate <= currentTime) {
          clearInterval(startTimer);
          return;
        }
      
      const time = this.targetDate - currentTime;
      const days = addNull( Math.floor(time / (1000 * 60 * 60 * 24)));
      const hours = addNull(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      const mins = addNull(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
      const secs = addNull(Math.floor((time % (1000 * 60)) / 1000));
      this.refs.daysRef.textContent = days;
      this.refs.hoursRef.textContent = hours;
      this.refs.minsRef.textContent = mins;
      this.refs.secsRef.textContent = secs;
      }, 1000);
  };
   
  
}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('July 26, 2021'),
});