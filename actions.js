/*
 * action types
 */

export const BEGIN_SEARCH = 'BEGIN_SEARCH';
export const FINISH_SEARCH = 'FINISH_SEARCH';
export const CLICK_IMAGE = 'CLICK_IMAGE';
export const BACK_RESULTS = 'BACK_RESULTS';

/*
 * action creators
 */

export function beginSearch(query) {
    return { type: BEGIN_SEARCH, query};
}

export function fetchData(query, key) {
    return dispatch => {
        dispatch(beginSearch(query));
//        return fetch(`https://pixabay.com/api/?q=${query}&key=${key}`)
        return fetch(`http://213.239.228.130/api/?q=${query}&key=${key}`,{
            headers:{
                Host: 'pixabay.com'
            }
        })
            .then(response => response.json())
            .then(json => dispatch(finishSearch(json)))
            .catch(error => dispatch(errorSearch(error)));
    };
}

function errorSearch(error) {
    return { type: FINISH_SEARCH, error };
}

export function finishSearch(data) {
    return { type: FINISH_SEARCH, data };
}

export function clickImage(data) {
    return { type: CLICK_IMAGE, data };
}

export function backResults() {
    return { type: BACK_RESULTS };
}
