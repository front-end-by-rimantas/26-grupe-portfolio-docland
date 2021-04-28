// 1

function squares (selector, data) {
    const DOM = document.querySelector(selector);
    let HTML = '';
    for (let i = 0; i < data.length; i++) {
        const info = data[i]
        HTML += `<div class="single-box${i + 1} box">
        <h2>${info.number}</h2>
        <p>${info.label}</p>
      </div>`;
 
    }

    DOM.innerHTML += HTML; 

// 2 scroll stebejimas
 const squaresDOM = DOM.querySelectorAll('.box');
 console.log(squaresDOM);
 
for (const squareDOM of squaresDOM) {
    addEventListener('scroll', () => {
        const elementTop = squareDOM.offsetTop;
        const elementHeight = squareDOM.clientHeight;

        const isVisible = scrollY + innerHeight >= elementTop + elementHeight;

        if (isVisible) {
            squareDOM.classList.add('animate');
        }
    })
}

}



export { squares }