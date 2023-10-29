import { dispatchEvent } from '../utils/dispatchEvents.js';
import { getProducts } from './productListModel.js';
import { productView } from './productListView.js';
export const productListController = async productList => {
  try {
    dispatchEvent('startLoadingProducts', null, productList);
    const products = await getProducts();

    productList.innerHTML = buildProductList(products).join('');
    dispatchEvent(
      'productsLoaded',
      { type: 'success', message: 'productos cargados correctamente' },
      productList
    );
  } catch (error) {
    dispatchEvent(
      'error',
      { type: 'error', message: 'Error cargando productos' },
      productList
    );
  } finally {
    dispatchEvent('finishLoadingProducts', null, productList);
  }
};

const buildProductList = elements =>
  elements.map(element => {
    return productView(element);
  });
