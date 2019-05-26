import React from 'react';
import { toast } from 'react-toastify';

import { connect } from 'react-redux';

import { updateLevel } from './redux-actions/level-action';

class Level extends React.Component {
  state = {
    currentLoc : this.props.level.currentLoc
  }

  errNotify = (err, msg = "") => toast.error(msg + ( msg === "" ? "" : ". ") + err.name + ": " + err.message);
  changeToLoc = locId => { this.setState({currentLoc: locId}); }
  restart = () => { this.setState({currentLoc: this.props.level.currentLoc}); }
  reload = async () => {
    const levelURL = this.props.level.levelURL;
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
    const { currentLoc } = this.state;
    const { level } = this.props;
    const moveOptions = level.locations[currentLoc]["move-options"];
    let description = "";
    level.locations[currentLoc].description.forEach((elm, i) => {
      if (i === 0)
        description += elm;
      else
        description += (" " + elm);
    });

    const moveOptionsBtn = [];
    for (let i = 0; i < moveOptions.length; i++) {
      const moveOptionName = level.locations[moveOptions[i]].name;
      moveOptionsBtn.push(
        <button className="btn btn-move" key={i} onClick={() => this.changeToLoc(moveOptions[i])}>
          {moveOptionName}
        </button>
      );
    }

    return (
      <div className="level-panel">
        <div>
          <button className="btn btn-small" onClick={this.restart}>RESTART</button>
          <span style={{padding:"5px"}}></span>
          <button className="btn btn-small" onClick={this.reload}>RELOAD FILE</button>
        </div>
        <div className="mobile-title text-center">
          {level.name}
        </div>
        <p>{description}</p>
        <p>{moveOptionsBtn}</p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
}
const mapActiontoProps = { onUpdateLevel: updateLevel }

export default connect(mapStateToProps, mapActiontoProps)(Level);