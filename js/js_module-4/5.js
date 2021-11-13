//Lesson 5  !!Контекст вызова функции!!

// Выполни рефакторинг методов объекта pizzaPalace, расставив отсутствующие this в местах обращения к свойствам и методам объекта.

const pizzaPalace = {
  pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
  // Пиши код ниже этой строки
  checkPizza(pizzaName) {
    return this.pizzas.includes(pizzaName);
  },
  order(pizzaName) {
    const isPizzaAvailable = this.checkPizza(pizzaName);

    if (!isPizzaAvailable) {
      return `В ассортименте нет пиццы с названием «${pizzaName}».`;
    }

    return `Заказ принят, готовим пиццу «${pizzaName}».`;
  },
  // Пиши код выше этой строки
};
console.log(pizzaPalace.order('Аль Копчино'));

// !!Метод forEach(callback)!!

function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;
  // Change code below this line
  
  //   for (let i = 0; i < orderedItems.length; i += 1) {
  //   totalPrice += orderedItems[i];
  // }

orderedItems.forEach(function callback(element,index){
  totalPrice += orderedItems[index];
});
  
  // Change code above this line
  return totalPrice;
}