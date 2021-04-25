//Lesson 4

//Дополни код, присвоив переменной totalPrice выражение для подсчёта общей суммы заказа. Переменная pricePerItem хранит цену одной единицы товара, а orderedQuantity - количество единиц товара в заказе.

// Базовый код
const pricePerItem = 3500;
const orderedQuantity = 4;

// Пиши код ниже этой строки
const totalPrice = pricePerItem * orderedQuantity;
console.log(totalPrice);

//Lesson 5

//Объяви перемнную message и запиши в неё сообщение о покупке, строку в формате: Вы выбрали <имя товара>, цена за штуку <цена товара> кредитов. Где <имя товара> и <цена товара> это значения переменных productName и pricePerItem. Используй синтаксис шаблонных строк.

// Базовый код
const productName = 'Дроид';
const pricePerItem = 3500;

const message = `Вы выбрали ${productName}, цена за штуку ${pricePerItem} кредитов`;

//Lesson 6

// Магазин по продаже ремонтных дроидов готов к открытию, осталось написать скрипт для их заказа. Объяви переменные и присвой им соответствующие значения:
// pricePerDroid - цена одного дроида, значение 800;
// orderedQuantity - количество дроидов в заказе, значение 6;
// deliveryFee - стоимость доставки, значение 50;
// totalPrice - общая сумма заказа к оплате, не забудь о стоимости доставки;
// message - сообщение о состоянии заказа в формате; Вы заказали дроидов на сумму <сумма заказа> кредитов. Доставка (<цена доставки> кредитов) включена в сумму заказа.

const pricePerDroid = 800;
const orderedQuantity = 6;
const deliveryFee = 50;
const totalPrice = (pricePerDroid * orderedQuantity) + deliveryFee;
const message = `Вы заказали дроидов на сумму ${totalPrice} кредитов. Доставка (${deliveryFee} кредитов) включена в сумму заказа.`;

// lesson 7

// Объяви функцию sayHi, внутри которой добавь console.log() со строкой 'Привет, это моя первая функция!'.
// После объявления вызови функцию sayHi.

// Пиши код ниже этой строки
function sayHi() {
    console.log('Привет, это моя первая функция!')
};
sayHi();

//Lesson 8

// Функция add должна уметь складывать три числа и выводить результат в консоль. Добавь функции add три параметра a, b и c, которые будут получать значения аргументов при её вызове.
// Дополни console.log() так, чтобы он логировал строку 'Результат сложения равен <результат>', где <результат> это сумма переданных чисел.

// Пиши код ниже этой строки
function add(a,b,c) {
    console.log(`Результат сложения равен ${a + b + c}`);
}
  
add(15, 27, 10);
add(10, 20, 30);
add(5, 10, 15);

//Lesson 9

//Дополни код функции add так, чтобы она возвращала результат сложения значений трёх параметров a, b и c.

function add(a, b, c) {
    return a+b+c;
}

add(2, 5, 8); // 15

console.log(add(15, 27, 10));
console.log(add(10, 20, 30));
console.log(add(5, 10, 15));

//Lesson 10

// Функция makeMessage(name, price) составляет и возвращает сообщение о покупке. Она объявляет два параметра, значения которых будут задаваться во время её вызова.
// name - название товара
// price - цена товара
// Дополни код функции так, чтобы в переменную message записывалась строка Вы выбрали <имя товара>, цена за штуку <цена товара> кредитов, где <имя товара> и <цена товара> это значения параметров name и price. Используй синтаксис шаблонных строк.

function makeMessage (name, price) {
    const message = `Вы выбрали ${name}, цена за штуку ${price} кредитов` ;
    return message;
};

//Lesson 11
function calculateTotalPrice (orderedQuantity, pricePerItem) {
    const totalPrice = orderedQuantity * pricePerItem;
    // console.log(calculateTotalPrice(5,100));
    return totalPrice;
};

//Lesson 12

// Функция makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) составляет и возвращает сообщение о покупке ремонтных дроидов. Она объявляет три параметра, значения которых будут задаваться во время её вызова.

// orderedQuantity - количество дроидов в заказе
// pricePerDroid - цена одного дроида
// deliveryFee - стоимость доставки
// Дополни код функции так, чтобы она возвращала сообщение о заказе в формате Вы заказали дроидов на сумму <сумма заказа> кредитов. Доставка (<цена доставки> кредитов) включена в сумму заказа.. Не забудь о цене доставки при вычислениях общей стоимости.

function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
    
    const message = `Вы заказали дроидов на сумму ${(orderedQuantity * pricePerDroid) + deliveryFee} кредитов. Доставка (${deliveryFee} кредитов) включена в сумму заказа.`
    
    return message;
}

console.log(makeOrderMessage(2,100,50));
console.log(makeOrderMessage(4,300,100));
console.log(makeOrderMessage(10, 70, 200));

//Lesson 13

// Функция isAdult объявляет один параметр age (возраст), значение которого будет задаваться во время её вызова. Присвой переменной passed выражение проверки возраста пользователя на совершеннолетие. Человек считается совершеннолетним в возрасте 18 лет и старше.

function isAdult(age) {
    const passed = age >= 18;

    return passed;
}

//lesson 14
function isValidPassword(password) {
  const SAVED_PASSWORD = 'jqueryismyjam';
  // Write your code under this line
  const isMatch = password === SAVED_PASSWORD;
console.log(password);
  // Write your code above this line
  return isMatch;
}

//Lesson 15

// Добавь выражение проверки совершеннолетия пользователя, значения параметра age, в условие для инструкции if.

// Если пользователь совершеннолетний, должен выполняться блок if и в переменную message записывается строка 'You are adult'.
// В противном случае должен выполняться блок else и записывается строка 'You are minor'.

function checkAge(age) {
  let message;

  if (age>=18) { // Complete this line
    message = 'You are adult';
  } else {
    message = 'You are minor';
  }

  return message;
}

//Lesson 16
