const SLIDE_CLASS = 'slideshow__slide';
const CAPTION_ITEM_CLASS = 'numbered-captions__item';
const CURRENT_MODIFIER_CLASS = '--current';

class Slideshow {

    constructor(element) {
        this.element = element;
        this.currentSlide = 0;

        const slideEles = this.element.querySelectorAll(`.${SLIDE_CLASS}`);
        const captionlEles = this.element.querySelectorAll(`.${CAPTION_ITEM_CLASS}`);
        slideEles[this.currentSlide].classList.add(CURRENT_MODIFIER_CLASS);
        captionlEles[this.currentSlide].classList.add(CURRENT_MODIFIER_CLASS);

        this.slidesAmount = slideEles.length;

        this._buildNavigation();
    }

    start() {
        this.timerId = setInterval(()=> {
            let nextSlide = this.currentSlide + 1;
            nextSlide = (nextSlide < this.slidesAmount) ? nextSlide : 0;
            this.moveToSlide(nextSlide);
        }, 4000)
    }

    stop() {
        clearInterval(this.timerId);
    }

    moveToSlide(i) { 
        const previousSlide = this.currentSlide;
        this.currentSlide = i;
        if (this.currentSlide === previousSlide) return;

        const slideEles = this.element.querySelectorAll(`.${SLIDE_CLASS}`);
        const captionlEles = this.element.querySelectorAll(`.${CAPTION_ITEM_CLASS}`)

        slideEles[previousSlide].classList.remove(CURRENT_MODIFIER_CLASS);
        slideEles[this.currentSlide].classList.add(CURRENT_MODIFIER_CLASS);

        captionlEles[previousSlide].classList.remove(CURRENT_MODIFIER_CLASS);
        captionlEles[this.currentSlide].classList.add(CURRENT_MODIFIER_CLASS);
    }

    _buildNavigation(){
        const captionlEles = this.element.querySelectorAll(`.${CAPTION_ITEM_CLASS}`);
        captionlEles.forEach((element, i) => 
            element.addEventListener('click', () => this._onNavigationCaptionClick(i))
        );
    }

    _onNavigationCaptionClick(i) {
        this.stop();
        this.moveToSlide(i);
        this.start();
    }

}

export {Slideshow};