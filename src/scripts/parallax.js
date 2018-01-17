import Rellax from 'rellax';

const PARALLAX_CLASS = '.js-parallax';

export default function init() {
  let rellax;

  window.addEventListener('resize', () => {
    const width = window.innerWidth;

    if (width >= 1200 && !rellax) {
      rellax = new Rellax(PARALLAX_CLASS, {
        speed: -2,
        center: false,
        round: true,
        vertical: true,
        horizontal: false
      });
    } else if (rellax && rellax.destroy && width < 1140) {
      rellax.destroy();
      rellax = undefined;
    }
  });
}
