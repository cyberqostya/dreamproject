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
  submitBtn: document.forms.callback.elements.submit,
  subtitle: document.querySelector('.end__subtitle'),
  success: document.querySelector('.end__success'),
  successMessageName: document.querySelector('.end__success-client-name'),
});

// Стили select
document.querySelector('select.end__form-input').addEventListener('click', removeActive);
function removeActive() { console.log(111);
  this.classList.remove('_active'); 
  document.querySelector('select.end__form-input').removeEventListener('click', removeActive)
}

// Проскроллить до середины Портфолио
window.addEventListener('load', () => {
  const proj = document.querySelectorAll('.project');
  proj.forEach(i => {
    const cont = i.querySelector('.project__container');
    const firstim = i.querySelector('.project__image');
    i.scrollLeft = cont.clientWidth / 2 + firstim.clientWidth - i.clientWidth / 2;
  })
  console.log(123);
})


// Обновление для подтягивания стилей из JavaScript
// window.addEventListener('resize', () => { location.reload() });