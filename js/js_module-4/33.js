// !!Задача. Есть ли активные пользователи!!
// Дополни функцию isAnyUserActive(users) так, чтобы она проверяла наличие активных пользователей (свойство isActive) и возвращала true или false.
// Change code below this line
const isAnyUserActive = users => {
    return users.some(user => user.isActive);
};
// Change code above this line