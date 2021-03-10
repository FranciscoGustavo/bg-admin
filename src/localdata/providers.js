import { db } from '../firebase';

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

export const SCHEMA_PROVIDER = {
  uid: null,
  code: '',
  name: '',
  address: '',
  phone: '',
  email: ''
};

export const getProviders = async () => {
  const providers = await db
    .collection('providers')
    .get();

  return providers.docs.map((doc) => ({
      uid: doc.id,
      ...doc.data()
  }));
}

export const saveProvider = async (uid, data) => {
  const collection = db.collection('providers');
  try {
    const creatingProvider = uid ? await collection.doc(uid).set(data) : await collection.add(data);
    const createdProvider = {
      uid: creatingProvider ? creatingProvider.id : uid,
      ...data
    };
    return createdProvider;
  } catch (error) {
    console.error(error);
  }
};

export default PROVIDRES;