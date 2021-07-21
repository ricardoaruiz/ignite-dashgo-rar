import React, { cloneElement } from 'react'
import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'

type ActiveLinkProps = {
  children: React.ReactElement
  shouldMatchExactHref?: boolean
} & LinkProps

export const ActiveLink = ({
  children,
  shouldMatchExactHref = false,
  ...rest
}: ActiveLinkProps) => {
  const { asPath } = useRouter()

  const isActive = shouldMatchExactHref
    ? asPath === rest.href || asPath === rest.as
    : asPath.startsWith(String(rest.href)) || asPath.startsWith(String(rest.as))

  return (
    <Link {...rest}>
      {cloneElement(children, {
        color: isActive ? 'pink.400' : 'gray.50',
      })}
    </Link>
  )
}
