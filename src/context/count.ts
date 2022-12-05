import { createContext, useCallback, useState } from "react";

// 型
export type CountContextProps = {
  id: number
  count: number;
  setIsCount: (count: number) => void;
};
// コンテキスト
const defaultContext: CountContextProps = {
  id: 0,
  count: 0,
  setIsCount: () => {},
};

// context object
export const CountContext = createContext<CountContextProps>(defaultContext);

// custom Hook
export const useCount = (id:number): CountContextProps => {
  const [count, setCount] = useState(0);
  const setIsCount = useCallback((current: number): void => {
    setCount(current);
  }, []);
  return {
    id,
    count,
    setIsCount,
  };
};
