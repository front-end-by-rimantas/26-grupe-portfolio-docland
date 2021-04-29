function solutionBox(selector, data){
    const solutionDOM = document.querySelector(selector);
    let HTML = '';
    let num = 0;
    for (const key in data) {
        let item = data[key];
        num++
        HTML += `
    <div class="solution-box">
        <div class= "logo-box"; style="background-color:${item.logoBg};">
              <img src="${item.logoName}${num}.svg" class="solution-logo" style="color:${item.logoColor};">
        </div>
    <h3 class=solution-header>${item.headerText}</h3>
    <p class="solution-paragraph">${item.paraText}</p>
    </div> `
    }
    solutionDOM.innerHTML += HTML;
}
export{solutionBox}