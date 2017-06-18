import React from 'react';
//import {NavLink} from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
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
            <Navbar>
                <Navbar.Header>
                <Navbar.Brand>
                bookclub
                </Navbar.Brand>
                </Navbar.Header>
            </Navbar>
            )
    }
}