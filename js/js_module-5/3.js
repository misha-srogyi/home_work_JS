// Lesson 3  !!Функция-конструктор!!

// Объяви функцию-конструктор Car которая принимает три параметра:

// brand - марка автомобиля.
// model - модель автомобиля.
// price - цена автомобиля.
// Функция Car должна создавать объект с одноимёнными свойствами brand, model и price, значениями которых должны быть переданные аргументы во время её вызова с оператором new.

function Car(brand, model,price) {
  this.brand = brand;
  this.model = model;
  this.price = price;
}
const constructor = new Car();
console.log(new Car('Audi', 'Q3', 36000));
  
// N2==========
// !!Задача: история заказов
// Тестировщики нашли баги в коде сервиса хранения истории заказов еды. Тебе необходимо исправить их, правильно расставив this в методах объекта historyService, чтобы методы начали работать правильно.

const historyService = {
  orders: [
    { email: "jacob@hotmail.com", dish: "Burrito" },
    { email: "solomon@topmail.net", dish: "Burger" },
    { email: "artemis@coldmail.net", dish: "Pizza" },
    { email: "solomon@topmail.net", dish: "Apple pie" },
    { email: "jacob@hotmail.com", dish: "Taco" },
  ],
  // Change code below this line
  getOrdersLog() {
    return this.orders
      .map(order => `email: ${order.email} dish: ${order.dish}`)
      .join(" - ");
  },
  getEmails() {
    const emails = this.orders.map(order => order.email);
    const uniqueEmails = new Set(emails);
    return [...uniqueEmails];
  },
  getOrdersByEmail(email) {
    return this.orders.filter(order => order.email === email);
  },
  // Change code above this line
};
