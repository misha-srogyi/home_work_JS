// Lesson 29

// Функция getShippingCost(country) должна проверять возможность доставки товара в страну пользователя (параметр country) и возвращать сообщение о результате хранящееся в переменной message. Обязательно используй инструкцию switch.

// Формат возвращаемой строки Shipping to <страна> will cost <цена> credits, где вместо <страна> и <цена> необходимо подставить соотвествующие значения.

// Список стран и стоимость доставки:

// China - 100 кредитов
// Chile - 250 кредитов
// Australia - 170 кредитов
// Jamaica - 120 кредитов
// Из списка видно, что доставка есть не везде. Если указанной страны нет в списке, то функция должна вернуть строку 'Извините, в вашу страну доставки нет'

function getShippingCost(country) {
  let message;
  // Write your code under this line
  switch (country) {
    case 'China':
      message = 'Shipping to China will cost 100 credits';
      break;
    
    case 'Chile':
      message = 'Shipping to Chile will cost 250 credits';
      break;
    
    case 'Australia':
      message = 'Shipping to Australia will cost 170 credits';
      break;
    
    case 'Jamaica':
      message = 'Shipping to Jamaica will cost 120 credits';
      break;
    
    default:
      message = 'Sorry, there is no delivery to your country';
  }

  // Write your code above this line
  return message;
}
console.log(getShippingCost('China'));
console.log(getShippingCost('Chile'));
console.log(getShippingCost('Australia'));
console.log(getShippingCost('Jamaica'));
console.log(getShippingCost('Germany'));