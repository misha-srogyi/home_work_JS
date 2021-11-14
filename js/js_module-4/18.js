// !!Задача. Почты пользователей!!
// Дополни функцию getUserEmails(users) так, чтобы она возвращала массив почтовых адресов пользователей (свойство email) из массива объектов в параметре users

// Change code below this line
const getUserEmails = users => {
    const getEmail = users.map(user => user.email);
    return getEmail;

  };
  // Change code above this line