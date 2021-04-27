// Lesson 32!!!Функция includes()!!!

// Напиши функцию includes(array, value), которая делает тоже самое, что и метод массива массив.includes(значение) - проверяет, есть ли в массиве array значение value, возвращая true если есть и false в противном случае.

// При выполнении этой задачи в теле функции includes() нельзя использовать метод массив.includes(значение).

function includes(array, value) {
  // Пиши код ниже этой строки
    const numberIncludes = [];
    for (const el of array) {
        console.log(el);
        if (el === value) {
            return true;
        }
    }
    return false;
  
  // Пиши код выше этой строки
}


console.log(includes([1, 2, 3, 4, 5], 3));
console.log(includes([1, 2, 3, 4, 5], 17));
