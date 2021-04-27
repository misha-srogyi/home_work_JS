// Lesson 29!!!Чётные числа!!!

// Напиши функцию getEvenNumbers(start, end) которая возвращает массив всех чётных чисел от start до end. Чётным считается число которое делится на 2 без остатка.
function getEvenNumbers(start, end) {
    // Пиши код ниже этой строки
    let evenNumbers = [];
    for (let i = start; i <= end; i += 1){
        console.log(i);
        if (i % 2 === 0) {
            evenNumbers.push(i);
      }
    }

    return evenNumbers;
    // Пиши код выше этой строки
  }
console.log(getEvenNumbers(3, 11));