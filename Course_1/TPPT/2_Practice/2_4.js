// Функция для преобразования строки в число и деления на ноль
function divideByZero(str) {
    const number = parseFloat(str); // Пытаемся преобразовать строку в число
    if (isNaN(number)) {
        throw new Error(`"${str}" is not a valid number`);
    }
    return 1 / number; // Пытаемся выполнить деление на полученное число
}

// Вызываем функцию с несколькими строками
try {
    console.log(divideByZero("10"));      // Валидное число, не вызовет ошибки
    console.log(divideByZero("0"));       // Вызовет ошибку деления на ноль
    console.log(divideByZero("not a number")); // Вызовет ошибку невалидного числа
} catch (error) {
    console.error("Error:", error.message);
}
