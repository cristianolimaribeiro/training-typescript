import { Box, Button, Center } from "@chakra-ui/react"


interface IButtonCard {
  logon: () => void
}
export const ButtonCard: React.FC<IButtonCard>  = ( { logon }) => {

  return (
    <Box>
      <Center>
        <Button
          colorScheme='teal'
          size='md'
          onClick={logon}
        >
          Entrar
        </Button>
      </Center>

    </Box>
  )
}