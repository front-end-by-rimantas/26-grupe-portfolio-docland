// // 2. scroll stebejimas, kai pasirodo elementas ekrane

const squaresDOM = document.querySelectorAll('.box');
console.log(squaresDOM);
for (const squaresDOM of squaresDOM) {
    addEventListener('scroll', () => {
        const elementTop = squaresDOM.offsetTop;
        const elementHeight = squaresDOM.clientHeight;

        const isVisible = scrollY + innerHeight >= elementTop + elementHeight;

        if (isVisible) {
            squaresDOM.classList.add('animate');
        }
    })
}








