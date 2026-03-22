const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const API_ENDPOINTS = {
  PRODUCTS: `${BASE_URL}${import.meta.env.VITE_API_URL_PRODUCTS}`,
  CART: `${BASE_URL}${import.meta.env.VITE_API_URL_CART}`,
  FAVORITES: `${BASE_URL}${import.meta.env.VITE_API_URL_FAVORITES}`,
};
