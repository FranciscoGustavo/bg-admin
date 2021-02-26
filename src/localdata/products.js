const PRODUCTS = [
  {
    name: 'PAPA BLANCA GRANDE',
    price: 10,
    unity: 'KG'
  }
]

export const getProducts = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(PRODUCTS);
  }, 2000);
});

export default PRODUCTS;