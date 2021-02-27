const CLIENTS = [
  {
    uid: 1,
    name: 'EL CABRITO TOREADO',
    address: 'Av. Paseo de la Reforma 373-Piso 20, Cuauhtémoc, 06500 Ciudad de México, CDMX',
    phone: '55 6235 9871',
    email: 'client@mail.com'
  },
  {
    uid: 2,
    name: 'EL ALCE',
    address: 'Av. Paseo de la Reforma 373-Piso 20, Cuauhtémoc, 06500 Ciudad de México, CDMX',
    phone: '55 6235 9871',
    email: 'client@mail.com'
  }
];

export const getClients = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(CLIENTS);
    // reject(new Error('Not found'));
  }, 1000);
});

export const saveProduct = (data) => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ uid: 5, ...data });
  }, 1000);
});

export default CLIENTS;