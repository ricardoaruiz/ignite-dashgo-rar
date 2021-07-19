import React from 'react'
import { Box, Stack } from '@chakra-ui/react'
import { PaginationButton } from './PaginationButton/PaginationButton'

const Pagination = () => {
  return (
    <Stack
      direction="row"
      mt="8"
      justifyContent="space-between"
      alignItems="center"
      spacing="6"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <Stack direction="row" spacing="2">
        <PaginationButton pageNumber={1} isCurrentPage />
        <PaginationButton pageNumber={2} />
        <PaginationButton pageNumber={3} />
        <PaginationButton pageNumber={4} />
        <PaginationButton pageNumber={5} />
        <PaginationButton pageNumber={6} />
      </Stack>
      ;
    </Stack>
  )
}

export default Pagination
