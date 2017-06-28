export function addBook(book) {
    return (dispatch) => {
        
        return fetch(`/books`, {
            method: 'POST',
            mode: 'cors', //is this necessary?
            body: JSON.stringify(book),
            headers: {
                "Content-Type": "application/json"
            }
        }).then( response => response.json())
          .then( book => dispatch( {type: 'ADD_BOOK', payload: book}) )
          .catch( resp => {
            console.log(resp);
            dispatch({type: 'ADD_BOOK', payload: []})
        })
    }
    
}
export function removeBook(id) {
    return (dispatch) => {
     dispatch({ type: 'REMOVE_BOOK', payload: id});
        return fetch(`/books/${id}`,{
            method: 'PATCH'
        }).catch(console.log)
    }
}
export function loadBooks(dispatch) {
    return (dispatch) => {
        dispatch({type: 'LOADING_BOOKS'});
        return fetch('/books', {
            accept: 'application/json',
        }).then(response => response.json())
            .then( results => dispatch({type:"GET_BOOKS", payload: results}))
    }
}