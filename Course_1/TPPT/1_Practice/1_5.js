// 1. Создание двух постоянных строкового типа

// Прямая константа строкового типа
const directString = "Hello, World!";

// Константа в качестве элемента массива
const arrayWithString = ["Hello, Array!"];

// 2. Попытка изменения значений этих констант

// Попытка изменить прямую константу
try {
  directString = "New Value"; // Это вызовет ошибку
} catch (error) {
  console.log("Error changing directString:", error.message);
}

// Попытка изменить значение элемента массива
try {
  arrayWithString[0] = "New Array Value"; // Это допустимо
  console.log("Changed arrayWithString[0]:", arrayWithString[0]);
} catch (error) {
  console.log("Error changing arrayWithString[0]:", error.message);
}

// Попытка присвоить новое значение константе массива
try {
  arrayWithString = ["New Array"]; // Это вызовет ошибку
} catch (error) {
  console.log("Error changing arrayWithString:", error.message);
}
