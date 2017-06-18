import React from 'react';
import '../css/discussion.css';
import { Scrollbars } from 'react-custom-scrollbars';
export default class DiscussionShow extends React.Component {

    render() {
        var divStyle = {
            backgroundColor: 'white',
            height: '420px',

        }
        let comments = this.props.comments.map( (comment,index) =>{
            return (<p key={index}><span>{comment.username} (pg {comment.page}):</span> {comment.text}</p>)
        })

        return (
            <div>
                <p>Discussion Panel</p>
                <Scrollbars ref={ (scrollbars) => {this._scrollbars = scrollbars; }}
                   style={divStyle}
                    autoHide
                    autoHideTimeout={1000}
                    autoHideDuration={200}
                    id='discussion-panel'>
                    {comments}
                </Scrollbars>
            </div>
        )
    }
    componentDidMount() {
        this._scrollbars.scrollToBottom();
    }
    componentDidUpdate() {
        this._scrollbars.scrollToBottom();
    }
}