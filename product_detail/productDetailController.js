import { authorizedButtonsController } from '../authorizedButtons/authorizedButtonsController.js';
import { goHomeController } from '../goHome/goHomeController.js';
import { dispatchEvent } from '../utils/dispatchEvents.js';
import { getProductDetail } from './productDetailModel.js';
import { buildProductDetailCard } from './productDetailView.js';

export const productDetailController = async (productDetail, productId) => {
  dispatchEvent('startLoadingProductDetail', null, productDetail);
  const product = await getProductDetail(productId);
  productDetail.innerHTML = buildProductDetailCard(product);
  goHomeController();
  const authorizedButtons = document.querySelector('#authorized_buttons');
  authorizedButtonsController(authorizedButtons, product.userId, productId);
  dispatchEvent('finishLoadingProductDetail', null, productDetail);
};
