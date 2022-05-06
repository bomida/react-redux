import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";

// const middelware = [logger, thunk];

// const store = createStore(rootReducer, applyMiddleware(...middelware));
const store = configureStore({
  reducer: rootReducer,
  middleware: [logger, thunk]
});

export default store;