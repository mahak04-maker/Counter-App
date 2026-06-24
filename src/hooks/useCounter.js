import { useState } from "react";

function useCounter(initialValue, step = 1) {
  const [count, setCount] = useState(initialValue);

  const increment = () => {
    setCount((prev) => prev + step);
  };

  const decrement = () => {
    setCount((prev) => prev - step);
  };

  const reset = () => {
    setCount(initialValue);
  };

  return {
    count,
    increment,
    decrement,
    reset,
  };
}

export default useCounter;