import loadingAttributePolyfill from "/node_modules/loading-attribute-polyfill/dist/loading-attribute-polyfill.module.js";
import { Brands } from "./brands.js";
import { Slideshow } from "./slideshow.js";
import { Testimonials } from "./testimonials.js";

const brandsEle = document.querySelector(".brands");
const brands = new Brands(brandsEle);
brands.start();

const slideshowEle = document.querySelector(".slideshow");
const slideshow = new Slideshow(slideshowEle);
slideshow.start();

const testimonialsEle = document.querySelector(".testimonials");
const testimonials = new Testimonials(testimonialsEle);
testimonials.start();
