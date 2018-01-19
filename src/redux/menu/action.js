/*
 * action types
 */

export const Actions = {
  REQUEST_MENU: 'REQUEST_MENU',
  RECEIVE_MENUS: 'RECEIVE_MENUS',
  FETCH_MENU: 'FETCH_MENU',
  SET_MENU_ID: 'SET_MENU_ID',
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

export function fetchMenus(menuType) {
  return {
    type: Actions.FETCH_MENU,
    menuType
  };
}

export function setMenuId(menuId) {
  return {
    type: Actions.SET_MENU_ID,
    menuId,
  };
}
