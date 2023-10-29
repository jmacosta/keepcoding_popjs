import { dispatchEvent } from '../utils/dispatchEvents.js';
import { createProduct } from './productCreateModel.js';
export const productCreateController = productCreateForm => {
  productCreateForm.addEventListener('submit', event => {
    event.preventDefault();
    if (event.submitter.id === 'closeButton') {
      window.history.back();
    }
    if (event.submitter.id === 'productCreateButton') {
      validateForm(productCreateForm);
    }
  });
};

const validateForm = async productCreateForm => {
  const dataForm = new FormData(productCreateForm);
  try {
    dispatchEvent('startCreateProduct', null, productCreateForm);
    await createProduct(dataForm);
    dispatchEvent('finishCreateProduct', null, productCreateForm);
    alert('Ya tenemos otra cosa pa mostrar');
    window.location = './index.html';
  } catch (error) {
    alert(error.message);
  }
};
