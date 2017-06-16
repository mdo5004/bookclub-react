import React from 'react';
import DiscussionShow from './DiscussionShow'

export default class Discussion extends React.Component {
    constructor(props) {
        super(props);

        this.state = {comments: [
            {username:"mdo5004", page:123, text:"Comment one"},
            {username:"mdo5004", page:234, text:"Comment two"},
            {username:"mdo5004", page:345, text:"Comment three"},
        ],
                     text:''}
    }
    handleOnSubmit = (event) => {
        event.preventDefault();
        let comments = this.state.comments;
        console.log(typeof comments)
        let comment= this.state.text
        this.setState({
            text:'',
            comments: [...comments,{username:"mdo5004", page:345, text:comment}]
        })
        
    }
    handleOnChange = (event) => {
        this.setState({
            ...this.state,
            text: event.target.value
        })
    }
    render(){
        return(
            <div>
                <DiscussionShow comments={this.state.comments}/>
                <form onSubmit={this.handleOnSubmit}>
                <input  type="text" 
                        placeholder='Discuss the book here'
                        value={this.state.text} 
                        onChange={this.handleOnChange}/>
                        
                </form>
                {this.state.text}
            </div>
        )
    }
}