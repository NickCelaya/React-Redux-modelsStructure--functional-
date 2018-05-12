import {combineReducers} from "redux";
import todos from "../modules/todos";
// import book from "../module/book";

export default combineReducers({
 [todos.namespace]: todos.reducer,
//  [book.namespace]: book.reducer,

});