// !!Задача. Неактивные пользователи!!
// Дополни функцию getInactiveUsers(users) так, чтобы она возвращала массив неактивных пользователей, значение свойства isActive которых false.
// Change code below this line
const getInactiveUsers = (users) => {
    return users.filter(user => user.isActive === false);
};
// Change code above this line
