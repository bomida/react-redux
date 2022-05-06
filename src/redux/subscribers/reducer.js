import { ADD_SUBSCRIBERS, REMOVE_SUBSCRIBERS } from "./action";


// reducer
const initialState = {
  count: 300,
}

const subscriberReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SUBSCRIBERS:
      return {
        ...state,
        count: state.count + 1
      }
    case REMOVE_SUBSCRIBERS:
      return {
        ...state,
        count: state.count - 1
      }
    default:
      return state;
  }
}

export default subscriberReducer;