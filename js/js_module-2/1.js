// Lesson 1  !!!Ранний возврат!!!
// Запиши условие в инструкции if так, чтобы функция работала правильно.
function checkAge(age) {
  if (age>=18) { // Дополни эту строку
    return 'Вы совершеннолетний человек';
  }

  return 'Вы не совершеннолетний человек';
}
console.log(checkAge(18));
console.log(checkAge(15));