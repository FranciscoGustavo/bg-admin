import axios from 'axios';
import dayjs from 'dayjs';

type getUsersType = (url: string) => any;

const getUsers: getUsersType = async (url) => {
  const { data } = await axios.get(url);
  const body = data.body.map((user) => ({
    ...user,
    updatedAt: dayjs(user.updatedAt).format('YY-MM-DD'),
    createdAt: dayjs(user.createdAt).format('YY-MM-DD'),
  }));

  return body;
};

export default getUsers;
