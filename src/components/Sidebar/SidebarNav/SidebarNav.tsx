import React from 'react'
import { VStack } from '@chakra-ui/react'
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from 'react-icons/ri'

import { NavLink } from '../NavLink/NavLink'
import { NavSection } from '../NavSection/NavSection'

export const SidebarNav = () => {
  return (
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
  )
}
