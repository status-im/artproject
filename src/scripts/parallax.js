import Rellax from 'rellax';

const PARALLAX_CLASS = '.js-parallax';

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
  initializeRellax();

  window.addEventListener('resize', () => {
    const width = window.innerWidth;

    if (width >= 1200 && rellax === undefined) {
      rellax = initializeRellax();
    } else if (rellax && rellax.destroy && width < 1200) {
      rellax.destroy();
      rellax = undefined;
    }
  });
}
