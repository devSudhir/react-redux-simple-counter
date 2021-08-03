import { ADD_COUNTER, SUB_COUNTER } from "./actionTypes.js";

const initState = {
  counter: 0,
  todo: []
};

export const reducerFunction = (state = initState, { type, payload }) => {
  switch (type) {
    case ADD_COUNTER:
      return {
        ...state,
        counter: state.counter + payload.counter
      };
    case SUB_COUNTER:
      return {
        ...state,
        counter: state.counter - payload.counter
      };

    default:
      return state;
  }
};
