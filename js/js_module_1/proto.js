// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Пиши код ниже этой строки
//   let value = [];
//   for (const product of products) {
//     if (product[propName]) {
//       console.log(product[propName]);
//       value.push(product[propName]);
//       }
//     }
  
//   return value;
//   // Пиши код выше этой строки
// }
// console.log(getAllPropValues('name'));
// console.log(getAllPropValues('price'));
// console.log(getAllPropValues('quantity'));
// console.log(getAllPropValues('category'));

//--------------------------------------

// Напиши функцию calculateTotalPrice(productName) которая принимает один параметр productName - название товара. Функция должна вернуть общую стоимость (цена * количество) товара с таким именем из массива products.

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Пиши код ниже этой строки
//   let totalPrice = 0;
//     for (const product of products) {
//         console.log(product);
//         // console.log(product.price);
//         // console.log(product.name);
//         if (product.name === productName) {
//         totalPrice = product.price * product.quantity;
//     }
// }
// return totalPrice;

  // Пиши код выше этой строки
// }

// console.log(calculateTotalPrice("Blaster"));//0
// console.log(calculateTotalPrice("Droid"));//2800


//----------------------------------

// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Change code below this line

// const {
//     today: { low: todayLow, high: todayHigh, icon:todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"},
//   tomorrow:{low:tomorrowLow, high:tomorrowHigh,icon:tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"},
// }=forecast;

//----------------------------------------------------------------

// Напиши функцию makeTask(data) которая принимает один параметр data - объект со следующими свойствами.

// text - текст задачи.
// category - категория задачи.
// priority - приоритет задачи.
// Функция должна составить и вернуть новый объект задачи, не изменяя напрямую параметр data. В новом объекте должно быть свойство completed, значение которого хранится в одноимённой локальной переменной.

// В параметре data гарантированно будет только свойство text, а остальные два, category и priority, могут отсутствовать. Тогда, в новом объекте задачи, в свойствах category и priority должны быть значения по умолчанию, хранящиеся в одноимённых локальных переменных.

// function makeTask(data) {
//   const completed = false;
//   const category = 'General';
//   const priority = 'Normal';
 
//   // Change code below this line
//   let arr = { completed, category, priority, ...data };
  
//   return arr;
//   // Change code above this line
// }

// console.log(makeTask({})); //{ category: "General", priority: "Normal", completed: false }

// makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" }); //{ category: "Homemade", priority: "Low", text: "Take out the trash", completed: false }

// makeTask({ category: "Finance", text: "Take interest" }); //{ category: "Finance", priority: "Normal", text: "Take interest", completed: false }


//----------------------------

// // Change code below this line
// function addOverNum(...args) {
//   let total = 0;

//   for (const arg of args) {
//     if(args[0]<arg){
//    total += arg; }
    
//   }

//   return total;
//   // Change code above this line
// }

// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));

//------------------------

// Функция findMatches() принимает произвольное количество аргументов. Первым аргументом всегда будет массив чисел, а остальные аргументы будут просто числами.

// Дополни код функции так, чтобы она возвращала новый массив matches, в котором будут только те аргументы, начиная со второго, которые есть в массиве первого аргумента.

// Например, findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) должна вернуть массив [1, 2], потому что только они есть в массиве первого аргумента.

// function findMatches(arr, ...args) {
//   const matches = []; // Don't change this line
// for (const arg of args) {
//   if (arr.includes(arg)) {
//     // console.log(arr);
//     matches.push(arg)
//   }
// }

//   // Change code above this line
//   return matches;
// };

// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7)); //[1. 2]
// // findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7); //[1. 2]
// findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2);//[17, 89, 2]


//------------------------

// Выполни рефакторинг методов объекта atTheOldToad так, чтобы они работали не с массивом строк, а с массивом объектов.

// getPotions() - метод для получения всех зелий. Возвращает значение свойства potions.

// addPotion(newPotion) - добавляет зелье newPotion (уже объект) в массив в свойстве potions, но только если такого зелья еще нет в инвентаре. В противном случае возвращается строка.

// removePotion(potionName) - удаляет объект зелья с именем potionName из массива в свойстве potions.

// updatePotionName(oldName, newName) - обновляет свойство name объекта-зелья с названием oldName на newName в массиве potions.


// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//    addPotion(newPotion) {
//     for (const potion of this.potions) {
//       if (newPotion.name === potion.name) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//     }
//       this.potions.push(newPotion);
//   },
//   //    addPotion(newPotion) {
//   //   if (this.potions.includes(newPotion)) {
//   //     return `Error! Potion ${newPotion} is already in your inventory!`;
//   //   }

//   //   this.potions.push(newPotion);
//   // },
//   removePotion(potionName) {
//     for (let i = 0; i < this.potions.length; i+=1) {
//       const potionIndex = this.potions[i];
      
//       if (potionIndex.name === potionName) {
//         this.potions.splice(i, 1);
//       }
//     }
//     return `Potion ${potionName} is not in inventory!`;
//   },
  //   removePotion(potionName) {
  //   const potionIndex = this.potions.indexOf(potionName);

  //   if (potionIndex === -1) {
  //     return `Potion ${potionName} is not in inventory!`;
  //   }

  //   this.potions.splice(potionIndex, 1);
  // },
  // updatePotionName(oldName, newName) {
  //  for (const potion of this.potions) {
  //    if (oldName === potion.name) {
  //      potion.name = newName;
  //   }
  //  }
  //  return `Potion ${oldName} is not in inventory!`;
   
  // },
  // ------------------------------------
  // updatePotionName(oldName, newName) {
  //   const potionIndex = this.potions.indexOf(oldName);

  //   if (potionIndex === -1) {
  //     return `Potion ${oldName} is not in inventory!`;
  //   }

  //   this.potions.splice(potionIndex, 1, newName);
  // },
  // Change code above this line
// };


// console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.addPotion({ name: 'Invisibility', price: 620 }));
// console.log(atTheOldToad.removePotion("Dragon breath"));


//---------------

// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}.`);
// });
// makePizza('Ultracheese', function eatPizza(pizzaName){
//   console.log(`Eating pizza ${pizzaName}`);
// });
// // Change code below this line

//--------------------
// function processCall(recipient) {
//   // Імітуємо доступність абонента випадковим числом
//   const isRecipientAvailable = Math.random() > 0.5;

//   if (!isRecipientAvailable) {
//     console.log(`Абонент ${recipient} недоступний, залиште повідомлення.`);
//     // Логіка активації автовідповідача
//   } else {
//     console.log(`З'єднуємо з ${recipient}, очікуйте...`);
//     // Логіка прийняття дзвінка
//   }
// }

// processCall("Mango");


//-------------------------------

// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],
//   order(pizzaName, onSuccess, onError) {
    
//     if (this.pizzas.includes(pizzaName)) {
//       return onSuccess(pizzaName);
      
//     }
//     return onError (`There is no pizza with a name ${pizzaName} in the assortment.`);
//   },
// };

// Change code above this line

// Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// console.log( pizzaPalace.order("Smoked", makePizza, onOrderError));
// console.log(pizzaPalace.order("Four meats", makePizza, onOrderError));
// console.log(pizzaPalace.order("Big Mike", makePizza, onOrderError));
// console.log(pizzaPalace.order("Vienna", makePizza, onOrderError));


// //----------------------

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Change code below this line

//   orderedItems.forEach(function callback(element,index) {
//     totalPrice+=orderedItems[index]
//   })

//   // Change code above this line
//   return totalPrice;
// }

//---------------

function getCommonElements(firstArray, secondArray) {
  const commonElements = [];
  // Change code below this line
  firstArray.forEach(function (element, index) {
    if (secondArray.includes(firstArray[index])) {
    commonElements.push(firstArray[index]);
  }
})

  // for (let i = 0; i < firstArray.length; i += 1) {
  //   if (secondArray.includes(firstArray[i])) {
  //     commonElements.push(firstArray[i]);
  //   }
  // }

  return commonElements;
  // Change code above this line
}
console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));