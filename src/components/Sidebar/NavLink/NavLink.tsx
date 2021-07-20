import React, { ElementType } from 'react'
import { Icon, Text, Link as ChakraLink, LinkProps } from '@chakra-ui/react'
import { ActiveLink } from '../../ActiveLink/ActiveLink'

type NavLinkProps = {
  icon: ElementType
  text: string
  shouldMatchExactHref?: boolean
} & LinkProps

export const NavLink = ({
  icon,
  text,
  href,
  shouldMatchExactHref = false,
  ...rest
}: NavLinkProps) => {
  return (
    <ActiveLink
      href={href}
      shouldMatchExactHref={shouldMatchExactHref}
      passHref
    >
      <ChakraLink display="flex" alignItems="center" {...rest}>
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">
          {text}
        </Text>
      </ChakraLink>
    </ActiveLink>
  )
}
