import {
  Home,
  Login,
  Products,
  Orders,
  Clients,
  Providers,
  Administrators,
  NotFound,
  Order,
  MerchandiseReception,
  Reception,
} from '../containers';

const ROUTES = [
  { exact: true, path: '/login', component: Login },
  { exact: true, path: '/products', component: Products, isProtected: true },
  { exact: true, path: '/orders', component: Orders, isProtected: true },
  { exact: true, path: '/orders/:uid', component: Order, isProtected: true },
  {
    exact: true,
    path: '/merchandise-reception',
    component: MerchandiseReception,
    isProtected: true,
  },
  {
    exact: true,
    path: '/merchandise-reception/:uid',
    component: Reception,
    isProtected: true,
  },
  { exact: true, path: '/clients', component: Clients, isProtected: true },
  { exact: true, path: '/providers', component: Providers, isProtected: true },
  { exact: true, path: '/users', component: Administrators, isProtected: true },
  { exact: true, path: '/', component: Home, isProtected: true },
  { path: '**', component: NotFound },
];

export default ROUTES;
