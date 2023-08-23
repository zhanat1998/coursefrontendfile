const obj = {
    a: { b: 3 }
}
console.log(obj);
const obj1 = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
}
delete obj1.a;
delete obj1.b;
console.log(obj1);
const obj2 = {}
for (let i = 5; i <= 12; i++) {
    obj2['key' + i] = i;
}
console.log(obj2);

// Получите значение 2 ключей из объекта посредством динамического ключа и сложите их 
const obj3 = {
    key1: 10,
    key2: 30,
    key4: 50,
    key5: 60,
    key6: 70,
}
console.log('key1 ' + obj3.key1, 'key6 ' + obj3.key6)
console.log(obj3.key1 + obj3.key6);

// Соедините 3 объекта. Ключи могут быть перезаписаны!

//       { test: 1, test1: 2, test3: 3 }

//       { test4: 4, test5: 5, test6: 6 }

//       { test: 1, test1: 2, test3: 3 }
const obj4 = {
    test: 1, test1: 2, test3: 3
}
const obj5 = {
    test4: 4, test5: 5, test6: 6
}
const obj6 = {
    test: 1, test1: 2, test3: 3,
}
const obj7 = {
    ...obj6,
    ...obj5,
    ...obj4,
}

console.log(obj7);
const city1 = {
    name: 'GorodN',
    population: '10 million'
}
console.log(city1)
const city2 = {
    name: "ГородM", population: 1e6
}

// Создайте у объектов city1 и city2 методы getName(), которые вернут соответствующие названия городов 
function getNamer() {
    return this.name;
}
city1.getName = getNamer;
console.log(city1.getName());
city2.getName = getNamer;
console.log(city2.getName());
// Создайте методы exportStr() у каждого из объектов. Этот метод должен возвращать информацию о городе в формате «name=ГородN\npopulation=10000000\n». Для второго города будет строка со своими значениями. Примечание: можно обращаться к каждому свойству через цикл for/in, но методы объекта возвращать не нужно 

function forFor() {
    return `name=${this.name}\npopulation=${this.population}\n`
}
city1.exportStr = forFor;
city2.exportStr = forFor;

console.log(city1.exportStr());
console.log(city2.exportStr());


// Создайте глобальную функцию getObj(), которая возвращает this. А у каждого из объектов city1 или city2 метод getCity, который ссылается на getObj. Проверьте работу метода. Примечание: к объекту вызова можно обратиться через this. 
function getObj() {
    return this;
}
city1.getCity = getObj;
city2.getCity = getObj;
console.log(city1.getCity());
console.log(city2.getCity());


// (*) Создать объект obj, с методами method1(),method2() и method3(). В методе method3() должна возвращаться строка «метод3». Сделайте так, чтобы было возможно выполнение кода obj.method1().method2().method3(). 

const object = {
    a: 1,
    b: 2,
    c: 3
}
function method1() {
}
function method2() {
}
function method3() {
    return this.c
}
object.method1 = method1;
// console.log(object.method3());
object.method1().method2 = method2;
console.log(object.method1().method2());
object.method1().method2().method3 = method3;
console.log(object.method1().method2().method3());








