import Mirador from 'mirador/dist/es/src/init'
import AnnotoriousPlugin from './AnnotoriousPlugin';

import '@recogito/annotorious-openseadragon/dist/annotorious.min.css';

const myPlugin = {
  component: AnnotoriousPlugin,
  target: 'OpenSeadragonViewer',
  mode: 'add',
  mapStateToProps: (state, props) => { 
    console.log(state, props);
    // TODO extract annotations?
    return {};
  }
};

const miradorCfg = {
  id: 'mirador',
  windows: [{
    // manifestId: 'https://iiif.harvardartmuseums.org/manifests/object/299843',
    // canvasId: 'https://iiif.harvardartmuseums.org/manifests/object/299843/canvas/canvas-47174892',
    manifestId: 'https://dnoneill.github.io/annonatate/manifests/catalog/0002386/manifest.json',
    thumbnailNavigationPosition: 'far-bottom',
    allowClose: false,
  }],
  window: {
    allowWindowSideBar: false,
    sideBarPanel: '',
    sideBarOpen: true,
  },
  workspace: {
    type: 'not-mosaic-or-elastic',
  }
};

Mirador.viewer(miradorCfg, [myPlugin]);