import React from 'react'
import { Avatar, Box, Flex, Text } from '@chakra-ui/react'

type ProfileProps = {
  showProfileData?: boolean
}

export const Profile = ({ showProfileData = true }: ProfileProps) => {
  return (
    <Flex alignItems="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Ricardo Ruiz</Text>
          <Text color="gray.300" fontSize="small">
            ricardo.almendro.ruiz@gmail.com
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="Ricardo Ruiz"
        src="https://github.com/ricardoaruiz.png"
      />
    </Flex>
  )
}
