// Lesson 32  !!Задача. Общий баланс пользователей!!

// Дополни функцию calculateTotalBalance(users) так, чтобы она считала и возвращала сумму всех средств (свойство balance) которые хранят пользователи из массива users.

// Пиши код ниже этой строки
const calculateTotalBalance = users => {
    return users.reduce((total, user) => total + user.balance, 0);
};
// Пиши код выше этой строки


