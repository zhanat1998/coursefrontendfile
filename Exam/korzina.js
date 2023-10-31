const basket = ' http://localhost:3000/basket';

const products = document.querySelector('.products')

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
    liImg.innerText = data.nazvaniye;
    ulImg.appendChild(liImg);

    const liImg2 = document.createElement('li');
    liImg2.innerText = data.price;
    ulImg.appendChild(liImg2);

    const liImg4 = document.createElement('li');
    const button1 = document.createElement('button');
    button1.innerText = 'udalit';
    liImg4.appendChild(button1);
    ulImg.appendChild(liImg4);
    button1.addEventListener('click', () => {
        deleteData(data.id);
        // console.log(basket);
    })


    products.appendChild(image);



    return image;
}

function displayTodoList(data = []) {
    const todoList = document.querySelector('.products');
    // console.log("todoList emne: ", todoList)
    // todo нужно для очистки старых html
    todoList.innerHTML = '';

    const length = data.length;
    // console.log('length: ', length)

    for (let i = 0; i < length; i++) {
        const list = generateList(data[i])
        todoList.appendChild(list)
    }
}

async function getTodos() {
    try {
        const response = await fetch(basket);
        const data = await response.json();
        displayTodoList(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
getTodos();

// TODO DELETE
async function deleteData(id) {
    try {
        const response = await fetch(`${basket}/${id}`, { method: 'DELETE' });
        // console.log(response);
        if (response.status === 404) {
            console.log(response);
            throw new Error(response.status);
            // console.log('Не удалось удалить объект!');
        }
        getTodos();
    } catch (e) {
        console.log('Fetch data Error: ', e);
    }
}



