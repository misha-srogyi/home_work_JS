// Lesson 2  !!!Ранний возврат!!!
// Функция checkPassword получает пароль пользователя в параметр password, проверяет его на совпадение с паролем администратора в переменной ADMIN_PASSWORD и возвращает сообщение о результате сравнения.

// Проведи рефакторинг кода функции checkStorage используя паттерн «ранний возврат»:

// удали переменную message;
// удали else;
// код должен работать так же, как и до оптимизации.

// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';

//   let message;

//   if (password === ADMIN_PASSWORD) {
//     message = 'Добро пожаловать!';
//   } else {
//     message = 'Доступ запрещен, неверный пароль!';
//   }

//   return message;
// }


function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  // Пиши код ниже этой строки

  if (password === ADMIN_PASSWORD) {
    return 'Добро пожаловать!';
  }
    return 'Доступ запрещен, неверный пароль!';
  
  // Пиши код выше этой строки
}
