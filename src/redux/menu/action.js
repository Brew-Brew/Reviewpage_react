/*
 * action types
 */

export const Actions = {
  REQUEST_MENU: 'REQUEST_MENU',
  RECEIVE_MENUS: 'RECEIVE_MENUS',
};

/*
 * action creators
 */

export function requestMenu(menuType) {
  return {
    type: Actions.REQUEST_MENU,
    menuType,
  };
}

export function receiveMenus(menus) {
  return {
    type: Actions.RECEIVE_MENUS,
    menus,
  };
}
