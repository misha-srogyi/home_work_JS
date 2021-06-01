// Lesson 38 !!Задача. Сортировка по балансу!!

// Дополни функцию sortByAscendingBalance(users) так, чтобы она возвращала массив пользователей отсортированный по возрастанию их баланса (свойство balance).

// Пиши код ниже этой строки
const sortByAscendingBalance = users => {
    return [...users].sort((firstBalance, secondBalance) => firstBalance.balance - secondBalance.balance);
};
// Пиши код выше этой строки