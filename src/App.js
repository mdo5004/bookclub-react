import React, { Component } from 'react';
import './css/App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
//import { bindActionCreators } from 'redux';

import NavBar from './components/NavBar'
import {ConnectedBookDiscussion as BookDiscussion} from './containers/BookDiscussion'
import {ConnectedBookIndex as BookIndex} from './containers/BookIndex'
import { ConnectedBookSearch as BookSearch } from './containers/BookSearch'
export class App extends Component {
    render() {
        return (
            <Router>
               <div>
                <NavBar />
                <div className="App container">
                    <div className="col-md-3">
                        <Route path='/' component={BookIndex} />
                    </div>
                    <div className="col-md-9">
                        <Route path='/add' component={BookSearch} />
                        <Route path='/discussion/:bookId' component={BookDiscussion} />
                    </div>
                </div>
                </div>
            </Router>
        );
    }
}


export const WrapperApp = connect(null,null)(App);
