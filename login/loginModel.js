import { apiMethods } from '../utils/apiMethods.js';
export const loginUser = async (email, password) => {
  const body = {
    username: email,
    password
  };

  try {
    const response = await apiMethods().postUser('auth/login', undefined, body);
    if (!response.ok) {
      throw new Error('error de token');
    }
    if (response.ok) {
      const data = await response.json();
      return data.accessToken;
    }
  } catch (error) {
    throw new Error('error al logear');
  }
};
