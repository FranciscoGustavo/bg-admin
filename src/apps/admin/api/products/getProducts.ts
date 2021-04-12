import axios from 'axios';

type getProductsType = (url: string) => any;

const getProducts: getProductsType = async (url) => {
  const { data } = await axios.get(url);
  return data.body;
};

export default getProducts;
