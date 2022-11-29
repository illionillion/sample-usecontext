import { createContext, useCallback, useState } from "react";

type CountContextProps = {
  count: number;
  setIsCount: (count: number) => void;
};

const defaultContext: CountContextProps = {
  count: 0,
  setIsCount: () => {},
};

export const CountContext = createContext<CountContextProps>(defaultContext);

// custom Hook
export const useCount = (): CountContextProps => {
  // state名はThemeContext typeのプロパティに合わせる。
  const [count, setCount] = useState(0);
  // 関数名はThemeContext typeのプロパティに合わせる。
  const setIsCount = useCallback((current: number): void => {
    setCount(current);
  }, []);
  return {
    count,
    setIsCount,
  };
};
