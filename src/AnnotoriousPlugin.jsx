import { useEffect } from 'react';
// import * as Annotorious from '@recogito/annotorious-openseadragon';

const AnnotoriousPlugin = props => {

  useEffect(() => {
    // Used to include props.viewer at some point...?
    console.log('[AnnotoriousPlugin]', props);
  });

  return props.children;

}

export default AnnotoriousPlugin;