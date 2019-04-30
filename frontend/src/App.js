import React from 'react';

function App() {
  return (
    <div className="application">
      <div className="mobile-title text-center">JUST ANOTHER RP REACT GAME</div>
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
      <button className="btn btn-ghost">DOCUMENTATION</button>
    </div>
  );
}

export default App;
