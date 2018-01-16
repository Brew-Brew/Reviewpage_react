import React from 'react';
import App from './App';


const routes = [
  {
    path: '/',
    exact: true,
    component: App,
  },
  {
    path: '/menus/:menuId',
    component: App,
  },
];

export default routes;
