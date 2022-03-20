import { useEffect, useState } from 'react';
import * as Annotorious from '@recogito/annotorious-openseadragon';

export default props => {

  const [ annotations, setAnnotations ] = useState({});

  useEffect(() => {
    if (props.viewer) {
      console.log(props);

      const anno = Annotorious(props.viewer);

      const existing = annotations[props.label] ? 
        [...annotations[props.label], ...props.annotations[props.windowId] || [] ] :
        props.annotations[props.windowId] || [];

      anno.setAnnotations(existing);

      anno.on('createAnnotation', annotation => {
        setAnnotations({
          ...annotations,
          [props.label]: [...existing, annotation ]
        });
      });

      anno.on('updateAnnotation', annotation => {
        setAnnotations({
          ...annotations,
          [props.label]: existing.map(a => a.id === annotation.id ? 
            annotation : a)
        });
      });
      
      anno.on('deleteAnnotation', annotation => {
        setAnnotations({
          ...annotations,
          [props.label]: existing.filter(a => a.id !== annotation.id)
        });
      });

      return (() => anno.destroy());
    }
  }, [ props.viewer, props.label ]);

  return props.children;

}