
const form = document.querySelector('#todoform');
const todoInput = document.querySelector('#list');
const todoList = document.querySelector('.list-group');
const del = document.querySelector('#lime');
const sort = document.querySelector('#deck');

eventListeners();

function eventListeners() {
    form.addEventListener('submit', addTodo);
    document.addEventListener("DOMContentLoaded", loadAllTodosToList);

}

function loadAllTodosToList() {
    let todos = getTodosFromStorage();
    todos.forEach(function (todo) {
        addTodoToList(todo);

    });
}

function addTodo(e) {
    const newTodo = todoInput.value.trim();
    todoList.style.display = "block";
    del.style.top = "7px"


    if (newTodo === "") {
        alert("Please write something");
    }
    else {
        addTodoToList(newTodo);
        addTodoToStorage(newTodo);
    }
    e.preventDefault();
}
function getTodosFromStorage() {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    return todos;
}
function addTodoToStorage(newTodo) {
    let todos = getTodosFromStorage();
    todos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(todos));

}

function addTodoToList(newTodo) {
    const listItem = document.createElement('li');
    listItem.innerHTML = "<span class = 'sp line'>x</span>";
    listItem.appendChild(document.createTextNode(newTodo));
    todoList.appendChild(listItem);
    todoInput.value = "";
}

del.addEventListener('click', dell);

function dell(){
    todoInput.value = "";
}

todoList.addEventListener('click', (e) => {
    if (e.target.className === 'sp line') {
        deleteTodo(e.target.parentElement);
        deleteTodoFromStorage(e.target.parentElement.textContent);

    }
})

function deleteTodo(e) {
    todoList.removeChild(e);
}
function deleteTodoFromStorage(deletetodo) {
    let todos = getTodosFromStorage();
    todos.forEach(function (todo, index) {
        if (todo = deletetodo) {
            todos.splice(index, 1);

        }
    })

    localStorage.setItem("todos", JSON.stringify(todos));

}

sort.addEventListener('click', sortt);

function sortt(e) {
    sort.classList.toggle('rotate');
    if (sort.classList.contains("rotate")) sortDescTodos();
    else sortAscTodos();
}

function sortDescTodos() {
    let todos = getTodosFromStorage();
    

}

function sortAscTodos() {
    let todos = getTodosFromStorage();

}
