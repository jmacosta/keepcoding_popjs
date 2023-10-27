export const buildProductDetailCard = product => {
  const sellOrSeachIcon = product.sellOrSearch
    ? {
        image: 'assets/sell.svg',
        alt: 'sell icon',
        text: 'Se vende'
      }
    : {
        image: 'assets/search.svg',
        alt: 'search icon',
        text: 'Se busca'
      };
  return `
  <section id="header_product_detail"><nav><button id='go_home'>
    <svg class="arrow" version="1.1" viewBox="0 0 512 512" width="512px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><polygon points="352,115.4 331.3,96 160,256 331.3,416 352,396.7 201.5,256 " stroke="#727272"/></svg>
    <span>Volver a inicio</span></button>
    
  </nav>
  <div class="sell_or_search">
             <img src="${sellOrSeachIcon.image}"  alt="${
    sellOrSeachIcon.alt
  }" />
            
           </div></section>
  
   
  <div class="photo">
    <img src="${
      product.image
    }" onerror="this.src='assets/no-image.jpg';" alt="${product.name}" />
  </div>
  <div class="description">
    <h2>${product.name}</h2>
    <h4>${product.tags.join(', ')}</h4>
    <h1>${product.price}€</h1>
    <p>${product.description}</p>
    <div id ="authorized_buttons">
    
    </div>
  </div>
`;
};
