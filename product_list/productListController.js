import { getProducts } from './productListModel.js';
import { productView } from './productListView.js';
export const productListController = async productList => {
  const products = await getProducts();

  productList.innerHTML = buildProductList(products);
};

const buildProductList = elements => {
  return elements.map(element => {
    return productView(element);
  });
};
