// Lesson 25  !!!Общие элементы!!!

// Общими элементами массивов называют те элементы, которые присутствуют во всех массивах.

// Например, в двух массивах [1, 3, 5] и [0, 8, 5, 3] общими будут числа 3 и 5, т.к. они присутствуют в обоих исходных массивах. А числа 0, 1 и 8 присутствуют только в одном из массивов.

// Напиши функцию getCommonElements(array1, array2) которая получает два массива произвольной длины в параметры array1 и array2, и возвращает новый массив, состоящий из тех элементов, которые присутствуют в обоих исходных массивах.


function getCommonElements(array1, array2) {
  // Пиши код ниже этой строки
    const sameElements = [];

    for (const el of array1) {
        if (array2.includes(el)) {
            sameElements.push(el);
        }
    }

    return sameElements;
  // Пиши код выше этой строки
}
console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));


//   Знайти унікальні елементи


// function getCommonElements(array1, array2) {
//   // Пиши код ниже этой строки
//     const uniquElements = [];

//     for (const el of array1) {
//         const isInArray2 = array2.includes(el);
//         if (!isInArray2) {
//             uniquElements.push(el);
//         }
//     }
//     for (const el of array2) {
//         const isInArray1 = array1.includes(el);
//         if (!isInArray1) {
//             uniquElements.push(el);
//         }
//     }

//     return uniquElements;
//   // Пиши код выше этой строки
// }