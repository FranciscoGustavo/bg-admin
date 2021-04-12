import useSwr from 'swr';
import { getProducts } from '@admin/api';

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
