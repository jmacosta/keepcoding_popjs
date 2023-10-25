import { getProductDetail } from './productDetailModel.js';
import { buildProductDetailCard } from './productDetailView.js';

export const productDetailController = productCard => {
  const product = getProductDetail(4);
  productCard.innerHTML = buildProductDetailCard(product);
};
