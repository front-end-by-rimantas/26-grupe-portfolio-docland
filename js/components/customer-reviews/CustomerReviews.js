class CustomerReviews {
    constructor(params) {
        this.data = params.data;
        this.imgPath = params.imgPath;
    }

    generateHTML() {
        let HTML = '';

        const itemWidth = 100 / this.data.length;

        for (let item of this.data) {
            HTML += `<div class="customer-review" style="width: ${itemWidth}%;">
                        <div class="spacing">
                            <div class="title">${item.title}</div>
                        </div>
                    </div>`;
        }

        return HTML;
    }
}

export { CustomerReviews }