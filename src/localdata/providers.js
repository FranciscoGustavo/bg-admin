const PROVIDRES = [
  {
    uid: 1,
    name: 'LA STRONG BERRY',
    price: 10,
    unity: 'KG'
  },
  {
    uid: 2,
    name: 'THE PAIN APPLE',
    price: 10,
    unity: 'KG'
  }
]

export const getProviders = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(PROVIDRES);
    // reject(new Error('Not found'));
  }, 1000);
});

export const saveProvider = (data) => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ uid: 5, ...data });
  }, 1000);
});

export default PROVIDRES;