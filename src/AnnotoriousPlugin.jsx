import { useEffect, useState } from 'react';
import * as Annotorious from '@recogito/annotorious-openseadragon';

export default props => {

  const [ annotations, setAnnotations ] = useState({});

  useEffect(() => {
    if (props.viewer) {
      const anno = Annotorious(props.viewer);

      const existing = annotations[props.label] ? 
        [...annotations[props.label], ...props.annotations || [] ] :
        props.annotations || [];

      console.log('Annotations', existing);

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
  }, [ props.viewer, props.label, props.annotations ]);

  return props.children;

}