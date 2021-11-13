// !!!Задача. Фильтрация массива чисел 2.0!!!
// Задание
// Замени объявление функции filterArray() и коллбек для метода forEach() на стрелочные функции.

// Change code below this line
// function filterArray(numbers, value) {
//   const filteredNumbers = [];

//   numbers.forEach(function (number) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   // Change code above this line
//   return filteredNumbers;
// }

const filterArray = (numbers, value) => {
    const filteredNumbers = [];
    numbers.forEach(number => {
        if (number > value) {
            filteredNumbers.push(number);
        }
    })
    return filteredNumbers;
};