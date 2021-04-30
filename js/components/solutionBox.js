
function solutionBox(selector, data){
    const solutionDOM = document.querySelector(selector);
    let HTML = '';
    let num = 0;
    for (const key in data) {
        let item = data[key];
        num++
        HTML += `
    <div class="solution-box" >
        <div class= "logo-box"; style="background-color:${item.logoBg};">
              <img src="${item.logoName}${num}.svg" class="solution-logo" style="color:${item.logoColor};">
        </div>
    <h3 href ="${item.link}" class=solution-header>${item.headerText}</h3>
    <p class="solution-paragraph">${item.paraText}</p>
    </div> `
    }
    solutionDOM.innerHTML += HTML;

    const solutionBoxDOM = solutionDOM.querySelectorAll('.solution-box');
    const logoDOM = solutionDOM.querySelectorAll('.solution-logo')
    console.log(solutionBoxDOM);

    for (let i = 0; i < logoDOM.length; i++) {
        solutionBoxDOM[i].addEventListener('mouseover', ()=>{
        logoDOM[i].style ="transition: 0.7s ; transform: rotate(15deg);"           
        })
        solutionBoxDOM[i].addEventListener('mouseout', ()=>{
            logoDOM[i].style ="transition: 0.7s ; transform: rotate(0);"               
         })      
    }
}

export{solutionBox}