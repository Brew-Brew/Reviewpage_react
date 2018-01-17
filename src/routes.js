import React from 'react';
import App from './App';


const routes = [
  {
    path: '/',
    exact: true,
    component: App,
  },
  {
    path: '/:menuType/:menuId',
    component: App,
  },
];

export default routes;
