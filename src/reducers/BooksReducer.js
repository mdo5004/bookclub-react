const initialState = []

const booksReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_BOOK':
            console.log("Adding book...")
            return state.concat(action.payload);
        case 'REMOVE_BOOK':
            console.log("TODO: Remove book")
            return state;
        case 'GET_BOOKS':
            
            return action.payload;
        default:
            return state;
    }
}

export default booksReducer;