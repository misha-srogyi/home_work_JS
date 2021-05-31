//lesson 14 !!Задача. Почты пользователей!!

// Дополни функцию getUserEmails(users) так, чтобы она возвращала массив почтовых адресов пользователей (свойство email) из массива объектов в параметре users.

// Пиши код ниже этой строки
const getUserEmails = users => {
    const email = users.map(user => user.email);
    return email;
  };
  // Пиши код выше этой строки