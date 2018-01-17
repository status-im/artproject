/* eslint-disable class-methods-use-this */
import inView from 'in-view';

const ACTIVE_CLASS = 'active';
const REVEAL_PROFILE_SELECTOR = '.js-profile';
const REVEAL_BLOCK_SELECTOR = '.js-reveal-block';

class Reveal {
  init() {
    this.revealProfiles();
    this.revealBlocks();
  }

  revealProfiles() {
    inView.offset(200);
    inView(REVEAL_PROFILE_SELECTOR)
      .on('enter', el => el.classList.add(ACTIVE_CLASS));
  }

  revealBlocks() {
    inView.offset(0);
    inView(REVEAL_BLOCK_SELECTOR)
      .on('enter', (el) => {
        const randNum = Math.floor(Math.random() * 30) + 1;
        const timeout = 10 * randNum;
        setTimeout(() => el.classList.add(ACTIVE_CLASS), timeout);
      });

    const blocks = document.querySelectorAll(REVEAL_BLOCK_SELECTOR);

    blocks.forEach((block) => {
      block.addEventListener('transitionend', () => block.classList.add('js-reveal-text'));
    });
  }
}

export default function init() {
  return new Reveal().init();
}
