function customLog() {
    // Преобразуем объект arguments в настоящий массив
    const args = Array.from(arguments);

    // Обходим каждый аргумент и выводим его в консоль
    args.forEach(arg => {
        console.log(arg);
    });
}

// Пример использования функции
customLog("Hello", "World", 42, [1, 2, 3]);
