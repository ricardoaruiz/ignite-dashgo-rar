import React from 'react'
import { Flex } from '@chakra-ui/react'
import { Logo } from './Logo'
import { InputSearch } from './InputSearch'

export const Header = () => {
  return (
    <Flex
      as="header"
      w="100%"
      maxW={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      alignItems="center"
    >
      <Logo />
      <InputSearch />
    </Flex>
  )
}
