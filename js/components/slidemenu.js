const burgerDOM = document.querySelector('.links i');
const menuDOM = document.querySelector('.menu');
const closeDOM = document.querySelector('.close');
console.log(menuDOM);

const openSideMenu = () => {
    menuDOM.classList.add('slidemenu');
}
const closeSideMenu = () => {
    menuDOM.classList.remove('slidemenu');
}
burgerDOM.addEventListener('click', openSideMenu);
closeDOM.addEventListener('click', closeSideMenu);
console.log(burgerDOM);









// const btnVideo = document.querySelector(".start-using .video-btn");
// const youtubeModal = document.querySelector(".youtube-modal");
// const closeBtn = document.querySelector(".youtube-modal .close-btn");

// const toggleOpenVideo = ()=> {
//     youtubeModal.classList.toggle("youtube-modal-open")
// }

// btnVideo.addEventListener('click', toggleOpenVideo);
// closeBtn.addEventListener('click', toggleOpenVideo);