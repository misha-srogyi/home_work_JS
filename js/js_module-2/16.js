// Lesson 16   !!!Композиция массивов!!!

// Напиши функцию makeArray(firstArray, secondArray, maxLength) для создания нового массива со всеми элементами двух исходных firstArray и secondArray. Параметр maxLength содержит максимально допустимую длину нового массива.

// Если количество элементов нового массива больше maxLength, функция должна вернуть копию массива длиной maxLength элементов.

// В противном случае функция должна вернуть новый массив целиком.

function makeArray(firstArray, secondArray, maxLength) {
    // Пиши код ниже этой строки

const newArray = firstArray.concat(secondArray).slice(0,maxLength);
  return newArray;
    
    // Пиши код выше этой строки
  }
console.log(makeArray(['Манго', 'Поли'], ['Аякс', 'Челси'], 3));