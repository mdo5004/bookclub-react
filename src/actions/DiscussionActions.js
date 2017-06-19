import fetch from 'isomorphic-fetch'
export function createNewComment(comment) {
    return (dispatch) => { 
        dispatch({ type: 'UPDATE_DISCUSSION', payload: comment});
        let params = `text=${comment.text}&username=${comment.username}&page=${comment.page}`
        return fetch(`/books/${comment.book_id}/comments?${params}`, {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(comment),
            accept: 'application/json',
        }).catch(console.log)
    }
}


export function loadDiscussion(id) {
    return (dispatch) => {
        dispatch({type:'UPDATING_DISCUSSION'});
        return fetch(`/books/${id}/comments`, {
            accept: 'application/json'
        }).then( response => response.json())
          .then( results => dispatch({type:"LOAD_DISCUSSION", payload: results}))
    }
}