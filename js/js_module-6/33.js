// Lesson33  !!Задача. Общее количество друзей!!

// Дополни функцию getTotalFriendCount(users) так, чтобы она считала и возвращала общее количество друзей (свойство friends) всех пользователей из массива users.

// Пиши код ниже этой строки
const getTotalFriendCount = users => {
    return users.reduce((total, user) => total + user.friends.length, 0);
};
// Пиши код выше этой строки

