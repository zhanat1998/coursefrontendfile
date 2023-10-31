const url = 'http://localhost:3000/todos';

// todo DELETE
async function deleteTodo(id) {
    try {
        await fetch(`${url}/${id}`, { method: 'DELETE' });
        getTodos();
    } catch (error) {
        console.error('Error deleting data:', error);
    }
}

// todo PATCH
async function todoUpdate(todo) {
    try {
        await fetch(`${url}/${todo.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(todo),
        });
        getTodos();
    } catch (error) {
        console.error('Error partially updating data:', error);
    }
}

const generateDeleteBtn = (id) => {
    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'DELETE';
    deleteBtn.addEventListener('click', () => {
        deleteTodo(id);
    });

    return deleteBtn
}

const generateEditBtn = (data) => {
    const editBtn = document.createElement('button');
    editBtn.innerText = 'EDIT';
    editBtn.addEventListener('click', () => {
        const newValue = prompt('Enter new text', data.value);
        todoUpdate({
            ...data,
            value: newValue,
        });
    });

    return editBtn
}
// console.log('todo:', todo);

const generateList = (data) => {
    const todo = document.createElement('li');

    const text = document.createElement('p');

    text.innerText = data.value

    const deleteBtn = generateDeleteBtn(data.id)
    const editBtn = generateEditBtn(data)

    todo.appendChild(text);
    todo.appendChild(deleteBtn);
    todo.appendChild(editBtn);

    return todo
}

function displayTodoList(data = []) {
    const todoList = document.getElementById('todo-list');
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

// todo GET
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
async function addTodo(todo) {
    try {
        await fetch(url, {
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

const inputTask = document.getElementById('input-task');
const addBtn = document.getElementById('add-btn');

addBtn.addEventListener('click', () => {
    if (inputTask.value.trim()) {
        addTodo({
            value: inputTask.value,
        });
        inputTask.value = '';
    }
});




