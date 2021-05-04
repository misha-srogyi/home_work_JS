//Lesson 16 !!Задача. Расходы на зарплату!!

// Напиши функцию countTotalSalary(salaries) которая принимает объект зарплат, где имя свойства это имя сотрудника, а значение свойства это зарплата. Функция должна рассчитать общую сумму зарплат сотрудников и вернуть её. Используй переменную totalSalary для хранения общей суммы зарплаты.

function countTotalSalary(salaries) {
  let totalSalary = 0;
  // Пиши код ниже этой строки
  for (const salary of Object.values(salaries)) {
    totalSalary += salary
  }
  // Пиши код выше этой строки
  return totalSalary;
}

console.table(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));
