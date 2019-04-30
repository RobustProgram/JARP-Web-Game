import React from 'react';

class MainGame extends React.Component {
  state = { numberOfFiles: 0, fileIndex: 0 }
  render() {
    return (
      <div>
        <div>options.version: {options.version}</div>
        <div>options.name: {options.name}</div>
        <div>options.description: {options.description}</div>
        <div>options.author: {options.author}</div>
      </div>
    );
  }
}

export default MainGame;