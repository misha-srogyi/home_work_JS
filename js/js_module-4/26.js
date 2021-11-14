// !!Задача. Активные пользователи!!
// Дополни функцию getActiveUsers(users) так, чтобы она возвращала массив активных пользователей, значение свойства isActive которых true.
// Change code below this line
const getActiveUsers = (users) => {
    return users.filter(user => user.isActive === true);
}
// Change code above this line
