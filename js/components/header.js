function header (selector, data) {
    const DOM = document.querySelector(selector);
    let HTML = '';
    for (let i = 0; i < data.length; i++) {
        const info = data[i];
        HTML += ` <a class="${info.class}" href="${info.href}">${info.text}</a>`;
        console.log(HTML);
    }
    DOM.innerHTML += HTML;
}

export { header }