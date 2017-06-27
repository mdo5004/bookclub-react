import React, { Component, PropTypes } from 'react';
//import {NavLink} from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import Login from '../components/Login'
import Logout from '../components/Logout'
import { loginUser, logoutUser } from '../actions/SessionActions'

export class NavBar extends Component {
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
        const { dispatch, isAuthenticated, errorMessage } = this.props

        return(
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>

                        bookclub for Goodreads
                    </Navbar.Brand>
                </Navbar.Header>
                <Navbar.Collapse>
                   
                    <Navbar.Form className='navbar-form' pullRight>

                        {!isAuthenticated &&
                            <Login
                                errorMessage={errorMessage}
                                onLoginClick={ creds => dispatch(loginUser(creds)) }
                                />
                        }

                        {isAuthenticated &&
                            <Logout onLogoutClick={() => dispatch(logoutUser())} />
                        }

                    </Navbar.Form>
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

Navbar.propTypes = {
    dispatch: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
    errorMessage: PropTypes.string
}
export const ConnectedNavBar = connect(mapStateToProps)(NavBar)