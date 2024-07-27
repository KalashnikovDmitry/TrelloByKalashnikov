import { getListTodo, setListTodo } from "../../utils";
import renderList from "../renderList";
import { closeModalWindow } from "./createModal";

export function createEditForm(todo) {

    const form = document.createElement('form');
    form.setAttribute('id', 'editTodoForm');
    form.classList.add('form');
    form.setAttribute('data-id', todo.id);
    form.addEventListener('submit', editTodoSub);

    const formTitle = document.createElement('h2');
    formTitle.classList.add('main-modal-title');
    formTitle.textContent = 'EDIT YOUR TODO!';
    

    const todoTitle = document.createElement('input');
    todoTitle.setAttribute('id', 'titleAddTodoForm');
    todoTitle.classList.add('form-title');
    todoTitle.setAttribute('type', 'text');
    todoTitle.required = true;
    todoTitle.value = todo.title;

    const todoDescription = document.createElement('textarea');
    todoDescription.setAttribute('id', 'descriptionAddTodoForm');
    todoDescription.classList.add('form-description');
    todoDescription.required = true;
    todoDescription.setAttribute('maxlength', '255');
    todoDescription.value = todo.description;

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
    
        
    const editTodo = document.createElement('button');
    editTodo.setAttribute('id', 'editTodo');
    editTodo.setAttribute('type', 'submit');
    editTodo.classList.add('editBtnTodo');
    editTodo.textContent = 'EDIT';
        
    actions.append(todoUserList, editTodo);

    form.append(formTitle, todoTitle, todoDescription, actions);

    return form;
}

function editTodoSub(event) {
    event.preventDefault();

    const form = event.target;
    const todoId = form.dataset.id;
    const todoTitle = document.getElementById('titleAddTodoForm').value;
    const todoDescription = document.getElementById('descriptionAddTodoForm').value;
    const todoUser = document.getElementById('usersTodo').value;

    let todoList = getListTodo();
    const todoIndex = todoList.findIndex(todo => todo.id === todoId);
    
     if (todoIndex !== -1) {
         todoList[todoIndex].title = todoTitle;
         todoList[todoIndex].description = todoDescription;
         todoList[todoIndex].userName = todoUser;

         setListTodo(todoList);
         renderList(todoList, 'listTodo', 'todoItems');
     }

    closeModalWindow();
}