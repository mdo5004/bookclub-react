import fetch from 'isomorphic-fetch'

export function getReviewWidget(id) {
    return (dispatch) => {
        dispatch({type:'UPDATING_REVIEWS'});
        return fetch(`/books/${id}`, {
            accept: 'application/html'
        }).then( response => response.json())
            .then( results => dispatch({type:"LOAD_REVIEWS", payload: results}))
    }
}