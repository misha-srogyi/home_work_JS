// Lesson 18

// Станция по продаже ремонтных дроидов готова к запуску, осталось написать программное обеспечение для отдела продаж.

// Функция makeTransaction(pricePerDroid, orderedQuantity, customerCredits) выполняет транзакцию по продаже дроидов и возвращает сообщение о результате операции. Она объявляет три параметра, значения которых будут задаваться во время её вызова:

// pricePerDroid - цена одного дроида;
// orderedQuantity - кол-во заказанных дроидов;
// customerCredits - сумма средств на счету клиента.
// Дополни её следующим функционалом:

// Объяви переменную totalPrice для хранения общей суммы заказа и присвой ей выражение расчёта этой суммы.
// Добавь проверку сможет ли клиент оплатить заказ:
// если сумма к оплате превышает количество кредитов на счету клиента, запиши в переменную message строку 'Not enough funds on the account!';
// в противном случае, вычти сумму покупки со счёта клиента и запиши в переменную message сообщение: 'You ordered <число> droids, <число> credits left on the account'.

function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
  let message;
  // Write your code under this line
const totalPrice = orderedQuantity * pricePerDroid;
  if (totalPrice > customerCredits)
  { message = 'Not enough funds on the account!'; }
  else
  { message = `You ordered ${orderedQuantity} droids, ${customerCredits - totalPrice} credits left on the account`; }
  // Write your code above this line
  return message;
}
console.log(makeTransaction(3000, 5, 23000));
console.log(makeTransaction(1000, 3, 15000));
console.log(makeTransaction(5000, 10, 8000));
console.log(makeTransaction(2000, 8, 10000));
console.log(makeTransaction(500, 10, 5000));