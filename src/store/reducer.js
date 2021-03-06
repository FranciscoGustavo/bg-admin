import { HANDLE_NAVBAR, ADD_PRODUCTS, OPEN_FORM_PRODUCT, ADD_PRODUCT, ADD_CLIENTS, ADD_USERS, LOGIN } from './actions';

export const initialState = {
  user: {
    isAuthenticated: false,
  },
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
  admin: {
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
    case LOGIN:
      return {
        ...state,
        user: {
          isAuthenticated: true,
          ...payload,
        }
      }
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
    case ADD_PRODUCT: {
      const { uid, createdProduct } = payload;

      const newStateProducts = !uid 
        ? [ ...state.products.data, createdProduct ]
        : state.products.data.map((product) => product.uid === uid ? createdProduct : product );

      const sortedProducts = newStateProducts.sort((a, b) => {
        if (a.code > b.code) {
          return -1;
        }
        if (a.code < b.code) {
          return 1;
        }
        return 0;
      })

      const products = {
        ...state.products,
        data: sortedProducts,
      };

      return {
        ...state,
        products
      };
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