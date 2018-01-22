/*
 * action types
 */

export const Actions = {
  SET_PAGE: 'SET_PAGE',
  PAGE_ZERO: 'PAGE_ZERO',
};

/*
 * action creators
 */

export function setPage(offset, limit = 5) {
  return {
    type: Actions.SET_PAGE,
    offset,
    limit,
  };
}

export function pageZero() {
  return {
    type: Actions.PAGE_ZERO,
  };
}
