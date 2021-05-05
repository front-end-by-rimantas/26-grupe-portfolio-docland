
class LogosCarousel {
    constructor (selector, data){
        this.selector = selector;
        this.data = data;       
        this.DOM = null;
        this.listDOM =null;
        this.logosLength = this.data.list.length;
        this.defaultLogos = 5;
        
    }
    init(){
        this.DOM = document.querySelector(this.selector);
        this.cloneImg();
        this.render();
        this.logosOnScreen();
        // this.addEvents();
        
        this.test();
        
    };

    //Validation



    


    //HTML RENDERING && CLONE && LOGOS ON SCREEN

    logosOnScreen(){
        const breakPoint =[300,600,800]
       window.addEventListener('resize', ()=>{
           let itemPerView = 2;
           for(let width of breakPoint) {
               if(width < innerWidth){
                   itemPerView++
               }
           }
       const listCalc = 100 * this.logosLength / itemPerView;
       const listDOM = document.querySelector('.logo-list');
       let listWidth = listDOM.style.width = listCalc +'%'
        return listWidth;
   })
  
}

    cloneImg(){
        const first = this.data.list[0];
        const last =  this.data.list[this.data.list.length - 1];
        this.data.list = [last,...this.data.list, first];
        this.logosLength = this.data.list.length;
    }

    generateImg(){
        let img = ''
        for(let i = 0; i < this.logosLength;i++){
            let sourceUrl = `${this.data.imgPath + this.data.list[i].img}`
            let logoBoxWidth = 100 / this.logosLength;
            img += `<div class ="logo-box" style ="width: ${logoBoxWidth}%;">
            <img src="${sourceUrl}" alt="Logo" class="logo-img"></img>
            </div>`
        }
       return img
    }

    render(){
        const listCalc = 100 * this.logosLength / this.defaultLogos;
        let HTML='';

            HTML+= ` 
            <div class="logo-content">
                <h2 class= "logo-header">We Helped Over 100 Companies</h2>
                <p class="logo-paragraph">Vestibulum commodo sapien non elit porttitor, vitae volutpat nibh mollis.</p>
            </div>
                <span class="fa fa-angle-left arrow-left"></span>
                <span class="fa fa-angle-right arrow-right"></span> 
                <div class="logo-list" style ="${listCalc}%; ">
                        ${this.generateImg()}
                </div>
         
            `
       this.DOM.innerHTML = HTML;
       this.listDOM = this.DOM.querySelector('.logo-list');
    }
     

    // Event listeners
    // addEvents() {
    //     const leftArrowDOM = this.DOM.querySelector('.arrow-left');
    //     const rightArrowDOM = this.DOM.querySelector('.arrow-right');
    //      let a =0;
    //         for (let i = 0; i < 1; i++) {          
    //             leftArrowDOM.addEventListener('click', ()=>{
    //               a++ 
    //                 this.listDOM.style.marginLeft = `${a*20}%`
    //              })
    //              rightArrowDOM.addEventListener('click', ()=>{
    //                 a++ 
    //                   this.listDOM.style.marginLeft = `${a-20}%`
    //                })
    //         }
            
    // }


    // addEvents() {
    //     const leftArrowDOM = this.DOM.querySelector('.arrow-left');
    //     for (let i = 0; i < this.logosLength; i++) {
    //         leftArrowDOM.addEventListener('click', ()=>{
    //             console.log(i);
    //             // this.listDOM.style.marginLeft 
    //         })
            
    //     }
    //     }

//Test Section

// test(){
//     let a = this.listDOM.style.marginLeft
//     console.log(a);
//     console.log(this.listDOM);
// }
    };



export{LogosCarousel}