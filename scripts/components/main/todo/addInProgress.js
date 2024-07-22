import {getProgressList, setProgressList, getListTodo, setListTodo } from "../../../utils.js";
import renderList from "../../renderList.js";
import removeTodo from "./removeTodo.js";

function inProgress(event) {
    
    const currentListProgress = getProgressList();
    const id = event.target.dataset.id;
    const currentList = getListTodo();

    const itemToMove = currentList.find(item => item.id === id);

    itemToMove.isProgress = true;
    currentListProgress.push(itemToMove);

    setProgressList(currentListProgress);
    
    renderList(currentListProgress, 'inProgressTodo');
    removeTodo(event);
}
export default inProgress;