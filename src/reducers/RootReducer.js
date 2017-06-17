import { combineReducers } from 'redux'
import booksReducer from './BooksReducer'
import usersReducer from './UsersReducer'
import discussionsReducer from './DiscussionsReducer'
import searchResultsReducer from './SearchResultsReducer'

const rootReducer = combineReducers({
    books: booksReducer,
    discussions: discussionsReducer,
    user: usersReducer,
    searchResults: searchResultsReducer,
});

export default rootReducer;