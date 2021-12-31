import { useEffect } from 'react';
// import * as Annotorious from '@recogito/annotorious-openseadragon';

export default props => {

  useEffect(() => {
    console.log('effect', props.viewer)
  }, [ props.viewer ]);

  return props.children;

}