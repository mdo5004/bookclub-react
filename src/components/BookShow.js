import React from 'react';
import {NavLink} from 'react-router-dom';
import { Image } from 'react-bootstrap';
export default class BookShow extends React.Component {
    
    render() {
        return(
        <NavLink exact to={`/discussion/${this.props.book.id}`}>
            <Image width={128} src={this.props.book.image_url} alt="cover" thumbnail />
            <p className="author">{this.props.book.title}</p>
            <p className="title">{this.props.book.author}</p>
        </NavLink>
        
        )
    }
}