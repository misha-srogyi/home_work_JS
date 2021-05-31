//Lesson 13   !!Задача. Имена пользователей!!
// Дополни функцию getUserNames(users) так, чтобы она возвращала массив имён пользователей (свойство name) из массива объектов в параметре users.
// Пиши код ниже этой строки
const getUserNames = users => {
    const names= users.map(user => user.name)
return names;
  };
  // Пиши код выше этой строки
