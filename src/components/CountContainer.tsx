import { Container, Stack } from "@chakra-ui/react";
import { CountContext, useCount } from "../context/count";
import CountButton from "./CountButton";
import DataDisplay from "./DataDisplay";

type CountConatinerProps = {
  id: number
}

const CountConatiner: React.FC<CountConatinerProps> = ({id}) => {
  
    const count = useCount(id)

  return (
    <CountContext.Provider value={count}>
      <Container>
        <Stack>
          <DataDisplay />
          <CountButton />
        </Stack>
      </Container>
    </CountContext.Provider>
  );
};

export default CountConatiner