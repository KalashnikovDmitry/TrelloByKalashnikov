import TODO_ELEMENT from "./main/todo/todoElement.js";

function createList(todos, list, items) {
    
    const LIST_ELEMENT = document.createElement('div');
    LIST_ELEMENT.classList.add('todo-list');
    LIST_ELEMENT.setAttribute('id', items);

    LIST_ELEMENT.append(...todos.map(TODO_ELEMENT));
    const todo = document.getElementById(list);
    const count = document.getElementById('countTodo');
    count.textContent = todos.length;
    todo.append(LIST_ELEMENT);
}

export default createList;

