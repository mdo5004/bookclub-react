import React, { Component } from 'react';
import './css/App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
//import { bindActionCreators } from 'redux';

import NavBar from './components/NavBar'
import {ConnectedBookDiscussion as BookDiscussion} from './containers/BookDiscussion'
import {ConnectedBookIndex as BookIndex} from './containers/BookIndex'

export class App extends Component {
    render() {
        return (
            <Router>
                <div className="App container">
                 <div className="row navbar"><NavBar /></div>
                  <div className="row">
                    <Route exact path='/' component={BookIndex} />
                    <Route path='/discussion/:bookId' component={BookDiscussion} />
                    </div>
                </div>
            </Router>
        );
    }
}


export const WrapperApp = connect(null,null)(App);
