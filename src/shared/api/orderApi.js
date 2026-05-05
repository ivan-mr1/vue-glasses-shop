import axios from 'axios';
import { BASE_URL, ORDERS_ENDPOINT } from './config';

export const createOrder = async (items, finishPrice) => {
  const { data } = await axios.post(`${BASE_URL}${ORDERS_ENDPOINT}`, {
    items,
    finishPrice,
  });
  return data;
};
