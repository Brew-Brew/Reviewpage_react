'use strict';
/*
 * action types
 */

export const Actions = {
    SELECT_MENU: "SELECT_MENU",
    RECEIVE_REVIEWS: "RECEIVE_REVIEWS",
    SELECT_REVIEWS: "SELECT_REVIEWS"
}


/*
 * action creators
 */


export function selectMenu(menuType) {
    return {
        type: Actions.SELECT_MENU,
        menuType
    };
}

export function receiveReviews(reviewTypes) {
    return {
    	type:Actions.RECEIVE_REVIEWS,
    	reviewTypes
    };
}
export function selectReviews(menuDetail) {
    return {
        type: Actions.SELECT_REVIEWS,
        menuDetail
    };
}
