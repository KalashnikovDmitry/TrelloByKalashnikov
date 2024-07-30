import { getListTodo, setListTodo } from "../../../utils.js";
import renderList from "../../renderList.js";

function removeTodo(event) {
    const id = event.target.dataset.id;
    const currentList = getListTodo();
    const updatedList  = currentList.filter((item) => item.id !== id);
    setListTodo(updatedList);
    renderList(updatedList, 'listTodo', 'todoItems');
}

export default removeTodo;