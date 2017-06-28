let initialState = []

const reviewsReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'LOADING_REVIEWS':
            return state;
        case 'LOAD_REVIEW':
            return action.payload;
        default:
            return state;
    }
}
export default reviewsReducer;