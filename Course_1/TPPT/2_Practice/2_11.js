function splitString(inputString) {
    // Разбиваем входную строку на слова
    const words = inputString.split(" ");

    let segments = [];
    let currentSegment = "";

    // Проходим по каждому слову
    for (const word of words) {
        // Если добавление следующего слова превысит 100 символов, закрываем текущий сегмент
        if (currentSegment.length + word.length + 1 > 100) {
            segments.push(currentSegment.trim()); // Добавляем текущий сегмент в результат
            currentSegment = ""; // Обнуляем текущий сегмент
        }
        currentSegment += (currentSegment ? " " : "") + word; // Добавляем слово к текущему сегменту
    }

    // Добавляем последний сегмент
    segments.push(currentSegment.trim());

    return segments;
}

// Пример использования программы
const inputString = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
const segments = splitString(inputString);

// Выводим каждый сегмент
segments.forEach(segment => console.log(segment));
