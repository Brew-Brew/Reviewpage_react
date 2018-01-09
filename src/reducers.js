'use strict';
import { combineReducers } from 'redux';
import { Actions } from './actions';
const {
    SELECT_MENU,
    RECEIVE_REVIEWS,
    NEXT_REVIEWS,
    RECEIVE_MENUS
} = Actions;

const reviews = (state = {
  reviewPage: 0,
  menuIdx: 0,
  menuType: 'MAIN',
  menuId: '',
  startDate: '',
  endDate: '',
  menuNames :[],
  reviewData: [
    { menuType:'MAIN', menu: '매운파슷타', score: 5, reviewTime: '2018-1-2', orderTime: '2018-1-1', review:'정말맛있었습니다!' },
    { menuType:'MAIN', menu: '매운파슷타', score: 1, reviewTime: '2018-1-2', orderTime: '2018-1-1', review:'노맛' },
    { menuType:'MAIN', menu: '매운파슷타', score: 5, reviewTime: '2018-1-2', orderTime: '2018-1-1', review:'대표존잘' },
    { menuType:'MAIN', menu: '크림파슷타', score: 5, reviewTime: '2018-1-2', orderTime: '2018-1-1', review:'정말맛있었습니다!' },
    { menuType:'MAIN', menu: '크림파슷타', score: 1, reviewTime: '2018-1-2', orderTime: '2018-1-1', review:'정말맛없었습니다!!!!!!!!!!!!' },
    { menuType:'SIDE', menu: '감튀', score: 3, reviewTime: '2018-1-2', orderTime: '2018-1-1', review:'정말맛없었습니다!' },
    { menuType:'SIDE', menu: '감튀', score: 5, reviewTime: '2018-1-2', orderTime: '2018-1-1', review:'마이쪙' },
    { menuType:'SIDE', menu: '감튀2', score: 3, reviewTime: '2018-1-2', orderTime: '2018-1-1', review:'정말맛없었습니다!' },
    { menuType:'DRINK', menu: '콜라', score: 2, reviewTime: '2018-1-2', orderTime: '2018-1-1', review:'대박나세요!' },
    { menuType:'DRINK', menu: '콜라', score: 4, reviewTime: '2018-1-1', orderTime: '2018-1-1', review:'대박나세요!' },
    { menuType:'DRINK', menu: '콜라2', score: 2, reviewTime: '2018-1-2', orderTime: '2018-1-1', review:'대박나세요!' },
    { menuType:'DRINK', menu: '콜라2', score: 5, reviewTime: '2018-1-4', orderTime: '2018-1-1', review:'대박나세요!' }
  ],
  viewData: [],
  detailData: [],
}, action) => {
    switch (action.type) {
        case RECEIVE_MENUS:
          return Object.assign({}, state, { menuNames: action.menus});
        case SELECT_MENU:
            return Object.assign({}, state, { menuType: action.menuType});
        case RECEIVE_REVIEWS:
            return Object.assign({}, state, { menuType: state.menuType, menuNames: state.menuNames, reviewData: action.reviews});
        case NEXT_REVIEWS:
          return Object.assign({}, state, { detailData: state.viewData.filter((menu) => {
            return menu.menu === action.menuId
          }
        )});
        default:
            return state;
    }
}

export default reviews;
