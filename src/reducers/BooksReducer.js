const initialState = []

const booksReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_BOOK':
            console.log("Adding book...")
            return state.concat(action.payload);
        case 'REMOVE_BOOK':
            return state.filter( book => book.id !== action.payload );
        case 'GET_BOOKS':
            
            return action.payload;
        default:
            return state;
    }
}

export default booksReducer;