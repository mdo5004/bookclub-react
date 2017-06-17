const booksReducer = (state = [
            {url:"http://i.imgur.com/SGMcdZ2.png", author:"Brandon Sanderson", title:"The Way of Kings", id:1},
            {url:"http://i.imgur.com/JCPFkit.jpg", author:"Steven Erikson", title:"Gardens of the Moon", id:2}
        ], action) => {
    switch(action.type) {
        case 'ADD_BOOK':
            console.log("Adding book...")
            // write to API to add this search result to Books.
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