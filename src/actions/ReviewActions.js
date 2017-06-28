export function getReviewWidget(book_id) {
    return (dispatch) => {
        dispatch({type: 'LOADING_REVIEWS'});
        return fetch(`/books/${book_id}`, {
            accept: 'application/json',
        }).then(response => response.json())
            .then( results => dispatch({type:"LOAD_REVIEW", payload: results}))
    }
}