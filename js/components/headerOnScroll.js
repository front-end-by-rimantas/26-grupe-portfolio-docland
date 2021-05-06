const header = document.querySelector(".header");

let lastScrollTop = 0;

window.addEventListener(
  "scroll",
  function () {
    var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
    if (window.pageYOffset >= 90) {
      st < lastScrollTop ? header.classList.add("sticky") :  header.classList.remove("sticky")
    } else {
        header.classList.remove("sticky")
    }

    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
  },
  false
);
