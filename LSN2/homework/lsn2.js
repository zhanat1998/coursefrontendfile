let arr = [1, 2, 3];
if (arr[0] > arr[1] && arr[0] > arr[2]) {
    console.log(arr[0]);
    if (arr[1] > arr[2]) {
        console.log(arr[1]);
        console.log(arr[2]);
    }
    else {
        console.log(arr[2]);
        console.log(arr[1]);
    }
}
else if (arr[1] > arr[2] && arr[1] > arr[0]) {
    console.log(arr[1]);
    if (arr[0] > arr[2]) {
        console.log(arr[0]);
        console.log(arr[2]);
    }
    else {
        console.log(arr[2]);
        console.log(arr[0]);
    }
}
else if (arr[2] > arr[0] && arr[2] > arr[1]) {
    console.log(arr[2]);
    if (arr[1] > arr[0]) {
        console.log(arr[1]);
        console.log(arr[0]);
    }
    else {
        console.log(arr[0]);
        console.log(arr[1]);
    }
}
let num = 5;
let num1 = 8;
if (num > num1) {
    console.log(num);
}
else {
    console.log(num1);
}
let a = 1;
let b = 3;
let c = -1;
let d = -4;
let e = 10;
if (a < b && a < c && a < d && a < e) {
    console.log(a);
}
else if (b < a && b < c && b < d && b < e) {
    console.log(b);
}
else if (c < a && c < b && c < d && c < e) {
    console.log(c);
}
else if (d < a && d < b && d < c && d < e) {
    console.log(d);
}
else if (e < a && e < b && e < d && e < c) {
    console.log(e);
}
let x = 10;
let y = 5;
if (x > y) {
    console.log('x  bolshe chem  y');
}
else {
    console.log('x  ne bolshe chem  y');
}
let num5 = prompt('vedite chislo:');
if (num5 % 2 === 0) {
    console.log("chislo " + num5 + " chetnyi");
}
else {
    console.log("chislo " + num5 + " nechetnyi");
}


let z = prompt('write a number:');
console.log(z.toString('').length);
if (z > 0) {
    console.log("chislo " + z + " polojitelnyi");
}
else {
    console.log("chislo " + z + " negative");
}
let f = 4;
let g = 9;
let r = 10;
if (r > Math.sqrt(g ** 2 + f ** 2)) {
    console.log("inside of circle");
}
else {
    console.log("outside of circle");
}
let numb1 = prompt("vedite chislo dlya triugla 1:");
let numb2 = prompt("vedite chislo dlya triugla 2:");
let numb3 = prompt("vedite chislo dlya triugla 3:");
if ((numb1 + numb2) > numb3) {
    console.log('triangle');
}
else if ((numb1 + numb3) > numb2) {
    console.log('triangle');
}
else if ((numb2 + numb3) > numb1) {
    console.log('triangle');
}
else {
    console.log('not trianle');
}
let temp = prompt("number1:");
let temp2 = prompt("number2:");
let temp3 = prompt("number3:");
if (temp > temp2 && temp > temp3) {
    console.log(temp);
}
else if (temp2 > temp && temp2 > temp3) {
    console.log(temp2);
}
else {
    console.log(temp3)
}

console.log("a")