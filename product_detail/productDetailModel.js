import { apiMethods } from '../utils/apiMethods.js';
export const getProductDetail = async productId => {
  try {
    const response = await apiMethods().get(
      `api/products?id=${productId}&_expand=user`
    );

    if (!response.ok) {
      throw new Error('no data');
    }
    if (response.ok) {
      const data = await response.json();
      return data[0];
    }
  } catch (error) {
    throw new Error('error al extraer');
  }
};
