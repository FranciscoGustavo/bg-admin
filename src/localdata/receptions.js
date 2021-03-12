import { db } from '../firebase';

const SCHEMA_RECEPTION = {
  clientCode: '',
  clientName: '',
  createdAt: '2021-05-25',
  deliveryDate: '2021-08-03',
  total: 0,
  products: [
    {
      code: '',
      name: '',
      unity: '',
      count: 0,
      price: 0,
      totalPrice: 0,
    },
  ],
};

export const getReception = async (uid) => {
  if (uid === 'new') {
    const countDocuments = await db.collection('receptions').get();
    const currentDocument = countDocuments.size + 1;
    const currentDocumentStr = String(currentDocument).split('').reverse();
    const CODE = '0000'
      .split('')
      .map((value, idx) =>
        currentDocumentStr[idx] ? currentDocumentStr[idx] : value
      )
      .reverse()
      .join('');

    return {
      code: `P.${CODE}`,
      ...SCHEMA_RECEPTION,
    };
  }

  const reception = await db.collection('receptions').doc(uid).get();

  return {
    uid: reception.id,
    ...reception.data(),
  };
};

export const getReceptions = async () => {
  const receptions = await db
    .collection('receptions')
    .orderBy('code', 'desc')
    .get();

  return receptions.docs.map((doc) => ({
    uid: doc.id,
    ...doc.data(),
    totalItems: doc.data().products.length,
  }));
};

export const saveReception = async (uid, data) => {
  const collection = db.collection('receptions');
  try {
    const creatingReception = uid
      ? await collection.doc(uid).set(data)
      : await collection.add(data);
    const createdReception = {
      uid: creatingReception ? creatingReception.id : uid,
      ...data,
    };
    return createdReception;
  } catch (error) {
    return error;
  }
};
