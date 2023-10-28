import { decodeToken } from '../utils/decodeToken.js';
import { buildAuthorizedButtons } from './authorizedButtonsView.js';
import { deleteProduct } from '../product_detail/productDetailModel.js';

export const authorizedButtonsController = (
  authorizedButtons,
  ownerId,
  productId
) => {
  const token = localStorage.getItem('token');
  if (token) {
    const { userId } = decodeToken(token);
    if (userId === ownerId) {
      authorizedButtons.innerHTML = buildAuthorizedButtons();
      const deleteButton = document.querySelector('#delete_button');
      deleteButton.addEventListener('click', async () => {
        if (confirm('Estas seguro que quieres borrar?, despues no me llores')) {
          await deleteProduct(productId);
          window.location = '/index.html';
        }
      });
    }
  }
};
