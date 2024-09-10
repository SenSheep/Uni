// 1. Создание переменной и присвоение ей значения
let myVariable = 1;

// Выводим текущее значение и тип переменной
console.log("Initial value:", myVariable); // 1
console.log("Type of initial value:", typeof myVariable); // "number"

// 2. Присвоение переменной значения, соответствующего ее типу
if (typeof myVariable === 'number') {
  myVariable = 0; // Для типа number присваиваем 0
} else if (typeof myVariable === 'string') {
  myVariable = ''; // Для типа string присваиваем пустую строку
} else if (typeof myVariable === 'boolean') {
  myVariable = false; // Для типа boolean присваиваем false
} else if (typeof myVariable === 'object') {
  if (Array.isArray(myVariable)) {
    myVariable = []; // Для типа array присваиваем пустой массив
  } else if (myVariable === null) {
    myVariable = null; // Для значения null оставляем null
  } else {
    myVariable = {}; // Для типа object присваиваем пустой объект
  }
} else if (typeof myVariable === 'undefined') {
  myVariable = undefined; // Для типа undefined оставляем undefined
} else {
  // Дополнительный случай для других типов
  myVariable = null; // Для других типов присваиваем null
}

// 3. Вывод нового значения переменной
console.log("New value:", myVariable);
console.log("Type of new value:", typeof myVariable);