import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import {
    INPUT,
    BEGIN_SEARCH,
    FINISH_SEARCH,
    CLICK_IMAGE,
    BACK_RESULTS,
    PAGES  
} from './actions';



function searchTerm(state="", action) {
    switch(action.type) {
    case INPUT:
	return action.text;
    default:
	return state;
    }
}

function data(state={}, action) {
    switch(action.type) {
    case FINISH_SEARCH:
	return action.data;
    default:
	return state;
    }
}

function isSearching(state=false, action) {
    switch(action.type) {
    case BEGIN_SEARCH:
	return true;
    case FINISH_SEARCH:
	return true;
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
    searchTerm,
    data,
    isSearching
});


export default rootReducer;
