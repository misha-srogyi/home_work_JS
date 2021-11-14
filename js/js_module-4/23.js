// !!Задача. Пользователи в возрастной категории!!
// Дополни функцию getUsersWithAge(users, minAge, maxAge) так, чтобы она возвращала массив пользователей, возраст которых (свойство age) попадает в промежуток от minAge до maxAge.
// Change code below this line
const getUsersWithAge = (users, minAge, maxAge) => {
    const userAge = users.filter(user => user.age >= minAge && user.age <= maxAge);
    return userAge;
};
// Change code above this line

// N2

// const getUsersWithAge = (users, minAge, maxAge) => {
//     return users.filter(user => {
//         if (user.age >= minAge && user.age <= maxAge) {
//             return user.age
//         }
//     });
// };