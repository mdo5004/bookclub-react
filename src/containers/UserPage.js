import React from 'react';
//import UserShow from '../components/UserShow';
import { Well, FormControl, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { setUsername } from '../actions/UsersActions';
import { bindActionCreators } from 'redux';


export class UserPage extends React.Component {
constructor(props){
    super(props);
    this.state = {
        username:''
    }
}
    
    saveUsername = (event) => {
        event.preventDefault();
        this.props.setUsername(this.state.username)
    }
    changeUsername = (event) => {
        this.setState({
            username:event.target.value})
    }
    render(){
        return (
            <Well>
               Who are you?
                <form onSubmit={this.saveUsername}>
                    <FormControl
                    type="text"
                    style={{width:'20em'}}
                    value={this.state.username}
                    onChange={this.changeUsername}
                    placeholder="My name is..."
                    />
                    <Button type="submit">Save</Button>
                </form>
            </Well>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        setUsername: setUsername
    }, dispatch)
}
const mapStateToProps = (state) => {
    return {
        username: state.user.username
    }
}
export const ConnectedUserPage = connect(mapStateToProps,mapDispatchToProps)(UserPage)