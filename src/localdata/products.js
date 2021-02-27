import { db } from '../firebase';

const PRODUCTS = [
  {
    uid: 1,
    code: 'P.0001',
    name: 'PAPA BLANCA GRANDE',
    price: 10,
    unity: 'KG',
    status: 'Activo',
  },
  {
    uid: 2,
    name: 'UVA VERDE',
    price: 10,
    unity: 'KG'
  },
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
  },
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
  },
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
  },
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
  },
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
  },
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
  },
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

export const getProducts = () => new Promise((resolve, reject) => {
  db
    .collection('products')
    .onSnapshot((snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        uid: doc.id,
        ...doc.data()
      }));

      resolve(data);
    });
});

export const saveProduct = (uid, data) => new Promise((resolve, reject) => {
  const collection = db.collection('products');

  if (uid) {
    collection
      .doc(uid)
      .set({
        data
      });
      
  } else {
    collection.add({ ...data });
  }

  resolve(true)
});

export default PRODUCTS;