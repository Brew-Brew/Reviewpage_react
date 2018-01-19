import { Actions } from './action';

const {
  REQUEST_MENU,
  RECEIVE_MENUS,
} = Actions;

const menu= (
  state = {
    menuType: 'MAIN',
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
    default:
      return state;
  }
};

export default menu;
