const burgerDOM = document.querySelector('.links i');
const menuDOM = document.querySelector('.menu');
const closeDOM = document.querySelector('.close');


console.log(menuDOM);

const openSideMenu = () => {
    menuDOM.classList.add('slidemenu');
}

const appearX = () => {
    closeDOM.classList.add('xappear');
}

const closeSideMenu = () => {
    menuDOM.classList.remove('slidemenu');
}

const disappearX = () => {
    closeDOM.classList.remove('xappear');
}
burgerDOM.addEventListener('click', openSideMenu);
closeDOM.addEventListener('click', closeSideMenu);
burgerDOM.addEventListener('click', appearX);
closeDOM.addEventListener('click', disappearX);
console.log(burgerDOM);