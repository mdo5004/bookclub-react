export function createNewComment(comment) {
    return (dispatch) => { 
        dispatch({ type: 'UPDATE_DISCUSSION', payload: comment});
        return fetch(`/book/${comment.bookId}/comments`, {
            method: 'POST',
            values: comment,
            accept: 'application/json',
        }).catch(console.log)
    }
}

//export function updateDiscussion(discussion) {
//    return (dispatch) => {
//        dispatch({type: 'UPDATING_DISCUSSION'});
//        return fetch(`/book/${book.id}/comments`, {
//            method: 'POST',
//            values: discussion,
//            accept: 'application/json',
//        }).then(response => response.json())
//          .then( results => dispatch({type:"UPDATE_DISCUSSION", payload: results}))
//    }
//}
export function loadDiscussion(book) {
    return (dispatch) => {
        dispatch({type:'UPDATING_DISCUSSION'});
        return fetch(`/book/${book.id}/comments`, {
            accept: 'application/json'
        }).then( response => response.json())
          .then( results => dispatch({type:"LOAD_DISCUSSION", payload: results}))
    }
}