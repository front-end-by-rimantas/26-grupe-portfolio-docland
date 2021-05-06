function sidemenu(selector, data) {
  const DOM = document.querySelector(selector);
  let HTML = "";
  for (let i = 0; i < data.length; i++) {
    const info = data[i];
    HTML += ` <a href="${info.href}">${info.text}</a>`;
  }

  DOM.innerHTML += HTML;

  const burgerDOM = document.querySelector(".links i");
  const menuDOM = document.querySelector(".links-container");
  const closeDOM = document.querySelector(".close");

  const toggleMenu = () => {
    menuDOM.classList.toggle("appearContainer");
    menuDOM.classList.toggle("displayn");
  };

  burgerDOM.addEventListener("click", toggleMenu);
  closeDOM.addEventListener("click", toggleMenu);
}

export { sidemenu };
