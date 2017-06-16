import { combineReducers } from 'redux'
import booksReducer from './BooksReducer'
import discussionsReducer from './DiscussionsReducer'

const rootReducer = combineReducers({
    books: booksReducer,
    discussions: discussionsReducer
});

export default rootReducer;