/*
 * action types
 */

export const Actions = {
  ADD_PAGES: 'ADD_PAGES',
  PAGE_ZERO: 'PAGE_ZERO',
};

/*
 * action creators
 */

export function addPage(pagenum, limit = 5) {
  return {
    type: Actions.ADD_PAGES,
    pagenum,
    limit,
  };
}

export function pageZero() {
  return {
    type: Actions.PAGE_ZERO,
  };
}
