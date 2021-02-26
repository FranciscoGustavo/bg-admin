import { Home, Login, Products } from './containers';

const ROUTES = [
  { exact: true, path: '/login', component: Login },
  { exact: true, path: '/products', component: Products },
  { exact: true, path: '/', component: Home },
];

export default ROUTES;