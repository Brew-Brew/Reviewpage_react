import axios from 'axios';
var querystring = require('querystring');

export function getReviews(menuId,page) {
    return axios.get('https://apidev.plating.co.kr/resource/v3/reviews/?menuId='+menuId+`&limit=5&offset=${page}`);
}
export function getMenus(menuType) {
    return axios.get('https://apidev.plating.co.kr/resource/v3/menus/?menuType='+menuType);
}
