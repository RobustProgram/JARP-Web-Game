import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';

import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

class Intro extends React.Component {
  render() {
    const strExp = `
      {
        "name" : "The game of life",
        "description" : [
          "This is a game where you are able to play as me, Johnny, as I try to survive life."
        ],
        "author" : "Johnny",
        "version" : "0.0.1"
      }
    `;
    return (
      <div>
        <div className="mobile-title text-center">
          JARP REACT GAME DOCUMENTATION
        </div>
        <p>
            <strong>Options file</strong>, used to describe to the user what the game is able
        </p>
        <SyntaxHighlighter language='javascript' style={docco}>{strExp}</SyntaxHighlighter>
        <button className="btn btn-ghost" onClick={this.props.back}>Go back</button>
      </div>
    );
  }
}

export default Intro;