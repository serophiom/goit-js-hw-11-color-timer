// const timer = new CountdownTimer({
//   selector: '#timer-1',
//   targetDate: new Date('Jul 17, 2019'),
// });
const targetDate = new Date('Jul 17, 2021');
// const currentTime = Date.now();
// const time = targetDate - currentTime;
// const days = Math.floor(time / (1000 * 60 * 60 * 24));
// const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
// const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
// const secs = Math.floor((time % (1000 * 60)) / 1000);
const refs = {
  daysRef: document.querySelector('[data-value="days"]'),
  hoursRef: document.querySelector('[data-value="hours"]'),
  minsRef: document.querySelector('[data-value="mins"]'),
  secsRef: document.querySelector('[data-value="secs"]'),
}  

console.log(refs.daysRef.textContent);




const timer = setInterval(() => {
  const currentTime = Date.now();
  console.log('запуск timer');
  const time = targetDate - currentTime;
  const days = Math.floor(time / (1000 * 60 * 60 * 24));
  const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((time % (1000 * 60)) / 1000);
  refs.daysRef.textContent = days;
  refs.hoursRef.textContent = hours;
  refs.minsRef.textContent = mins;
  refs.secsRef.textContent = secs;
}, 1000)

