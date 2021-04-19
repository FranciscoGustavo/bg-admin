import axios from 'axios';

type getProductsType = (url: string) => Promise<Array<ProductProps>>;
export interface ProductProps {
  id: number;
  code: string;
  name: string;
  cover: string | null;
  unity: string;
  isActive: boolean;
  createdAt: Date | string;
  updatedAt: Date | string;
}

const getProducts: getProductsType = async (url) => {
  const { data } = await axios.get(url);
  return data.body;
};

export default getProducts;
