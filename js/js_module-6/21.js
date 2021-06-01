// Lesson 21  !!Задача. Список друзей!!

// Дополни функцию getFriends(users) так, чтобы она возвращала массив друзей всех пользователей (свойство friends). У нескольких пользователей могут быть одинаковые друзья, сделай так чтобы возвращаемый массив не содержал повторений.

const getFriends = (users) => {
  const allFriends = users.flatMap(user => user.friends);
    return allFriends.filter((friends, index, users) => users.indexOf(friends) === index)
};