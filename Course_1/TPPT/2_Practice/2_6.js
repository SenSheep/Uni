// Максимальное значение для 32-битного целого числа без знака
const maxUnsigned32BitInt = Math.pow(2, 32) - 1;

// Побитовая операция для получения 32 младших бит числа
const number = Math.pow(2, 33) + 123; // Пример числа с более чем 32 битами
const lower32Bits = number & maxUnsigned32BitInt;

console.log("32 младших бита числа:", lower32Bits);
