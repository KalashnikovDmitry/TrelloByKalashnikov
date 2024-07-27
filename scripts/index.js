import HEADER_ELEMENT from "./components/header/trelloHeader.js";
import MAIN_ELEMENT from "./components/main/trelloMain.js";
import { getListTodo, getProgressList, getDoneList, ROOT_ELEMENT } from "./utils.js";
import createList from "./components/createList.js";


ROOT_ELEMENT.append(HEADER_ELEMENT(), MAIN_ELEMENT());
createList(getListTodo(),'listTodo', 'todoItems');
createList(getProgressList(),'inProgressTodo', 'progressItems');
createList(getDoneList(),'doneTodo', 'doneItems');