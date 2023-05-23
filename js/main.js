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
function navMenu() {
  let navBar = document.querySelector(".navbar-sticky");
  let scrollTopButton = document.querySelector("#scrollUp");
  window.onscroll = function () {
    var scroll = document.getElementById.scrollTop;

    if (scroll >= 120) {
      navBar.classList.add("navbar-sticky-moved-up");
    } else {
      navBar.classList.remove("navbar-sticky-moved-up");
    }
    if (scroll >= 250) {
      navBar.classList.add("navbar-sticky-transitioned");
      scrollTopButton.classList.add("scrollActive");
    } else {
      navBar.classList.remove("navbar-sticky-transitioned");
      scrollTopButton.classList.remove("scrollActive");
    }
    if (scroll >= 500) {
      navBar.classList.add("navbar-sticky-on");
    } else {
      navBar.classList.remove("navbar-sticky-on");
    }
  };
}
navMenu();
