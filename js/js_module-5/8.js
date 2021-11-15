//Lesson 8  !!Объявление класса!!

// Используя ключевое слово class объяви класс Car с пустым телом.

class Car { };

// N2======
// !!Объект параметров
// Выполни рефакторинг класса Car так, чтобы он принимал один параметр - объект со свойсвами brand, model и price. Деструктуризируй объект в сигнатуре (подписи) конструктора.
class Car {
  // Change code below this line
  constructor({brand, model, price}) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
  // Change code above this line
}
