import React, { ElementType } from 'react'
import { Icon, Text, Link, LinkProps } from '@chakra-ui/react'

type NavLinkProps = {
  icon: ElementType
  text: string
} & LinkProps

export const NavLink = ({ icon, text, ...rest }: NavLinkProps) => {
  return (
    <Link display="flex" alignItems="center" {...rest}>
      <Icon as={icon} fontSize="20" />
      <Text ml="4" fontWeight="medium">
        {text}
      </Text>
    </Link>
  )
}
