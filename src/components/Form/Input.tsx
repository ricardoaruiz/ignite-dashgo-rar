import {
  FormControl,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from '@chakra-ui/react'

type InputProps = {
  label?: string
} & ChakraInputProps

export const Input = ({ label, ...rest }: InputProps) => {
  return (
    <FormControl>
      {label && <FormLabel htmlFor={rest.id}>{label}</FormLabel>}

      <ChakraInput
        {...rest}
        focusBorderColor="pink.500"
        bgColor="gray.900"
        variant="filled"
        size="lg"
        _hover={{
          bgColor: 'gray.900',
        }}
      />
    </FormControl>
  )
}

export default Input
