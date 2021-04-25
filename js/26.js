// Lesson 26

// Функция checkPassword(password) сравнивает переданный ей пароль (параметр password) с сохранённым паролем администратора (константа ADMIN_PASSWORD) и возвращает строку с сообщением о результате.

// Используя тернарный оператор дополни функцию так, что:

// Если значения password и ADMIN_PASSWORD совпадают, присвой переменной message строку 'Access is allowed'.
// В противном случае, присвой message строку 'Access denied, wrong password!'.

function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  let message;
  // Write your code under this line
message = ADMIN_PASSWORD === password ? 'Access is allowed' : 'Access denied, wrong password!';
  // Write your code above this line
  return message;
}