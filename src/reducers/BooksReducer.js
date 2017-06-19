const initialState = []

const booksReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_BOOK':
            console.log("Adding book...")
            // write to API to add this search result to Books.
//            const request = new Request('')
            return state.concat(action.payload);
        case 'REMOVE_BOOK':
            console.log("TODO: Remove book")
            return state;
        case 'GET_BOOKS':
            console.log("TODO: Get books")
            return state;
        default:
            return state;
    }
}

export default booksReducer;