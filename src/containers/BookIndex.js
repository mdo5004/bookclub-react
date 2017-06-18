import React from 'react';
import BookShow from '../components/BookShow'
import {NavLink} from 'react-router-dom';
import { connect } from 'react-redux';
import { ListGroup } from 'react-bootstrap'
export class BookIndex extends React.Component {
    
    render() {
        const books = this.props.books.map( (book,index) => {
            return <BookShow key={index} book={book}/>
        })
        return(
            <ListGroup>
               <NavLink className="list-group-item" exact to={`/add`}>+
                </NavLink>
                {books}
            </ListGroup>
        )
    }
}

function mapStateToProps(state){
    return {books: state.books}
}

export const ConnectedBookIndex = connect(mapStateToProps)(BookIndex)