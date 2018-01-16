class Canvas {
  constructor() {
    this.connect = new CABLES.Patch({
      patchFile: 'assets/connect.json',
      prefixAssetPath: '',
      glCanvasId: 'connect',
      glCanvasResizeToWindow: true,
      silent: true
    });

    CABLES.EMBED.addPatch(
      'klein',
      {
        patchFile: 'assets/klein.json',
        prefixAssetPath: '',
        silent: true
      }
    )
  }
}

export default function init() {
  new Canvas();
};
