import { Actions } from './action';

const {
  REQUEST_MENUS,
  RECEIVE_MENUS,
  SET_MENU_ID,
} = Actions;

const menu= (
  state = {
    menuType: undefined,
    menuId: undefined,
    menuName: '',
    menuNames: [],
  },
  action
) => {
  switch (action.type) {

    case REQUEST_MENUS:
      return Object.assign({}, state, {
        menuType: action.menuType
      });

    case RECEIVE_MENUS:
      return Object.assign({}, state, { menuNames: action.menus });

    case SET_MENU_ID:
      return Object.assign({}, state, {
        menuId: action.menuId,
      });

    default:
      return state;
  }
};

export default menu;
