// Lesson 23!!!Фильтрация массива чисел!!!

// Напиши функцию filterArray(numbers, value), которая принимает массив чисел (параметр numbers) и возвращает новый массив, в котором будут только те элементы массива numbers, которые больше чем значение параметра value (число).

// function filterArray(numbers, value) {
//   // Пиши код ниже этой строки
// let newMassif=0;
//   for (i=0; i > value; i+=1){
//    newMassif.push(i);}

// return newMassif;
//   // Пиши код выше этой строки
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));


function filterArray(numbers, value) {
  // Пиши код ниже этой строки
    let newMassif = [];
    for (const number of numbers) {
        console.log('N0: ', number);
        if (number > value) {
            newMassif.push(number);
        }
    }
    
    return newMassif;

  // Пиши код выше этой строки
}

console.log(filterArray([1, 2, 3, 4, 5], 3));