//Lesson 44  !!Задача. Общий баланс!!

// Дополни функцию getTotalBalanceByGender(users, gender) так, чтобы она возвращала общий баланс пользователей (свойство balance), пол которых (свойство gender) совпадает со значением параметра gender.

// Пиши код ниже этой строки
const getTotalBalanceByGender = (users, gender) => {
    return [...users]
        .filter(user => user.gender === gender)
        .reduce((total, user) => total + user.balance, 0);
};
// Пиши код выше этой строки