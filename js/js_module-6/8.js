//Lesson 8  !!Задача. Общие элементы 2.0!!
// Замени объявление функции getCommonElements() и коллбек для метода forEach() на стрелочные функции.

// Пиши код ниже этой строки
const getCommonElements = (firstArray, secondArray) => {
    const commonElements = [];
  
    firstArray.forEach((element) => {
      if (secondArray.includes(element)) {
        commonElements.push(element);
      }
    });
  
    // Пиши код выше этой строки
    return commonElements;
  }