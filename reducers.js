import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import {
    BEGIN_SEARCH,
    FINISH_SEARCH,
    CLICK_IMAGE,
    BACK_RESULTS,
    PAGES  
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

function page(state=PAGES.SEARCH, action) {
    switch(action.type) {
    case BEGIN_SEARCH:
	return PAGES.RESULTS;
    case CLICK_IMAGE:
	return PAGES.IMAGE;
    case BACK_RESULTS:
	return PAGES.RESULTS;
    default:
	return state;
    }
}

const rootReducer = combineReducers({
    form: formReducer,
    query,
    data,
    isSearching
});


export default rootReducer;
