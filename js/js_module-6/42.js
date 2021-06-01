//Lesson 42 !!Задача. Пользователи и друзья!!

// Дополни функцию getNamesSortedByFriendCount(users) так, чтобы она возвращала массив имён пользователей отсортированный по возрастанию количества их друзей (свойство friends).

// Пиши код ниже этой строки
const getNamesSortedByFriendCount = users => {
    return [...users]
    .sort((firstFriend, secondFriend) => firstFriend.friends.length - secondFriend.friends.length )
    .map(user => user.name);
};
// Пиши код выше этой строки