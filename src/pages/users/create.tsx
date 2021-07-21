import React from 'react'
import Link from 'next/link'
import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  VStack,
} from '@chakra-ui/react'

import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { Header, Input } from '../../components'
import { Sidebar } from '../../components/Sidebar/Sidebar'
import { SubmitHandler, useForm } from 'react-hook-form'

type CreateUserFormData = {
  name: string
  email: string
  password: string
  passwordConfirmation: string
}

const createUserFormSchema = yup.object().shape({
  name: yup.string().required('Campo obrigatório'),
  email: yup.string().email('E-mail inválido').required('Campo obrigatório'),
  password: yup
    .string()
    .min(4, 'A senha deve ter entre 4 e 8 caracteres')
    .max(8, 'A senha deve ter entre 4 e 8 caracteres'),
  passwordConfirmation: yup.string().when('password', {
    is: (val: string) => (val && val.length > 0 ? true : false),
    then: yup
      .string()
      .oneOf([yup.ref('password')], 'As senhas devem ser iguais'),
  }),
})

const CreateUsersPage = () => {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(createUserFormSchema),
  })
  const { errors } = formState

  const handleCreateUser: SubmitHandler<CreateUserFormData> = React.useCallback(
    async (values) => {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      console.log('values', values)
    },
    []
  )

  return (
    <Box>
      <Header />

      <Flex my="6" mx="auto" px="6" w="100%" maxWidth={1480}>
        <Sidebar />

        <Box
          flex="1"
          borderRadius={8}
          bg="gray.800"
          p={['6', '8']}
          as="form"
          onSubmit={handleSubmit(handleCreateUser)}
        >
          <Heading size="lg" fontWeight="normal">
            Criar usuário
          </Heading>
          <Divider my="6" borderColor="gray.700" />

          <VStack spacing="12">
            <SimpleGrid minChildWidth="240px" spacing={['8', '12']} w="100%">
              <Input
                name="name"
                label="Nome completo"
                {...register('name')}
                error={errors.name}
              />
              <Input
                name="email"
                label="E-mail"
                type="email"
                {...register('email')}
                error={errors.email}
              />
            </SimpleGrid>
            <SimpleGrid minChildWidth="240px" spacing={['8', '12']} w="100%">
              <Input
                name="password"
                label="Senha"
                type="password"
                {...register('password')}
                error={errors.password}
              />
              <Input
                name="passwordConfirmation"
                label="Confirmação de senha"
                type="password"
                {...register('passwordConfirmation')}
                error={errors.passwordConfirmation}
              />
            </SimpleGrid>
          </VStack>
          <Flex mt="16" justifyContent="flex-end">
            <HStack spacing="4">
              <Link href="/users" passHref>
                <Button as="a" colorScheme="whiteAlpha">
                  Cancelar
                </Button>
              </Link>
              <Button
                colorScheme="pink"
                type="submit"
                isLoading={formState.isSubmitting}
              >
                Salvar
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}

export default CreateUsersPage
