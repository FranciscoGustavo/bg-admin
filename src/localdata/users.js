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

export const getUsers = async () => USERS;

export const saveUser = (data) => ({ uid: 5, ...data });

export default USERS;
