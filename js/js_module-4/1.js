
//   Lesson 1  !!Функция как значение!!

// Дополни код так, чтобы в переменной result был результат выполнения функции makePizza, а в переменной pointer была ссылка на функцию makePizza.

function makePizza() {
  return 'Ваша пицца готовится, ожидайте.';
}
// Пиши код ниже этой строки
const result = makePizza('Ваша пицца готовится, ожидайте.'); // результат выполнения функции makePizza
const pointer = makePizza; //ссылка на функцию makePizza