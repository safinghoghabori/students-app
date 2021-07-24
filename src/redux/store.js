import { createStore, combineReducers } from "redux";

import { studentReducer } from "./reducers/studentReducer";

// const reducers = combineReducers({
//   students: studentReducer,
// });

//store state in localStorage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (e) {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (e) {
    // return undefined
    console.log(e);
  }
};
const persistedState = loadState();

const store = createStore(studentReducer, persistedState);

//store state in localStorage
store.subscribe(() => {
  saveState(store.getState());
});

export default store;
