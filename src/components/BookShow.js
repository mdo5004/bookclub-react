import React from 'react';
import {NavLink} from 'react-router-dom';
export default class BookShow extends React.Component {
    
    render() {
        return(
        <NavLink className="list-group-item" exact to={`/discussion/${this.props.book.id}`}>
            <img width={128} src={this.props.book.url} alt="cover" />
            <p className="author">{this.props.book.title}</p>
            <p className="title">{this.props.book.author}</p>
        </NavLink>
        
        )
    }
}