// !!!Задача. Общие элементы 2.0!!!
// Задание
// Замени объявление функции getCommonElements() и коллбек для метода forEach() на стрелочные функции.

// Change code below this line
function getCommonElements(firstArray, secondArray) {
  const commonElements = [];

  firstArray.forEach(function (element) {
    if (secondArray.includes(element)) {
      commonElements.push(element);
    }
  });

  // Change code above this line
  return commonElements;
}
