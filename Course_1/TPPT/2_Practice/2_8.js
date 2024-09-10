let number = Number.MIN_SAFE_INTEGER;

while (number % 2 !== 0) {
    number++;
}

console.log("Наименьшее значение типа number, с которого число становится четным:", number);


let bigIntNumber = BigInt(Number.MIN_SAFE_INTEGER);

while (bigIntNumber % 2n !== 0n) {
    bigIntNumber++;
}

console.log("Наименьшее значение типа BigInt, с которого число становится четным:", bigIntNumber);
