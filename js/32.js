// Lesson 32

// Функция getSubstring(string, length) принимает строку и возвращает подстроку от начала и до length символов. Она объявляет два параметра, значения которых будут задаваться во время её вызова:

// string - оригинальная строка
// length - количество символов с начала строки для подстроки
// Присвой переменной substring выражение создания подстроки длинной length символов (от начала) из строки string.

function getSubstring(string, length) {
    const substring = 'Hello world'.slice(0, length) ; // Complete this line

    return substring;
}
console.log(getSubstring('Hello world', 3)); //'Hel'



// const productName = 'Ремонтный дроид';
// console.log(productName.slice(0, 4)); // 'Ремо'
// console.log(productName.slice(3, 9)); // 'онтный'
// console.log(productName.slice(0, productName.length)); // 'Ремонтный дроид'
// console.log(productName.slice(10, productName.length)); // 'дроид'
