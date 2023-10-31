
import { Layout } from "./components/Layout/Layout";
import {
  ChakraProvider,
  Input,
  Box,
  Center,
  Button,
  Flex,
  Text
} from "@chakra-ui/react";


function App() {
  return (
    <ChakraProvider>
      <Layout>
        <Flex
          direction='column'
          justify='center'
          align='center'
          minHeight='100vh'
          backgroundColor='#592D75'
          padding='25px'
        >
          <Box
            backgroundColor='#fff'
            padding='25px'
            borderRadius='16px'
          >
            <Center>
              <Text as='b' fontSize='2xl' marginBottom='16px'>
                Faça Login
              </Text>
            </Center>
            <Input
              placeholder="E-mail"
              type="text"
              marginBottom='16px'
              autoComplete="off"
            />
            <Input
              placeholder="Password"
              type="password"
              marginBottom='16px'
              autoComplete="off"
            />
            <Box>
              <Center>
                <Button colorScheme='teal' size='md'>
                  Entrar
                </Button>
              </Center>

            </Box>
          </Box>
        </Flex>
      </Layout>

    </ChakraProvider>
  );
}

export default App;
