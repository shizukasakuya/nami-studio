import React from 'react';
import {
  ChakraProvider,
  Box,
  VStack,
  Center,
  theme,
} from '@chakra-ui/react';

import {MenuItems} from "./menu-items"
import { Header } from './header';
import { Footer } from './footer';
import {Content} from "./Content"

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Center>
        <VStack width={[ "100%", 5/6, 6/7, 'container.md' ]} spacing="0" >
          <Box h={["7vh", "15vh"]} w="inherit">
            <Header/>
          </Box>
          <Box h={["90vh", "80vh"]} w="inherit" overflowY="auto" >
            <Content/>
          </Box>
          <Box h={["3vh", "3vh"]} w="inherit" >
            <Footer/>
          </Box>
        </VStack>
      </Center>
    </ChakraProvider>
  );
}

export default App;
