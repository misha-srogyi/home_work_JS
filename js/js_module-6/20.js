// Lesson 20 !!!Задача. Пользователи с другом!!!

// Дополни функцию getUsersWithFriend(users, friendName) так, чтобы она возвращала массив пользователей у которых есть друг с именем в параметре friendName. Массив друзей пользователя хранится в свойстве friends.

const getUsersWithFriend = (users, friendName) => {
    return users.filter(user => {
        if (user.friends.includes(friendName)) {
            return user.friends
        }
    });
};

