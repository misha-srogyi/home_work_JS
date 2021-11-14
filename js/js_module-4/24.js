// !!Задача. Пользователи с другом!!
// Дополни функцию getUsersWithFriend(users, friendName) так, чтобы она возвращала массив пользователей у которых есть друг с именем в параметре friendName. Массив друзей пользователя хранится в свойстве friends.

// Change code below this line
const getUsersWithFriend = (users, friendName) => {
    const friendArray = users.filter(user => user.friends.includes(friendName));
    return friendArray;
};

// Change code above this line

// N2

// const getUsersWithFriend = (users, friendName) => {
//     return users.filter(user => {
//         if (user.friends.includes(friendName)) {
//             return user.friends
//         }
//     });
// };
