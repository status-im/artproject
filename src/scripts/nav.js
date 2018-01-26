const ACTIVE_CLASS = 'is-active';
const ACTIVATED_CLASS = 'is-activated';
let navInstance = '';

class Nav {
  constructor() {
    this.$burger = document.querySelector('.js-burger');
    this.$nav = document.querySelector('.js-nav');
  }

  closeNav() {
    const { $nav, $burger } = this;

    if (!$nav.classList.contains(ACTIVE_CLASS)) return;

    $nav.classList.toggle(ACTIVE_CLASS);
    $burger.classList.toggle(ACTIVE_CLASS);
    $nav.classList.toggle(ACTIVATED_CLASS);
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

export function closeNav() {
  if (navInstance) {
    navInstance.closeNav();

    return true;
  }

  return false;
}

export default function init() {
  const $menu = document.querySelector('.js-nav');

  if ($menu) {
    navInstance = new Nav();
    navInstance.init();
  }
}
