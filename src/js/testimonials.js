import {
  screenSizeTypes,
  getScreenSizeType,
  debounceDecorator,
} from "./utils.js";

const NAVIGATION_CLASS = "testimonials__navigation";
const TESTIMONIAL_CLASS = "testimonial";
const ROW_CLASS = "testimonials__row";
const DOT_CLASS = "testimonials__dot";
const CURRENT_MODIFIER_CLASS = "--current";
const TESTIMONIAL_MARGIN_RIGHT_PERCENTAGE = 2.651;

function getSlidesAmount(testimonialsAmount, screenSizeType) {
  switch (screenSizeType) {
    case screenSizeTypes.SM:
    case screenSizeTypes.MD:
      return testimonialsAmount;
    case screenSizeTypes.LG:
      return Math.ceil(testimonialsAmount / 2);
    case screenSizeTypes.XL:
      return Math.ceil(testimonialsAmount / 3);
  }
}

class Testimonials {
  constructor(element) {
    this.element = element;
    this.currentSlide = 0;
    this.testimonialsAmount = this.element.querySelectorAll(
      `.${TESTIMONIAL_CLASS}`
    ).length;
    this._buildNavigation();

    // Adapt to screen size change
    this._adaptToScreenSizeChange = debounceDecorator(
      this._adaptToScreenSizeChange,
      100
    );
    window.addEventListener("resize", () => {
      this._adaptToScreenSizeChange();
    });
  }

  start() {
    this.timerId = setInterval(() => {
      let nextSlide = this.currentSlide + 1;
      nextSlide = nextSlide < this.slidesAmount ? nextSlide : 0;
      this.moveToSlide(nextSlide);
    }, 4000);
  }

  stop() {
    clearInterval(this.timerId);
  }

  reset() {
    this.currentSlide = 0;

    // Move entire row with testimonials to stating point
    const rowEle = this.element.querySelector(`.${ROW_CLASS}`);
    rowEle.style.transform = "";
  }

  moveToSlide(i) {
    const previousSlide = this.currentSlide;
    this.currentSlide = i;
    if (this.currentSlide === previousSlide) return;

    // Add and remove --current BEM modifier class
    const navigationEle = this.element.querySelector(`.${NAVIGATION_CLASS}`);

    const previousSlideEle = navigationEle.children[previousSlide];
    previousSlideEle.classList.remove(CURRENT_MODIFIER_CLASS);

    const currentSlideEle = navigationEle.children[this.currentSlide];
    currentSlideEle.classList.add(CURRENT_MODIFIER_CLASS);

    // Move enire row with tesimonials
    const rowEle = this.element.querySelector(`.${ROW_CLASS}`);
    const translateX =
      this.currentSlide * -(100 + TESTIMONIAL_MARGIN_RIGHT_PERCENTAGE);
    rowEle.style.transform = `translateX(${translateX}%)`;
  }

  _buildNavigation() {
    const screenSizeType = getScreenSizeType();

    // Caculate the amount of slides
    // The amount of testimonials per slide depends on the screen size type
    this.slidesAmount = getSlidesAmount(
      this.testimonialsAmount,
      screenSizeType
    );

    // Create navigation based on amount of slides
    const navigationEle = this.element.querySelector(`.${NAVIGATION_CLASS}`);
    navigationEle.innerHTML = "";

    for (let i = 0; i < this.slidesAmount; i++) {
      const dotEle = document.createElement("div");
      dotEle.classList.add(DOT_CLASS);
      if (i == 0) dotEle.classList.add(CURRENT_MODIFIER_CLASS);

      dotEle.addEventListener("click", () => this._onNavigationDotClick(i));
      navigationEle.appendChild(dotEle);
    }
  }

  _adaptToScreenSizeChange() {
    this.stop();
    this.reset();
    this._buildNavigation();
    this.start();
  }

  _onNavigationDotClick(i) {
    this.stop();
    this.moveToSlide(i);
  }
}

export { Testimonials };
