import TODO_ELEMENT from "./main/todo/todoElement.js";

function renderList(todos, list, items) {
    const LIST_ELEMENT = document.getElementById(items);
    LIST_ELEMENT.innerHTML = '';
    LIST_ELEMENT.append(...todos.map(TODO_ELEMENT));
    const todo = document.getElementById(list);
    const count = document.getElementById('countTodo');
    count.textContent = todos.length;
    todo.append(LIST_ELEMENT);
}

export default renderList;