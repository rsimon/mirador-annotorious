import { useEffect } from 'react';
import * as Annotorious from '@recogito/annotorious-openseadragon';

export default props => {

  useEffect(() => {
    if (props.viewer) {
      const anno = Annotorious(props.viewer);
    }
  }, [ props.viewer ]);

  return props.children;

}