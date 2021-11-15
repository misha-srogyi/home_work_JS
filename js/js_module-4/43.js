// !!Задача. Сортировка по количеству друзей!!
// Дополни функцию sortByDescendingFriendCount(users) так, чтобы она возвращала массив пользователей отсортированный по убыванию количества их друзей (свойство friends).

// Change code below this line
const sortByDescendingFriendCount = users => {
    return [...users].sort((firstFriend, secondFriend) => secondFriend.friends.length - firstFriend.friends.length);
};
// Change code above this line