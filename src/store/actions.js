import { ADD_COUNTER, SUB_COUNTER } from "./actionTypes.js";

export const addCounter = (counter) => {
  return {
    type: ADD_COUNTER,
    payload: {
      counter
    }
  };
};

export const subCounter = (counter) => {
  return {
    type: SUB_COUNTER,
    payload: {
      counter
    }
  };
};
