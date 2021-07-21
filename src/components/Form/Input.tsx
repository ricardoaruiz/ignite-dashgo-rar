import {
  FormControl,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from '@chakra-ui/react'
import { ForwardRefRenderFunction } from 'react'
import { forwardRef } from 'react'

type InputProps = {
  label?: string
} & ChakraInputProps

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { label, ...rest },
  ref
) => {
  console.log(rest.id)
  return (
    <FormControl>
      {label && <FormLabel htmlFor={rest.id}>{label}</FormLabel>}

      <ChakraInput
        focusBorderColor="pink.500"
        bgColor="gray.900"
        variant="filled"
        size="lg"
        _hover={{
          bgColor: 'gray.900',
        }}
        ref={ref}
        {...rest}
      />
    </FormControl>
  )
}

export const Input = forwardRef(InputBase)
