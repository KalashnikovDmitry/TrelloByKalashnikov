import { getListTodo, getProgressList, setListTodo, setProgressList } from "../../../utils.js";
import renderList from "../../renderList.js";


function inProgress(event) {
    const currentListTodo = getListTodo();
    const id = event.target.dataset.id;
    const currentListProgress = getProgressList();

   
    const itemToMoveIndex = currentListTodo.findIndex(item => item.id === id);
    if (itemToMoveIndex === -1) return;

    const [itemToMove] = currentListTodo.splice(itemToMoveIndex, 1);

    itemToMove.isProgress = true;
    currentListProgress.push(itemToMove);

    setListTodo(currentListTodo);
    setProgressList(currentListProgress);
    
    renderList(currentListProgress, 'inProgressTodo', 'progressItems');
    renderList(currentListTodo, 'listTodo', 'todoItems');

    const countProgress = document.getElementById('countProgress');
    countProgress.textContent = currentListProgress.length;
    const countTodo = document.getElementById('countTodo');
    countTodo.textContent = currentListTodo.length;
} 

export default inProgress;