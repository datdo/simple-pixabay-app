/*
 * action types
 */

export const INPUT = 'INPUT';
export const BEGIN_SEARCH = 'BEGIN_SEARCH';
export const FINISH_SEARCH = 'FINISH_SEARCH';
export const CLICK_IMAGE = 'CLICK_IMAGE';
export const BACK_RESULTS = 'BACK_RESULTS';

/*
 * other constants
 */

export const PAGES = {
  SEARCH: 'SEARCH',
  RESULTS: 'RESULTS',
  IMAGE: 'IMAGE'
};

/*
 * action creators
 */

export function input(text) {
    console.log(text);
    return { type: INPUT, text };
}

export function beginSearch() {
    return { type: BEGIN_SEARCH };
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
