// Lesson 2  !!Колбэк-функции!!

// Дополни функцию makeMessage так, чтобы она ожидала вторым параметром (параметр callback) колбэк-функцию и возвращала ее вызов. Функция deliverPizza или makePizza будет передаваться как колбэк и ожидать аргументом имя готовой доставляемой пиццы.
function deliverPizza(pizzaName) {
  return `Доставляем пиццу ${pizzaName}.`;
}

function makePizza(pizzaName) {
  return `Пицца ${pizzaName} готовится, ожидайте...`;
}

// Пиши код ниже этой строки
function makeMessage(pizzaName,callback) {
  
  callback(pizzaName);
  return callback(pizzaName);
}
console.log(makeMessage('Роял гранд', makePizza));
console.log(makeMessage('Ультрасыр', deliverPizza));

//-----------------


// const fnB = function (number) {
//   console.log('виклик fnB', number);
// }

// const fnA = function (message, callback) {
//   console.log(message);

//   console.log(callback);

//   callback(100);
// }
// // fnA('gwegee', fnB);
// console.log(fnA('виклик fnB', fnB))