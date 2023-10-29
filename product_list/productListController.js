import { getProducts } from './productListModel.js';
import { productView } from './productListView.js';

import { dispatchEvent } from '../utils/dispatchEvents.js';
export const productListController = async productList => {
  dispatchEvent('startLoadingProducts', null, productList);
  const products = await getProducts();
  dispatchEvent('finishLoadingProducts', null, productList);
  productList.innerHTML = buildProductList(products).join('');
};

const buildProductList = elements =>
  elements.map(element => {
    return productView(element);
  });
