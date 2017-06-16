const initialState = {username:'mdo5004'}
const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_USER_NAME':
            console.log('Set username in UsersReducer please.')
            return state;
        default:
            return state;
    }
}

export default usersReducer;