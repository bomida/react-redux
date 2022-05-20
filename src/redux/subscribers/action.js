export const ADD_SUBSCRIBERS = "ADD_SUBSCRIBERS";
export const REMOVE_SUBSCRIBERS = "REMOVE_SUBSCRIBERS";

export const addSubscriber = () => {
  return {
    type: ADD_SUBSCRIBERS
  }
}
export const removeSubscriber = () => {
  return {
    type: REMOVE_SUBSCRIBERS
  }
}