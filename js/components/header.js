const header = document.querySelector(".header");

let lastScrollTop = 0;

window.addEventListener(
  "scroll",
  function () {
    var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
    console.log(window.pageYOffset);
    if (window.pageYOffset >= 90) {
      st < lastScrollTop && header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }

    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
  },
  false
);
function header (selector, data) {
    const DOM = document.querySelector(selector);
    let HTML = '';
    for (let i = 0; i < data.length; i++) {
        const info = data[i];
        HTML += ` <a class="${info.class}" href="${info.href}">${info.text}</a>`;
    }

    DOM.innerHTML += HTML;
}

export { header }
