import { Flex, Text, Image } from '@chakra-ui/react'

export const Header = () => {
  return (
    <Flex
      minHeight='8.5rem'
      justify='center'
      align='center'
      bgColor='orange'
      position= 'fixed'
      width='100%'
      top='0'
    >
      <Flex
        justify='center'
        align='center'
      >
        <Image
          src='https://hermes.digitalinnovation.one/assets/diome/logo-full.svg'
          alt='Logo Dio'
          boxSize='160px'
        />
        <Text
          fontSize='6xl'
          marginLeft='1rem'
          color='#fff'
        >
          Bank
        </Text>
      </Flex>
    </Flex>
  )
}
