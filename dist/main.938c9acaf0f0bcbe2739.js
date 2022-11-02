(()=>{"use strict";(()=>{function e(e){return function(e){if(Array.isArray(e))return t(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(e){if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(e,n):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r="brands__item",i="brands__list",o=function(){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.element=e,this.currentBrand=0,this.brandsAmount=document.querySelectorAll(".".concat(r)).length,this._addBrandClones()}var o,a;return o=t,(a=[{key:"start",value:function(){var e=this;this.timerId=setInterval((function(){e.moveToNextBrand()}),2e3)}},{key:"stop",value:function(){clearInterval(this.timerId)}},{key:"moveToNextBrand",value:function(){var e=document.querySelector(".".concat(i)),t=document.querySelector(".".concat(r)).offsetWidth,n=this.currentBrand+1;if(0!==(n=n<this.brandsAmount?n:0)){var o=-n*t;e.style.transform="translateX(".concat(o,"px)"),this.currentBrand=n}else{var a=-this.brandsAmount*t;e.style.transform="translateX(".concat(a,"px)"),setTimeout((function(){e.style.transition="none",e.style.transform="none",setTimeout((function(){e.style.transition=""}),50)}),1e3),this.currentBrand=0}}},{key:"_addBrandClones",value:function(){var t=document.querySelector(".".concat(i));[].concat(e(t.cloneNode(!0).childNodes),e(t.cloneNode(!0).childNodes)).forEach((function(e){return t.appendChild(e)}))}}])&&n(o.prototype,a),Object.defineProperty(o,"prototype",{writable:!1}),t}();function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var s="slideshow__slide",c="numbered-captions__item",l="--current",u=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.element=t,this.currentSlide=0;var n=this.element.querySelectorAll(".".concat(s)),r=this.element.querySelectorAll(".".concat(c));n[this.currentSlide].classList.add(l),r[this.currentSlide].classList.add(l),this.slidesAmount=n.length,this._buildNavigation()}var t,n;return t=e,(n=[{key:"start",value:function(){var e=this;this.timerId=setInterval((function(){var t=e.currentSlide+1;t=t<e.slidesAmount?t:0,e.moveToSlide(t)}),4e3)}},{key:"stop",value:function(){clearInterval(this.timerId)}},{key:"moveToSlide",value:function(e){var t=this.currentSlide;if(this.currentSlide=e,this.currentSlide!==t){var n=this.element.querySelectorAll(".".concat(s)),r=this.element.querySelectorAll(".".concat(c));n[t].classList.remove(l),n[this.currentSlide].classList.add(l),r[t].classList.remove(l),r[this.currentSlide].classList.add(l)}}},{key:"_buildNavigation",value:function(){var e=this;this.element.querySelectorAll(".".concat(c)).forEach((function(t,n){return t.addEventListener("click",(function(){return e._onNavigationCaptionClick(n)}))}))}},{key:"_onNavigationCaptionClick",value:function(e){this.stop(),this.moveToSlide(e),this.start()}}])&&a(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),d=Object.freeze({SM:0,MD:1,LG:2,XL:3});function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var f="testimonials__navigation",v="testimonials__row",m="--current",y=function(){function e(t){var n,r,i=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.element=t,this.currentSlide=0,this.testimonialsAmount=this.element.querySelectorAll(".".concat("testimonial")).length,this._buildNavigation(),this._adaptToScreenSizeChange=(n=this._adaptToScreenSizeChange,100,function(){var e=arguments,t=this;clearTimeout(r),r=setTimeout((function(){return n.call(t,e)}),100)}),window.addEventListener("resize",(function(){i._adaptToScreenSizeChange()}))}var t,n;return t=e,(n=[{key:"start",value:function(){var e=this;this.timerId=setInterval((function(){var t=e.currentSlide+1;t=t<e.slidesAmount?t:0,e.moveToSlide(t)}),4e3)}},{key:"stop",value:function(){clearInterval(this.timerId)}},{key:"reset",value:function(){this.currentSlide=0,this.element.querySelector(".".concat(v)).style.transform=""}},{key:"moveToSlide",value:function(e){var t=this.currentSlide;if(this.currentSlide=e,this.currentSlide!==t){var n=this.element.querySelector(".".concat(f));n.children[t].classList.remove(m),n.children[this.currentSlide].classList.add(m);var r=this.element.querySelector(".".concat(v)),i=-102.651*this.currentSlide;r.style.transform="translateX(".concat(i,"%)")}}},{key:"_buildNavigation",value:function(){var e,t=this,n=(e=window.innerWidth)>1600?d.XL:e>992?d.LG:e>768?d.MD:d.SM;this.slidesAmount=function(e,t){switch(t){case d.SM:case d.MD:return e;case d.LG:return Math.ceil(e/2);case d.XL:return Math.ceil(e/3)}}(this.testimonialsAmount,n);var r=this.element.querySelector(".".concat(f));r.innerHTML="";for(var i=function(e){var n=document.createElement("div");n.classList.add("testimonials__dot"),0==e&&n.classList.add(m),n.addEventListener("click",(function(){return t._onNavigationDotClick(e)})),r.appendChild(n)},o=0;o<this.slidesAmount;o++)i(o)}},{key:"_adaptToScreenSizeChange",value:function(){this.stop(),this.reset(),this._buildNavigation(),this.start()}},{key:"_onNavigationDotClick",value:function(e){this.stop(),this.moveToSlide(e)}}])&&h(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();new o(document.querySelector(".brands")).start(),new u(document.querySelector(".slideshow")).start(),new y(document.querySelector(".testimonials")).start()})()})();