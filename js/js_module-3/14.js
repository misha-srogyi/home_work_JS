//lesson 14 !!Задача. Подсчёт свойств 2.0!!

// Выполни рефакторинг функции countProps(object) используя метод Object.keys() и, возможно, цикл for...of.

function countProps(object) {
  // Пиши код ниже этой строки
  let propCount = 0;

  const keys = Object.keys(object);
  propCount = keys.length;
  return propCount;
  // Пиши код выше этой строки
}

console.table(countProps({ name: 'Mango', age: 2 }));