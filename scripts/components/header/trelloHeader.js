import CONTAINER_ELEMENT from "../container.js";
import getTime from "./time.js";
import { ADD_MODAL_ELEMENT } from "../modals/createModal.js";
import { createAddForm } from "../modals/todoModalForm.js";


function HEADER_ELEMENT() {
    const container = CONTAINER_ELEMENT();
    const header = document.createElement('div'); // Секция Header
    header.classList.add('trello-header');
    header.append(container);

    const wrapper = document.createElement('div'); // Обёртка Header
    wrapper.classList.add('trello-header-wrapp');
    container.append(wrapper);

    const logoWrap = document.createElement('div'); // Блок с логотипом
    logoWrap.classList.add('trello-logo');
    const logoTitle = document.createElement('h2');
    logoTitle.classList.add('logo-title');
    logoTitle.textContent = 'TRELLO_DK';
    

    const addBtn = document.createElement('div');
    addBtn.classList.add('addBtnTodo');

    const spanBtn = document.createElement('span');
    spanBtn.classList.add('spanBtnAdd');
    spanBtn.addEventListener('click', () => ADD_MODAL_ELEMENT(createAddForm()));

    const spanDesc = document.createElement('span');
    spanDesc.classList.add('spanDescription');
    spanDesc.textContent = 'Add your TODO+'

    addBtn.append(spanBtn, spanDesc);
    logoWrap.append(logoTitle, addBtn);
    
    const timeWrap = document.createElement('div'); // Блок со временем
    timeWrap.classList.add('time-wrap');
    const clock = document.createElement('span');
    clock.setAttribute('id', 'clock');
    setInterval(getTime, 1000);

    timeWrap.append(clock);
    wrapper.append(logoWrap, timeWrap);

    return header;
}

export default HEADER_ELEMENT;