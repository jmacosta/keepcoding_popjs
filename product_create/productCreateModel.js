import { apiMethods } from '../utils/apiMethods.js';
import { decodeToken } from '../utils/decodeToken.js';

export const createProduct = async dataForm => {
  const body = parseData(dataForm);
  await apiMethods().postProduct('api/products/', undefined, body);
};

const parseData = dataForm => {
  // to do create body objet with data form
  const { userId } = decodeToken(localStorage.getItem('token'));

  return {
    userId: userId,
    name: dataForm.get('name'),
    sellOrSearch: JSON.parse(dataForm.get('sellOrSearch').toLowerCase()),
    price: dataForm.get('price'),
    image: dataForm.get('image'),
    tags: [],
    description: dataForm.get('description')
  };
};
