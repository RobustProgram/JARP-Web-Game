import React from 'react';

import Documentation from './components/Documentation';
import MainGame from './components/MainGame';

class App extends React.Component {
  state = { currentPage: 0 }

  switchToPage = page => { this.setState({currentPage: page}); }

  render() {
    const { currentPage } = this.state;
    let displayPage = "";
    if ( currentPage === 0 ) {
      displayPage = (
        <div>
          <div className="mobile-title text-center">
            JARP REACT GAME
          </div>
          <p>
            This is just a to test out 2 features that I wanted to implement.
          </p>
          <ol>
            <li>Creating a basic game API using JSON</li>
            <li>Using encryption technology to transport the API information</li>
          </ol>
          <p>
            The game will work either by loading up local information or retrieving the
            information for the game via a remote server.
          </p>
          <button className="btn btn-main" onClick={() => this.switchToPage(2)}>START GAME</button>
          <button className="btn btn-ghost" onClick={() => this.switchToPage(1)}>DOCUMENTATION</button>
        </div>
      );
    } else if ( currentPage === 1 ) {
      displayPage = <Documentation back={() => this.switchToPage(0)} />;
    } else if ( currentPage === 2 ) {
      displayPage = <MainGame />;
    }
    return <div className="application">{displayPage}</div>;
  }
}

export default App;
