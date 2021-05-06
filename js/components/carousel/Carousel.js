
class Carousel {
    constructor(params) {
        this.data = params.data;
        this.renderEngine = params.renderEngine;
        this.itemPerView = 1;
        this.DOM = 0;
        this.listDOM = 0;


    this.contentObj = new this.renderEngine(this.data, this.itemsPerView);
    
    this.contenHTML= this.contentObj.generateHTML()
    

    this.init();
    }
init() {
    if(!this.isValidSelector()) {
        return;

    }
    this.render();
    this.addEvents();

}
isValidSelector() {
    const DOM = document.querySelector(this.data.selector);
   if(!DOM) {
       return false;
   }
   this.DOM = DOM;

    return true;
    
}
render() {

    
    const total = this.data.data.length;
    console.log(total);
    console.log(this.itemPerView);
    

    const listWidth = 100 * total / this.itemPerView;
    
    console.log(listWidth);
    

    
    

    this.DOM.innerHTML = `<div class="carousel">
                            <div class="content">
                                <div class="list" style="width: ${listWidth}%">
                                 ${this.contenHTML}

                            </div>
                            <div class="actions">
                                <button id="carousel__button--prev"><</button>
                                <button id="carousel__button--next">></button>
                            </div>
</div>
                        </div>`;
    
                        this.listDOM = this.DOM.querySelector('.content > .list');                     
}
updateListWidth() {
    // keiciantis ekrano plociui, reikia pakeisti rodomu elementu plocius
    // infinity..1000 : 3
    // 999..600 : 2
    // 599..0 : 1
    let itemsPerView = 0;
    for (let width of this.breakpoints) {
        if (width < innerWidth) {
            itemsPerView++;
        }
    }

    this.itemPerView = itemsPerView;

    const total = this.data.data.length;
    const listWidth = 100 * total / itemsPerView;

    this.listDOM.style.width = listWidth + '%';
  
}
/*
addEvents () {
    const breakpoints = [600];

    addEventListener('resize', () => {
        let itemsPerView = 1;
        for (let width of breakpoints) {
            if (width < innerWidth) {
                itemsPerView++;
            }

        }
        console.log('telpa', itemsPerView);
        const total = 4;
        let listWidth = 100 * total / 4;
        console.log(listWidth);

        this.list.DOM.style.width = listWidth +'%';
        

        //this.updateListWidth();

    });
}
*/
addEvents () {
    const breakpoints = [600];
    addEventListener('resize', () => {
        let itemsPerView = 1;
        for (let width of breakpoints) {
            if (width < innerWidth) {
            itemsPerView++;
            }
        }
        console.log(itemsPerView);

        const total = this.data.data.length;

        const listWidth = 100 * total / itemsPerView;
        console.log('---');
        console.log(listWidth);
        console.log(this.listDOM);
        this.listDOM.style.width = listWidth + '%';

    })
}
}

export { Carousel}