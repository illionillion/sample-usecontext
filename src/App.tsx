import { Container } from '@chakra-ui/react';
import React, { createContext, useState } from 'react';
import './App.css';
// import DataDisplay from './components/DataDisplay';
import { CountContext, useCount } from './context/count';

// const count = 0
// export const CountContext = createContext(count)

function App() {

  // const [count, setCount] = useState(0)
  const count = useCount()

  return (
    <CountContext.Provider value={count}>
      <Container>
        {/* ここから渡す */}
        {/* <DataDisplay/> */}

      </Container>
    </CountContext.Provider>
  );
}

export default App;
