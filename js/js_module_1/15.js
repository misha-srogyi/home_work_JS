//Lesson 15

// Добавь выражение проверки совершеннолетия пользователя, значения параметра age, в условие для инструкции if.

// Если пользователь совершеннолетний, должен выполняться блок if и в переменную message записывается строка 'You are adult'.
// В противном случае должен выполняться блок else и записывается строка 'You are minor'.

function checkAge(age) {
  let message;

  if (age>=18) { 
    message = 'You are adult';
  }
  else {
    message = 'You are minor';
  }

  return message;
}
