import { ADD_LIKE } from "./action"

const initialState = {
  count: 0,
}

const likeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LIKE:
      return {
        ...state,
        count: state.count + 1,
      }
    default:
      return state;
  }
}

export default likeReducer;