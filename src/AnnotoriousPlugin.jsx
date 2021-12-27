import { Component } from 'react';
import * as Annotorious from '@recogito/annotorious-openseadragon';

export default class AnnotoriousPlugin extends Component {

  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(next) {
    // Used to include props.viewer!?
    console.log('next props', next);
    if (next.viewer)
      Annotorious(next.viewer, {});
  }

  render() {
    return this.props.children;
  }

}