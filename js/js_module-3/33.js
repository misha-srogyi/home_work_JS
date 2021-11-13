// Lesson33  !!Задача. Массив совпадений!!

// Функция findMatches() принимает произвольное количество аргументов. Первым аргументом всегда будет массив чисел, а остальные аргументы будут просто числами.

// Дополни код функции так, чтобы она возвращала новый массив matches, в котором будут только те аргументы, начиная со второго, которые есть в массиве первого аргумента.

// Например, findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) должна вернуть массив [1, 2], потому что только они есть в массиве первого аргумента.

// Пиши код ниже этой строки
function findMatches(arr, ...args) {
  const matches = []; // Не изменяй эту строку
  for (const arg of args) {
    if (arr.includes(arg)) {
      matches.push(arg);
    }
  
    
  }
  // Пиши код выше этой строки
  return matches;
}
console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));
console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2));

function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;
  // Change code below this line
  orderedItems.forEach(function (element, index) {
    totalPrice += index;
  });
 

  // Change code above this line
  return totalPrice;
}