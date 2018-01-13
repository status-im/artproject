import SmoothScroll from 'smooth-scroll';

export default function init() {
  return new SmoothScroll('a[href^="#"]', {
    speed: 700,
    offset: 95,
    easing: 'easeOut'
  });
}
