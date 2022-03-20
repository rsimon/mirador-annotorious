import Mirador from 'mirador/dist/es/src/init'
import AnnotoriousPlugin from './AnnotoriousPlugin';

import '@recogito/annotorious-openseadragon/dist/annotorious.min.css';

const myPlugin = {
  component: AnnotoriousPlugin,
  target: 'OpenSeadragonViewer',
  mode: 'add',
  mapStateToProps: (state, props) => { 
    const { canvases } = props.canvasWorld;

    const canvasAnnotationPages = canvases.reduce((pages, canvas) => 
      [...pages, canvas.canvasAnnotationPages ], []);

    const annotations = canvasAnnotationPages.reduce((annotations, pages ) => {
      const items = pages.reduce((all, page) => [...all, ...page.items ], []);
      return [...annotations, ...items];
    }, []);

    return { annotations };
  }
};

const miradorCfg = {
  id: 'mirador',
  windows: [{
    // manifestId: 'https://iiif.harvardartmuseums.org/manifests/object/299843',
    // canvasId: 'https://iiif.harvardartmuseums.org/manifests/object/299843/canvas/canvas-47174892',
    manifestId: 'https://studio.archipelago.nyc/do/11aa2644-b4ec-11eb-81a8-b74746cb79fe/metadata/iiifmanifest3cws/Agnes%20Meyerhof%20Bookplate_manifest.jsonld',
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