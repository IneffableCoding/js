// Если задана строка s, найдите длину самой длинной подстроки без повторяющихся символов.

function findSubStr(str) {
  let result = "";
  // result - текущая подстрока с уникальными символами
  let maxLength = 0;
  // maxLength - максимальная длина найденной уникальной подстроки

  for (let char of str) {
    if (result.includes(char)) {
      // Удаляем все символы до первого вхождения повторяющегося символа
      result = result.slice(result.indexOf(char) + 1);
    }
    result += char;
    maxLength = Math.max(maxLength, result.length);
    // Math.max() — встроенная функция, к-я возвращает наибольшее (максимальное) число из переданных ей аргументов
  }

  return maxLength;
}

// Пример использования:
console.log(findSubStr("abcabcbb")); // Вывод: 3 (подстрока "abc")
console.log(findSubStr("bbbbb")); // Вывод: 1 (подстрока "b")
console.log(findSubStr("pwwkew")); // Вывод: 3 (подстрока "wke")

/*
Sliding Window

Переменная result — это и есть "окно", которое:

Скользит вдоль строки
Расширяется вправо (когда добавляем новый символ)
Сжимается слева (когда встречаем повтор)
*/
