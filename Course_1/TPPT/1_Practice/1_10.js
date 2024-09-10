// Функция для определения четности числа
function isEven(number) {
    return (number & 1) === 0;
}

// Примеры чисел для проверки
const numbers = [10, 55, 256, 1514];

// Проверка четности и вывод результата
numbers.forEach(number => {
    const even = isEven(number);
    console.log(`Number ${number} is ${even ? 'even' : 'odd'}.`);
});
