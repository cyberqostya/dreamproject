const sliders = {};

function addSlide(mobileWidth, name, data) {
  if (document.documentElement.clientWidth <= mobileWidth) {
    sliders[name] = new Slider(data);
  }
}

// Создание слайдеров
addSlide(
  995, 
  'whyweSlider', 
  {
    sliderWindow: document.querySelector('.whywe__advantages-window'),
    sliderRoad: document.querySelector('.whywe__advantages'),
    slides: document.querySelectorAll('.whywe__advantage'),
    dotsContainer: document.querySelector('.whywe__slider-dots'),
    sliderDigitCounter: document.querySelector('.whywe__slider-counter'),
    arrows: {
      sliderLeftArrow: document.querySelector('.whywe__slider-arrow_left'),
      sliderRightArrow: document.querySelector('.whywe__slider-arrow_right'),
    },
  }
);



// Форма
const feedbackForm = new End({
  end: document.querySelector('.end'),
  form: document.forms.callback,
  nameInput: document.forms.callback.elements.name,
  telInput: document.forms.callback.elements.tel,
  uslugiInput: document.forms.callback.elements.uslugi,
  submitBtn: document.forms.callback.elements.submit,
  subtitle: document.querySelector('.end__subtitle'),
  success: document.querySelector('.end__success'),
  successMessageName: document.querySelector('.end__success-client-name'),
  upBtn: document.querySelector('.end__up'),
});



// Портфолио
const portfolios = [];

document.querySelectorAll('.project__wrapper').forEach(i => portfolios.push(new Portfolio({
  container: i,
  project: i.querySelector('.project'),
  projectContainer: i.querySelector('.project__container'),
  leftImage: i.querySelector('.project__image'),
  leftDirection: i.querySelector('.project__direction_left'),
  rightDirection: i.querySelector('.project__direction_right'),
})));



// Изменение favicon при переходе на темную тему браузера
if(window.matchMedia('(prefers-color-scheme: dark)').matches) document.querySelector('link[rel*="shortcut"]').setAttribute('href', './images//favicon-theme-dark.svg');