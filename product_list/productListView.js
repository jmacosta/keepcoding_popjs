export const productView = product => {
  return `<div class='card'>
  <figure>
    <div class='sell_or_search'>
      <img src='assets/search.svg' alt='search icon' />
    </div>
    <img class='product_image' src='${product.image}' alt='${product.name}' />
  </figure>
  <div class='text-content'>
    <div class='product_name'>${product.name}</div>
    <div class='product_description'>${product.description}</div>
    <div class='product_price'>${product.price}€</div>
  </div>
</div>`;
};
