// In dev:  requests go directly to the real server (URL visible in Network tab)
// In prod: import.meta.env.PROD is true automatically during `vite build` — no env file needed
const useProxy = import.meta.env.PROD;

export const BASE_URL = useProxy ? '' : import.meta.env.VITE_API_BASE_URL;
export const PRODUCTS_ENDPOINT = useProxy
  ? '/api/products'
  : import.meta.env.VITE_ENDPOINT_PRODUCTS;
export const ORDERS_ENDPOINT = useProxy ? '/api/orders' : import.meta.env.VITE_ENDPOINT_ORDERS;
export const FAVORITES_ENDPOINT = useProxy
  ? '/api/favorites'
  : import.meta.env.VITE_ENDPOINT_FAVORITES;

// Raw collection name — always without /api/ prefix, used for ?_relations= query params
export const PRODUCTS_COLLECTION = 'products';
