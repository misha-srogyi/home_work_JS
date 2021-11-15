// !!Задача. Общий баланс!!
// Дополни функцию getTotalBalanceByGender(users, gender) так, чтобы она возвращала общий баланс пользователей (свойство balance), пол которых (свойство gender) совпадает со значением параметра gender.

// Change code below this line
const getTotalBalanceByGender = (users, gender) => {
    return [...users]
        .filter(user => user.gender === gender)
        .reduce((total, user)=> total + user.balance, 0);
};
// Change code above this line