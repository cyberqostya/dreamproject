class End {
  constructor(data) {

    // DOM Элементы
    this.form = data.form;
    this.nameInput = data.nameInput;
    this.telInput = data.telInput;
    this.uslugiInput = data.uslugiInput;
    this.submitBtn = data.submitBtn;
    this.upBtn = data.upBtn;

    this.end = data.end;
    this.subtitle = data.subtitle;
    this.success = data.success;
    this.successMessageName = data.successMessageName;

    // Слушатель на отправку формы
    this.form.addEventListener('submit', this.submitForm);
    this.setEndHeight(this.end.clientHeight);

    // Стили select
    this.uslugiInput.addEventListener('click', this.styleSelect);

    // Слушатель на кнопку ВВЕРХ
    this.upBtn.addEventListener('click', () => { 
      document.documentElement.style = 'scroll-behavior: smooth'; 
      document.documentElement.scrollTop = 0;
      document.documentElement.removeAttribute('style');
    })
  }

  submitForm = (e) => {
    e.preventDefault();
    
    let formData = new FormData(this.form);

    // fetch('sendmail.php', {
    //   method: 'POST',
    //   body: formData,
    // })
    // .then(response => {
    //   if(response.ok) { this.drowSuccess() }
    //   else { alert('Произошла ошибка на сервре. Перезагрузите страницу и попробуйте снова.') }
    // });

  }

  styleSelect = () => {
    this.uslugiInput.classList.remove('_active'); 
    this.uslugiInput.removeEventListener('click', this.styleSelect);
  }

  setEndHeight(height) {
    this.end.style.height = height + 'px';
  }

  drowSuccess() {
    this.successMessageName.textContent = this.nameInput.value;
    this.success.style = 'display: block';
    this.setEndHeight(this.end.clientHeight - this.subtitle.clientHeight - this.form.clientHeight + this.success.clientHeight);
    this.subtitle.style = 'display: none';
    this.form.style = 'display: none';
  }
}