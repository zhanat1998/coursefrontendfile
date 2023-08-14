for (let i = 1; i <= 100; i++) {
    console.log(i);
}
for (let i = 11; i <= 33; i++) {
    console.log(i);
}
for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum = sum + i;
}
console.log(sum);
let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
let arr1 = [1, 2, 3, 4, 5];
let result = 0;
for (let i = 0; i < arr1.length; i++) {
    result = result + arr1[i];
}
console.log(result);

const obj = { green: 'зеленый', red: 'красный', blue: 'голубой' }
for (const key in obj) {
    console.log(`${key}:  '${obj[key]}'`);
}
let obj34 = {
    kolya: 200,
    tolya: 300,
    petya: 500,

}
for (const key1 in obj34) {
    console.log(`${key1}-zarplata ${obj34[key1]} dollar `);
}
// Дан массив с элементами 2, 5, 9, 15, 0, 4. С помощью цикла for и оператора if выведите на экран столбец тех элементов массива, которые больше 3-х, но меньше 10. 
let array1 = [2, 5, 9, 15, 0, 4];
for (let i = 0; i < array1.length; i++) {
    if (array1[i] < 10 && array1[i] > 3) {
        console.log(array1[i])
    }
}
let sum1 = 0;
let array2 = [12, 13, 4, 5, -1, -2, -4, -8];
for (let i = 0; i < array2.length; i++) {
    if (array2[i] > 0) {
        sum1 = sum1 + array2[i];
    }
}
console.log(sum1);

// Дан массив с элементами 1, 2, 5, 9, 4, 13, 4, 10. С помощью цикла for и оператора if проверьте есть ли в массиве элемент со значением, равным 4. Если есть - выведите на экран 'Есть!' и выйдите из цикла. Если нет - ничего делать не надо. 
let array3 = [1, 2, 5, 9, 4, 13, 4, 10];
for (let i = 0; i < array3.length; i++) {
    if (array3[i] === 4) {
        console.log('Est!!!')
    }

}
// // Дан массив числами, например: [10, 20, 30, 50, 235, 3000]. Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.
let array4 = [10, 20, 30, 50, 235, 3000];
console.log(array4);
for (let i = 0; i < array4.length; i++) {
    let l = String(array4[i]);
    let char = l[0];
    if (char == 1 || char == 2 || char == 5) {
        console.log(l);
    }
}
// Дан массив с элементами 1, 2, 3, 4, 5, 6, 7, 8, 9. С помощью цикла for создайте строку '-1-2-3-4-5-6-7-8-9-'. 
let massive = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(massive);
for (let i = 0; i < massive.length; i++) {
    let arc = '-' + massive[i];
    console.log(arc);
}
// Составьте массив дней недели. С помощью цикла for выведите все дни недели, а выходные дни выведите жирным.
let massive1 = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
console.log(massive1);
for (let i = 0; i < massive1.length; i++) {
    if (massive1[i] === 'saturday' && massive1[i] === 'sunday') {
        console.log(String.bold())
    }
    else {
        console.log(massive1[i]);
    }
}
// Составьте массив дней недели. С помощью цикла for выведите все дни недели, а текущий день выведите курсивом. Текущий день должен храниться в переменной day. 
let massive2 = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
console.log(massive2);
for (let i = 0; i < massive2.length; i++) {
    console.log(massive2[i] + ' itelic')
}
// Дано число **n=1000**. Делите его на **2** столько раз, пока результат деления не станет меньше **50**. Какое число получится? Посчитайте количество итераций, необходимых для этого (*итерация*- это проход цикла), и запишите его в переменную **num.**
let n = 1000;
for (let i = 2; i < 100; i = i * 2) {
    let num = n / i;
    if (num < 50) {
        break
    }
    else {
        console.log(num);
    }
}