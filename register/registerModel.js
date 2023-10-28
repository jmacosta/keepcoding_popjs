import { apiMethods } from '../utils/apiMethods.js';

export const createUser = async (email, password) => {
  const body = {
    username: email,
    password
  };

  try {
    apiMethods().postUser('auth/register', undefined, body);
  } catch (error) {
    if (error.message) {
      throw error.message;
    } else {
      throw error;
    }
  }
};
