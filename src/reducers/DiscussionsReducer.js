let initialState = []

const discussionsReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'UPDATE_DISCUSSION':
            
            return state.concat(action.payload);
        case 'LOAD_DISCUSSION':
            return action.payload;
        default:
            return state;
    }
}
export default discussionsReducer;