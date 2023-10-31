import { useState } from "react";
import { login } from "../../services/login";
import { ButtonCard } from "../ButtonCard/ButtonCard";
import { Layout } from "../Layout/Layout";
import {
  Input,
  Box,
  Center,
  Flex,
  Text
} from "@chakra-ui/react";

export const Card = () => {
  const [username, SetUsername] = useState<string>('')
  const [password, SetPassword] = useState<string>('')
  
 const handleLogin = () => {
  login(username)
 }
 const handleInputUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
  SetUsername(e.target.value)
 }
  return (
    <Layout>
      <Flex
        direction='column'
        justify='flex-start'
        align='center'
        minHeight='100vh'
        backgroundColor='#592D75'
        padding='25px'
        position='relative'
        top='8.5rem'
        bottom='3.5rem'
        >
        <Box
          marginTop='60px'
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
            value={username}
            onChange={handleInputUsername}
          />
          <Input
            placeholder="Password"
            type="password"
            marginBottom='16px'
            value={password}
            onChange={(e) => SetPassword(e.target.value)}
            autoComplete="off"
          />
          <ButtonCard logon={handleLogin}/>
        </Box>
      </Flex>
    </Layout>

  )
}