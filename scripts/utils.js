
export const ROOT_ELEMENT = document.getElementById('root');
export const MAIN_WRAP = document.createElement('div').classList.add('trello-main-wrap');
let LIST_TODO = [];
let LIST_PROGRESS = [];

export function getListTodo() {
    return LIST_TODO;
}

export function setListTodo(newList) {
    LIST_TODO = newList;
}

export function getProgressList() {
    return LIST_PROGRESS;
}

export function setProgressList(newList) {
    LIST_PROGRESS = newList;
}

