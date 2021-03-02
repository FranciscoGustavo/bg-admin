import { db } from '../firebase';

export const getProducts = () => new Promise((resolve, reject) => {
  db
    .collection('products')
    .orderBy('code', 'desc')
    .onSnapshot((snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        uid: doc.id,
        ...doc.data()
      }));

      resolve(data);
    });
});

export const saveProduct = async (uid, data) => {
  const collection = db.collection('products');
  try {
    const creatingProduct = uid ? await collection.doc(uid).set(data) : await collection.add(data);
    const createdProduct = {
      uid: creatingProduct ? creatingProduct.id : uid,
      ...data
    }
    return createdProduct;
  } catch (error) {
    console.log(error);
  }
};