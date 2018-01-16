import 'babel-polyfill';
import 'vanilla-tilt';
import nav from './nav';
import scroll from './scroll';
import parallax from './parallax';
import reveal from './reveal';

document.addEventListener('DOMContentLoaded', () => {
  nav();
  scroll();
  parallax();
  reveal();

  CABLES.patch = new CABLES.Patch(
    {
      patchFile: 'klein.json',
      prefixAssetPath: '',
      glCanvasId: 'glcanvas'
    });
});
