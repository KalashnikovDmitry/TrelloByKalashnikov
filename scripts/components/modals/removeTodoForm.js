import removeTodo from "../main/todo/removeTodo.js";
import { closeModalWindow } from "./createModal.js";

function removeTodoForm() {
    const form = document.createElement('form');
    form.setAttribute('id', 'removeTodoForm');
    form.classList.add('form');
    form.addEventListener('submit', (event) => removeTodo(event));

    const formTitle = document.createElement('h2');
    formTitle.classList.add('main-modal-title');
    formTitle.textContent = 'Are you sure about this?!';

    const form_paragraph = document.createElement('p');
    form_paragraph.classList.add('remove-p');
    form_paragraph.textContent = 'Remove TODO!'

    const actions = document.createElement('div');
    actions.classList.add('form-actions');

    const confirmRemove = document.createElement('button');
    confirmRemove.setAttribute('id', 'removeTodo');
    confirmRemove.setAttribute('type', 'submit');
    confirmRemove.classList.add('confirmRemoveTodo');
    confirmRemove.textContent = 'Confirm';

    const close = document.createElement('button');
    close.setAttribute('id', 'removeTodo');
    close.setAttribute('type', 'button');
    close.classList.add('closeBtn');
    close.textContent = 'Close';
    close.addEventListener('click', () => closeModalWindow())

    actions.append(confirmRemove, close);
    form.append(formTitle, form_paragraph, actions);

    return form;
}

export default removeTodoForm;