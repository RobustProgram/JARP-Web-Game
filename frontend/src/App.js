/*
 * The main page of the website. This will act as the 'router' as it will be used to
 * help display the different panels.
 */
import React from 'react';

import Documentation from './components/Documentation';
import MainGame from './components/MainGame';
import Level from './components/Level';

class App extends React.Component {
  /*
   * The page index will determine which panel is shown to the user.
   * Panel 0 will show the front page.
   * Panel 1 will show the documentation pages.
   * Panel 2 will show the game itself.
   */
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
          <button className="btn btn-main" onClick={() => this.switchToPage(2)}>
            LOAD GAME
          </button>
          <button className="btn btn-ghost" onClick={() => this.switchToPage(1)}>
            DOCUMENTATION
          </button>
        </div>
      );
    } else if ( currentPage === 1 ) {
      displayPage = <Documentation back={() => this.switchToPage(0)} />;
    } else if ( currentPage === 2 ) {
      displayPage = <MainGame startLevel={() => this.switchToPage(3)} />;
    } else if ( currentPage === 3 ) {
      displayPage = <Level />;
    }
    return <div className="application">{displayPage}</div>;
  }
}

export default App;
