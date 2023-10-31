// console.log('1');

const promise = new Promise((resolve, reject) => {
    let a = 2;
    let b = 3;
    if (a === b) {
        resolve('a ravno b')
    } else {
        reject('a ne ravno');
    }
    resolve('str');

    // console.log('2');
});
// console.log('3');

promise.then((response) => {
    // console.log(response, '<<<<')
    // console.log('4');
})
promise.catch((error) => {
    // console.log(error, 'oshibka')
})

promise.finally(() => {
    // console.log('final');
})
// console.log('5');
// console.log('djfbhdjk')

// const promise2 = new Promise((resolve, reject) => {
//     resolve('eto');
// });

// promise2
//     .then((res) => {

//     })

function sum(x, y) {
    return new Promise((res) => {
        const result = x + y;
        res(result)
    })
}

// sum(3, 4).then((response) => {
//     console.log('resultat:', response);
// });
async function test() {
    const res = await sum(3, 4).then((response) => {
        return response;
    });
    return res;
}
// console.log(test)
// test();

function makeHttpRequest(method, url) {
    return new Promise((res, rej) => {

    })
        .catch((error) => {
            console.log(error);
        });

    const fetchData



