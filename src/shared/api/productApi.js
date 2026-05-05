import axios from 'axios';
import { BASE_URL, PRODUCTS_ENDPOINT } from './config';

export const fetchProducts = async (params) => {
  const { data } = await axios.get(`${BASE_URL}${PRODUCTS_ENDPOINT}`, { params });
  return data;
};
