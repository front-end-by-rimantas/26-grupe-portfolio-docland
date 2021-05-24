function featuresBox(selector, data) {
    const featuresDOM = document.querySelector(selector);
    let HTML = '';
    for (const key in data) {
        let item = data[key];
        HTML += `<div class="features-box">
                        <div class="features-logo-box">
                            <img src="${item.logoName}${key}.svg" class="features-logo";>
                        </div>   
                    <a href="${item.link}"><h3 class="features-header">${item.headerText}</h3></a>
                </div>`
    }
    featuresDOM.innerHTML += HTML;

    const featuresBoxDOM = featuresDOM.querySelectorAll('.features-box');
    
    for (const Box of featuresBoxDOM) {
        Box.addEventListener('mouseover', ()=>{
            Box.style ="transition: 0.3s linear ; transform: translateY(-5px);"
        })
        Box.addEventListener('mouseout', ()=>{
            Box.style ="transition: 0.3s linear ; transform: translateY(0px);"
        })
    }
}

export{featuresBox}