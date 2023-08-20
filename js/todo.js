const toDoForm = document.getElementById('todo-form');
const toDoList = document.getElementById('todo-list');
const toDoInput = toDoForm.querySelector('input');

let toDos = [];
const TODOS_KEY = 'todos'


function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
};


function deleteToDo(event) {
    const li = event.target.parentElement;
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    li.remove();
    saveToDos();
}


function paintToDo(newTodoObj) {
    const li = document.createElement('li');
    li.id = newTodoObj.id;
    const span = document.createElement('span');
    span.innerText = newTodoObj.text;
    const button = document.createElement('button');
    button.innerText = '✔';
    button.addEventListener('click', deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
};


function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = '';
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
};
toDoForm.addEventListener('submit', handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
};

// filter()
// => () 안의 함수가 true 일떄만 해당 element 포함, false 일경우 제외시킴
