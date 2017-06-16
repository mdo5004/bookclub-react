import React from 'react';

export default class DiscussionShow extends React.Component {
    
    render() {
        let comments = this.props.comments.map( (comment,index) =>{
            return (<p key={index}><span>{comment.username} (pg {comment.page}):</span> {comment.text}</p>)
        })
        return (
            
            <div>
               <p>Discussion Panel</p>
                {comments}
            </div>
        )
    }
}