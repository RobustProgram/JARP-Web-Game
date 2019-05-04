/*
 * The actual panel that will show the game logic.
 */
import React from 'react';

import { connect } from 'react-redux';
import { updateManifest } from './redux-actions/manifest-action';

class MainGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfFiles: 0,
      fileIndex: 0
    };

    this.loadFileSys("./data/jarp-manifest.json");
  }

  loadFileSys = async (manifestURL) => {
    const manifest = await fetch(manifestURL).then(r => r.json());
    this.props.onUpdateManifest(manifest);
  }

  render() {
    const { manifest } = this.props;
    let manifestOutput = [];
    for (const [key, value] of Object.entries(manifest)) {
      manifestOutput.push(<li key={key}>{key} = {value}</li>);
    }
    return (
      <div>
        <p><strong>Manifest Data</strong></p>
        <ul>{manifestOutput}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
}

const mapActiontoProps = {
  onUpdateManifest: updateManifest
}

export default connect(mapStateToProps, mapActiontoProps)(MainGame);