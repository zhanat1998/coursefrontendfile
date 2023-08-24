// Преобразование массива чисел в строку, объединяя элементы через запятую (использовать join):
const numbers = [1, 2, 3, 4, 5];
const num1 = numbers.join(',');
console.log(num1);

// Преобразование массива строк, удаляя 2 элемента начиная с индекса 2 (использовать splice):
const fruits = ["apple", "banana", "cherry", "date", "fig"];
console.log(fruits);
const num2 = fruits.splice(2, 2);
console.log(fruits);
console.log(num2);

// Конкатенация двух массивов (использовать concat):
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const num3 = array1.concat(array2);
console.log(array1);
console.log(array2);
console.log(num3);

// Преобразование массива строк в массив их длин (использовать map):
const words = ["apple", "banana", "cherry"];
const num4 = words.map((num) => num.length);
console.log(words);
console.log(num4);

// Преобразование входной строки в нижний регистр (использовать toLowerCase):
const inputString = "Hello World";
const num5 = inputString.toLowerCase();
console.log(inputString);
console.log(num5);

// Преобразование входной строки в верхний регистр (использовать toUpperCase):
const inputString1 = "Hello World";
const num6 = inputString1.toUpperCase();
console.log(num6);

// Поиск индекса элемента в массиве (использовать indexOf):
const fruits1 = ["apple", "banana", "cherry"];
const num7 = fruits1.indexOf('apple');
console.log(num7);
console.log(fruits1.indexOf('banana'));

// Применение функции к каждому элементу массива (использовать forEach):
const numbe = [1, 2, 3, 4, 5];
console.log(numbe);
const num8 = numbe.forEach((num) => console.log(num));
console.log(num8);

// Объединение двух строк с удалением начальных и конечных пробелов (использовать trim):
const stringWithWhitespace = " Hello, World! ";
const num9 = stringWithWhitespace.trim();
console.log(num9);

// Проверка наличия определенного элемента в массиве (использовать includes):
const fruits3 = ["apple", "banana", "cherry"];
const num10 = fruits3.includes('apple');
console.log(num10);


// Разделение строки на массив подстрок по определенному разделителю (использовать split):
const sentence = "Hello, how are you?";
const num11 = sentence.split(' ');
console.log(num11);


// Преобразование вложенных массивов в одномерный массив (использовать flat):
const nestedArray = [1, [2, 3], [4, [5, 6]]];
const num12 = nestedArray.flat(Infinity);
console.log(num12);

// Конкатенация нескольких строк в одну (использовать concat):
const string1 = "Hello"; const string2 = "World";
const num13 = string1.concat(string2);
console.log(num13);

// Подсчет количества элементов в массиве (использовать length):
const numbers4 = [1, 2, 3, 4, 5];
console.log(numbers4.length);


// Преобразование строки с разделителями в массив подстрок (использовать split):
const csvData = "John,Doe,30,Engineer";
const arr = csvData.split(',');
console.log(arr);

// Задача: Дан массив объектов со студентами и их предметами. Необходимо выполнить следующие шаги:
// 1 - Извлечь имена студентов.
// 2 - Преобразовать имена в нижний регистр.
// 3 - Отфильтровать студентов, изучающих математику.
// 4 - Соединить имена отфильтрованных студентов в одну строку через запятую.
const students = [{ name: "Alice", subject: "Math" }, { name: "Bob", subject: "Physics" }, { name: "Charlie", subject: "Math" }, { name: "David", subject: "Chemistry" },];
// 1 - Извлечь имена студентов.
const name1 = students.map((num) => {
    return num.name;
})
console.log(name1);
// 2 - Преобразовать имена в нижний регистр.
const name2 = students.map((num) => {
    return num.name.toLowerCase();
})
console.log(name2);
// 3 - Отфильтровать студентов, изучающих математику.
const name3 = students.map((num) => {
    if (num.subject === 'Math') {
        return num.name;
    }
})
console.log(name3);

// 4 - Соединить имена отфильтрованных студентов в одну строку через запятую.
const numb1 = name3.join(',');
console.log(numb1);
