// !!Задача. Имена друзей!!
// Дополни функцию getSortedFriends(users) так, чтобы она возвращала массив уникальных имён друзей (свойство friends) отсортированный по алфавиту .

// Change code below this line
const getSortedFriends = users => {
    return [...users]
        .flatMap(user => user.friends)
        .filter((friends, index, users) => users.indexOf(friends) === index)
        .sort((firstFriend, secondFriend) => firstFriend.localeCompare(secondFriend));
};

// Change code above this line

