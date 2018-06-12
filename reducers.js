import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import {
    NEW_SEARCH,
    BEGIN_LOAD,
    FINISH_LOAD,
    CLICK_IMAGE,
} from './actions';



function query(state="", action) {
    switch(action.type) {
    case BEGIN_LOAD:
	return action.query;
    default:
	return state;
    }
}

function data(state=[], action) {
    switch(action.type) {
    case FINISH_LOAD:
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

function isLoading(state=false, action) {
    switch(action.type) {
    case BEGIN_LOAD:
	return true;
    case FINISH_LOAD:
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

function page(state=1, action) {
    switch(action.type) {
    case FINISH_LOAD:
        if ('error' in action) {
            return state;
        }
        else {
	    return state + 1;
        }
    case NEW_SEARCH:
      return 1;
    default:
	return state;
    }
}

const rootReducer = combineReducers({
  form: formReducer,
  query,
  data,
  isLoading,
  currentImage,
});


export default rootReducer;
