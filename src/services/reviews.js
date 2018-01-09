import axios from 'axios';
var querystring = require('querystring');

export function getReviews(menuId) {
    return axios.get('https://apidev.plating.co.kr/resource/v3/reviews/?menuId='+menuId);
}
export function getMenus(menuType) {
    return axios.get('https://apidev.plating.co.kr/resource/v3/menus/?menuType='+menuType);
}
