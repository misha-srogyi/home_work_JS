// Lesson 41  !!Задача. Расширяем инвентарь!!

// Заказчица хочет чтобы каждое зелье было представлено не только именем, но и ценой, а в будущем может быть и другими характеристиками. Поэтому теперь в свойстве potions будет храниться массив объектов со следующими свойствами.

// Выполни рефакторинг методов объекта atTheOldToad так, чтобы они работали не с массивом строк, а с массивом объектов.

// getPotions() - метод для получения всех зелий. Возвращает значение свойства potions.
// addPotion(newPotion) - добавляет зелье newPotion (уже объект) в массив в свойстве potions.
// removePotion(potionName) - удаляет объект зелья с именем potionName из массива в свойстве potions.
// updatePotionName(oldName, newName) - обновляет свойство name объекта-зелья с названием oldName на newName в массиве potions.

const atTheOldToad = {
  potions: [
    { name: 'Зелье скорости', price: 460 },
    { name: 'Дыхание дракона', price: 780 },
    { name: 'Каменная кожа', price: 520 },
  ],
  // Пиши код ниже этой строки
  getPotions() {
    return this.potions;
  },
   addPotion(newPotion) {
    for (const potion of this.potions) {
      if (newPotion.name === potion.name) {
        return `Error! Potion ${newPotion.name} is already in your inventory!`;
      }
    }
      this.potions.push(newPotion);
  },
  removePotion(potionName) {
    for (let i = 0; i < this.potions.length; i += 1) {
    
      const potionIndex = this.potions[i];

      if (potionIndex.name === potionName) {
        this.potions.splice(i, 1);
        return this.potions;
      }
      
    }
    return `Potion ${potionName} is not in inventory!`;
  },
  updatePotionName(oldName, newName) {

    for (let potion of this.potions) {

      if (potion.name === oldName) {
        potion.name = newName;
      }
    }
    return `Potion ${oldName} is not in inventory!`;
  },
  // Пиши код выше этой строки
};
console.log(atTheOldToad.getPotions());
console.log(atTheOldToad.addPotion({ name: 'Невидимка', price: 620 }));
