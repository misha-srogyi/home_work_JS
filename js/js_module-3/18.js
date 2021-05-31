// Lesson 18  !!Задача. Пользователи с цветом глаз!!

// Дополни функцию getUsersWithEyeColor(users, color) так, чтобы она возвращала массив пользователей у которых цвет глаз (свойство eyeColor) совпадает со значением параметра color.

const getUsersWithEyeColor = (users, color) => {
  return users.filter(user => {
    if (user.eyeColor === color) {
      return user.eyeColor }
  });
};