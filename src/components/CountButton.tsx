import { Button, HStack } from "@chakra-ui/react";
import { useContext } from "react";
import { CountContext } from "../context/count";

const CountButton: React.FC = () => {
  const { count, setIsCount } = useContext(CountContext);
  const handleClickPlus = () => {
    setIsCount(count + 1); // Context値更新
  };
  const handleClickMinus = () => {
    setIsCount(count - 1); // Context値更新
  };
  return (
    <HStack justifyContent="center">
      <Button onClick={handleClickPlus}>+</Button>
      <Button onClick={handleClickMinus}>-</Button>
    </HStack>
  );
};

export default CountButton;
