import React, { Component } from 'react';
import './css/App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import NavBar from './components/NavBar'
import {ConnectedBookDiscussion as BookDiscussion} from './containers/BookDiscussion'
import {ConnectedBookIndex as BookIndex} from './containers/BookIndex'
import { ConnectedBookSearch as BookSearch } from './containers/BookSearch'

import { loadBooks } from './actions/BookActions'


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
                        <Route exact path='/' render={ () => { return(<p>Select a book from the list or add a new book</p>)}} />
                        <Route path='/add' component={BookSearch} />
                        <Route path='/discussion/:bookId' component={BookDiscussion} />
                    </div>
                </div>
                </div>
            </Router>
        );
    }
    
    componentDidMount(){
        this.props.loadBooks();
    }
}

const mapDispatchToProps = (dispatch) => { 
    return bindActionCreators({ 
        loadBooks: loadBooks,
    }, dispatch)
}
export const WrapperApp = connect(null,mapDispatchToProps)(App);
