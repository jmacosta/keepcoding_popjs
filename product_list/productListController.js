import { getProducts } from './productListModel.js';
import { productView } from './productListView.js';
export const productListController = async productList => {
  const products = await getProducts();

  productList.innerHTML = buildProductList(products).join('');
};

const buildProductList = elements =>
  elements.map(element => {
    return productView(element);
  });
