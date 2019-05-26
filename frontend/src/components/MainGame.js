/*
 * The actual panel that will show the game logic.
 */
import React from 'react';
import Loader from 'react-loader-spinner';
import { toast } from 'react-toastify';

import { connect } from 'react-redux';
import { updateManifest } from './redux-actions/manifest-action';
import { updateOptions } from './redux-actions/options-action';
import { updateLevel } from './redux-actions/level-action';

class MainGame extends React.Component {
  errNotify = (err, msg = "") => toast.error(msg + ( msg === "" ? "" : ". ") + err.name + ": " + err.message);

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
    if (this.props.manifest.loaded !== prevProps.manifest.loaded) {
      this.loadOptions();
      this.loadLevel();
    }
  }

  loadManifestSys = async (manifestURL) => {
    // Load the manifest.
    const manifest = await fetch(manifestURL).then(r => r.json().catch(err => {
      this.errNotify(err, "Unable to load json file " + manifestURL);
      return {error: true};
    }));
    if (manifest.error === undefined) {
      // Load up the baseURL from manifestURL
      let baseURL = manifestURL.toLowerCase().replace("/jarp-manifest.json", "");
      manifest.loaded = true;
      manifest.baseURL = baseURL;
      this.props.onUpdateManifest(manifest);
    }
  }

  loadOptions = async () => {
    // Load the options.json file as dictated by the manifest.
    let optionsURLRaw = this.props.manifest.options;
    if (optionsURLRaw.charAt(0) === '.')
      optionsURLRaw = optionsURLRaw.substr(1);
    let optionsURL = this.props.manifest.baseURL + optionsURLRaw;
    const options = await fetch(optionsURL).then(r => r.json().catch(err => {
      this.errNotify(err, "Unable to load json file " + optionsURL);
      return {error: true};
    }));
    if (options.error === undefined) {
      options.loaded = true;
      this.props.onUpdateOptions(options);
    }
  }

  loadLevel = async () => {
    let levelURLRaw = this.props.manifest.start;
    if (levelURLRaw.charAt(0) === '.')
      levelURLRaw = levelURLRaw.substr(1);
    let levelURL = this.props.manifest.baseURL + levelURLRaw;
    const level = await fetch(levelURL).then(r => r.json().catch(err => {
      this.errNotify(err, "Unable to load json file " + levelURL);
      return {error: true};
    }));
    if (level.error === undefined) {
      level.loaded = true;
      level.levelURL = levelURL;
      this.props.onUpdateLevel(level);
    }
  }

  render() {
    const { options, level } = this.props;
    return (
      <div>
        {
          options.loaded ?
          <div>
            <div className="mobile-title text-center">{options.name}</div>
            <p>{options.description}</p>
            <p style={{textAlign:"right"}}>
              <code>Author: {options.author} | Version: {options.version}</code>
            </p>
          </div>
          :
          <div className="loader-wrapper">
            <Loader type="Oval" color="#000000" height={32} width={32} />
            &nbsp;&nbsp;
            Loading Game ...
          </div>
        }
        {
          level.loaded ?
          <button className="btn btn-main" onClick={this.props.startLevel}>START GAME</button>
          :
          <button className="btn btn-main" disabled>
            <Loader  type="ThreeDots" color="#FFFFFF" height="24" width="24" />   
          </button>
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
}

const mapActiontoProps = {
  onUpdateManifest: updateManifest,
  onUpdateOptions: updateOptions,
  onUpdateLevel: updateLevel
}

export default connect(mapStateToProps, mapActiontoProps)(MainGame);