import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getSearchResults } from '../actions/SearchActions'
import { addBook } from '../actions/BookActions'

export class BookSearch extends React.Component {
    constructor(){
        super();

        this.state ={
            text: ''
        }
    }
    
    handleOnSubmit = (event) => {
        event.preventDefault();
        this.props.getSearchResults(this.state.text)
    }
    handleOnChange = (event) => {
        this.setState({
            text: event.target.value
        })
    }
    handleAddBook = (event, book) =>{
        if (!this.props.currentTitles.includes(book.title)) {
        this.props.addBook(book)
        }
    }


    render() {
        const searchBar = ( 
            <form onSubmit={this.handleOnSubmit}>
                <input type="text" placeholder="e.g. Charlotte's Web" value={this.state.text} onChange={this.handleOnChange}/>
                <button type="submit">Search</button>
            </form>
        )

        const body = this.props.results.map( (book, index) => {
            return (
                <tr key={index}>
                    <td><img src={book.small_image_url} alt={book.title}/></td>
                    <td>{book.title}</td>
                    <td>{book.author}</td>
                    <td><button onClick={event => this.handleAddBook(event, book)}>+</button></td>
                </tr>
            )
        }, '')
        const searchResults = (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th></th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Add?</th>
                    </tr>
                </thead>
                <tbody>
                    {body}
                </tbody>
            </table>
        )
        
        return(
            <div>
                {searchBar}
                {searchResults}
            </div>
        ) 
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getSearchResults: getSearchResults,
        addBook: addBook,
    }, dispatch)
}


const mapStateToProps = (state) => {
    let currentTitles = state.books.map( book => book.title )
    return({
        results: state.searchResults || [],
        currentTitles: currentTitles,
    })
}
export const ConnectedBookSearch = connect(mapStateToProps,mapDispatchToProps)(BookSearch)