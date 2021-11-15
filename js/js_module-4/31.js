// !!Задача. Все ли пользователи активны!!
// Дополни функцию isEveryUserActive(users) так, чтобы она проверяла все ли пользователи сейчас активны (свойство isActive) и возвращала true или false.
// Change code below this line
const isEveryUserActive = (users) => {
   return users.every(user => user.isActive)
};
// Change code above this line
