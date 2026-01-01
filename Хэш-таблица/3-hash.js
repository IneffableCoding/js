/*
    Необходимо реализовать функцию scramble(str1, str2), 
    которая возвращает true, 
    если часть символов строки str1 может быть переставлена 
    для соответствия строке str2. 
    В противном случае функция должна возвращать false.
*/

function scramble(str1, str2) {
    // Создаем объект для подсчета количества каждого символа в str1
    const charCount = {};

    // Заполняем объект charCount символами из str1
    for (const char of str1) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Проверяем, достаточно ли символов в str1 для составления str2
    for (const char of str2) {
        if (!charCount[char]) {
            return false;
        }
        charCount[char]--;
    }

    return true;
}

// Примеры использования:
console.log(scramble('scriptingjava', 'javascript')); // true
console.log(scramble('abc', 'a')); // true
console.log(scramble('abc', 'd')); // false

// charCount[char] - это обращение к значению по ключу в объекте 