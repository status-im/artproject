import Rellax from 'rellax';

const PARALLAX_CLASS = '.js-parallax';

export default function init() {
  return new Rellax(PARALLAX_CLASS, {
    speed: -2,
    center: false,
    round: true,
    vertical: true,
    horizontal: false
  });
}
