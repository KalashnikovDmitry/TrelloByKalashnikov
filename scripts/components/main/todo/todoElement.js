import inProgress from "./addInProgress.js";
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
        editBtn.textContent = 'EDIT';

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'DELETE';
        deleteBtn.dataset.id = id;
        deleteBtn.addEventListener('click', removeTodo);

        itemBtnWrap.append(editBtn, deleteBtn);

        const inProgressBtn = document.createElement('button');
        inProgressBtn.textContent = '>';
        inProgressBtn.dataset.id = id;
        inProgressBtn.dataset.isProgress = isProgress;
        inProgressBtn.addEventListener('click', inProgress);

        const date = document.createElement('span');
        date.textContent = createdDate;

        itemFunctional.append(itemBtnWrap, inProgressBtn, date);
        //////////////////////////////////////////////////////////

        todoItem.append(itemDescription, itemFunctional);
        return todoItem;

    } else if (isDone === false && isProgress === true) {

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

        const backBtn = document.createElement('button');
        backBtn.textContent = 'BACK';
        backBtn.addEventListener('click', () => console.log('click back'));

        const completeBtn = document.createElement('button');
        completeBtn.textContent = 'DELETE';
        completeBtn.dataset.id = id;
        completeBtn.addEventListener('click', () => console.log('click complete'));

        itemBtnWrap.append(backBtn, completeBtn);

        const date = document.createElement('span');
        date.textContent = createdDate;

        itemFunctional.append(itemBtnWrap, date);
        //////////////////////////////////////////////////////////

        todoItem.append(itemDescription, itemFunctional);
        return todoItem;
    } else if (isProgress === false && isDone === true) {}

    
}

export default TODO_ELEMENT;