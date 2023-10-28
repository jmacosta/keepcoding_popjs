// Apirest service Url
const SERVERURL = 'http://localhost:8000/';

export const apiMethods = () => {
  const get = async (endpoint, baseUrl = SERVERURL) => {
    // to do mangement error in methods
    return await fetch(baseUrl + endpoint, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
  };
  const postUser = async (endpoint, baseUrl = SERVERURL, body) => {
    // to do mangement error in methods
    return await fetch(baseUrl + endpoint, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  };
  const postProduct = async (endpoint, baseUrl = SERVERURL) => {};
  const remove = async (endpoint, baseUrl = SERVERURL) => {
    const token = localStorage.getItem('token');
    try {
      const response = await fetch(baseUrl + endpoint, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      });

      if (!response.ok) {
        const data = await response.json();
        const message = data.message || 'No ha sido posible borrar el elemento';
        throw new Error(message);
      }
    } catch (error) {
      if (error.message) {
        throw error.message;
      } else {
        throw error;
      }
    }
  };

  return {
    get,
    postUser,
    postProduct,
    remove
  };
};
