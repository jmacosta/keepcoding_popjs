import { dispatchEvent } from '../utils/dispatchEvents.js';
import { loginUser } from './loginModel.js';
export const loginController = loginForm => {
  loginForm.addEventListener('submit', event => {
    event.preventDefault();
    if (event.submitter.id === 'registerButton') {
      window.location = './register.html';
    }
    if (event.submitter.id === 'exitButton') {
      window.location = './index.html';
    }
    if (event.submitter.id === 'submitButton') {
      submitLoginForm(loginForm);
    }
  });
};

const submitLoginForm = async loginForm => {
  const loginData = new FormData(loginForm);
  try {
    dispatchEvent('startLoginUser', null, loginForm);
    const jwt = await loginUser(
      loginData.get('email'),
      loginData.get('password')
    );
    dispatchEvent('finishLoginUser', null, loginForm);
    localStorage.setItem('token', jwt);
    isPreviousPageRegister()
      ? (window.location = '/index.html')
      : window.history.back();

    alert('estamos dentro, baby');
  } catch (error) {
    console.log(error);
    alert('va a ser q no, login again', error.message);
  }
};

const isPreviousPageRegister = () => {
  // to do function that check previous page to login
  return false;
};
