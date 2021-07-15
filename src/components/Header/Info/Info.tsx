import React from 'react'
import { Flex, Icon, HStack, Box, Text, Avatar } from '@chakra-ui/react'
import { RiNotificationLine, RiUserAddLine } from 'react-icons/ri'

export const Info = () => {
  return (
    <Flex alignItems="center" ml="auto">
      <HStack
        spacing="8"
        mx="8"
        pr="8"
        py="1"
        color="gray.300"
        borderRightWidth={1}
        borderColor="gray.700"
      >
        <Icon as={RiNotificationLine} fontSize="20" />
        <Icon as={RiUserAddLine} fontSize="20" />
      </HStack>

      <Flex alignItems="center">
        <Box mr="4" textAlign="right">
          <Text>Ricardo Ruiz</Text>
          <Text color="gray.300" fontSize="small">
            ricardo.almendro.ruiz@gmail.com
          </Text>
        </Box>
        <Avatar
          size="md"
          name="Ricardo Ruiz"
          src="https://github.com/ricardoaruiz.png"
        />
      </Flex>
    </Flex>
  )
}
