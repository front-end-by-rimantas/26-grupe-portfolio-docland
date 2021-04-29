function solutionBox(selector, data){
    const solutionDOM = document.querySelector(selector);
    let HTML = '';

    for (const key in data) {
        let item = data[key];

        console.log(item.logoColor);
    }
}




export{solutionBox}