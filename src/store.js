import { createStore } from "redux";
import filtertReducer from "./redux/reducers";

const store = createStore(
  filtertReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
