import { ADD_MODAL_ELEMENT } from "../../modals/createModal.js";
import { createEditForm } from "../../modals/editModalForm.js";
import inProgress from "./addInProgress.js";
import backTodo from "./backInTodo.js";
import completeTodo from "./completeTodo.js";
import removeDoneTodo from "./removeDoneTodo.js";
import removeTodo from "./removeTodo.js";

function TODO_ELEMENT(todo) {

    const {id, title, description, userName, createdDate, isDone, isProgress} = todo;

    if (isDone === false && isProgress === false ) {

        const todoItem = document.createElement('div');
        todoItem.setAttribute('id', id);
        todoItem.classList.add('todo-item');

        //////////////////////////////////////////////////////////// левая часть todo-item
        const itemDescription = document.createElement('div');
        itemDescription.classList.add('todo-info-part-1');

        const titleItem = document.createElement('h3');
        titleItem.classList.add('todo-title');
        titleItem.textContent = title;

        const descriptionItemWrap = document.createElement('div');
        descriptionItemWrap.classList.add('description-item-wrap');
        const description_p = document.createElement('p');
        description_p.textContent = description;
        descriptionItemWrap.append(description_p);

        const userNameItem = document.createElement('span');
        userNameItem.textContent = userName;

        itemDescription.append(titleItem, descriptionItemWrap, userNameItem);
        ///////////////////////////////////////////////////////////

        ////////////////////////////////////////////////////////// Правая часть todo-item
        const itemFunctional = document.createElement('div');
        itemFunctional.classList.add('todo-info-part-2');

        const itemBtnWrap = document.createElement('div');
        itemBtnWrap.classList.add('btn-wrap');

        const editBtn = document.createElement('button');
        editBtn.classList.add('editBtn');
        editBtn.textContent = 'EDIT';
        editBtn.addEventListener('click', () => ADD_MODAL_ELEMENT(createEditForm(todo)))

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'DELETE';
        deleteBtn.classList.add('deleteBtn');
        deleteBtn.dataset.id = id;
        deleteBtn.addEventListener('click', removeTodo);

        itemBtnWrap.append(editBtn, deleteBtn);

        const inProgressBtn = document.createElement('button');
        inProgressBtn.textContent = 'START';
        inProgressBtn.dataset.id = id;
        inProgressBtn.classList.add('progressBtn');
        inProgressBtn.dataset.isProgress = isProgress;
        inProgressBtn.addEventListener('click', inProgress);

        const date = document.createElement('span');
        date.classList.add('todo-time');
        date.textContent = createdDate;

        itemFunctional.append(itemBtnWrap, inProgressBtn, date);
        //////////////////////////////////////////////////////////

        todoItem.append(itemDescription, itemFunctional);
        return todoItem;

    } else if (isDone === false && isProgress === true) {

        const todoItem = document.createElement('div');
        todoItem.setAttribute('id', id);
        todoItem.classList.add('progress-item');

        //////////////////////////////////////////////////////////// левая часть todo-item
        const itemDescription = document.createElement('div');
        itemDescription.classList.add('todo-info-part-1');

        const titleItem = document.createElement('h3');
        titleItem.classList.add('todo-title');
        titleItem.textContent = title;

        const descriptionItemWrap = document.createElement('div');
        descriptionItemWrap.classList.add('description-item-wrap');
        const description_p = document.createElement('p');
        description_p.textContent = description;
        descriptionItemWrap.append(description_p);

        const userNameItem = document.createElement('span');
        userNameItem.textContent = userName;

        itemDescription.append(titleItem, descriptionItemWrap, userNameItem);
        ///////////////////////////////////////////////////////////

        ////////////////////////////////////////////////////////// Правая часть todo-item
        const itemFunctional = document.createElement('div');
        itemFunctional.classList.add('todo-info-part-2');

        const itemBtnWrap = document.createElement('div');
        itemBtnWrap.classList.add('btn-wrap');

        const backBtn = document.createElement('button');
        backBtn.textContent = 'BACK';
        backBtn.dataset.id = id;
        backBtn.classList.add('backBtn');
        backBtn.addEventListener('click', backTodo);

        const completeBtn = document.createElement('button');
        completeBtn.textContent = 'COMPLETE';
        completeBtn.classList.add('completeBtn');
        completeBtn.dataset.id = id;
        completeBtn.addEventListener('click', completeTodo);

        itemBtnWrap.append(backBtn, completeBtn);

        const date = document.createElement('span');
        date.classList.add('todo-time');
        date.textContent = createdDate;

        itemFunctional.append(itemBtnWrap, date);
        //////////////////////////////////////////////////////////

        todoItem.append(itemDescription, itemFunctional);
        return todoItem;

    } else if (isProgress === true && isDone === true) {

        const todoItem = document.createElement('div');
        todoItem.setAttribute('id', id);
        todoItem.classList.add('done-item');

        //////////////////////////////////////////////////////////// левая часть todo-item
        const itemDescription = document.createElement('div');
        itemDescription.classList.add('todo-info-part-1');

        const titleItem = document.createElement('h3');
        titleItem.classList.add('todo-title');
        titleItem.textContent = title;

        const descriptionItemWrap = document.createElement('div');
        descriptionItemWrap.classList.add('description-item-wrap');
        const description_p = document.createElement('p');
        description_p.textContent = description;
        descriptionItemWrap.append(description_p);

        const userNameItem = document.createElement('span');
        userNameItem.textContent = userName;

        itemDescription.append(titleItem, descriptionItemWrap, userNameItem);
        ///////////////////////////////////////////////////////////

        ////////////////////////////////////////////////////////// Правая часть todo-item
        const itemFunctional = document.createElement('div');
        itemFunctional.classList.add('todo-info-part-2');

        const itemBtnWrap = document.createElement('div');
        itemBtnWrap.classList.add('btn-wrap');

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'DELETE';
        deleteBtn.classList.add('deleteBtn');
        deleteBtn.dataset.id = id;
        deleteBtn.addEventListener('click', removeDoneTodo);

        itemBtnWrap.append(deleteBtn);

        const date = document.createElement('span');
        date.classList.add('todo-time');
        date.textContent = createdDate;

        itemFunctional.append(itemBtnWrap, date);
        //////////////////////////////////////////////////////////

        todoItem.append(itemDescription, itemFunctional);
        return todoItem;
    }

    
}

export default TODO_ELEMENT;