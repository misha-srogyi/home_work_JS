// Lesson 35

// Функция checkName(fullname, name) принимает два параметра и возвращает буль true или false - результат проверки вхождения подстроки name в строку fullname.

// fullname - полное имя состоящее из двух слов (имени и фамилии) разделённых пробелом.
// name - имя для проверки вхождения в полное имя.
// Присвой переменной result выражение проверки вхождения имени (параметр name), в полное имя (параметр fullname). Пусть функция строго относится к регистру букв, то есть «Петя» и «петя» для неё разные имена.

function checkForName(fullName, name) {
 const result = fullName.includes(name) ; // Complete this line
  return result;
}
console.log(checkForName('Egor Kolbasov', 'Egor'));
console.log(checkForName('Egor Kolbasov', 'egor'));
console.log(checkForName('Egor Kolbasov', 'Zhenya'));