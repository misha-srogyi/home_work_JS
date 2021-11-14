// !!Чистые функции!!

// Функция changeEven(numbers, value) принимает массив чисел numbers и обновляет каждый элемент, значение которого это чётное число, добавляя к нему значение параметра value.

// Выполни рефакторинг функции так, чтобы она стала чистой - не изменяла массив чисел numbers, а создавала, наполняла и возвращала новый массив с обновлёнными значениями

function changeEven(numbers, value) {
  // Change code below this line
 
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 === 0) {
//       numbers[i] = numbers[i] + value;
//     }
//   }
    let newArray = [];
    numbers.forEach(number => {
        if (number % 2 === 0) {
            newArray.push(number + value);
        }
        else {
            newArray.push(number);
        };
        // Або тернарник
        // number % 2 === 0 ? newArray.push(number + value) : newArray.push(number);
    });
    return newArray;
  // Change code above this line
}


