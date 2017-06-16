import React from 'react';
import BookDetails from '../components/BookDetails'
import DiscussionShow from '../components/DiscussionShow'
import { connect } from 'react-redux';

export class BookDiscussion extends React.Component {
    constructor(props) {
        super(props);

        this.state = {comments: [
            {username:"mdo5004", page:123, text:"Comment one"},
            {username:"mdo5004", page:234, text:"Comment two"},
            {username:"mdo5004", page:345, text:"Comment three"},
        ],
                     text:''}
    }
    handleOnSubmit = (event) => {
        event.preventDefault();
        let comments = this.state.comments;
        console.log(typeof comments)
        let comment= this.state.text
        this.setState({
            text:'',
            comments: [...comments,{username:"mdo5004", page:345, text:comment}]
        })
        
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
                <DiscussionShow comments={this.state.comments}/>
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

const mapStateToProps = (state,ownProps) => {
    const book = state.books.find( book => book.id == ownProps.match.params.bookId )
    return({
        book: book
    })
}
export const ConnectedBookDiscussion = connect(mapStateToProps,null)(BookDiscussion)