// console.log('hello world');
// alert('uvedomleniye');


// confirm('prinyate usloviye');
// prompt('your name');

var message = 'prinyate usloviye';

// confirm(message);
// let name = 'eldar';
// const age = 34;
// console.log(name, age);
// name = 'zhanat';
// console.log(name);
// prompt('your name');

// let isActive = confirm('avtorizovatsa?');
// console.log(osActive);
let string = 'jehbigukjfhew';
let number = 2454;
let boolean = true;
let und = undefined;
let pppppp;
console.log(pppppp);
let n = null;

let obj = {
    name: 'hrjgerukd',
    age: 22,
    child: {},



};
let array = [1, 'str', {}, obj, true];


// let sum = 2 + 2;
// console.log(sum);
// let difference = 5 - 3;
// console.log(difference);
// let product = 4 * 3;
// console.log(product);
// let quotient = 10 / 2;

// let reminder = 15 % 3;
// let increment = 7;
// console.log(increment);

// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.
// 34,14   34 - x = (14 - x)*2
// function fatherSon(f, s) {
//     let x;
//     x = (f - 2 * s) / -1
//     if (f > 2 * s) {
//         console.log(`after ${x} year`)
//     }
//     else {
//         console.log(`${x} years ago`)
//     }
// }
// console.log(fatherSon(34, 20));
// console.log(fatherSon(34, 12));

// ('+', 4, 7) --> 11
// function oper(opera, num1, num2) {
//     if (opera === '+') {
//         console.log(num1 + num2);
//     }
//     else if (opera === '-') {
//         console.log(num1 - num2);
//     }
//     else if (opera === '*') {
//         console.log(num1 * num2);
//     }
//     else if (opera === '/') {
//         console.log(num1 / num2);
//     }
// }
// console.log(oper('-', 20, 14));
// console.log(oper('+', 20, 14));
// console.log(oper('/', 20, 14));
// console.log(oper('*', 20, 14));
// function retur(num) {
//     if (num === 0) {
//         console.log('zero')
//     }

// }

// "1 sheep...2 sheep...3 sheep..."
// function sheep(num) {
//     const ave = {};
//     for (let i = 1; i <= num; i++) {
//         let a = `${i} sheep`;
//         ave.a;

//     }
//     console.log(ave);
// }
// console.log(sheep(6));
// const obj12 = {
//     key1: 12,
//     key2: 13,
//     key3: 34,

// }
// obj12.id = 'id';
// console.log(obj12);
// for (let key in obj12) {
//     console.log(`${key}:${obj12[key]}`);
// }

// function return12(str) {
//     for (let i = 0; i < str.length; i++) {
//         return str[0];
//     }
// }
// console.log(return12('9 years old'))

// (2, 4, 6) ---> return 0 (Not triangle)
// (8, 5, 7) ---> return 1 (Acute, angles are approx. 82°, 38° and 60°)
// (3, 4, 5) ---> return 2 (Right, angles are approx. 37°, 53° and exactly 90°)
// (7, 12, 8) ---> return 3 (Obtuse, angles are approx. 34°, 106° and 40°)
function triangle(num1, num2, num3) {
    if ((num1 + num2) > num3 && (num1 + num3) > num2 && (num2 + num3) > num1) {
        console.log(' triangle')
    }
    else {
        console.log('not triangle')
    }
    if (num1 > (num2 && num3)) {
        if (num1 ** 2 > (num2 ** 2 + num3 ** 2)) {
            console.log('obtuse angle')
        }
        else if (num1 ** 2 < (num2 ** 2 + num3 ** 2)) {
            console.log('acute angle')
        }
        else if (num1 ** 2 === (num2 ** 2 + num3 ** 2)) {
            console.log('right')
        }
    }

}
console.log(triangle(3, 3, 4))