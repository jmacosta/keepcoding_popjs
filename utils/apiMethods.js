// Apirest service Url
const SERVERURL = 'http://localhost:8000/';

export const apiMethods = () => {
  const get = async (endpoint, baseUrl = SERVERURL) => {
    return await fetch(baseUrl + endpoint, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
  };
  const postUser = async (endpoint, baseUrl = SERVERURL, body) => {
    return await fetch(baseUrl + endpoint, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  };
  const postProduct = async (endpoint, baseUrl = SERVERURL) => {};
  return {
    get,
    postUser,
    postProduct
  };
};
