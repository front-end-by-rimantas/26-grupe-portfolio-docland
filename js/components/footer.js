function socials (selector, data) {
    const DOM = document.querySelector(selector);

    let HTML = ``;

    for (const social of data) {
        const { href, icon } = social;
        HTML += `<a href="${href}" target="_blank"><i class="fa fa-${icon}"></i></a>`;
    }
    DOM.innerHTML = HTML;
}
export { socials };

function footerFeatures (selector, data) {
    const DOM = document.querySelector(selector);

    let HTML = `<h3>features</h3>`;

    for (const feature of data) {
        const { name, link } = feature;
        HTML += `<a href="${link}">${name}</a>`
    }
    DOM.innerHTML = HTML;
}
export { footerFeatures };

function footerCompany (selector, data) {
    const DOM = document.querySelector(selector);

    let HTML = `<h3>company</h3>`;

    for (const company of data) {
        const { name, link } = company;
        HTML += `<a href="${link}">${name}</a>`
    }
    DOM.innerHTML = HTML;
}
export { footerCompany };
