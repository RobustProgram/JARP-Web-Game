/*
 * The actual panel that will show the game logic.
 */
import React from 'react';

import { connect } from 'react-redux';
import { updateManifest } from './redux-actions/manifest-action';
import { updateOptions } from './redux-actions/options-action';

class MainGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfFiles: 0,
      fileIndex: 0
    };

    this.loadManifestSys("./data/jarp-manifest.json");
  }

  componentDidUpdate(prevProps) {
    // Check when the component has being updated. This means Redux
    // has updated its store.
    if (this.props.manifest.loaded !== prevProps.manifest.loaded)
      this.loadOptions();
  }

  loadOptions = async () => {
    // Load the options.json file as dictated by the manifest.
    let optionsURLRaw = this.props.manifest.options;
    if (optionsURLRaw.charAt(0) === '.')
      optionsURLRaw = optionsURLRaw.substr(1);
    let optionsURL = this.props.manifest.baseURL + optionsURLRaw;
    const options = await fetch(optionsURL).then(r => r.json());
    options.loaded = true;
    this.props.onUpdateOptions(options);
  }

  loadManifestSys = async (manifestURL) => {
    // Load the manifest.
    const manifest = await fetch(manifestURL).then(r => r.json());
    // Load up the baseURL from manifestURL
    let baseURL = manifestURL.toLowerCase().replace("/jarp-manifest.json", "");
    manifest.loaded = true;
    manifest.baseURL = baseURL;
    this.props.onUpdateManifest(manifest);
  }

  render() {
    const { manifest, options } = this.props;
    console.log(this.props);
    let manifestOutput = [];
    for (const [key, value] of Object.entries(manifest)) {
      manifestOutput.push(<li key={key}>{key} = {value.toString()}</li>);
    }
    let optionsOutput = [];
    if (options)
      for (const [key, value] of Object.entries(options)) {
        optionsOutput.push(<li key={key}>{key} = {value.toString()}</li>);
      }
    return (
      <div>
        <p><strong>Manifest Data</strong></p>
        <ul>{manifestOutput}</ul>
        <p><strong>Options Data</strong></p>
        <ul>{optionsOutput}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
}

const mapActiontoProps = {
  onUpdateManifest: updateManifest,
  onUpdateOptions: updateOptions
}

export default connect(mapStateToProps, mapActiontoProps)(MainGame);