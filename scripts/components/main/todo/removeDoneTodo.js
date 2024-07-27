import { getDoneList, setDoneList } from "../../../utils.js";
import renderList from "../../renderList.js";

function removeDoneTodo(event) {
    const id = event.target.dataset.id;
    const currentList = getDoneList();
    const updatedList  = currentList.filter((item) => item.id !== id);
    setDoneList(updatedList);
    renderList(updatedList, 'doneTodo', 'doneItems');

    const countDone = document.getElementById('countDone');
    countDone.textContent = updatedList.length;
}

export default removeDoneTodo;