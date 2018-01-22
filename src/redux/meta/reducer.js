import { Actions } from './action';

const {
  SET_PAGE,
  PAGE_ZERO
} = Actions;

const meta = (
  state = {
    reviewPage: 0,
  },
  action
) => {
  switch (action.type) {
    case SET_PAGE:
      return Object.assign({}, state, {
        reviewPage: action.offset + action.limit,
      });
    case PAGE_ZERO:
      return Object.assign({}, state, {
        reviewPage: 0,
      });
    default:
      return state;
  }
};

export default meta;
