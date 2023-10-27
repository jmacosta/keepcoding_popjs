import { sessionController } from '../session/sessionController.js';
import { productDetailController } from './productDetailController.js';
const params = new URLSearchParams(window.location.search);
const productID = params.get('id');
document.addEventListener('DOMContentLoaded', () => {
  const session = document.querySelector('#session');
  sessionController(session);
  const productDetail = document.querySelector('.card');
  productDetailController(productDetail, productID);
  const goHomeButton = document.querySelector('#go_home');
});
