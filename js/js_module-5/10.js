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