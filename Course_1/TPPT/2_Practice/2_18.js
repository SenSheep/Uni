function replaceProperties(originalObject, newProperties) {
    // Создаем новый объект для результата
    const resultObject = {};

    // Копируем свойства из новых свойств, которые есть в новом объекте
    for (let key in newProperties) {
        if (newProperties.hasOwnProperty(key)) {
            resultObject[key] = newProperties[key];
        }
    }

    // Удаляем свойства из результативного объекта, которые отсутствуют в новых свойствах
    for (let key in resultObject) {
        if (!newProperties.hasOwnProperty(key)) {
            delete resultObject[key];
        }
    }

    // Копируем значения существующих свойств из оригинального объекта
    for (let key in resultObject) {
        if (originalObject.hasOwnProperty(key)) {
            resultObject[key] = originalObject[key];
        }
    }

    return resultObject;
}

// Пример использования функции
const originalObject = { a: 1, b: 2, c: 3 };
const newProperties = { b: 20, d: 40 };

const replacedObject = replaceProperties(originalObject, newProperties);

console.log("Исходный объект:", originalObject);
console.log("Новые свойства:", newProperties);
console.log("Результат замены свойств:", replacedObject);
