import { render } from '@testing-library/react'
import { ChakraProvider } from '@chakra-ui/react'

import { theme } from '../styles/theme'

export const renderWithTheme = (children: React.ReactNode) => {
  return render(
    <ChakraProvider resetCSS theme={theme}>
      {children}
    </ChakraProvider>
  )
}
