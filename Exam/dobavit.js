const url = 'http://localhost:3000/data';
console.log(url);

const body = document.querySelector('.body');
const fname = document.getElementById('fname');

const lname = document.getElementById('lname');

const rname = document.getElementById('rname');


const kname = document.getElementById('kname');


const cancel = document.querySelector('.cancel');
const sohran = document.querySelector('.sohran');
const oname = document.getElementById('oname');

// TODO GET
async function fetchData() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        // console.log(data);
    } catch (e) {
        console.log('Fetch data Error: ', e);
    }
}
// fetchData();

// todo POST
async function addTodo(todo) {
    try {
        await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(todo),
        });
        // fetchData();
    } catch (error) {
        console.error('Error posting data:', error);
    }
}


sohran.addEventListener('click', () => {

    addTodo({
        nazvaniye: fname.value,
        price: rname.value,
        img: kname.value,
        opisaniye: lname.value

    });
    fname.value = '';
    rname.value = '';
    kname.value = '';
    lname.value = '';



});

















