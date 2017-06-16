import React from 'react';
import {NavLink} from 'react-router-dom'
export default class BookShow extends React.Component {
    
    render() {
        return(
        <div>
            <img src={this.props.book.url} alt="cover"/>
            <h1>{this.props.book.title}</h1>
            <h1>{this.props.book.author}</h1>
                <NavLink exact to={`/discussion/${this.props.book.id}`}>Discussion</NavLink>
        </div>
        )
    }
}