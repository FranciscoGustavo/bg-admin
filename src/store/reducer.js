import { HANDLE_NAVBAR, ADD_PRODUCTS } from './actions';

export const initialState = {
  navbar: {
    sales: false,
    purchases: false,
    users: false
  },
  orders: [
    { name: 'Papa Blamca grande' }
  ]
}

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case ADD_PRODUCTS:
      return {
        ...state,
        products: payload,
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