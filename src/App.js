import React, { Component } from 'react';
import './css/App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { ConnectedNavBar as NavBar } from './containers/NavBar'
import {ConnectedBookDiscussion as BookDiscussion} from './containers/BookDiscussion'
import { ConnectedBookIndex as BookIndex} from './containers/BookIndex'
import { ConnectedBookSearch as BookSearch } from './containers/BookSearch'
import { ConnectedUserPage as UserPage } from './containers/UserPage';
import { ConnectedBookReviews as BookReviews } from './containers/BookReviews';
import { loadBooks } from './actions/BookActions'
import { loadRecentReviews } from './actions/ReviewActions'


export class App extends Component {
    render() {
        return (
            <Router>
               <div>
                <NavBar />
                <div className="App">
                    <div className="col-md-2">
                        <Route path='/' component={BookIndex} />
                    </div>
                    <div className="col-md-7">
                        <Route exact path='/' render={ () => { return(<p>Select a book from the list or add a new book</p>)}} />
                        <Route path='/user' component={UserPage} />
                        <Route path='/add' component={BookSearch} />
                        <Route path='/discussion/:bookId' component={BookDiscussion} />
                    </div>
                    <div className="col-md-3">
                        <Route path='/' component={BookReviews} />
                    </div>
                </div>
                </div>
            </Router>
        );
    }
    
    componentDidMount(){
        this.props.loadBooks();
        this.props.loadRecentReviews();
    }
}

const mapDispatchToProps = (dispatch) => { 
    return bindActionCreators({ 
        loadBooks: loadBooks,
        loadRecentReviews: loadRecentReviews,
    }, dispatch)
}

export const WrapperApp = connect(null,mapDispatchToProps)(App);
