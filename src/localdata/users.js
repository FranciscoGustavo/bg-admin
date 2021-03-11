const USERS = [
  {
    uid: 1,
    name: 'YESSIE JARRIES',
    phone: '55 6235 9871',
    email: 'client@mail.com',
  },
  {
    uid: 2,
    name: 'DARSIE RIVERS',
    phone: '55 6235 9871',
    email: 'client@mail.com',
  },
];

export const getUsers = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(USERS);
      // reject(new Error('Not found'));
    }, 1000);
  });

export const saveUser = (data) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ uid: 5, ...data });
    }, 1000);
  });

export default USERS;
