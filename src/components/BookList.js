import React from 'react';

export default function BookList(props){
    
    const list = props.books.map( (book, index) => {
        return <li key={index} ></li>
    })
            
        return (
            <ul>
                {list}
            </ul>
        )
    
}