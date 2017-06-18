import React from 'react';
import '../css/discussion.css';

export default class DiscussionShow extends React.Component {

    render() {
        var divStyle = {
            backgroundColor: 'white',
            height: '420px',
            overflow: 'auto',
        }
        let comments = this.props.comments.map( (comment,index) =>{
            return (<p key={index}><span>{comment.username} (pg {comment.page}):</span> {comment.text}</p>)
        })
        return (
            <div>
                <p>Discussion Panel</p>
                <div style={divStyle} id='discussion-panel'>
                    {comments}
                </div>
            </div>
        )
    }
}