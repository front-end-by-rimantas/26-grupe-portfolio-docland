function squares (selector, data) {
    const DOM = document.querySelector(selector);
    let HTML = '';
    console.log(DOM);
    for (let i = 0; i < data.length; i++) {
        const info = data[i]
        HTML += `<div class="single-box${i + 1} box">
        <h2>${info.number}</h2>
        <p>${info.label}</p>
      </div>`;
 
    }
    DOM.innerHTML += HTML; 
}



export { squares }