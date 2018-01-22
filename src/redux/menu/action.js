/*
 * action types
 */

export const Actions = {
  REQUEST_MENUS: 'REQUEST_MENUS',
  RECEIVE_MENUS: 'RECEIVE_MENUS',
  LOAD_MENU: 'LOAD_MENU',
  SET_MENU_ID: 'SET_MENU_ID',
};

/*
 * action creators
 */
 export function loadMenus(menuType) {
   return {
     type: Actions.LOAD_MENU,
     menuType
   };
 }

export function loadMenusRequest(menuType) {
  return {
    type: Actions.REQUEST_MENUS,
    menuType,
  };
}

export function receiveMenus(menus) {
  return {
    type: Actions.RECEIVE_MENUS,
    menus,
  };
}



export function setMenuId(menuId) {
  return {
    type: Actions.SET_MENU_ID,
    menuId,
  };
}
