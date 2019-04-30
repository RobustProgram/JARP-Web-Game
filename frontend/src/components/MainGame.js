/*
 * The actual panel that will show the game logic.
 */
import React from 'react';

class MainGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfFiles: 0,
      fileIndex: 0,
      manifest: {}
    };

    this.loadFileSys("./data/jarp-manifest.json");
  }

  loadFileSys = async (manifestURL) => {
    const manifest = await fetch(manifestURL).then(r => r.json());
    this.setState({manifest});
  }

  render() {
    const { manifest } = this.state;
    let manifestOutput = [];
    for (const [key, value] of Object.entries(manifest)) {
      console.log(key, value);
    }
    return (
      <div>
        <p><strong>Manifest Data</strong></p>
      </div>
    );
  }
}

export default MainGame;