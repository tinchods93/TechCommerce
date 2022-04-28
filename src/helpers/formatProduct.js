const formatPrice = require('./formatPrice');

const attributes = [
  'id',
  'product_name',
  'final_price',
  'formated_unit_price',
  'formated_final_price',
  'discount',
  'stock',
  'sells',
  'description',
  'image',
  'category',
  'brand',
];

module.exports = (input) => {
  let product = input;

  const coefficient = 1 - product.discount / 100;
  const finalPrice = product.unit_price * coefficient;

  product = {
    ...product,
    final_price: finalPrice,
    formated_unit_price: formatPrice(product.unit_price),
    formated_final_price: formatPrice(finalPrice),
  };

  const finalProduct = {};

  for (let att of attributes) {
    finalProduct[att] = product[att];
  }

  return finalProduct;
};
