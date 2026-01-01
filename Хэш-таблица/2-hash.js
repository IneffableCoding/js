/*
Дан массив arr = [1,1,2,2,2,5,5,5,2,7]
Нужно вернуть уникальный массив, отсортированный по частоте встречаемости
2 встречается чаще всего, потом 5 и тд
Результат: [2,5,1,7]

const arr = [1,1,2,2,2,5,5,5,2,7];
*/

const arr = [1, 1, 2, 2, 2, 5, 5, 5, 2, 7];

function sortByFrequency(arr) {
  const frequencyMap = new Map();
  // Map сохранит: элемент → количество_вхождений

  // Считаем частоту встречаемости каждого элемента
  for (const num of arr) {
    if (frequencyMap.has(num)) {
      frequencyMap.set(num, frequencyMap.get(num) + 1);
    } else {
      frequencyMap.set(num, 1);
    }
  }

  // Сортируем элементы по частоте встречаемости
  const sortedArray = Array.from(frequencyMap.keys()).sort((a, b) => {
    return frequencyMap.get(b) - frequencyMap.get(a);
  });
  // Array.from(frequencyMap.keys()) превращает все ключи из Map в обычный массив

  return sortedArray;
}

console.log(sortByFrequency(arr)); // [2, 5, 1, 7]

/*
  Альтернативный вариант (короче):
  for (const num of arr) {
  frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
}
*/

/*
  Как работает сортировка:

  frequencyMap.get(b) - частота второго элемента
  frequencyMap.get(a) - частота первого элемента
  Если результат > 0 → b идет перед a (частота b больше)
  Если < 0 → a идет перед b
  Если = 0 → порядок не меняется
*/

/*
  Ключевые моменты:
Map.get(key) → получает значение по ключу

Map.set(key, value) → устанавливает значение

Map.keys() → возвращает итератор ключей

Array.from() → превращает итератор в массив

sort((a,b) => freqB - freqA) → сортировка по убыванию частот
*/
