import { combineReducers } from "redux";
import subscriberReducer from "./subscribers/reducer"
import toDoListReducer from "./todoList/reducer";
import likeReducer from "./views/reducer"

const rootReducer = combineReducers({
  subscribers: subscriberReducer,
  likes: likeReducer,
  todolist: toDoListReducer
})

export default rootReducer;