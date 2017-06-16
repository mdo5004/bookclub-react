import { combineReducers } from 'redux'
import booksReducer from './BooksReducer'
import usersReducer from './UsersReducer'
import discussionsReducer from './DiscussionsReducer'

const rootReducer = combineReducers({
    books: booksReducer,
    discussions: discussionsReducer,
    user: usersReducer
});

export default rootReducer;