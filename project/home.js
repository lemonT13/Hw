const bodyElement = document.body;
const aboutUsElement = document.querySelector('.aboutUs');

window.addEventListener("scroll", function () {
  const scrollTop = window.scrollY; // Vertical scroll position
  console.log(scrollTop);

  if (scrollTop > 49) {
    bodyElement.classList.add("header-fixed");
  } else {
    bodyElement.classList.remove("header-fixed");
  }
  const aboutUsOffset = aboutUsElement.getBoundingClientRect().top;
});