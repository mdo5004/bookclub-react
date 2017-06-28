import { combineReducers } from 'redux'
import booksReducer from './BooksReducer'
import usersReducer from './UsersReducer'
import discussionsReducer from './DiscussionsReducer'
import reviewsReducer from './ReviewsReducer'
import searchResultsReducer from './SearchResultsReducer'

const rootReducer = combineReducers({
    books: booksReducer,
    discussions: discussionsReducer,
    user: usersReducer,
    searchResults: searchResultsReducer,
    reviews: reviewsReducer,
});

export default rootReducer;