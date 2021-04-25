
// Lesson 25

// Выполни рефакторинг решения задачи «Склад товаров», заменив инструкцию if...else тернарным оператором.



function checkStorage(available, ordered) {
  let message;
  // Write your code under this line
  message = (ordered > available) ? 'Not enough goods in stock!' : 'The order is placed, the manager will contact you';

//   if (ordered > available) {
//     message = 'Not enough goods in stock!';
//   } else {
//     message = 'The order is placed, the manager will contact you';
//   }

  // Write your code above this line
  return message;
}