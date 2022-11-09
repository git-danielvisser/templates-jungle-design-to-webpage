const SCREEN_MD = 768; // Small tablets (portrait view)
const SCREEN_LG = 992; // Tablets and small desktops
const SCREEN_XL = 1600; // Large tablets and desktops

const screenSizeTypes = Object.freeze({
  SM: 0,
  MD: 1,
  LG: 2,
  XL: 3,
});

function getScreenSizeType() {
  const width = window.innerWidth;
  if (width > SCREEN_XL) return screenSizeTypes.XL;
  if (width > SCREEN_LG) return screenSizeTypes.LG;
  if (width > SCREEN_MD) return screenSizeTypes.MD;
  return screenSizeTypes.SM;
}

function debounceDecorator(func, ms) {
  let timerId;
  return function () {
    clearTimeout(timerId);
    timerId = setTimeout(() => func.call(this, arguments), ms);
  };
}

export { screenSizeTypes, getScreenSizeType, debounceDecorator };
