export function getSearchResults(query){
    return (dispatch) => {
        dispatch({type: 'START_SEARCH'});
        return fetch(`/search?q=${query}`, {
            accept: 'application/json',
        }).then(response => response.json())
            .then( results => dispatch({type:"GET_SEARCH_RESULTS", payload: results}))
    }


}