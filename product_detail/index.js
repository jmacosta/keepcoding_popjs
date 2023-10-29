import { loaderController } from '../loader/loaderController.js';
import { sessionController } from '../session/sessionController.js';
import { productDetailController } from './productDetailController.js';

const params = new URLSearchParams(window.location.search);
const productID = params.get('id');
document.addEventListener('DOMContentLoaded', () => {
  const session = document.querySelector('#session');
  const productDetail = document.querySelector('.card');
  const loader = document.querySelector('#loader');
  const { show, hide } = loaderController(loader);
  sessionController(session);
  productDetail.addEventListener('startLoadingProductDetail', () => {
    show();
  });
  productDetail.addEventListener('finishLoadingProductDetail', () => {
    hide();
  });

  productDetailController(productDetail, productID);
});
