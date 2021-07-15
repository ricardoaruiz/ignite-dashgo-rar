import React from 'react'
import {
  Flex,
  Input,
  FormLabel,
  FormControl,
  Button,
  Stack,
} from '@chakra-ui/react'

export default function Home() {
  return (
    <Flex
      width="100vw"
      height="100vh"
      justifyContent="center"
      alignItems="center"
    >
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDirection="column"
      >
        <Stack spacing="4">
          <FormControl>
            <FormLabel htmlFor="email">E-mail</FormLabel>
            <Input
              name="email"
              type="email"
              focusBorderColor="pink.500"
              bgColor="gray.900"
              variant="filled"
              size="lg"
              _hover={{
                bgColor: 'gray.900',
              }}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="password">Pasword</FormLabel>
            <Input
              name="password"
              type="password"
              focusBorderColor="pink.500"
              bgColor="gray.900"
              variant="filled"
              size="lg"
              _hover={{
                bgColor: 'gray.900',
              }}
            />
          </FormControl>
        </Stack>

        <Button type="submit" mt="6" colorScheme="pink" size="lg">
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
