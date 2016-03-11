'use strict';
/*
 * action types
 */

export const Actions = {
    SELECT_MENU: "SELECT_MENU",
    RECEIVE_REVIEWS: "RECEIVE_REVIEWS"
}


/*
 * action creators
 */


export function selectMenu(menuIdx) {
    return {
        type: Actions.SELECT_MENU,
        menuIdx
    };
}

export function receiveReviews(reviews) {
    return {
    	type:Actions.RECEIVE_REVIEWS,
    	reviews
    }
}

export function fetchNextReviewPage() {
    return (dispatch, getState) => {
        const { menuIdx, reviewPage } = getState();
        $.get('review', {
            index: reviewPage,
            menuIdx: menuIdx,
        }).done(reviewData =>
            dispatch(receiveReviews(reviewData))
        );
    }
}

export function switchMenu(menuIdx) {
    return dispatch => {
        dispatch(selectMenu(menuIdx));
        dispatch(fetchNextReviewPage());
    }
}
