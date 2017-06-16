import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';


import NavBar from './components/NavBar'
import BookDiscussion from './components/BookDiscussion'
import BookIndex from './components/BookIndex'

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                   <NavBar />
                    <Route exact path='/' component={BookIndex} />
                    <Route exact path='/discussion' component={BookDiscussion} />
                </div>
            </Router>
        );
    }
}

export default App;
