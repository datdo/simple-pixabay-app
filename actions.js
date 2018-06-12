/*
 * action types
 */

export const NEW_SEARCH = 'NEW_SEARCH'
export const BEGIN_LOAD = 'BEGIN_LOAD';
export const FINISH_LOAD = 'FINISH_LOAD';
export const CLICK_IMAGE = 'CLICK_IMAGE';

/*
 * action creators
 */

export function newSearch(query, key) {
  return dispatch => {
    dispatch({type: NEW_SEARCH});
    return performRequest(dispatch, query, key, 1);
  };
}

export function beginLoad(query) {
  return { type: BEGIN_LOAD, query};
}

function performRequest(dispatch, query, key, page) {
  dispatch(beginLoad(query));

  // should be https://pixabay.com/api/
  return fetch(`http://213.239.228.130/api/?q=${query}&key=${key}&image_type=photo&page=${page}`,{
    headers:{
      Host: 'pixabay.com'
    }
  })
    .then(response => response.json())
    .then(json => dispatch(finishLoad(json)))
    .catch(error => dispatch(errorLoad(error)));
}

export function fetchData(query, key, page) {
  return dispatch => {
    return performRequest(dispatch, query, key, page);
  };
}

function errorLoad(error) {
  return { type: FINISH_LOAD, error };
}

function finishLoad(data) {
  return { type: FINISH_LOAD, data };
}

export function clickImage(key) {
  return { type: CLICK_IMAGE, key };
}
