import { Actions } from './action';

const {
  REQUEST_MENU,
  RECEIVE_MENUS,
  SET_MENU_ID,
} = Actions;

const menu= (
  state = {
    menuType: undefined,
    menuId: '',
    menuName: '',
    menuNames: [],
  },
  action
) => {
  switch (action.type) {
    case RECEIVE_MENUS:
      return Object.assign({}, state, { menuNames: action.menus });
    case REQUEST_MENU:
      return Object.assign({}, state, {
        menuType: action.menuType,
      });
    case SET_MENU_ID:
      return Object.assign({}, state, {
        menuId: action.menuId,
      });
    default:
      return state;
  }
};

export default menu;
