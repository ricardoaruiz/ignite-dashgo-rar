import React from 'react'
import { Flex, Icon, Input } from '@chakra-ui/react'
import { BiSearchAlt } from 'react-icons/bi'

export const SearchBox = () => {
  return (
    <Flex
      as="label"
      flex="1"
      py="4"
      px="8"
      ml="6"
      maxWidth={400}
      alignSelf="center"
      color="gray.200"
      position="relative"
      bg="gray.800"
      borderRadius="full"
    >
      <Input
        placeholder="Buscar na plataforma"
        color="gray.50"
        px="1"
        mr="2"
        variant="unstyled"
        _placeholder={{ color: 'gray.400' }}
      />
      <Icon as={BiSearchAlt} fontSize="20" />
    </Flex>
  )
}
