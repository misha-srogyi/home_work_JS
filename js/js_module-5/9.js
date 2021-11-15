//Lesson 9  !!Конструктор класса!!

// Выполни рефакторинг кода, заменив функцию-конструктор Car на класс с методом-конструктором, принимающим объект.
//----------

// function Car({ brand, model, price }) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// }
//------------

class Car {
  brand;
  model;
  price;
  
    constructor({ brand, model, price }) {
  this.brand = brand;
  this.model = model;
  this.price = price;
  }
}
const mango = new Car({ brand: 'Ford', model: 'Mondeo', price: 20000 });

// N2=========
// !!Методы класса
// Добавь классу Car два метода.

// getPrice() - возвращает значение свойства price из объекта который его будет вызывать.
// changePrice(newPrice) - обновляет значение свойства price у объекта который его будет вызывать на newPrice.
class Car {
  constructor({ brand, model, price }) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
  // Change code below this line

  getPrice() {
    return this.price;
  }
  changePrice(newPrice) {
    this.price = newPrice;
  }
}
