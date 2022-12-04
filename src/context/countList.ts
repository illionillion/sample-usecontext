import { createContext, useCallback, useState } from "react";

// 型
type CountListContextProps = {
  countList: number[];
  setisCountList: (list: number[]) => void;
};

// コンテキスト
const defaultContext: CountListContextProps = {
  countList: [],
  setisCountList: () => {},
};

export const CountListContext = createContext<CountListContextProps>(defaultContext);

export const useCountList = (): CountListContextProps => {
    const [countList, setCountList] = useState<number[]>([0])
    const setisCountList = useCallback((current: number[]):void => {
        setCountList(current)
    },[])

    return {
        countList,
        setisCountList
    }
}