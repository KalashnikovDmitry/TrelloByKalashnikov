// import { IN_LOCAL_KEY, LOCAL_STORAGE_TODO_KEY } from "./constans.js";
// import { LIST_TODO } from "./utils.js";

// const DATA_TODO_JSON = JSON.stringify(LIST_TODO);

// function saveToLocaleStorage(todo) {
//     const data = JSON.stringify(todo);
//     localStorage.setItem(LOCAL_STORAGE_TODO_KEY, data);
// }

// function getDataFromLocaleStorage() {
//     const isLocal = localStorage.getItem(IN_LOCAL_KEY);
//     if(isLocal) {
//         const data = localStorage.getItem(LOCAL_STORAGE_TODO_KEY);
//         const arrData = JSON.parse(data);
//         return arrData;
//     }
//     saveToLocaleStorage(DATA_TODO_JSON);
//     localStorage.setItem(IN_LOCAL_KEY, true);
//     return JSON.parse(DATA_TODO_JSON);
// }

// function getAllData() {
//     return getDataFromLocaleStorage();
// }

// export {DATA_TODO_JSON, saveToLocaleStorage, getAllData};