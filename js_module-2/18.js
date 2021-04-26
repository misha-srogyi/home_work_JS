// Lesson 18!!!Сумма чисел(цикл for)!!!


// Напиши функцию calculateTotal(number), которая принимает целое число (параметр number) и возвращает сумму всех целых чисел от единицы и до этого числа. Например, если number равно 3, то сумма это 1 + 2 + 3, то есть 6.

function calculateTotal(number) {
  // Пиши код ниже этой строки

let sumNumber = 0;
    for (i=0; i<=number; i+=1) {
      sumNumber +=i;}
return sumNumber;

  // Пиши код выше этой строки
}



console.log(calculateTotal(3));
console.log(calculateTotal(7)); 
console.log(calculateTotal(18));
console.log(calculateTotal(24));