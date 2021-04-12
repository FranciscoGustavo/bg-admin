import axios from 'axios';

const getProducts = async (url) => {
  const { data } = await axios.get(url);
  return data.body;
};

export default getProducts;
