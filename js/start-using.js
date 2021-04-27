const btnVideo = document.querySelector(".start-using .video-btn");
const youtubeModal = document.querySelector(".youtube-modal");
const closeBtn = document.querySelector(".youtube-modal .close-btn");

const toggleOpenVideo = ()=> {
    youtubeModal.classList.toggle("youtube-modal-open")
}

btnVideo.addEventListener('click', toggleOpenVideo);
closeBtn.addEventListener('click', toggleOpenVideo);