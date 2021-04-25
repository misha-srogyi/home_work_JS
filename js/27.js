// Lesson 27

// Функция getSubscriptionPrice(type) получает строку с типом подписки пользователя (параметр type), проверяет её на совпадение с тремя возможными типами ежемесячной подписки и возвращает цену хранящуюся в переменной price.

// Если значение параметра type это строка:

// 'starter' - цена подписки 0 кредитов.
// 'professional' - цена подписки 20 кредитов.
// 'organization' - цена подписки 50 кредитов.
// Изначально в теле функции была инструкция if...else, которая выглядела вот так.

function getSubscriptionPrice(type) {
  let price;
  // Write your code under this line

 switch (type) { 
   case  'starter' : 
      price = 0 ; 
      break;

   case 'professional' : 
      price = 20 ; 
      break;

    case 'organization' : 
      price = 50 ; 
      break;
  }

  // Write your code above this line
  return price;
}