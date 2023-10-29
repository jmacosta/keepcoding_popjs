import { loaderController } from './loader/loaderController.js';
import { productListController } from './product_list/productListController.js';
import { sessionController } from './session/sessionController.js';

document.addEventListener('DOMContentLoaded', () => {
  const session = document.querySelector('#session');
  const productList = document.querySelector('#products_list');
  const loader = document.querySelector('#loader');
  sessionController(session);
  const { show, hide } = loaderController(loader);
  productList.addEventListener('startLoadingProducts', () => {
    show();
  });
  productList.addEventListener('finishLoadingProducts', () => {
    hide();
  });

  productListController(productList);
});
