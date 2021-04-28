// Lesson33

// Функция formatMessage(message, maxLength) принимает строку (параметр message) и форматирует её, если длина превышает значение в параметре maxLength.

// Дополни код функции так, что если длина строки:

// не превышает maxLength, функция возвращает её в исходном виде.
// больше maxLength, то функция обрезает строку до maxLength символов и добавляет в конец троеточие '...', после чего возвращает укороченную версию.


function formatMessage(message, maxLength) {
  let result;
// Write your code under this line
  if (message.length <= maxLength)
    {
      result = message;
    }
    else {
        result = message.slice(0, maxLength) + '...';
        return result;
    }
// Write your code above this line
  return result;
}
console.log(formatMessage('Curabitur ligula sapien', 16));
console.log(formatMessage('Curabitur ligula sapien', 23));
console.log(formatMessage('Vestibulum facilisis purus nec', 20));

