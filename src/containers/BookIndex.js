import React from 'react';
import BookShow from '../components/BookShow';
import {NavLink} from 'react-router-dom';
import { connect } from 'react-redux';
import { ListGroup, Button } from 'react-bootstrap';
import { removeBook } from '../actions/BookActions';
import { bindActionCreators } from 'redux';


export class BookIndex extends React.Component {

    render() {
        const books = this.props.books.map( (book,index) => {
            return <div className="list-group-item" key={index}><BookShow book={book}/>
                <Button bsSize="small" onClick={ (event) => this.removeBookFromList(event,book.id) }>remove</Button>
            </div>
        })
        return(
            <ListGroup>
                <NavLink className="list-group-item" exact to={`/add`}>+
                </NavLink>
                {books}
            </ListGroup>
        )
    }

    removeBookFromList = (event,bookId) => {
        this.props.removeBook(bookId);
    }
}

function mapStateToProps(state){
    return {books: state.books}
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({
        removeBook: removeBook,
    }, dispatch)  
}
export const ConnectedBookIndex = connect(mapStateToProps,mapDispatchToProps)(BookIndex)