class CountdownTimer {
  constructor ({selector, targetDate}) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.refs = this.getRefs(selector);
    this.start();
  }

 
    getRefs(id) {
      const refs = {
      daysRef: document.querySelector(`${id} [data-value="days"]`),
      hoursRef: document.querySelector(`${id} [data-value="hours"]`),
      minsRef: document.querySelector(`${id} [data-value="mins"]`),
      secsRef: document.querySelector(`${id} [data-value="secs"]`),
      }
      return refs;
    }
    
  start() {
      const addNull = function (value) {
        return String(value).padStart(2, '0');
      } 

      const startTimer = setInterval(() => {
      const currentTime = Date.now();
      const time = this.targetDate - currentTime;
      const days = Math.floor(time / (1000 * 60 * 60 * 24));
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
  targetDate: new Date('Jul 10, 2021'),
});