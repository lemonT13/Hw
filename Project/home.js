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
});

function scrollToSection(sectionId) {
  var section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: 'smooth' });

  // 阻止默认的锚点跳转行为
  event.preventDefault();
}