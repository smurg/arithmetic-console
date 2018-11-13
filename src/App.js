import React, { Component } from 'react';
import './App.css';
import Console from './Components/Console';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
      
      <div className="main container">
        <header className="App-header">
          <h1 className="App-title">MyConsole App</h1>
        </header>
        <Console />
      </div>
    </div>
    );
  }
}

export default App;
