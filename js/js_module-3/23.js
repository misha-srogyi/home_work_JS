// Lesson 23 !!!Изменение имени переменной!!!

// Замени объявления переменных highYesterday, highToday, highTomorrow и highIcon одной операцией деструктуризации свойств объекта highTemperatures. Задай значение по умолчанию для highIcon - строку 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'.

const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// const highYesterday = highTemperatures.yesterday;
// const highToday = highTemperatures.today;
// const highTomorrow = highTemperatures.tomorrow;
// const highIcon = highTemperatures.icon;

// Пиши код ниже этой строки
const { yesterday: highYesterday,
  today: highToday,
  tomorrow: highTomorrow,
  icon: highIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'
  } = highTemperatures;
// Пиши код выше этой строки
const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;
