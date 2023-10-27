export const getProducts = async () => {
  const url = 'http://localhost:8000/api/products/';

  let response;
  try {
    response = await fetch(url, {
      method: 'GET',

      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();

    if (!response.ok) {
      throw new Error('no data');
    }
    if (response.ok) {
      return data;
    }
  } catch (error) {
    throw new Error('error al registrar');
  }
};
