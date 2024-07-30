import { getListTodo, getProgressList, setListTodo, setProgressList } from "../../../utils.js";
import renderList from "../../renderList.js";


function backTodo(event) {
    const currentListTodo = getListTodo();
    const id = event.target.dataset.id;
    const currentListProgress = getProgressList();

   
    const itemToMoveIndex = currentListProgress.findIndex(item => item.id === id);
    if (itemToMoveIndex === -1) return;

    const [itemToMove] = currentListProgress.splice(itemToMoveIndex, 1);

    itemToMove.isProgress = false;
    currentListTodo.push(itemToMove);

    setListTodo(currentListTodo);
    setProgressList(currentListProgress);
    
    renderList(currentListProgress, 'inProgressTodo', 'progressItems');
    renderList(currentListTodo, 'listTodo', 'todoItems');

    const countProgress = document.getElementById('countProgress');
    countProgress.textContent = currentListProgress.length;
    const countTodo = document.getElementById('countTodo');
    countTodo.textContent = currentListTodo.length;
} 

export default backTodo;