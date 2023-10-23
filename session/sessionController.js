import { autenthicatedView, unautorizedView } from './sessionView.js';

export const sessionController = session => {
  if (isUserLoggedIn()) {
    session.innerHTML = autenthicatedView();
    const logoutButton = session.querySelector('#logout');
    logoutButton.addEventListener('click', () => {
      localStorage.removeItem('token');
      sessionController(session);
    });
  } else {
    session.innerHTML = unautorizedView();
    const loginButton = session.querySelector('#login');
    loginButton.addEventListener('click', () => {
      window.location = './login.html';
    });
  }
};

const isUserLoggedIn = () => {
  return localStorage.getItem('token');
};
