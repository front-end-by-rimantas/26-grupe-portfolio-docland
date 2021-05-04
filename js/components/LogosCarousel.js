class LogosCarousel {
    constructor (selector, data){
        this.selector = selector;
        this.data = data;
        this.maxLogosPerScreen = 5;
        this.DOM = null
        this.logosPerScreen = 5; //BUS UNDEFINED ARBA NULL IR OVERWRITE su RESIZE FUNKC
        

    }
    init(){
        if(this.selectorValidation()){
            return console.error('Error: duota informacija neatitiko kriteriju');
        }
     
     this.logosOnScreen();
     this.render();
    //  this.updateLogosOnScreen();
    };





    //Plan : 

    //selector validation
    selectorValidation(){
        if(!typeof this.selector ==='string'){
            console.error('Error: selectorius ne string tipo');
        }
    };

 
    //Render Logos
    render(){
        const logoDOM = document.querySelectorAll('.logo-fotos > .gallery-logo');
        const logoCalc = 100/ this.data.list.length; 
        const sliderDOM = document.querySelector('.logo-carousel > .logo-fotos');
        const sliderCalc = 100 * this.data.list.length / this.logosPerScreen;

        const carouselDOM = document.querySelector(this.selector);
        let HTML = '';
        HTML += ` <div class="logo-fotos" style ="width:${sliderCalc}%">
                     <span class="fa fa-angle-left arrow-left "></span>
                     <span class="fa fa-angle-right arrow-right "></span>
                 </div>`
        carouselDOM.innerHTML = HTML;

        const carouselLogoDOM = document.querySelector('.logo-fotos');
        for(const item of this.data.list){
        HTML += `<img src="${this.data.imgPath+item.img}" style ="width:${logoCalc}%"alt="Logo" class="gallery-logo">`     
        }
        carouselLogoDOM.innerHTML = HTML;
        // this.listDOM = this.DOM.querySelector('.logo-fotos')
         
    };

    // addEventListener  resize and update width.

    logosOnScreen(){
         const breakPoint =[300,600,800]
        window.addEventListener('resize', ()=>{
            let itemPerView = 2;
            for(let width of breakPoint) {
                if(width < innerWidth){
                    itemPerView++
                }
            }
        const sliderCalc = 100 * this.data.list.length / itemPerView;
        const sliderDOM = document.querySelector('.logo-carousel > .logo-fotos');
        sliderDOM.style.width = sliderCalc +'%'
    })
}


    //add event listener on arrows click
    // addEventListener cursor grab on enter, cursor scroll (scrollXposition - (currentposition))
    // addEventListener make infinite logos scroll and on arrow clicks.
    
}


export{LogosCarousel}