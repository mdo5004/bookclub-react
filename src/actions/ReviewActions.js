import fetch from 'isomorphic-fetch'

export function loadRecentReviews() {
    return (dispatch) => {
        dispatch({type:'UPDATING_REVIEWS'});
        return fetch("/reviews", {
            accept: 'application/json'
        }).then( response => response.json())
            .then( results => dispatch({type:"LOAD_REVIEWS", payload: results}))
    }
}