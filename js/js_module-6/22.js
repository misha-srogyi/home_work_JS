// Lesson 22 !!Задача. Активные пользователи!!

// Дополни функцию getActiveUsers(users) так, чтобы она возвращала массив активных пользователей, значение свойства isActive которых true.

const getActiveUsers = (users) => {
    return users.filter(user => {
        if (user.isActive === true) {
            return user.isActive
        }
    });
};
