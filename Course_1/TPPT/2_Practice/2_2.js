// Проверяем, передан ли аргумент с названием переменной среды
if (process.argv.length <= 2) {
    console.error('Usage: node getenv.js <environment_variable>');
    process.exit(1);
}

// Получаем название переменной среды из аргументов командной строки
const envVarName = process.argv[2];

// Получаем значение переменной среды по ее названию
const envVarValue = process.env[envVarName];

// Проверяем, существует ли переменная среды с указанным названием
if (envVarValue === undefined) {
    console.error(`Environment variable ${envVarName} is not defined.`);
    process.exit(1);
}

// Выводим значение переменной среды
console.log(`${envVarName} = ${envVarValue}`);
