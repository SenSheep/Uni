// Создаем объект
const obj = {
    prop1: 1,
    prop2: 2
};

// Замораживаем объект
Object.freeze(obj);

// Попытка изменить существующее свойство
obj.prop1 = 100; // Изменения не применятся, так как объект заморожен
console.log("Попытка изменить существующее свойство после заморозки:", obj);

// Попытка добавить новое свойство
obj.prop3 = 3; // Новое свойство не будет добавлено, так как объект заморожен
console.log("Попытка добавить новое свойство после заморозки:", obj);

// Снова создаем объект
const obj2 = {
    prop1: 1,
    prop2: 2
};

// Запечатываем объект
Object.seal(obj2);

// Попытка изменить существующее свойство
obj2.prop1 = 100; // Изменения будут применены, так как объект запечатан
console.log("Попытка изменить существующее свойство после запечатывания:", obj2);

// Попытка добавить новое свойство
obj2.prop3 = 3; // Новое свойство не будет добавлено, но изменения существующего пройдут
console.log("Попытка добавить новое свойство после запечатывания:", obj2);