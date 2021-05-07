function fadingAnimation(selector) {
  const fadingsDOM = document.querySelector(".fade");
  for (const fadingDOM of fadingsDOM) {
    addEventListener("scroll", () => {
      const fadeTop = fadingDOM.offsetTop;
      const fadeHeight = fadingDom.clientHeight;

      const isVisible = scrollY + innerHeight >= fadeTop + fadeHeight;
      if (isVisible) {
        fadingDOM.classList.add("animate1");
        fadingDOM.classList.add("animate2");
      }
    });
  }
}

export { fadingAnimation };
