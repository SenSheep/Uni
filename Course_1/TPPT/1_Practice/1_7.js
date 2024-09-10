// Создание числовых переменных
let num1 = 10;
let num2 = 5;

// Сложение
let result = num1 + num2;
console.log("num1 + num2 =", result, ", Type:", typeof result); // 15, "number"

// Вычитание
result = num1 - num2;
console.log("num1 - num2 =", result, ", Type:", typeof result); // 5, "number"

// Умножение
result = num1 * num2;
console.log("num1 * num2 =", result, ", Type:", typeof result); // 50, "number"

// Деление
result = num1 / num2;
console.log("num1 / num2 =", result, ", Type:", typeof result); // 2, "number"

// Остаток от деления
result = num1 % num2;
console.log("num1 % num2 =", result, ", Type:", typeof result); // 0, "number"

// СТРОКОВЫЕ
// Создание строковых переменных
let str1 = "10";
let str2 = "5";

// Сложение (конкатенация строк)
let resultStr = str1 + str2;
console.log("str1 + str2 =", resultStr, ", Type:", typeof resultStr); // "105", "string"

// Преобразование строк в числа для других операций
let numStr1 = Number(str1);
let numStr2 = Number(str2);

// Вычитание
resultStr = numStr1 - numStr2;
console.log("Number(str1) - Number(str2) =", resultStr, ", Type:", typeof resultStr); // 5, "number"

// Умножение
resultStr = numStr1 * numStr2;
console.log("Number(str1) * Number(str2) =", resultStr, ", Type:", typeof resultStr); // 50, "number"

// Деление
resultStr = numStr1 / numStr2;
console.log("Number(str1) / Number(str2) =", resultStr, ", Type:", typeof resultStr); // 2, "number"

// Остаток от деления
resultStr = numStr1 % numStr2;
console.log("Number(str1) % Number(str2) =", resultStr, ", Type:", typeof resultStr); // 0, "number"
