import React from 'react'
import { Flex, Button, Stack } from '@chakra-ui/react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Input } from '../components'

type SigninFormData = {
  email: string
  password: string
}

export default function Signin() {
  const { register, handleSubmit, formState } = useForm()

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
        <Stack spacing="4">
          <Input
            id="email"
            name="email"
            type="email"
            label="E-mail"
            {...register('email')}
          />
          <Input
            id="password"
            name="password"
            type="password"
            label="Password"
            {...register('password')}
          />
        </Stack>

        <Button
          type="submit"
          mt="6"
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
