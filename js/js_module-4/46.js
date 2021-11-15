// !!Задача. Пользователи и друзья!!
// Дополни функцию getNamesSortedByFriendCount(users) так, чтобы она возвращала массив имён пользователей отсортированный по возрастанию количества их друзей (свойство friends).

// Change code below this line
const getNamesSortedByFriendCount = users => {
    return [...users]
        .sort((firstFriend, secondFriend) => firstFriend.friends.length - secondFriend.friends.length)
        .map(user => user.name);
};
// Change code above this line