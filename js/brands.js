const ITEM__CLASS = 'brands__item';
const LIST__CLASS = 'brands__list';
const TRANSITION_DURATION = 1000;

class Brands {

    constructor(element) {
        this.element = element;
        this.currentBrand = 0;
        this.brandsAmount = document.querySelectorAll(`.${ITEM__CLASS}`).length;
        this._addBrandClones();
    }
    
    start() {
        this.timerId = setInterval(()=> {
            this.moveToNextBrand();
        }, 2000)
    }

    stop() {
        clearInterval(this.timerId);
    }

    moveToNextBrand() {
        const listEle = document.querySelector(`.${LIST__CLASS}`)
        const itemWidth = document.querySelector(`.${ITEM__CLASS}`).offsetWidth;
       
        let nextBrand = this.currentBrand + 1;
        nextBrand = (nextBrand < this.brandsAmount) ? nextBrand : 0;

        if (nextBrand !== 0) {
            // Move to next brand
            const offsetX = -(nextBrand * itemWidth);
            listEle.style.transform = `translateX(${offsetX}px)`;
            this.currentBrand = nextBrand;
        } else {
            // Move from the last original brand to the first cloned brand
            const offsetX = -(this.brandsAmount * itemWidth);
            listEle.style.transform = `translateX(${offsetX}px)`;

            // Flash back to the first original brand, without any animations
            // This seamless transition gives the illusion of inifite movement
            setTimeout(()=> {
                listEle.style.transition = 'none';
                listEle.style.transform = 'none';
                setTimeout(()=> {
                    listEle.style.transition = '';
                }, 50);
                
            }, TRANSITION_DURATION);
            this.currentBrand = 0;
        }
    }

    _addBrandClones() {
        const listEle = document.querySelector(`.${LIST__CLASS}`);

        const clonedBrandEles = [
            ...listEle.cloneNode(true).childNodes,
            ...listEle.cloneNode(true).childNodes
        ];

        clonedBrandEles.forEach((ele) => listEle.appendChild(ele));
    }

}

export {Brands};