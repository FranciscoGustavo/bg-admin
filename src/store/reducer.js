import { HANDLE_NAVBAR, ADD_PRODUCTS, OPEN_FORM_PRODUCT, ADD_PRODUCT, ADD_CLIENTS, ADD_USERS, SET_USER, OPEN_FORM_CLIENT, ADD_CLIENT, ADD_ORDERS, ADD_PROVIDERS, OPEN_FORM_PROVIDER, ADD_PROVIDER } from './actions';

const RESOURCES = [
  'product',
  'order',
  'client',
  'provider'
];

const createInitialState = (resources) => {
  const initialState = {};

  resources.forEach((resource) => {
    initialState[resource] = {
      data: false,
      isOpenForm: false,
      error: false,
    };

    initialState[resource + 's'] = {
      data: false,
      loading: false,
      error: false,
    };
  });

  return initialState;
}


export const initialState = {
  user: null,
  navbar: {
    sales: false,
    purchases: false,
    users: false
  },
  ...createInitialState(RESOURCES)
}

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case ADD_PROVIDER: {
      const { uid, savedProvider } = payload;

      const newStateProviders = !uid 
        ? [ ...state.providers.data, savedProvider ]
        : state.providers.data.map((provider) => provider.uid === uid ? savedProvider : provider );

      const sortedProviders = newStateProviders.sort((a, b) => {
        if (a.code > b.code) {
          return -1;
        }
        if (a.code < b.code) {
          return 1;
        }
        return 0;
      })

      const providers = {
        ...state.providers,
        data: sortedProviders,
      };

      return {
        ...state,
        providers
      };
    };
    case OPEN_FORM_PROVIDER:
      return {
        ...state,
        provider: { ...state.provider, ...payload },
      }
    case ADD_PROVIDERS:
      return {
        ...state,
        providers: { ...state.providers, ...payload },
      };
    case ADD_ORDERS:
      return {
        ...state,
        orders: { ...state.orders, ...payload },
      };
    case ADD_CLIENT: {
      const { uid, savedClient } = payload;

      const newStateClients = !uid 
        ? [ ...state.clients.data, savedClient ]
        : state.clients.data.map((client) => client.uid === uid ? savedClient : client );

      const sortedClients = newStateClients.sort((a, b) => {
        if (a.code > b.code) {
          return -1;
        }
        if (a.code < b.code) {
          return 1;
        }
        return 0;
      })

      const clients = {
        ...state.clients,
        data: sortedClients,
      };

      return {
        ...state,
        clients
      };
    };
    case OPEN_FORM_CLIENT:
      return {
        ...state,
        client: { ...state.client, ...payload },
      }
    case SET_USER:
      return {
        ...state,
        user: payload,
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