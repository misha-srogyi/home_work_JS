// Lesson 36

// Функция checkForSpam(message) принимает строку (параметр message), проверяет её на содержание запрещенных слов spam и sale, и возвращает результат проверки. Слова в строке параметра message могут быть в произвольном регистре, например SPAM или sAlE.

// Если нашли запрещенное слово (spam или sale) то функция возвращает буль true.
// Если в строке нет запрещенных слов, функция возвращает буль false.

function checkForSpam(message) {
  let result;
  // Write your code under this line
 const normalizeString = message.toLowerCase();
 result = normalizeString.includes('spam')|| normalizeString.includes('sale') ;

  // Write your code above this line
  return result;
}
console.log(checkForSpam('Latest technology news'));
console.log(checkForSpam('Get best sale offers now!'));
console.log(checkForSpam('Amazing SalE, only tonight!'));
console.log(checkForSpam('Get rid of sPaM emails. Our book in on sale!'));