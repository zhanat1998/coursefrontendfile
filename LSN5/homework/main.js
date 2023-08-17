// Сделайте функцию, которая возвращает куб числа. Число передается парамеconst 
function funCube(arg) {
    let result = arg ** 3;
    return result;
}
console.log(funCube(3));

// Сделайте функцию, которая возвращает квадрат числа. Число передается параметром. 
function funSquare(arg) {
    let res = arg ** 2;
    return res;
}
console.log(funSquare(3));
// Сделайте функцию, которая возвращает сумму двух чисел. 
function funSum(arg1, arg2) {
    resu = arg1 + arg2;
    return resu;
}
console.log(funSum(3, 5));
// Сделайте функцию, которая отнимает от первого числа второе и делит на третье. 
function funSumm(a, b, c) {
    resul = (a - b) / c;
    return resul;
}
console.log(funSumm(3, 4, 5));
// Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке. 
// d is number
function funWeek(d) {
    if (d === 1) {
        return 'ponidelnik';
    }
    else if (d === 2) {
        return 'vtornik';
    }
    else if (d === 3) {
        return 'sreda';
    }
    else if (d === 4) {
        return 'chetverg';
    }
    else if (d === 5) {
        return 'pyatnitsa';
    }
    else if (d === 6) {
        return 'subbota';
    }
    else if (d === 7) {
        return 'voskriseniye';
    }
    else {
        return 'eto ne den'
    }


}
console.log(funWeek(5));
console.log(funWeek(8));

// Дан массив с числами. Проверьте, что в этом массиве есть число 5. Если есть - выведите 'да', а если нет - выведите 'нет'. 
let arr1 = [11, 2, 3, 4, 5, 6, 7];
let arr2 = [11, 2, 3, 4, 6, 7];

function funArr(arr) {
    console.log("arr: ", arr)
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 5) {
            return 'da';
        }
    }
    console.log('net')
}

console.log(funArr(arr2))
// console.log(funArr(arr2))
// console.log(funArr([1, 2, 3, 4, 5, 6, 7]))
// Дано число, например 31. Проверьте, что это число не делится ни на одно другое число кроме себя самого и единицы. То есть в нашем случае нужно проверить, что число 31 не делится на все числа от 2 до 30. Если число не делится - выведите 'false', а если делится - выведите 'true'. 
function prime(arg) {
    for (let i = 2; i < arg; i++) {
        let result = arg % i;
        if (result === 0) {
            return true;
        }
        else {
            return false;
        }

    }

}
console.log(prime(37));
console.log(prime(38));
// Дан массив с числами. Проверьте, есть ли в нем два одинаковых числа подряд. Если есть - выведите 'да', а если нет - выведите 'нет'. 

let arra1 = [11, 2, 2, 4, 2, 5, 6, 7];
let arra2 = [11, 2, 3, 4, 6, 7];
function funSame(arr) {
    console.log('arr: ', arr);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 1]) {
            return 'da';
        }
    }
    console.log('net');

}
console.log(funSame(arra1));
console.log(funSame(arra2));

// Сделайте функцию, которая параметрами принимает 2 числа. Если эти числа равны - пусть функция вернет true, а если не равны - false. 
function paramSame(a, b) {
    console.log(a + ',' + b);
    if (a === b) {
        return true;
    }
    else {
        return false;
    }
}
console.log(paramSame(4, 9));
console.log(paramSame(9, 9));
// Сделайте функцию, которая параметрами принимает 2 числа. Если их сумма больше 10 - пусть функция вернет true, а если нет - false. 
function paramSum(a, b) {
    console.log(a + ',' + b);
    if (a + b > 10) {
        return true;
    }
    else {
        return false;
    }
}
console.log(paramSum(4, 4));
console.log(paramSum(9, 9));

// Сделайте функцию, которая параметром принимает число и проверяет - отрицательное оно или нет. Если отрицательное - пусть функция вернет true, а если нет - false. 
function neg(arg) {
    console.log(arg);
    if (arg >= 0) {
        return true;
    }
    else {
        return false;
    }
}
console.log(neg(-5));
console.log(neg(5));