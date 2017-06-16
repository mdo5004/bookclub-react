import React from 'react';
import BookDetails from './BookDetails'
import Discussion from './Discussion'
import { connect } from 'react-redux';

export class BookDiscussion extends React.Component {
    
    render(){
        return <div><h1>Discussion</h1>
        <BookDetails book={this.props.book} />
        <Discussion />
        </div>
    }
}
const mapStateToProps = (state, ownProps) => {
    let book = state.books.find( book => book.id == ownProps.match.params.bookId )
    
  return {
    book: book
  }
}
export const ConnectedBookDiscussion = connect(mapStateToProps,null)(BookDiscussion)