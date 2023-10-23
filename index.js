import { sessionController } from './session/sessionController.js';

document.addEventListener('DOMContentLoaded', () => {
  const session = document.querySelector('#session');
  sessionController(session);
});
