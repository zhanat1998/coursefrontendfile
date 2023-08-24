// Преобразование массива строк в массив их длин (использовать map):
const words = ["apple", "banana", "cherry"];
const arr1 = words.map((num) => num.length);
console.log(arr1);
// Фильтрация массива чисел, оставляющая только четные числа (использовать filter):
const numbers = [1, 2, 3, 4, 5];
const arr2 = numbers.filter((num) => {
    if (num % 2 === 0) {
        return num;
    }
})
console.log(arr2);

// Фильтрация массива строк, оставляющая только слова с буквой "a" (использовать filter и includes):
const words1 = ["apple", "banana", "cherry"];
const arr3 = words1.filter((num => {
    if (num.includes("a")) {
        return num;
    }
}))
console.log(arr3);

// Поиск первого числа в массиве, которое больше 10 (использовать find):
const numb = [8, 12, 5, 20, 3];
const arr4 = numb.find(num => {
    return num > 10;
})
console.log(arr4);

// Добавление элемента в конец массива (использовать push):
const fruits = ["apple", "banana"];
fruits.push('last');
console.log(fruits);

// Удаление последнего элемента из массива (использовать pop):
const fruits1 = ["apple", "banana", "cherry"];
fruits1.pop();
console.log(fruits1);

// Добавление элемента в начало массива (использовать unshift):
const fruits2 = ["apple", "banana"];
fruits2.unshift('first');
console.log(fruits2);

// Удаление первого элемента из массива (использовать shift):
const fruits3 = ["apple", "banana", "cherry"];
fruits3.shift();
console.log(fruits3);

// Сортировка массива чисел в порядке возрастания (использовать sort):
const numbers3 = [3, 1, 4, 1, 5, 9, 2];
let sort1 = numbers3.sort((a, b) => a - b);
console.log(sort1);

// Сортировка массива строк в алфавитном порядке (использовать sort):
const words3 = ["banana", "cherry", "apple"];
words3.sort();

console.log(words3);

// Разворот массива чисел (использовать reverse):
const numbers4 = [1, 2, 3, 4, 5];
numbers4.reverse()
console.log(numbers4);

// Проверка наличия определенного элемента в массиве (использовать includes):
const frui = ["apple", "banana", "cherry"];
let resul = frui.includes("apple");
console.log(resul)
let res = frui.includes("oranges");
console.log(res)

