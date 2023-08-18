import React from "react";
import { increment, decrement, incrementByAmount } from "../stores/Counter";
import { useDispatch } from "react-redux";

const CounterAction = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(increment())}>Arttır (+)</button>
      <button onClick={() => dispatch(decrement())}>Azalt (-)</button>
      <button onClick={() => dispatch(incrementByAmount(4))}>
        (+)4 arttır
      </button>
    </div>
  );
};

export default CounterAction;
