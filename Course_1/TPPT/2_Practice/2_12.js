function replaceLetterWithAlphabetPosition(str, letter) {
    // Преобразуем строку в нижний регистр для удобства
    str = str.toLowerCase();
    
    // Находим номер выбранной буквы в алфавите
    const alphabetPosition = letter.charCodeAt(0) - 'a'.charCodeAt(0) + 1;

    // Заменяем все вхождения выбранной буквы на ее номер в алфавите
    const replacedString = str.replace(new RegExp(letter, 'g'), alphabetPosition);

    return replacedString;
}

// Пример использования программы
const inputString = "This is a sample string";
const selectedLetter = 's';
const replacedString = replaceLetterWithAlphabetPosition(inputString, selectedLetter);

console.log("Исходная строка:", inputString);
console.log("Выбранная буква:", selectedLetter);
console.log("Строка с замененными буквами:", replacedString);
