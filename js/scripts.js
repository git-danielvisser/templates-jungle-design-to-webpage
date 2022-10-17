import {Slideshow} from './slideshow.js';
import {Testimonials} from './testimonials.js';

const slideshowEle = document.querySelector('.slideshow');
const slideshow = new Slideshow(slideshowEle);
slideshow.start();

const testimonialsEle = document.querySelector('.testimonials');
const testimonials = new Testimonials(testimonialsEle);
testimonials.start();