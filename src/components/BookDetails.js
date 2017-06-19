import React from 'react';

export default class BookDetails extends React.Component {
    render(){    
    return (
            <div>
                <h1>{this.props.book.title}</h1>
                <h2>{this.props.book.author.name}</h2>
            </div>
        )}
}

BookDetails.defaultProps = { book:{
    title:'title missing!',
    author: {name: 'author missing!'}}
}