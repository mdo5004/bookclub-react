const initialState = {username:'anonymous'}
const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_USER_NAME':
            return {username: action.payload};
        default:
            return state;
    }
}

export default usersReducer;