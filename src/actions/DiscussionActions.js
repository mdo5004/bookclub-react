import fetch from 'isomorphic-fetch'
export function createNewComment(comment) {
    return (dispatch) => { 
        dispatch({ type: 'UPDATE_DISCUSSION', payload: comment});

        return fetch(`/api/books/${comment.book_id}/comments`, {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(comment),
            headers: {
                "Content-Type": "application/json"
            }
        }).catch(console.log)
    }
}


export function loadDiscussion(id) {
    return (dispatch) => {
        dispatch({type:'UPDATING_DISCUSSION'});
        return fetch(`/api/books/${id}/comments`, {
            accept: 'application/json'
        }).then( response => response.json())
            .then( results => dispatch({type:"LOAD_DISCUSSION", payload: results}))
    }
}