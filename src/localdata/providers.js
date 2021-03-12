import { db } from '../firebase';

export const SCHEMA_PROVIDER = {
  uid: null,
  code: '',
  name: '',
  address: '',
  phone: '',
  email: '',
};

export const getProviders = async () => {
  const providers = await db.collection('providers').get();

  return providers.docs.map((doc) => ({
    uid: doc.id,
    ...doc.data(),
  }));
};

export const getProvider = async (field, providerNameOrCode) => {
  const provider = await db
    .collection('providers')
    .where(field, '==', providerNameOrCode)
    .get();

  return provider.docs.map((doc) => ({
    uid: doc.id,
    ...doc.data(),
  }))[0];
};

export const saveProvider = async (uid, data) => {
  const collection = db.collection('providers');
  try {
    const creatingProvider = uid
      ? await collection.doc(uid).set(data)
      : await collection.add(data);
    const createdProvider = {
      uid: creatingProvider ? creatingProvider.id : uid,
      ...data,
    };
    return createdProvider;
  } catch (error) {
    return error;
  }
};

export const getProvidersCode = async () => [];

export const getProvidersName = async () => {
  const providers = await getProviders();
  return providers.map((provider) => provider.name);
};
