class LogosCarousel {
  constructor(selector, data) {
    this.selector = selector;
    this.data = data;
    this.DOM = null;
    this.logoBoxDOM = null;
    this.logosLength = this.data.list.length;
    this.defaultLogos = 5;
  }
  init() {
    this.DOM = document.querySelector(this.selector);

    this.cloneImg();
    this.render();
    this.logosOnScreen();
    this.addEvents();
  }

  //Validation

  //HTML RENDERING && CLONE && LOGOS ON SCREEN

  logosOnScreen() {
    const breakPoint = [300, 600, 800];
    window.addEventListener("resize", () => {
      let itemPerView = 2;
      for (let width of breakPoint) {
        if (width < innerWidth) {
          itemPerView++;
        }
      }
      const listCalc = (100 * this.logosLength) / itemPerView;
      console.log(listCalc);
      let listWidth = (this.logoBoxDOM.style.width = listCalc + "%");

      return listWidth;
    });
  }

  cloneImg() {
    const first = this.data.list[0];
    const last = this.data.list[this.data.list.length - 1];
    this.data.list = [last, ...this.data.list, first];
    this.logosLength = this.data.list.length;
  }

  generateImg() {
    let img = "";
    for (let i = 0; i < this.logosLength; i++) {
      let sourceUrl = `${this.data.imgPath + this.data.list[i].img}`;
      let logoBoxWidth = 100 / this.logosLength;
      img += `<img src="${sourceUrl}" style="width:${logoBoxWidth}%"alt="Logo" class="logo-img">`;
    }
    return img;
  }

  render() {
    const listCalc = (100 * this.logosLength) / this.defaultLogos;
    let HTML = "";

    HTML += ` 
            <div class="logo-content">
                <h2 class= "logo-header">We Helped Over 100 Companies</h2>
                <p class="logo-paragraph">Vestibulum commodo sapien non elit porttitor, vitae volutpat nibh mollis.</p>
            </div>
                <span class="fa fa-angle-left arrow-left"></span>
                <span class="fa fa-angle-right arrow-right"></span> 
                <div class="logo-list">
                <div class ="logo-slider" style ="width: ${listCalc}%;">
                        ${this.generateImg()}
                </div>
                </div>
            `;
    this.DOM.innerHTML = HTML;
    this.logoBoxDOM = this.DOM.querySelector(".logo-slider");
    this.listDOM = this.DOM.querySelector(".logo-list");
  }
  addEvents() {
    let itemWidth = 100 / this.logosLength;
    const leftArrowDOM = this.DOM.querySelector(".arrow-left");
    leftArrowDOM.addEventListener("click", () => {
      this.logoBoxDOM.style.transform = `translate(-${itemWidth}%)`;
    });

    const rightArrowDOM = this.DOM.querySelector(".arrow-right");
    rightArrowDOM.addEventListener("click", () => {
      this.logoBoxDOM.style.transform = `translate(${itemWidth}%)`;
    });

    this.logoBoxDOM.addEventListener("transitionend", () => {
      this.logoBoxDOM.appendChild(this.logoBoxDOM.firstElementChild);
      this.logoBoxDOM.style.transition = "none";
      this.logoBoxDOM.style.transform = "translate(0)";

      setTimeout(() => {
        this.logoBoxDOM.style.transition = "all 0.5s";
      });
    });

    setInterval(() => {
      this.logoBoxDOM.style.transform = `translate(-${itemWidth}%)`;
      this.logoBoxDOM.appendChild(this.logoBoxDOM.firstElementChild);

      setTimeout(() => {
        this.logoBoxDOM.style.transition = "all 0.5s";
      });
    }, 2000);
  }
}

export { LogosCarousel };
