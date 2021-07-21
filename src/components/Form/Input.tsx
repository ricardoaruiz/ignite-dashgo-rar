import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from '@chakra-ui/react'
import { ForwardRefRenderFunction } from 'react'
import { forwardRef } from 'react'
import { FieldError } from 'react-hook-form'

type InputProps = {
  label?: string
  error?: FieldError
} & ChakraInputProps

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { label, error, ...rest },
  ref
) => {
  return (
    <FormControl h="16" isInvalid={!!error}>
      {label && <FormLabel htmlFor={rest.id}>{label}</FormLabel>}

      <ChakraInput
        focusBorderColor="pink.500"
        bgColor="gray.900"
        variant="filled"
        size="lg"
        _hover={{
          bgColor: 'gray.900',
        }}
        _invalid={{
          borderColor: 'red.600',
        }}
        ref={ref}
        {...rest}
      />

      {error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  )
}

export const Input = forwardRef(InputBase)
