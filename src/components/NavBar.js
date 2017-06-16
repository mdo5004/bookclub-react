import React from 'react';
import {NavLink} from 'react-router-dom';
import { Nav, NavItem } from 'react-bootstrap';
export default class NavBar extends React.Component {
    constructor(){
        super();
        this.state={
            current:1
        }
    }
    handleSelect = (selectedKey) => {
        this.setState({
            current: selectedKey
        })
    }
    render() {
        return(
            <Nav bsStyle="tabs" activeKey={this.state.current} onSelect={this.handleSelect}>
                <NavItem eventKey={1} ><NavLink exact to="/">Home</NavLink></NavItem>
                <NavItem eventKey={2} ><NavLink exact to="/add">Add Book</NavLink></NavItem>
            </Nav>
            )
    }
}