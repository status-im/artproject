/* eslint-disable class-methods-use-this */
import inView from 'in-view';

const ACTIVE_CLASS = 'active';

class Reveal {
  init() {
    this.revealProfiles();
  }

  revealProfiles() {
    inView.offset(200);
    inView('.js-profile')
      .on('enter', el => el.classList.add(ACTIVE_CLASS));
  }
}

export default function init() {
  return new Reveal().init();
}
