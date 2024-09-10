function copyObject(obj) {
    // Метод 1: Преобразование в JSON и обратно
    const copyByJSON = JSON.parse(JSON.stringify(obj));

    // Метод 2: Создание нового объекта и поэлементное копирование
    const copyByAssignment = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            copyByAssignment[key] = obj[key];
        }
    }

    return {
        copyByJSON,
        copyByAssignment
    };
}

// Пример использования функции
const originalObject = { a: 1, b: { c: 2 } };
const copiedObjects = copyObject(originalObject);

console.log("Копия объекта через JSON:", copiedObjects.copyByJSON);
console.log("Копия объекта через поэлементное копирование:", copiedObjects.copyByAssignment);
