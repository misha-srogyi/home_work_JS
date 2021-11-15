//Lesson 11 !!Приватные свойства!!

// Выполни рефакторинг класса Car так, чтобы свойство brand было приватным и добавь два метода для публичного интерфейса, для чтения и изменения этого свойства.

// getBrand() - возвращает значение приватного свойства brand.
// changeBrand(newBrand) - изменяет значение приватного свойства brand на newBrand.

class Car {
  #brand;
  constructor({ brand, model, price }) {
    this.#brand = brand;
    this.model = model;
    this.price = price;
  }
  
  getBrand() {
    return this.#brand;
  }
  
  changeBrand(newBrand) {
    this.#brand = newBrand;
  }
}

// N2========
// !!Задача: конструктор строк

// Напиши класс StringBuilder, который принимает один параметр initialValue - произвольную строку, которая записывается на создаваемый объект в свойство value.

// Объяви следующие методы класса:

// getValue() - возвращает текущее значение свойства value.
// padEnd(str) - получает парметр str (строку) и добавляет её в конец значения свойства value объекта который вызывает этот метод.
// padStart(str) - получает парметр str (строку) и добавляет её в начало значения свойства value объекта который вызывает этот метод.
// padBoth(str) - получает парметр str (строку) и добавляет её в начало и в конец значения свойства value объекта который вызывает этот метод.
// Под комментарием мы добавили инициализацию экземпляра и вызовы методов в той последовательности, в которой твой код будут проверять тесты. Пожалуйста ничего там не меняй.
class StringBuilder {
  constructor( value ) {
    this.value = value;
  }
  getValue() {
    return this.value;
  }
  padEnd(str) {
    this.value += str;
  }
  padStart(str) {
    this.value = str += this.value;
  }
  padBoth(str) {
    this.value = str + this.value + str;
  }
  // Second Variant
  // padBoth(str) {
  //   this.padStart(str);
  //   this.padEnd(str);
  // }
}

// Change code above this line
const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
