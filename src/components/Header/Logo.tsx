import React from 'react'
import { Text } from '@chakra-ui/react'

export const Logo = () => {
  return (
    <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight" w="64">
      dashgo
      <Text as="span" color="pink.500" fontWeight="bold" fontSize="3xl" ml="1">
        .
      </Text>
    </Text>
  )
}
