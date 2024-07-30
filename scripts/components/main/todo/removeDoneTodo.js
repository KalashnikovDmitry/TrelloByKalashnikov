import { getDoneList, getListTodo, getProgressList, setDoneList } from "../../../utils.js";
import renderList from "../../renderList.js";

function removeDoneTodo(event) {
    const id = event.target.dataset.id;
    const currentList = getDoneList();
    const updatedList  = currentList.filter((item) => item.id !== id);
    setDoneList(updatedList);
    renderList(updatedList, 'doneTodo', 'doneItems');

    const countTodo = document.getElementById('countTodo');
    countTodo.textContent = getListTodo().length;
    const countProgress = document.getElementById('countProgress');
    countProgress.textContent = getProgressList().length;
    const countDone = document.getElementById('countDone');
    countDone.textContent = updatedList.length;
}

export default removeDoneTodo;