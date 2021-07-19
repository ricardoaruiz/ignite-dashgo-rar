import React from 'react'
import { Flex } from '@chakra-ui/react'
import { Logo } from './Logo/Logo'
import { Notifications } from './Notifications/Notifications'
import { Profile } from './Profile/Profile'
import { SearchBox } from './SearchBox/SearchBox'

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
      <SearchBox />

      <Flex alignItems="center" ml="auto">
        <Notifications />
        <Profile />
      </Flex>
    </Flex>
  )
}
