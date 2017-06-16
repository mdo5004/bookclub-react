import React from 'react';
import BookShow from '../components/BookShow'
import { connect } from 'react-redux';

export class BookIndex extends React.Component {
    
    render() {
        const books = this.props.books.map( (book,index) => {
            return <BookShow key={index} book={book}/>
        })
        return(
            <div>
                {books}
            </div>
        )
    }
}

function mapStateToProps(state){
    return {books: state.books}
}

export const ConnectedBookIndex = connect(mapStateToProps)(BookIndex)