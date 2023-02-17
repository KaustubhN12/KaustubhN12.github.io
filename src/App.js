
import { Box } from '@chakra-ui/react';
import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';

function App() {
  return (

    <Box maxW={"100vw"}>
      <Navbar />
      <Box maxWidth={{ base: "96vw", lg: "90vw" }} margin="auto">
        <Home />
      </Box>
    </Box>

  );
}

export default App;
