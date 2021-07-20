import React from 'react'
import { Flex, useBreakpointValue } from '@chakra-ui/react'
import { Logo } from './Logo/Logo'
import { Notifications } from './Notifications/Notifications'
import { Profile } from './Profile/Profile'
import { SearchBox } from './SearchBox/SearchBox'

export const Header = () => {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

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

      {isWideVersion && <SearchBox />}

      <Flex alignItems="center" ml="auto">
        <Notifications />
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  )
}
