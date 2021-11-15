//Lesson 4  !!Объект настроек!!

// Выполни рефакторинг функции-конструктора Car так, чтобы она принимала один параметр - объект со свойсвами brand, model и price. Деструктуризируй объект в сигнатуре (подписи) функции.

  function Car({brand, model, price}) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
const mango = new Car({});
console.log(new Car({ brand: 'Audi', model: 'Q3', price: 36000 }));

// N2===========

// !!Прототип объекта
// Измени код так, чтобы объект parent стал прототипом для объекта в переменной сhild.
const parent = {
  name: "Stacey",
  surname: "Moore",
  age: 54,
  heritage: "Irish",
};
// Change code below this line

const child = Object.create(parent);

// Change code above this line
child.name = "Jason";
child.age = 27;
