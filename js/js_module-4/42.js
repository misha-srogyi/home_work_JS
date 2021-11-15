// !!Задача. Сортировка по балансу!!
// Дополни функцию sortByAscendingBalance(users) так, чтобы она возвращала массив пользователей отсортированный по возрастанию их баланса (свойство balance).

// Change code below this line
const sortByAscendingBalance = users => {
    return [...users].sort((firstBalance, secondBalance) => 
        firstBalance.balance - secondBalance.balance
    );
};
// Change code above this line