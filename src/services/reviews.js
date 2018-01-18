import axios from 'axios';

export function getReviews(menuId, menuType, page, limit = 5) {
  return axios.get(`https://apialpha.plating.co.kr/resource/v3/reviews/`, {
    params: {
      menuId,
      menuType,
      offset: page,
      limit,
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
