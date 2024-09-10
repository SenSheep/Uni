function addNumbers(num1, num2) {
    // Устанавливаем длину результата равной максимальной длине входных чисел
    const maxLength = Math.max(num1.length, num2.length);
    const result = new Array(maxLength).fill(0);

    // Выполняем сложение по цифрам, начиная с младших разрядов
    for (let i = 0; i < maxLength; i++) {
        const digit1 = num1[num1.length - 1 - i] || 0; // Если число num1 короче, заполняем нулями
        const digit2 = num2[num2.length - 1 - i] || 0; // Если число num2 короче, заполняем нулями
        const sum = digit1 + digit2 + result[maxLength - 1 - i]; // Складываем цифры и предыдущий перенос
        result[maxLength - 1 - i] = sum % 10; // Записываем младший разряд суммы в результат
        if (sum >= 10) {
            result[maxLength - 2 - i] += Math.floor(sum / 10); // Переносим десятки на следующий разряд
        }
    }

    // Удаляем ведущие нули, если они есть
    while (result.length > 1 && result[0] === 0) {
        result.shift();
    }

    return result;
}

// Пример использования функции
const num1 = [9, 9, 9]; // 999
const num2 = [1, 1, 1]; // 111
const sum = addNumbers(num1, num2); // Результат должен быть 1110
console.log("Сумма чисел:", sum.join('')); // Преобразуем массив обратно в строку для вывода
