export const getProductDetail = async productId => {
  const url = `http://127.0.0.1:8000/api/products?id=${productId}&_expand=user`;
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
      return data[0];
    }
  } catch (error) {
    throw new Error('error al extraer');
  }
};

// id: 4,
//     userId: 5,
//     name: 'Casco de Motocicleta de Carrera',
//     sellOrSearch: true,
//     price: 129.99,
//     image: 'images/cascocarrera.jpg',
//     tags: ['motor'],
//     description:
//       'Casco de motocicleta de carreras para máxima seguridad en la pista.'
