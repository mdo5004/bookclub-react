export function addBook(index) {
    return { type: 'ADD_BOOK', payload: index}
}
export function removeBook(book) {
    return { type: 'REMOVE_BOOK', payload: book}
}
export function loadBooks() {
    return (dispatch) => {
        dispatch({type: 'LOADING_BOOKS'});
        return fetch('/books', {
            accept: 'application/json',
        }).then(response => response.json())
            .then( results => dispatch({type:"GET_BOOKS", payload: results}))
    }
}