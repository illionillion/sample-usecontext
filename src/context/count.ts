import { createContext, useCallback, useState } from "react";

// 型
type CountContextProps = {
  count: number;
  setIsCount: (count: number) => void;
};
// コンテキスト
const defaultContext: CountContextProps = {
  count: 0,
  setIsCount: () => {},
};

// context object
export const CountContext = createContext<CountContextProps>(defaultContext);

// custom Hook
export const useCount = (): CountContextProps => {
  const [count, setCount] = useState(0);
  const setIsCount = useCallback((current: number): void => {
    setCount(current);
  }, []);
  return {
    count,
    setIsCount,
  };
};
