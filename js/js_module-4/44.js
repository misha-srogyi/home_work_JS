// !!Задача. Сортировка по имени!!
// Дополни функцию sortByName(users) так, чтобы она возвращала массив пользователей отсортированный по их имени (свойство name) в алфавитном порядке.

// Change code below this line
const sortByName = users => {
    return [...users].sort((firstName, secondName) => firstName.name.localeCompare(secondName.name));
};
// Change code above this line