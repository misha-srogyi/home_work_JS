// Lesson 20

// Функция checkStorage(available, ordered) проверяет возможность оформления заказа и возвращает сообщение о результате. Она объявляет два параметра, значения которых будут задаваться во время её вызова.

// available - доступное количество товаров на складе
// ordered - единиц товара в заказе
// Используя ветвления дополни код функции так, что:

// Если в заказе еще нет товаров, то есть значение параметра ordered равно 0, в переменную message присваивается строка There are no products in the order yet.
// Eсли товаров в заказе больше чем доступно товаров на складе, то в переменную message присваивается строка 'The order is too large, there are not enough items in stock!'.
// В противном случае в переменную message присваевается строка 'The order is placed, the manager will contact you'.

function checkStorage(available, ordered) {
  let message;
  // Write your code under this line
if ( ordered === 0 )
{ message = 'There are no products in the order yet';}
  else if ( ordered > available )
  { message = 'The order is too large, there are not enough items in stock!';}
  else { message = 'The order is placed, the manager will contact you';}
  // Write your code above this line
  return message;
}