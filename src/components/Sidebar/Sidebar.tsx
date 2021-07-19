import React from 'react'
import { Box, VStack } from '@chakra-ui/react'
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from 'react-icons/ri'

import { NavLink } from './NavLink/NavLink'
import { NavSection } from './NavSection/NavSection'

export const Sidebar = () => {
  return (
    <Box as="aside" w="64" mr="8">
      <VStack spacing="12" align="flex-start">
        <NavSection title="GERAL">
          <NavLink text="Dashboard" icon={RiDashboardLine} />
          <NavLink text="Usuários" icon={RiContactsLine} />
        </NavSection>
        <NavSection title="AUTOMAÇÃO">
          <NavLink text="Formulários" icon={RiInputMethodLine} />
          <NavLink text="Automação" icon={RiGitMergeLine} />
        </NavSection>
      </VStack>
    </Box>
  )
}
