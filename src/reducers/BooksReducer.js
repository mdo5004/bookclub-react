const initialState = [
{
id: 181,
author: "Orson Scott Card",
author_id: "589",
title: "Ender's Game (Ender's Saga, #1)",
book_id: "2422333375802589",
publication_year: "1985",
average_rating: "4.29",
image_url: "https://images.gr-assets.com/books/1408303130m/375802.jpg",
small_image_url: "https://images.gr-assets.com/books/1408303130s/375802.jpg",
created_at: "2017-06-17T18:31:45.655Z",
updated_at: "2017-06-17T18:31:45.655Z"
},
    {
id: 221,
author: "J.K. Rowling",
author_id: "1077326",
title: "Harry Potter and the Sorcerer's Stone (Harry Potter, #1)",
book_id: "464079931077326",
publication_year: "1997",
average_rating: "4.44",
image_url: "https://images.gr-assets.com/books/1474154022m/3.jpg",
small_image_url: "https://images.gr-assets.com/books/1474154022s/3.jpg",
created_at: "2017-06-18T16:55:25.647Z",
updated_at: "2017-06-18T16:55:25.647Z"
}
    ]

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