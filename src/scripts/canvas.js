/* eslint-disable */
import inView from 'in-view';

class Canvas {
  constructor() {
    this.initConnectCanvas();
    this.initKleinCanvas();
  }

  initConnectCanvas() {
    const connect = new CABLES.Patch({
      patchFile: 'assets/connect.json',
      prefixAssetPath: '',
      glCanvasId: 'connect',
      glCanvasResizeToWindow: true,
      silent: true,
    });

    connect.pause();

    inView.offset(0);
    inView('.team').on('enter', () => connect.resume());
    inView('.team').on('exit', () => connect.pause());
  }

  initKleinCanvas() {
    CABLES.EMBED.addPatch(
      'klein',
      {
        patchFile: 'assets/klein.json',
        prefixAssetPath: '',
        silent: true
      }
    )

    CABLES.patch.pause();

    inView('.hero').on('enter', () => CABLES.patch.resume());
    inView('.hero').on('exit', () => CABLES.patch.pause());
  }
}

export default function init() {
  new Canvas();
}
