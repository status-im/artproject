import 'babel-polyfill';
import 'vanilla-tilt';
import nav from './nav';
import scroll from './scroll';

document.addEventListener('DOMContentLoaded', () => {
  nav();
  scroll();
});
