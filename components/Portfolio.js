class Portfolio {
  constructor(options) {
    this.container = options.container;
    this.project = options.project;
    this.projectContainer = options.projectContainer;
    this.leftImage = options.leftImage;
    this.leftDirection = options.leftDirection;
    this.rightDirection = options.rightDirection;
    this.direction = {
      left: 'left',
      right: 'right',
    }

    this.scrollLength;

    // Проскроллить до середины Портфолио
    window.addEventListener('load', this.setCenterScroll);

    // Обработчик для кнопок скролла
    this.leftDirection.addEventListener('click', this.scroll.bind(this, this.direction.left));
    this.rightDirection.addEventListener('click', this.scroll.bind(this, this.direction.right));

    // Обработчик для снятия мыши и возвращение в исходное
    this.container.addEventListener('mouseleave', this.setCenterScroll);
  }

  setCenterScroll = () => { this.project.scrollLeft = this.projectContainer.clientWidth / 2 + this.leftImage.clientWidth - this.project.clientWidth / 2 }

  scroll(direction) {
    switch (direction) {
      case this.direction.left:
        this.project.scrollLeft = 0;
        break;

      case this.direction.right:
        this.project.scrollLeft = this.project.scrollLeft + 10000;
        break;
    }
  }
}