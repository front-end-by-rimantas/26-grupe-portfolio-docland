const icon = document.querySelector(".back-to-top");

window.onscroll = () => {
    if (window.pageYOffset >= 200) {
      icon.classList.add("show");
    } else {
      icon.classList.remove("show");
    }
  };