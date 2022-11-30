import { Container, Stack } from '@chakra-ui/react';
import './App.css';
import CountButton from './components/CountButton';
import DataDisplay from './components/DataDisplay';
import { CountContext, useCount } from './context/count';

function App() {

  const count = useCount()

  return (
    <CountContext.Provider value={count}>
      <Container>
        <Stack>
          <DataDisplay/>
          <CountButton/>
        </Stack>
      </Container>
    </CountContext.Provider>
  );
}

export default App;
