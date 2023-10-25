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
  return `<figure>
          <img
            class="product_image"
            src="${product.image}"
            alt="${product.name}"
          />
        </figure>
        <div class="text-content">
          <div class="product_name">${product.name}</div>
          <div class="product_description">
            <p>
              ${product.description}
            </p>
          </div>
          <div class="sell_or_search">
            <img src="${sellOrSeachIcon.image}" onerror="this.src='assets/no-image.jpg';" alt="${sellOrSeachIcon.alt}" />
            <span>${sellOrSeachIcon.text}</span>
          </div>
          <div class="product_price">${product.price}€</div>
        </div>`;
};
