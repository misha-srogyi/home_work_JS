// Lesson 30

// Функция getNameLength(name) принимает имя (параметр name) и возвращает строку, в которой указана его длина. Дополни шаблонную строку в переменной message длиной строки из параметра name.

function getNameLength(name) {
  const message = `The length of your name is ${name.length} character(-s)`; // Complete this line

  return message;
}
console.log(getNameLength('Poly'));