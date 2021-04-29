function solutionBox(selector, data){
    const solutionDOM = document.querySelector(selector);
    let HTML = '';
    console.log(data);
    for (const key in data) {
        let item = data[key];
        HTML += `
    <div class="solution-box">
        <div class= "logo-box" style="background-color:${item.logoBg};">
              <i class="${item.logoName} solution-logo" style=" color:${item.logoColor}"></i>
        </div>
    <h3 class=solution-header>${item.headerText}</h3>
    <p class="solution-paragraph">${item.paraText}</p>
    </div> `
    }
    solutionDOM.innerHTML += HTML;
}
export{solutionBox}