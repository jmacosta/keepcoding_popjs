import { loaderController } from '../loader/loaderController.js';
import { productCreateController } from './productCreateController.js';

document.addEventListener('DOMContentLoaded', () => {
  const productCreateForm = document.querySelector('#product_create');
  const loader = document.querySelector('#loader');
  const { show, hide } = loaderController(loader);
  productCreateForm.addEventListener('startCreateProduct', () => {
    show();
  });
  productCreateForm.addEventListener('finishCreateProduct', () => {
    hide();
  });
  productCreateController(productCreateForm);
});
