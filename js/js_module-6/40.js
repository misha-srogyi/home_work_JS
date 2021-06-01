// Lesson 40  !!Задача. Сортировка по имени!!

// Дополни функцию sortByName(users) так, чтобы она возвращала массив пользователей отсортированный по их имени (свойство name) в алфавитном порядке.

// Пиши код ниже этой строки
const sortByName = users => {
  return [...users].sort((firstUser, secondUser) => firstUser.name.localeCompare(secondUser.name));
};
// Пиши код выше этой строки