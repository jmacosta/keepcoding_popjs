export const apiMethods = () => {
  const get = async (endpoint, baseUrl = 'http://localhost:8000/') => {
    return await fetch(baseUrl + endpoint, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
  };
  const addUser = async (
    endpoint,
    baseUrl = 'http://localhost:8000/',
    body
  ) => {
    return await fetch(baseUrl + endpoint, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  };
  const addProduct = async (endpoint, baseUrl = 'http://localhost:8000/') => {};
  return {
    get,
    addUser,
    addProduct
  };
};
