import { getProductDetail } from './productDetailModel.js';
import { buildProductDetailCard } from './productDetailView.js';

export const productDetailController = async (productCard, productId) => {
  const product = await getProductDetail(productId);
  productCard.innerHTML = buildProductDetailCard(product);
};
