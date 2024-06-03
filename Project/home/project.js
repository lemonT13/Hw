function init() {
    let current = {
        slide: document.querySelector(".slide[data-current]"),
        slideInfo: document.querySelector(".slide-info[data-current]"),
        slideBg: document.querySelector(".slide__bg[data-current]"),
      };
  document
    .querySelector(".slide[data-current]")
    .addEventListener("click", function () {
      // 在点击事件处理程序中实现跳转到其他网页
      window.location.href = `../${current.slide.getAttribute("data-link")}/index.html`;
    });
  const buttons = {
    prev: document.querySelector(".slider--btn__prev"),
    next: document.querySelector(".slider--btn__next"),
  };
  buttons.prev.addEventListener("click", change(-1));
  buttons.next.addEventListener("click", change(1));
}

function change(direction) {
  return () => {
    let current = {
      slide: document.querySelector(".slide[data-current]"),
      slideInfo: document.querySelector(".slide-info[data-current]"),
      slideBg: document.querySelector(".slide__bg[data-current]"),
    };
    let previous = {
      slide: document.querySelector(".slide[data-previous]"),
      slideInfo: document.querySelector(".slide-info[data-previous]"),
      slideBg: document.querySelector(".slide__bg[data-previous]"),
    };
    let next = {
      slide: document.querySelector(".slide[data-next]"),
      slideInfo: document.querySelector(".slide-info[data-next]"),
      slideBg: document.querySelector(".slide__bg[data-next]"),
    };

    Object.values(current).map((el) => el.removeAttribute("data-current"));
    Object.values(previous).map((el) => el.removeAttribute("data-previous"));
    Object.values(next).map((el) => el.removeAttribute("data-next"));

    if (direction === 1) {
      let temp = current;
      current = next;
      next = previous;
      previous = temp;

      current.slide.style.zIndex = "20";
      previous.slide.style.zIndex = "30";
      next.slide.style.zIndex = "10";
    } else if (direction === -1) {
      let temp = current;
      current = previous;
      previous = next;
      next = temp;

      current.slide.style.zIndex = "20";
      previous.slide.style.zIndex = "10";
      next.slide.style.zIndex = "30";
    }

    Object.values(current).map((el) => el.setAttribute("data-current", ""));
    Object.values(previous).map((el) => el.setAttribute("data-previous", ""));
    Object.values(next).map((el) => el.setAttribute("data-next", ""));
    document
      .querySelector(".slide[data-current]")
      .addEventListener("click", function () {
        // 在点击事件处理程序中实现跳转到其他网页
        window.location.href = `../${current.slide.getAttribute("data-link")}/index.html`;
      });
  };
}
init();
