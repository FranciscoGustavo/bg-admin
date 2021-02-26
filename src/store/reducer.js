import { HANDLE_NAVBAR } from './actions';

export const initialState = {
  navbar: {
    sales: false,
    purchases: false,
    users: false
  }
}

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case HANDLE_NAVBAR:
      return {
        ...state,
        navbar: { ...state.navbar, ...payload }
      };  
    default:
      return state;
  }
}