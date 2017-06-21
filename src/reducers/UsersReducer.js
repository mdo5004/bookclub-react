const initialState = {username:'mdo5004'}
const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_USER_NAME':
            return {username: action.payload};
        default:
            return state;
    }
}

export default usersReducer;