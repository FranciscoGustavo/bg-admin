import { HANDLE_NAVBAR, ADD_PRODUCTS, OPEN_FORM_PRODUCT, ADD_PRODUCT, ADD_CLIENTS, ADD_USERS } from './actions';

export const initialState = {
  navbar: {
    sales: false,
    purchases: false,
    users: false
  },
  products: {
    data: false,
    loading: false,
    error: false,
  },
  product: {
    data: false,
    isOpenForm: false,
    error: false,
  },
  orders: {
    data: false,
    loading: false,
    error: false,
  },
  order: {
    data: false,
    isOpenForm: false,
    error: false,
  },
  users: {
    data: false,
    loading: false,
    error: false,
  },
  user: {
    data: false,
    isOpenForm: false,
    error: false,
  },
  clients: {
    data: false,
    loading: false,
    error: false,
  },
  client: {
    data: false,
    isOpenForm: false,
    error: false,
  }
}

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case ADD_USERS:
      return {
        ...state,
        users: { ...state.users, ...payload },
      };
    case ADD_CLIENTS:
      return {
        ...state,
        clients: { ...state.clients, ...payload },
      };
    case ADD_PRODUCT:
      return {
        ...state,
        products: { 
          ...state.products,
          data: [ ...state.products.data, payload ]
        },
      };
    case OPEN_FORM_PRODUCT:
      return {
        ...state,
        product: { ...state.product, ...payload },
      }
    case ADD_PRODUCTS:
      return {
        ...state,
        products: { ...state.products, ...payload },
      };
    case HANDLE_NAVBAR:
      return {
        ...state,
        navbar: { ...state.navbar, ...payload }
      };  
    default:
      return state;
  }
}