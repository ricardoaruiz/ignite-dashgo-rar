import React from 'react'
import { Flex, Button, Stack } from '@chakra-ui/react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { Input } from '../components'

type SigninFormData = {
  email: string
  password: string
}

const signinFormSchema = yup.object().shape({
  email: yup.string().email('E-mail inválido').required('Campo obrigatório'),
  password: yup
    .string()
    .min(4, 'A senha deve ter entre 4 e 8 caracteres')
    .max(8, 'A senha deve ter entre 4 e 8 caracteres'),
})

export default function Signin() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signinFormSchema),
  })
  const { errors } = formState

  const handleSignin: SubmitHandler<SigninFormData> = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    console.log('values', values)
  }

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
        onSubmit={handleSubmit(handleSignin)}
      >
        <Stack spacing="16">
          <Input
            id="email"
            name="email"
            type="text"
            label="E-mail"
            error={errors.email}
            {...register('email')}
          />
          <Input
            id="password"
            name="password"
            type="password"
            label="Password"
            error={errors.password}
            {...register('password')}
          />
        </Stack>

        <Button
          type="submit"
          mt="16"
          colorScheme="pink"
          size="lg"
          isLoading={formState.isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
