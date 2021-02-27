import { Home, Login, Products, Orders, Clients, Providers, Administrators, NotFound } from '../containers';

const ROUTES = [
  { exact: true, path: '/login', component: Login },
  { exact: true, path: '/products', component: Products },
  { exact: true, path: '/orders', component: Orders },
  { exact: true, path: '/clients', component: Clients },
  { exact: true, path: '/providers', component: Providers },
  { exact: true, path: '/users', component: Administrators },
  { exact: true, path: '/', component: Home },
  {path: '**', component: NotFound },
];

export default ROUTES;