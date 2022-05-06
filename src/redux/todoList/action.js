import { createAction } from "@reduxjs/toolkit";

// export const ADD_TODO = "ADD_TODO";
// export const DELETE_TODO = "DELETE_TODO";

// const addToDo = (text) => {
//   return {
//     type: ADD_TODO,
//     text
//   }
// }

// const deleteToDo = (id) => {
//   return {
//     type: DELETE_TODO,
//     id: parseInt(id)
//   }
// }

export const addToDo = createAction("ADD_TODO");
export const deleteToDo = createAction("DELETE_TODO");

export const actionCreators = {
  addToDo,
  deleteToDo,
};