import axios from 'axios';

const apiUrl = process.env.PLATING_API_URL;
console.log(apiUrl);
export function getReviews({menuId, menuType}, page, limit = 5) {
  return axios.get(apiUrl+`/resource/v3/reviews/`, {
    params: {
      menuId,
      menuType,
      offset: page,
      limit,
    },
  });
}

export function getMenus(menuType) {
  return axios.get(apiUrl+`/resource/v3/menus/`, {
    params: {
      menuType,
    },
  });
}
