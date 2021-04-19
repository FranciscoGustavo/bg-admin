import axios from 'axios';
import dayjs from 'dayjs';

type getUsersType = (url: string) => any;
export interface UserProps {
  id: number;
  code: string;
  username: string;
  name: string;
  cover: string | null;
  role: string;
  isActive: boolean;
  createdAt: Date | string;
  updatedAt: Date | string;
}

const getUsers: getUsersType = async (url) => {
  const { data } = await axios.get(url);
  const body: Array<UserProps> = data.body.map((user: UserProps) => ({
    ...user,
    updatedAt: dayjs(user.updatedAt).format('YY-MM-DD'),
    createdAt: dayjs(user.createdAt).format('YY-MM-DD'),
  }));

  return body;
};

export default getUsers;
