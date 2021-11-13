// Lesson 18  


const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 9 },
];

function getProductPrice(productName) {
  // Пиши код ниже этой строки
  let ourPrice = 0;
 for (const product of products) {
    // console.log(product);
    if (product.name === productName) {
      return product.price;
    }
  }
  return null;
}
console.log(getProductPrice('Радар'));
console.log(getProductPrice('Двигатель'));
console.log(getProductPrice('Сканер'));