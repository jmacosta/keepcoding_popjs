import { productView } from './productListView.js';

export const productListController = async productList => {
  //const products = await getProducts();
  const products = [
    {
      name: 'Funda de Teléfono Estilo Moderno',

      price: 25.99,
      image: 'images/fundatelefono.jpg',

      description:
        'Funda de teléfono de estilo moderno para proteger tu dispositivo.'
    },
    {
      name: 'Motor de Automóvil de Alto Rendimiento',

      price: 4999.99,
      image: 'images/motoralto.jpg',
      description: 'Motor de alto rendimiento para automóviles.'
    },
    {
      name: 'Teléfono Inteligente Avanzado',
      price: 699.99,
      image: 'images/telefonoavanzado.jpg',

      description:
        'Teléfono inteligente avanzado con características excepcionales.'
    },
    {
      name: 'Funda de Teléfono Estilo Moderno',

      price: 25.99,
      image: 'images/fundatelefono.jpg',

      description:
        'Funda de teléfono de estilo moderno para proteger tu dispositivo.'
    },
    {
      name: 'Motor de Automóvil de Alto Rendimiento',

      price: 4999.99,
      image: 'images/motoralto.jpg',
      description: 'Motor de alto rendimiento para automóviles.'
    },
    {
      name: 'Teléfono Inteligente Avanzado',
      price: 699.99,
      image: 'images/telefonoavanzado.jpg',

      description:
        'Teléfono inteligente avanzado con características excepcionales.'
    },
    {
      name: 'Funda de Teléfono Estilo Moderno',

      price: 25.99,
      image: 'images/fundatelefono.jpg',

      description:
        'Funda de teléfono de estilo moderno para proteger tu dispositivo.'
    },
    {
      name: 'Motor de Automóvil de Alto Rendimiento',

      price: 4999.99,
      image: 'images/motoralto.jpg',
      description: 'Motor de alto rendimiento para automóviles.'
    },
    {
      name: 'Teléfono Inteligente Avanzado',
      price: 699.99,
      image: 'images/telefonoavanzado.jpg',

      description:
        'Teléfono inteligente avanzado con características excepcionales.'
    }
  ];
  productList.innerHTML = buildProductList(products);
};

const buildProductList = elements => {
  return elements.map(element => {
    return productView(element);
  });
};
