// Исходное число
let number = 5;

// Произвольная степень двойки
let power = 3; // 2^3 = 8

// Умножение числа на 2^power с помощью побитового сдвига
let result = number << power;

// Вывод результата
console.log(`${number} * 2^${power} = ${result}`);
console.log("Type of result:", typeof result); // "number"
