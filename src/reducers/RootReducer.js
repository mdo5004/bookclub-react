import { combineReducers } from 'redux'
import booksReducer from './BooksReducer'
import usersReducer from './UsersReducer'
import discussionsReducer from './DiscussionsReducer'
import searchResultsReducer from './SearchResultsReducer'
import auth from './SessionsReducer'
const rootReducer = combineReducers({
    books: booksReducer,
    discussions: discussionsReducer,
    user: usersReducer,
    searchResults: searchResultsReducer,
    session: auth,
});

export default rootReducer;