const ACTIVE_CLASS = 'is-active';
const ACTIVATED_CLASS = 'is-activated';

class Nav {
  constructor() {
    this.$burger = document.querySelector('.js-burger');
    this.$nav = document.querySelector('.js-nav');
  }

  init() {
    this.addEvents();
  }

  addEvents() {
    const { $burger, $nav } = this;

    $burger.addEventListener('click', (e) => {
      e.stopPropagation();

      $nav.classList.toggle(ACTIVE_CLASS);
      $burger.classList.toggle(ACTIVE_CLASS);
      $nav.classList.add(ACTIVATED_CLASS);
    });

    $nav.addEventListener('transitionend', ({ target }) => {
      if (target.classList.contains('js-nav-list')) {
        this.$nav.classList.remove(ACTIVATED_CLASS);
      }
    });
  }

}

export default function init() {
  const $menu = document.querySelector('.js-nav');

  if ($menu) {
    new Nav().init();
  }
}
