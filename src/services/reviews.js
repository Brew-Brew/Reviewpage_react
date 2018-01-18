import axios from 'axios';

export function getReviews(menuId, page, limit = 5) {
  return axios.get(`https://apialpha.plating.co.kr/resource/v3/reviews/`, {
    params: {
      menuId,
      offset: page,
      limit: 5,
    },
  });
}

export function getMenus(menuType) {
  return axios.get(`https://apialpha.plating.co.kr/resource/v3/menus/`, {
    params: {
      menuType,
    },
  });
}
