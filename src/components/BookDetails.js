import React from 'react';

export default function BookDetails(props){
    
    
        return (
            <div>
                <h1>{props.book.title}</h1>
                <h2>{props.book.author}</h2>
            </div>
        )
    
}