import { Flex, Link, Text } from "@chakra-ui/react"

export const Footer = () => {
  return (
    <Flex
      minHeight='3.5rem'
      justify='center'
      align='center'
      bgColor='orange'
      position='fixed'
      width='100%'
      bottom='0'
    >
      <Flex
        justify='center'
        align='center'
      >

        <Text
          marginLeft='1rem'
          color='#fff'
        >
          feito por &nbsp;
          <Link href="https://github.com/cristianolimaribeiro" isExternal>
             Cristiano Lima
          </Link>
          &nbsp;by&nbsp;
          <Link href="https://web.dio.me/home" isExternal>
            Dio
          </Link>
        </Text>
      </Flex>
    </Flex>
  )
}
