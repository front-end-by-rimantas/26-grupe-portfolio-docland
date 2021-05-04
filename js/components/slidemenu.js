const burgerDOM = document.querySelector('.links i');
const menuDOM = document.querySelector('.linksContainer');
const closeDOM = document.querySelector('.close');



const openSideMenu = () => {
    menuDOM.classList.remove('displayn');
    menuDOM.classList.add('appearContainer')
}

const closeSideMenu = () => {
    menuDOM.classList.remove('appearContainer');
    menuDOM.classList.add('displayn');
}

burgerDOM.addEventListener('click', openSideMenu);
closeDOM.addEventListener('click', closeSideMenu);
