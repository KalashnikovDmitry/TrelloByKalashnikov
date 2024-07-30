
import { ROOT_ELEMENT } from "../../utils.js";

export function ADD_MODAL_ELEMENT(content) {
    const modal = document.createElement('div');
    modal.setAttribute('id', 'modal');
    modal.classList.add('modal');

    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');
    modalContent.append(content);

    const closeModal = document.createElement('span');
    closeModal.classList.add('close-modal');
    closeModal.addEventListener('click', () => closeModalWindow());

    modal.append(closeModal, modalContent);

    return ROOT_ELEMENT.append(modal);
}

 // Функция для закрытия модального окна
 
export function closeModalWindow() {
    const modal = document.getElementById('modal');
    if (modal) {
        modal.remove();
    }
}


