import React from 'react'
import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Text,
  Icon,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useBreakpointValue,
} from '@chakra-ui/react'
import { Header } from '../../components'
import { Sidebar } from '../../components/Sidebar/Sidebar'
import { RiAddLine, RiPencilLine } from 'react-icons/ri'
import Pagination from '../../components/Pagination/Pagination'

const UsersPage = () => {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })
  return (
    <Box>
      <Header />

      <Flex my="6" mx="auto" px={['4', '4', '6']} w="100%" maxWidth={1480}>
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justifyContent="space-between" alignItems="center">
            <Heading size="lg" fontWeight="normal">
              Usuários
            </Heading>
            <Button
              as="a"
              size="sm"
              fontSize="sm"
              colorScheme="pink"
              leftIcon={<Icon as={RiAddLine} />}
              cursor="pointer"
            >
              Criar novo usuário
            </Button>
          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px={['0', '4', '6']} color="gray.300" width="8">
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>Usuário</Th>
                {isWideVersion && <Th>Data de cadastro</Th>}
                {isWideVersion && <Th width="8"></Th>}
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px={['0', '4', '6']}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td pl={['0', '5']}>
                  <Box>
                    <Text fontWeight="bold">Ricardo Ruiz</Text>
                    <Text fontSize={['xs', 'sm']} color="gray.300">
                      ricardo.almendro.ruiz@gmail.com
                    </Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>04 de Abril, 2021</Td>}
                {isWideVersion && (
                  <Td>
                    <Button
                      as="a"
                      size="sm"
                      fontSize="sm"
                      colorScheme="purple"
                      leftIcon={
                        <Icon as={RiPencilLine} fontSize={[10, 12, 16]} />
                      }
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      cursor="pointer"
                    >
                      <Text fontSize={[10, 12, 16]}>Editar</Text>
                    </Button>
                  </Td>
                )}
              </Tr>
              <Tr>
                <Td px={['0', '4', '6']}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td pl={['0', '5']}>
                  <Box>
                    <Text fontWeight="bold">Ricardo Ruiz</Text>
                    <Text fontSize={['xs', 'sm']} color="gray.300">
                      ricardo.almendro.ruiz@gmail.com
                    </Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>04 de Abril, 2021</Td>}
                {isWideVersion && (
                  <Td>
                    <Button
                      as="a"
                      size="sm"
                      fontSize="sm"
                      colorScheme="purple"
                      leftIcon={
                        <Icon as={RiPencilLine} fontSize={[10, 12, 16]} />
                      }
                      cursor="pointer"
                    >
                      <Text fontSize={[10, 12, 16]}>Editar</Text>
                    </Button>
                  </Td>
                )}
              </Tr>
              <Tr>
                <Td px={['0', '4', '6']}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td pl={['0', '5']}>
                  <Box>
                    <Text fontWeight="bold">Ricardo Ruiz</Text>
                    <Text fontSize={['xs', 'sm']} color="gray.300">
                      ricardo.almendro.ruiz@gmail.com
                    </Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>04 de Abril, 2021</Td>}
                {isWideVersion && (
                  <Td>
                    <Button
                      as="a"
                      size="sm"
                      fontSize="sm"
                      colorScheme="purple"
                      leftIcon={
                        <Icon as={RiPencilLine} fontSize={[10, 12, 16]} />
                      }
                      cursor="pointer"
                    >
                      <Text fontSize={[10, 12, 16]}>Editar</Text>
                    </Button>
                  </Td>
                )}
              </Tr>
            </Tbody>
          </Table>

          <Pagination />
        </Box>
      </Flex>
    </Box>
  )
}

export default UsersPage
