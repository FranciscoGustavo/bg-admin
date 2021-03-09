import { db } from '../firebase';
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

const newOrder = {
  clientCode: 'P.0015',
  clientName: 'EL TIBURON',
  createdAt: '2021-05-25',
  deliveryDate: '2021-08-03',
  total: 1289.5,
  products: [
    {
      code: 'P.0001',
      name: 'PAPA BLANCA',
      unity: 'KG',
      count: 0,
      price: 0,
      totalPrice: 0,
    },
    {
      code: 'P.0001',
      name: 'PAPA BLANCA',
      unity: 'KG',
      count: 0,
      price: 0,
      totalPrice: 0,
    },
  ]
}

export const getOrder = async (uid) => {
  if (uid === 'new') return newOrder;

  const order = await db
    .collection('orders')
    .doc(uid)
    .get();

  return order.data();
};

export const getOrders = async () => {
  const orders = await db
    .collection('orders')
    .orderBy('code', 'desc')
    .get();

  return orders.docs.map((doc) => ({
    uid: doc.id,
    ...doc.data(),
    totalItems: doc.data().products.length
  }));
}

export const saveOrder = async (uid, data) => {
  const collection = db.collection('orders');
  try {
    const creatingOrder = uid ? await collection.doc(uid).set(data) : await collection.add(data);
    const createdOrder = {
      uid: creatingOrder ? creatingOrder.id : uid,
      ...data
    }
    return createdOrder;
  } catch (error) {
    console.log(error);
  }
}

export default ORDERS;