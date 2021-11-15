
// lesson 7  !!Конструктор строк!!

// С помощью Function Declaration напиши функцию-конструктор StringBuilder, которая принимает один параметр baseValue - произвольную строку, которая записывается на создаваемый объект в свойство value.

// Добавь методы на прототип:

// getValue() - возвращает текущее значение свойства value.
// padEnd(str) - получает парметр str (строку) и добавляет её в конец значения свойства value объекта, который вызывает этот метод.
// padStart(str) - получает парметр str (строку) и добавляет её в начало значения свойства value объекта, который вызывает этот метод.
// padBoth(str) - получает парметр str (строку) и добавляет её в начало и в конец значения свойства value объекта, который вызывает этот метод.
// Под комментарием мы добавили инициализацию экземпляра и вызовы методов в той последовательности, в которой твой код будут проверять тесты. Пожалуйста ничего там не меняй.


function StringBuilder(baseValue) {
    this.value = baseValue;
    
};

StringBuilder.prototype.getValue = function () {
    return this.value;
};

StringBuilder.prototype.padEnd = function (str) {
    this.value += str;
};
StringBuilder.prototype.padStart = function (str) {
    this.value = str + this.value;
};

StringBuilder.prototype.padBoth = function (str) {
    this.value = str + this.value + str;
};

// Пиши код выше этой строки
const builder = new StringBuilder('.');
console.log(builder.getValue()); // '.'
builder.padStart('^');
console.log(builder.getValue()); // '^.'
builder.padEnd('^');
console.log(builder.getValue()); // '^.^'
builder.padBoth('=');
console.log(builder.getValue()); // '=^.^='

// N2=========

// !!Конструктор класса
// Добавь классу Car метод constructor который принимает три параметра:

// brand - марка автомобиля.
// model - модель автомобиля.
// price - цена автомобиля.
// Класс Car должен создавать объект с одноимёнными свойствами brand, model и price, значениями которых должны быть переданные аргументы во время её вызова с оператором new.

class Car {
  // Change code below this line

constructor (brand, model, price){
    this.brand = brand;
    this.model = model;
    this.price = price;
}
  // Change code above this line
}
const mango = new Car({brand: 'Ford', model: 'Mondeo', price: 20000});

