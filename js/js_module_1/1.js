// const start = 3;
// const end = 7;

// for (let i = start ; i <= end ; i +=1 ) { // Change this line
//   console.log(i);
// }
// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i =0 ; i<fruits.length; i+=1) { // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
  
// for(let i=0; i<order.length; i+=1){
// total +=order[i];
// }
//   // Change code above this line
//   return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));

// function findLongestWord(string) {
//     // Пиши код ниже этой строки
//     let longestWord = '';
//     const words = string.split(' ');
//     console.log(words);

//     for (const el of words) {
//         console.log('el: ', el);
//         console.log('longestWord: ', longestWord);
//         if (el.length > longestWord.length) {
//             longestWord = el;
//         }
//     }
//         return longestWord;

//         // Пиши код выше этой строки
//     }

// console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));

// function filterArray(numbers, value) {
//    // Change code below this line
//   let newNumber=[];
//     for (const number of numbers) {
//         if (number > value)
//         { newNumber.push(number); }
// }
// return newNumber;

//   // Change code above this line
// }
// console.log(filterArray(([1, 2, 3, 4, 5], 3)));

// function includes(array, value) {
//   // Change code below this line
// for(const el of array){
// if(el===value){
// return el;
// }
// }
//   // Change code above this line
// }
// console.log(includes([1, 2, 3, 4, 5], 3));
 


// const max = 10;
//  for (let i = 0; i < max; i += 1) {
//    console.log(`${max} % ${i} = `, max % i);
//  }

// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// let total = 0;

// for (let i = 0; i < matrix.length; i += 1) {
//   console.log('Підмасив матриці matrix[i]: ', matrix[i]);

//   for (let j = 0; j < matrix[i].length; j += 1) {
//     console.log('Елемент підмасив матриці matrix[i][j]: ', matrix[i][j]);
//     total += matrix[i][j];
//   }
// }

// console.log(total); // 45

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
//  let value = [];
//   for (const product of products) {
//     if (product[propName]) {
//       console.log(product[propName]);
//       value.push(product[propName]);
//       }
//     }
  
//   return value;
  
//   // Change code above this line
// }
// console.log(getAllPropValues('name'));
// console.log(getAllPropValues('price'));
// console.log(getAllPropValues('quantity'));
// console.log(getAllPropValues('category'));

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Пиши код ниже этой строки
//   let totalPrice;
//   for (const product of products) {
//     if (product.name === productName) {
//       return totalPrice.push(product.price * product.quantity);
//     }
   

//     // Пиши код выше этой строки
//   }
// }
// console.log(calculateTotalPrice("Radar"));

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// const{yesterday:highYesterday,
//      tomorrow:highTomorrow,
//      today:highToday,
//      icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"}=highTemperatures;

// // Change code above this line
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

// Change code below this line
// function findMatches(...args,args) {
//   const matches = []; // Don't change this line
// for(arg of args){
// if(arg[i].includes(...arg))
//   matches.splice(0,0,args);
// }
//   // Change code above this line
//   return matches;
// }
// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));//[1,2]


// 41
// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//       for (const potion of this.potions) {
//           if (newPotion.name === potion.name) {
//               return `Error! Potion ${newPotion} is already in your inventory!`;
//           }
//     }

//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     const potionIndex = this.potions.indexOf(potionName);

//     if (potionIndex === -1) {
//       return `Potion ${potionName} is not in inventory!`;
//     }

//     this.potions.splice(potionIndex, 1);
//   },
//   updatePotionName(oldName, newName) {
//     const potionIndex = this.potions.indexOf(oldName);

//     if (potionIndex === -1) {
//       return `Potion ${oldName} is not in inventory!`;
//     }

//     this.potions.splice(potionIndex, 1, newName);
//   },
//   // Change code above this line
// };


// console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));
// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//    addPotion(newPotion) {
//         for (const potion of this.potions) {
//             if (newPotion.name === potion.name) {
//               return `Error! Potion ${newPotion.name} is already in your inventory!`;
//           }
//         }
//          this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     for (let i = 0; i < this.potions.length; i += 1) {
    
//       const potionIndex = this.potions[i];
        
//       if (potionIndex.name === potionName) {
//         this.potions.splice(i, 1);
//         return this.potions;
//       }
      
//       }
//       return `Potion ${potionName} is not in inventory!`;
//     },
//   updatePotionName(oldName, newName) {

//       for (const potion of this.potions) {
//           if (potion.name === oldName) {
//               potion.name = newName;
              
//        }
//    }
//     return `Potion ${oldName} is not in inventory!`;
//   },
//   // Change code above this line
// };

// console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.addPotion({ name: 'Невидимка', price: 620 }));
console.log("4" + "8" - "6");
console.log(4 + 8 - 6);