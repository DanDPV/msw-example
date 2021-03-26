import Character from 'components/Character';
import RandomQuote from 'components/RandomQuote';
import React from 'react';

function App() {
  return (
    <div>
      <h1>Breaking bad API</h1>
      <RandomQuote />
      <Character id={1} />
    </div>
  );
}

export default App;
