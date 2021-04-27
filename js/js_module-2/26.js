// Lesson 26  !!!Цикл for...of!!!

// Выполни рефакторинг кода функции calculateTotalPrice(order) заменив цикл for на for...of.

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Пиши код ниже этой строки

//   for (let i = 0; i < order.length; i += 1) {
//     total += order[i];
//   }

//   // Пиши код выше этой строки
//   return total;
// }
// console.log(calculateTotalPrice([164, 48, 291]));

function calculateTotalPrice(order) {
  let total = 0;
  // Пиши код ниже этой строки

    for (const el of order) {
          total += el;
      }
      
      return total;
      
      // Пиши код выше этой строки
    }

console.log(calculateTotalPrice([164, 48, 291]));