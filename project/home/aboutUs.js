const planet01 = document.querySelector(".planet01");
const planet02 = document.querySelector(".planet02");
const planet03 = document.querySelector(".planet03");
const planet04 = document.querySelector(".planet04");
const planet1 = document.querySelector(".planet1");
const planet2 = document.querySelector(".planet2");
const planet3 = document.querySelector(".planet3");
const planet4 = document.querySelector(".planet4");
const planet1des = document.querySelector(".planet1des");
const planet2des = document.querySelector(".planet2des");
const planet3des = document.querySelector(".planet3des");
const planet4des = document.querySelector(".planet4des");

document.addEventListener('mousemove', function(event) {
    const mouseY = event.clientY;
    if (mouseY < window.innerHeight / 100 * 37) {
        planet1des.style.top = "0";
        planet2des.style.top = "0";
        planet3des.style.top = "0";
        planet4des.style.top = "0";
    } 
    else {
        planet1des.style.top = "-29vh";
        planet2des.style.top = "-27vh";
        planet3des.style.top = "-27vh";
        planet4des.style.top = "-24vh";
    }
});

planet01.addEventListener("mouseenter", function () {
  planet1.style.width = "6vh";
  planet1.style.height = "6vh";
  planet1.style.animationPlayState = "paused";
  planet01.style.animationPlayState = "paused";
  planet1des.style.display = "block";
});

planet01.addEventListener("mouseleave", function () {
  planet1.style.width = "5vh";
  planet1.style.height = "5vh";
  planet1.style.animationPlayState = "running";
  planet01.style.animationPlayState = "running";
  planet1des.style.display = "none";
});

planet02.addEventListener("mouseenter", function () {
  planet2.style.width = "8vh";
  planet2.style.height = "8vh";
  planet2.style.animationPlayState = "paused";
  planet02.style.animationPlayState = "paused";
  planet2des.style.display = "block";
});

planet02.addEventListener("mouseleave", function () {
  planet2.style.width = "7vh";
  planet2.style.height = "7vh";
  planet2.style.animationPlayState = "running";
  planet02.style.animationPlayState = "running";
  planet2des.style.display = "none";
});

planet03.addEventListener("mouseenter", function () {
  planet3.style.width = "8vh";
  planet3.style.height = "8vh";
  planet3.style.animationPlayState = "paused";
  planet03.style.animationPlayState = "paused";
  planet3des.style.display = "block";
});

planet03.addEventListener("mouseleave", function () {
  planet3.style.width = "7vh";
  planet3.style.height = "7vh";
  planet3.style.animationPlayState = "running";
  planet03.style.animationPlayState = "running";
  planet3des.style.display = "none";
});

planet04.addEventListener("mouseenter", function () {
  planet4.style.width = "11vh";
  planet4.style.height = "11vh";
  planet4.style.animationPlayState = "paused";
  planet04.style.animationPlayState = "paused";
  planet4des.style.display = "block";
});

planet04.addEventListener("mouseleave", function () {
  planet4.style.width = "10vh";
  planet4.style.height = "10vh";
  planet4.style.animationPlayState = "running";
  planet04.style.animationPlayState = "running";
  planet4des.style.display = "none";
});