import { Actions } from './action';

const {
  ADD_PAGES,
  PAGE_ZERO
} = Actions;

const meta = (
  state = {
    reviewPage: 0,
  },
  action
) => {
  switch (action.type) {
    case ADD_PAGES:
      return Object.assign({}, state, {
        reviewPage: action.pagenum + action.limit,
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
