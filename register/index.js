import { loaderController } from '../loader/loaderController.js';
import { registerController } from './registerController.js';

document.addEventListener('DOMContentLoaded', () => {
  const registerForm = document.querySelector('#form-register');
  const loader = document.querySelector('#loader');
  const { show, hide } = loaderController(loader);
  registerForm.addEventListener('startCreateUser', () => {
    show();
  });
  registerForm.addEventListener('finishCreateUser', () => {
    hide();
  });

  registerController(registerForm);
});
