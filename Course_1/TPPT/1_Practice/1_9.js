// Функция для вычисления значения формулы x^2 + x + 2
function calculateFormula(x) {
    return x * x + x + 2;
}

// Массив значений x
const values = [10, 55, 256, 1514];

// Вычисление и вывод значений формулы для каждого x
values.forEach(x => {
    const result = calculateFormula(x);
    console.log(`x = ${x}, x^2 + x + 2 = ${result}`);
});
