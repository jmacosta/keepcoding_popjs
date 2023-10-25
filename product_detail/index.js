import { sessionController } from '../session/sessionController.js';
import { productDetailController } from './productDetailController.js';
document.addEventListener('DOMContentLoaded', () => {
  const session = document.querySelector('#session');
  sessionController(session);
  const productDetail = document.querySelector('.card');
  productDetailController(productDetail);
});
