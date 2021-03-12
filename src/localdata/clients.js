import { db } from '../firebase';

export const SCHEMA_CLIENT = {
  uid: null,
  code: '',
  name: '',
  address: '',
  phone: '',
  email: '',
};

export const getClients = async () => {
  const clients = await db.collection('clients').orderBy('code', 'desc').get();
  return clients.docs.map((doc) => ({
    uid: doc.id,
    ...doc.data(),
  }));
};

export const getClient = async (field, clientNameOrCode) => {
  const client = await db
    .collection('clients')
    .where(field, '==', clientNameOrCode)
    .get();

  return client.docs.map((doc) => ({
    uid: doc.id,
    ...doc.data(),
  }))[0];
};

export const saveClient = async (uid, data) => {
  const collection = db.collection('clients');
  try {
    const creatingClient = uid
      ? await collection.doc(uid).set(data)
      : await collection.add(data);
    const createdClient = {
      uid: creatingClient ? creatingClient.id : uid,
      ...data,
    };
    return createdClient;
  } catch (error) {
    return error;
  }
};

export const getClientsCode = async () => [];

export const getClientsName = async () => {
  const clients = await getClients();
  return clients.map((client) => client.name);
};
