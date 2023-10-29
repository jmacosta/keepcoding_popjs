import { loaderController } from '../loader/loaderController.js';
import { loginController } from './loginController.js';

document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.querySelector('#form-login');
  const loader = document.querySelector('#loader');
  const { show, hide } = loaderController(loader);
  loginForm.addEventListener('startLoginUser', () => {
    show();
  });
  loginForm.addEventListener('finishLoginUser', () => {
    hide();
  });
  loginController(loginForm);
});
