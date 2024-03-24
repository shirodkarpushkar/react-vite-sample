import { useCallback, useState } from "react";
/**
 * A custom hook to manage a count state
 * @returns count: number, incrementCount: () => void
 */
const useCount = () => {
  const [count, setCount] = useState(0);
  const incrementCount = useCallback(() => {
    setCount((count) => count + 1);
  }, []);
  return { count, incrementCount };
};
export default useCount;
