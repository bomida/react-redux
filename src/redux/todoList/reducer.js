import { addToDo, deleteToDo } from "./action";

const toDoListReducer = (state = [], action) => {
  switch (action.type) {
    case addToDo.type:
      // action.text대신 payload를 이용해 전달이 가능하다.
      const newToDoObj = { text: action.payload, id: Date.now() };
      return [...state, newToDoObj];
    case deleteToDo.type:
      // 위의 text와 같이 id를 대신해 payload를 이용해 전달을 할 수 있다.
      return state.filter(toDo => toDo.id !== action.payload);
    default:
      return state;
  }
}

export default toDoListReducer;