const SCREEN_SM = 576;  // Small tablets and large smartphones (landscape view)
const SCREEN_MD = 768;  // Small tablets (portrait view)
const SCREEN_LG = 992;  // Tablets and small desktops
const SCREEN_XL = 1600; // Large tablets and desktops


function getScreenSizeType() {
    const width = screen.width;
    if (width > SCREEN_XL) return 'XL';
    if (width > SCREEN_LG) return 'LG';
    if (width > SCREEN_MD) return 'MD';
    return 'SM';
}

function initSlideshow(slideshowEle, delay) {
    const slideEles = slideshowEle.querySelectorAll('.slideshow__slide');
    const captionlEles = slideshowEle.querySelectorAll('.numbered-captions__item')
    const slidesAmount = slideEles.length;

    let currentPosition = 0;
    slideEles[currentPosition].classList.add('--current');
    captionlEles[currentPosition].classList.add('--current');
    
    setInterval(()=> {
        const previousPosition = currentPosition;

        if (currentPosition < slidesAmount - 1) {
            // Increment to the next slide
            currentPosition++;
        } else {
            // Reached the end, reset
            currentPosition = 0;
        }

        slideEles[previousPosition].classList.remove('--current');
        slideEles[currentPosition].classList.add('--current');

        captionlEles[previousPosition].classList.remove('--current');
        captionlEles[currentPosition].classList.add('--current');
    }, delay);
}


const slideshowEle = document.querySelector('.slideshow');
initSlideshow(slideshowEle, 3000);