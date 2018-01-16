class Canvas {
  constructor() {
    this.connect = new CABLES.Patch({
      patchFile: 'assets/connect.json',
      prefixAssetPath: '',
      glCanvasId: 'connect',
      glCanvasResizeToWindow: true
    });

    CABLES.EMBED.addPatch(
      'klein',
      {
        patchFile: 'assets/klein.json',
        prefixAssetPath: ''
      }
    )
  }
}

export default function init() {
  new Canvas();
};
