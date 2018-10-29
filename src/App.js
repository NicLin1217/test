import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddItem from './components/addItem.js';

class App extends Component {
  
  constructor(props){
    super(props)

    this.state = {
      items: ""
    }
  }
  addItem = (item) => {
    this.setState({items: this.state.items+item})
    console.log(this.state.items);

  }
  

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {this.state.items}
        <AddItem addItem = {this.addItem} />
       
      </div>
    );
  }
}

export default App;
