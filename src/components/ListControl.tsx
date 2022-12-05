import { Button, HStack } from "@chakra-ui/react";
import { useContext } from "react";
import { CountListContext } from "../context/countList";

const ListControl: React.FC = () => {

    const {countList, setisCountList} = useContext(CountListContext)

    const addListClickHandler = () => {
        setisCountList([...countList, 0])
    }

    const allRemoveListClickHandler = () => {
        setisCountList([0])
    }

  return (
    <HStack justifyContent="center">
      <Button onClick={addListClickHandler}>追加</Button>
      <Button onClick={allRemoveListClickHandler}>全削除</Button>
    </HStack>
  );
};

export default ListControl