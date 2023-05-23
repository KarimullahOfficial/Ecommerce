let dayitem = document.querySelector("#days");
let houritem = document.querySelector("#hours");
let minitem = document.querySelector("#mins");
let secitem = document.querySelector("#sec");
let countDown = () => {
  let futureDate = new Date("30 June 2030");
  let currentDate = new Date();
  let myDate = futureDate - currentDate;
  let days = Math.floor(myDate / 1000 / 60 / 60 / 24);
  let hours = Math.floor(myDate / 1000 / 60 / 60) % 24;
  let mins = Math.floor(myDate / 1000 / 60) % 60;
  let sec = Math.floor(myDate / 1000) % 60;
  dayitem.innerHTML = days;
  houritem.innerHTML = hours;
  minitem.innerHTML = mins;
  secitem.innerHTML = sec;
};
countDown();
setInterval(countDown, 1000);
