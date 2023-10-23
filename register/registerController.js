import { createUser } from './registerModel.js';
export const registerController = registerForm => {
  registerForm.addEventListener('submit', event => {
    event.preventDefault();
    if (event.submitter.id === 'exitButton') {
      window.location = './index.html';
    }
    if (event.submitter.id === 'submitButton') {
      validateForm(event, registerForm);
    }
  });
};

const validateForm = async (event, registerForm) => {
  const dataForm = new FormData(registerForm);
  try {
    if (isFormValid(dataForm)) {
      await createUser(dataForm.get('email'), dataForm.get('password'));
      alert('Usuario creado que te cagas Manolito');
      window.location = './login.html';
    }
  } catch (error) {
    alert(error.message);
  }
};

const isFormValid = dataForm => {
  return (
    isEmailValid(dataForm.get('email')) &&
    isPasswordValid(dataForm.get('password'), dataForm.get('confirmPassword'))
  );
};

const isEmailValid = email => {
  const emailRgexp = new RegExp(
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  );
  let result = true;
  if (!emailRgexp.test(email)) {
    throw new Error('el email no esta bien, algo le pasa');
  }
  return result;
};

const isPasswordValid = (password, confirmPassword) => {
  let result = true;
  if (password !== confirmPassword) {
    throw new Error('Las contraseñas no coinciden, mirátelo bien');
  }
  return result;
};
