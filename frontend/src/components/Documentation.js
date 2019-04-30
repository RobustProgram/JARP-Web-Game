import React from 'react';

import Intro from './documentation/Intro';

class Documentation extends React.Component {
  state = { currentDoc: 0 }
  render() {
    const { currentDoc } = this.state;
    let displayDoc = "";

    if ( currentDoc === 0 ) {
      displayDoc = <Intro back={this.props.back} />
    }

    return displayDoc;
  }
}

export default Documentation;