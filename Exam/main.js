const products = document.querySelector('.products');


const url = 'http://localhost:3000/data';
const basket = 'http://localhost:3000/basket';


let putId;
function addToFooter(data) {
    const footer = document.querySelector('.footer');
    const footImg = document.createElement('div');
    footImg.setAttribute('class', 'footImg');
    footer.appendChild(footImg);
    const img1 = document.createElement('img');
    img1.src = data.img;
    footImg.appendChild(img1);
    const lorem = document.createElement('div');
    lorem.setAttribute('class', 'lorem');
    lorem.innerText = data.opisaniye;
    footer.appendChild(lorem);
}
// const redak = document.querySelector('.redaktirovat');

function generateList(data) {

    const image = document.createElement('div');
    image.setAttribute('class', 'image');
    const divImg = document.createElement('div');
    divImg.setAttribute('class', 'divImg');
    image.appendChild(divImg);
    const img = document.createElement('img');
    img.src = data.img;
    divImg.appendChild(img);

    const ulImg = document.createElement('ul');
    image.appendChild(ulImg);

    const liImg = document.createElement('li');
    const detailButton = document.createElement('button');
    liImg.appendChild(detailButton);
    // detailButtoneta.innerText = data.nazvaniye;
    detailButton.innerText = data.nazvaniye;
    ulImg.appendChild(liImg);
    detailButton.addEventListener('click', (e) => {
        console.log('data: ', data)
        //block all elements in the screen
        products.style.display = 'none';
        addToFooter(data);


    })


    const liImg2 = document.createElement('li');
    liImg2.innerText = data.price;
    ulImg.appendChild(liImg2);

    const liImg3 = document.createElement('li');
    const redaktirovat = document.createElement('button');
    redaktirovat.innerText = 'redaktirovat';
    liImg3.appendChild(redaktirovat);
    ulImg.appendChild(liImg3);
    redaktirovat.addEventListener('click', (e) => {
        products.style.display = 'none';
        redak.style.display = 'block';
        putId = data.id;
        return redak;




    })

    const liImg4 = document.createElement('li');
    const button2 = document.createElement('button');
    liImg4.appendChild(button2)
    button2.innerText = 'dobavit v karzinku';
    ulImg.appendChild(liImg4);
    products.appendChild(image);
    button2.addEventListener('click', () => {
        displayBusket(data);
    })



    return image;
}


function displayTodoList(data = []) {
    const todoList = document.querySelector('.products');
    todoList.innerHTML = '';

    const length = data.length;

    for (let i = 0; i < length; i++) {
        const list = generateList(data[i])
        todoList.appendChild(list)
    }
}

async function getTodos() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        displayTodoList(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
getTodos();

// todo POST
async function displayBusket(todo) {
    try {
        await fetch(basket, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(todo),
        });
        getTodos();
    } catch (error) {
        console.error('Error posting data:', error);
    }
}

// TODO PUT
async function putData(putObj) {
    try {
        const response = await fetch(`${url}/${putId}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(putObj),
        });
        const result = await response.json();
        console.log(result);
    } catch (e) {
        console.log('Fetch data Error: ', e);
    }
}

const redak = document.querySelector('.redak');
redak.style.display = 'none';
const sohran = document.querySelector('.sohran');
const kname = document.getElementById('kname');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const rname = document.getElementById('rname');
sohran.addEventListener('click', () => {
    const putObj = {
        img: kname.value,
        nazvaniye: fname.value,
        opisaniye: lname.value,
        price: rname.value,

    }
    putData(putObj);
})
