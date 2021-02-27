const ORDERS = [
  {
    uid: 1,
    name: 'PAPA BLANCA GRANDE',
    price: 10,
    unity: 'KG'
  },
  {
    uid: 2,
    name: 'UVA VERDE',
    price: 10,
    unity: 'KG'
  }
]

export const getOrders = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(ORDERS);
    // reject(new Error('Not found'));
  }, 1000);
});

export const saveOrder = (data) => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ uid: 5, ...data });
  }, 1000);
});

export default ORDERS;