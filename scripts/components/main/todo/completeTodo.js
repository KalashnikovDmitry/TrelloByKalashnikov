import {getDoneList, setDoneList, getProgressList, setProgressList, getListTodo,} from "../../../utils.js";
import renderList from "../../renderList.js";

function completeTodo(event) {
    const id = event.target.dataset.id;
    const currentProgressList = getProgressList();
    const currentDoneList = getDoneList();

    const itemToMoveIndex = currentProgressList.findIndex(item => item.id === id);
    if (itemToMoveIndex === -1) return;

    const [itemToMove] = currentProgressList.splice(itemToMoveIndex, 1);

    itemToMove.isDone = true;
    currentDoneList.push(itemToMove);

    setDoneList(currentDoneList);
    setProgressList(currentProgressList);

    renderList(currentDoneList, 'doneTodo', 'doneItems');
    renderList(currentProgressList, 'inProgressTodo', 'progressItems');
    

    console.log(currentDoneList);
    console.log(currentProgressList);
    console.log(getListTodo());

    const countTodo = document.getElementById('countTodo');
    countTodo.textContent = getListTodo().length;
    const countProgress = document.getElementById('countProgress');
    countProgress.textContent = currentProgressList.length;
    const countDone = document.getElementById('countDone');
    countDone.textContent = currentDoneList.length;
}

export default completeTodo;
