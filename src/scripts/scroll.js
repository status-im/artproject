import SmoothScroll from 'smooth-scroll';
import gumshoe from 'gumshoe';
import { closeNav } from './nav';

const LINKS_SELECTOR = 'a[href^="#"]';
const HEADER_SELECTOR = '.js-scroll-header';
const SCROLL_SPEED = 500;
const ACTIVE_CLASS = 'active';

function setActiveClassNames() {
  const $links = document.querySelectorAll(LINKS_SELECTOR);
  const currentHash = location.hash;

  $links.forEach(($link) => {
    if ($link.hash === currentHash) {
      $link.classList.add(ACTIVE_CLASS);
    } else {
      $link.classList.remove(ACTIVE_CLASS);
    }
  });
}

function initGumshoe() {
  gumshoe.init({
    selector: LINKS_SELECTOR,
    selectorHeader: HEADER_SELECTOR,
    activeClass: ACTIVE_CLASS,
    callback: () => {
      const activeLink = document.querySelector(`a.${ACTIVE_CLASS}`);

      if (activeLink && location.hash !== activeLink.hash) {
        if (history.pushState) {
          history.pushState(null, null, activeLink.hash);
        } else {
          location.hash = activeLink.hash;
        }
      }
    }
  });
}

export default function init() {
  initGumshoe();

  return new SmoothScroll(LINKS_SELECTOR, {
    header: HEADER_SELECTOR,
    speed: SCROLL_SPEED,
    easing: 'easeInOutQuad',
    before: () => {
      gumshoe.destroy();
      closeNav();
      setActiveClassNames();
    },
    after: initGumshoe
  });
}
