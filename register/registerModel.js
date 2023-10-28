import { apiMethods } from '../utils/apiMethods.js';

export const createUser = async (email, password) => {
  const body = {
    username: email,
    password
  };

  let response;
  try {
    apiMethods().addUser('auth/register', null, body);
  } catch (error) {
    if (error.message) {
      throw error.message;
    } else {
      throw error;
    }
  }
};
