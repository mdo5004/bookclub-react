let initialState = [ 
    {bookId: 1, comments:[
        { username: "mdo5004", page: 111, text: "This is a good book"},
        { username: "rvo1987", page: 222, text: "No it's not."}
    ]},
    {bookId: 2, comments:[
        { username: "mdo5004", page: 111, text: "This is not a good book"},
        { username: "rvo1987", page: 222, text: "Yes it is."}
    ]}
]

const discussionsReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'UPDATE_DISCUSSION':
            let comment = action.payload
            let bookId = comment.bookId
            // eslint-disable-next-line
            let index = state.findIndex( discussion => discussion.bookId == bookId )
            
            let comments = state[index].comments.concat({ 
                username: comment.username,
                page: comment.page,
                text: comment.text
            });
            
            let newSubState = {...state[index], comments: comments}
            
            return  ...state.slice(0,index), newSubState, state.slice(index+1) ;
        default:
            return state;
    }
}
export default discussionsReducer;