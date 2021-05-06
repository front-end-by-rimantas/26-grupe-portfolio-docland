function featuresBox(selector, data) {
    const featuresDOM = document.querySelector(selector);
    let HTML = '';
    let num = 0;
    for (const key in data) {
        let item = data[key];
        num++
        HTML += `
        <div class="features-box">
            <div class="features-logo-box">
                <img src="${item.logoName}${num}.svg" class="features-logo";>
            </div>   
            <a href="${item.link}"><h3 class="features-header">${item.headerText}</h3></a>
        </div>
        `
    }
    featuresDOM.innerHTML += HTML;

    const featuresBoxDOM = featuresDOM.querySelectorAll('.features-box');
    
    for (let i = 0; i < featuresBoxDOM.length; i++) {
        featuresBoxDOM[i].addEventListener('mouseover', ()=>{
        featuresBoxDOM[i].style ="transition: 0.3s linear ; transform: translateY(-5px);"
        })
        featuresBoxDOM[i].addEventListener('mouseout', ()=>{
        featuresBoxDOM[i].style ="transition: 0.3s linear ; transform: translateY(0);"
        })
    }
}

export{featuresBox}