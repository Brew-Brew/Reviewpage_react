import App from './App';

const routes = [
  {
    path: '/',
    exact: true,
    component: App,
  },
  {
    path: '/:menuId',
    exact: true,
    component: App,
  },
];

export default routes;
