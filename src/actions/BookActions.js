export function addBook(book) {
    return (dispatch) => {
        dispatch( {type: 'ADD_BOOK', payload: book});
        return fetch(`/books`, {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(book),
            headers: {
                "Content-Type": "application/json"
            }
        }).catch(console.log)
    }
    
}
export function removeBook(book) {
    return { type: 'REMOVE_BOOK', payload: book}
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