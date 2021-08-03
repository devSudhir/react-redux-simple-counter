import { useDispatch, useSelector } from "react-redux";
import { addCounter, subCounter } from "../store/actions.js";
export const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const handleInc = () => {
    dispatch(addCounter(1));
  };
  const handleDec = () => {
    dispatch(subCounter(1));
  };
  return (
    <div>
      <h2>Counter:{counter}</h2>
      <button onClick={handleInc}>Inc</button>
      <button onClick={handleDec}>Dec</button>
    </div>
  );
};
