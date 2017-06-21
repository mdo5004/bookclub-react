import React from 'react';
//import {NavLink} from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

export class NavBar extends React.Component {
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
                        bookclub for Goodreads
                    </Navbar.Brand>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Navbar.Text pullRight>
                        Signed in as: <NavLink exact to="/user">{this.props.username}</NavLink>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

const mapStateToProps = (state) => {
    return ({
        username: state.user.username
    })
}

export const ConnectedNavBar = connect(mapStateToProps)(NavBar)