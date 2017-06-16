import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';



import BookDiscussion from './components/BookDiscussion'
import BookIndex from './components/BookIndex'

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <BookIndex />
        <BookDiscussion />
      </div>
    );
  }
}

export default App;
