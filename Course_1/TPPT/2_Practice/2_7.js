let count = 0;
let number = 257;

while (number < Number.MAX_SAFE_INTEGER) {
    const nextNumber = number + 1;
    if (nextNumber === number + 1) {
        count++;
    } else {
        break; // Превышено представление числа
    }
    number = nextNumber;
}

console.log("Чисел типа number больше 256, которые могут быть точно представлены:", count);
