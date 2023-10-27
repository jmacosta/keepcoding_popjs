import { decodeToken } from '../utils/decodeToken.js';
import { buildAuthorizedButtons } from './authorizedButtonsView.js';

export const authorizedButtonsController = (authorizedButtons, ownerId) => {
  const token = localStorage.getItem('token');
  if (token) {
    const { userId } = decodeToken(token);
    if (userId === ownerId) {
      authorizedButtons.innerHTML = buildAuthorizedButtons();
    }
  }
};
