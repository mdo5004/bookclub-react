let initialState = []

const reviewsReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'UPDATING_REVIEWS':
            return state;
        case 'LOAD_REVIEWS':
            return action.payload;
        default:
            return state;
    }
}
export default reviewsReducer;