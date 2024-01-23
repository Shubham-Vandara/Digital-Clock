const time = document.querySelector("#time");
const timeFormat = document.querySelector("#timeformat");

// The DOMContentLoaded event fires when the HTML document has been completely parsed
document.addEventListener("DOMContentLoaded", () => {
  // two parameter pass first handler second one is second
  setInterval(showTime, 1000);
});

const showTime = () => {
  let date = new Date();
  console.log(date);

  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();

  // * Ternary Operator
  h = h < 10 ? `0${h}` : h;
  m = m < 10 ? `0${m}` : m;
  s = s < 10 ? `0${s}` : s;

  timeFormat.innerHTML = "AM";
  if (h > 12) {
    h = `0${h - 12}`;
    timeFormat.innerHTML = "PM";
  }
  time.innerHTML = `${h} : ${m} : ${s}`;
};
