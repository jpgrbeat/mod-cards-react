import React, { Component } from 'react';
import CharacterCard from './cards/characterCard'
class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          Star Wars Cards
        </header>
        <div>
          <CharacterCard/>
        </div>
      </div>
    );
  }
}

export default App;
