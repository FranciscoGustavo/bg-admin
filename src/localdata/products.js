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

export const getProductDetails = async (field, productNameOrCode) => {
  const products = await db
    .collection('products')
      .where(field, "==", productNameOrCode)
      .get();

  return products.docs.map((doc) => ({
    uid: doc.id,
    ...doc.data()
  }))[0];
};

export const getProductsName = async (name) => {
  const product = await getProducts();
  return product.map((p) => p.name).filter((product) => product.indexOf(name) !== -1);
}

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