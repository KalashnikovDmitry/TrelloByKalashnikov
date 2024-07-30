import { getListTodo, setListTodo } from "../../utils.js";
import TODO_ELEMENT from "../main/todo/todoElement.js";
import renderList from "../renderList.js";
import { closeModalWindow } from "./createModal.js";


export function createAddForm() {

    const form = document.createElement('form');
    form.setAttribute('id', 'addTodoForm');
    form.classList.add('form');
    form.addEventListener('submit', (event) => addTodoSub(event));

    const formTitle = document.createElement('h2');
    formTitle.classList.add('main-modal-title');
    formTitle.textContent = 'ADD YOUR TODO!';

    const todoTitle = document.createElement('input');
    todoTitle.setAttribute('id', 'titleAddTodoForm');
    todoTitle.classList.add('form-title');
    todoTitle.setAttribute('type', 'text');
    todoTitle.setAttribute('placeholder', 'Title for your todo');
    todoTitle.required = true;

    const todoDescription = document.createElement('textarea');
    todoDescription.setAttribute('id', 'descriptionAddTodoForm');
    todoDescription.classList.add('form-description');
    todoDescription.setAttribute('placeholder', 'Description for your todo');
    todoDescription.required = true;
    todoDescription.setAttribute('maxlength', '255');

    const actions = document.createElement('div');
    actions.classList.add('form-actions');

    const todoUserList = document.createElement('select');
    todoUserList.setAttribute('id', 'usersTodo');
    todoUserList.required = true;

    fetch('https://669653680312447373c21a0f.mockapi.io/api/v1/users')
        .then(res => res.json())
        .then(data => {
            data.forEach(option => {
                const userElement = document.createElement('option');
                userElement.value = option.name;
                userElement.textContent = option.name;
                todoUserList.append(userElement);
            });
        })
        .catch(err => {
            console.log('Error of fetching: ', err);
        });
        
    const addTodo = document.createElement('button');
    addTodo.setAttribute('id', 'addTodo');
    addTodo.setAttribute('type', 'submit');
    addTodo.classList.add('addBtnTodo');
    addTodo.textContent = 'ADD';
        
    actions.append(todoUserList, addTodo);

    form.append(formTitle, todoTitle, todoDescription, actions);

    return form;
}

function addTodoSub(event) {
    event.preventDefault();
    const formTitle = document.getElementById('titleAddTodoForm');
    const formDescription = document.getElementById('descriptionAddTodoForm');
    const userName = document.getElementById('usersTodo');

        const todo = {
             id: String(Date.now()),
             title: formTitle.value,
             description: formDescription.value,
             userName: userName.value,
             createdDate: new Date().toLocaleString(),
             isDone: false,
             isProgress: false,
         }
          const currentList = getListTodo();

          currentList.push(todo);
          setListTodo(currentList);
          TODO_ELEMENT(todo);
          renderList(currentList, 'listTodo', 'todoItems');
          
          closeModalWindow();
         
}