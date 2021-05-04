// Lesson 18  !!Задача. Поиск объекта по значению свойства!!

// Напиши функцию getProductPrice(productName) которая принимает один параметр productName - название продукта. Функция ищет объект продукта с таким именем (свойство name) в массиве products и возвращает его цену (свойство price). Если продукт с таким названием не найден, функция должна возвращать null.
const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 9 },
];

function getProductPrice(productName) {
  // Пиши код ниже этой строки
  let productPrice = 0;
  for (const product of products) {
    console.log(product);
  }
  
  return productPrice;
  // Пиши код выше этой строки
}
console.log(getProductPrice('Радар'));
console.log(getProductPrice('Двигатель'));
console.log(getProductPrice('Сканер'));