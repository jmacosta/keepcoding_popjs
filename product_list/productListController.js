import { dispatchEvent } from '../utils/dispatchEvents.js';
import { productView } from './productListView.js';
export const productListController = async productList => {
  try {
    dispatchEvent('startLoadingProducts', null, productList);
    const products = await getProducts();

    if (products.length > 0) {
      productList.innerHTML = buildProductList(products).join('');
      dispatchEvent(
        'productsLoaded',
        { type: 'success', message: 'productos cargados correctamente' },
        productList
      );
    } else {
      productList.innerHTML = `<h1>No hay productos que mostrar</h1>`;
    }
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
