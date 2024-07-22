import CONTAINER_ELEMENT from "../container.js";
import { ADD_MODAL_ELEMENT } from "../modals/createModal.js";
import { createAddForm } from "../modals/todoModalForm.js";


function MAIN_ELEMENT() {
    const container = CONTAINER_ELEMENT();
    const main = document.createElement('div');
    main.classList.add('trello-main');
    
    const todos_wrap = document.createElement('div');
    todos_wrap.classList.add('todos-wrap');


    ////////////////////////////////////////////////////////////////
    const todo_list = document.createElement('div');
    todo_list.classList.add('list-wrap');
    todo_list.setAttribute('id', 'listTodo');

    const todo_list_title = document.createElement('div');
    todo_list_title.classList.add('todo-list-title');

    const title = document.createElement('h2');
    title.textContent = 'TODO:';

    const countTodo = document.createElement('span');
    countTodo.setAttribute('id', 'countTodo');

    const addBtn = document.createElement('button');
    addBtn.classList.add('addBtnTodo');
    addBtn.textContent = 'ADD';
    addBtn.addEventListener('click', () => ADD_MODAL_ELEMENT(createAddForm()));


    todo_list_title.append(title, countTodo);
    todo_list.append(todo_list_title, addBtn);
//////////////////////////////////////////////////////////////////////////////////


    const inProgress_list = document.createElement('div');
    inProgress_list.classList.add('list-wrap');
    inProgress_list.setAttribute('id', 'inProgressTodo');

    const inProgress_list_title = document.createElement('div');
    inProgress_list_title.classList.add('inProgress-list-title');

    const inProgressTitle = document.createElement('h2');
    inProgressTitle.textContent = 'IN PROGRESS:';

    const countInProgress = document.createElement('span');
    countInProgress.setAttribute('id', 'countInProgress');

    inProgress_list_title.append(inProgressTitle, countInProgress);
    inProgress_list.append(inProgress_list_title);
//////////////////////////////////////////////////////////////////////////////


    const done_list = document.createElement('div');
    done_list.classList.add('list-wrap');
    done_list.setAttribute('id', 'doneTodo');

    main.append(container);
    container.append(todos_wrap);
    todos_wrap.append(todo_list, inProgress_list, done_list);

    return main;
}

export default MAIN_ELEMENT;