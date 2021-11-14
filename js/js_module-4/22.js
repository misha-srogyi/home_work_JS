// !!Задача. Пользователи с цветом глаз!!
// Дополни функцию getUsersWithEyeColor(users, color) так, чтобы она возвращала массив пользователей у которых цвет глаз (свойство eyeColor) совпадает со значением параметра color.
// Change code below this line
const getUsersWithEyeColor = (users, color) => {
    const colorEye = users.filter(user => user.eyeColor === color);
    return colorEye;
};
// Change code above this line

// N2
// const getUsersWithEyeColor = (users, color) => {
//   return users.filter(user => {
//     if (user.eyeColor === color) {
//       return user.eyeColor }
//   });
// };