export function addBook(index) {
    return { type: 'ADD_BOOK', payload: index}
}
export function removeBook(book){
    return { type: 'REMOVE_BOOK', payload: book}
}