import axios from 'axios';
import { BASE_URL, FAVORITES_ENDPOINT } from './config';

export const fetchFavorites = async () => {
  const { data } = await axios.get(`${BASE_URL}${FAVORITES_ENDPOINT}`);
  return data;
};

export const addFavorite = async (item) => {
  const obj = {
    item_id: item.id,
    item,
  };
  const { data } = await axios.post(`${BASE_URL}${FAVORITES_ENDPOINT}`, obj);
  return data;
};

export const removeFavorite = async (favoriteId) => {
  await axios.delete(`${BASE_URL}${FAVORITES_ENDPOINT}/${favoriteId}`);
};
