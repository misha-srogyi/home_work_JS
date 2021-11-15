//Lesson 12  !!Задача. Хранилище 2.0!!

// Выполни рефакторинг заменив функцию-конструктор Storage на класс с методами. Сделай так, чтобы свойство items было приватным.

// Под комментарием мы добавили инициализацию экземпляра и вызовы методов в той последовательности, в которой твой код будут проверять тесты. Пожалуйста ничего там не меняй.

class Storage {
  #items;
  constructor( items ) {
    this.#items = items;
  }
  
  getItems() {
    return this.#items;
  }
  
  addItem(newItem) {
    this.#items.push(newItem);
  }
  
  removeItem(item) {
    const itemIndex = this.#items.indexOf(item);
    this.#items.splice(itemIndex, 1);
  }
}




// Пиши код выше этой строки
const storage = new Storage(["Нанитоиды", "Пролонгер", "Антигравитатор"]);
console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
storage.addItem("Дроид");
console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
storage.removeItem("Пролонгер");
console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]

// N2============
// !!Приватные свойства
// Выполни рефакторинг класса Car так, чтобы свойство brand было приватным и добавь два метода для публичного интерфейса, для чтения и изменения этого свойства.

// getBrand() - возвращает значение приватного свойства brand.
// changeBrand(newBrand) - изменяет значение приватного свойства brand на newBrand.

class Car {
  // Change code below this line
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
