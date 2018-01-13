import SmoothScroll from 'smooth-scroll';

const LINKS_SELECTOR = 'a[href^="#"]';
const SECTION_SELECTOR = '.section';
const HEADER_SELECTOR = '.js-scroll-header';
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

// function listenForActiveSection() {
//   const $sections = document.querySelectorAll(SECTION_SELECTOR);
//   const $header = document.querySelector(HEADER_SELECTOR);

//   document.addEventListener('scroll', () => {
//     const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
//     const $sectionsArray = [...$sections];
//     const $activeSections = $sectionsArray.filter(($section) => {
//       return $section.offsetTop <= scrollPosition + $header.offsetHeight;
//     });

//     const $activeSection = $activeSections[$activeSections.length - 1];

//     history.pushState(undefined, undefined, `#${$activeSection.id}`);
//   });
// }

export default function init() {
  // listenForActiveSection();

  return new SmoothScroll(LINKS_SELECTOR, {
    header: HEADER_SELECTOR,
    speed: 500,
    easing: 'easeInOutQuad',
    before: setActiveClassNames
  });
}
