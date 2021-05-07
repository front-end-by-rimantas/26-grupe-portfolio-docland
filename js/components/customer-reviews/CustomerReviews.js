class CustomerReviews {
    constructor(params) {
        this.data = params.data;
        this.imgPath = params.imgPath;
    }

    generateHTML() {
        let HTML = '';

        const itemWidth = 100 / this.data.length;
        console.log(this.imgPath);
       
       


        for (let item of this.data) {
            
            HTML += `<div class="customer-review" style="width: ${itemWidth}%;">
            <div class="spacing">
                <div class="cs-top"> 
                    <div class="media">
                        <div class="foto">
                            <img src=${this.imgPath + item.img} alt=" image">
                        </div>
                        <div class="review-name">
                            
                            <div class="review" >
                                ${item.review}
                            </div>
                            <h5>${item.name}</h5>
                        </div>    
                    </div>
                </div>
                

                <div class="cs-bot">
                <p class="qoute">${item.qoute}</p>
                </div>
            </div>
        </div>   `;
        }

        return HTML;
    }
}

export { CustomerReviews }