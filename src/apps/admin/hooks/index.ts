import useSwr from 'swr';
import { useRouter } from 'next/router';
import { getProducts, getUsers, getUser } from '@admin/api';

type useGetProductsType = () => {
  data: any;
  loading: boolean;
  error: Error | boolean;
};

export const useGetProducts: useGetProductsType = () => {
  const { data, error } = useSwr('/api/v1/products', getProducts);

  return {
    data,
    loading: !error && !data,
    error,
  };
};

type useGetUsersType = (
  role: string
) => {
  data: any;
  loading: boolean;
  error: Error | boolean;
};

export const useGetUsers: useGetUsersType = (role) => {
  const { data, error } = useSwr(`/api/v1/users?role=${role}`, getUsers);

  return {
    data,
    loading: !error && !data,
    error,
  };
};

type useGetUserType = (
  role: string
) => {
  data: any;
  loading: boolean;
  error: Error | boolean;
};

export const useGetUser: useGetUserType = (role) => {
  const router = useRouter();
  const { id } = router.query;
  const { data, error } = useSwr(`/api/v1/users/${id}?role=${role}`, getUser);

  return {
    data,
    loading: !error && !data,
    error,
  };
};
