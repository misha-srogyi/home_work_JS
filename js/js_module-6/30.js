// Lesson 30  !!Метод reduce()!!

// Игровому сервису необходим функционал подсчёта среднего времени проведённого в играх. Дополни код так, чтобы в переменной totalPlayTime получилось общее игровое время из массива playtimes.

const players = {
  mango: 1270,
  poly: 468,
  ajax: 710,
  kiwi: 244
};
const playtimes = Object.values(players); // [1270, 468, 710, 244]
// Пиши код ниже этой строки

const totalPlayTime = playtimes.reduce((previusValue, number) => {
    return previusValue + number;
});

// Пиши код выше этой строки
const averagePlayTime = totalPlayTime / playtimes.length;
