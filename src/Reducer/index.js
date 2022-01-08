import { combineReducers } from "redux";
import { TodoList } from "./Todoreducer";
import { UserList } from "./UserReducer";

export default combineReducers({
  todolist: TodoList,
  userlist: UserList,
});
