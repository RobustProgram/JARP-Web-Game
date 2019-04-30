import React from 'react';

import Documentation from './components/Documentation';

class App extends React.Component {
  state = { currentPage: 0 }

  switchBack = () => { this.setState({currentPage: 0}); }
  switchToDocs = () => { this.setState({currentPage: 1}); }

  render() {
    const { currentPage } = this.state;
    let displayPage = "";
    if ( currentPage === 0 ) {
      displayPage = (
        <div>
          <div className="mobile-title text-center">
            JUST ANOTHER RP REACT GAME
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
          <button className="btn btn-main">START GAME</button>
          <button className="btn btn-ghost" onClick={this.switchToDocs}>DOCUMENTATION</button>
        </div>
      );
    } else if ( currentPage === 1 ) {
      displayPage = <Documentation back={this.switchBack} />;
    }
    return <div className="application">{displayPage}</div>;
  }
}

export default App;
