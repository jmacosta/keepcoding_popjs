import { productListController } from './product_list/productListController.js';
import { sessionController } from './session/sessionController.js';

document.addEventListener('DOMContentLoaded', () => {
  const session = document.querySelector('#session');
  sessionController(session);
  const productList = document.querySelector('#products_list');
  productListController(productList);
});
