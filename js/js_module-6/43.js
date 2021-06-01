//Lesson 43  !!Задача. Имена друзей!!

// Дополни функцию getSortedFriends(users) так, чтобы она возвращала массив уникальных имён друзей (свойство friends) отсортированный по алфавиту .

// Пиши код ниже этой строки
const getSortedFriends = users => {
    return [...users]
        .flatMap(users => users.friends)
        .filter((friends, index, users) => users.indexOf(friends) === index)
        .sort((firstFriend, secondFriend) => firstFriend.localeCompare(secondFriend));
};
// Пиши код выше этой строки