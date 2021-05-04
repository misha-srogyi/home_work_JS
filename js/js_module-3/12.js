//Lesson 12  !!Задача. Подсчёт свойств!!

// Напиши функцию countProps(object), которая считает и возвращает количество собственных свойств объекта в параметре object. Используй переменную propCount для хранения количества свойств объекта.

function countProps(object) {
  let propCount = 0;
  // Пиши код ниже этой строки
for (const key in object) {
    if (object.hasOwnProperty(key)) {
        propCount ++ //propCout +=1 Лічильник
        console.table('Properties: ', key);
        }
    };
  // Пиши код выше этой строки
  return propCount;
}
console.table(countProps({ name: 'Mango', age: 2 }));//2
console.table(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }));//3