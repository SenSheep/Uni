function printString(str) {
    // Заменяем все буквы на заглавные
    str = str.toUpperCase();

    // Выводим вертикально
    console.log("Вертикально:");
    for (let i = 0; i < str.length; i++) {
        console.log(str[i]);
    }

    // Выводим горизонтально
    console.log("\nГоризонтально:");
    console.log(str);

    // Выводим диагонально
    console.log("\nДиагонально:");
    for (let i = 0; i < str.length; i++) {
        console.log(" ".repeat(i) + str[i]);
    }
}

// Пример использования функции
const inputString = "Hello, World!";
printString(inputString);
