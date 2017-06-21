import React from 'react';
import {setUsername} from '../actions/UserActions'
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { Navbar, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
export class NavBar extends React.Component {
    constructor(props){
        super(props);
        this.state={
            username: this.props.username
        }
    }
    handleUsernameChange = (event) => {
        this.setState({username: event.target.value})
        this.props.setUsername(event.target.value)
    }

    render() {
        return(
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        bookclub
                    </Navbar.Brand>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Navbar.Form pullRight>
                        <FormGroup>
                            <ControlLabel>Signed in as: </ControlLabel>
                            {' '}
                            <FormControl type="text" value={this.state.username} onChange={this.handleUsernameChange}/>
                        </FormGroup>
                    </Navbar.Form>
                </Navbar.Collapse>

            </Navbar>
        )
    }
}

const mapStateToProps = (state) => {
    return {username: state.user.username}
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        setUsername: setUsername,
    }, dispatch)
}



export const ConnectedNavBar = connect(mapStateToProps, mapDispatchToProps)(NavBar)