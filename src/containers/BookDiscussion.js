import React from 'react';
import BookDetails from '../components/BookDetails'
import DiscussionShow from '../components/DiscussionShow'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createNewComment, loadDiscussion } from '../actions/DiscussionActions'

export class BookDiscussion extends React.Component {
    constructor(props){
        super(props);
        this.state={
            text:'',
            page:1
        }
    }
    
    render(){
        return(
            <div>
               <BookDetails book={this.props.book} />
               <h1>Discussion</h1>
                <DiscussionShow comments={this.props.comments}/>
                <form onSubmit={this.handleOnSubmit}>

                <label >What page are you on?</label>
                <input  type="number"  id="pageNumber"
                        value={this.state.page} 
                        onChange={this.handlePageChange}/>
                        <br></br>
                <input  type="text" 
                        placeholder='Discuss the book here. Press return to comment.'
                        value={this.state.text} 
                        onChange={this.handleDiscussionChange}/>
                        <input type="submit"/>
                </form>
            </div>
        )
    }
    
    handleOnSubmit = (event) => {
        event.preventDefault();
        let comment= {...this.state, username: this.props.user.username, book_id: this.props.book.id}
        this.setState({...this.state, text:''})
        this.props.createNewComment(comment);
    }
    handleDiscussionChange = (event) => {
        this.setState({
            ...this.state,
            text: event.target.value
        })
    }
    handlePageChange = (event) => {
        this.setState({
            ...this.state,
            page: event.target.value
        })
    }
    
    componentDidMount(){
        this.props.loadDiscussion(this.props.id)
        
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        createNewComment: createNewComment,
        loadDiscussion: loadDiscussion,
    }, dispatch)
}


const mapStateToProps = (state,ownProps) => {
    // eslint-disable-next-line
    const book = state.books.find( book => book.id == ownProps.match.params.bookId )
    
    // eslint-disable-next-line
    const comments = state.discussions.filter( discussion => discussion.book_id == ownProps.match.params.bookId )
    return({
        id: ownProps.match.params.bookId,
        book: book,
        comments: comments,
        user: state.user
    })
}
export const ConnectedBookDiscussion = connect(mapStateToProps,mapDispatchToProps)(BookDiscussion)