import { authorizedButtonsController } from '../authorizedButtons/authorizedButtonsController.js';
import { goHomeController } from '../goHome/goHomeController.js';
import { getProductDetail } from './productDetailModel.js';
import { buildProductDetailCard } from './productDetailView.js';

export const productDetailController = async (productCard, productId) => {
  const product = await getProductDetail(productId);
  productCard.innerHTML = buildProductDetailCard(product);
  goHomeController();
  const authorizedButtons = document.querySelector('#authorized_buttons');
  authorizedButtonsController(authorizedButtons, product.userId);
};
