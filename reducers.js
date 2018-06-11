import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import {
    BEGIN_SEARCH,
    FINISH_SEARCH,
    CLICK_IMAGE,
} from './actions';



function query(state="", action) {
    switch(action.type) {
    case BEGIN_SEARCH:
	return action.query;
    default:
	return state;
    }
}

function data(state=[], action) {
    switch(action.type) {
    case FINISH_SEARCH:
        if ('error' in action) {
            console.error(action.error);
            return state;
        }
        else {
	    return action.data.hits;
        }
    default:
	return state;
    }
}

function isSearching(state=false, action) {
    switch(action.type) {
    case BEGIN_SEARCH:
	return true;
    case FINISH_SEARCH:
	return false;
    default:
	return state;
    }
}

function currentImage(state=null, action) {
    switch(action.type) {
    case CLICK_IMAGE:
	return action.key;
    default:
	return state;
    }
}

const rootReducer = combineReducers({
  form: formReducer,
  query,
  data,
  isSearching,
  currentImage
});


export default rootReducer;
