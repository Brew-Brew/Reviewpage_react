'use strict';
/*
 * action types
 */

export const Actions = {
    SELECT_MENU: "SELECT_MENU",
    RECEIVE_REVIEWS: "RECEIVE_REVIEWS",
    SET_MENU_NAMES: "SET_MENU_NAMES",
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

export function setMenuNames(menuNames) {
  return {
    type: Actions.SET_MENU_NAMES,
    menuNames,
  };
}

export function fetchMenuNames() {
  return (dispatch) => {
    return fetch('https://apiv2.plating.co.kr/admin/menu/forreview', {
      method: 'GET',
      headers: {
        pt: 'MaS+ErT0KeN::P1a+iNgIsG00dF0oD#@!123!@#321#I@m_P1a+ing_D2V210pm2N++E@m_Y0wU',
        iu: 0,
        'Content-Type': 'application/json',
      },
    }).then(response => response.json()).then(json => dispatch(setMenuNames(json)));
  }
}
