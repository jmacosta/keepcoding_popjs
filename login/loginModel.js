export const loginUser = async (email, password) => {
  const url = 'http://localhost:8000/auth/login';
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
    const data = await response.json();

    if (!response.ok) {
      throw new Error('error de token');
    }
    if (response.ok) {
      return data.accessToken;
    }
  } catch (error) {
    throw new Error('error al logear');
  }
};
