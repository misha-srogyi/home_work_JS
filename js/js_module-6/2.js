// Lesson 2  !!Вложенные свойства!!
// Функция filterArray(numbers, value) принимает массив чисел numbers и возвращает новый массив, в котором будут только те элементы оригинального массива, которые больше чем значение параметра value.

// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.
//------
// Перебирающий forEach
// numbers.forEach(function (number, index) {
//   console.log(`Индекс ${index}, значение ${number}`);
// });
//------
function filterArray(numbers, value) {
    const filteredNumbers = [];
    // Пиши код ниже этой строки

    // for (let i = 0; i < numbers.length; i += 1) {
    //   if (numbers[i] > value) {
    //     filteredNumbers.push(numbers[i]);
    //   }
    // }

    numbers.forEach(function (number, index) {
        if (numbers[index] > value) {
            filteredNumbers.push(numbers[index]);
        }
    });

    // Пиши код выше этой строки
    return filteredNumbers;
}
console.log(filterArray([1, 2, 3, 4, 5], 3));