function Slideshow(slideshowEle, delay) {
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

export {Slideshow}