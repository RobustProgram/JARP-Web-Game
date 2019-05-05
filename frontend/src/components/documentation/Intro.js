import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';

import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

class Intro extends React.Component {
  render() {
    const manifestStr = `
      {
        "options" : "Options availabe for the game.",
        "start" : "The starting location for the game."
      }
    `;
    const optionStr = `
      {
        "name" : "The game of life",
        "description" : [
          "This is a game where you are able to play as me, Johnny, as I try to survive life."
        ],
        "author" : "Johnny",
        "version" : "0.0.1"
      }
    `;
    const itemsStr = `
      {
        (name of the item) : {
          "icon_url" : "link to the icon that will represent this icon.",
          "description" : "Tell the user what this item does",
          "max" : (The maximum number of items the player can hold in their inventory.)
        }
      }
    `;
    return (
      <div>
        <div className="mobile-title text-center">
          JARP REACT GAME DOCUMENTATION
        </div>
        <p>
            <strong>Manifest file</strong>, used to describe metadata for the game
        </p>
        <SyntaxHighlighter language='javascript' style={docco}>{manifestStr}</SyntaxHighlighter>
        <p>
            <strong>Options file</strong>, used to describe to the user what the game is able
        </p>
        <SyntaxHighlighter language='javascript' style={docco}>{optionStr}</SyntaxHighlighter>
        <p>
            <strong>Items file</strong>, used to describe to the items available in the game
        </p>
        <SyntaxHighlighter language='javascript' style={docco}>{itemsStr}</SyntaxHighlighter>
        <button className="btn btn-ghost" onClick={this.props.back}>Go back</button>
      </div>
    );
  }
}

export default Intro;