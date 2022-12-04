import { Button, Container, HStack, Stack } from "@chakra-ui/react";
import "./App.css";
import CountConatiner from "./components/CountContainer";
import ListControl from "./components/ListControl";
import { CountListContext, useCountList } from "./context/countList";

function App() {

  const countList = useCountList()

  return (
    <CountListContext.Provider value={countList}>
      <Container>
        <ListControl/>
      </Container>
      <Container>
        {countList.countList.map((val, index) => <CountConatiner key={index} />)}
      </Container>
    </CountListContext.Provider>
  );
}

export default App;
