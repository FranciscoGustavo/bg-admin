import axios from 'axios';

type getUsersType = (url: string) => any;

const getUsers: getUsersType = async (url) => {
  const { data } = await axios.get(url);

  return data.body;
};

export default getUsers;
