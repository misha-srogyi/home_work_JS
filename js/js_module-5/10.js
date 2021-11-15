//Lesson 10 !!Методы класса!!

// Добавь классу Car две метода.

// getPrice() - возвращает значение свойства price из объекта который его будет вызывать.
// changePrice(newPrice) - обновляет значение свойства price у объекта который его будет вызывать на newPrice.

class Car {
    constructor({ brand, model, price }) {
    this.brand = brand;
    this.model = model;
    this.price = price;
    }
    
    getPrice() {
    return this.price;
    }

    changePrice(newPrice) {
    this.price = newPrice;
    }
}

// N2=========
// !!Задача: склад

// Напиши класс Storage, который будет создавать объекты для управления складом товаров. Класс ожидает только один аргумент - начальный массив товаров, который записывается на создаваемый объект в свойство items.

// Объяви следующие методы класса:

// getItems() - возвращает массив текущих товаров в свойстве items объекта который вызывает этот метод.
// addItem(newItem) - принимает новый товар newItem и добавляет его в массив товаров в свойстве items объекта который вызывает этот метод.
// removeItem(itemToRemove) - принимает товар itemToRemove и удаляет его из массива товаров в свойстве items объекта который вызывает этот метод.
// Под комментарием мы добавили инициализацию экземпляра и вызовы методов в той последовательности, в которой твой код будут проверять тесты. Пожалуйста ничего там не меняй.

class Storage {
    constructor( items ) {
        this.items = items;
    }
    getItems() {
        return this.items;
    }
    addItem(newItem) {
        this.items.push(newItem);
    }
    removeItem(itemToRemove) {
        const index = this.items.indexOf(itemToRemove);
        this.items.splice(index, 1);
    }
}
// Change code above this line
const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
