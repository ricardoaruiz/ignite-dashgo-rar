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
        <NavLink text="Dashboard" icon={RiDashboardLine} href="/dashboard" />
        <NavLink text="Usuários" icon={RiContactsLine} href="/users" />
      </NavSection>
      <NavSection title="AUTOMAÇÃO">
        <NavLink text="Formulários" icon={RiInputMethodLine} href="/forms" />
        <NavLink text="Automação" icon={RiGitMergeLine} href="/automation" />
      </NavSection>
    </VStack>
  )
}
