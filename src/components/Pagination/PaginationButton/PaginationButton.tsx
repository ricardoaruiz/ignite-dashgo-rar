import React from 'react'
import { Button, ButtonProps } from '@chakra-ui/react'

type PaginationButtonProps = {
  isCurrentPage?: boolean
  pageNumber: number
} & ButtonProps

export const PaginationButton = ({
  pageNumber,
  isCurrentPage = false,
  ...rest
}: PaginationButtonProps) => {
  if (isCurrentPage) {
    return (
      <Button
        size="sm"
        fontSize="xs"
        width="4"
        colorScheme="pink"
        _disabled={{
          bgColor: 'pink.500',
          cursor: 'default',
        }}
        {...rest}
      >
        {pageNumber}
      </Button>
    )
  }

  return (
    <Button
      size="sm"
      fontSize="xs"
      width="4"
      bgColor="gray.700"
      _hover={{
        bgColor: 'gray.500',
      }}
    >
      {pageNumber}
    </Button>
  )
}
