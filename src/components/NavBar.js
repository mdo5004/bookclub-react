import React from 'react';
import {NavLink} from 'react-router-dom';

export default class NavBar extends React.Component {
    
    render() {
        return(
            <div>
                <NavLink exact to="/">Home</NavLink>
                <NavLink exact to="/add">Add Book</NavLink>
            </div>
            )
    }
}