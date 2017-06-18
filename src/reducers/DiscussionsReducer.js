let initialState = [ 
        { username: "mdo5004", page: 111, text: "This is a good book", bookId: 181},
        { username: "rvo1987", page: 222, text: "No it's not.", bookId: 181},    
        { username: "mdo5004", page: 111, text: "This is a good book", bookId: 181},
        { username: "rvo1987", page: 222, text: "No it's not.", bookId: 181},    
        { username: "mdo5004", page: 111, text: "This is a good book", bookId: 181},
        { username: "rvo1987", page: 222, text: "No it's not.", bookId: 181},    
        { username: "mdo5004", page: 111, text: "This is a good book", bookId: 181},
        { username: "rvo1987", page: 222, text: "No it's not.", bookId: 181},    
        { username: "mdo5004", page: 111, text: "This is a good book", bookId: 181},
        { username: "rvo1987", page: 222, text: "No it's not.", bookId: 181},    
        { username: "mdo5004", page: 111, text: "This is a good book", bookId: 181},
        { username: "rvo1987", page: 222, text: "No it's not.", bookId: 181},    
        { username: "mdo5004", page: 111, text: "This is a good book", bookId: 181},
        { username: "rvo1987", page: 222, text: "No it's not.", bookId: 181},    
        { username: "mdo5004", page: 111, text: "This is a good book", bookId: 181},
        { username: "rvo1987", page: 222, text: "No it's not.", bookId: 181},    
        { username: "mdo5004", page: 111, text: "This is a good book", bookId: 181},
        { username: "rvo1987", page: 222, text: "No it's not.", bookId: 181},    
        { username: "mdo5004", page: 111, text: "This is not a good book", bookId: 221},
        { username: "rvo1987", page: 222, text: "Yes it is.", bookId: 221}
]

const discussionsReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'UPDATE_DISCUSSION':
            // TODO: RESTRUCTURE DATA TO NORMALIZE STATE.
            // COMMENTS SHOULD CONTAIN A FOREIGN KEY INSTEAD OF BEING NESTED
            // THIS WILL MAKE IT EASIER TO UPDATE THE STATE
            
            return state.concat(action.payload);
        default:
            return state;
    }
}
export default discussionsReducer;