import { db } from '../firebase';

export const SCHEMA_CLIENT = {
  uid: null,
  code: '',
  name: '',
  address: '',
  phone: '',
  email: ''
}

export const getClients = () => new Promise((resolve, reject) => {
  db
    .collection('clients')
    .orderBy('code', 'desc')
    .onSnapshot((snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        uid: doc.id,
        ...doc.data()
      }));

      resolve(data);
    });
});

export const getClient = async (field, clientNameOrCode) => {
  const client = await db
    .collection('clients')
      .where(field, "==", clientNameOrCode)
      .get();

  return client.docs.map((doc) => ({
    uid: doc.id,
    ...doc.data()
  }))[0];
};

export const saveClient = async (uid, data) => {
  const collection = db.collection('clients');
  try {
    const creatingClient = uid ? await collection.doc(uid).set(data) : await collection.add(data);
    const createdClient = {
      uid: creatingClient ? creatingClient.id : uid,
      ...data
    };
    return createdClient;
  } catch (error) {
    console.error(error);
  }
};

export const getClientsCode = async (code) => {
  return [];
}

export const getClientsName = async (name) => {
  const clients = await getClients();
  return clients.map((client) => client.name);
}