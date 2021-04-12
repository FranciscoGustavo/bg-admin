import useSwr from 'swr';
import { getProducts } from '@admin/api';

export const useGetProducts = () => {
  const { data, error } = useSwr('/api/v1/products', getProducts);

  return {
    data,
    loading: !error && !data,
    error,
  };
};
