import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    textMirror: ""
  }

  updateText = (textMirror) => {
    this.setState(() => ({
      textMirror: textMirror.trim()
    }))
  }

  render() {
    
    const showingEcho = this.state.textMirror === ''
    ? 'This should mirror the text you typed into the input field.'
	: this.state.textMirror
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
          <input type="text" placeholder="Say Something" value={this.state.textMirror} 
			onChange={(e) => this.updateText(e.target.value)}
		/>
          <p className="echo">Echo:</p>
          <p>{showingEcho}</p>
        </div>
      </div>
    );
  }
}

export default App;
