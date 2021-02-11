const secondsEl = document.getElementById('seconds');
const minutesEl = document.getElementById('minutes');
const hoursEl = document.getElementById('hours');
const daysEl = document.getElementById('days');
const inputEl = document.getElementById('input');

let countdownTime = '1 Jan 2022';

const formatTime = time => (time < 10 && time > 0 ? `0${time}` : time);

function countdown() {
  const newYearsDate = new Date(countdownTime);
  const currentDate = new Date();

  const totalSeconds = (newYearsDate - currentDate) / 1000;

  const seconds = Math.floor(totalSeconds) % 60;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const days = Math.floor(totalSeconds / 3600 / 24);

  secondsEl.innerHTML = formatTime(seconds !== NaN ? seconds : 0);
  minutesEl.innerHTML = formatTime(minutes !== NaN ? minutes : 0);
  hoursEl.innerHTML = formatTime(hours !== NaN ? hours : 0);
  daysEl.innerHTML = formatTime(days !== NaN ? days : 0);
}
countdown();

setInterval(countdown, 1000);

inputEl.addEventListener('change', function (e) {
  const arrayOfDates = e.target.value.split('-');

  let arrDay = arrayOfDates[2];

  let arrMonth = +arrayOfDates[1];
  switch (arrMonth) {
    case 1:
      arrMonth = 'Jan';
      break;
    case 2:
      arrMonth = 'Feb';
      break;
    case 3:
      arrMonth = 'Mar';
      break;
    case 4:
      arrMonth = 'Apr';
      break;
    case 5:
      arrMonth = 'May';
      break;
    case 6:
      arrMonth = 'Jun';
      break;
    case 7:
      arrMonth = 'Jul';
      break;
    case 8:
      arrMonth = 'Aug';
      break;
    case 9:
      arrMonth = 'Sep';
      break;
    case 10:
      arrMonth = 'Oct';
      break;
    case 11:
      arrMonth = 'Nov';
      break;
    case 12:
      arrMonth = 'Dec';
      break;
  }

  let arrYear = arrayOfDates[0];

  let newDate = `${arrDay} ${arrMonth} ${arrYear}`;

  return (countdownTime = newDate);
});
