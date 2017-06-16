const booksReducer = (state = [
            {url:"http://i.imgur.com/SGMcdZ2.png", author:"Brandon Sanderson", title:"The Way of Kings", id:1},
            {url:"http://i.imgur.com/JCPFkit.jpg", author:"Steven Erikson", title:"Gardens of the Moon", id:2}
        ], action) => {
    switch(action.type) {
        default:
            return state;
    }
}

export default booksReducer;