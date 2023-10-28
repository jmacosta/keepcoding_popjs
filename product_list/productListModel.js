import { apiMethods } from '../utils/apiMethods.js';
export const getProducts = async () => {
  try {
    const response = await apiMethods().get('api/products/');

    if (!response.ok) {
      throw new Error('no data');
    }
    if (response.ok) {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    throw new Error('error al registrar');
  }
};
