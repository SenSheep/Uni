function compareNumbers(num1, num2, epsilon = Number.EPSILON) {
    // Вычисляем разницу между числами
    const difference = Math.abs(num1 - num2);

    // Проверяем, что разница меньше или равна порогу ошибки (эпсилон)
    return difference <= epsilon;
}

// Пример использования функции
console.log(compareNumbers(0.1 + 0.2, 0.3)); // true, т.к. 0.1 + 0.2 === 0.3 с плавающей арифметикой
console.log(compareNumbers(0.1 + 0.2, 0.3, 0.0001)); // true, с меньшим эпсилоном
console.log(compareNumbers(0.1 + 0.2, 0.3, 0.000001)); // false, слишком маленький эпсилон, разница больше
