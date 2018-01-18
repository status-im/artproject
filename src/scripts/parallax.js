import Rellax from 'rellax';

const PARALLAX_CLASS = '.js-parallax';
const PARALLAX_BREAKPOINT = 1200;

function initializeRellax() {
  return new Rellax(PARALLAX_CLASS, {
    speed: -2,
    center: false,
    round: true,
    vertical: true,
    horizontal: false
  });
}

export default function init() {
  let rellax;

  if (window.innerWidth > PARALLAX_BREAKPOINT) {
    initializeRellax();
  }

  window.addEventListener('resize', () => {
    const width = window.innerWidth;

    if (width >= PARALLAX_BREAKPOINT && rellax === undefined) {
      rellax = initializeRellax();
    } else if (rellax && rellax.destroy && width < PARALLAX_BREAKPOINT) {
      rellax.destroy();
      rellax = undefined;
    }
  });
}
