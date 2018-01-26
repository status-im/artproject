import 'babel-polyfill';
import 'vanilla-tilt';
import nav from './nav';
import scroll from './scroll';
import parallax from './parallax';
import reveal from './reveal';
import canvas from './canvas';

document.addEventListener('DOMContentLoaded', () => {
  nav();
  scroll();
  parallax();
  reveal();
  canvas();
});
