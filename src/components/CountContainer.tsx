import { Container, Stack } from "@chakra-ui/react";
import { CountContext, useCount } from "../context/count";
import CountButton from "./CountButton";
import DataDisplay from "./DataDisplay";

const CountConatiner: React.FC = () => {
  
    const count = useCount()

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