export const createUser = async (email, password) => {
  const url = 'http://localhost:8000/auth/register';
  const body = {
    username: email,
    password
  };

  let response;
  try {
    response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    if (error.message) {
      throw error.message;
    } else {
      throw error;
    }
  }
};
