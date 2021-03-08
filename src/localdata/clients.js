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
  return [
    'P.0007',
    'P.0008',
    'P.0009',
    'P.0010',
    'P.0011'
  ];
}

export const getClientsName = async (name) => {
  return [
    'la doradita sa',
    'el tiburon',
    'el cupacabras',
    'taco feliz',
    'lemon grass'
  ];
}