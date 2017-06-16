import React from 'react';
import BookDetails from '../components/BookDetails'
import DiscussionShow from '../components/DiscussionShow'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createNewComment } from '../actions/DiscussionActions'

export class BookDiscussion extends React.Component {
    constructor(props){
        super(props);
        this.state={
            text:''
        }
    }
    handleOnSubmit = (event) => {
        event.preventDefault();

        let comment= this.state.text
        this.props.createNewComment(comment);
    }
    handleOnChange = (event) => {
        this.setState({
            ...this.state,
            text: event.target.value
        })
    }
    render(){
        return(
            <div>
               <BookDetails book={this.props.book} />
               <h1>Discussion</h1>
                <DiscussionShow comments={this.props.comments}/>
                <form onSubmit={this.handleOnSubmit}>
                
                <input  type="text" 
                        placeholder='Discuss the book here'
                        value={this.state.text} 
                        onChange={this.handleOnChange}/>
                        
                </form>
                {this.state.text}
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        createNewComment: createNewComment
    }, dispatch)
}


const mapStateToProps = (state,ownProps) => {
    // eslint-disable-next-line
    const book = state.books.find( book => book.id == ownProps.match.params.bookId )
    // eslint-disable-next-line
    const comments = state.discussions.discussions.find( discussion => discussion.bookId == ownProps.match.params.bookId )
    
    return({
        book: book,
        comments: comments.comments,
    })
}
export const ConnectedBookDiscussion = connect(mapStateToProps,mapDispatchToProps)(BookDiscussion)