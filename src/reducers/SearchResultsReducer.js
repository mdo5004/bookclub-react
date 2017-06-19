const initialState = []
//import 'isomorphic-fetch' from 'fetch';

const searchResultsReducer = (state=initialState, action) => {
    switch(action.type){
        case 'START_SEARCH':
            console.log("getting search results...")
            return state;
        case 'GET_SEARCH_RESULTS':
            return action.payload;
        default:
            return state;
    }
}

export default searchResultsReducer;

