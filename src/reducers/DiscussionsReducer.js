let initialState = {discussions:[ 
    {bookId: 1, comments:[
        { username: "mdo5004", page: 111, text: "This is a good book"},
        { username: "rvo1987", page: 222, text: "No it's not."}
    ]},
    {bookId: 2, comments:[
        { username: "mdo5004", page: 111, text: "This is not a good book"},
        { username: "rvo1987", page: 222, text: "Yes it is."}
    ]}
]}

const discussionsReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'UPDATE_DISCUSSION':
            console.log('updating discussion')
            return state;
        default:
            return state;
    }
}
export default discussionsReducer;