'use strict';
import { combineReducers } from 'redux';
import { Actions } from './actions';
const {
    SELECT_MENU,
    RECEIVE_REVIEWS,
    SELECT_REVIEWS
} = Actions;

const reviews = (state = {
  currentReviewPage: 0,
  menuType: 'main',
  menuDetail: '',
  menuNames :[{menuType:'main', menu: '매운파슷타'},
                     {menuType:'main', menu: '크림파슷타'},
                     {menuType:'side', menu: '감튀'},
                     {menuType:'side', menu: '감튀2'},
                     {menuType:'drink', menu: '콜라'},
                     {menuType:'drink', menu: '콜라2'}],
  reviewData: [
    { menuType:'main', menu: '매운파슷타', score: 5, reviewTime: '2018-1-2', orderTime: '2018-1-1', review:'정말맛있었습니다!' },
    { menuType:'main', menu: '매운파슷타', score: 1, reviewTime: '2018-1-2', orderTime: '2018-1-1', review:'노맛' },
    { menuType:'main', menu: '매운파슷타', score: 5, reviewTime: '2018-1-2', orderTime: '2018-1-1', review:'대표존잘' },
    { menuType:'main', menu: '크림파슷타', score: 5, reviewTime: '2018-1-2', orderTime: '2018-1-1', review:'정말맛있었습니다!' },
    { menuType:'main', menu: '크림파슷타', score: 1, reviewTime: '2018-1-2', orderTime: '2018-1-1', review:'정말맛없었습니다!!!!!!!!!!!!' },
    { menuType:'side', menu: '감튀', score: 3, reviewTime: '2018-1-2', orderTime: '2018-1-1', review:'정말맛없었습니다!' },
    { menuType:'side', menu: '감튀', score: 5, reviewTime: '2018-1-2', orderTime: '2018-1-1', review:'마이쪙' },
    { menuType:'side', menu: '감튀2', score: 3, reviewTime: '2018-1-2', orderTime: '2018-1-1', review:'정말맛없었습니다!' },
    { menuType:'drink', menu: '콜라', score: 2, reviewTime: '2018-1-2', orderTime: '2018-1-1', review:'대박나세요!' },
    { menuType:'drink', menu: '콜라', score: 4, reviewTime: '2018-1-1', orderTime: '2018-1-1', review:'대박나세요!' },
    { menuType:'drink', menu: '콜라2', score: 2, reviewTime: '2018-1-2', orderTime: '2018-1-1', review:'대박나세요!' },
    { menuType:'drink', menu: '콜라2', score: 5, reviewTime: '2018-1-4', orderTime: '2018-1-1', review:'대박나세요!' }
  ],
  viewData: [],
  detailData: [],
}, action) => {
    switch (action.type) {
        case SELECT_MENU:
            return Object.assign({}, state, { menuType: action.menuType, detailData: []});
        case RECEIVE_REVIEWS:
            return Object.assign({}, state, { menuType: state.menuType, viewData: state.reviewData.filter((reviews) => {
              return reviews.menuType === state.menuType
            }
          )});
        case SELECT_REVIEWS:
          return Object.assign({}, state, { detailData: state.viewData.filter((menu) => {
            return menu.menu === action.menuDetail
          }
        )});
        default:
            return state;
    }
}

export default reviews;
