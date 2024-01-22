const time = document.querySelector("#time");
const timeFormat = document.querySelector("#timeformat");

// The DOMContentLoaded event fires when the HTML document has been completely parsed
document.addEventListener("DOMContentLoaded", () => {
  // two parameter pass first handeler second one is second
  setInterval(showTime, 1000);
});

const showTime = () => {
  let date = new Date();
  console.log(date);

  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  // * Ternary Operator
  hours = hours < 10 ? `0${hours}` : hours;
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  seconds = seconds < 10 ? `0${seconds}` : seconds;

  timeFormat.innerHTML = hours >= 12 ? "PM" : "AM";
  //   for time format 13 into 01
  switch (hours) {
    case 13:
      hours = `01`;
      break;
    case 14:
      hours = `02`;
      break;
    case 15:
      hours = `03`;
      break;
    case 16:
      hours = `04`;
      break;
    case 17:
      hours = `05`;
      break;
    case 18:
      hours = `06`;
      break;
    case 19:
      hours = `07`;
      break;
    case 20:
      hours = `08`;
      break;
    case 21:
      hours = `09`;
      break;
    case 22:
      hours = `10`;
      break;
    case 23:
      hours = `11`;
      break;
    case 24:
      hours = `00`;
      break;
  }
  time.innerHTML = `${hours} : ${minutes} : ${seconds}`;
};
