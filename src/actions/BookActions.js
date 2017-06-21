export function addBook(book) {
    return (dispatch) => {
        
        return fetch(`/api/books`, {
            method: 'POST',
            mode: 'cors', //is this necessary?
            body: JSON.stringify(book),
            headers: {
                "Content-Type": "application/json"
            }
        }).then( response => response.json())
          .then( book => dispatch( {type: 'ADD_BOOK', payload: book}) )
          .catch(console.log)
    }
    
}
export function removeBook(id) {
    return (dispatch) => {
     dispatch({ type: 'REMOVE_BOOK', payload: id});
        return fetch(`/api/books/${id}`,{
            method: 'PATCH'
        }).catch(console.log)
    }
}
export function loadBooks(dispatch) {
    return (dispatch) => {
        dispatch({type: 'LOADING_BOOKS'});
        return fetch('/api/books', {
            accept: 'application/json',
        }).then(response => response.json())
            .then( results => dispatch({type:"GET_BOOKS", payload: results}))
    }
}