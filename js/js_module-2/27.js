// Lesson 27!!!Фильтрация массива чисел 2.0!!!
// Выполни рефакторинг функции filterArray(numbers, value) заменив цикл for на for...of.

// function filterArray(numbers, value) {
//   // Пиши код ниже этой строки
//   const filteredNumbers = [];

//   for (let i = 0; i < numbers.length; i += 1) {
//     const number = numbers[i];

//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

//   return filteredNumbers;
//   // Пиши код выше этой строки
// }

function filterArray(numbers, value) {
  // Пиши код ниже этой строки
    const filteredNumbers = [];

    for (const number of numbers) {
        console.log([number]);
        if (number > value) {
            filteredNumbers.push(number);
            }
    }
    
    return filteredNumbers;
  // Пиши код выше этой строки
}
console.log(filterArray([1, 2, 3, 4, 5], 3));