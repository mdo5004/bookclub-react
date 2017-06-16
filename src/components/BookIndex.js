import React from 'react';
import BookShow from './BookShow'

export default class BookIndex extends React.Component {
    constructor(props){
        super(props);
        this.state = {books:[
            {url:"http://i.imgur.com/SGMcdZ2.png", author:"Brandon Sanderson", title:"The Way of Kings"},
            {url:"http://i.imgur.com/JCPFkit.jpg", author:"Steven Erikson", title:"Gardens of the Moon"}
        ]}
    }
    render() {
        const books = this.state.books.map( (book,index) => {
            return <BookShow key={index} book={book}/>
        })
        return(
            <div>
                {books}
            </div>
        )
    }
}